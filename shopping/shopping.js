
function createNewListItem(itemName){
    const li = document.createElement('li');

    // create span and add text 
    const span = document.createElement('span');
    span.innerText = itemName;
    console.log('add key');

    

    // create button and add text 
    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click', function(event){
        li.remove();
        console.log('remove key');
    });

    // create space bettwen span and button 
    const space = document.createTextNode(' ')


    li.appendChild(span);
    li.appendChild(space);
    li.appendChild(button);

    return li;
}

// Add item using Enter Key 
const inputBox = document.getElementById('item');
const shoppingList = document.querySelector('ul');
const addItemButton = document.querySelector('button');

document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.value.trim() !== ''){
        shoppingList.appendChild(createNewListItem(inputBox.value));
        inputBox.value = '';
        addItemButton.disabled = true;
        inputBox.focus();
    }
    
});



    inputBox.addEventListener('keyup', function(event){
        if (inputBox.value.trim() !== ''){
            addItemButton.disabled = false;
        if (event.key === 'Enter'){
            shoppingList.appendChild(createNewListItem(inputBox.value));
            inputBox.value = '';
            console.log('key is runing');

        }
    }if (inputBox.value.trim() === ''){
        addItemButton.disabled = true;
    }
        
        
})
inputBox.focus();
addItemButton.disabled = true;