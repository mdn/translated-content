---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef}}

## Sumário

O método **`Array.isArray()`** retorna `true` se um objeto é uma array, e `false` se não é.

## Sintaxe

```
Array.isArray(obj)
```

### Parâmetros

- `obj`
  - : O objeto a ser verificado.

## Descrição

Se o objeto é um {{jsxref("Array")}}, retorna `true`(verdadeiro), caso contrário é retornado `false`(falso).

Veja o artigo ["Determinando com absoluta precisão se um objeto em Javascript é ou não uma array"](https://web.mit.edu/jwalden/www/isArray.html) para mais detalhes.

## Exemplos

```js
// todas as chamadas conseguintes retornam true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Pequeno detalhe: Array.prototype por si só é uma array:
Array.isArray(Array.prototype);

// todas as conseguintes retornam false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

## Polyfill

Executando o seguinte código antes de qualquer outro, o método `Array.isArray()` será criado, caso o browser não o disponibilize nativamente.

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

## Especificações

{{Specifications}}

## Compatibilidade com o Browser

{{Compat}}

## Veja Também

- {{jsxref("Global_Objects/Array", "Array")}}
