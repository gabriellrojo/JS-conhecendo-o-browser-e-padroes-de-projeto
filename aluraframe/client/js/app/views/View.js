class View {
    constructor(div){
        this.div = div
    }

    update(model){
        this.div.innerHTML = this.template(model)
    }
}