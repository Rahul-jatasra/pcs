// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", () => {
    sidebar.style.left = "0";
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-2000px";
  });
});
