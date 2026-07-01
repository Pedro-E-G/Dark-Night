// script.js

// ========== DADOS DA AVENTURA ==========
const story = {
    0: {
        id: 0,
        text: "Você está na taverna 'O Dragão Adormecido'. O cheiro de hidromel e música preenche o ar. Um ancião encapuzado murmura sobre um amuleto perdido. O que você faz?",
        image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Falar com o bardo", next: 1 },
            { text: "Aceitar a missão do ancião", next: 2 },
            { text: "Beber até cair", next: 3 }
        ]
    },
    1: {
        id: 1,
        text: "O bardo toca uma melodia triste e conta a lenda do Amuleto de Zog, que concede poder imenso. Ele diz que a masmorra fica ao norte. Você decide:",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Perguntar mais sobre o amuleto", next: 4 },
            { text: "Ir direto para a missão", next: 2 }
        ]
    },
    2: {
        id: 2,
        text: "O ancião entrega um pergaminho com um mapa. 'Recupere o amuleto na Masmorra Esquecida e terá sua recompensa.' Você aceita?",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Sim, vou agora", next: 5 },
            { text: "Não, isso é loucura", next: 6 }
        ]
    },
    3: {
        id: 3,
        text: "Você bebe mais do que deveria e desmaia sobre a mesa. Quando acorda, está amarrado a um carro de porcos. Fim da sua aventura... (Game Over)",
        image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    4: {
        id: 4,
        text: "O bardo sussurra: 'O amuleto está na sala do tesouro, guardado por um golem de pedra. Mas cuidado, há armadilhas.' Você se sente preparado?",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Partir para a masmorra", next: 5 },
            { text: "Ficar na taverna e beber", next: 6 }
        ]
    },
    5: {
        id: 5,
        text: "Você segue o mapa e chega à entrada da Masmorra Esquecida. Duas portas se abrem diante de você: uma à esquerda, outra à direita.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Porta da Esquerda", next: 8 },
            { text: "Porta da Direita", next: 9 }
        ]
    },
    6: {
        id: 6,
        text: "O ancião, ofendido, ergue o cajado e profere uma maldição. Você se transforma em um sapo! Tente novamente.",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    7: { // (não usado, mas reservado)
        id: 7,
        text: "Você entra na masmorra.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: []
    },
    8: {
        id: 8,
        text: "Você abre a porta da esquerda e um feixe de dardos dispara em sua direção! Rápido, desvie! (Rolar d20, dificuldade 10)",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Rolar Dado", next: 10, action: "roll", difficulty: 10, fail: 11 }
        ]
    },
    9: {
        id: 9,
        text: "A porta da direita leva a um longo corredor com estátuas de guerreiros. Você sente uma presença misteriosa.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Examinar as estátuas", next: 12 },
            { text: "Passar direto", next: 13 }
        ]
    },
    10: {
        id: 10,
        text: "Você desvia dos dardos com agilidade! No fundo da sala, um baú cintilante. O que faz?",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Abrir o baú", next: 14 },
            { text: "Ignorar e seguir", next: 15 }
        ]
    },
    11: {
        id: 11,
        text: "Os dardos acertam você! Você perde 2 pontos de vida. Ferido, mas vivo, você segue em frente.",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Continuar", next: 16 }
        ],
        onEnter: () => { changeHP(-2); }
    },
    12: {
        id: 12,
        text: "Você examina as estátuas e encontra uma alavanca escondida atrás de uma delas. Puxar?",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Puxar a alavanca", next: 17 },
            { text: "Ignorar e seguir", next: 18 }
        ]
    },
    13: {
        id: 13,
        text: "Você avança descuidado e o chão cede sob seus pés! Você cai em um fosso com estacas. Fim.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    14: {
        id: 14,
        text: "Dentro do baú, uma chave de ferro brilhante. Você a pega. (Item: Chave da Masmorra adicionada)",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Seguir em frente", next: 20 }
        ],
        onEnter: () => { addItem("Chave da Masmorra"); }
    },
    15: {
        id: 15,
        text: "Você ignora o baú e segue pelo corredor. Chega a uma bifurcação: norte ou sul?",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Norte", next: 22 },
            { text: "Sul", next: 23 }
        ]
    },
    16: {
        id: 16,
        text: "Você se recupera um pouco e vê uma bifurcação. Para onde vai?",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Norte", next: 22 },
            { text: "Sul", next: 23 }
        ]
    },
    17: {
        id: 17,
        text: "A alavanca ativa um mecanismo e uma porta secreta se abre. Você encontra um atalho para a sala do tesouro!",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Entrar na sala do tesouro", next: 24 }
        ]
    },
    18: {
        id: 18,
        text: "Você ignora a alavanca e segue em frente, mas encontra um golem de pedra bloqueando o caminho.",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Enfrentar o golem", next: 25 }
        ]
    },
    19: { // reservado, mas não usado
        id: 19,
        text: "Fim.",
        image: "",
        choices: []
    },
    20: {
        id: 20,
        text: "Com a chave, você abre uma porta trancada e entra na câmara do amuleto. Lá está ele, sobre um altar de pedra. O que faz?",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Pegar o amuleto", next: 33 },
            { text: "Examinar o altar em busca de armadilhas", next: 34 }
        ]
    },
    21: {
        id: 21,
        text: "Você segue em frente e encontra uma ponte quebrada sobre um abismo. Para atravessar, precisa saltar. (Rolar d20, dificuldade 12)",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Rolar Dado", next: 27, action: "roll", difficulty: 12, fail: 28 }
        ]
    },
    22: {
        id: 22,
        text: "Você segue para o norte e encontra um grupo de goblins. Eles rosnam e atacam! (Rolar d20, dificuldade 8)",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Rolar Dado", next: 29, action: "roll", difficulty: 8, fail: 30 }
        ]
    },
    23: {
        id: 23,
        text: "Você entra em uma sala com um enigma gravado na parede: 'O que tem chaves mas não abre fechaduras?'",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Responder: Piano", next: 31, action: "enigma" },
            { text: "Ignorar e seguir", next: 32 }
        ]
    },
    24: {
        id: 24,
        text: "Você está na sala do tesouro! O amuleto brilha sobre o altar. Mas você percebe que há um mecanismo de veneno. Como prossegue?",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Pegar o amuleto", next: 33 },
            { text: "Tentar desarmar a armadilha", next: 34 }
        ]
    },
    25: {
        id: 25,
        text: "O golem de pedra ergue o punho. Você precisa vencê-lo! (Rolar d20, dificuldade 14)",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Rolar Dado", next: 35, action: "roll", difficulty: 14, fail: 36 }
        ]
    },
    26: {
        id: 26,
        text: "🎉 Você conseguiu! O Amuleto de Zog está em suas mãos. Você escapa da masmorra e é aclamado como herói. Parabéns! Fim da aventura.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Jogar novamente", next: 0 }
        ]
    },
    27: {
        id: 27,
        text: "Você salta sobre o abismo com maestria! Do outro lado, encontra a sala do tesouro.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Entrar na sala", next: 24 }
        ]
    },
    28: {
        id: 28,
        text: "Você escorrega e cai no abismo. Fim da jornada.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    29: {
        id: 29,
        text: "Você derrota os goblins com bravura! Entre os pertences deles, encontra um mapa que mostra um atalho para a sala do tesouro.",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Seguir o mapa", next: 24 }
        ],
        onEnter: () => { addItem("Mapa do Tesouro"); }
    },
    30: {
        id: 30,
        text: "Os goblins são muitos e você é abatido. Fim.",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    31: {
        id: 31,
        text: "🎵 'Piano' é a resposta correta! Uma porta se abre e você encontra uma chave. (Item: Chave da Masmorra adicionada)",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Pegar a chave e seguir", next: 20 }
        ],
        onEnter: () => { addItem("Chave da Masmorra"); }
    },
    32: {
        id: 32,
        text: "Você ignora o enigma e segue em frente, mas cai em uma armadilha de laço. Você escapa, mas perde 1 de vida.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Continuar", next: 25 }
        ],
        onEnter: () => { changeHP(-1); }
    },
    33: {
        id: 33,
        text: "Você pega o amuleto. Imediatamente, uma nuvem de veneno é liberada! (Rolar d20, dificuldade 15 para resistir)",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Rolar Dado", next: 26, action: "roll", difficulty: 15, fail: 37 }
        ]
    },
    34: {
        id: 34,
        text: "Você examina o altar e encontra um mecanismo de agulhas envenenadas. Tenta desarmá-lo. (Rolar d20, dificuldade 13)",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Rolar Dado", next: 26, action: "roll", difficulty: 13, fail: 38 }
        ]
    },
    35: {
        id: 35,
        text: "Você desfere um golpe certeiro e o golem se despedaça. O amuleto está finalmente ao seu alcance!",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Pegar o amuleto", next: 26 }
        ]
    },
    36: {
        id: 36,
        text: "O golem esmaga você com um golpe. Fim.",
        image: "https://images.unsplash.com/photo-1582841751604-9ef3f1f2fd5d?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    37: {
        id: 37,
        text: "O veneno é forte demais. Você cai ao chão, sem forças. Fim.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    38: {
        id: 38,
        text: "Você ativa a armadilha sem querer. Agulhas envenenadas perfuram sua pele. Fim.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854a73?w=800&h=400&fit=crop&crop=center",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    }
};

