function createNewListItem (itemName) {
  let list = document.createElement ('li');
  let span = document.createElement ('span');
  let deleteButton = document.createElement ('button');

  span.innerText = itemName;
  list.innerText = ' ';
  deleteButton.innerText = 'Delete';

  deleteButton.addEventListener ('click', function (event) {
    list.remove ();
  });

  list.appendChild (span);
  list.appendChild (deleteButton);

  return list;
}
document.querySelector ('button').addEventListener ('click', function (event) {
  let name = document.getElementById ('item').value;
  
  if (name.value.trim() !== ''){
  let listItem = createNewListItem (name.value.trim());
  document.querySelector ('ul').appendChild (listItem);
  document.getElementById ('item').value = '';
  }
  document.getElementById("item").focus();
});
document.querySelector ('input').addEventListener ('keyup', function (event) {});

const input = document.querySelector ('input');
document.getElementById("item").focus();

input.addEventListener ('keyup', logKey);
function logKey (keyPress) {
  if (keyPress.code === 'Enter' && input.value.trim()) {
    console.log (keyPress.code);
    let name = document.getElementById ('item').value;
    let listItem = createNewListItem (name);
    document.querySelector ('ul').appendChild (listItem);
    document.getElementById ('item').value = '';
    document.getElementById("item").focus();
  }
}
