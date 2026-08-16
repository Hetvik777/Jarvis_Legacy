function updateClock() {

    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

    document.getElementById("date").textContent =
        now.toDateString();
}

setInterval(updateClock, 1000);

updateClock();

const messages = [

    "> BOOTING JARVIS...",

    "> LOADING VOICE ENGINE...",

    "> INITIALIZING ARC REACTOR...",

    "> CONNECTING TO NETWORK...",

    "> SCANNING SYSTEM...",

    "> ALL SYSTEMS OPERATIONAL",

    "> READY FOR COMMAND"

];

const output = document.getElementById("output");

let index = 0;

function typeMessage() {

    if (index < messages.length) {

        const line = document.createElement("div");

        line.textContent = messages[index];

        output.appendChild(line);

        index++;

        setTimeout(typeMessage, 1000);
    }
}

setTimeout(typeMessage, 500);
