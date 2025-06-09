document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Only applies to icons
            }
        });
    });

    icons.forEach(icon => observer.observe(icon)); // Observe only icons, NOT sections
});

function initMap() {
    var location = { lat: 30.2414, lng: -81.3857 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
        disableDefaultUI: true
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: "Brennance LLC"
    });
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*window.addEventListener('scroll', function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.style.position = "fixed";
    } else {
        navbar.style.position = "sticky";
    }
}); */
