---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
---

{{JSRef("Global_Objects", "Math")}}

## Sumário

A função **`Math.exp()`** retorna `ex`, onde `x` é o argumento, e `e` é a [Constante de Euler](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/E), a base dos logaritmos naturais

## Síntaxe

```js
Math.exp(x);
```

### Parâmetros

- `x`
  - : Um número.

## Descrição

Pelo fato de `exp` ser um método estático de `Math`, você sempre utiliza-o como `Math.exp()`, não como um método do objeto `Math` que você criou.

## Exemplos

### Exemplo: Usando `Math.exp`

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
```

## Especificações

| Especificação                                                    | Status             | Comentário         |
| ---------------------------------------------------------------- | ------------------ | ------------------ |
| 1ª Edição ECMAScript 1st Edition. Implementado em JavaScript 1.0 | Padrão             | Definição Inicial. |
| {{SpecName('ES5.1', '#sec-15.8.2.8', 'Math.exp')}}               | {{Spec2('ES5.1')}} |                    |
| {{SpecName('ES6', '#sec-math.exp', 'Math.exp')}}                 | {{Spec2('ES6')}}   |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.exp")}}

## Veja também

- O objeto {{jsxref("Global_Objects/Math", "Math")}} ao qual ele pertence.
- {{jsxref("Math.E")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
