const addForm = document.querySelector(".add");
const list = document.querySelector(".list-group");
const search = document.querySelector(".search");
var storage = [];

window.onload = function () {
  if (localStorage.getItem("list-group-item") != null)
    storage = JSON.parse(localStorage.getItem("list-group-item"));

  for (var i = 0; i < storage.length; i++) {
    if (storage[i] != "") {
      let htmlTemplate2 = `<li class="list-group-item flex justify-content-between align-items-center">
      <span class="text text-light">${storage[i]}</span>
      <input class="form-check-input check my-2 mx-2" type="checkbox" />
      <i class="fas fa-trash-alt mx-4"></i>
    </li>`;
      list.innerHTML += htmlTemplate2;
    }
  }
};
addForm.addEventListener("submit", (i) => {
  i.preventDefault();
  let addTodo = addForm.add.value;
  let htmlTemplate = `<li class="list-group-item flex justify-content-between align-items-center">
      <span class="text text-light">${addTodo}</span>
      <input class="form-check-input check my-2 mx-2" type="checkbox" />
      <i class="fas fa-trash-alt mx-4"></i>
    </li>`;

  if (addTodo != "") {
    list.innerHTML += htmlTemplate;
    addForm.reset();
  }

  if (addTodo != "") {
    storage.push(addTodo);
    localStorage.setItem("list-group-item", JSON.stringify(storage));
  }
});

// delete todo element
list.addEventListener("click", (i) => {
  if (i.target.tagName == "I") {
    let v = JSON.parse(localStorage.getItem("list-group-item"));

    for (var k = 0; k < v.length; k++) {
      if (v[k] == i.target.parentElement.innerText) v.splice(k, 1);
    }

    localStorage.setItem("list-group-item", JSON.stringify(v));
    i.target.parentElement.remove();
  }

  // pt buton linie orizontala
  if (i.target.tagName == "INPUT") {
    const parenta = i.target.parentElement;
    let arr = Array.from(parenta.children);
    console.log(arr[0]);
    if (
      arr[0].style.textDecoration == "" ||
      arr[0].style.textDecoration == "none"
    ) {
      arr[0].style.textDecoration = "line-through";
    } else {
      arr[0].style.textDecoration = "none";
    }
  }
});

// search bar
search.addEventListener("keyup", (e) => {
  const spans = document.querySelectorAll("span");
  for (let i = 0; i < spans.length; i++)
    if (!spans[i].innerText.includes(search.search.value)) {
      spans[i].parentNode.style.display = "none";
    } else {
      spans[i].parentNode.style.display = "flex";
    }
});
