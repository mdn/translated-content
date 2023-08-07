---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
---

{{JSRef}}

O método **`Object.is()`** determina se dois valores correspondem [ao mesmo valor](/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness).

## Sintaxe

```
Object.is(value1, value2);
```

### Parâmetros

- `value1`
  - : O primeiro valor a ser comparado.
- `value2`
  - : O segundo valor a ser comparado.

### Return value

Um {{jsxref("Boolean")}} indicando se os dois argumentos possuem o mesmo valor ou não.

## Descrição

`Object.is()` determina se dois valores correspondem [ao mesmo valor](/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness). Dois valores correspondem ao mesmo valor se uma das seguintes condições for verdadeira:

- ambos são {{jsxref("undefined")}}
- ambos são {{jsxref("null")}}
- ambos são `true` ou ambos são `false`
- ambos são strings do mesmo comprimento, com os mesmos caracteres
- ambos são o mesmo objeto
- ambos são numéricos e

  - ambos são `+0`
  - ambos são `-0`
  - ambos são {{jsxref("NaN")}}
  - ou ambos são não-zero e ambos são não {{jsxref("NaN")}} e ambos correspondem ao mesmo valor

Isso _não é_ o mesmo que ser igual de acordo com o operador {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}. O operador {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} aplica diversas coerções para ambos os lados (se eles não correspondem ao mesmo Tipo) antes de testar a igualdade (resultando em comportamentos como a comparação `"" == false` retornar `true`), enquanto `Object.is` não realiza a coerção de nenhum dos valores.

Isso também _não_ _é_ o mesmo que ser igual de acordo com o operador {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}. O operador {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} (assim como o operador {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}) trata os valores numéricos `-0` e `+0` como iguais e trata {{jsxref("Number.NaN")}} como não igual a {{jsxref("NaN")}}.

## Exemplos

```js
Object.is("foo", "foo"); // true
Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false

var test = { a: 1 };
Object.is(test, test); // true

Object.is(null, null); // true

// Casos especiais
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
```

## Polyfill para navegadores que não suportam ES6

`Object.is()` é uma adição proposta ao padrão ECMA-262; e como tal, pode não estar presente em todos os navegadores. Você pode contornar essa situação por meio da adição do seguinte código no começo de seus scripts. Isso permitirá a você utilizar `Object.is()`, mesmo quando não houver suporte por parte do navegador.

```js
if (!Object.is) {
  Object.is = function (x, y) {
    // Algoritmo para verificar se os valores sao iguais
    if (x === y) {
      // Passos 1-5, 7-10
      // Passos 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Passo 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
```

## Especificações

| Especificação                                          | Status               | Comentário         |
| ------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-object.is', 'Object.is')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-object.is', 'Object.is')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.is")}}

## Veja também

- [Comparações de igualdade](/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness) — uma comparação dos três recursos implementados para verificação de igualdade.
