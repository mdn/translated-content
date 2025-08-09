---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

Метод **`has()`** возвращает логическое значение, показывающее, существует ли элемент с указанным значением в объекте `Set` или нет.

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## Синтаксис

```
mySet.has(value);
```

### Параметры

- value
  - : Обязательный. Значение, которое необходимо проверить на наличие в коллекции `Set`.

### Возвращаемое значение

- Boolean
  - : Возвращает `true`, если в коллекции `Set` существует элемент с указанным значением; в противном случае `false`.

    > [!NOTE]
    > С технической точки зрения, `has()` использует алгоритм [`sameValueZero`](/ru/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) для определения наличия указанного элемента.

## Примеры

### Использование метода `has`

```js
var mySet = new Set();
mySet.add("foo");

mySet.has("foo"); // возвращает true
mySet.has("bar"); // возвращает false

var set1 = new Set();
var obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // возвращает true
set1.has({ key1: 1 }); // возвращает false, поскольку это разные ссылки на объекты
set1.add({ key1: 1 }); // сейчас set1 содержит 2 объекта
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
