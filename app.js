const idValue = document.querySelector('.id-value');
const textValue = document.querySelector('.text-value');
const genButton = document.querySelector('.main__button-gen')
const url = 'https://api.adviceslip.com/advice';

genButton.addEventListener('click', ()=>{
    genButton.classList.add('animation');
    setTimeout(getData, 2000);
})
async function getData(){
    try{
        const respoce = await fetch(url);
        const data = await respoce.json();
        idValue.innerText = `Advice #${data.slip.id}`
        textValue.innerText = `"${data.slip.advice}"`
        console.log(data.slip.id);
        console.log(data.slip.advice);
        genButton.classList.remove('animation')
    }
    catch{
        alert('Error');
    }
}
getData();