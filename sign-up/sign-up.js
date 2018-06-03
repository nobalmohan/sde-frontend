var xhr = new XMLHttpRequest();

function signup(firstName, lastName, email, password, mobile) {
    var params = {
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: email.value,
        password: password.value,
        mobileNumber: mobile.value
    };
    xhr.open('POST', "localhost:3000/signup");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange = sendRequest;
}

function sendRequest(e) {
    gotoHome();
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        alert(response);
    }
}


//go to task page from home page
function gotoHome() {
    window.location.href = "../home/home.html"
}