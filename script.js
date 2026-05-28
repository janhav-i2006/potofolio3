const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {

    let percent = circle.getAttribute('data-percent');
    let color = circle.getAttribute('data-color');
    let count = 0;

    let interval = setInterval(() => {

        if(count >= percent){

            clearInterval(interval);

        } else {

            count++;

            circle.style.background =
            `conic-gradient(${color} ${count * 3.6}deg, #1e293b 0deg)`;

            circle.querySelector("span").innerText = count + "%";
        }

    },20);

});

/* ===== FUNNY RESUME ===== */

function funnyResume(){

    let audio = new Audio("funny.mp4");

    audio.play();

    setTimeout(() => {

        alert("😂 Aabhi nahi milega!");

    },500);

}