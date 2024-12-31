// Start playing end of the beginning at 23:59:24

// create a date of today and set the time to 23:59:24
const playTime = '23:59:24'

let play = false;

function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

function computeTimeDifference(targetTime) {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const time = targetTime.split(':');
    const targetHours = parseInt(time[0]);
    const targetMinutes = parseInt(time[1]);
    const targetSeconds = parseInt(time[2]);

    let hoursDiff = hours - targetHours;
    let minutesDiff = minutes - targetMinutes;
    let secondsDiff = seconds - targetSeconds;

    if (hoursDiff < 0) hoursDiff = (Math.abs(hoursDiff)).toString().padStart(2, '0');
    if (minutesDiff < 0) minutesDiff = (Math.abs(minutesDiff)).toString().padStart(2, '0');
    if (secondsDiff < 0) secondsDiff = (Math.abs(secondsDiff)).toString().padStart(2, '0');

    if (hoursDiff < 10) hoursDiff = hoursDiff.toString().padStart(2, '0');
    if (minutesDiff < 10) minutesDiff = minutesDiff.toString().padStart(2, '0');
    if (secondsDiff < 10) secondsDiff = secondsDiff.toString().padStart(2, '0');


    return `${hoursDiff}:${minutesDiff}:${secondsDiff}`;
}







setInterval(() => {
    document.getElementById('playTimer').innerHTML = (computeTimeDifference(playTime));
    document.getElementById('newYearTimer').innerHTML = (computeTimeDifference('23:59:59'));
    if (getCurrentTime() == playTime && !play) {

        // get the audio element
        const audio = document.querySelector('audio');

        // play the audio
        audio.play();
        play = true;
    }
    else {
        console.log('Not yet time to play the audio');
    }
}, 10);








