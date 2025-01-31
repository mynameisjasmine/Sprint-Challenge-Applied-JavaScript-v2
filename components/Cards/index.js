// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

const cardContainer = document.querySelector('.cards-container');

axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
 const topics = Object.keys(response.data.articles)
 
 topics.forEach(topic => {
    response.data.articles[topic].forEach(props => {
    const newArticles = Cards(props);
    cardContainer.appendChild(newArticles)
})
   })
     
})




/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div> */
// </div>

function Cards(props) {

const card = document.createElement("div")
const headline = document.createElement("div")
const author = document.createElement("div")
const container = document.createElement("div")
const images = document.createElement("img")
const byline = document.createElement("span")

card.appendChild(headline)
card.appendChild(author)
author.appendChild(container)
container.appendChild(images)
author.appendChild(byline)


card.classList.add("card");
headline.classList.add("headline");
author.classList.add("author");
container.classList.add("img-container");

headline.textContent = props.headline
images.src = props.authorPhoto
byline.textContent = `By${props.authorName}`

return card

}