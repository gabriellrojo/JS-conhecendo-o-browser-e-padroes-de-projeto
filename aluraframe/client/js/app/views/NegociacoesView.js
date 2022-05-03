class View {
    constructor(element){
        this.element = element
    }

    template(lista){
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${lista.lista().map(item => {
                return ` 
                    <tr>
                        <td> ${item.data} </td>
                        <td> ${item.quantidade} </td>
                        <td> ${item.valor} </td>
                        <td> ${item.volume} </td>
                    </tr>
                `
            }).join("")}
        </tbody>
        
        <tfoot>
            <td colspan="3"></td>
            <td>0</td>
        </tfoot>
    </table>`
    }
    
    update(lista){
        this.element.innerHTML = this.template(lista)

    }
}