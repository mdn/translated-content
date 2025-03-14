---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
---

{{JSRef}}

O símbolo **`Symbol.species`** especifica uma propriedade valor-função que a função construtora usa para criar objetos derivados.

{{InteractiveExample("JavaScript Demo: Symbol.species")}}

```js interactive-example
class Array1 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new Array1(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof Array1);
// Expected output: false

console.log(mapped instanceof Array);
// Expected output: true
```

## Descrição

A propriedade acessora de espécies permite que subclasses substituam o construtor padrão para objetos.

{{js_property_attributes(0,0,0)}}

## Exemplos

### Usando espécies

Você pode querer que retorne objetos {{jsxref("Array")}} em sua class derivada de array `MyArray`. Por exemplo, quando usar métodos tais como {{jsxref("Array.map", "map()")}} que retorna o construtor padrão, você quer que esses métodos retornem um objeto `Array` pai, em vez do objeto `MyArray`. Esses símbolos espécies permitem que você fala isso:

```js
class MyArray extends Array {
  // Substitui espécies para a Array pai construtora
  static get [Symbol.species]() {
    return Array;
  }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map.@@species", "Map[@@species]")}}
- {{jsxref("Set.@@species", "Set[@@species]")}}
