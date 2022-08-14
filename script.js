var selectedRow = null;
let getFormData=()=> {
    var formObj ={};
    formObj["Produkt"] = document.getElementById("Produkt").value;
    formObj["Preis"]=document.getElementById("Preis").value;
    formObj["Laden"]=document.getElementById("Laden").value;
    return formObj;
}
let rowCount = 0;
//https://developer.mozilla.org/de/docs/Web/API/HTMLTableElement/insertRow
let insertNewRecord= (data)=>{
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
    rowCount++;
    cell5.innerHTML = `<button id = ${rowCount}> Edit </button> <button id =${rowCount} onclick="deleteM(this.id);"> Delete </button>`;
}

let deleteM= (x)=> {
    var table = document.getElementById("Einkaufsliste").getElementsByTagName('tr')[x];
    document.getElementById("Einkaufsliste").getElementsByTagName('tr')[x].innerHTML = ``;
    rowCount--;
};


let formSubmit=(e)=>{
    event.preventDefault();
        var formData = getFormData();
        if(selectedRow == null){
        insertNewRecord(formData);
         }
}
