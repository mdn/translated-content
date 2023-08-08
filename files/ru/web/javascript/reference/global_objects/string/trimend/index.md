---
title: String.prototype.trimRight()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
---

{{JSRef("Global_Objects", "String")}} {{non-standard_header}}

## Сводка

Метод **`trimRight()`** удаляет пробельные символы с правого конца строки.

## Синтаксис

```
str.trimRight()
```

## Описание

Метод `trimRight()` возвращает строку с вырезанными пробельными символами с её правого конца. Метод `trimRight()` не изменяет значение самой строки.

## Примеры

### Пример: использование метода `trimRight()`

Следующий пример покажет строку `' foo'`:

```js
var str = "   foo  ";

console.log(str.length); // 8

str = str.trimRight();
console.log(str.length); // 5
console.log(str); // '   foo'
```

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.8.1.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimLeft()")}} {{non-standard_inline}}
