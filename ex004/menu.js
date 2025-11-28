/* let opcao = Number(prompot(`escolha uma opção
    =====================
     [1] Salgado
     [2] Bebidas
     [3] Lanches
     [4] Sobremesas
     [5] Sair

     =======================
`)) */

let opcao = Number(prompt(`Qual opção?`))

switch (opcao) {
    case 1:
        alert("salgado")
        let sacolaSalgado = Number(prompt(`Qual salgado deseja comprar?
            ===============================   
        [1] coxinha
        [2] risole
        [3] kibe
        [4] bolinho de queijo
            ==============================`))
            switch(sacolaSalgado){
                case 1: 
                    let unidadeCoxinha = Number(prompt("Quantas unidades de coxinha voce deseja comprar?"))
                     
                    let totalCompra = unidadeCoxinha * 5
                     alert(`${unidadeCoxinha} und total = ${totalCompra}`)
                     default:
                    break;

                    
            }

            break;

    case 2:
        alert("Bebida")
        break;
    

    case 2:
        alert("risole")
        break;

    case 3:
        alert("kibe")
        break;

    case 4:
        alert("")


    case 2:
        alert("Bebida")
        break;

    case 3:
        alert("Lanches")
        break;

    case 4:
        alert("Sobremesas")
        break;

    case 5:
        alert("Sair")
        break;

    default:
        alert("Sistema finalizado")
        break;

}