// Initialize Some Variable
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// Set Interval Method
setInterval(() => {
    let time = new Date();
    let hh = time.getHours() * 30;
    let mm = time.getMinutes() * deg;
    let ss = time.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

// Toggle Dark/Light Mode Handle
const tglButton = document.querySelector('.toggle');
tglButton.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('light')
})