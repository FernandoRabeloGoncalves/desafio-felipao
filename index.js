let nome = "Lord Knight";
let xp = 50000; 
let nivel = "";

if (xp <= 1000) {
    nivel = "Ferro";
}
else if (xp <= 2000) {
    nivel = "Bronze";
}
else if (xp <= 5000) {
    nivel = "Prata";
}
else if (xp <= 6000) {
    nivel = "Ouro";
}
else if (xp <= 7000) {
    nivel = "Platina Diamante";
}
else if (xp <= 8000) {
    nivel = "Ascendente";
}
else if (xp <= 9000) {
    nivel = "Imortal";
}
else {
    nivel = "Radiante";
}

console.log("Nosso Herói Chamado " + nome + " está no nível de " + nivel + " com " + xp + " de experiência.");
