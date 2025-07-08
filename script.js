// ========== Image Carousel ==========
const images = [
  "https://via.placeholder.com/600x300?text=Image+1",
  "https://via.placeholder.com/600x300?text=Image+2",
  "https://via.placeholder.com/600x300?text=Image+3"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function showImage(index) {
  carouselImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// ========== Fetch Joke from API ==========
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("jokeText").textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("jokeText").textContent = "Failed to fetch joke. Try again!";
    });
}
