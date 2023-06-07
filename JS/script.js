const btn = document.querySelectorAll("button");
const display = document.querySelector("#display");

let result = "";

function btnPressed(event) {

    const text = event.target.textContent;

    if(text == "=") {
        result = eval(result);
    } else if(text == "C") {
        result = "";
    } else if(text == "+10%"){
        result = Math.floor(eval(result) * 1.1);
    } else if(text == "+8%"){
        result = Math.floor(eval(result) * 1.08);
    } else {
        result += text;
    }
    
    display.textContent = result;
}
    btn.forEach(button => button.addEventListener("click", btnPressed));
