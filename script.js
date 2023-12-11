
// Recuperando valor dos elementos HTML.
const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const luckyBiscuit = document.querySelector(".biscuit");
const retryButton = document.querySelector("#btn-retry");
const biscuitOpened = document.querySelector(".phrase");

// Array que está armazenando as frases que serão sorteadas.
const phrasesBiscuit = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "O riso é a menor distância entre duas pessoas."
];
// Adicionando escutadores de eventos nas callback Functions.
luckyBiscuit.addEventListener('click', toggleScreen);
retryButton.addEventListener('click', toggleScreen);


// Função para adicionar e remover um classe nas interfaces criadas através do toggle.
function toggleScreen(){
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
  biscuitOpened.innerText = phrasesBiscuit[Math.round(Math.random() * 10)] 
}
// pega elemento no HTML e sorteia dentro do array em uma das 10 posições qual frase aparecerá