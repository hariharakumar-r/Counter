//got number as variable by declaring numContainer
let numContainer = document.getElementById("num");
//intial value of number is zero
let value = 0;
//declaring increment operation variable operation thru querySelector
let btnInc = document.querySelector(".increment");
//declaring decrement operation variable operation thru querySelector
let btnDec = document.querySelector(".decrement");
//declaring reset operation variable operation thru querySelector
let btnReset = document.querySelector(".reset");
//adding ++(addition) operation to calculate sum via addEventListeners
btnInc.addEventListener("click",()=> {
    value++;
    numContainer.textContent= value;
});
//adding --(subration) operation to calculate sum via addEventListeners
btnDec.addEventListener("click", () => {
    value--;
    numContainer.textContent= value;
});
//adding 0 to re-intialize the value via addEventListeners
btnReset.addEventListener("click", () => {
    value=0;
    numContainer.textContent= value;
});