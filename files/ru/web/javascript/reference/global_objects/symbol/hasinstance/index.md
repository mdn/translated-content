---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
---

{{JSRef}}

**`Symbol.hasInstance`** — известный символ, который используется для определения является ли объект экземпляром конструктора. Этот символ используется для изменения поведения оператора {{jsxref("Operators/instanceof", "instanceof")}}.

{{js_property_attributes(0,0,0)}}

## Примеры

Поведение `instanceof` может быть изменено, например, следующим образом:

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Operators/instanceof", "instanceof")}}
