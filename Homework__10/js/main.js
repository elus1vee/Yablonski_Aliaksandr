const menu = document.getElementsByTagName("ul")[0];
const del = document.getElementsByClassName("delete")[0];
let menuArray = Array.from(menu.getElementsByTagName("li"));

menu.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    if (event.ctrlKey) {
      event.target.className = "selected";
    } else {
      menuArray.forEach((item) => {
        item.classList = "none";
      });
      event.target.className = "selected";
    }
  }
});

del.addEventListener("click", function (event) {
  menuArray.forEach((item) => {
    item.classList = "none";
  });
});
