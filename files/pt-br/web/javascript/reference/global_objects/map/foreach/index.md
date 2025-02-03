---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
---

{{JSRef}}

O método **`forEach()`** executa a função que foi provida uma vez para cada par de chave-valor no objeto `Map`, na order em que foram inseridos.

{{InteractiveExample}}

```js interactive-example
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined],
]).forEach(logMapElements);

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"

```

## Sintaxe

```js
// Arrow function
forEach(() => { ... } )
forEach((value) => { ... } )
forEach((value, key) => { ... } )
forEach((value, key, map) => { ... } )

// função de Callback
forEach(callbackFn)
forEach(callbackFn, thisArg)

// função de callback inline
forEach(function callbackFn() { ... })
forEach(function callbackFn(value) { ... })
forEach(function callbackFn(value, key) { ... })
forEach(function callbackFn(value, key, map) { ... })
forEach(function callbackFn(value, key, map) { ... }, thisArg)
```

### Parâmetros

- `callbackFn`
  - : A função que será executada em cada entrada do map. Ela receberá os seguintes argumentos:
    - `value` {{Optional_Inline}}
      - : O valor de cada iteração.
    - `key` {{Optional_Inline}}
      - : A chave de cada iteração.
    - `map` {{Optional_Inline}}
      - : O map que está sendo iterado.
- `thisArg` {{Optional_Inline}}
  - : O valor para usar como `this` quando o callback for executado.

### Valor retornado

{{jsxref("undefined")}}.

## Descrição

O método `forEach` executa o `callback` fornecido uma vez para cada chave do map
que realmente existe.
Ele não é invocado para chaves que foram deletadas.
Porém, é executado para valores que estão presentes mesmo tendo o valor `undefined`.

O `callback` é invocado com **três argumentos**:

- O `value` de entrada
- A `key` de entrada
- o **objeto `Map`** que está sendo percorrido

Se o parâmetro `thisArg` for fornecido para o `forEach`, ele será passado para o
`callback` quando for invocado, para ser usado como o valor de `this`. De outra forma,
o valor `undefined` será usado como valor de `this`. O valor de `this` será
observado pelo `callback` em última análise e será determinado de acordo com
[as regras usuais para a determinação do `this` visto por uma função](/pt-BR/docs/Web/JavaScript/Reference/Operators/this).

Cada valor será visitado uma vez, exceto no caso em que foram deletados e adicionados novamente
antes do `forEach` ser finalizado. O `callback` não é invocado para valores que foram removidos antes de
terem sidos visitados. Novos valores adicionados antes do `forEach` terminar serão visitados.

## Exemplos

### Exibindo o conteúdo de um objeto Map

O código a seguir imprime uma linha para cada elemento do objeto `Map`:

```js
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);
// logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
