const apiKey = "ed033607eb107d8e7d8c5f174bd2209d";
const searchBar = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");
const searchResult = document.querySelector(".searchResult");

//Image URL
//https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg


searchBtn.addEventListener("click", async function () {
    const response = await fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&text=${searchTxt.value}&per_page=20&sort=relevance&format=json&nojsoncallback=1`)
    const data = await response.json()
    console.log(data);

    data.photos.photo.forEach(photo => {

        const serverId = photo.server;
        const id = photo.id;
        const secret = photo.secret;
        const size = "q";
        const thumbnail = document.createElement("img");
        thumbnail.src = `https://live.staticflickr.com/${serverId}/${id}_${secret}_${size}.jpg`
        searchResult.appendChild(thumbnail)
        
    });
})

searchBar.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchBtn.click();
    }
});
