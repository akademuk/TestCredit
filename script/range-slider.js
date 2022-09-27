const valueMoney = document.getElementById("valueMoney");
const innerMoney = document.getElementById("innerMoney");
const valueDate = document.getElementById("valueDate");
const innerDate = document.getElementById("innerDate");
let sum = document.getElementById("resultPercent");
const valuePercent = 0.0001;

function rangeMoney(){
    valPercent = (valueMoney.value / valueMoney.max)*100;
    valueMoney.style.background = `linear-gradient(to right, #8BD16A ${valPercent}%, #C6BAFB ${valPercent}%)`;
    innerMoney.textContent = valueMoney.value;

    valPercent = (valueDate.value / valueDate.max)*100;
    valueDate.style.background = `linear-gradient(to right, #8BD16A ${valPercent}%, #C6BAFB ${valPercent}%)`;
    innerDate.textContent = valueDate.value;

    letDate = (Number(valueDate.value) * Number(valuePercent));
    valPer = (Number(valueMoney.value) * Number(letDate));
    let summ = (Number(valueMoney.value) + Number(valPer))
    sum.textContent = Math.ceil(summ);

    let sumDate = document.getElementById("resultDate");
    var days = valueDate.value;
    
    var newDate = new Date(Date.now()+days*24*60*60*1000)
    sumDate.textContent = newDate.toLocaleDateString('de-DE')
}
rangeMoney();
