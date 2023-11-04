const shortenButton = document.getElementById('shorten');
const reloadButton = document.getElementById('reload');

// Add a click event listener to the Shorten button
shortenButton.addEventListener('click', shortenURL);

// Function to shorten the URL
function shortenURL() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenURLTextarea = document.getElementById("shortenedURL");

    // Fetch data from the API and update the textarea
    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            shortenURLTextarea.value = data;
        })
        .catch(error => {
            shortenURLTextarea.value = "Error: Unable to shorten URL!";
        });
}

// Add a click event listener to the Reload button
reloadButton.addEventListener('click', () => {
    location.reload();
});
