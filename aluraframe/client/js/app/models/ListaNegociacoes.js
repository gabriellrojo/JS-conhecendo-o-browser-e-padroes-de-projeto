class ListaNegociacoes {
    constructor(){
        this.listaNegociacoes = []
    }

    adicionaNaLista(negociacao){
        this.listaNegociacoes.push(negociacao) //O return no push me traz quantos objetos estão foram inseridos no array.
    }

    get lista(){
        return this.listaNegociacoes
    }
}//Criei um get para a lista pois quero obter a lista com os objetos presentes nesse array (this.listaNegociacoes.lista). Um console.log em this.listaNegociacoes me da o objeto obtido através do construtor. Ou seja, um objeto com os arrays que agrupa os objetos negociações.