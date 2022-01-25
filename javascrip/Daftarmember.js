// login disable

// nama UperCase
let nama = (document.getElementById("nama").onkeyup = function () {
  let nam = document.getElementById("nama");
  nam.value = nam.value.toUpperCase();
});

function pesan(id, text) {
  document.getElementById(id).innerHTML = text;
  document.getElementById(id).style.display = "inline";
}

// vlidation pass
document.getElementById("btndaftar").disabled = true;

document.getElementById("compass").onchange = function () {
  let password = document.getElementById("password").value;
  let compass = document.getElementById("compass").value;

  if (password == compass) {
    document.getElementById("alerta").style.display = "none";
    document.getElementById("btndaftar").disabled = false;
  } else {
    document.getElementById("btndaftar").disabled = true;
    pesan("alerta", "Confirm password tidak sama");
  }
};

// validasi daftar
document.getElementById("btndaftar").onclick = function () {
  let nama = document.getElementById("nama").value;
  let username = document.getElementById("usnam").value;
  let password = document.getElementById("password").value;
  let compass = document.getElementById("compass").value;
  let nomer = document.getElementById("nomer").value;
  // else
  let tag = new Date();
  let bulan = tag.getMonth() + 1;
  let tahun = tag.getFullYear();
  let kode = nama.substring(0, 2);

  if (nama == "" || username == "" || password == "" || compass == "" || nomer == "") {
    alert("Tolong dilengkapi dulu ya");
  } else {
    document.getElementById("hidaftar").style.display = "none";
    document.getElementById("hasil").style.display = "inline";

    document.getElementById("hasil").innerHTML = hasil =
      '<hr><h3 class="text-center">Selamat, Anda Telah Menjadi Member</h3><h4 class="text-center">Nama : ' +
      nama +
      "<br>" +
      "Username : " +
      username +
      "<br>" +
      "Nomor Telepon : " +
      nomer +
      "<br>" +
      "kode member : " +
      bulan +
      tahun +
      kode +
      '<br></h4><h6 class="text-center">silahkan cek email untuk verifikasi</h6><hr>';
  }
};
