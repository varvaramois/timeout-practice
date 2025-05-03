// const message = setTimeout(() => {
//   console.log("meow");
// }, 3000);

// const interval = setInterval(() => {
//   console.log("MEOW");
// }, 2000);

// const btn = document.querySelector(".btn");
// const text = document.querySelector("[text]");
// btn.addEventListener("click", function () {
//   setTimeout(() => {
//     text.textContent = Math.floor(Math.random() * 100);
//   }, 2000);
//   if (text.textContent.textContent >= 5) {
//     setTimeout(() => {
//       alert("BUN");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       prompt("введи циферки банк. карти");
//     }, 2000);
//   }
// });
//Завдання "Лічильник": Створіть лічильник,
// який збільшується на одиницю кожну секунду. Виводьте значення лічильника на сторінці.
const button = document.querySelector(".button");
const content = document.querySelector(".content");
let count = 0;
button.addEventListener("click", function () {
  setTimeout(() => {
    setInterval(() => {
      count++;
      content.textContent = count;
    }, 1000);
  }, 1000);
});
//Завдання "Зміна кольору": Створіть блок, який
//  змінює свій фоновий колір кожні 3 секунди. Використовуйте setInterval для зміни кольору.
const box = document.querySelector(".box");

const colors = [
  "#8A2BE2",
  "#DC143C",
  "#00008B",
  "#f1c40f",
  "#228B22",
  "#e67e22",
];
setInterval(() => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  box.style.backgroundColor = colors[randomIndex];
}, 3000);
