// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// Created tab function

//The tab component should look like this:
//    <div class="tab">topic here</div>


function Tabs(tab) {

    //Added element
    const tabs = document.createElement('div')
    
    //Added class
    tabs.classList.add('tab')
    
    
    //Set content
    tabs.textContent = tab
    
    return tabs
    
    
    }


const topics = document.querySelector('.topics')
console.log('topics', topics)

//Created GET request
 axios
 .get(`https://lambda-times-backend.herokuapp.com/topics`)
 .then(data => {
    //console.log('Tabs', data)
    
 
    // Iterated over the topics creating a new Tab component
    data.data.topics.forEach(tab => {
    console.log('tab', tab)
     topics.appendChild(Tabs(tab))
    })
 
 }).catch(err => console.error('Tabs', err ))

//const elementTwo = Tabs()
//topics.appendChild(Tabs())




