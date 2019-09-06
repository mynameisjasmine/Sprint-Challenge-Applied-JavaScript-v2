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

 axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
 

.then(response => {
    console.log('response', response);
    tabInfo = response.data.topics
    tabInfo.forEach(props => {
        topics.appendChild(Tabs(props))
    })
});

    

// Created tab function

function Tabs(topic) {

    
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    tabDiv.textContent = topic
    
    

return tabDiv
    
}



 



