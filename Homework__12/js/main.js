const url = "https://random-data-api.com/api/company/random_company";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const img = document.getElementById("img");
    img.src = data.logo;
    const title = document.getElementsByClassName("title")[0];
    title.innerText = data.business_name;
    const info = document.getElementsByClassName("information")[0];
    const infoArray = [];
    let catchPhrase = document.createElement("p");
    catchPhrase.className = "info";
    catchPhrase.innerHTML = data.catch_phrase;
    infoArray.push(catchPhrase);
    let type = document.createElement("p");
    type.className = "info";
    type.innerText = `Type: ${data.type}`;
    infoArray.push(type);
    let industry = document.createElement("p");
    industry.className = "info";
    industry.innerText = `Industry: ${data.industry}`;
    infoArray.push(industry);
    let adress = document.createElement("p");
    adress.className = "info";
    adress.innerText = `Full adress: ${data.full_address}`;
    infoArray.push(adress);
    let suffix = document.createElement("p");
    suffix.className = "info";
    suffix.innerText = `Suffix: ${data.suffix}`;
    infoArray.push(suffix);
    let number = document.createElement("p");
    number.className = "info";
    number.innerText = `Phone number: ${data.phone_number}`;
    infoArray.push(number);
    console.log(infoArray);
    infoArray.forEach((item) => {
      info.append(item);
    });

    info.addEventListener("mouseover", (event) => {
      if (event.target.tagName === "P") {
        infoArray.forEach((item) => {
          item.className = "lol";
        });
      }
      event.target.className = "info";
    });
    info.addEventListener("mouseout", (event) => {
      if (event.target.tagName === "P") {
        infoArray.forEach((item) => {
          item.className = "info";
        });
      }
    });
  });
