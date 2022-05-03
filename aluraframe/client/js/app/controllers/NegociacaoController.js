class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor")
        this.listaNegociacao = new ListaNegociacoes()
        this.negociacaoView = new View ($(".negociacoes-view"))

        this.negociacaoView.update(this.listaNegociacao)

    }
    
    adiciona(event){
        event.preventDefault();

        //vamos chamar o DateHelper:

        let dataCorrigida = DataHelper.corrigeData(this.inputData.value);
        
        let negociacao = new Negociacao(dataCorrigida, this.inputQuantidade.value, this.inputValor.value)

        this.listaNegociacao.adiciona(negociacao)

        //tenho que chamar o update com a lista atualizada

        this.negociacaoView.update(this.listaNegociacao)
        console.log(this.listaNegociacao.lista())
        

    }
}






