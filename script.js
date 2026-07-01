// Dark Night - Adventure Game
let currentScene = 'start';

const scenes = {
    start: {
        text: "A noite está escura e densa. Você é um viajante solitário que se perdeu em uma floresta amaldiçoada chamada 'Noite Eterna'. A névoa cobre tudo e você ouve uivos distantes. À sua frente, dois caminhos se abrem: um à esquerda, que leva a uma caverna sombria, e outro à direita, que segue ao longo de um rio negro.",
        choices: [
            { text: "Seguir o caminho da esquerda (Caverna)", next: 'caverna_entrada' },
            { text: "Seguir o caminho da direita (Rio)", next: 'rio_entrada' }
        ]
    },
    
    caverna_entrada: {
        text: "Você entra na caverna úmida. O ar é frio e cheira a podridão. De repente, você ouve um rosnado profundo vindo das profundezas. Seus olhos se acostumam à escuridão e você vê dois pares de olhos brilhantes se aproximando.",
        choices: [
            { text: "Enfrentar as criaturas com sua espada", next: 'caverna_combate' },
            { text: "Tentar se esconder nas sombras", next: 'caverna_esconder' }
        ]
    },
    
    caverna_combate: {
        text: "Você saca sua espada enferrujada e parte para o ataque! As criaturas são lobisomens! Após uma luta feroz, você consegue ferir um deles gravemente, mas o outro o morde no ombro.",
        choices: [
            { text: "Continuar lutando apesar do ferimento", next: 'caverna_final_bom' },
            { text: "Fugir correndo para a saída", next: 'caverna_fuga' }
        ]
    },
    
    caverna_esconder: {
        text: "Você se esconde atrás de uma rocha. Os lobisomens passam perto, mas não te veem. Mais adiante na caverna, você encontra um antigo altar com um amuleto brilhante.",
        choices: [
            { text: "Pegar o amuleto", next: 'caverna_artefato' },
            { text: "Ignorar e sair da caverna", next: 'caverna_saida_neutra' }
        ]
    },
    
    caverna_artefato: {
        text: "O amuleto pulsa com energia mágica. Ao tocá-lo, uma visão enche sua mente: o caminho para escapar da floresta. Mas o poder corrompe sua alma lentamente...",
        choices: [
            { text: "Usar o poder do amuleto", next: 'final_mago' },
            { text: "Destruir o amuleto", next: 'caverna_final_bom' }
        ]
    },
    
    rio_entrada: {
        text: "Você segue o rio. A correnteza é forte e a água parece viva, sussurrando segredos sombrios. À frente há uma ponte velha e instável. Do outro lado, você vê luzes fracas de uma cabana.",
        choices: [
            { text: "Atravessar pela ponte", next: 'ponte' },
            { text: "Nadar através do rio", next: 'nadar' }
        ]
    },
    
    ponte: {
        text: "A ponte range sob seus pés. No meio do caminho, uma figura encapuzada aparece bloqueando a passagem. 'Pague o pedágio... com sua vida ou sua alma', ele sussurra.",
        choices: [
            { text: "Atacar a figura", next: 'ponte_combate' },
            { text: "Oferecer um item valioso", next: 'ponte_pedido' }
        ]
    },
    
    nadar: {
        text: "Você mergulha nas águas geladas. Algo agarra sua perna - um espírito aquático! Você luta desesperadamente.",
        choices: [
            { text: "Lutar contra a criatura", next: 'nadar_combate' },
            { text: "Deixar o espírito te levar", next: 'final_maldito' }
        ]
    },
    
    ponte_combate: {
        text: "Você luta contra o guardião da ponte. Ele revela ser um demônio menor. Com um golpe de sorte, você o joga no rio!",
        choices: [
            { text: "Continuar para a cabana", next: 'cabana' }
        ]
    },
    
    ponte_pedido: {
        text: "Você entrega seu medalhão de família. A figura ri e desaparece. Você chega à cabana em segurança, mas sente que perdeu algo importante.",
        choices: [
            { text: "Entrar na cabana", next: 'cabana' }
        ]
    },
    
    nadar_combate: {
        text: "Você consegue se libertar do espírito, mas está exausto. Chega à outra margem e encontra a cabana.",
        choices: [
            { text: "Ir até a cabana", next: 'cabana' }
        ]
    },
    
    cabana: {
        text: "Na cabana, uma velha bruxa te recebe. Ela oferece uma poção para te guiar para fora da floresta.",
        choices: [
            { text: "Beber a poção", next: 'final_bruxa' },
            { text: "Recusar e tentar achar o caminho sozinho", next: 'final_perdido' }
        ]
    },
    
    caverna_fuga: {
        text: "Você foge da caverna sangrando. Os lobisomens não te perseguem, mas o veneno do ferimento começa a te transformar...",
        choices: [
            { text: "Buscar ajuda", next: 'final_lobisomem' }
        ]
    },
    
    caverna_saida_neutra: {
        text: "Você sai da caverna sem o tesouro, mas em segurança. A floresta ainda parece perigosa.",
        choices: [
            { text: "Continuar explorando", next: 'rio_entrada' }
        ]
    },
    
    // === FINAIS ===
    final_mago: {
        text: "O amuleto te concede poderes incríveis, mas transforma você em um senhor das trevas. Você governa a floresta eterna, mas perde sua humanidade para sempre.",
        isEnding: true,
        endingType: "Mago das Sombras"
    },
    
    caverna_final_bom: {
        text: "Com determinação, você derrota os últimos obstáculos e encontra a saída da floresta ao amanhecer. Você sobreviveu à Noite Eterna!",
        isEnding: true,
        endingType: "Sobrevivente"
    },
    
    final_maldito: {
        text: "O espírito te arrasta para as profundezas do rio. Sua alma agora vaga para sempre nas águas negras.",
        isEnding: true,
        endingType: "Alma Perdida"
    },
    
    final_bruxa: {
        text: "A poção te leva para fora da floresta, mas a bruxa rouba anos de sua vida em segredo. Você sobrevive, mas envelhece prematuramente.",
        isEnding: true,
        endingType: "Preço da Bruxa"
    },
    
    final_perdido: {
        text: "Você se perde ainda mais na floresta. Eventualmente, a fome e o desespero te consomem.",
        isEnding: true,
        endingType: "Errante Eterno"
    },
    
    final_lobisomem: {
        text: "O veneno te transforma completamente. Você se torna um dos monstros da floresta, caçando sob a lua cheia para sempre.",
        isEnding: true,
        endingType: "Lobisomem"
    }
};

function renderScene() {
    const scene = scenes[currentScene];
    if (!scene) return;
    
    document.getElementById('story').innerHTML = `<p>${scene.text}</p>`;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    if (scene.isEnding) {
        showEnding(scene);
        return;
    }
    
    scene.choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice.text;
        btn.onclick = () => {
            currentScene = choice.next;
            renderScene();
        };
        choicesDiv.appendChild(btn);
    });
}

function showEnding(scene) {
    document.getElementById('scene').classList.add('hidden');
    const endingDiv = document.getElementById('ending');
    endingDiv.classList.remove('hidden');
    
    document.getElementById('ending-title').textContent = `Fim: ${scene.endingType}`;
    document.getElementById('ending-text').innerHTML = `<p>${scene.text}</p>`;
}

function restartGame() {
    currentScene = 'start';
    document.getElementById('scene').classList.remove('hidden');
    document.getElementById('ending').classList.add('hidden');
    renderScene();
}

// Iniciar o jogo
window.onload = () => renderScene();
