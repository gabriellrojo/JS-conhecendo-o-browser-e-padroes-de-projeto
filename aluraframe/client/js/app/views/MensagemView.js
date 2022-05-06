class MensagemView extends View{
    constructor(div){
        super(div)
    }

    template(model){
        return `<p class="alert alert-info">${model.msgTexto}</p>`
    }
}