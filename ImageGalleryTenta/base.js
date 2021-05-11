const apiKey = "ed033607eb107d8e7d8c5f174bd2209d";
const searchBar = document.querySelector(".searchBar");
const searchTxt = document.querySelector(".searchTxt");
const searchBtn = document.querySelector(".searchBtn");
const searchResult = document.querySelector(".searchResult");
const lightbox = document.querySelector(".lightbox");
const thumbnailSize = "q";
const largeImgSize = "b";

//Image URL
//https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

searchBtn.addEventListener("click", async function () {
    const response = await fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&text=${searchTxt.value}&per_page=20&sort=relevance&format=json&nojsoncallback=1`);
    const data = await response.json();

    //console.log(data);

    searchResult.innerHTML = "";

    data.photos.photo.forEach(photo => {
        const serverId = photo.server;
        const id = photo.id;
        const secret = photo.secret;
        const thumbnail = document.createElement("img");
        thumbnail.src = `https://live.staticflickr.com/${serverId}/${id}_${secret}_${thumbnailSize}.jpg`
        searchResult.appendChild(thumbnail)
    });

    //Makes the images clickable for a larger version
    const searchResultImgs = document.querySelectorAll(".searchResult img");
    searchResultImgs.forEach(img => {
        img.addEventListener("click", function () {
            //console.log(img.src);
            lightbox.classList.add("active");
            const largeImg = document.createElement("img");
            largeImg.src = img.src.replace(`_${thumbnailSize}.jpg`, `_${largeImgSize}.jpg`);
            lightbox.appendChild(largeImg);
        });
    });
});

searchTxt.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        // Trigger the button element with a click
        searchBtn.click();
    }
});

lightbox.addEventListener("click", function (event) {
    //Returns if you're not clicking outside the image
    if (event.target !== event.currentTarget) {
        return;
    }
    //Hides the lightbox
    lightbox.classList.remove("active");
    //Removes the appended image
    lightbox.innerHTML = "";
});
