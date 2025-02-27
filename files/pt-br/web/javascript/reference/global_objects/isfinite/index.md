---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
---

{{jsSidebar("Objects")}}

`A função global isFinite()` determina se o valor transmitido é um número finito. Se necessário, o parâmetro é primeiro convertido a um número.

## Sintaxe

```
isFinite(testValue)
```

### Parametros

- `testValue`
  - : O valor a ser testado para a finitude

## Descrição

`isFinite` é uma função de nível superior é não é associada com qualquer objeto.

Você pode usar esta função para determinar se um número é um número finito. `A função isFinite` examina o número em seu argumento. Se o argumento é `NaN`, positivo infinito, ou negativo infinito, este método retorna `false`; de outra forma , ele retorna `true`.

## Exemplos

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(null); // true

isFinite("0"); // true, teria sido false com o
// mais robusto Number.isFinite("0")
```

## Especificações

{{Specifications}}

## Browser compatibilidade

{{Compat}}

## Veja também

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN()")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
