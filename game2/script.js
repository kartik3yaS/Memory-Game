    const cardArray=[
    {
        name: "fries",
        img: "fries.png",
    },
    {
        name: "cheeseburger",
        img: "cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "hotdog.png",
    },
    {
        name: "ice-cream",
        img: "ice-cream.png",
    },
    {
        name: "pizza",
        img: "pizza.png",
    },
    {
        name: "milkshake",
        img: "milkshake.png"
    },
    {
        name: "fries",
        img: "fries.png",
    },
    {
        name: "cheeseburger",
        img: "cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "hotdog.png",
    },
    {
        name: "ice-cream",
        img: "ice-cream.png",
    },
    {
        name: "pizza",
        img: "pizza.png",
    },
    {
        name: "milkshake",
        img: "milkshake.png"
    }
]

var container = document.get

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result-id");
// console.log(gridDisplay);

function createBoard() 
{
    for(let i=0;i<12;i++)
    {
        const card=document.createElement("img");
        card.setAttribute("src", "blank.png");
        card.setAttribute("data-id", i);
        console.log(card, i);
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipcard);
    }
}

createBoard();
let cardchosen=[];
let cardchosenid=[];
const cardswon=[];


function checkmatch() {
    // this.classList.add("flip");
    console.log("check for match");
    const cards=document.querySelectorAll("img");
    // console.log(cards);
    if(cardchosen[0]===cardchosen[1])
    {
        alert("you found a match!!");
        // cards[cardchosenid[0]].setAttribute("src", "white.png");
        // cards[cardchosenid[1]].setAttribute("src", "white.png");
        cards[cardchosenid[0]].removeEventListener("click", flipcard);
        cards[cardchosenid[1]].removeEventListener("click", flipcard);
        cardswon.push(cardchosen);
    }else {
        cards[cardchosenid[0]].setAttribute("src", "blank.png");
        cards[cardchosenid[1]].setAttribute("src", "blank.png");
        // alert("sorry! try again");
    }
    resultDisplay.textContent = cardswon.length;
    cardchosen=[];
    cardchosenid=[];

    if(cardswon.length===cardArray.length/2)
    {
        resultDisplay.textContent = "6,  congrats! you found them all!!";
    }
}

function flipcard() {
    console.log(cardArray);
    const cardid = this.getAttribute("data-id");
    cardchosen.push(cardArray[cardid].name);
    console.log(cardchosen.length);
    cardchosenid.push(cardid);
    console.log(cardchosenid.length);
    // console.log(cardchosen);
    this.setAttribute("src", cardArray[cardid].img);
    if(cardchosen.length===2 && cardchosenid[0]!=cardchosenid[1])
    {
        setTimeout(checkmatch, 500);
    }else if(cardchosenid.length===2 && cardchosenid[0]===cardchosenid[1]) {
        this.setAttribute("src", "blank.png");
        cardchosen=[];
        cardchosenid=[];
    }
}