const nome = "Leonardo";
const sobrenome = "Moretto";
let altura = 1.80;
let peso = 86;
let idade = 22;

console.log("O IMC de", nome, sobrenome, "é:", peso / (altura*altura), nome, "tem ",idade, "anos.");

let anoDeNasc;
let ano = 2024;
anoDeNasc = ano - idade;
console.log("Se o",nome, "tem", idade,"anos, então ele nasceu em:",anoDeNasc);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura, e seu IMC é de ${(peso / (altura*altura))}.`);



/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
 
indiceMassaCorporal = peso / (altura * altura);
anoNascimento = 2024 - idade;
 
// template strings
console.log(" ");
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

