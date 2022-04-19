class Estagiario {
  nome = 'Estudante'
  preco = 30
  horas = 20
}

class Junior extends Estagiario {
  nome = 'Dev Junior'
  preco = 50
  horas = 40
}

export class Pagamento {
  pagar(funcionario: Estagiario | Junior) {
    const preco = funcionario.preco * funcionario.horas
    return (`Pagando ${preco} para ${funcionario.nome}`)
  }
}


const pagamento = new Pagamento()
pagamento.pagar(new Estagiario())
