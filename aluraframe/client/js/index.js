//Vamos pegar os inputs e colocar num array:

let campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

//Agora, vamos adicionar novos valores na tabela:

let botao = document.querySelector(".btn")

botao.addEventListener("click", (event) => {
    event.preventDefault()
    //Vamos pegar o elemento pai da tabela para anexar a tr:
    let corpo = document.querySelector("tbody");
    //Criando Tr
    let novaTr = document.createElement("tr");
    //Criando Td
    campos.forEach(campo => {
        let novaTd = document.createElement("td");
        novaTd.textContent = campo.value
        novaTr.appendChild(novaTd)

        return novaTd
    })
    let novaTd = document.createElement("td")
    novaTd.textContent = campos[1].value*campos[2].value
    novaTr.appendChild(novaTd)
    corpo.appendChild(novaTr)

})
