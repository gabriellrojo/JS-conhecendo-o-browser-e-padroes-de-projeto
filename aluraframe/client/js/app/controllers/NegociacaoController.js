//Trabalhando no modelo MVC (Model View Controller), agora vamos tratar do Controller. É no controller que ocorre a captura dos dados e os processos que envolvem esses dados.

class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document)//Se declararmos a variável $ sem o bind, querySelector (que é um método do objeto document) perde sua referência; 
        this.data = $("#data");
        this.quantidade = $("#quantidade");
        this.valor = $("#valor");
        this.listaNegociacao = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView($("#negociacoesView"));
        this.mensagemView = new MensagemView($("#mensagemView"))

    }

    adiciona(event){
        event.preventDefault()
         
        //Perfeito. Agora eu devo utilizar o meu modelo de negociação e ali passar no construtor, os valores que são inseridos na tabela:

        //let negociacao = new Negociacao (this.data.value, this.quantidade.value, this.valor.value)
        

        //O problema é que o valor data, não corresponde a uma data de fato. Precisamos utilizar o new Date(); passando o valor inserido no formulário no campo data como parâmetro. Para isso vamos recorrer ao helper.

        let insereData = DataHelper.insereData(this.data.value);
        let dataParaExibicao = DataHelper.formataData(insereData) //Observe que não foi necessário instancioar nenhum objeto para utilizar os métodos da classe DataHelper. Chamaos a classe diretamente pois declaramos as funções como estática. Podemos dizer que essa é uma classe abstrada. Já que não deve ser instanciada.

        let negociacao  = new Negociacao (dataParaExibicao, this.quantidade.value, this.valor.value)

        //O objetivo agora é criar uma lista e, assim, inserir todas as negociações nessa lista. Vamos criar nosso modelo.

        this.listaNegociacao.adicionaNaLista(negociacao)       

        //Agora vamos trabalhar com a nossa view.

        this.negociacoesView.update(this.listaNegociacao)

        //Quero também apresentar uma mensagem sempre que uma nova negociação for inserida na tabela

        let mensagem = new Mensagem ("Negociação Inserida com Sucesso")
        this.mensagemView.update(mensagem)

        //Vamos resetar nossa tabela:

        document.querySelector(".form").reset()
        this.data.focus()

    }
}