
function multiplicar(){

   var CantidadDeHorasLaboradas = document.getElementById("CantidadHoras").value;
   var  MontoPorHoraLaborada = document.getElementById("MontoHora").value;
   var SalarioBruto = (CantidadDeHorasLaboradas*MontoPorHoraLaborada)*4;
   var Renta = 0;
  
   if ((SalarioBruto<=842000)) {
         Renta = 0;
 }
   if ((SalarioBruto>842000&&SalarioBruto<=1236000)) {
         Renta = (10/100)*SalarioBruto;
 }
    if ((SalarioBruto>1236000&&SalarioBruto<=2169000)) {
         Renta = (15/100)*SalarioBruto;
 }
    if ((SalarioBruto>2169000&&SalarioBruto<=4337000)) {
         Renta = (20/100)*SalarioBruto;
 }
    if ((SalarioBruto>4337000)) {
         Renta = (25/100)*SalarioBruto;
 }

    var CCSS = (9.25/100)*SalarioBruto;
    var IVM = (5.25/100)*SalarioBruto;
    var BancoPopular = (0.25/100)*SalarioBruto;
    var LeyProteccionTrabajador = (0.5/100)*SalarioBruto;
    var FondoCapitalizacion = (3/100)*SalarioBruto;
    var INS = (1/100)*SalarioBruto;
    var JAP = (2.5/100)*SalarioBruto;
    var FondoPensionesCapitalizacion = (0.5/100)*SalarioBruto;
    var FondoPensionesReparto = (0.5/100)*SalarioBruto;
    var Cesantía = (5.333/100)*SalarioBruto;
    var Aguinaldo = (8.333/100)*SalarioBruto;

    var deducciones = (CCSS+IVM+BancoPopular+LeyProteccionTrabajador+FondoCapitalizacion+INS+JAP+FondoPensionesCapitalizacion+FondoPensionesReparto+Renta+Cesantía+Aguinaldo);

    var totalSalario = SalarioBruto-deducciones;        


const locales = 'es-CR'

const options = {
	style: 'currency',
	currency: 'CRC',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
}

const formatterColon = new Intl.NumberFormat(locales, options)

var SalarioBrutoFormater = formatterColon.format(SalarioBruto)
var CCSSFormater = formatterColon.format(CCSS)
var IVMFormater = formatterColon.format(IVM)
var BancoPopularFormater = formatterColon.format(BancoPopular)
var LeyProteccionTrabajadorFormater = formatterColon.format(LeyProteccionTrabajador)
var INSFormater = formatterColon.format(INS)
var JAPFormater = formatterColon.format(JAP)
var FondoPensionesCapitalizacionFormater = formatterColon.format(FondoPensionesCapitalizacion)
var FondoPensionesRepartoFormater = formatterColon.format(FondoPensionesReparto)
var RentaFormater = formatterColon.format(Renta)
var CesantíaFormater = formatterColon.format(Cesantía)
var AguinaldoFormater = formatterColon.format(Aguinaldo)
var totalSalarioFormater = formatterColon.format(totalSalario)

    document.getElementById("SalarioBruto").value = SalarioBrutoFormater;
    document.getElementById("CCSS").value = CCSSFormater;
    document.getElementById("IVM").value = IVMFormater;
    document.getElementById("BancoPopular").value = BancoPopularFormater;
    document.getElementById("LeyProteccionTrabajador").value = LeyProteccionTrabajadorFormater;
    document.getElementById("INS").value = INSFormater;
    document.getElementById("JAP").value = JAPFormater;
    document.getElementById("FondoPensionesCapitalizacion").value = FondoPensionesCapitalizacionFormater;
    document.getElementById("FondoPensionesReparto").value = FondoPensionesRepartoFormater;
    document.getElementById("Cesantía").value = CesantíaFormater;
    document.getElementById("Aguinaldo").value = AguinaldoFormater;
    document.getElementById("Resultado").value = totalSalarioFormater;
    document.getElementById("Resultado2").value = totalSalarioFormater;

        if(RentaFormater=='₡0,00'){
                document.getElementById("Renta").value = 'EXCENTO'; 
        } else{ document.getElementById("Renta").value = RentaFormater; }


}