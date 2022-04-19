import { ajax } from 'rxjs/ajax'
import { take } from 'rxjs'
import { setDependency, useDependency } from './ic'

/**
 * Examplo prático mais perto da realidade
 */

// * Abstração
abstract class Http {
  abstract get<R>(url: string): Promise<R>
}


// * Implementação 1
class HttpAjax implements Http {
  constructor() {
    console.log('HttpAjax em uso')
  }

  async get<R>(url: string): Promise<R> {
    return new Promise<R>((resolve) => {
      ajax<R>({ url })
        .pipe(take(1))
        .subscribe((res) => {
          resolve(res.response)
        })
    })
  }
}


// * Implementação 2
class HttpFetch implements Http {
  constructor() {
    console.log('HttpFetch em uso')
  }

  async get<R>(url: string): Promise<R> {
    return fetch(url).then((res) => res.json())
  }
}


/**
 * Aqui controlamos quem será o verdadeiro
 * responsável quando o Http for solicitado
 */

setDependency(Http, HttpAjax) // 1

// container.set(Http, HttpFetch) // 2



/**
 * Este componente é muito usado, e está espalhado por toda a aplicação
 *
 * Todos os lugares usando esta dependência não foram impactados
 * porque o tipo HttpFetch foi registrado no container como Http
 * e o tipo HttpFetch implementa a interface Http
 *
 * Então quando nós solicitarmos Http, o container retorna HttpFetch
 */

const httpClass = useDependency(Http)

function ComponenteGenerico(index: number) {
  httpClass
    .get(`https://swapi.dev/api/people/${index}`)
    .then((res) => console.log(index, res))
}

/**
 * O que significa que nós não precisamos fazer nenhuma alteração
 * no código para que o HttpFetch seja trocado por outra opção
 */

ComponenteGenerico(1)
ComponenteGenerico(2)
ComponenteGenerico(3)
ComponenteGenerico(4)
