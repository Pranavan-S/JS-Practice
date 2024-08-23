function convert(){
    let cm = Number(document.getElementById("cmin").value);
    let inch = cm/2.54;
    document.getElementById("result").innerHTML = inch.toFixed(4)+" Inches";
}