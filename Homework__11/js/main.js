const formArray = [
  { type: "login", name: "login", style: "text", title: "Логин" },
  { type: "password", name: "password", style: "text", title: "Пароль" },
  { type: "tel", name: "tel", style: "text", title: "Телефон" },
  { type: "radio", name: "radio", text: "Мужчина", style: "radio", title: "Пол:" },
  { type: "radio", name: "radio", text: "Женщина", style: "radio" },
  {
    type: "checkbox",
    name: "checkbox",
    text: "Квартира",
    style: "checkbox",
    title: "Недвижимость:",
  },
  { type: "checkbox", name: "checkbox", text: "Дом", style: "checkbox" },
  { type: "checkbox", name: "checkbox", text: "Машина", style: "checkbox" },
  { type: "checkbox", name: "checkbox", text: "Бизнес", style: "checkbox" },
  { type: "checkbox", name: "checkbox", text: "Мотоцикл", style: "checkbox" },
];

function addForm(array) {
  let div = document.createElement("div");
  div.className = "block";
  array.forEach((item, index) => {
    let input = document.createElement("input");
    let p = document.createElement("p");
    input.type = item.type;
    input.name = item.name;
    input.className = item.style;
    if (item.title) {
      let title = document.createElement("p");
      title.className = "title";
      title.innerText = item.title;
      div.append(title);
    }
    if (item.text) {
      input.value = item.text;
      p.innerText = item.text;
    }
    p.prepend(input);
    div.append(p);
  });
  const button = document.createElement("button");
  button.innerText = "Отправить";
  button.className = "button";
  div.append(button);
  return div;
}

const form = document.createElement("form");
const div = addForm(formArray);
form.append(div);
document.body.append(form);
