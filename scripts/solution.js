let list = document.querySelectorAll("li");

for (const listOfUl of list) {
  console.log(list.textContent);
}

console.log(list.length);

const text = [];

for (const listOfUl of list) {
  text.push(listOfUl.textContent);
}
console.log(text);
