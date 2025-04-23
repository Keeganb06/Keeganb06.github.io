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
