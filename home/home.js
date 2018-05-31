//List of projects
var boardList = [{
	"name": "Board one",
	"id": 213,
	"list": [{
		"name": "Project one",
		"id": "B1P1"
	}, {
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
		var ID = 'project_' + value.id;
		projectBlock.innerHTML += ("<div>" + value.name + "</div>");
		projectBlock.innerHTML += ("<div class='card-container' id='" + ID + "'> </div>");
		showCards(ID, value.list, index);
	});
}


function showCards(id, cardList, boardIndex) {
	var cardBlock = document.getElementById(id);
	cardList.forEach(function (card, index) {
		var backgroundColor = 'grey';
		//var backgroundColor = randomBGColor();
		var taskID = "card_" + boardIndex + "_" + index;
		cardBlock.innerHTML += ("<div class='card' id=" + taskID + " style='background-color:" + backgroundColor + "' onclick='gotoCard()'>" + card.name + "</h2>");
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


function newBoard() {
	boardList.push({
		"name": "New Board",
		"id": 456,
		"list": []
	});
	showProjects();
}

function randomBGColor() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	return "rgb(" + x + "," + y + "," + z + ")";
}

function gotoCard() {
	window.location.href = "../task/task.html"
}