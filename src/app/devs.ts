import { setDependency, useDependency } from './core/ic'
import { app } from './app'
import {
  Pleno,
  Junior,
  Pagamento,
  Estagiario,
  Desenvolvedor,
} from './core/dip/good'

const devs: Record<string, Desenvolvedor> = {
  estagiario: new Estagiario(),
  junior: new Junior(),
  pleno: new Pleno(),
}

setDependency(Desenvolvedor, Pleno)

app.get('/devs', (req, res) => {
  const dev = useDependency(Desenvolvedor)
  res.json({ dev, salario: dev.calculapreco() })
})

app.get('/edx', (req, res) => {
  const dev = useDependency(Desenvolvedor)
  res.json(dev)
})

app.get(`/pagamento/:dev`, (req, res) => {
  const dev = devs[req.params.dev]

  const pagamento = new Pagamento()

  res.json({ message: pagamento.pagar(dev), salario: dev.calculapreco() })
})

export default app
