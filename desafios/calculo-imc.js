/*
Crie uma aplicação para efetuar o cálculo do índice de massa corporal.
Considere os seguintes critérios:
- Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
- Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em
centímetros.
- Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
- Após as estradas de dados, atente-se a conversão das informações para dados do tipo
float.
- Converta a altura recebida em centímetros para metros. (basta dividir a altura por
100).
- Internamente a aplicação deve executar o cálculo do índice de massa corporal através
da expressão: M = peso (quilos) ÷ altura2
- Após identificar o índice de massa corporal o sistema deverá classificar em faixas
descritivas utilizando os critérios abaixo:
a - Se M estiver abaixo de 16 : Baixo peso muito grave
b - Se M estiver entre 16 e 16,99: Baixo peso grave
c - Se M estiver entre 17 e 18,49: Baixo peso
d - Se M estiver entre 18,50 e 24,99: Peso normal
e - Se M estiver entre 25 e 29,99: Sobrepeso
f - Se M estiver entre 30 e 34,99: Obesidade grau I
g - Se M estiver entre 35 e 39,99: Obesidade grau II
h - Se M for maior que 40: Obesidade grau III
Ao término o sistema deve fornecer a seguinte saída para o usuário:
“<Nome> possui índice de massa corporal igual a <m>, sendo classificado como:
<classificacao>.”
*/


// CALCULADORA DE IMC 
var nome = prompt('Digite o seu nome: ');
var altura = prompt('Digite sua altura em centímetros: ');
var peso = prompt('Digite o seu peso: ');
var classificacao = '';
var imc = '';

altura = parseFloat(altura);
peso = parseFloat(peso);

// conversão da altura de centímetros para metros
altura = altura / 100;
// cálculo de imc
imc = peso / (altura * altura);


//testes condicionais para identificar a classificação do peso com base no imc
if(imc < 16){
    classificacao = 'Baixo peso muito grave';
} else if(imc >= 16 && imc <= 16.99) {
    classificacao = 'Baixo peso grave';
} else if(imc >= 17 && imc <= 18.49) {
    classificacao = 'Baixo peso';
} else if(imc >= 18.50 && imc <= 24.99) {
    classificacao = 'Peso normal';
} else if(imc >= 25 && imc <= 29.99) {
    classificacao = 'Sobrepeso';
} else if(imc >= 30 && imc <= 34.99) {
    classificacao = 'Obesidade grau I';
} else if(imc >= 35 && imc <= 39.99) {
    classificacao = 'Obesidade grau II';
} else { //se não estiver enquadrado em nenhum critério acima, imc só pode ser maior que 40
    classificacao = 'Obesidade grau III';
}

document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' sendo classificado como: ' + classificacao);
