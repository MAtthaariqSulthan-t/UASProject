let kategori = ["Kamera DSLR", "Kamera Mirrorless", "Kamera Prosummer", "Kamera Pocket", "Drone"];
for (let a = 0; a <= 4; a++) {
  document.getElementById("kategori").innerHTML += "<li value=" + kategori[a] + ">" + kategori[a] + "</li><br>";
}
