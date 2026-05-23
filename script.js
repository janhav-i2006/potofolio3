const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    let color = circle.getAttribute('data-color');
    let count = 0;

    let interval = setInterval(() => {
        if (count >= percent) {
            clearInterval(interval);
        } else {
            count++;

            // ring animation
            circle.style.background = `conic-gradient(${color} ${count * 3.6}deg, #1e293b 0deg)`;

            // moving percentage text
            circle.querySelector("span").innerText = count + "%";
        }
    }, 20); // speed control
});
function toggleMenu() {
  let menu = document.getElementById("menu");

  if (menu.style.right === "0px") {
    menu.style.right = "-250px";
  } else {
    menu.style.right = "0px";
  }
}