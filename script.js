let counter = document.getElementById("counter");
let count = 0;

let decrease = document.getElementById("decreaseBtn").onclick=()=>{
    count--;
    counter.textContent=count;
}

let reset = document.getElementById("resetBtn").onclick=()=>{
    count=0;
    counter.textContent=count;
}


let increase = document.getElementById("increaseBtn").onclick=()=>{
    count++;
    counter.textContent=count;
}