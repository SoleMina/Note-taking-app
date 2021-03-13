//Setting variables

const inputTitle = document.querySelector(".title-form");
const textarea = document.querySelector("textarea");
const btnAdd = document.querySelector(".btn-note");
const noteBox = document.querySelector(".notes-box");
//Add Note function - Create the html box
function addNote(noteTitle, noteText) {
  const item = `<div class="box">
                      <h4>${noteTitle}</h4>
                      <p>${noteText}</p>
                      <button class="btn btn-delete">Remove</button>
                  </div>`;

  const position = "beforeend";

  noteBox.insertAdjacentHTML(position, item);

  let btnDelete = document.querySelectorAll(".btn-delete");

  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", function () {
      btnDelete[i].parentElement.style.display = "none";
    });
  }
}

btnAdd.addEventListener("click", function () {
  let title = inputTitle.value;
  let parrafo = textarea.value;

  addNote(title, parrafo);
  inputTitle.value = "";
  textarea.value = "";
});
