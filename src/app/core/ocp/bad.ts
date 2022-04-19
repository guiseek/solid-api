class Estagiario {
  nome = 'Estagiario'
  preco = 30
  horas = 20
}

export class Pagamento {
  pagar(funcionario: Estagiario) {
    const preco = funcionario.preco * funcionario.horas
    return (`Pagando ${preco} para ${funcionario.nome}`)
  }
}

const pagamento = new Pagamento()
pagamento.pagar(new Estagiario())
