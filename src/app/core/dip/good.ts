import { setDependency, useDependency } from '../ic'

export abstract class Pessoa {
  abstract nome: string
  abstract horas: number
}

export abstract class Desenvolvedor extends Pessoa {
  abstract nome: string
  abstract preco: number
  abstract horas: number

  abstract calculapreco(): number

  abstract resolveProblema(): boolean
}

export class Estagiario implements Desenvolvedor {
  nome = 'Estudante'
  preco = 30
  horas = 20

  calculapreco() {
    return this.preco * this.horas
  }

  resolveProblema() {
    return false
  }
}

export class Junior implements Desenvolvedor {
  nome = 'Dev Junior'
  preco = 50
  horas = 40

  calculapreco() {
    return this.preco * this.horas
  }

  resolveProblema() {
    return false
  }
}

export class Pleno implements Desenvolvedor {
  nome = 'Dev Pleno'
  preco = 100
  horas = 40

  calculapreco() {
    const bonus = this.preco * this.horas * 0.1
    return this.preco * this.horas + bonus
  }

  resolveProblema() {
    return true
  }
}

export class Pagamento {
  pagar(pessoa: Desenvolvedor) {
    const preco = pessoa.calculapreco()
    return `Pagando ${preco} para ${pessoa.nome}`
  }
}
