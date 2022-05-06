//Agora precisamos apresentar a tabela que detém os valores relacionados as negociações em nossa interface. Ou seja, vamos tratar agora da VIEW no nosso modelo MVC.

class NegociacoesView extends View {
    constructor(div){
        super(div)
    }

    template(model){
        return ` <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${model.lista.map(item => {
                            return `<tr>
                                        <td>${item.data}</td>
                                        <td>${item.quantidade}</td>
                                        <td>${item.valor}</td>
                                        <td>${item.volume}</td>
                                    </tr>`})}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"></td>
                            <td>${model.lista.reduce((total, item) => total + item.volume,0)}</td>
                        </tr>
                    </tfoot>
            </table>`
    }//Só que eu preciso inserir esse conteúdo de texto em um lugar específico do HTML, para isso, vamos ter que criar uma <div> no nosso HTML que será responsável por indicar onde esse texto deverá ser inserido e, para isso, utilizaremos o innerHTML
}