const form = document.form;
let pass = form.pass;
let login = form.login;

if (localStorage.getItem("user")) {
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  pass.value = user.pass;
  login.value = user.login;

  let formm = document.getElementsByClassName("form")[0];
  formm.style.display = "none";
  const div = document.createElement("div");
  div.className = "content__page";
  div.innerText = "Вы успешно зашли на сайт!";
  const content = document.getElementsByClassName("content")[0];
  content.append(div);
  const divImg = document.createElement("div");
  divImg.className = "img";
  content.append(divImg);
  const img = document.createElement("img");
  img.src = "../img/1528625727_24.jpg";
  divImg.append(img);
  const delet = document.createElement("button");
  delet.className = "delete";
  delet.innerText = "Удалить данные!";
  content.append(delet);
  delet.addEventListener("click", function (item) {
    localStorage.clear();
    alert("Страница будет перезагружена через 5 секунд!");
    setTimeout(() => {
      location.reload();
    }, 5000);
  });
}

let button = document.getElementById("button");

form.addEventListener("submit", (event) => {
  let passValue = pass.value;
  let passArr = passValue.split("");
  let loginValue = login.value;
  let loginArr = loginValue.split("");
  if (loginArr.length < 5) {
    return alert("Короткий логин!");
  }
  if (passArr.length < 5) {
    return alert("Короткий пароль!");
  }
  let flag = false;
  let flag2 = false;
  passArr.forEach((item) => {
    if (Number(item)) {
      flag = true;
    } else {
      flag2 = true;
    }
  });
  if (flag && flag2) {
    alert("Вы успешно сохранили данные!");
    let obj = {
      pass: passValue,
      login: loginValue,
    };
    const convert = JSON.stringify(obj);
    localStorage.setItem("user", convert);
  } else {
    alert("ОШИБКА! Пароль должен содержать минимум одну цифру и одну букву!");
  }
});
