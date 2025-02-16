---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---

{{JSRef}}

Метод **`entries()`** возвращает новый **[`Итератор`](/ru/docs/Web/JavaScript/Guide/Iterators_and_generators)**, который содержит массив **`[значение, значение]`** для каждого элемента в объекте `Set` в порядке их добавления. Для объекта `Set` не существует ключа `key`, как в объекте `Map`. Тем не менее, чтобы API было схож с объектом `Map`, каждая _запись_ содержит значение как в _ключе,_ так и в _значении_, возвращая массив `[значение, значение]`.

{{InteractiveExample("JavaScript Demo: Set.prototype.entries()")}}

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // Expected output: Array [42, 42]
  // Expected output: Array ["forty two", "forty two"]
}
```

## Синтаксис

```
mySet.entries()
```

### Возвращаемое значение

Новый `Итератор`, который содержит массив `[значение, значение]` для каждого элемента, полученного в `Set` в порядке их добавления.

## Примеры

### Использование `entries()`

```js
var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
