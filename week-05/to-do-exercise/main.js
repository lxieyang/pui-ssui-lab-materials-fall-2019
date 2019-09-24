// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName('LI');
for (let i = 0; i < myNodelist.length; i++) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('x');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener(
  'click',
  ev => {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);

// TODO: Click on a close button to hide the current list item

// TODO: Create a new list item when clicking on the "Add" button
const addNewItem = () => {
  alert('should add a new todo item');
};

window.addNewItem = addNewItem; // do not modify this line

// TODO: restore the to do list state after browser tab refresh
