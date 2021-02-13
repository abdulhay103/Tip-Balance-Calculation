document.querySelector("#tip-form").onchange = ()=>{
    //Select Elements
    const totalBill = Number(document.querySelector("#totalBill").value);
    const tipInput = document.querySelector("#tipInput").value;
    const tipOutput = document.querySelector("#tipOutput");
    const tipAmountOutput = document.querySelector("#tipAmount");
    const totalTipBillOutput = document.querySelector("#totalBillWithTip");
    const results = document.querySelector("#results");

    //Calculations
    const tipValue = totalBill * (tipInput / 100);
    const finalTipValue = tipValue;
    const totalTipBill = totalBill + finalTipValue;

    //Data pass
    tipOutput.innerHTML = `${tipInput}%`
    tipAmountOutput.value = finalTipValue.toFixed(2);
    totalTipBillOutput.value = totalTipBill.toFixed(2);

    //Showing Result
    results.style.display = "block";

}