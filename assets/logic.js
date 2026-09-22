document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("reportPanel");
  const card = document.querySelector('[data-bs-target="#reportPanel"]');
  const chevron = card?.querySelector(".chevron");

  // ikon chevron berputar + kartu "aktif" saat panel terbuka
  panel.addEventListener("show.bs.collapse", () => {
    card.classList.add("border", "border-primary");
    if (chevron) chevron.style.transform = "rotate(180deg)";
  });
  panel.addEventListener("hide.bs.collapse", () => {
    card.classList.remove("border", "border-primary");
    if (chevron) chevron.style.transform = "";
  });

  // agar layar mengikuti turun ke form saat dibuka
  panel.addEventListener("shown.bs.collapse", () => {
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

const tombolBuka = document.getElementById("tombolBuka");
const fmsg = document.getElementById("fmsg");

tombolBuka.addEventListener("click", function () {
  // Munculkan elemennya
  fmsg.classList.remove("d-none");

  // Beri jeda sekitar 100-200 milidetik agar animasi selesai, lalu fokus
  setTimeout(function () {
    fmsg.focus();
  }, 500); // 150 artinya 0.15 detik
});
