---
title: String.prototype.trimLeft()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
---

{{JSRef("Global_Objects", "String")}} {{non-standard_header}}

## Сводка

Метод **`trimLeft()`** удаляет пробельные символы с левого конца строки.

## Синтаксис

```
str.trimLeft()
```

## Описание

Метод `trimLeft()` возвращает строку с вырезанными пробельными символами с её левого конца. Метод `trimLeft()` не изменяет значение самой строки.

## Примеры

### Пример: использование метода `trimLeft()`

Следующий пример покажет строку `'foo '`:

```js
var str = "   foo  ";

console.log(str.length); // 8

str = str.trimLeft();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.8.1.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimRight()")}} {{non-standard_inline}}
