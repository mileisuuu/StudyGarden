let todayTime = 0;
let totalTime = 0;
let sessions = [];

const todayTimeElement = document.getElementById("today-time");
const totalTimeElement = document.getElementById("total-time");
const addTimeButton = document.getElementById("add-time-button");
const addCourse = document.getElementById("courseInput");
const hoursInput = document.getElementById("hoursInput");
const addSessionButton = document.getElementById("add-session-button");
const latestSession = document.getElementById("latest-session");
const sessionList = document.getElementById("session-list");

const savedData = localStorage.getItem("sessions");

if (savedData !== null) {
    sessions = JSON.parse(savedData);
}

sessions.forEach(function (session) {
    const newSession = document.createElement("li");
    newSession.textContent = session;
    sessionList.appendChild(newSession);
});

addSessionButton.addEventListener("click", function () {
    const sessionText = addCourse.value + " : " + hoursInput.value + " h";

    latestSession.textContent = sessionText;

    sessions.push(sessionText);

    localStorage.setItem("sessions", JSON.stringify(sessions));

    const newSession = document.createElement("li");
    newSession.textContent = sessionText;
    sessionList.appendChild(newSession);
});

addTimeButton.addEventListener("click", function () {
    todayTime = todayTime + 0.5;
    totalTime = totalTime + 0.5;

    todayTimeElement.textContent = todayTime;
    totalTimeElement.textContent = totalTime;
});