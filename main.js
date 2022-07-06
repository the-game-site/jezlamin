let secSec = "dab64765f3d4fc29";

document.addEventListener("DOMContentLoaded", function() {
    init();

    document.getElementById("form-button-login").addEventListener("click", login);
    document.getElementById("input-user-name").focus();

    warmUpCache();
});

function init(){    
    console.log("%cStop!", "font-size:34px; color: red");    
    console.log("%cDo not enter any code fragments here!", "font-size:20px; color: red; margin-top:-10px;");
    console.log("");
    console.log("%cYou are under surveillance. Stay away!", "font-size:20px; color: red; margin-top:-10px;");
}

function loginWithHashCode(code){
    if (code == secSec) {
        let elStatus = document.getElementById("logon-status");
        let elContent = document.getElementById("content-main");

        elStatus.innerText = "System access hacked!";
        elStatus.style.display = "block";    

        elContent.style.display = "block";

        console.log("System unblocked!");
    } else {
        console.log("%cIntrusion detector triggered. Your attempt got logged. Security informed.", "font-size:14px; color: red");
    }
    
    return "system ready.";
}

function login() {
    let elUser = document.getElementById("input-user-name").value;
    let elPw = document.getElementById("input-user-password").value;
    
    if (elUser == "") {
        alert("Please provide valid user logon name!");
        return false;
    }
    
    if (elPw == "") {
        alert("Please provide password to perform system logon!");
        return false;
    }

    alert("Invalid user logon credentials!\n\nUnknown user oder wrong password!");
}

function warmUpCache(){
    secSec += "ced777be274337ea";
}
