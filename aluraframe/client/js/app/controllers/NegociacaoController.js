class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor")
    }
    
    adiciona(event){
        event.preventDefault();
        let data = new Date(...this.inputData.value
            .split("-")
            .map((dado, indice) => { //[ano, dia, mes]
                if(indice == 1){
                    return dado - 1
                }else {
                    return dado
                }
            }))
        
        let negociacao = new Negociacao(data, this.inputQuantidade, this.inputValor)

        console.log(negociacao.data)

        let novaData = negociacao.data.getDate()
        + "/" + (negociacao.data.getMonth() + 1)
        + "/" + negociacao.data.getFullYear()
        
        console.log(novaData)
    }
}






