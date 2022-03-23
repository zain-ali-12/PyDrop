function activate(process) {
    document.getElementById("blur-overlay").style.display = "block";
    if (process == 'send'){
        document.getElementById("send-form").classList.add("grow");
    } else {
        document.getElementById("recieve-form").classList.add("grow");

    }
}

function remClass(current) {
    current.classList.remove('shrink');
    current.classList.remove('grow');
}

function hideOpened() {
    let send = document.getElementById("send-form");
    let recieve = document.getElementById("recieve-form");
    let current = ''
    if (send.classList.contains("grow")) {
        current = send;
    } else {
        current = recieve;
    }
    current.classList.add("shrink");
    current.addEventListener("animationend", remClass(current))
    document.getElementById("blur-overlay").style.display = 'none';
}

function loadExplorer() {
    
}



