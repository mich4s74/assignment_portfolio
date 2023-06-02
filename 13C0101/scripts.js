window.addEventListener("DOMContentLoaded", init);

function init(event) {
  const header = document.querySelector("header");
  loadPeople();
}

async function loadPeople() {
  //Mockup users generated at mockaroo.com
  //Random images from source.unsplash.com
  const response = await fetch("people.json");
  console.log("response", response);
  const people = await response.json();

  displayPeople(people);
}

function displayPeople(peopleJSON) {
  const userTemplate = document.querySelector("template").content;

  peopleJSON.forEach((user) => {
    const templateClone = userTemplate.cloneNode(true);

    templateClone.querySelector(".card_image").src = user.image;
    templateClone.querySelector(
      ".card_name"
    ).textContent = `${user.first_name} ${user.last_name}`;
    templateClone.querySelector(".card_slogan").textContent = user.slogan;
    templateClone.querySelector(
      ".card_mail"
    ).innerHTML = `<a href="mailto:${user.email}" target="_blank">${user.email}</a>`;
    templateClone.querySelector(".card_title").innerHTML = `${user.title}`;

    document.querySelector("#card_container").appendChild(templateClone);
  });
}
