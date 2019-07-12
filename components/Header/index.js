// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container')
const element = Header()
headerContainer.appendChild(element)

function Header() {
//Created elements
 const header = document.createElement('div');
 const date = document.createElement('span');
 const titleHeader = document.createElement('h1');
 const temp = document.createElement('span');

 // Added structure to elements
 header.appendChild(date)
 header.appendChild(titleHeader)
 header.appendChild(temp)

 // Added classes
 header.classList.add('header')
 date.classList.add('date')
 temp.classList.add('temp')

 // Added text
 date.textContent = 'MARCH 28, 2019'
 titleHeader.textContent = 'Lambda Times'
 temp.textContent = '98°'

 return header
}
