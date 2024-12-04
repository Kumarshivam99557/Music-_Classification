const fileUpload = document.getElementById('fileUpload');
const checkBtn = document.getElementById('checkBtn');
const genreResult = document.getElementById('genreResult');

checkBtn.addEventListener('click', function() {
  if (!fileUpload.files.length) {
    genreResult.textContent = "Please upload a music file first!";
    return;
  }

  const genres = ["Pop", "Rock", "DJ", "Jazz", "Classical", "Hip-Hop", "Country"];
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];

  genreResult.textContent = `The genre is: ${randomGenre}`;
  checkBtn.disabled = true;  // Disable the button after clicking
});

fileUpload.addEventListener('change', function() {
  genreResult.textContent = "Upload a music file to classify its genre!";
  checkBtn.disabled = false;  // Enable the button when a new file is uploaded
});
