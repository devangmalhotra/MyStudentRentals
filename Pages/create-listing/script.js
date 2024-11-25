function previewListing() {
    // Gather form inputs
    const title = document.getElementById('propertyType').value + " - " + document.getElementById('location').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const footage = document.getElementById('squareFootage').value;

    // Update preview fields
    document.getElementById('preview-title').innerText = title || "N/A";
    document.getElementById('preview-price').innerText = price ? `$${price}` : "N/A";
    document.getElementById('preview-location').innerText = location || "N/A";
    document.getElementById('preview-description').innerText = description || "N/A";
    document.getElementById('preview-details').innerText = `${bedrooms} Beds, ${bathrooms} Baths, ${footage} sqft`;

    // Display photos
    const photos = document.getElementById('photos').files;
    const photoPreview = document.getElementById('preview-photos');
    photoPreview.innerHTML = "";
    Array.from(photos).forEach(photo => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(photo);
        img.alt = "Property Photo";
        photoPreview.appendChild(img);
    });

    // Display video
    const video = document.getElementById('video').files[0];
    const videoPreview = document.getElementById('preview-video');
    videoPreview.innerHTML = "";
    if (video) {
        const vid = document.createElement('video');
        vid.src = URL.createObjectURL(video);
        vid.controls = true;
        videoPreview.appendChild(vid);
    }
}
