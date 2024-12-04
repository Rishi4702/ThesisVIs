document.addEventListener('DOMContentLoaded', function () {

    const markers = document.querySelectorAll('.leaflet-marker-icon');
    const imgElement = document.getElementById('dynamic-image');

    if (markers.length > 0) {
        // Select a random marker
        const randomIndex = Math.floor(Math.random() * markers.length);
        const randomMarker = markers[randomIndex];

        // Set the image source to the base64 data of the random marker
        const base64Data = randomMarker.firstElementChild.getAttribute('data-base64')
        if (base64Data) {
            imgElement.src = "data:image/png;base64," + base64Data;
        }
    }

    // Bind the onClick event to every icon
    markers.forEach(function(marker, index) {
        marker.addEventListener('click', function(targetDiv) {
            const imgElement = document.getElementById('dynamic-image');
            imgElement.src = "data:image/png;base64," + targetDiv.target.getAttribute('data-base64');
        });
    });

});