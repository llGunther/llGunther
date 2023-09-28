
var CalcularBotao = document.querySelector('#botaoCalc')
var resultado = document.querySelector('#resultado')

var sugestao = 'Sugestões';
var URL =`
 <a class="sugestão" href="https://umtoquedebeleza.com.br/todos/?Tamanho=Pmpage=4">
 ${sugestao}
 </a>
` 

var sugestao = 'Sugestões';
var URL2 = `
<a class"sugestão" href="https://umtoquedebeleza.com.br/todos/?Tamanho=50%7C52%7C54%7CGg%7CXg+Ou+3g+Ou+Ggg%7CXgg%252BOu%2B4g&mpage=4">${sugestao}
</a>
`


var tamanho = {
'muitopequeno': 'Infelizmente esse produto está disponível somente num tamanho maior. Recomendamos esses tamanhos: ',
'p': 'Seu tamanho é P', 
'm': 'Seu tamanho é M',
'g': 'Seu tamanho G',
'gg':'Seu tamanho GG',
'muitogrande': 'Infelizmente esse produto está disponível somente num tamanho menor. Recomendamos esses tamanhos: ',
}

CalcularBotao.addEventListener('click', CalcularTamanho)

function CalcularTamanho(){
    var busto = document.querySelector('#busto').value
    var quadril = document.querySelector('#quadril').value
        validarTamanho(busto, quadril)
}

function validarTamanho(busto, quadril){
    
  if (busto <= 75 && quadril <= 63){
      resultado.innerHTML = `${tamanho.muitopequeno}  ${URL}`;
} else if ((busto >= 76 && busto <= 88) && (quadril >= 64 && quadril <= 82)){
             resultado.innerText = tamanho.m;
} else if ((busto >= 89 && busto <= 91) && (quadril >= 83 && quadril <= 90)){
             resultado.innerText = tamanho.g;
} else if ((busto >= 92 && busto <= 99) && (quadril >= 91 && quadril <= 100)){
             resultado.innerText = tamanho.gg;
} else if (busto >= 100 && quadril >= 101){
  resultado.innerHTML = `${tamanho.muitogrande}  ${URL2}`;
} else {
  resultado.innerText = 'Infelizmente os valores fornecidos não estão dentro dos da tabela.'
}
}

