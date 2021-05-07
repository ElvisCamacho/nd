const xInputField = document.getElementById("x");
const yInputField = document.getElementById("y");
const zInputField = document.getElementById("z");
const form = document.getElementById("form");
const contenElement = document.getElementById("content");

const content = [
  {
    name: "Equilateral Triangle",
    discription: " because it has all three sides of equal length",
  },
  {
    name: "Isoceles Triangle",
    discription: " because it has only 2 sides of equal length",
  },
  {
    name: "Scalene Triangle",
    discription: " because all three sides have a different length",
  }
];

form.addEventListener("submit", (e) => {
  const x = xInputField.value;
  const y = yInputField.value;
  const z = zInputField.value;
  e.preventDefault();
  if (x === y && y === z) {
    contenElement.innerText =
      "This is a " + content[0].name + content[0].discription;
    Equilateral();
  } else if (x === y || y === z || z === x) {
    contenElement.innerHTML =
      "This is a " + content[1].name + content[1].discription;
    Isoceles();
  } else {
    contenElement.innerHTML =
      "This is a " + content[2].name + content[2].discription;
  }
});
