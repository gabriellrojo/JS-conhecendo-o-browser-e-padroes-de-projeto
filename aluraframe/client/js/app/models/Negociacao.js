class Negociacao {
    constructor(data, quantidade, valor){
        this.data = new Date(data);//utilizasse essa forma pois é possivel alterar o valor do objeto por através de um método, diferente dos dos metodos seguintes (nao sao simples ints); são objetos onde só é possível alterar o valor deles atribuindo um novo valor
        this.quantidade = quantidade;
        this.valor = valor
        Object.freeze(this)
    }
    
    volume (){
        return this.quantidade * this.valor
    }
}

//Let tem funcao de escopo. Ou seja, se você declara a varável let dentro de um bloco, ela será reconhecida apenas nesse bloco. Além disso, let NÃO permite reatribuição. Ex let nome = "Gabriel" e let nome = "Carlos". o console irá dizer que a variável já foi declarada.
//A variável var permite reatribuição e NÃO tem função de escopo. Você pode declara-lá fora de um laço de repetição, por ex, e ela será reconhecida dentro do laço.