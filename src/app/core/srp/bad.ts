export class Pagamento {
  nome = 'Rafael'
  preco = 40
  horas = 40

  pagar() {
    const preco = this.preco * this.horas
    return (`Pagando ${preco} para ${this.nome}`)
  }
}

const pagamento = new Pagamento()
pagamento.pagar()
