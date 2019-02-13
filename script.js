function converIntoFahrenheit(){
    celValue=document.getElementById("celciusNum").value;
    document.getElementById("fahren").innerHTML=celValue*9/5+32;
}
function converIntoCelcius(){
    fahValue=document.getElementById("fahreinheitNum").value;
    document.getElementById("celcius").innerHTML=(fahValue-32)/(9/5);
}
