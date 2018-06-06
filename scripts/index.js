var xhr = new XMLHttpRequest();

function login(username, password) {
    //var name = document.getElementById("username").value;
    //var email = document.getElementById("password").value;
    //document.getElementById('login-form').submit();
    xhr.open('POST', "localhost:3000/auth/login");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('authorization', '');
    xhr.send();
    xhr.onreadystatechange = sendRequest;
}

function sendRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        alert(response);
    }

}