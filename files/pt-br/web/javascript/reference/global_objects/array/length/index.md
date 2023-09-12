---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

{{JSRef}}

A propriedade **`length`** representa um inteiro de 32-bit sem sinal, que especifíca o número de elementos em um array.

{{js_property_attributes(1, 0, 0)}}

## Sintaxe

```
arr.length
```

## Descrição

O valor da propriedade length é um inteiro com um sinal positivo e valor menor que 2 elevado na 32ª potência(232).

Você pode setar o a propriedade `length` para truncar um array a qualquer momento. Quando você extende um array mudando sua propriedade `length`, o numero de elementos atuais não é incrementado; por exemplo, se você setar o tamanho para 3 quando ele é atualmente 2, o array continua somente com 2 elementos. Assim, a propriedade `length` não diz nada sobre o tamanho de valores definidos no array. Veja também [Relacionamento entre `length` e propriedades numérica](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties)s.

## Exemplos

### Iterando sobre um array

No exemplo a seguir `numbers` é iterado considerando a propriedade `length` para ver quantos elementos ele tem. O valor de cada elemento recebe então o dobro.

```js
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
```

### Encurtando um array

O exemplo a seguir encurta o array `statesUS` para um tamanho de 50 se o tamanho corrente for maior do que 50.

```js
if (statesUS.length > 50) {
  statesUS.length = 50;
}
```

## Especificações

| Especificação                                                                    | Status             | Comentário          |
| -------------------------------------------------------------------------------- | ------------------ | ------------------- |
| {{SpecName('ES1')}}                                                              | {{Spec2('ES1')}}   | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.4.5.2', 'Array.length')}}                           | {{Spec2('ES5.1')}} |                     |
| {{SpecName('ES6', '#sec-properties-of-array-instances-length', 'Array.length')}} | {{Spec2('ES6')}}   |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.length")}}

## Veja também

- {{jsxref("Array")}}
