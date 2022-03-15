
function calculadora(tipo, valor) {

if (tipo === 'acao') {

   //Limpar campo resultado
   if (valor === 'c') {
      document.getElementById('resultado').value = '';
   }


   //Concatenando as acoes com o valor digitado
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
      document.getElementById('resultado').value += valor;
   }


   // Calculando os valores digitados no campo input resultado. (função eval se o valor não for uma string a função eval soma os valores)
    if (valor === '=') {
        var valor_campo = document.getElementById('resultado').value;
        document.getElementById('resultado').value = eval(valor_campo);
    }
       
   

} else if (tipo === 'valor') {
    //Concatenando o valor digitado com valor atual
    document.getElementById('resultado').value += valor;
}

   
}



