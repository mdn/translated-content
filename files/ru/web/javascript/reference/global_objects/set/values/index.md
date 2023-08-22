---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

Метод **`values()`** возвращает новый `Итератор`, который содержит значения для каждого элемента в объекте `Set` в порядке их добавления.

Метод **`keys()`** является синонимом этого метода (для схожести с объектами {{jsxref("Map")}}). Он ведёт себя точно так же и возвращает **значения** элементов `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

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
