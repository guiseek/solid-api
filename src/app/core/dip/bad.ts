abstract class Pessoa {
  abstract nome: string
  abstract preco: number
  abstract horas: number

  abstract calculapreco(): number
}

class Estagiario implements Pessoa {
  nome = 'Estudante'
  preco = 30
  horas = 20

  calculapreco() {
    return this.preco * this.horas
  }
}

class Junior implements Pessoa {
  nome = 'Dev Junior'
  preco = 50
  horas = 40

  calculapreco() {
    return this.preco * this.horas
  }
}

class Pleno implements Pessoa {
  nome = 'Dev Pleno'
  preco = 100
  horas = 40

  calculapreco() {
    const bonus = (this.preco * this.horas) * 0.1
    return (this.preco * this.horas) + bonus
  }
}

export class Pagamento {
  pagar(pessoa: Pessoa) {
    const preco = pessoa.calculapreco()
    console.log(`Pagando ${preco} para ${pessoa.nome}`)
  }
}


const pagamento = new Pagamento()
pagamento.pagar(new Estagiario())
pagamento.pagar(new Junior())
pagamento.pagar(new Pleno())
