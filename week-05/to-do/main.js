const recoveredList = JSON.parse(localStorage.getItem('list') || []);

if (recoveredList.length > 0) {
  const ul = document.getElementById('myUL');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  for (let i = 0; i < recoveredList.length; i++) {
    const li = document.createElement('LI');
    const txt = document.createTextNode(recoveredList[i].content);
    if (recoveredList[i].checked) {
      li.className = 'checked';
    }
    if (recoveredList[i].deleted) {
      li.style.display = 'none';
    }
    li.appendChild(txt);
    ul.appendChild(li);
  }
}

// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName('LI');
for (let i = 0; i < myNodelist.length; i++) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('x');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = 'none';
    saveCurrentList();
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener(
  'click',
  ev => {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      saveCurrentList();
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
const newElement = () => {
  const li = document.createElement('li');
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  const span = document.createElement('SPAN');
  const txt = document.createTextNode('x');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = 'none';
      saveCurrentList();
    };
  }

  saveCurrentList();
};

const saveCurrentList = () => {
  const myNodelist = document.getElementsByTagName('LI');
  const list = [];
  for (let i = 0; i < myNodelist.length; i++) {
    list.push({
      content: myNodelist[i].innerText.replace('x', '').replace('\n', ''),
      deleted: myNodelist[i].style.display === 'none',
      checked: myNodelist[i].classList.contains('checked'),
    });
  }
  localStorage.setItem('list', JSON.stringify(list));
};
