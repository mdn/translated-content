---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Метод **`toLocaleString()`** возвращает строковое представление элементов массива. Элементы преобразуются в строки с использованием своих собственных методов `toLocaleString` и эти строки разделяются локале-зависимой строкой (например, запятой «,»).

## Синтаксис

```
arr.toLocaleString();
```

### Параметры

Нет.

## Описание

Элементы массива преобразуются в строки с использованием своих собственных методов `toLocaleString`:

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

## Примеры

### Пример: использование `toLocaleString`

```js
var number = 1337;
var date = new Date();
var myArr = [number, date, "foo"];

var str = myArr.toLocaleString();

console.log(str);
// напечатает '1337,6.12.2013 19:37:35,foo',
// если работает под германской локалью (de-DE) с временной зоной Европа/Берлин
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.toString()")}}
