document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname;

  menuItems.forEach((item) => {
    const itemHref = item.getAttribute("href");

    if (currentPage.includes(itemHref)) {
      item.classList.add("nav-selected");
    } else {
      item.classList.remove("nav-selected");
    }
  });
});

function initMap() {
  // Initialize the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -6.8761460506287, lng: 107.54459689460187 },
    zoom: 8,
  });
}

  