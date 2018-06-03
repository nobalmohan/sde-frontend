//List of projects
var boardList = [{
	"name": "Board one",
	"id": 213,
	"list": [{
		"name": "Project Two",
		"id": "B1P2",
		"taskList": [{
			"name": "task one",
			"id": "12er45"
		}]
	}, {
		"name": "Project Three",
		"id": "B1P3"
	}, {
		"name": "Project Four",
		"id": "B1P4",
		"taskList": [{
				"name": "task one",
				"id": "12er45"
			},
			{
				"name": "task two",
				"id": "12er45"
			}
		]
	}]
}, {
	"name": "Board two",
	"id": 456,
	"list": [{
		"name": "Project One",
		"id": "B2P1",
		"taskList": [{
				"name": "task one",
				"id": "12er45"
			},
			{
				"name": "task two",
				"id": "12er45"
			}
		]
	}, {
		"name": "Project Two",
		"id": "B2P2"
	}, {
		"name": "Project Three",
		"id": "B2P3",
		"taskList": [{
				"name": "task one",
				"id": "12er45"
			},
			{
				"name": "task two",
				"id": "12er45"
			}
		]
	}]
}];


showProjects();

function showProjects() {
	var projectBlock = document.getElementById('projects-list');
	projectBlock.innerHTML = '';
	boardList.forEach(function (value, index) {
		console.log(value);
		var PID = 'project_' + value.id;
		var BID = 'board_' + value.id;
		projectBlock.innerHTML += ("<div class='board-name' id='" + BID + "' >" + value.name + "<span class='remove-board' onclick='removeBoard(" + BID + "," + PID + ")'>Remove</span>");
		projectBlock.innerHTML += ("<div class='card-container' id='" + PID + "'> </div>");
		showCards(PID, value.list, index);
	});
}


function showCards(id, cardList, boardIndex) {
	var cardBlock = document.getElementById(id);
	cardList.forEach(function (card, index) {
		var backgroundColor = 'grey';
		//var backgroundColor = randomBGColor();
		var taskID = "card_" + boardIndex + "_" + index;
		cardBlock.innerHTML += ("<div class='card' id=" + taskID + " style='background-color:" + backgroundColor + "' onclick='gotoCard()'><h4>" + card.name + "</h4>");
		if (card.taskList != undefined) {
			card.taskList.forEach(function (task) {
				document.getElementById(taskID).innerHTML += "<p class='task-meta'>" + task.name + "</p>"
			});
		}
	});
}



function addProject(id, event) {
	//event.stopPropagation();
	console.log(id);
	// boardList.push({
	// 	"name": "New Project",
	// 	"id": 456,
	// 	"list": []
	// });
	// showProjects();
}


function newBoard(element) {
	//Check if the input text is less than of length 5
	if (element.value.length < 5) {
		alert("Board name can't be less than five characters!");
		return;
	} else {
		//push a new entry to the list
		boardList.push({
			"name": element.value,
			"id": getRandomNumber(),
			"list": []
		});
		//calling it again to refresh the list
		showProjects();
		alert("Board name" + element.value + " added!");
	}
}

function removeBoard(board, project) {
	//remove nodes
	document.getElementById(board.id).remove();
	document.getElementById(project.id).remove();
	//remove entry from the list
	boardList.forEach(function (value, index) {
		console.log(value);
	});
}


//generate random number for ID
function getRandomNumber() {
	return Math.floor(Math.random() * 10000);
}

//generate random color. Can be used for project card
function randomBGColor() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	return "rgb(" + x + "," + y + "," + z + ")";
}

//go to task page from home page
function gotoCard() {
	window.location.href = "../task/task.html"
}