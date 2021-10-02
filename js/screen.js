const mainScreen = document.querySelector("#mainScreen");

const morning = [
    "screen/moring_1.jpg",
    "screen/moring_2.jpg",
    "screen/moring_3.jpg",
];

const afternoon = [
    "screen/afternoon_1.jpg",
    "screen/afternoon_2.jpg",
    "screen/afternoon_3.jpg",
    "screen/afternoon_4.jpg",
    "screen/afternoon_5.jpg",
    "screen/afternoon_6.jpg",
];

const evening = [
    "screen/evening_1.jpg",
    "screen/evening_2.jpg",
    "screen/evening_3.jpg",
    "screen/evening_4.jpg",
];

const night = [
    "screen/night_1.jpg",
    "screen/night_2.jpg",
    "screen/night_3.jpg",
    "screen/night_4.jpg",
    "screen/night_5.jpg",
    "screen/night_6.jpg",
    "screen/night_7.jpg",
    "screen/night_8.jpg",
];

function addImage() {
    const random_M_Image = morning[Math.floor(Math.random() * morning.length)];
    const random_A_Image = afternoon[Math.floor(Math.random() * afternoon.length)];
    const random_E_Image = evening[Math.floor(Math.random() * evening.length)];
    const random_N_Image = night[Math.floor(Math.random() * night.length)];
    const date = new Date();
    if (date.getHours() >= 7 && date.getHours() < 10) {
        mainScreen.setAttribute("src", random_M_Image);
    } else if (date.getHours() >= 10 && date.getHours() < 17) {
        mainScreen.setAttribute("src", random_A_Image);
    } else if (date.getHours() >= 17 && date.getHours() < 19) {
        mainScreen.setAttribute("src", random_E_Image);
    } else {
        mainScreen.setAttribute("src", random_N_Image);
    }
};

addImage();