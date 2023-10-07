---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`[@@iterator]()`** возвращает новый объект итератора `Iterator`, который проходит по кодовым точкам строкового значения, возвращая каждую кодовую точку в виде строкового значения.

## Синтаксис

```
string[Symbol.iterator]
```

## Примеры

### Пример: использование метода `[@@iterator]()`

```js
var string = "A\uD835\uDC68";

var strIter = string[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

### Пример: использование метода `[@@iterator]()` вместе с циклом `for..of`

```js
var string = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (var v of string) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
