let todayTime = 0;
let totalTime = 0;

const todayTimeElement = document.getElementById("today-time");
const totalTimeElement = document.getElementById("total-time");
const addTimeButton = document.getElementById("add-time-button");
const addCourse = document.getElementById("courseInput");
const hoursInput = document.getElementById("hoursInput");
const addSessionButton = document.getElementById("add-session-button");
const latestSession = document.getElementById("latest-session");
const sessionList = document.getElementById("session-list");


addSessionButton.addEventListener("click", function () {
    latestSession.textContent = addCourse.value + " : " + hoursInput.value + " h";

    const newSession = document.createElement("li")
newSession.textContent = addCourse.value + " : " + hoursInput.value + " h";
sessionList.appendChild(newSession);
});

addTimeButton.addEventListener("click", function () {
    todayTime = todayTime + 0.5;
    totalTime = totalTime + 0.5;

    console.log(addCourse.value)

    todayTimeElement.textContent = todayTime;
    totalTimeElement.textContent = totalTime;
});