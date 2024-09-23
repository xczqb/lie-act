const audio = document.getElementById('backgroundMusic');

function playAudio() {
    audio.play().catch(function(error) {
        console.log('Playback prevented:', error);
    });
}

document.addEventListener('click', function() {
    if (audio.paused) {
        playAudio(); 
    }
});

// Button event listener
document.getElementById('musicButton').addEventListener('click', function(event) {
    event.stopPropagation();
    if (audio.paused) {
        audio.play();
        this.textContent = "Pause Music";
    } else {
        audio.pause();
        this.textContent = "Play Music";
    }
});





document.addEventListener("DOMContentLoaded", function() {
    const collectionSection = document.getElementById('collection');
    const items = document.querySelectorAll('.collection-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach(item => item.classList.add('visible'));
            } else {
                items.forEach(item => item.classList.remove('visible'));
            }
        });
    }, {
        threshold: 0.7 
    });

    observer.observe(collectionSection);
});


document.addEventListener("DOMContentLoaded", function() {
    const gallerySection = document.getElementById('gallery');
    const items = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach(item => item.classList.add('visible'));
            } else {
                items.forEach(item => item.classList.remove('visible'));
            }
        });
    }, {
        threshold: 0.7 
    });

    observer.observe(gallerySection);
});
