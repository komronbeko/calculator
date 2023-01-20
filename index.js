let display = document.querySelector(".display");
let buttons = document.querySelector(".buttons");
let numbers = buttons.querySelectorAll("button");

display.textContent = "0"
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        let num = e.target.textContent;
        if (num === "RESET"){
            display.textContent = "0"
        }
        else if (num === "DEL"){
            if (!display.textContent[0] === "0"){
                display.textContent = display.textContent.slice(0, -1)
            } else{
                display.textContent = display.textContent.slice(0, -1)
                if (display.textContent === ""){
                    display.textContent = "0"
                }
            }
        }
        else if (num === "="){
            display.innerText = eval(display.innerText)
        } else{
            if (display.textContent[0] === "0"){
                display.textContent = ""
            }
            display.textContent += num

        }
        


        
    })
})
