// Classificador de Nível de Herói
let nomeDoHeroi = "CoderHero"; // Digite o nome do herói aqui
let nivelDoHeroi = "";
let valorAleatorio = 0;
let xp = 0;

// Fases do jogo
for (let faseDoJogo = 1; faseDoJogo <= 5; faseDoJogo++) {
    if (faseDoJogo === 1) {
        // Fase um tem três desafios
        for (let desafio = 1; desafio <= 3; desafio++) {
            valorAleatorio = Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6, onde 1, 2, 3, 4, 5 o heroi vence e 6 ele perde.
            if (valorAleatorio === 1) {
                xp += 100; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 2) {
                xp += 200; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 3) {
                xp += 200; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 4) {
                xp += 300; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 5) {
                xp += 400; // O herói vence e pontos são adicionados.
            } else {
                xp -= 10; // O herói perde e pontos são subtraídos.
            }
        }
    } else if (faseDoJogo === 2) {
        // Fase dois tem quatro desafios
        for (let desafio = 1; desafio <= 4; desafio++) {
            valorAleatorio = Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6, onde 1, 2, 3, 4, 5 o heroi vence e 6 ele perde.
            if (valorAleatorio === 1) {
                xp += 200; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 2) {
                xp += 200; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 3) {
                xp += 300; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 4) {
                xp += 400; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 5) {
                xp += 500; // O herói vence e pontos são adicionados.
            } else {
                xp -= 20; // O herói perde e pontos são subtraídos.
            }
        }
    } else if (faseDoJogo === 3) {
        // Fase três tem cinco desafios
        for (let desafio = 1; desafio <= 5; desafio++) {
            valorAleatorio = Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6, onde 1, 2, 3, 4, 5 o heroi vence e 6 ele perde.
            if (valorAleatorio === 1) {
                xp += 300; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 2) {
                xp += 300; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 3) {
                xp += 400; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 4) {
                xp += 500; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 5) {
                xp += 500; // O herói vence e pontos são adicionados.
            } else {
                xp -= 30; // O herói perde e pontos são subtraídos.
            }
        }
    } else if (faseDoJogo === 4) {
        // Fase quatro tem seis desafios        
        for (let desafio = 1; desafio <= 6; desafio++) {
            valorAleatorio = Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6, onde 1, 2, 3, 4, 5 o heroi vence e 6 ele perde.
            if (valorAleatorio === 1) {
                xp += 300; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 2) {
                xp += 300; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 3) {
                xp += 400; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 4) {
                xp += 500; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 5) {
                xp += 600; // O herói vence e pontos são adicionados.
            } else {
                xp -= 40; // O herói perde e pontos são subtraídos.
            }
        }
    } else {
        // Fase cinco tem seis desafios
        for (let desafio = 1; desafio <= 6; desafio++) {
            valorAleatorio = Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6, onde 1, 2, 3, 4, 5 o heroi vence e 6 ele perde.
            if (valorAleatorio === 1) {
                xp += 300; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 2) {
                xp += 400; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 3) {
                xp += 500; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 4) {
                xp += 600; // O herói vence e pontos são adicionados.
            } else if (valorAleatorio === 5) {
                xp += 800; // O herói vence e pontos são adicionados.
            } else {
                xp -= 50; // O herói perde e pontos são subtraídos.
            }
        }
    }
}

// Atribuição de Nível do Herói
if (xp <= 1000) {
    nivelDoHeroi = "Ferro";
} else if ( xp > 1000 && xp <= 2000) {
    nivelDoHeroi = "Bronze";
}  else if (xp > 2000 && xp <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xp > 5000 && xp <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xp > 8000 && xp <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exibição do Nível do Herói
switch (nivelDoHeroi) {
    case "Ferro":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
    case "Bronze":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
    case "Prata":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
    case "Ouro":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
    case "Platina":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
    case "Ascendente":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
    case "Imortal":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
    case "Radiante":
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`); break;
}