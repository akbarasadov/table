let body = document.body;

function tables() {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");


    let headRow = document.createElement("tr");
    let texts = ["№", "Имя студента", "День рождения", "Действие"]
    
    texts.forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        headRow.append(th);
    });
    thead.append(headRow);

    const students = [
        { id: 1, name: "Bruce Reyes", birth: "1997" },
        { id: 2, name: "Benjamin Reyes", birth: "1194" },
        { id: 3, name: "Philip Lucas", birth: "1521" },
        { id: 4, name: "Jose Hill", birth: "4325" },
        { id: 5, name: "Jerry Anderews", birth: "683" },
        { id: 6, name: "Nicolas Lee", birth: "2798" },
        { id: 7, name: "Alan Wade", birth: "3586" },
    ];


    students.forEach(student => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.textContent = student.id;
        td2.textContent = student.name;
        td3.textContent = student.birth;

        let img1 = document.createElement("img");
        img1.src = "https://static.vecteezy.com/system/resources/thumbnails/045/948/317/small/edit-tool-icon-design-user-interface-minimal-design-vector.jpg";

        let img2 = document.createElement("img");
        img2.src = "https://cdn-icons-png.flaticon.com/512/2984/2984959.png";

        td4.append(img1, img2);
        tr.append(td1, td2, td3, td4);
        tbody.append(tr);
    });

    table.append(thead, tbody);
    body.append(table);
}

tables();
