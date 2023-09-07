---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`toString()`** возвращает строку, представляющую указанный объект.

## Синтаксис

```
str.toString()
```

## Описание

Объект {{jsxref("Global_Objects/String", "String")}} переопределяет метод `toString()`, унаследованный из объекта {{jsxref("Global_Objects/Object", "Object")}}; он не наследует метод {{jsxref("Object.prototype.toString()")}}. Для объектов {{jsxref("Global_Objects/String", "String")}} метод `toString()` возвращает строку, представляющую объект и делает тоже самое, что и метод {{jsxref("String.prototype.valueOf()")}}.

## Примеры

### Пример: использование метода `toString()`

В следующем примере выводится строковое значение объекта {{jsxref("Global_Objects/String", "String")}}:

```js
var x = new String("Привет, мир");

console.log(x.toString()); // Отобразит 'Привет, мир'
```

## Спецификации

| Спецификация                                                                       | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                            | Стандарт           | Изначальное определение. Реализована в JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.5.4.2', 'String.prototype.toString')}}                | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-string.prototype.tostring', 'String.prototype.toString')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
