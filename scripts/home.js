var boardList = [{
    name: "Board one",
    id: "213",
    list: [{
        name: "Project Two",
        id: "B1P2",
        taskList: [{
          name: "task one",
          id: "12er45"
        }]
      },
      {
        name: "Project Three",
        id: "B1P3"
      },
      {
        name: "Project Four",
        id: "B1P4",
        taskList: [{
            name: "task one",
            id: "12er45"
          },
          {
            name: "task two",
            id: "12er45"
          }
        ]
      }
    ]
  },
  {
    name: "Board two",
    id: "456",
    list: [{
        name: "Project One",
        id: "B2P1",
        taskList: [{
            name: "task one",
            id: "12er45"
          },
          {
            name: "task two",
            id: "12er45"
          }
        ]
      },
      {
        name: "Project Two",
        id: "B2P2"
      },
      {
        name: "Project Three",
        id: "B2P3",
        taskList: [{
            name: "task one",
            id: "12er45"
          },
          {
            name: "task two",
            id: "12er45"
          }
        ]
      }
    ]
  }
];

loadMenuList();

function showProjects(showBroadID) {
  var projectBlock = document.getElementById("projects-list");
  projectBlock.innerHTML = "";
  boardList.forEach(function (value, index) {
    var PID = "project_" + value.id;
    var BID = value.id;
    if (value.id == showBroadID) {
      projectBlock.innerHTML +=
        "<div class='board-block' id='" +
        BID +
        "' ><div class='board-block'><span class='board-name'>" +
        value.name +
        "</span><span class='remove-board' onclick='removeBoard(" +
        BID +
        ")'>Remove Board</span></div><div class='card-container' id='" +
        PID +
        "'> </div></div>";
      showCards(PID, value.list, index);
    }
  });
}

function showCards(id, cardList, boardIndex) {
  var cardBlock = document.getElementById(id);
  cardList.forEach(function (card, index) {
    var backgroundColor = "grey";
    //var backgroundColor = randomBGColor();
    var taskID = "card_" + boardIndex + "_" + index;
    cardBlock.innerHTML +=
      "<div class='card' id=" +
      taskID +
      " style='background-color:" +
      backgroundColor +
      "' onclick='gotoCard()'><h4>" +
      card.name +
      "</h4>";
    if (card.taskList != undefined) {
      card.taskList.forEach(function (task) {
        document.getElementById(taskID).innerHTML +=
          "<p class='task-meta'>" + task.name + "</p>";
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
  if (element.value.length < 5) {
    alert("Board name can't be less than five characters!");
    return;
  } else {
    var newBoardId = getRandomNumber();
    boardList.push({
      name: element.value,
      id: newBoardId,
      list: []
    });
    showProjects(newBoardId);
    loadMenuList();
    document.getElementById('boardName').value = '';
    alert("Board name " + element.value + " added!");
  }
}

function removeBoard(board) {
  document.getElementById(board).remove();
  boardList.forEach(function (value, index) {
    if (value.id == board) {
      delete boardList[index];
      loadMenuList();
    }
  });
}

function loadMenuList(params) {
  var menuList = document.getElementById("menuList");
  menuList.innerHTML = "";
  boardList.forEach(function (value, index) {
    menuList.innerHTML +=
      "<li onclick=showBoard('" + value.id + "')>" + value.name + "</li>";
  });
}

function showBoard(id) {
  showProjects(id);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

function randomBGColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

function gotoCard() {
  window.location.href = "../html/task.html";
}

function toggleMenu() {
  var sideMenuID = document.getElementById("sideMenu");
  sideMenuID.style.display = sideMenuID.style.display === "none" ? "" : "none";
}