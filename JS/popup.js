function myFunction() {
    let popup = document.getElementById("myPopup");
    let popupText = document.getElementById("popupText");
    
    let messages = ["Medarbejder tilgængelig", "5 minutters ventetid"];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    popupText.textContent = randomMessage;

    
    if (!popup.classList.contains("show")) {
        popup.classList.add("show");
    } else {
        popup.classList.remove("show");
    }
}


function closePopup() {
    let popup = document.getElementById("myPopup");
    popup.classList.remove("show");
}


let popupTriggers = document.querySelectorAll(".popup-trigger");
for (let i = 0; i < popupTriggers.length; i++) {
    popupTriggers[i].addEventListener("click", myFunction);
}
