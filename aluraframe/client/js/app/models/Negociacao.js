//O primeiro passo é criar a classe negócio:

class Negociacao {
    constructor(data, quantidade, valor){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor
        this.volume = valor * quantidade
    }
}