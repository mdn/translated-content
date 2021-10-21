---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Map
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Map
---
{{JSRef}}

O objeto **`Map`** contém pares de chave-valor e lembra a ordem original da inserção das chaves. Qualquer valor (objetos e {{glossary("Primitive", "valores primitivos")}}) podem ser usados como chave ou valor.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Descrição

Um objeto `Map` itera seus elementos na order da inserção - um loop {{jsxref("Statements/for...of", "for...of")}} retorna um array de `[key, value]` para cada iteração

### Igualdade de chaves

- A igualdade de chaves é baseada no algoritimo [`sameValueZero`](/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).

- O {{jsxref("NaN")}} é considerado o mesmo que o `NaN` (apesar de `NaN !== NaN`) e todos os outros valores são considerados de acordo com a semântica do operador `===`. 

- Na especificação atual do ECMAScript, `-0` e `+0` são considerados iguais, embora não tenha sido nos esboços anteriores. Veja _"Equivalência de valor entre -0 e 0"_ em [Compatibilidade com navegadores](#browser_compatibility) para mais detalhes;

### Objetos vs. Maps

Um {{jsxref("Object")}} é similar o `Map` - ambos permitem que valores sejam definidos a chaves, retornar esses valores, remover as chaves, e detectar se algo está armazenado na chave. Por esta razão (e porque não existem outras alternativas construídas), o `Objeto` tem sido usado como `Map` historicamente.

Porém, existem diferenças importantes que fazem o `Map` ser preferido em alguns casos:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Objeto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chaves acidentais</th>
      <td>
        O <code>Map</code> não contém nenhuma chave por padrão. Ele só contém o que é definido explicitamente nele.
      </td>
      <td>
        <p>
          Um <code>Objeto</code> tem um prototype, então ele contém por padrão algumas chaves que podem conflitar com suas próprias chaves se você não for cuidadoso.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> Apartir do ES5, isso pode ser ignorado com o {{jsxref("Object.create", "Object.create(null)")}}, mas isso raramente é feito.
          </p>
        </div>
      </td>
    </tr> 
    <tr>
      <th scope="row">Tipos das chaves</th>
      <td>
        As chaves do <code>Map</code> podem ser qualquer valor (incluindo funções, objetos, ou qualquer outro tipo primitivo).
      </td>
      <td>
        A chave de um <code>Objeto</code> deve ser uma {{jsxref("String")}} ou um {{jsxref("Symbol")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Ordem das chaves</th>
      <td>
        <p>
          As chaves dentro do <code>Map</code> são ordenadas de forma simples, de maneira direta: O objeto <code>Map</code> itera suas entradas, chaves, e valor na ordem em que foram inseridas.
        </p>
      </td>
      <td>
        <p>
          Embora as chaves de um <code>Objeto</code> comum hoje sejam ordenadas, nem sempre esse foi o caso, e a ordem é complexa. Como resultado é melhor não confiar na ordem das propriedades.
        </p>
        <p>
          A ordem foi definida primeiramente para suas próprias propriedades apenas no ECMAScript 2015; no ECMAScript 2020 a ordem definida é por propriedades herdadas também.
          Veja o
          <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
            >OrdinaryOwnPropertyKeys</a
          >
          e
          <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties">
            numerateObjectProperties
          </a>
          operações de especificações abstraídas. Mas note que nenhum mecanismo itera <strong>todas</strong> as propriedades do objeto; cada um dos vários mecanismos incluem diferentes subconjuntos de propriedades.
          ({{jsxref("Statements/for...in",
          "for-in")}}
          incluí apenas propriedades enumeráveis com chaves do tipo string
          {{jsxref("Object.keys")}} inclui apenas chaves próprias e enumeráveis do tipo string;
          {{jsxref("Object.getOwnPropertyNames")}} incluí o próprio, e propriedades com chaves do tipo string, mesmo que não enumeráveis
          {{jsxref("Object.getOwnPropertySymbols")}} faz o mesmo só que para
          propriedades <code>Símbolos</code> como chave, etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Tamanho</p></th>
      <td>
        O número de items dentro de um <code>Map</code> 
        é facilmente retornado pela propriedade {{jsxref("Map.prototype.size", "size")}}
      </td>
      <td>
        O número de items dentro de um <code>Objeto</code> deve ser determinado manualmente
      </td>
    </tr>
    <tr>
      <th scope="row">Iteração</th>
      <td>
        Um <code>Map</code> é {{jsxref("Iteration_protocols", "iterável")}}, então ele pode ser diretamente iterável
      </td>
      <td>
        <p>
        O <code>Objeto</code> não implementa o <a
            href="/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >protocolo de iteração</a>, e os objetos não podem ser iterados diretamente usando o <a href="/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          > (por padrão).
        </>
        <div class="notecard note">
          <p><strong>Nota:</strong></p>
          <ul>
            <li>
              Um objeto pode implementar o protocolo de iteração, ou pode ser iterado usando o <a
                href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              >ou<a
                href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >.
            </li>
            <li>
              A declaração <a href="/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a>
                permite que você itere pela propriedades enumeráveis de um objeto.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Performance</th>
      <td>
        <p>
          Perfoma melhor em cenários envolvendo adições e remoções frequentes em pares chave-valor.
        </p>
      </td>
      <td>
        <p>
          Não é otimizado para adições e remoções frequentes de pares chave-valor.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialização e análise sintática</th>
      <td>
        <p>Não há suporte nativo para a serialização ou análise sintática.</p>
        <p>
          (Mas você pode construir sua própria serialização e conversão para o <code>Map</code> usando o
          {{jsxref("JSON.stringify()")}} como o argumento <em>replacer</em>,
          e usando o  {{jsxref("JSON.parse()")}} com o argumento <em>reviver</em>.
          Veja a questão no Stack Overflow     <a href="https://stackoverflow.com/q/29085197/"
            >How do you JSON.stringify an ES6 Map?</a
          >).
        </p>
      </td>
      <td>
        <p>
          Suporte nativo para serialização de {{jsxref("Object", "Objeto")}} para JSON, usando {{jsxref("JSON.stringify()")}}.
        </p> 
        <p>
          Suporte nativo para conversão de JSON para {{jsxref("Object", "Objeto")}} usando {{jsxref("JSON.parse()")}}. 
        </p> 
      </td>
    </tr>
  </tbody>
</table>

### Definindo propriedades no objeto

Definir propriedades no objeto também funciona em objetos `Map`, e pode causar um confusão considerável.

Portanto, isso aparenta funcionar de certa forma:

```js example-bad
const wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Mas esse jeito de definir propriedades não interage com a estrura de dados do `Map`. Dessa forma é usada a implementação genérica do objeto. O valor 'bla' não é armazenado no `Map` para queries. Outras operaçãoes nos dados irão falhar.

```js example-bad
wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

A maneira correta para armazenar dados dentro do `Map` é através do `set(key,value)` 

```js example-good
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
```

## Construtor

- {{jsxref("Map/Map", "Map()")}}
  - : Cria um novo objeto `Map`.

## propriedades estáticas

- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - : A função do construtor que é usada para criar apartir de objetos.

## propriedades da instância

- {{jsxref("Map.prototype.size")}}
  - : Retorna o número de pares chave/valor no objeto `Map`.

## Métodos da instância

- {{jsxref("Map.prototype.clear()")}}
  - : Remove todos os pares chave/valor do objeto `Map`.
- {{jsxref("Map.delete", "Map.prototype.delete(<var>key</var>)")}}
  - : Retorna `true` se o elemento no objeto `Map` existia e tenha sido removido, ou `false`
  se o elemento não existia. `Map.prototype.has(key)` irá retornar `false` após isso.
- {{jsxref("Map.get", "Map.prototype.get(<var>key</var>)")}}
  - : Retorna o valor associado à chave, ou `undefined` se não há nada.
- {{jsxref("Map.has", "Map.prototype.has(<var>key</var>)")}}
  - : Retorna uma asserção booleana se o valor tenha sido associado à chave no objeto `Map` ou não.
- {{jsxref("Map.set", "Map.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : Define o `valor` para a `chave` no objeto `Map`. Retorna o objeto `Map`

### Métodos iterativos

- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
  - : Retorna um novo objeto iterador que contèm **um array de `[chave, valor]`** para cada elemento do objeto `Map` na ordem em que foram inseridos.
- {{jsxref("Map.prototype.keys()")}}
  - : Retorna um novo objeto iterador que contèm as **chaves** de cada elemento do objeto `Map` na ordem em que foram inseridos.
- {{jsxref("Map.prototype.values()")}}
  - : Retorna um novo objeto iterador que contém os **valores** para cada elemento do objeto `Map` na ordem em que foram inseridos.
- {{jsxref("Map.prototype.entries()")}}
  - : Retorna um novo objeto iterador que contèm **um array de `[chave, valor]`**
    para cada elemento no objeto `Map` na ordem em que foram inseridos.
- {{jsxref("Map.forEach", "Map.prototype.forEach(<var>callbackFn</var>[,
    <var>thisArg</var>])")}}
  - : Invoca o `callbackFn` uma vez para cada par chave-valor presente no objeto `Map`, na ordem em que foram inseridos. Se um parâmetro `thisArg` é provido para o `forEach`, será usado o valor de `this` para cada callback. 

## Exemplos

### Usando o objeto Map

```js
const myMap = new Map()

const keyString = 'a string'
const keyObj    = {}
const keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "valor associado a 'a string'"
myMap.get(keyObj)       // "valor associado a keyObj"
myMap.get(keyFunc)      // "valor associado a keyFunc"

myMap.get('a string')    // "valor associado a 'a string'"
                         // porque keyString === 'a string'
myMap.get({})            // undefined, porque keyObj !== {}
myMap.get(function() {}) // undefined, porque keyFunc !== function () {}
```

### Usando NaN como chaves de Map

{{jsxref("NaN")}} também pode ser usado como chave. Apesar de todo o `NaN` não ser igual a ele mesmo (`NaN !== NaN`), o exemplo a seguir funciona porque não é possível distinguir um `NaN` de outros.

```js
const myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

const otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
```

### Iterando o Map com for..of

`Maps` podem ser iterados usando um loop `for..of`: 

```js
const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = um

for (const key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one
```

### Iterando o Map com forEach()

`Maps` podem ser iterados usando o 
método {{jsxref("Map.prototype.forEach", "forEach()")}}:

```js
myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = um
```
### Relação com Arrays

```js
const kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use o construtor padrão do Map para transformar um array 2D chave-valor em um map
const myMap = new Map(kvArray)

myMap.get('key1') // retorna "value1"

// Use o Array.from() para transformar um map em um Array bidimensional de chaves e valores
console.log(Array.from(myMap)) // Irá exibir para você o mesmo Array como um Array chave-valor

// Uma forma sucinta de fazer o mesmo, utilizando a sintaxe spread
console.log([...myMap])

// Ou use os iteradores keys() ou values(), e os converta para um array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]
```

### Clonando e mesclando Maps

Assim como `Arrays`, o map também pode ser clonado:

```js
const original = new Map([
  [1, 'um']
])

const clone = new Map(original)

console.log(clone.get(1))       // um
console.log(original === clone) // false (Útil para comparações superficiais)
```

> **Nota:** Tenha em mente que _o dado em si_ não é clonado.

Maps podem ser mesclados, mantendo as chaves únicas:

```js
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// Mescla dois maps. A última chave a se repetir vence.
// O operador spread essenciamente converte um Map para um Array
const merged = new Map([...first, ...second])

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three
```
Maps podem ser mesclados com array também:

```js
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// Mescla maps com um array. A última chave a se repetir vence.
const merged = new Map([...first, ...second, [1, 'eins']])

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Um polyfill do `Map` está disponível em
  [`core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
