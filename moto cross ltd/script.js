function prepareVideo() {
    const url = document.getElementById('youtubeUrl').value;
    if (!url) return;

    // Extract video ID from URL
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    }

    if (videoId) {
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else {
        alert('Please enter a valid YouTube URL');
    }
}

const captions = [];

function addCaption() {
    const text = document.getElementById('captionText').value;
    const time = parseFloat(document.getElementById('captionTime').value);

    if (!text || isNaN(time)) {
        alert('Please enter both caption text and time');
        return;
    }

    captions.push({ text, time });
    updateCaptionDisplay();

    // Clear inputs
    document.getElementById('captionText').value = '';
    document.getElementById('captionTime').value = '';
}

function updateCaptionDisplay() {
    const display = document.getElementById('captionDisplay');
    display.innerHTML = captions.map(cap =>
        `<div><strong>${cap.time}s:</strong> ${cap.text}</div>`
    ).join('');
}
