---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---

{{JSRef}}

O método **`Number.isSafeInteger()`** determina se o valor fornecido é seja um número seguro.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

Um inteiro seguro é um inteiro que:

- pode ser representando exatamente como um número IEEE-754 de dupla precisão e
- pode ser representando exatamente como um número IEEE-754
  de precisão dupla e
- cuja representação IEEE-754 não pode ser o resultado do arrendodamento de qualquer outro número inteiro para se ajustar ao IEEE-754.

Exemplo, `253 - 1` é um inteiro seguro: pode ser exatamente representado, e nenhum outro numero arredondado existe para ele na represetanção IEEE-754. Em contexto, `253` _não_ é um inteiro seguro: pode ser representado em IEEE-754, mas um inteiro `253 + 1` não pode ser diretamente representado em IEEE-754 mas instanciado do arrendamento de `253` sob arrendamento para o mais próximo e do arrendamento de zero a zero. Os inteiros seguros consistem em todos os inteiros de `-(253 - 1)` inclusive para `253 - 1` (sendo ± `9007199254740991` ou ± 9,007,199,254,740,991).

A manipulação de valores entre \~9 quadrilhões com precisão total requer o uso de [arbitrary precision arithmetic library](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic) (biblioteca aritmética de precisão arbitrária). Veja [What Every Programmer Needs to Know about Floating Point Arithmetic](http://floating-point-gui.de/) (o que todo programador precisa saber sobre aritmética de ponto flutuante) para mais informações sobre represetanções de número de ponto flutuante.

Para números inteiros maiores, considere o uso do tipo {{jsxref("BigInt")}}.

## Sintaxe

```
Number.isSafeInteger(valorTest)
```

### Parâmetros

- `valorTest`
  - : O valor a ser testado pode ser um número inteiro seguro.

### Retorno

Um {{jsxref("Boolean")}} indica se o valor fornecido é um número seguro ou não.

## Exemplos

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Polyfill (caso não exista suporte)

```js
Number.isSafeInteger =
  Number.isSafeInteger ||
  function (value) {
    return (
      Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER
    );
  };
```

## Especificações

| Especificação                                                                | Status               | Coméntario        |
| ---------------------------------------------------------------------------- | -------------------- | ----------------- |
| {{SpecName('ES2015', '#sec-number.issafeinteger', 'Number.isSafeInteger')}}  | {{Spec2('ES2015')}}  | Definição inicial |
| {{SpecName('ESDraft', '#sec-number.issafeinteger', 'Number.isSafeInteger')}} | {{Spec2('ESDraft')}} |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.isSafeInteger")}}

## Veja também

- O objeto pertence a {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