// ========== ESTADO DO JOGO ==========
let currentHP = 10;
let inventory = [];
let currentNode = 0;
let currentStory = story[0];
let musicPlaying = true;
let audioCtx;

// ========== ELEMENTOS DOM ==========
const descriptionEl = document.getElementById('description');
const imageEl = document.getElementById('sceneImage');
const choicesEl = document.getElementById('choices');
const hpEl = document.getElementById('hp');
const itemsEl = document.getElementById('items');
const rollBtn = document.getElementById('rollDiceBtn');
const diceResult = document.getElementById('diceResult');
const diceModal = document.getElementById('diceModal');
const diceNumber = document.getElementById('diceNumber');
const diceMessage = document.getElementById('diceMessage');
const diceModalClose = document.getElementById('diceModalClose');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

// ========== FUNÇÕES AUXILIARES ==========
function changeHP(delta) {
    currentHP = Math.max(0, Math.min(10, currentHP + delta));
    hpEl.textContent = currentHP;
    if (currentHP <= 0) {
        // Game over por vida zerada
        setTimeout(() => {
            alert('💀 Você ficou sem vida! A aventura acabou.');
            resetGame();
        }, 300);
    }
}

function addItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        itemsEl.textContent = inventory.join(', ');
    }
}

function removeItem(item) {
    const idx = inventory.indexOf(item);
    if (idx > -1) {
        inventory.splice(idx, 1);
        itemsEl.textContent = inventory.join(', ') || 'Nenhum';
    }
}

