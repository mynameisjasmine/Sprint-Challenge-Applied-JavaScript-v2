// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

let query = [
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
]

query.forEach(tab => {
 tab
 .then(repsonse => {
    console.log('response', response);
    tabInfo = response.data.topics
    topics.appendChild(Tabs(tabInfo))
});

    
})
console.log(topics);

// Created tab function

function Tabs(array) {

const tabDiv = document.createComment('div')
// tabDiv.classList.add('tab')



return tabDiv
    
}



 



