  
function calcular(){
// declaramos las variables a utilizar 
var mes=0;
var totalp = 0;
var tam= document.getElementById("disabledTextInput").value;
var pla = document.getElementById("PLAN").value;
var rec = document.getElementById("FS").value;
var tipo = document.getElementById("TIPE").value;
// Casteamos el valor de la var a Pesos colombianos con la siguiente funcion:
const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
//Validamos que el tamaño del inmueble sea valido
if(tam>0){
    // su el tamaño es menor a 50 lo subimos a 50 
    if (tam < 50) {
        tam = 50;
    }
    //calculamos segun tipo y cambiamos valores
    switch(tipo){
    
        case "0":
            document.getElementById("result").innerHTML = ("Debe seleccionar el tipo de inmueble...");
            break;
        case "1":
            //cuando el inmueble es tipo oficina
            switch(rec){
                default:
                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                break;
                case"1":
                totalp = tam*984;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*4;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"2":
                totalp = tam*946;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*5;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"3":
                totalp = tam*910;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*6;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"5":
                totalp = tam*875;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*7;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"6":
                totalp = tam*840;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*8;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"7":
                totalp = tam*808
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*9;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"8":
                totalp = tam*778;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*10;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"9":
                totalp = tam*1279;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                //mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );               break;
                case"10":
                totalp = tam*1378;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                //mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                break;
            }
            break ;
        case"2":
                 //cuando el inmueble es tipo residencial 
            if(tam >=40 && tam <=86){
                switch(pla){
                    default:
                    document.getElementById("result").innerHTML = ("Debe selecionar el plan ");
                    break;
                    case "0":
                        switch(rec){
                            default:
                             document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"9":
                             totalp = tam*1550;
                             document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                              //mes=totalp*4.345;
                            document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                            break;
                            case"10":
                             totalp = tam*1673;
                             document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                             //mes=totalp*4.345;
                             document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                            break;
                            
                        }
                        
                        
                    break;
      
                    case "1":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1195;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1147;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1101;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1057;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*1015;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*974;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*935;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break ;
                    case "2":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1445;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1387;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1332;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1278;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*1227;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*1178;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*1131;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break
                    case "3":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1793;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1721;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1652;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1586;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*1523;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*1462;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*1403;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break;
            }

            }else if(tam >= 87 && tam <= 110){
                switch(pla){
                    default:
                    document.getElementById("result").innerHTML = ("Debe selecionar el plan ");
                    break;
                    case "0":
                        switch(rec){
                            default:
                             document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"9":
                             totalp = tam*1550;
                             document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                              //mes=totalp*4.345;
                            document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                            break;
                            case"10":
                             totalp = tam*1673;
                             document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                             //mes=totalp*4.345;
                             document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                            break;
                            
                        }
                        
                        
                    break;
      
                    case "1":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1147;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1101;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1057;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1015;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*974;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*935;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*898;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break ;
                    case "2":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1387;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1332;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1278;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1227;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*1178;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*1131;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*1086;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break
                    case "3":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1721;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1652;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1586;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1523;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*1462;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*1403;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*1347;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break;
            }

            }else if(tam >= 111 && tam <= 160){
                switch(pla){
                    default:
                    document.getElementById("result").innerHTML = ("Debe selecionar el plan ");
                    break;
                    case "0":
                        switch(rec){
                            default:
                             document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"9":
                             totalp = tam*1550;
                             document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                              //mes=totalp*4.345;
                            document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                            break;
                            case"10":
                             totalp = tam*1673;
                             document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                             //mes=totalp*4.345;
                             document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                            break;
                            
                        }
                        
                        
                    break;
      
                    case "1":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1057;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1015;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*974;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*935;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*898;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*862;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*828;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break ;
                    case "2":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1278;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1227;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1178;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1131;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*1086;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*1042;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*1001;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break
                    case "3":
                        switch(rec){
                            default:
                            document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                            break;
                            case"1":
                            totalp = tam*1585;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*4;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"2":
                            totalp = tam*1523;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*5;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"3":
                            totalp = tam*1462;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*6;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"5":
                            totalp = tam*1403;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*7;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"6":
                            totalp = tam*1347;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*8;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"7":
                            totalp = tam*1293;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*9;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            case"8":
                            totalp = tam*1242;
                            document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                            mes=totalp*10;
                            document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                            break;
                            
                         }
                    break;
            }

            }else{
                document.getElementById("result").innerHTML = ("tamaño fuera de rango para recidencial... ");
            }
        break;
       case"3":
            //cuando el inmueble es tipo turistico 
            switch(rec){
                default:
                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                break;
                case"9":
                totalp = tam*850;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                //mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                break;
                case"10":
                totalp = tam*1195;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               //mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                break;
             }
            break ;
        
        default:
            document.getElementById("result").innerHTML = ("No se puede calcular debe hacer las selecciones...");
            document.getElementById("result1").innerHTML = ("No se puede calcular debe hacer las selecciones...");
            break;       
       }
       

}else{
    document.getElementById("result").innerHTML = ("Debe ingresar el tamaño para calcular... ");
    document.getElementById("result1").innerHTML = ("");
}



//funcion para ocultar recurrencia en turisticos
}
function turistico(event){
    if(event.target.value==3){
        document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='9'>Ocasional</option><option value='10'>Express</option>");
    }else{
        document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='1'>4</option><option value='2'>5</option><option value='3'>6</option><option value='5'>7</option><option value='6'>8</option><option value='7'>9</option><option value='8'>10</option><option value='9'>Ocasional</option><option value='10'>Express</option>")
    }
}
function residencial(event){
    if(event.target.value==1 || event.target.value==2 || event.target.value==3){
        document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='1'>4</option><option value='2'>5</option><option value='3'>6</option><option value='5'>7</option><option value='6'>8</option><option value='7'>9</option><option value='8'>10</option>");
    }else{
        document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='9'>Ocasional</option><option value='10'>Express</option>");
    }
}
function plan(event){
    if(event.target.value==1 || event.target.value==3 ){
        document.getElementById("PLAN").innerHTML = ("");
    }else{
        document.getElementById("PLAN").innerHTML = ("<option selected>seleccionar</option><option value='0'>Sin Plan</option><option value='1'>Lite</option><option value='2'>Vip</option><option value='3'>Platino</option>");
    }
}
