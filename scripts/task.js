var TaskList = [{
    name: "Lorem ipsum",
    id: "8783",
    assignee: "Mark",
    startDate: "2017-06-01",
    endDate: "2018-05-28",
    isCompleted: false
}, {
    name: "Lorem ipsum two",
    id: "21344",
    assignee: "Judy",
    startDate: "2017-06-01",
    endDate: "2018-05-28",
    isCompleted: false
}];

showTask();


function showTask() {
    var taskBlock = document.getElementById("task-list-block");
    taskBlock.innerHTML = "";
    TaskList.forEach(function (value, index) {
        console.log(value);
        taskBlock.innerHTML += "<section id=" + value.id + " class='task-card'><div class='row justify-content-around'>" +
            "<div class='col align-self-center'> " +
            "<label class='label-text'>Task name</label>" +
            "<div class='task-meta'>" + value.name + "</div>" +
            "</div>" +
            "<div class='col align-self-center'>" +
            "<label class='label-text'>Start date</label>" +
            "<div class='task-meta'>28/05/2018</div>" +
            "</div>" +
            "<div class='col align-self-center'>" +
            "<label class='label-text'>End date</label>" +
            "<div class='task-meta'>15/06/2018</div>" +
            "</div>" +
            "<div class='col align-self-center'>" +
            "<label class='label-text'>Completed</label>" +
            "<div class='task-meta'>Yes</div>" +
            "</div>" +
            "<div class='col align-self-center'>" +
            "<button onclick=editTask('" + value.id + "') class='edit-task-btn'> Edit </button>" +
            "</div>" +
            "<div class='col align-self-center'>" +
            "<button onclick=deleteTask('" + value.id + "') class='delete-task-btn'> Delete </button>" +
            "</div>" +
            "</div></section>";
    });
}



function saveTask() {
    TaskList.push({
        name: "Lorem ipsum two",
        id: getRandomNumber(),
        assignee: "Judy",
        startDate: "28-05-2018",
        endDate: "28-05-2018",
        isCompleted: false
    });
    showTask();
}


function deleteTask(id) {
    document.getElementById(id).remove();
}

function editTask(id) {
    TaskList.forEach(function (value, index) {
        if (value.id == id) {
            document.getElementById('taskName').value = value.name;
            document.getElementById('startDate').value = value.startDate;
            document.getElementById('endDate').value = value.endDate;
        }
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10000);
}