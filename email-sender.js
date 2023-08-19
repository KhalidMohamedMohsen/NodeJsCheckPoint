var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "khalid.mohamed.mohsen@gmail.com",
    pass: "***********",
  },
});

var mailOptions = {
  from: "khalid.mohamed.mohsen@gmail.com",
  to: "khalid.mohamed.mohsen@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
