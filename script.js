var selectedRow = null;
function getFormData() {
    var formObj ={};
    formObj["Produkt"] = document.getElementById("Produkt").value;
    formObj["Preis"]=document.getElementById("Preis").value;
    formObj["Laden"]=document.getElementById("Laden").value;
    return formObj;
}

//https://developer.mozilla.org/de/docs/Web/API/HTMLTableElement/insertRow
function insertNewRecord(data){
    var table = document.getElementById("Einkaufsliste");
    var newRow = table.insertRow(-1);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Produkt;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Preis;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Laden;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = new Date().toUTCString();
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button> Edit </button> <button> Delete </button>`
}

function formSubmit(e){
    event.preventDefault();
        var formData = getFormData();
        if(selectedRow == null){
        insertNewRecord(formData);
         }
}
