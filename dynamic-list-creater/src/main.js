const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const taskValue = input.value.trim();

  if (taskValue === "") {
    alert("Input field is empty");
    return;
  }

  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = taskValue;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  textSpan.addEventListener("dblclick", () => {
    const currentText = textSpan.textContent;
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;

    li.replaceChild(editInput, textSpan);
    editInput.focus();

    const saveChanges = () => {
      if (li.contains(editInput)) {
        const newValue = editInput.value.trim();
        textSpan.textContent = newValue !== "" ? newValue : currentText;
        li.replaceChild(textSpan, editInput);
      }
    };

    editInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") saveChanges();
    });

    editInput.addEventListener("blur", saveChanges);
  });

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(textSpan);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});
