---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---

{{JSRef}}

A propriedade **`Number.EPSILON`** representa a diferença entre 1 e o menor ponto flutuante maior que 1.

Você não tem que criar um objeto {{jsxref("Number")}} para acessar esta propriedade estática (use `Number.EPSILON`).

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}{{js_property_attributes(0, 0, 0)}}

## Descrição

A propriedade `EPSILON` tem o valor de aproximadamente `2.2204460492503130808472633361816E-16`, ou `2-52`.

## Polyfill

```js
if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
}
```

## Exemplos

### Testando igualdade

```js
x = 0.2;
y = 0.3;
z = 0.1;
equal = Math.abs(x - y + z) < Number.EPSILON;
```

## Especificações

| Especificação                                                    |
| ---------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-number.epsilon', 'Number.EPSILON')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.EPSILON")}}

## Veja também

- O objeto {{jsxref("Number")}} que esta propriedade pertence.
