---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
---

{{JSRef}}

A função **`Math.sin()`** retorna o seno de um número.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Sintaxe

```
Math.sin(x)
```

### Paramêtros

- `x`
  - : Um número (dado em radianos)

### Valor retornado

O seno de um número dado.

## Descrição

O método `Math.sin()` retorna um valor numérico entre -1 e 1, que representa o seno de um angulo dado em radianos.

Como `sin()` é um método estático de `Math`, você sempre o usa como `Math.sin()`, ao invés de um método de um objeto Math que você criou (`Math` não é um construtor).

## Exemplos

### Usando `Math.sin()`

```js
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
