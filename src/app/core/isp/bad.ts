interface Pessoa {
  nome: string
  preco: number
  horas: number
}

class Estagiario implements Pessoa {
  nome = 'Estudante'
  preco = 30
  horas = 20
}

class Junior implements Pessoa {
  nome = 'Dev Junior'
  preco = 50
  horas = 40
}

export class Pagamento {
  pagar(pessoa: Pessoa) {
    const preco = pessoa.preco * pessoa.horas
    return (`Pagando ${preco} para ${pessoa.nome}`)
  }
}


const pagamento = new Pagamento()
pagamento.pagar(new Estagiario())
pagamento.pagar(new Junior())
