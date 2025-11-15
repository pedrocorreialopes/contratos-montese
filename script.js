const data = [
            ["AKM (RMG Aguiar)","75952483","20.661.994/0001-02"],
            ["MOBWIRE","78344034","27.025.271/0001-58"],
            ["AKSM","73213446","11.818.111/0001-26"],
            ["ANS","75521369","03.589.068/0001-46"],
            ["Azdent","76900142","41.542.595/0001-94"],
            ["Azul Linhas Aéreas","62276107","09.296.295/0001-60"],
            ["Banco do Brasil","74215116","00.000.000/0001-91"],
            ["Banco do Nordeste","61734632","07.237.373/0300-37"],
            ["Beup","76882950","42.838.236/0001-41"],
            ["Base Aerea","75363593","00.394.429/0054-12"],
            ["Cagece", "71959815","07.040.108/0001-57"],
            ["Dress New", "76856941", "12.492.919/0001-29"],
            ["Eloá Modas", "66664900", "41.560.384/0001-84"],
	        ["Espaço Della", "75791803", "05.748.282/0001-23"],
            ["Fachesf", "74698044", "42.160.192/0001-43"],
            ["Futom", "72766123", "13.688.927/0001-03"],
            ["Kallifon", "76538397", "63.397.418/0001-02"],
            ["Keven", "76690229", "02.442.766/0001-51"],
            ["Kiquitaluki", "75934612", "04.908.056/0001-08"],
            ["Life Trend", "70035717", "04.968.641/0001-95"],
            ["Maind Fashion", "76970680", "30.103.658/0001-90"],
            ["Moda Doll", "71097937", "36.695.900/0001-48"],
            ["Pque Reg de Manutenção", "74556983", "09.607.967/0001-00"],
            ["Pierre Cosmeticos", "76405818", "40.525.327/0001-00"],
            ["São Pedro de Alcântara", "77362462", "11.834.081/0002-22"],
            ["Serttel", "73236403", "24.144.040/0001-75"],
            ["Specto (Tiago)", "76550800", "95.849.642/0001-76"],
            ["SumUp", "72433493", "37.241.230/0001-52"],
            ["Tato Atelie", "76737497", "34.065.120/0001-99"],
            ["Ziva Brasil", "77107268", "38.131.891/0001-98"]
        ]        
        function renderTable(){
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

        function toggleDark() {
            document.body.classList.toggle("dark");
            document.getElementById("header").classList.toggle("dark");
        }

        function filterTable() {
            let input = document.getElementById("search").value.toLowerCase();
            let rows = document.querySelectorAll("#contratos tbody tr");

            rows.forEach(row => {
                let text = row.innerText.toLowerCase();
                row.style.display = text.includes(input) ? "table-row" : "none";
            });
        }

        function sortTable(col){
            data.sort((a,b)=> a[col].localeCompare(b[col]));
            renderTable();
        }

        function exportExcel(){
            let table = document.getElementById("contratos").outerHTML;
            let blob = new Blob([table], {type:'application/vnd.ms-excel'});
            let url = URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = "contratos.xls";
            a.click();
        }

        function exportPDF(){
            const pdfWindow = window.open("", "", "width=800,height=900");
            pdfWindow.document.write(`<html><body>${document.getElementById("contratos").outerHTML}</body></html>`);
            pdfWindow.print();
        }
