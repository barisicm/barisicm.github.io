// flasing dash
setInterval(function() {
    var element = document.getElementById("cmdFlash");
    if(element.innerText.slice(-1) === "_"){
        element.innerText = " ";
    } else {
        element.innerText = "_";
    }
}, 500);

// keypress listener
document.addEventListener("keydown", function(e) {
    var CMDentry = document.getElementById("cmdEntry");
    if(e.key==="Shift"){

    } else if (e.key==="Backspace"){
        if(CMDentry.innerHTML.length > 5){
            CMDentry.innerHTML = CMDentry.innerHTML.slice(0, -1);
        }
    } else if (e.key==="Enter") {
        var command = CMDentry.innerHTML.slice(5, CMDentry.innerHTML.length);
        checkCommands(command);
    } else {
        CMDentry.innerHTML = CMDentry.innerHTML.concat(e.key);
    }
});

// are right commands inputted
function checkCommands(command){
    switch (command) {
        case "About":
            console.log("is About")
        break;
        case "Projects":
        break;
        case "Blog":
        break;
        case "Skills":
        break;
        case "CV":
        break;
        case "help":
        break;
    }
    if(command != "About" && command != "Projects" && command != "Blog" && command != "Skills" && command != "CV") {
        console.log("invalid command");
    }

}

// invalid command
function commandError(){

}