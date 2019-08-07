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
var helpText = document.getElementById("cmdUp");
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
    command = command.toUpperCase();
    switch (command) {
        case "ABOUT":
            getData(command);
        break;
        case "PROJECTS":
            getData(command);
        break;
        case "BLOG":
            getData(command);
        break;
        case "SKILLS":
            getData(command);
        break;
        case "CV":
            getData(command);
        break;
        case "HELP":
            getData(command);
        break;
    }

    if(command != "ABOUT" && command != "PROJECTS" && command != "BLOG" && command != "SKILLS" && command != "CV" && command != "HELP") {
        console.log("invalid command");
    }
}

// invalid command
function commandError(){
}

function cmdWrite(html){
    helpText.innerHTML = helpText.innerHTML.concat(html);
}

function clearCmd(){
    helpText.innerHTML="> ";
    CMDentry.innerHTML="> ";
}


function getData(fileName){
    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            clearCmd();
            cmdWrite(xhr.response);
        } else {
            window.alert("Critical files have gone missing. Please contact myself.");
        }
    };

    xhr.open('GET', '../../resources/'+ fileName +'.txt');
    xhr.send();
}