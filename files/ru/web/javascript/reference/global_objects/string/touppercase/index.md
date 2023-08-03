---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`toUpperCase()`** возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр.

## Синтаксис

```
str.toUpperCase()
```

## Описание

Метод `toUpperCase()` возвращает значение строки, преобразованное в верхний регистр. Метод `toUpperCase()` не изменяет значение самой строки.

## Примеры

### Пример: использование метода `toUpperCase()`

```js
console.log("алфавит".toUpperCase()); // 'АЛФАВИТ'
```

## Спецификации

| Спецификация                                                                             | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                  | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.18', 'String.prototype.toUpperCase')}}                  | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
