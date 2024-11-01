const html = document.querySelector('html');
const startButton = document.querySelector('.start-button');
const rankingButton = document.querySelector('.ranking-button');
const aboutButton = document.querySelector('.about-button')

const gameTitle = document.querySelector('.app-title');
const mysqlTitle = document.querySelector('.app-titleStrong');

startButton.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'first-backgroundColor');
    mysqlTitle.style.color = '#ffff'
    gameTitle.style.color = '#00618b'
})
rankingButton.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'second-backgroundColor');
    mysqlTitle.style.color = '#00618b'
    gameTitle.style.color = '#ffff'
})
aboutButton.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'third-backgroundColor');
    mysqlTitle.style.color = '#ffff'
    gameTitle.style.color = '#e78e00'
})