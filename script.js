var selectedRow = null;

myStorage = localStorage;
var tab = [];
//Macht ein Objekt aus den Daten der Form
let getFormData=()=> {
    var formObj ={};
    formObj["Produkt"] = document.getElementById("Produkt").value;
    formObj["Preis"]=document.getElementById("Preis").value;
    formObj["Laden"]=document.getElementById("Laden").value
    formObj["Datum"]= new Date().toUTCString();
    tab.push(formObj);
    setLocalStorage(tab);
    return formObj;
}
let rowCount = 0;
//https://developer.mozilla.org/de/docs/Web/API/HTMLTableElement/insertRow
//Erstellt eine Zeile 
let insertNewRecord= (data)=>{
    rowCount++;
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
    cell3.id = "Laden"+rowCount;
    cell3.innerHTML = data.Laden;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = new Date().toUTCString();
    cell5 = newRow.insertCell(4);
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

//Bekommt die Edit Data aus der Form
let getEditData = (e) =>{
    event.preventDefault();
    var editObj = {};
    editObj["ProduktE"]= document.getElementById("ProduktE").value;
    editObj["PreisE"] = document.getElementById("PreisE").value;
    editObj["LadenE"] = document.getElementById("LadenE").value;
    // console.log(editObj.ProduktE);
    return editObj;
}

let editRows = (x)=>{
    x = x.slice(-1);
    var roww = document.getElementById("Einkaufsliste").getElementsByTagName('tr')[x];
    //console.log(x);
}

//Editiert die Zeilen indem die HTML Tags ersetzt werden. 
editRow=null
let edits = (e)=>{
    event.preventDefault();
    x= editRow.slice(-1);
    var editData = getEditData();
    var editProdukt = editData.ProduktE;
    //console.log(typeof editData.ProduktE);
    //console.log(typeof editProdukt);

    const produktId = "Produkt"+x;
    const produktTemp = document.getElementById(produktId);
    produktTemp.innerHTML = `<td contenteditable="true" id=&quot;`+ produktId  + `!&quot;>`+editData.ProduktE+ `</td>`;
    
    const preisId = "Preis"+x;
    const preisTemp = document.getElementById(preisId);
    preisTemp.innerHTML = `<td contenteditable="true" id=&quot;`+ preisId  + `!&quot;>`+editData.PreisE+ `</td>`;

    const ladenId = "Laden"+x;
    const ladenTemp = document.getElementById(ladenId);
    ladenTemp.innerHTML = `<td contenteditable="true" id=&quot;`+ ladenId  + `!&quot;>`+editData.LadenE+ `</td>`;

    var edit = document.getElementById("edit");
    edit.style.display = "none";
}


//Zeigt das Edit Feld und ??ndert editRow zu der angeklickten Zeile.
let showEditField= (x)=>{
    var edit = document.getElementById("edit");
    if(edit.style.display==="none" || edit.style.display === null){
        edit.style.display="block";
    }
    else(
        edit.style.display="none"
    )
    editRow=x
    // console.log(editRow)
}

//
let setLocalStorage= (obj)=>{
    localStorage.setItem("Tabelleneintr??ge", JSON.stringify(obj));
    //console.log(JSON.stringify(obj));
}

let getLocalStorage = ()=>{
    storage = localStorage.getItem("Tabelleneintr??ge");
    items = JSON.parse(storage);
    items.forEach(item => console.log(item));
    return items;
    
}

let loadFromStorage = () => {
    i = getLocalStorage();
    i.forEach(item => {
        insertNewRecord(item)
        tab.push(item)
        setLocalStorage(tab)});
        ;
    refresh();
}