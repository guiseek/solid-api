
/**
 * Dependency Injection Principle
 * Princípio da inversão de controle
 */


// * Tipos para abstrações
type AbstractType<T> = abstract new (...params: unknown[]) => T


// * Tipos para classes responsáveis
interface Type<T> extends Function {
  new(...params: unknown[]): T
}


// * Container de dependências
const container = new Map()




/**
 * Registra dependências
 * 
 * @param type {AbstractType<T>} Abstração
 * @param concrete {Type<T>} Classe responsável
 */
export function setDependency<T>(type: AbstractType<T>, concrete: Type<T>) {
  container.set(type, concrete)
}



/**
 * Solicita uma dependência
 * @param type {AbstractType<T>} Abstração
 * @returns {T} Classe responsável
 */
export function useDependency<T>(type: AbstractType<T>): T {
  const concrete = container.get(type)
  
  if (!concrete) {
    throw new Error(`O tipo ${type.name} não está registrado`)
  }

  return new concrete
}







/**
 * Examplo prático com nomes teóricos
 */

abstract class AbstractClass {
  abstract method(): string
}

class Class implements AbstractClass {
  method() {
    return 'method'
  }
}


container.set(AbstractClass, Class)

export const abstractClass = useDependency(AbstractClass)

console.log(abstractClass.method())






