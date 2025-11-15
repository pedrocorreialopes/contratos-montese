const data = [
    ["AKM (RMG Aguiar)","75952483","20.661.994/0001-02"],
    ["ALOHA TELEATENDIMENTO (MOBWIRE)","78344034","27.025.271/0001-58"],
    ["AKSM","73213446","11.818.111/0001-26"],
    ["ANS","75521369","03.589.068/0001-46"],
    ["Azdent","76900142","41.542.595/0001-94"],
    ["Azul Linhas Aéreas","62276107","09.296.295/0001-60"],
    ["Banco do Brasil","74215116","00.000.000/0001-91"],
    ["Banco do Nordeste","61734632","07.237.373/0300-37"],
    ["Beup","76882950","42.838.236/0001-41"],
    ["Base Aerea","75363593","00.394.429/0054-12"]
];

// Renderizar tabelaunction renderTable(){
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    data.forEach(row => {
        tbody.innerHTML += `<tr>
            <td data-label="Cliente">${row[0]}</td>
            <td data-label="Cartão">${row[1]}</td>
            <td data-label="CNPJ">${row[2]}</td>
        </tr>`;
    });
}

renderTable();

// Modo escurounction toggleDark() {
    document.body.classList.toggle("dark");
    document.getElementById("header").classList.toggle("dark");
}

// Filtrounction filterTable() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#contratos tbody tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "table-row" : "none";
    });
}

// Ordenaçãounction sortTable(col){
    data.sort((a,b)=> a[col].localeCompare(b[col]));
    renderTable();
}

// Exportar Excelunction exportExcel(){
    let table = document.getElementById("contratos").outerHTML;
    let blob = new Blob([table], {type:'application/vnd.ms-excel'});
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
