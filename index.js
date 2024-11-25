const img = document.querySelector("#img");
const controls = document.querySelector(".controls")

controls.addEventListener("click", (x)=>{
    const buttonState = x.target.dataset.state;
    if(buttonState === "On"){
        img.src = "Assets/VectorOn.png"
        img.classList.add("on")
        console.log("Hey")
    } else if(buttonState === "Off"){
        img.src = "Assets/VectorOff.png"
        img.classList.remove("on")
    }
})