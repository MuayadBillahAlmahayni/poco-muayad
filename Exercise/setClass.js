console.log('My code is running!');

function setClassWarning() {
    let el = document.getElementById('mypara');
    el.className = 'warning';
}

function listenForTip() {
    let el = document.getElementById('mypara');
    el.className = 'tip';
}

function clearClass() {
    let el = document.getElementById('mypara');
    el.className = '';
}