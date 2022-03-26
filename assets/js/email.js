function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      username:"appealnumber1@gmail.com",
      password:"nT2qY8BUn8A9gfi",
      To: 'appealnumber1@gmail.com',
      From: document.getElementById(second-email),
      Subject: "Customer feedback",
      Body: document.getElementById(second-name),
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }