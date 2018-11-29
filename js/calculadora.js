function botao (num)
{
    var salvo = document.calculadora.visor.value;
    document.calculadora.visor.value = salvo + num;
}

function reset () 
{
 document.getElementById('visor').value = '';
}   

function calcular () 
{
  var resultado = 0;
  resultado = document.getElementById('visor').value;
  
  document.getElementById('visor').value = '';
  document.getElementById('visor').value = eval(resultado);
  // alert(resultado); funcionando

}

