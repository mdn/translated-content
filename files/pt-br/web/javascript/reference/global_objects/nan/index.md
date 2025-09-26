---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
---

{{jsSidebar("Objects")}}

## Resumo

A propriedade global **`NaN`** é um valor especial que significa _Not-A-Number_ (não é um número).

{{js_property_attributes(0,0,0)}}

## Sintaxe

```
NaN
```

## Descrição

`NaN` é uma propriedade do _objeto global_.

O valor inicial de `NaN` é Not-A-Number - o mesmo valor de `Number.NaN`. Nos navegadores modernos, o `NaN` é uma propriedade somente leitura e não configurável. Mesmo quando não for este o caso, evite sobrescrevê-lo.

Não é usual a utilização do `NaN`. Ele é retornado quando uma operação matemática falha (Math.sqrt(-1)) ou quando uma função tenta transformar uma string em inteiro (parseInt("blabla")).

### Testando um valor `NaN`

Os operadores de igualdade (`==` e `===`) não podem ser usados para testar um valor NaN. Ao invés disso, utilize {{jsxref("Number.isNaN()")}} ou {{jsxref("Global_Objects/isNaN", "isNaN()")}}.

```js
NaN === NaN; // falso
Number.NaN === NaN; // falso
isNaN(NaN); // verdadeiro
isNaN(Number.NaN); // verdadeiro
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
