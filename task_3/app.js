"use strict";

document.addEventListener("DOMContentLoaded", () => {
   const countryInput = document.querySelector("#countryInput");
   const searchButton = document.querySelector("#searchButton");
   const resetButton = document.querySelector("#resetButton");
   const universityTable = document
      .querySelector("#universityTable")
      .querySelector("tbody");

   searchButton.addEventListener("click", () => {
      const country = countryInput.value.toLowerCase().trim();

      if (country === "") {
         alert("Пожалуйста, введите название страны.");
         return;
      }

      universityTable.innerHTML = "";

      fetch(`http://universities.hipolabs.com/search?country=${country}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.length === 0) {
               alert("Университеты в данной стране не найдены.");
               return;
            }

            data.forEach((university, index) => {
               const row = universityTable.insertRow();
               row.insertCell(0).textContent = index + 1;
               row.insertCell(1).textContent = university.name;
               row.insertCell(2).textContent = university.country;
               const websiteCell = row.insertCell(3);

               if (university.web_pages && university.web_pages.length > 0) {
                  const websiteLink = document.createElement("a");
                  websiteLink.href = university.web_pages[0];
                  websiteLink.textContent = university.web_pages[0];
                  websiteCell.appendChild(websiteLink);
               } else {
                  websiteCell.textContent = "Нет информации";
               }
            });
         })
         .catch((err) => alert(err.message));
   });

   resetButton.addEventListener("click", () => {
      countryInput.value = "";
      universityTable.innerHTML = "";
   });
});
