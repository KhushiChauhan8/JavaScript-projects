const input = document.querySelector('#input');
const meaning = document.querySelector('#meaning');
const search = document.querySelector('#search');
const output = document.querySelector('.output')


search.addEventListener('click', async() => {
    const val = input.value;
    if(val === ''){
        alert('Please enter a word')
    }
    else{
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
        let meaning = await fetch(url);
        meaning = await meaning.json();
        console.log("meaning", meaning[0]['meanings'][0]["definitions"][0]["definition"]);
        output.innerHTML = meaning[0]['meanings'][0]["definitions"][0]["definition"];
    }
});