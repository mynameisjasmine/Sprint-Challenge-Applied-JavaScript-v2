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
//Created GET request
 const promise =
 axios.get(`https://lambda-times-backend.herokuapp.com/topics`)

 //Console logged data and reviewed structure
 promise
 .then(data => {
    console.log('response', data)
    const tabData = data.data.topics
// Iterated over the topics creating a new Tab component
tabData.forEach(tab => { new Tabs(tab,Tabs)
    const addTab = Tabs()
    topics.appendChild(addTab)
   })
   
 })


//const elementTwo = Tabs()
//topics.appendChild(Tabs())




// Created tab function

//The tab component should look like this:
//    <div class="tab">topic here</div>


function Tabs(tab) {

//Added element
const tabs = document.createElement('div')

//Added class
tabs.classList.add('tab')







}