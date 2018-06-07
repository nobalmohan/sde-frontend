var TaskList = [{
    name: "Lorem ipsum",
    id: "213",
    assignee: "Mark",
    startDate: "28/05/2018",
    endDate: "28/05/2018",
    isCompleted: false
}, {
    name: "Lorem ipsum two",
    id: "213",
    assignee: "Judy",
    startDate: "28/05/2018",
    endDate: "28/05/2018",
    isCompleted: false
}];

showTask();

function showTask() {
    var taskBlock = document.getElementById("task-list-block");
    //taskBlock.innerHTML = "";
    TaskList.forEach(function (value, index) {
        var TID = "task_" + value.id;
        taskBlock.innerHTML += "<section id=" + TID + " class='task-card'><div class='row justify-content-around'>" +
            "<div class='col align-self-center'> " +
            "<label class='label-text'>Task name</label>" +
            "<div class='task-meta'>Lorem ipsum</div>" +
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
            "<button onclick=deleteTask('" + TID + "') class='delete-task-btn'> Delete </button>" +
            "</div>" +
            "</div></section>";
    });
}

function saveTask() {

}

function deleteTask(id) {
    document.getElementById(id).remove();
}