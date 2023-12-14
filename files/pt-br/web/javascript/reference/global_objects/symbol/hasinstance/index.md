---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
---

{{JSRef}}

O symbol bem-conhecido **`Symbol.hasInstance`** é usado para determinar se um objeto construtor reconhece um objeto como de sua instância. O comportamento do operador {{jsxref("Operators/instanceof", "instanceof")}} pode ser customizado por este symbol.

{{js_property_attributes(0,0,0)}}

## Exemplos

Você pode implementar o comportamento customizado do seu `instanceof` deste jeito; por exemplo:

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return this.prototype.isPrototypeOf(instance) || Array.isArray(instance);
  }
}

console.log([] instanceof MyArray); // true
console.log(new MyArray() instanceof MyArray); // true
console.log(new Image() instanceof MyArray); // false

class MySubArray extends MyArray {}
console.log(new MySubArray() instanceof MySubArray); // true
console.log(new MySubArray() instanceof MyArray); // true
console.log(new MyArray() instanceof MySubArray); // false
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Global_Objects/Object/isPrototypeOf", "isPrototypeOf()")}}
