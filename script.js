// Selectors
let greetBtn = document.getElementById("greet-btn");
let addUserBtn = document.getElementById("add-user-btn");
let deleteUserBtn = document.getElementById("delete-user-btn");
let circles = document.querySelectorAll(".circle");
let submit = document.getElementById("submit-btn");
let num = document.getElementById("num");
let animated = false;

let database = [];

submit.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("submitted");
  let name = document.getElementById("user-input").value;
  database.push({ name: name, tel: "987123491862" });
  console.log(database);
});

// Events handlers
greetBtn.addEventListener("click", handleGreetBtn);

addUserBtn.addEventListener("click", function () {
  num.innerHTML = (parseInt(num.innerHTML) + 1).toString();
});

deleteUserBtn.addEventListener("click", function () {
  if (num.innerHTML != 0) {
    num.innerHTML = (parseInt(num.innerHTML) - 1).toString();
  }
});

function handleGreetBtn() {
  // console.log(circles)
  if (!animated) {
    for (let circle of circles) {
      circle.className += " animated";
    }
    animated = true;
  } else {
    for (let i = 0; i < circles.length; i++) {
      // // first example
      if (i % 2 == 0) {
        circles[i].className = "circle orange";
      } else {
        circles[i].className = "circle";
      }
    }
    animated = false;
  }
}
