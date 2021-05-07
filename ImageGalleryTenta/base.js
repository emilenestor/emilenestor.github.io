const apiKey = "ed033607eb107d8e7d8c5f174bd2209d";
const searchBar = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");
const searchResult = document.querySelector(".searchResult");

searchBtn.addEventListener("click", async function () {
    const response = await fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&text=${searchBar.value}&per_page=20&sort=date-taken-asc&format=json&nojsoncallback=1`)
    const data = await response.json()
    console.log(data);
})

searchBar.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchBtn.click();
    }
});
