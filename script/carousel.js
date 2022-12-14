// karrusel
const carouselSally = document.querySelector("#carousel-sally");
const carouselEmily = document.querySelector("#carousel-emily");
const carouselTania = document.querySelector("#carousel-tania");

//Knapper
const backButtonSally = document.querySelector("#carousel_back_button_sally");
const forwardButtonSally = document.querySelector(
  "#carousel_forward_button_sally"
);
const backButtonEmily = document.querySelector("#carousel_back_button_emily");
const forwardButtonEmily = document.querySelector(
  "#carousel_forward_button_emily"
);
const backButtonTania = document.querySelector("#carousel_back_button_tania");
const forwardButtonTania = document.querySelector(
  "#carousel_forward_button_tania"
);

// indsaet billeder i carousel og giv dem id til navigation Sally
for (let i = 1; i <= 10; i++) {
  const imageSally = document.createElement("img");

  imageSally.classList.add("carousel-item");
  imageSally.src =
    "/img/web_img/teams_content/sally/Sally_tat_img" + i + ".png";
  imageSally.alt = "Billede af Sally's tatoveringer" + i;
  imageSally.id = "carousel-item-sally" + i;

  carouselSally.appendChild(imageSally);
}

// indsaet billeder i carousel og giv dem id til navigation Emily
for (let i = 1; i <= 10; i++) {
  const imageEmily = document.createElement("img");

  imageEmily.classList.add("carousel-item");
  imageEmily.src =
    "/img/web_img/teams_content/emily/Emily_tat_img" + i + ".png";
  imageEmily.alt = "Billede af Emily's tatoveringer";
  imageEmily.id = "carousel-item-emily" + i;

  carouselEmily.appendChild(imageEmily);
}

// indsaet billeder i carousel og giv dem id til navigation Tania
for (let i = 1; i <= 10; i++) {
  const imageTania = document.createElement("img");

  imageTania.classList.add("carousel-item");
  imageTania.src =
    "/img/web_img/teams_content/tania/Tania_tat_img" + i + ".png";
  imageTania.alt = "Billede af Tania's tatoveringer";
  imageTania.id = "carousel-item-tania" + i;

  carouselTania.appendChild(imageTania);
}

let lastImageIdSally = 1;
let lastImageIdEmily = 1;
let lastImageIdTania = 1;

// event tryk frem
forwardButtonSally.addEventListener("click", () => {
  // stop hvis sidste billede
  if (lastImageIdSally >= 10) return;

  // opdater aktive billede
  const nextImageId = lastImageIdSally + 1;

  // scroll til naeste billede
  const nextImage = document.querySelector(
    "#carousel-item-sally" + nextImageId
  );

  const scrollPosition = nextImage.getBoundingClientRect().left;

  carouselSally.scrollBy({ left: scrollPosition, behavior: "smooth" });
  lastImageIdSally = nextImageId;
});

// event tryk tilbage
backButtonSally.addEventListener("click", () => {
  // stop hvis foerste  billede
  if (lastImageIdSally <= 1) return;

  // opdater aktive billede
  const nextImageId = lastImageIdSally - 1;

  // scroll til naeste billede
  const nextImage = document.querySelector(
    "#carousel-item-sally" + nextImageId
  );

  const scrollPosition = nextImage.getBoundingClientRect().left;

  carouselSally.scrollBy({ left: scrollPosition, behavior: "smooth" });

  lastImageIdSally = nextImageId;
});

// event tryk frem
forwardButtonEmily.addEventListener("click", () => {
  // stop hvis sidste billede
  if (lastImageIdEmily >= 10) return;
  console.log("Hej");

  // opdater aktive billede
  const nextImageId = lastImageIdEmily + 1;

  // scroll til naeste billede
  const nextImage = document.querySelector(
    "#carousel-item-emily" + nextImageId
  );

  const scrollPosition = nextImage.getBoundingClientRect().left;

  carouselEmily.scrollBy({ left: scrollPosition, behavior: "smooth" });
  lastImageIdEmily = nextImageId;
});

// event tryk tilbage
backButtonEmily.addEventListener("click", () => {
  // stop hvis foerste  billede
  if (lastImageIdEmily <= 1) return;

  // opdater aktive billede
  const nextImageId = lastImageIdEmily - 1;

  // scroll til naeste billede
  const nextImage = document.querySelector(
    "#carousel-item-emily" + nextImageId
  );

  const scrollPosition = nextImage.getBoundingClientRect().left;

  carouselEmily.scrollBy({ left: scrollPosition, behavior: "smooth" });

  lastImageIdEmily = nextImageId;
});

// event tryk frem
forwardButtonTania.addEventListener("click", () => {
  // stop hvis sidste billede
  if (lastImageIdTania >= 10) return;

  // opdater aktive billede
  const nextImageId = lastImageIdTania + 1;

  // scroll til naeste billede
  const nextImage = document.querySelector(
    "#carousel-item-tania" + nextImageId
  );

  const scrollPosition = nextImage.getBoundingClientRect().left;

  carouselTania.scrollBy({ left: scrollPosition, behavior: "smooth" });
  lastImageIdTania = nextImageId;
});

// event tryk tilbage
backButtonTania.addEventListener("click", () => {
  // stop hvis foerste  billede
  if (lastImageIdTania <= 1) return;

  // opdater aktive billede
  const nextImageId = lastImageIdTania - 1;

  // scroll til naeste billede
  const nextImage = document.querySelector(
    "#carousel-item-tania" + nextImageId
  );

  const scrollPosition = nextImage.getBoundingClientRect().left;

  carouselTania.scrollBy({ left: scrollPosition, behavior: "smooth" });

  lastImageIdTania = nextImageId;
});
