//Setting variables

const inputTitle = document.querySelector(".title-form");
const textarea = document.querySelector("textarea");
const btnAdd = document.querySelector(".btn-note");
const noteBox = document.querySelector(".notes-box");

btnAdd.addEventListener("click", function () {
  let title = inputTitle.value;
  let parrafo = textarea.value;

  addNote(title, parrafo);
  inputTitle.value = "";
  textarea.value = "";
});

//Add to do function
function addNote(noteTitle, noteText) {
  const item = `<div class="box">
                    <h4>${noteTitle}</h4>
                    <p>${noteText}</p>
                    <button class="btn btn-delete">Remove</button>
                </div>`;

  const position = "beforeend";

  noteBox.insertAdjacentHTML(position, item);
}

//
//Setting variables

// const inputTitle = document.querySelector(".title-form");
// const textarea = document.querySelector("textarea");
// const btnAdd = document.querySelector(".btn-note");
// const noteBox = document.querySelector(".notes-box");

// btnAdd.addEventListener("click", function () {
//   addNote();
// });

// //Add to do function
// function addNote() {
//   noteBox.insertAdjacentHTML("beforeend", "<a>Item 1</a");
// }
