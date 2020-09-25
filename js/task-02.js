// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.

// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const productsList = document.querySelector('#ingredients');

ingredients.map(item => {
  const items = document.createElement('li');
  items.textContent = item;
  productsList.append(items);
});
