const nomes = ["Amanda", "Carla", "Camila", "Caio", "Tamiris", "Ana", "Marcelo", "Marcos", "Silvana", "Aline", "Leonardo", "João", "Samanta", "Yuri", "Sara"];



export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);