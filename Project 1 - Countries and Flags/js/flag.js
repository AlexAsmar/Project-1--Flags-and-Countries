"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const pageHeader = "Countries and Flags";

    let countryImg1 = document.querySelector("#imgCountry1");
    let countryImg2 = document.querySelector("#imgCountry2");
    let countryImg3 = document.querySelector("#imgCountry3");
    let headerEl = document.querySelector("#pageHeader");

    countryImg1.src = "images/americanflag.webp";

    countryImg2.src = "images/japanflag.png";

    countryImg3.src = "images/Iraq-flag.png";

    countryImg1.addEventListener("mouseover", () => {
        countryImg1.src = "images/USA-map.jpg";
        headerEl.textContent = "The United States of America";
    });

    countryImg1.addEventListener("mouseout", () => {
        countryImg1.src = "images/americanflag.webp";
        headerEl.textContent = pageHeader;
    });

    countryImg2.addEventListener("mouseover", () => {
        countryImg2.src = "images/japan-map.jpg";
        headerEl.textContent = "Japan";
    });

    countryImg2.addEventListener("mouseout", () => {
        countryImg2.src = "images/japanflag.png";
        headerEl.textContent = pageHeader;
    });

    countryImg3.addEventListener("mouseover", () => {
        countryImg3.src = "images/Iraq_map.jpg";
        headerEl.textContent = "Iraq";
    });

    countryImg3.addEventListener("mouseout", () => {
        countryImg3.src = "images/Iraq-flag.png";
        headerEl.textContent = pageHeader;
    });
});
