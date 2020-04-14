/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


function menu(menuItems){
    //declare and initialize elements
    const div = document.createElement("div");
    const unorderedList = document.createElement("ul");

    //set classes
    div.classList.add("menu");

    //hierarchy
    div.appendChild(unorderedList);
    menuItems.forEach((item) => {
        const newItem = document.createElement("li");
        newItem.textContent = item;
        unorderedList.appendChild(newItem);
    });

    //event listeners
    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", () => {
        div.classList.toggle("menu--open");
    });

    return div;
}

const header = document.querySelector(".header");
console.log(header);
console.log("working");
header.appendChild(menu(menuItems));

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  XThe function takes an array as its only argument.

  XStep 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  XStep 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  XStep 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  XStep 5: return the menu component.

  XStep 6: add the menu component to the DOM.
  
*/
