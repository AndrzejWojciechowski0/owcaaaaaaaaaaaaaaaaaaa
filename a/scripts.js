
function toHTML(owca){
    return `
         <tr>
            <td>${owca.name}</td>
            <td>${owca.colors}</td>
            <td>${owca.agr}</td>
            <td>${owca.canSweam}</td>
            <td>${owca.isHappy}</td>
            <td>${owca.maxSpeed}</td>
            <td>${owca.numberOfLegs}</td>


        </tr>
    `;
}
const tabela = document.querySelector("#owce");
const imię = document.querySelector("#sheep-name");

function check( owca ) {
    const wpisaneImię = imię.value.trim()
    if(imię.textContent.trim() === "") return true;
    return owca.name.startsWith(wpisaneImię)
}
function refresh(){
    const przefiltrowane_owce = randomSheeps.filter( check);
    const html_owce = przefiltrowane_owce.map(toHTML);
    tabela.innerHTML=randomSheeps.map(toHTML).join("");
}
refresh();
const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);