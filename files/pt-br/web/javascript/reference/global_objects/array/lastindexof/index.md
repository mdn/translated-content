---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---

{{JSRef}}

O método **`lastIndexOf()`** retorna o ultimo índice que um certo elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente. O array é pesquisado de trás para frente, começando pelo `fromIndex`.

## Sintaxe

```
arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
```

## Parâmetros

- `searchElement`
  - : Elemento para ser localizado no array.
- `fromIndex`
  - : Opcional. O índice ao qual a busca será iniciada de traz para frente. O valor padrão é o tamanho total do array menos um (array.length -1), ou seja, todo o array será pesquisado. Se o índice for maior ou igual ao tamanho do array, o array inteiro será pesquisado. Se for negativo, ele é tomado como deslocamento no final do array. Note que mesmo se o índice for negativo, o array ainda será pesquisado de traz para frente. Se o índice calculado for menor que 0, -1 será retornado, ou seja, o array não será pesquisado.

## Descrição

`lastIndexOf` compara `searchElement` a elementos do Array usando [igualdade rigorosa](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (o mesmo método usado pelo operador ===, ou "igual triplo").

## Exemplos

### Exemplo: Usando `lastIndexOf`

O seguinte exemplo utiliza `lastIndexOf` para localizar elementos em um array.

```js
var array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
```

### Exemplo: Encontrando todas as ocorrências de um elemento

O seguinte exemplo utiliza `lastIndexOf` para encontrar todos os índices de um elemento em um dado array, utilizando {{jsxref("Array.prototype.push", "push")}} para adicioná-los em outro array quando são encontrados.

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Note que devemos tratar o caso `idx == 0` separadamente aqui pois o elemento será sempre encontrado independente do parâmetro `fromIndex` se ele for o primeiro elemento do array. Isso é diferente do método {{jsxref("Array.prototype.indexOf", "indexOf")}}.

## Polyfill

`lastIndexOf` foi adicionado ao padrão ECMA-262 na 5ª edição; devido a isso, não deve estar presente em outras implementações do padrão. Você pode contornar isso inserindo o seguinte código no início dos seus scripts, permitindo o uso de `lastIndexOf` em implementações que não o suportam nativamente. Esse algorítimo é exatamente o mesmo especificado no padrão ECMA-262, 5ª edição, assumindo que {{jsxref("Global_Objects/Object", "Object")}}, {{jsxref("Global_Objects/TypeError", "TypeError")}}, {{jsxref("Global_Objects/Number", "Number")}}, {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, e {{jsxref("Math.min")}} possuem seus valores originais.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
    "use strict";

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n,
      k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

Novamente, perceba que essa implementação foca na absoluta compatibilidade com `lastIndexOf` no Firefox e no motor JavaScript SpiderMonkey, incluíndo vários casos que são, indiscutivelmente, extremos. Se você pretende usar isso em aplicações reais, é possível calcular `from` com um código menos complicado se você ignorar esses casos.

## Especificações

| Especificação                                                                          | Status             | Comentário                                         |
| -------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.15', 'Array.prototype.lastIndexOf')}}                 | {{Spec2('ES5.1')}} | Definição inicial. Implementado no JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.lastIndexOf")}}

## Veja também

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
