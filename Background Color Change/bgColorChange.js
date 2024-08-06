const body = document.body;
const container1 = document.getElementById("container");

container1.style.display = "flex";
container1.style.justifyContent = "center";
container1.style.alignItems = "center";
container1.style.height = "100vh";
container1.style.gap = "5px"


const box1 = document.createElement("div");
box1.className = "color";
container1.appendChild(box1);
box1.style.backgroundColor = "red";

box1.addEventListener('click', function () {
    body.style.backgroundColor = "red";
    box1.style.border = "2px solid white";
    box2.style.border = "none";
    box3.style.border = "none";
    box4.style.border = "none";
});

const box2 = document.createElement("div");
box2.className = "color";
container1.appendChild(box2);
box2.style.backgroundColor = "green";

box2.addEventListener('click', function () {
    body.style.backgroundColor = "green";
    box2.style.border = "2px solid white";
    box1.style.border = "none";
    box3.style.border = "none";
    box4.style.border = "none";

})

const box3 = document.createElement("div");
box3.className = "color";
container1.appendChild(box3);
box3.style.backgroundColor = "blue";

box3.addEventListener('click', function () {
    body.style.backgroundColor = "blue";
    box3.style.border = "2px solid white";
    box1.style.border = "none";
    box2.style.border = "none";
    box4.style.border = "none";
})

const box4 = document.createElement("div");
box4.className = "color";
container1.appendChild(box4);
box4.style.backgroundColor = "yellow";

box4.addEventListener('click', function () {
    body.style.backgroundColor = "yellow";
    box4.style.border = "2px solid white";
    box1.style.border = "none";
    box2.style.border = "none";
    box3.style.border = "none";

})

let color = document.querySelectorAll(".color");

color.forEach((boxes) => {
    boxes.style.height = "100px";
    boxes.style.width = "100px";
})