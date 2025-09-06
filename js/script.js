// function sendMail() {
//   let params = {
//     name: document.getElementById("name").value,
//     subject: document.getElementById("subject").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs
//     .send("service_8p0yfb2", "template_ubsya5a", params)
//     .then(alert("e workkkkk"));
// }

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_8p0yfb2", "template_ubsya5a", params)
    .then((res) => {
      alert("✅ Email sent successfully!");
      console.log("SUCCESS:", res);
    })
    .catch((err) => {
      alert("❌ Email failed. Check console for details.");
      console.error("ERROR DETAILS:", err);
    });
}

//   emailjs.send("service_8p0yfb2", "template_ubsya5a", parms).then(
//     (response) => {
//       console.log("SUCCESS!", response.status, response.text);
//     },
//     (error) => {
//       console.log("FAILED...", error);
//     }
//   );
