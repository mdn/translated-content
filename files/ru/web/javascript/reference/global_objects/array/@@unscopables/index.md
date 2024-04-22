---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---

{{JSRef}}

Свойства символа **`@@unscopable`** содержат свойства имён, которые не были включены в ECMAScript до версии ES2015. Эти свойства исключены из привязок оператора [`with`](/ru/docs/Web/JavaScript/Reference/Statements/with).

## Синтаксис

```
arr[Symbol.unscopables]
```

## Описание

Стандартные свойства массива, которые исключены из привязок `with`: copyWithin, entries, fill, find, findIndex, includes, keys, и values.

См. {{jsxref("Symbol.unscopables")}} о том, как установить `unscopables` для ваших собственных объектов.

{{js_property_attributes(0,0,1)}}

## Примеры

Приведённый код отлично работает в ES5 и ниже. Однако в ECMAScript 2015 и более поздних версиях был введён метод {{jsxref("Array.prototype.keys()")}}. Это означает, что внутри окружения `with`, "ключи" будут методом, а не переменной. Вот где теперь встроенные свойства символа {{jsxref("Array.prototype[@@unscopables]")}} вступают в игру и препятствуют тому, чтобы некоторые из методов Array были включены в оператор `with`.

```js
var keys = [];

with (Array.prototype) {
  keys.push("что-то");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Symbol.unscopables")}}
