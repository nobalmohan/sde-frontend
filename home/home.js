//List of projects
var projectList = [{
    "name": "Project one",
    "id": 213,
	"list": [{
			"name": "P1: Card one",
			"id": "12er45"
		},{
			"name": "P1: Card Two",
			"id": "12er45"
		},{
			"name": "P1: Card Three",
			"id": "12er45"
		},{
			"name": "P1: Card Four",
			"id": "12er45"
		}
	]
},{
    "name": "Project two",
    "id": 456,
	"list": [{
			"name": "P2: Card One",
			"id": "12er45"
		},{
			"name": "P2: Card Two",
			"id": "12er45"
		},{
			"name": "P2: Card Three",
			"id": "12er45"
		}
	]
}];

//to debug
console.log(projectList);

showProjects();

function showProjects() {
    var projectBlock = document.getElementById('projects-list');
    projectBlock.innerHTML = '';
    projectList.forEach(function(value) {
        var ID = 'project_'+ value.id;
        projectBlock.innerHTML += ( "<h2>" + value.name + "</h2>");
        projectBlock.innerHTML += ( "<div class='card-container' id='"+ID+"'> </div>");
        showCards(ID, value.list);
    });
}


function showCards(id, cardList) {
    var cardBlock = document.getElementById(id);
    cardList.forEach(function(value) {
		var backgroundColor = 'maroon';
		//var backgroundColor = randomBGColor();
        cardBlock.innerHTML += ( "<div class='card' style='background-color:"+backgroundColor+"' onclick='gotoCard()'>" + value.name + "</h2>");
    });
}

function addProject() {
    projectList.push({
        "name": "New Project",
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
    window.location.href = "../card/card.html"
}


