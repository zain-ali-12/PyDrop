function activate(process) {
    document.getElementById("blur-overlay").style.display = "block";
    if (process == 'send'){
        document.getElementById("send-form").id = "grow";
    } else {
        document.getElementById("recieve-form").id = "grow";

    }
}

function hideOpened() {
    document.getElementById("send-form").id = ''
    document.getElementById("recieve-form").id = ''
    
}