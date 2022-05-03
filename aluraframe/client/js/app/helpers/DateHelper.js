class DataHelper {

    constructor () { //lembre-se: construtor é sinônimo de instância
        throw new Error ("A classe DataHelper não deve ser instanciada")
    }

    static corrigeData(data){
        let dataCorrigida = new Date(data.split("-"))
        return dataCorrigida
    }

    static dataParaTexto(data){
        let dia = data.getDate();
        let mes = (data.getMonth() + 1)
        let ano = data.getFullYear()
        
        return `${dia}/${mes}/${ano}`
    }

}