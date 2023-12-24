const blockwidth=100;
const blockheight=20;
const userstart=[230, 10];
let currentposition=userstart;
const ballstart=[270, 30];
const balldiameter=20;
let ballcurrentposition=ballstart;
let timerid;
let xDirection=-2;
let yDirection=2;
const score=document.querySelector("#score");

class Block {
    constructor(
        xAxis,
        yAxis
    ){
        this.bottomleft=[xAxis, yAxis];
        this.bottomright=[xAxis+blockwidth, yAxis];
        this.topleft=[xAxis, yAxis+blockheight];
        this.topright=[xAxis+blockwidth, yAxis+blockheight];
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
];

console.log(blocks[0]);

const grid = document.querySelector(".grid");

function addblocks() {
    for(let i=0; i<blocks.length; i++)
    {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left=blocks[i].bottomleft[0] + "px";
        block.style.bottom=blocks[i].bottomleft[1] + "px";
        grid.appendChild(block);
    }
}
addblocks();

//add user
const user = document.createElement("div");
user.classList.add("user");

grid.appendChild(user);

drawuser();

function drawuser() {
    user.style.left=currentposition[0] + "px";
    user.style.bottom=currentposition[1] + "px";
}

function drawball() {
    ball.style.left=ballcurrentposition[0] + "px";
    ball.style.bottom=ballcurrentposition[1] + "px";
}

function moveuser(e) {
    switch(e.key) {
        case "ArrowLeft":
            if(currentposition[0] > 0)
            {
                currentposition[0]-=10;
                drawuser();
                break;
            }
        case "ArrowRight":
            if(currentposition[0] <= 450)
            currentposition[0]+=10;
            drawuser();
            break;    
    }
}

document.addEventListener("keydown", moveuser);

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawball();
grid.appendChild(ball);

function moveball() {
    ballcurrentposition[0]+=xDirection;
    ballcurrentposition[1]+=yDirection;
    drawball();
    checkforcollision();
}

timerid = setInterval(moveball, 30);

function checkforcollision() {
//check for block collision
for(let i=0;i<12;i++)
{


    if(ballcurrentposition[0]>blocks[i].bottomleft[0] && ballcurrentposition[0]<blocks[i].bottomright[0] && 
            ballcurrentposition[1]+ balldiameter>blocks[i].bottomleft[1] && ballcurrentposition[i]<blocks[i].topleft[1]
        )
            {
                const allblocks=Array.from(document.querySelector(".block"));
                allblocks[i].classList.remove("block");
                blocks.splice(i, 1);
                changedirection();
            }
}

    //check for wall collisom
    if(ballcurrentposition[0]>=543 || ballcurrentposition[1]>=280 || ballcurrentposition[0]<=0)
    {
        changedirection();
    }

    if(ballcurrentposition[1]<=0)
    {
        clearInterval(timerid);
        score.innerHTML=` you loose`;
        document.removeEventListener("keydown", moveuser);
    }
}

function changedirection() {
    if(xDirection===2 && yDirection===2)
    {
        yDirection=-2;
        return;
    }
    if(xDirection===2 && yDirection===-2)
    {
        xDirection=-2;
        return;
    }
    if(xDirection===-2 && yDirection===-2)
    {
        yDirection=2;
        return;
    }
    if(xDirection===-2 && yDirection===2)
    {
        xDirection=2;
        return;
    }
}