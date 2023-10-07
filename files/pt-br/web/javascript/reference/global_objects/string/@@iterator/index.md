---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
---

{{JSRef}}

O método **`[@@iterator]()`** retorna um novo objeto `Iterator` que itera sobre os pontos de código do valor da String, retornando cada ponto de código como um valor String.

## Sintaxe

```
str[Symbol.iterator]
```

### Valor de Retorno

Novo objeto `Iterator`.

## Exemplos

### Usando `[@@iterator]()`

```js
var str = "A\uD835\uDC68";

var strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

### Usando `[@@iterator]()` com `for..of`

```js
var str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (var v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## Especificações

|                                                                                               | Status               | Comment            |
| --------------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-string.prototype-@@iterator', 'String.prototype[@@iterator]()')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-string.prototype-@@iterator', 'String.prototype[@@iterator]()')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.@@iterator")}}

## Veja também

- [Iteration protocols](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols)
