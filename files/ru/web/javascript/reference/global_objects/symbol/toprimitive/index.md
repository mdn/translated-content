---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
---

{{JSRef}}

**`Symbol.toPrimitive`** является символом (symbol), который описывает свойство объекта как функцию, которая вызывается при преобразовании объекта в соответствующее примитивное значение.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Описание

С помощью свойства **`Symbol.toPrimitive`** (которое описывается как функция), объект может быть приведён к примитивному типу. Функция вызывается со строковым аргументом **`hint`**, который передаёт желаемый тип примитива. Значением аргумента **`hint`** может быть одно из следующих значений `"number"`, `"string"`, и `"default"`.

## Примеры

Описанные ниже примеры показывают как с помощью свойства **`Symbol.toPrimitive`** можно привести объект к примитивному типу.

```js
// Объект без свойства Symbol.toPrimitive
var obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Объект со свойством Symbol.toPrimitive
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return 10;
    }
    if (hint == "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        -- желаемый тип (hint) - "number"
console.log(`${obj2}`); // "hello"   -- желаемый тип (hint) - "string"
console.log(obj2 + ""); // "true"    -- желаемый тип (hint) - "default"
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
