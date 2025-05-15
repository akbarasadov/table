import add from "./components/add.js";
import reload from "./utils/reload.js";


const tbody = document.querySelector("tbody");
const form = document.forms.namedItem("add");
const name = form.querySelector(".name");
const date = form.querySelector(".date_birth");


form.onsubmit = async (e) => {
  e.preventDefault();

  let obj = {
    name: name.value.trim(),
    date_birth: date.value.trim()
  }

  for (let i = 0; i < obj.length; i++) {
    const element = array[i];
    console.log(element);
    
  }


  await fetch("http://localhost:8080/users", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" }
  })



  reload([obj], add, tbody)
  add(obj)
}


let res = await fetch("http://localhost:8080/users")
let users = await res.json()

reload(users, add, tbody)