// memunculkan pesan

function pesan(id, text) {
  document.getElementById(id).innerHTML = text;
  document.getElementById(id).style.display = "inline";
}

// vallidasi login

let username = "sulthan";
let password = "admin";

function ceklogin() {
  let userlogin = document.getElementById("username").value;
  let userpass = document.getElementById("password").value;

  if (userlogin == "" && userpass == "") {
    pesan("alertw", "Isi username dan password");
  } else if (userlogin == "" || userlogin == null) {
    pesan("alertw", "Mengisi Username dulu ya");
  } else if (userpass == "" || userpass == null) {
    pesan("alertw", "Isi dulu Passwornya kak");
  } else if (userlogin == username && userpass == password) {
    alert("Login Berhasil, Selamat datang " + username);
  } else {
    pesan("alertw", "Maaf, username atau password belum sesuai");
    bersih();
  }
}

function bersih() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
