const urlCompany = "https://random-data-api.com/api/company/random_company";
const urlUser = "https://random-data-api.com/api/users/random_user";
const urlPhone = "https://random-data-api.com/api/phone_number/random_phone_number";

let activePage = "company";
let user = document.getElementById("userButton");
let company = document.getElementById("companyButton");
let phone = document.getElementById("phoneButton");
const content = document.getElementsByClassName("content")[0];
company.className = "activeButton";

function companyFunc() {
  fetch(urlCompany)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const img = document.createElement("img");
      img.src = data.logo;
      content.append(img);
      const businessName = document.createElement("p");
      businessName.innerText = `Business Name: ${data.business_name}`;
      content.append(businessName);
      const catchPhrase = document.createElement("p");
      catchPhrase.innerText = `Catch phrase: ${data.catch_phrase}`;
      content.append(catchPhrase);
    });
}
function userFunc() {
  fetch(urlUser)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const avatar = document.createElement("img");
      avatar.src = data.avatar;
      content.append(avatar);
      const firstName = document.createElement("p");
      firstName.innerText = `First name: ${data.first_name}`;
      content.append(firstName);
      const secondName = document.createElement("p");
      secondName.innerText = `Second name: ${data.last_name}`;
      content.append(secondName);
    });
}
function phoneFunc() {
  fetch(urlPhone)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const avatar = document.createElement("img");
      avatar.src = "../img/phone2.png";
      content.append(avatar);
      const cellPhone = document.createElement("p");
      cellPhone.innerText = `Cell Phone: ${data.cell_phone_in_e164}`;
      content.append(cellPhone);
      const id = document.createElement("p");
      id.innerText = `Id: ${data.id}`;
      content.append(id);
      const phoneNumber = document.createElement("p");
      phoneNumber.innerText = `Phone Number: ${data.phone_number}`;
      content.append(phoneNumber);
    });
}

companyFunc();

user.addEventListener("click", (event) => {
  content.innerHTML = "";
  activePage = "user";
  company.className = "";
  phone.className = "";
  user.className = "activeButton";
  userFunc();
});
company.addEventListener("click", (event) => {
  content.innerHTML = "";
  activePage = "company";
  company.className = "activeButton";
  user.className = "";
  phone.className = "";
  companyFunc();
});
phone.addEventListener("click", (event) => {
  content.innerHTML = "";
  activePage = "phone";
  phone.className = "activeButton";
  user.className = "";
  company.className = "";
  phoneFunc();
});
