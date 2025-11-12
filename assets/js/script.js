const textInputBox = document.querySelector('#itemInput');
const addToListButton = document.querySelector('#addBtn');
const myList = document.querySelector('#list');

// add event listeners
addToListButton.addEventListener('click', addToList);
textInputBox.addEventListener('keypress', addToList);

// process event
function addToList(e) {
// check for enter key ot button press
if (e.keyCode == 13 || e.target === addToListButton) {
// check that text exists
if (textInputBox.value) {
// create a new HTML li element
const newListElement = document.createElement('li');
// add event listener to new list item
        // newListElement.addEventListener('click', removeFromList);
        // add list item button
        // newListElement.innerHTML = textInputBox.value + " <button onclick='removeFromList'>Delete</button>";
       newListElement.innerHTML = textInputBox.value
        // clear text box
        textInputBox.value = '';

        // add element to list
        myList.appendChild(newListElement);

        // focus on text input
        textInputBox.focus();
    }
 }
}