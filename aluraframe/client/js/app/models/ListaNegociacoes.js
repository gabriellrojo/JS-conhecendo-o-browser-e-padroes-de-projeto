//Vamos adicionar uma lista a nossa negociacao

class ListaNegociacoes {
    #lista
    constructor (){
        this.#lista = []
    }

    adiciona(negociacao){
        this.#lista.push(negociacao)

        return this.#lista
    }

    lista () {
        return this.#lista
    }

}