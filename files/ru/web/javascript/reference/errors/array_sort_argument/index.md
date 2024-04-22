---
title: "TypeError: invalid Array.prototype.sort argument (TypeError: недопустимый Array.prototype.sort argument)"
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: аргумент не является объектом функции (Edge)
TypeError: недопустимый Array.prototype.sort аргумент для (Firefox)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Аргумент {{jsxref("Array.prototype.sort()")}} предполагается либо {{jsxref("undefined")}} или функцию, которая сравнивает его операндов.

## Примеры

### Неправильные примеры

```js example-bad
[1, 3, 2].sort(5); // TypeError

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || "asc"); // TypeError
```

### правильные

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || "asc"]); // [1, 2, 3]
```

## Смотрите также

- {{jsxref("Array.prototype.sort()")}}
