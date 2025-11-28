let salario = parseFloat(prompt("Digite o salario"))

let valorBonus = parseFloat(prompt("Digite o valor do bonus"))

valorTotal = (salario + valorBonus ).toFixed(2)

alert(`salario = R$${salario}`)
alert(`bonus = R$${valorBonus}`)
alert(`salario total = R$${valorTotal}`)