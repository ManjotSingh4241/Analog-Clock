let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
let secHand = document.querySelector('.second-hand');
let timeElement = document.querySelector('.time');

function clock(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    // Update the clock hands
    hrs = (((hrs*60)/12)*6)+90;   
    hourHand.style.transform = `rotate(${hrs}deg)`;
    
    mins=(mins*6)+90;
    minHand.style.transform = `rotate(${mins}deg)`;

    secs = (secs*6)+90;
    secHand.style.transform = `rotate(${secs}deg)`;

    // Update the time element
    let formattedTime = `${hrs % 12}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    timeElement.textContent = formattedTime;
}

setInterval(clock, 1000);
clock();
