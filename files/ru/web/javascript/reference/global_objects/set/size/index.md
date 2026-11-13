---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
---

{{JSRef}}

Метод доступа **`size`** возвращает количество (уникальных) элементов в объекте {{jsxref("Set")}}

{{InteractiveExample("JavaScript Demo: Set.prototype.size")}}

```js interactive-example
const set1 = new Set();
const object1 = {};

set1.add(42);
set1.add("forty two");
set1.add("forty two");
set1.add(object1);

console.log(set1.size);
// Expected output: 3
```

## Описание

Значение `size` является целым числом, которое показывает как много записей имеет объект `Set`. Функция для установки `size` равна `undefined`; вы не можете изменить это свойство.

## Примеры

### Использование `size`

```js
var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("некоторый текст");

mySet.size; // 3
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set")}}
