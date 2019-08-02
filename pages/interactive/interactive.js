// flasing dash
setInterval(function() {
    var element = document.getElementById("cmdFlash");
    if(element.innerText.slice(-1) === "_"){
        element.innerText = " ";
    } else {
        element.innerText = "_";
    }
}, 500);

var CMDentry = document.getElementById("cmdEntry");
// keypress listener
document.addEventListener("keydown", function(e) {
    if (e.key==="Backspace"){
        if(CMDentry.innerHTML.length > 5){
            CMDentry.innerHTML = CMDentry.innerHTML.slice(0, -1);
        }
    }
});

document.addEventListener("keypress", function(e){
    if (e.key==="Enter") {
        var command = CMDentry.innerHTML.slice(5, CMDentry.innerHTML.length);
        checkCommands(command);
    } else {
        CMDentry.innerHTML = CMDentry.innerHTML.concat(e.key);
    }
});

// are right commands inputted
function checkCommands(command){
    switch (command.toUpperCase()) {
        case "ABOUT":
            console.log("is About");
        break;
        case "PROJECTS":
            console.log("is Projects");
        break;
        case "BLOG":
            console.log("is Blog");
        break;
        case "SKILLS":
            console.log("is Skills");
        break;
        case "CV":
            console.log("is CV");
        break;
        case "HELP":
            console.log("is Help");
        break;
    }
    if(command != "About" && command != "Projects" && command != "Blog" && command != "Skills" && command != "CV") {
        console.log("invalid command");
    }

}

// invalid command
function commandError(){

}

// 
function consoleWrite(html){

}