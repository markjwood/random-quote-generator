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
    year: 2001,
    tags: `#humor`
  },
  {
    quote: "There is more stupidity than hydrogen in the universe, and it has a longer shelf life.",
    source: "Frank Zappa"
  },
  {
    quote: "Life is what happens to you when you're busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy (Darling Boy)",
    year: 1980,
    tags: '#lyrics #inspirational'
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
    source: "Mark Twain",
    tags: `#inspirational`
  },
  {
    quote: "He is a wise man who does not grieve for the things he has not, but rejoices for those which he has.",
    source: "Epictetus",
    tags: `#stoicism`
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
    source: "George Carlin",
    tags: `#humor`
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
 * `randomNumber` function
 * Returns a random integer between two numbers
 * 
 * @param {integer} min - The minimum number.
 * @param {integer} max - The maximum number.
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/***
 * `randomColor` function
 * Generates a random rgb color code.
 */
function randomColor() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

/***
 * `getRandomQuote` function
 * Chooses a random quote object from an array.
***/

function getRandomQuote(array) {
  const number = randomNumber(0, array.length);
  return array[number];
}

/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote(quotes);

  let htmlQuote = `<p class="quote">${randomQuote.quote}</p>`;
  htmlQuote += `<p class="source">${randomQuote.source}`;

  if ( randomQuote.citation ) { // Add citation if it exists
    htmlQuote += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomQuote.year ) { // Add year if it exists
    htmlQuote += `<span class="year">${randomQuote.year}</span>`;
  }
  if ( randomQuote.tags ) { // Add tags if they exist
    htmlQuote += `
      </p>
      <p class="tags"><strong>Tags: </strong>${randomQuote.tags}
    `;
  }
  htmlQuote += '</p>'; // close paragraph

  document.getElementById( 'quote-box' ).innerHTML = htmlQuote;

  // Change background to a random color
  document.querySelector('body').style.backgroundColor = randomColor();

  /* Re-start interval timer.
   * Prevents immediate refresh after clicking button.
   */
  clearInterval(interval);
  interval = setInterval(printQuote, 20000);
}

// Refresh quote every 20 seconds
let interval = setInterval(printQuote, 20000); 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);