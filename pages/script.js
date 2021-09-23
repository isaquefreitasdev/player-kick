let music = document.getElementById("music");
let grace = document.getElementById("grace");
let promisse = document.getElementById("promisse")
let voltar = document.getElementById("voltar");
let play = document.getElementById("play");
let avante = document.getElementById("avante");
let musicas = [
    "../audio/Davi Sacer - O Deus que Surpreende (DVD No Caminho do Milagre).mp3",
    "../audio/Davi Sacer - Deus de Promessas (DVD No Caminho do Milagre).mp3",
    "../audio/Davi Sacer - Olha pra Mim (DVD No Caminho do Milagre).mp3",
    "../audio/Davi Sacer - Sobre as Águas (DVD No Caminho do Milagre).mp3",
];

// inicio com 0, pois será o indice da
// musica inicial essa variável vai nos ajudar a trocar as musicas
let index_atual_da_musica = 0;
function proxime() {
    // aqui eu vou adicionar a variável  
    // sempre que for clicado no botão de passar  
    index_atual_da_musica += 1;
    // Caso o valor do indice atual seja maior ou igual ao tamanho  
    // da lista de músicas, eu altero esse valor para que volte para o inicio  
    if (index_atual_da_musica >= musicas.length) {
        index_atual_da_musica = 0;
    }
    // lembre-se que o indice é sempre sua posição menos 1  
    // como assim ? se você quer a segunda musica da lista  
    // então o seu indice é 1, porque 2-1 =1  
    // se você quer a 4 musica, seu valor é 3, e assim sucessivamente
    // aqui eu altero o src da musica atual  
    music.src = musicas[index_atual_da_musica];


}
function musicAnterior() {
    index_atual_da_musica -= 1;
    music.src = musicas[index_atual_da_musica];
    if (index_atual_da_musica <= musicas.length) {
        index_atual_da_musica = 3;
    }

}
function playMusic() {
    music.play();

}
function playMusic2() {
    music.pause();
}



