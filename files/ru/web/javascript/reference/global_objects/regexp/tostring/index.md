---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef("Global_Objects", "RegExp")}}

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

| Спецификация                                                                       | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 3-е издание.                                                            | Стандарт           | Изначальное определение. Реализована в JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.9.5.2', 'RegExp.prototype.toString')}}                | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-regexp.prototype.tostring', 'RegExp.prototype.toString')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
