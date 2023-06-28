// JavaScript Document

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test($email)) {
    return false;
  } else {
    return true;
  }
}

$("#contactForm").submit(function (event) {
  event.preventDefault();
  if ($("#name").val() == "") {
    alert("Please enter your name");
    $("#name").focus();
    return;
  }

  if ($("#tel").val() == "") {
    alert("Please enter your telephone");
    $("#tel").focus();
    return;
  }

  if ($("#email").val() == "") {
    alert("Please enter your email address");
    $("#email").focus();
    return;
  } else {
    if (!validateEmail($("#email").val())) {
      alert("Please enter enter a valid email address");
      $("#email").focus();
      return;
    }
  }

  if ($("#message").val() == "") {
    alert("Please enter your message");
    return;
  }

  jQuery
    .ajax({
      url: "sendEmail.asp",
      method: "POST",
      data: $("#contactForm").serialize(),
    })
    .done(function (response) {
      if (response == "0") {
        alert("Thank you - we will be in touch");
        $("#contactForm")[0].reset();
      }
    })
    .fail(function () {
      alert(
        "An error has ocurred - please check the information you are entering or contact us at sales@oasisdistribution.com"
      );
    });
});
