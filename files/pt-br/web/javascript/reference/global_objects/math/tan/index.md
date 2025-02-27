---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
---

{{JSRef}}

## Resumo

A função **`Math.tan()`** retorna a tangente de um número.

## Sintaxe

```
Math.tan(x)
```

### Parâmetros

- `x`
  - : Um número representando um ângulo em radianos.

## Descrição

O método `tan` retorna um valor numérico que representa a tangente do ângulo.

Como `tan` é um método estático de `Math`, use sempre `Math.tan()`, ao invés de um método de um objeto `Math` que você tenha criado.

## Exemplos

### Exemplo: Usando `Math.tan`

A seguinte função retorna a tangente da variável `x`:

```js
function getTan(x) {
  return Math.tan(x);
}
```

Como a função `Math.tan()` trabalha com radianos, mas normalment epe mais fácil trabalhar em graus, a seguinte função aceita um valor em graus, converte-o para radianos e retorna a tangente.

```js
function getTanDeg(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
