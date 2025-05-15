export default function add(item) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
      <td>${item.id}</td>
      <td class = "title">${item.name}</td>
      <td>${item.date_birth}</td>
      <td>
        <button class="edit">
          <img src="./img/edit.png" alt="">
        </button>
        <button class="delete">
          <img src="./img/delete.png" alt="">
        </button>
      </td>
    `;
  const editBtn = tr.querySelector(".edit");
  const deleteBtn = tr.querySelector(".delete");

  let dialog = document.querySelector("dialog")
  let save = document.querySelector(".save")
  let newTitle = document.querySelector(".newTitle")
  let close = document.querySelector(".close")
  let checkbox = document.querySelector(".input_checkbox")
  let title = tr.querySelector(".title")

  deleteBtn.onclick = async () => {
    await fetch(`http://localhost:8080/users/${item.id}`, {
      method: "DELETE"
    });
    tr.remove();
  }


  editBtn.onclick = () => {
    dialog.showModal()
  }


  save.onclick = (e) => {
    e.preventDefault()
    if (newTitle.value.trim() === "") {

      alert("Введите новое имя.")

    } else {

      if (checkbox.checked === true) {
        dialog.close()
        item.title = `newTitle`.value

        title.textContent = item.title
      } else {
        alert("Установите флажок для подтверждения.")
      }

    }
  }

  close.onclick = (e) => {
    e.preventDefault()
    dialog.close()
  }


  return tr;
}