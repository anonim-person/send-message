function sendMail()
{
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var name = document.getElementById("name").value;
    var nume = ", " + name;
    var mail = "mailto:lazarnarcis45a@gmail.com?+" + "&subject=" + subject + "&body=" + yourMessage + nume;
    if(yourMessage, subject, name == ""){
      alert("Va rugam sa introdceti toate datele despre dvs...");
    }else{
    window = window.open(mail, 'emailWindow');
    alert("Thank you for login, " + name);
}
}
