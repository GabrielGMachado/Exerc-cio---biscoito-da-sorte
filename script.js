const main1 = document.querySelector('.main1');
const main2 = document.querySelector('.main2');
const imgclick = document.querySelector('.imgclick');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

const frases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão."
];


let randomnumber = Math.floor(Math.random() * 2);

text.textContent = frases[randomnumber];

imgclick.addEventListener('click', trocar);
button.addEventListener('click', trocar);

function trocar() {
    randomnumber = Math.floor(Math.random() * 2);
  
    text.textContent = frases[randomnumber];
  
    main1.classList.toggle('hide');
    main2.classList.toggle('hide');
  }


