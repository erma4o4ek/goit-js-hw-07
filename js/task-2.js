const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.createElement("ul");

ingredients.forEach(function (ingredient) {
  let li = document.createElement("li");
  li.textContent = ingredient;
  list.appendChild(li);
});

console.log(list);

const getList = document.querySelector("#ingredients");
getList.appendChild(list);