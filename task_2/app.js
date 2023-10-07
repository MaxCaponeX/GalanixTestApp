"use strict";

//!! Task 2 (2.7)
//! Получаем кол-во изображений
const images = document.querySelectorAll(".image-grid img");

//!Создаем элемент для отображения количества изображений и даты
const infoBlock = document.createElement("div");
infoBlock.classList.add("info-block");

//! Функция для обновления данных внутри блока
const updateInfoBlock = (img) => {
   const currentDate = new Date();
   const formateDate = currentDate.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
   });

   infoBlock.textContent = `Количество изображений: ${img.length};  Дата: ${formateDate}`;
};

//! Вставляем информацию в body
document.body.insertBefore(infoBlock, document.body.firstChild);

updateInfoBlock(images);
