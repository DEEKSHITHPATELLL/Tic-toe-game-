let btn=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let msgcontent=document.querySelector(".msg-content");
let newgame=document.querySelector("#new");
let message=document.querySelector("#msg");
let turnO;
let patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const randomizeTurn = () => {
    turnO = Math.random() < 0.5; 
    // message.innerText = `Player ${turnO ? "O" : "X"} starts!`; 
};
const resetgame=()=>
{
    randomizeTurn();
    turnO=true;
    enabled();
    msgcontent.classList.add("hide");
};
btn.forEach((box)=> {
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        winner();
    });
});
const disabled=()=>
{
    for(let box of btn)
    {
        box.disabled=true;
    }
};
const enabled=()=>
    {
        for(let box of btn)
        {
            box.disabled=false;
            box.innerText="";
        }
    };
const showWinner=(winner)=>
{
    message.innerText=`congratulations winner is ${winner}`;
    msgcontent.classList.remove("hide");
    disabled();
    
};
const checkForTie = () => {
    let hasEmptyBox = false;
    for (let box of btn) {
        if (box.innerText === "") {
            hasEmptyBox = true; 
            break;
        }
    }
    if (!hasEmptyBox) {
        message.innerText = `It's a tie! No winner this time.`;
        msgcontent.classList.remove("hide");
        disabled();
    }
};

const winner = () => {

    for (let pattern of patterns) {
        let p1 = btn[pattern[0]].innerText;
        let p2 = btn[pattern[1]].innerText;
        let p3 = btn[pattern[2]].innerText;

        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                showWinner(p1);
            }
            else
            {
            checkForTie();
             }
            }
        }
};

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
randomizeTurn();