// Contador para el primer contador de cumpleaños
var countDownDate1 = new Date("May 12, 2023 00:00:00").getTime();

var x1 = setInterval(function() {

  var now1 = new Date().getTime();

  var distance1 = countDownDate1 - now1;

  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  document.getElementById("days1").innerHTML = days1;
  document.getElementById("hours1").innerHTML = hours1;
  document.getElementById("minutes1").innerHTML = minutes1;
  document.getElementById("seconds1").innerHTML = seconds1;

  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("message").style.display = "block"; // Mostrar el mensaje
    document.getElementById("countdown1").style.display = "none"; // Ocultar el contador


  }
}, 1000);

// Contador para el segundo contador de cumpleaños
var countDownDate2 = new Date("May 14, 2023 00:00:00").getTime();

var x2 = setInterval(function() {

  var now2 = new Date().getTime();

  var distance2 = countDownDate2 - now2;

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  document.getElementById("days2").innerHTML = days2;
  document.getElementById("hours2").innerHTML = hours2;
  document.getElementById("minutes2").innerHTML = minutes2;
  document.getElementById("seconds2").innerHTML = seconds2;

  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("message").innerHTML = "¡Feliz cumpleaños!";
  }
}, 1000);



function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "1234") {
    document.getElementById("download-link").style.display = "block";
    document.getElementById("password-form").style.display = "none";
    document.getElementById("pdf-link").click();
  } else {
    alert("Contraseña incorrecta. Por favor intente nuevamente.");
  }
}