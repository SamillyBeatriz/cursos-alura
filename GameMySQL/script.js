const html = document.querySelector('html');
const startButton = document.querySelector('.start-button');
const rankingButton = document.querySelector('.ranking-button');
const aboutButton = document.querySelector('.about-button')

const gameTitle = document.querySelector('.app-title');
const strongTitle = document.querySelector('.app-titleStrong');
const description = document.querySelector('.description')

const bannerTitle = document.querySelector('.app-icons');

startButton.addEventListener('click', ()=>{

    alterarEstilo('first-backgroundColor', 'mysql-icon');
    strongTitle.style.color = '#00618b'
    gameTitle.style.color = '#e78e00'
})
rankingButton.addEventListener('click', ()=>{

    alterarEstilo('second-backgroundColor', 'ranking-icon');
    strongTitle.style.color = '#e78e00'
    gameTitle.style.color = '#00618b'
})
aboutButton.addEventListener('click', ()=>{

    alterarEstilo('third-backgroundColor', 'about-icon');
    strongTitle.style.color = '#ffff'
    gameTitle.style.color = '#e78e00'
})

function alterarEstilo(cor,caminho){
    html.setAttribute('data-contexto', cor);
    bannerTitle.setAttribute('src', `./images/${caminho}.png`);

    switch (caminho) {
        case "mysql-icon":
            description.innerHTML = `
            Start <strong class="app-titleStrong"> Playing</strong>`
            break;
        case "ranking-icon":
            description.innerHTML = `
            Player <strong class="app-titleStrong"> Rankings</strong>`
            break;
        case "about-icon":
            description.innerHTML = `
            About <strong class="app-titleStrong"> me </strong>`
            break;
        default:
            break;
    }
}