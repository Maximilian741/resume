//Max Casteel
//This is the javascript file for the resume website, it contains the functions for the contact form.
//I also plan to use this file to add increased functionality to the website in the future once I come up with more ideas.

//This function is called when the contact form is submitted, it checks to make sure all fields are filled out and then sends the email.
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    if (name == "" || email == "" || message == "" || subject == "") {
        alert("Please fill out all fields");
    } else {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "",
            Password: "",
            To: '',
            From: email,
            Subject: subject,
            Body: message,
        }).then(
            message => alert("Your message has been sent")
        );
    }
}


//This function is called when the user clicks on one of the projects, it opens a popup window with the project details.
//This function will link tthe project to my repository on githuib that holds the project.  It will take the name of the project and use it to find the correct repository as the argument.
function viewProject(project) {
    var projectWindow = window.open("project.html", "_blank");
    projectWindow.onload = function () {
        projectWindow.document.getElementById("project").innerHTML = project;
    }
}

//This function is called when the user clicks on the "View Resume" button, it opens a new tab with the resume.
function viewResume() {
    window.open("resume.pdf", "_blank");
}

//This fucntion is called when the user clicks on the close button for the modal popup, it closes the popup.
function close() {
    document.getElementById("modal").style.display = "none";
}

//This function is called when the user clicks on the "Contact Me" button, it opens the modal popup.
function contactMe() {
    document.getElementById("modal").style.display = "block";
}




