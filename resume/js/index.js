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
function openProject(project) {
    var projectWindow = window.open("", "projectWindow", "width=400,height=400");
    projectWindow.document.write(project);
}

//This function is called when the user clicks on the close button on the popup window, it closes the window.
function closeProject() {
    window.close();
}
