// Variables
var valueInp = document.getElementById("valueInp");
var ToDolist = document.getElementById("ToDoList");
var addList = document.getElementById("AddList");
var deleteAll = document.getElementById("DeleteAll");
var deleteBtna = document.getElementById("deleteBtna");
addList.addEventListener("click", function () {
    var list = document.createElement("li");
    var listText = document.createTextNode(valueInp.value);
    list.appendChild(listText);
    ToDoList.appendChild(list);
    valueInp.value = "";
    var EditBtn = document.createElement("button");
    var EditBtnText = document.createTextNode("Edit");
    EditBtn.setAttribute("class", "btn");
    EditBtn.setAttribute("onclick", "EditElement(this)");
    EditBtn.appendChild(EditBtnText);
    list.appendChild(EditBtn);
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    list.appendChild(delBtn);
    delBtn.setAttribute("onclick", "DeleteElement(this)");
});

deleteAll.addEventListener("click", function () {
    ToDoList.innerHTML = "";
});

function EditElement(a) {
    EditValue = prompt("Edit This", a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = EditValue;
}

function DeleteElement(b) {
    b.parentNode.remove();
}