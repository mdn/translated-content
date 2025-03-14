---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}O método **`join()`** junta todos os elementos de um array (ou um [array-like object](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) em uma string e retorna esta string.

{{InteractiveExample("JavaScript Demo: Array.join()")}}

```js interactive-example
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```

## Sintaxe

```
arr.join([separador = ','])
```

### Parâmetros

- `separador` {{optional_inline}}
  - : Específica uma string para separar cada elemento adjacente do array. O separador é convertido em uma string se necessário. Se omitido, os elementos do array são separados com uma vírgula (","). Se o `separador` for uma string vazia, todos os elementos são juntados sem nenhum caracter entre eles.

### Valor de retorno

Uma string com todos os elementos do array juntos. Se `arr.length` é `0`, uma string vazia é retornada.

## Descrição

As conversões em string de todos os elementos de um array são juntados em apenas uma string.

> [!WARNING]
> Se um elemento é `undefined` ou `null`, ele é convertido em uma string vazia.

## Exemplos

### Juntando um array de quatro formas diferentes

O exemplo interativo a seguir cria um array, `a`, com três elementos, e o junta três vezes: a primeira com virgulas, a segunda so junta os elementos e a terceira com um sinal de menos.

{{InteractiveExample("JavaScript Demo: Array.join()")}}

```js interactive-example
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```

### Juntando um array-like object (objeto estilo-array)

O exemplo abaixo junta um array-like object (ex: o objeto [`arguments`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments)), chamando {{jsxref("Function.prototype.call")}} no `Array.prototype.join`.

```js
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, "a", true);
//saida esperada: "1,a,true"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
