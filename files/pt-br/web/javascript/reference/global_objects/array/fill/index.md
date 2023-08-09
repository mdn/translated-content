---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
---

{{JSRef}}

O método **`fill()`** preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.

## Sintaxe

```
arr.fill(valor[, ínicio = 0[, fim = this.length]])
```

### Parâmetros

- `valor`
  - : Valor para preencher o array.
- `ínicio`
  - : Opcional. Índice inicial.
- `fim`
  - : Opcional. Índice final.

## Descrição

O intervalo de preenchimento dos elementos é \[`início`, `fim`).

O método **`fill`** pode receber até três argumentos `valor`, `ínicio` e `fim`. Os argumentos `ínicio` e `fim` são opcionais com valor padrão `0 (valor)` e o tamanho do objeto `(fim)`.

Se o `ínicio` for negativo, ele será tratado como `tamanho + ínicio` onde `tamanho é o tamanho total do array`. Se o `fim` for negativo, ele será tratado como `tamanho + fim`.

A função **fill** é intencionalmente genérica, ele não precisa que o valor do this seja um objeto Array.

O método **fill** é um método mutável, ele irá mudar o objeto em si, e retorná-lo, não somente uma cópia do objeto.

## Exemplos

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}
```

## Polyfill

```js
if (!Array.prototype.fill) {
  Array.prototype.fill = function (value) {
    // Passo 1-2.
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    var O = Object(this);

    // Passo 3-5.
    var len = O.length >>> 0;

    // Passo 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Passo 8.
    var k =
      relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len);

    // Passo 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    // Passo 11.
    var final =
      relativeEnd < 0
        ? Math.max(len + relativeEnd, 0)
        : Math.min(relativeEnd, len);

    // Passo 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Passo 13.
    return O;
  };
}
```

## Especificações

| Especificação                                                            | Status           | Comentário         |
| ------------------------------------------------------------------------ | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.prototype.fill', 'Array.prototype.fill')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.fill")}}

\[1] Começando com Chrome 36, isto era disponível com uma mudança nas preferencias. Em chrome://flags, ativar a entrada "Enable Experimental JavaScript".

## Ver também

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
