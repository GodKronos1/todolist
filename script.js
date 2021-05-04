const addForm = document.querySelector(".add");
const list = document.querySelector(".list-group");
const search = document.querySelector(".search");

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
});

// delete todo element
list.addEventListener("click", (i) => {
  if (i.target.tagName == "I") {
    i.target.parentElement.remove();
  }

  // pt buton input linie
  if (i.target.tagName == "INPUT") {
    const parenta = i.target.parentElement;
    let arr = Array.from(parenta.children);

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
