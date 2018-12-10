function temps (){
    var ladate=new Date()
    document.write("Nous sommes le : ");
    document.write(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear())
    document.write("<BR>");
    var ladate=new Date()
    document.write("Heure : ");
    document.write(ladate.getHours()+":"+ladate.getMinutes()+":"+ladate.getSeconds())
}
temps ();