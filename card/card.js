var taskCount = 1;
function addCard() {
    var taskName = 'Sample task ' + taskCount;
    document.getElementById('task-1').innerHTML += ("<div class='task-card'>"+ taskName + 
    "<br />Srat date: <b>dd/mm/yy</b> | End date: <b>dd/mm/yy</b>"+
    "<br />Assignee: <b>Mark</b>"+
    "<br /><input type='checkbox' value='"+taskName+"'> Completed</div>");
    taskCount += 1;
}

