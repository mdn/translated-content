---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`toLowerCase()`** возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.

## Синтаксис

```
str.toLowerCase()
```

## Описание

Метод `toLowerCase()` возвращает значение строки, преобразованное в нижний регистр. Метод `toLowerCase()` не изменяет значение самой строки.

## Примеры

### Пример: использование метода `toLowerCase()`

```js
console.log("АЛФАВИТ".toLowerCase()); // 'алфавит'
```

## Спецификации

| Спецификация                                                                             | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                  | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.16', 'String.prototype.toLowerCase')}}                  | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
