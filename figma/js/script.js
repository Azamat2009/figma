//header
const header = document.createElement('header');
const headerLogo = document.createElement('div');
headerLogo.className = "header_logo";
const logoImg = document.createElement('img');
logoImg.src = "./assets/icons/header_logo.svg";
logoImg.alt = "";
logoImg.className = "logo";
headerLogo.appendChild(logoImg);

const headerWrapper = document.createElement('div');
headerWrapper.className = "header_wrapper";

const headerLinks = [
    { href: "#", imgSrc: "./assets/icons/header-icon1.svg", imgAlt: "", span: "Все курсы" },
    { href: "#", span: "Мероприятия" },
    { href: "#", span: "Базы знаний" },
    { href: "#", span: "Карьера" },
    { href: "#", imgSrc: "./assets/icons/header-icon2.svg", imgAlt: "", span: "Нижний Новгород" },
    { href: "#", span: "8 800 950-33-98" },
    { href: "#", imgSrc: "./assets/icons/header-icon3.svg", imgAlt: "", span: "Войти" }
];
headerLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    if (link.imgSrc) {
        const img = document.createElement('img');
        img.src = link.imgSrc;
        img.alt = link.imgAlt;
        a.appendChild(img);
    }
    const span = document.createElement('span');
    span.textContent = link.span;
    a.appendChild(span);
    headerWrapper.appendChild(a);
});
header.appendChild(headerLogo);
header.appendChild(headerWrapper);

//main
const main = document.createElement('main');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.textContent = "Все программы обучения";
section.appendChild(h1);

const sectionContainer = document.createElement('div');
sectionContainer.className = "section-container";

const babies = [
    { imgSrc: "./assets/img/children.png", h3: "Дети", p: "8 — 14 лет" },
    { imgSrc: "./assets/img/teenagers.png", h3: "Подростки", p: "15 — 18 лет" },
    { imgSrc: "./assets/img/children.png", h3: "Взрослые", p: "19-100"},
]