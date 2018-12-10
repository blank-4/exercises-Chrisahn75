var lheure = document.getElementById("horloge");
function temps (){
    var ladate = new Date();
    lheure.innerHTML = ladate;

}
setInterval (temps,1000);

/* document.write("Nous sommes le : ");
    document.write(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear())
    document.write("<BR>");
    document.write("Heure : ");
    document.write(ladate.getHours()+":"+ladate.getMinutes()+":"+ladate.getSeconds()) */