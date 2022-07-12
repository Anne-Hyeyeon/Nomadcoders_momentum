const searchbox = document.querySelector('#searchbox');

searchbox.addEventListener("keyup", onEnterSerach);

function onEnterSerach(e){
    if(e.keyCode === 13) {
        const searchResult = 'https://www.google.com/search?q=' + searchbox.value;
        window.open(searchResult);
    }
}