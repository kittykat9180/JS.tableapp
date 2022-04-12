// start each table element at id 0
let id = 0;
// adds input to the table
document.getElementById("add").addEventListener('click', () =>{
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('student-ln').value;
    row.insertCell(1).innerHTML = document.getElementById('student-fn').value;
    row.insertCell(2).innerHTML = document.getElementById('project-name').value;
    row.insertCell(3).innerHTML = document.getElementById('sub-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDelete(id++));
    document.getElementById('student-ln').value = ' ';
    document.getElementById('student-fn').value = ' ';
    document.getElementById('project-name').value = ' ';
});
// delete button
function createDelete(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}