

setInterval(countdown, 1000)
function countdown(){
    let currentTime = new Date().getTime();
    let tomorrow = new Date ("September 6, 2023 09:30:00").getTime();
    let distance = tomorrow - currentTime;
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours + "h "
    + minutes + "m " + seconds + "s ");
}