function showScreen(id) {
    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// YES button
function yesClick() {
    showScreen("screen2");
}


// NO button
function noClick() {
    alert("No? 😭");
}


// Gift buttons
function openGift(number) {

    if (number === 1) {
        showScreen("screen4");
    }

    else if (number === 2) {
        showScreen("screen5");
    }

    else if (number === 3) {
        showScreen("screen6");
    }
}
