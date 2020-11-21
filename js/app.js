var tweets = document.querySelectorAll('.tweet');

// querySelectorAll()
for(var i=0; i < tweets.length; i++) {
    tweets[i].style.backgroundColor = 'navy';
    tweets[i].style.color = 'white';
}

// getElementById()
var firstTweet = document.getElementById('first-tweet');
firstTweet.style.backgroundColor = 'royalblue';


//querySelector()
var firstTime = document.querySelector('.tweet .time');
firstTime.innerHTML = 'A few seconds ago';


// getElementsByClassName()
var message = document.getElementsByClassName('messages')
for(var i=0; i< allMessage.length; i++)
    allMessage[i].innerHTML = "Changed element tags in messages"

// getElementsByTagName
let h4 = document.getElementsByTagName('h4');
for(var index = 0; i < h4.length; i++) {
    h4[i].style.fontSize = "1.5 rem";
}

// createElement()
var heading = document.createElement('h1');
var page = document.querySelector('.page');
heading.innerText = "Donald's Tweets";
page.prepend(heading);

// remove(selectparent then select cheid then cll that remove child)
let firstTweet = document.getElementById("first-tweet");
let thumbnail = document.getElementById("thumbnail");
firstTweet. removeChild(thumbnail);

// classList add(), remove(), toggle()
var tweets = document.getElementsByClassName('tweet');
for(var i=0; i < tweets.length; i++) {
    tweets[i].classList.add('hoverable');
    tweets[i].addEventListener('click', function() {
        this.classList.toggle('faded');
    })
}

let tweets = document.getElementById("tweets");
tweets.classList.remove (tweet);