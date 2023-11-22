document.addEventListener("DOMContentLoaded", () => {
  const myToast = new bootstrap.Toast(document.getElementById("welcome-toast"));
  myToast.show();
});

document.addEventListener("DOMContentLoaded", () => {
  const tooltipTrigger = document.querySelector(".tooltip");

  tooltipTrigger.addEventListener("mouseover", function () {
    const tooltip = this.querySelector(".tooltiptext");
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
  });

  tooltipTrigger.addEventListener("mouseout", function () {
    const tooltip = this.querySelector(".tooltiptext");
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  });
});