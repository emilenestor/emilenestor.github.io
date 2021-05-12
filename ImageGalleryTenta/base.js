const apiKey = "ed033607eb107d8e7d8c5f174bd2209d";
const searchBar = document.querySelector(".searchBar");
const searchTxt = document.querySelector(".searchTxt");
const searchBtn = document.querySelector(".searchBtn");
const backToTop = document.querySelector(".backToTop");
const searchResult = document.querySelector(".searchResult");
const resultNumber = document.querySelector(".resultNumber");
const scrollInstruction = document.querySelector(".scrollInstruction");
const footer = document.querySelector("footer");
const lightbox = document.querySelector(".lightbox");
const thumbnailSize = "q";
const largeImgSize = "b";
let imgsPerPage = 10;
let page = 1;


let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0.5
};
const observer = new IntersectionObserver(handleIntersect, options);

//Image URL
//https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

searchBtn.addEventListener("click", async function () {
    //Resets a few parameters
    searchResult.innerHTML = "";
    resultNumber.style.display = "none";
    scrollInstruction.style.display = "none";
    footer.style.display = "none";
    page = 1;

    await fetchData();
});

async function fetchData() {
    try {
        const response = await fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&text=${searchTxt.value}&page=${page}&per_page=${imgsPerPage}&sort=relevance&format=json&nojsoncallback=1`);
        const data = await response.json();

        if (data.stat == "fail") {
            throw data.message;
        }

        console.log(data);

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
        console.log(searchResultImgs.length);
        for (let index = searchResultImgs.length - data.photos.photo.length; index < searchResultImgs.length; index++) {

            searchResultImgs[index].addEventListener("click", function () {
                lightbox.classList.add("active");
                const largeImg = document.createElement("img");
                largeImg.src = searchResultImgs[index].src.replace(`_${thumbnailSize}.jpg`, `_${largeImgSize}.jpg`);
                lightbox.appendChild(largeImg);
            });
        }

        resultNumber.style.display = "flex";
        resultNumber.innerHTML = `"${searchTxt.value}" gave ${data.photos.total} results`;

        if (data.photos.pages > 1) {
            scrollInstruction.style.display = "flex";
            footer.style.display = "flex";
        }

        observer.observe(footer);

    } catch (error) {
        searchResult.innerHTML = "Error: " + error;
    }
}

function handleIntersect(entries) {
    if (entries[0].isIntersecting) {
        loadNextPage();
    }
}

async function loadNextPage() {

    page++;
    await fetchData();
}

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

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});