function resetGame() {
    currentHP = 10;
    inventory = [];
    currentNode = 0;
    hpEl.textContent = 10;
    itemsEl.textContent = 'Nenhum';
    goToNode(0);
}

// ========== NAVEGAÇÃO ==========
function goToNode(id) {
    const node = story[id];
    if (!node) {
        console.error('Nó não encontrado:', id);
        return;
    }
    currentNode = id;
    currentStory = node;

    // Atualizar descrição e imagem
    descriptionEl.textContent = node.text;
    imageEl.src = node.image || 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop&crop=center';

    // Executar onEnter se existir
    if (node.onEnter) {
        node.onEnter();
    }

    // Limpar escolhas anteriores
    choicesEl.innerHTML = '';

    // Se não houver escolhas, recomeça
    if (!node.choices || node.choices.length === 0) {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = 'Recomeçar';
        btn.onclick = () => resetGame();
        choicesEl.appendChild(btn);
        return;
    }

    // Criar botões de escolha
    node.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        if (choice.action === 'roll') btn.classList.add('roll');
        btn.textContent = choice.text;
        btn.onclick = () => handleChoice(choice);
        choicesEl.appendChild(btn);
    });

    // Esconder área de rolagem
    rollBtn.classList.remove('visible');
    diceResult.classList.remove('visible');
    diceResult.textContent = '';
}

function handleChoice(choice) {
    if (choice.action === 'roll') {
        // Abrir modal de rolagem
        openDiceModal(choice.difficulty, choice.next, choice.fail);
    } else if (choice.action === 'enigma') {
        // Resposta do enigma (já resolvido no nó 31)
        goToNode(choice.next);
    } else {
        goToNode(choice.next);
    }
}

// ========== ROLAGEM DE DADO ==========
function openDiceModal(difficulty, successNode, failNode) {
    diceModal.classList.remove('hidden');
    diceNumber.textContent = '?';
    diceMessage.textContent = 'Rolando...';
    diceModalClose.disabled = true;

    // Simular rolagem com animação
    let count = 0;
    const interval = setInterval(() => {
        const random = Math.floor(Math.random() * 20) + 1;
        diceNumber.textContent = random;
        count++;
        if (count > 10) {
            clearInterval(interval);
            // Resultado final
            const result = Math.floor(Math.random() * 20) + 1;
            diceNumber.textContent = result;
            const success = result >= difficulty;
            diceMessage.textContent = success
                ? `✅ Sucesso! (${result} ≥ ${difficulty})`
                : `❌ Falha! (${result} < ${difficulty})`;
            diceModalClose.disabled = false;
            // Armazenar próximo nó
            diceModalClose.onclick = () => {
                diceModal.classList.add('hidden');
                if (success) {
                    goToNode(successNode);
                } else {
                    goToNode(failNode);
                }
            };
        }
    }, 150);
}

// Fechar modal com clique fora (opcional)
diceModal.addEventListener('click', (e) => {
    if (e.target === diceModal && !diceModalClose.disabled) {
        diceModal.classList.add('hidden');
    }
});

// ========== ÁUDIO ==========
function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔊 Ativar Música';
        musicPlaying = false;
    } else {
        bgMusic.play().catch(() => {});
        musicToggle.textContent = '🔇 Desativar Música';
        musicPlaying = true;
    }
}

musicToggle.addEventListener('click', toggleMusic);

// Iniciar música automaticamente (requer interação do usuário)
document.addEventListener('click', () => {
    if (bgMusic.paused && musicPlaying) {
        bgMusic.play().catch(() => {});
    }
}, { once: true });

// ========== INICIALIZAÇÃO ==========
goToNode(0);
