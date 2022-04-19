class Estagiario {
  nome = 'Estudante'
  preco = 100
  horas = 20
}


export class Pagamento {
  pagar(estagiario: Estagiario) {
    const preco = estagiario.preco * estagiario.horas
    return (`Pagando ${preco} para ${estagiario.nome}`)
  }
}


const pagamento = new Pagamento()
pagamento.pagar(new Estagiario())
