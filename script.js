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
    cell1.contentEditable = true;
    cell1.id = "Produkt"+rowCount;
    cell1.innerHTML = data.Produkt;
    cell2 = newRow.insertCell(1);
    cell2.contentEditable = true;
    cell2.id = "Preis"+rowCount;
    cell2.innerHTML = data.Preis;
    cell3 = newRow.insertCell(2);
    cell3.contentEditable = true;
    cell1.id = "Laden"+rowCount;
    cell3.innerHTML = data.Laden;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = new Date().toUTCString();
    cell5 = newRow.insertCell(4);
    rowCount++;
    edit = "edit"+rowCount;
    cell5.innerHTML = `<button id = ${edit} onclick="showEditField(this.id);"> Edit </button> <button id =${rowCount} onclick="deleteM(this.id);"> Delete </button>`;
}

let deleteM= (x)=> {
    var row = document.getElementById("Einkaufsliste").getElementsByTagName('tr')[x];
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

let getEditData = () =>{
    var editObj ={}
    editObj("ProduktE")= document.getElementById("ProduktE").value;
    editObj("PreisE") = document.getElementById("PreisE").value;
    editObj("LadenE") = document.getElementById("LadenE").value;
    return editObj;
}

let editRow = (x)=>{
    x = x.slice(-1);
    var roww = document.getElementById("Einkaufsliste").getElementsByTagName('tr')[x];
    console.log(roww);
}

let edits = ()=>{
    event.preventDefault();
    var editData = getEditData();
}


//Zeigt das Edit Feld.
let showEditField= (x)=>{
    x = x.slice(-1);
    var edit = document.getElementById("edit");
    if(edit.style.display==="none" || edit.style.display === null){
        edit.style.display="block";
    }
    else(
        edit.style.display="none"
    )
    console.log(x);
    return x;
}
