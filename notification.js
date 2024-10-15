

function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    let emailPart = email.split('@');
    let user = emailPart[0];
    let domain = emailPart[1];
    return user + "sent you an email from" + domain;
}


