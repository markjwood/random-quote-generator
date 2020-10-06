/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "It is easy to be brave from a safe distance.",
    source: "Aesop",
  },
  {
    quote: "If it’s true that our species is alone in the universe, then I’d have to say the universe aimed rather low and settled for very little.",
    source: "George Carlin",
    citation: "Napalm & Silly Putty",
    year: 2001
  },
  {
    quote: "There is more stupidity than hydrogen in the universe, and it has a longer shelf life.",
    source: "Frank Zappa"
  },
  {
    quote: "Life is what happens to you when you're busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy (Darling Boy)",
    year: 1980
  },
  {
    quote: "My powers are ordinary. Only my application brings me success.",
    source: "Isaac Newton"
  },
  {
    quote: "If you wish to make an apple pie from scratch, you must first invent the universe.",
    source: "Carl Sagan"
  },
  {
    quote: "Skeptical scrutiny is the means, in both science and religion, by which deep thoughts can be winnowed from deep nonsense.",
    source: "Carl Sagan"
  },
  {
    quote: "Do the right thing. It will gratify some people and astonish the rest.",
    source: "Mark Twain"
  },
  {
    quote: "If it's your job to eat a frog, it's best to do it first thing in the morning. And If it's your job to eat two frogs, it's best to eat the biggest one first.",
    source: "Mark Twain"
  },
  {
    quote: "He is a wise man who does not grieve for the things he has not, but rejoices for those which he has.",
    source: "Epictetus"
  },
  {
    quote: "If you don't know where you are going, you might wind up someplace else.",
    source: "Yogi Berra"
  },
  {
    quote: "Half the lies they tell about me aren't true.",
    source: "Yogi Berra"
  },
  {
    quote: "If people don't want to come to the ballpark, how are you going to stop them?",
    source: "Yogi Berra"
  },
  {
    quote: "Weather forecast for tonight: dark.",
    source: "George Carlin"
  },
  {
    quote: "I get a kick out of being an outsider constantly. It allows me to be creative.",
    source: "Bill Hicks"
  },
  {
    quote: "When the going gets weird, the weird turn pro.",
    source: "Hunter S. Thompson"
  },
  {
    quote: "The Edge... there is no honest way to explain it because the only people who really know where it is are the ones who have gone over.",
    source: "Hunter S. Thompson"
  },
  {
    quote: "Yesterday's weirdness is tomorrow's reason why.",
    source: "Hunter S. Thompson"
  },
  {
    quote: "'Crazy' is a term of art; 'Insane' is a term of law. Remember that, and you will save yourself a lot of trouble.",
    source: "Hunter S. Thompson"
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  let number = Math.floor(Math.random() * (array.length) );
  return array[number];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  console.log( randomQuote ); //testing
  let quoteCite = randomQuote.citation;
  let quoteYear = randomQuote.year;
  let quoteSource = randomQuote.source;

  if ( quoteCite ) { 
    quoteSource += `<span class="citation">${quoteCite}</span>`;
  }
  if ( quoteYear ) {
    quoteSource += `<span class="year">${quoteYear}</span>`;
  } 

  document.querySelector( '.quote' ).innerHTML = randomQuote.quote;
  document.querySelector( '.source' ).innerHTML = quoteSource;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);