const headerArray = [
  { name: "Google", href: "http://google.com" },
  { name: "Yandex", href: "http://yandex.com" },
  { name: "VK", href: "http://vk.com" },
  { name: "Youtube", href: "http://youtube.com" },
  { name: "Ebay", href: "http://ebay.com" },
];

const footerArray = [
  { name: "VK", href: "http://vk.com" },
  { name: "GitHub", href: "http://github.com" },
  { name: "Pinterest", href: "http://pinterest.com" },
  { name: "Yandex", href: "http://yandex.com" },
  { name: "Instagram", href: "http://instagram.com" }
]

const headerStyles = {
  nav: "header__nav",
  ul: "header__ul",
  li: "header__li",
  a: "header__a",
};

const footerStyles = {
  nav: "footer__nav",
  ul: "footer__ul",
  li: "footer__li",
  a: "footer__a"
}

function createNav(array, styles) {
  const nav = document.createElement("nav");
  nav.className = styles.nav;
  let ul = document.createElement("ul");
  ul.className = styles.ul;
  nav.prepend(ul);
  let li = [];
  let a = [];
  for (let i = 0; i < array.length; i++) {
    li[i] = document.createElement("li");
    li[i].className = styles.li;
    a[i] = document.createElement("a");
    a[i].className = styles.a;
    ul.append(li[i]);
    li[i].append(a[i]);
    a[i].href = array[i].href;
    a[i].innerText = array[i].name;
  }
  return nav;
}

const header = document.createElement("header");
document.body.append(header);
const headerNav = createNav(headerArray, headerStyles);

const footer = document.createElement("footer");
document.body.append(footer);
const footerNav = createNav(footerArray, footerStyles);


header.append(headerNav);
footer.append(footerNav);
