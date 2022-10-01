---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
translation_of: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---
{{JSRef}}

O método **`copyWithin()`** copia parte de um array para outra localização dentro deste mesmo array e o retorna, sem alterar seu tamanho.

## Sintaxe

```
arr.copyWithin(target, start[, end = this.length])
```

### Parâmetros

- `target`
  - : Posição para a qual os elementos serão copiados. Caso negativo, o `target` será contado a partir do final.
- `start`
  - : Índice inicial de onde se copiará os elementos. Caso negativo, o `start` será contado a partir do final.
- `end` {{optional_inline}}
  - : Índice final de onde se copiará os elementos. Caso negativo, o `end` será contado a partir do final.

## Descrição

Os argumentos `target`, `start` e `end` são restritos a {{jsxref("Number")}} e truncados para valores inteiros.

Se `start` for negativo, ele é tratado como `length+start`, onde `length` é o comprimento do array. Se `end` for negativo, ele é tratado como `length+end`.

A função `copyWithin` é intencionalmente _genérica_, não requer que seu valor `this` seja um objeto {{jsxref("Array")}} e, adicionalmente, `copyWithin` é um _método mutável_, irá mudar o próprio objeto `this` e retorná-lo, não apenas retornar uma cópia dele.

## Exemplos

```js
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// Typed Arrays do ES6 são subclasses de Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// Em plataformas que ainda não são compatíveis com ES6:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## Polyfill

```js
if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin = function(target, start/*, end*/) {
    // Passos 1-2.
    if (this == null) {
      throw new TypeError('this é null ou não definido');
    }

    var O = Object(this);

    // Passos 3-5.
    var len = O.length >>> 0;

    // Passos 6-8.
    var relativeTarget = target >> 0;

    var to = relativeTarget < 0 ?
      Math.max(len + relativeTarget, 0) :
      Math.min(relativeTarget, len);

    // Passos 9-11.
    var relativeStart = start >> 0;

    var from = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Passos 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Passo 15.
    var count = Math.min(final - from, len - to);

    // Passos 16-17.
    var direction = 1;

    if (from < to && to < (from + count)) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Passo 18.
    while (count > 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Passo 19.
    return O;
  };
}
```

## Especificações

| Especificação                                                                                                        | Status                       | Comentário         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.prototype.copyWithin', 'Array.prototype.copyWithin')}}     | {{Spec2('ES6')}}         | Definição inicial. |
| {{SpecName('ESDraft', '#sec-array.prototype.copyWithin', 'Array.prototype.copyWithin')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.copyWithin")}}

## Veja também

- {{jsxref("Array")}}
