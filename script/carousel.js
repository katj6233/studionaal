// karrusel
const carousel = document.querySelector('#carousel');

//Knapper
const backButton = document.querySelector('#carousel_back_button');
const forwardButton = document.querySelector('#carousel_forward_button');


// indsaet billeder i carousel og giv dem id til navigation
for (let i = 1 ; i <= 10; i++) {
    const image = document.createElement('img');

    image.classList.add('carousel-item');
    image.src = "/img/web_img/teams_content/sally/Sally_tat_img" + i + ".png";
    image.alt = "Billede af";
    image.id = "carousel-item" + i;

    carousel.appendChild(image);
}

let lastImageId = 1;

// event tryk frem
forwardButton.addEventListener('click', () => {
    
    // stop hvis sidste billede
    if(lastImageId >= 10) return;
    
    // opdater aktive billede
    const nextImageId = lastImageId + 1;

    // scroll til naeste billede
    const nextImage = document.querySelector('#carousel-item' + nextImageId);

    const scrollPosition = nextImage.getBoundingClientRect().left

    carousel.scrollBy({left: scrollPosition, behavior: 'smooth'});
    lastImageId = nextImageId;
})

// event tryk tilbage
backButton.addEventListener('click', () => {

        // stop hvis foerste  billede
        if(lastImageId <= 1) return;
    
        // opdater aktive billede
        const nextImageId = lastImageId - 1;
    
        // scroll til naeste billede
        const nextImage = document.querySelector('#carousel-item' + nextImageId);
    
        const scrollPosition = nextImage.getBoundingClientRect().left
    
        carousel.scrollBy({left: scrollPosition, behavior: 'smooth'});

        lastImageId = nextImageId;
})