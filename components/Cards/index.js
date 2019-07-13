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

const articles = document.querySelector('.cards-container')
console.log('article', articles);

// GET request
axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(data => {
   
   data.data.articles.forEach(props => {
    console.log('cards', props)   
    
    articles.appendChild(getCards(props))
   })
}).catch(error => console.error('Cards error', error))

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function getCards(props){

// Created elements
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imageContainer = document.createElement('div');
const image = document.createElement('img');
const byLine = document.createElement('span');

//Created structure
card.appendChild(headline)
card.appendChild(author)
card.appendChild(imageContainer)
imageContainer.appendChild(image)
card.appendChild(byLine)

//Added classes
card.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
imageContainer.classList.add('imageContainer')

//Set the content
headline.textContent = props.headline
image.src = props.authorPhoto_url
byLine.textContent = `By: ${props.authorName}`

return card

}