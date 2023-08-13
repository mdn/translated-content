---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

{{JSRef}}

O método **`Number.isFinite()`** determina se o valor passado é um número finito.

## Sintaxe

```
Number.isFinite(valor)
```

### Parâmetros

- `valor`
  - : O valor a ser testado.

### Retorno

Um {{jsxref("Boolean")}} indicando se o valor passado é ou não um número finito.

## Descrição

Em comparação com a função global {{jsxref("isFinite", "isFinite()")}}, esse método não força a conversão do parâmetro para número. Isso significa que só valores do tipo número, que são também finitos, retornam `true`.

## Exemplos

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, teria sido true com a função
// global isFinite('0')
Number.isFinite(null); // false, teria sido true com a função
// global isFinite(null)
```

## Polyfill

```js
Number.isFinite =
  Number.isFinite ||
  function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

## Especificações

| Specification                                                       | Status               | Comment             |
| ------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-number.isfinite', 'Number.isInteger')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-number.isfinite', 'Number.isInteger')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.isFinite")}}

## Veja também

- O objeto {{jsxref("Number")}} ao qual pertence.
