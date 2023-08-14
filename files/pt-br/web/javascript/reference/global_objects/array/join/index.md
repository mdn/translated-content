---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}O método **`join()`** junta todos os elementos de um array (ou um [array-like object](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)) em uma string e retorna esta string.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

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

> **Aviso:** Obs: Se um elemento é `undefined` ou `null`, ele é convertido em uma string vazia.

## Exemplos

### Juntando um array de quatro formas diferentes

O exemplo interativo a seguir cria um array, `a`, com três elementos, e o junta três vezes: a primeira com virgulas, a segunda so junta os elementos e a terceira com um sinal de menos.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

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

| Especificação                                                                | Status               | Comentário                                         |
| ---------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                          | {{Spec2('ES1')}}     | Definição inicial. Implementado em JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.5', 'Array.prototype.join')}}               | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-array.prototype.join', 'Array.prototype.join')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-array.prototype.join', 'Array.prototype.join')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.join")}}

## Veja Também

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
