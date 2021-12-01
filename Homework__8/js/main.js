const headerArray = [
  { name: "Google", href: "http://google.com" },
  { name: "Yandex", href: "http://yandex.com" },
  { name: "VK", href: "http://vk.com" },
  { name: "Youtube", href: "http://youtube.com" },
  { name: "Ebay", href: "http://ebay.com" },
];

let header = document.createElement("header");
let nav = document.createElement("nav");
nav.className = "header__nav";
let ul = document.createElement("ul");
ul.className = "header__ul";
let li = [];
for (let i = 0; i < headerArray.length; i++) {
  li[i] = document.createElement("li");
  li[i].className = "header__li";
}
let a = [];
for (let i = 0; i < headerArray.length; i++) {
  a[i] = document.createElement("a");
  a[i].className = "header__a";
}

document.body.append(header);
document.getElementsByTagName("header")[0].append(nav);
document.getElementsByTagName("nav")[0].append(ul);

li.forEach((item) => document.getElementsByTagName("ul")[0].prepend(item));
a.forEach((item, index) => {
  document.getElementsByTagName("li")[index].append(item);
  item.href = headerArray[index].href;
  item.innerText = headerArray[index].name;
});

// footer logic

const footerArray = [
  { name: "VK", href: "http://vk.com" },
  { name: "GitHub", href: "http://github.com" },
  { name: "Pinterest", href: "http://pinterest.com" },
  { name: "Yandex", href: "http://yandex.com" },
  { name: "Instagram", href: "http://instagram.com" },
];

let footer = document.createElement("footer");
let footerNav = document.createElement("nav");
footerNav.className = "footer__nav";
let footerUl = document.createElement("ul");
footerUl.className = "footer__ul";
let footerLi = [];
for (let i = 0; i < headerArray.length; i++) {
  footerLi[i] = document.createElement("li");
  footerLi[i].className = "footer__li";
}
let footerA = [];
for (let i = 0; i < footerArray.length; i++) {
    footerA[i] = document.createElement("a");
    footerA[i].className = "footer__a";
}

document.body.append(footer);
document.getElementsByTagName("footer")[0].append(footerNav);
document.getElementsByTagName("nav")[1].append(footerUl);

footerLi.forEach((item) => document.getElementsByTagName("ul")[1].prepend(item));
footerA.forEach((item, index) => {
  document.getElementsByTagName("li")[index + headerArray.length].append(item);
  item.href = footerArray[index].href;
  item.innerText = footerArray[index].name;
});
