---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
---

{{JSRef}}

O método **`Math.trunc()`** retorna a parte inteira de um número, descartando suas casas decimais.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Sintaxe

```
Math.trunc(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor de retorno

A parte inteira de um dado número.

## Descrição

Diferente dos demais métodos em Math: {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} e {{jsxref("Math.round()")}}, o retorno esperado da função `Math.trunc()` é simples e direto, ela apenas trunca o número passado a ela como parâmetro, removendo todas as casas decimais dele, não importando se o número é positivo ou negativo.

Portanto, se o argumento passado for um número positivo, `Math.trunc()` será equivalente a `Math.floor()`, caso contrário `Math.trunc()` será equivalente a `Math.ceil()`.

O argumento passado a esse método será convertido a um tipo numérico implicitamente.

Já que `trunc()` é um método estático em `Math`, sempre utilize `Math.trunc()`, ao invés de um método existente no objeto que você criou (`Math` não é um construtor).

## Exemplos

### Usando `Math.trunc()`

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

## Polyfill

(um*Polyfill* é um pedaço de código que o desenvolvedor pode colocar na sua página para garantir compatilibilidade do método. No exemplo abaixo, caso o navegador não tiver o método `trunc` na classe `Math`, ele será criado);

```js
Math.trunc =
  Math.trunc ||
  function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };
```

## Especificações

| Especificação                                        | Status           | Comentário         |
| ---------------------------------------------------- | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-math.trunc', 'Math.trunc')}} | {{Spec2('ES6')}} | Definição inicial. |

## Navegadores compatíveis

{{Compat("javascript.builtins.Math.trunc")}}

## Veja também

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}} {{experimental_inline}}
