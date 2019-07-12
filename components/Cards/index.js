// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles


// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// GET request
const cardsPromise = 
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
cardsPromise
.then(data => {
   console.log('response for cards', data)
   const cardData = data.data
})

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function getCards(){

// Created elements
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imageContainer = document.createElement('div');
const image = document.createElement('img');
const byLine = document.createElement('span');

//Created structure
card.appendChild(headline)
}