class DataHelper {
    constructor (){
        throw new Error ("A classe DataHelper não deve ser instanciada")
    }

    static insereData(dataTabela){
        let data = new Date (dataTabela.split("-")) //Utilizamos o split, pois o dia é calculado como um dia a menos em relação ao inserido na tabela.

        return data
    }

    static formataData(data){
        //Vamos formatar a nossa data para apresentação no objeto:

        let dataFormatada = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`//Soma-se 1 aos mês pois o JS começa Janeiro por 0, então, para o JS, um ano tem 11 meses.

        return dataFormatada
    }
}