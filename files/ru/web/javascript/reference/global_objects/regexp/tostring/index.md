---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef}}

## Сводка

Метод **`toString()`** возвращает строковое представление регулярного выражения.

## Синтаксис

```
regexObj.toString()
```

### Параметры

Нет.

## Описание

Объект {{jsxref("Global_Objects/RegExp", "RegExp")}} переопределяет метод `toString()` объекта {{jsxref("Global_Objects/Object", "Object")}}; он не наследует метод {{jsxref("Object.prototype.toString()")}}. Для объектов {{jsxref("Global_Objects/RegExp", "RegExp")}}, метод `toString()` возвращает строковое представление регулярного выражения.

## Примеры

### Пример: использование метода `toString()`

Следующий пример отображает строковое значение объекта {{jsxref("Global_Objects/RegExp", "RegExp")}}:

```js
var myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // отобразит '/a+b+c/'

var foo = new RegExp("bar", "g");
console.log(foo.toString()); // отобразит '/bar/g'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
