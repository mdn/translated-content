---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

Метод **`values()`** возвращает новый `Итератор`, который содержит значения для каждого элемента в объекте `Set` в порядке их добавления.

Метод **`keys()`** является синонимом этого метода (для схожести с объектами {{jsxref("Map")}}). Он ведёт себя точно так же и возвращает **значения** элементов `Set`.

{{InteractiveExample("JavaScript Demo: Set.prototype.values")}}

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.values();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
```

## Синтаксис

```
mySet.values();
```

### Возвращаемое значение

Новый **`Итератор`**, содержащий значения для каждого элемента `Set`, в порядке их добавления.

## Примеры

### Использование `values()`

```js
var mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set.prototype.entries()")}}
