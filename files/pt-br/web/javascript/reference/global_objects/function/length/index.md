---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
---

{{JSRef}}

A propriedade **`length`** especifica o número de argumentos esperados pela função.

{{js_property_attributes(0,0,1)}}

## Descrição

`length é uma propriedade de um objeto função`, e indica quantos argumentos a função espera, i.e. o número de parametros formais. Este número não incluí o {{jsxref("rest_parameters", "rest parameter", "", 1)}}. Por contraste, {{jsxref("Functions_and_function_scope/arguments/length", "arguments.length")}} é local para a função e fornece o número de argumentos que foram realmente passados.

### Propriedade de Dados do construtor `Function`

O construtor {{jsxref("Function")}} é propriamente um objeto {{jsxref("Function")}}. A proproedade de dados do seu `length` tem o valor de 1. Os atributos da propriedade são: Escrita: `false`, Enumerável: `false`, Configurável: `true`.

### Propriedades do objeto prototype de `Function`

A propriedade length do objeto prototype {{jsxref("Function")}} tem o valor de 0.

## Exemplos

```js
console.log(Function.length); /* 1 */

console.log(function () {}.length); /* 0 */
console.log(function (a) {}.length); /* 1 */
console.log(function (a, b) {}.length); /* 2 etc. */
console.log(
  function (...args) {}.length,
); /* 0, rest parameter is not counted */
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja tambem

- {{jsxref("Function")}}
