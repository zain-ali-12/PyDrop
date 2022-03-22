function activate(process) {
    if (process == 'send'){
        document.getElementById("send-form").style.display = "flex";
        document.getElementById("send-form").style.animation = 'grow 0.5s'
    }
}