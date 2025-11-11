---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
---

{{JSRef}}

## Сводка

Метод **`toLocaleUpperCase()`** возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр согласно правилам преобразования регистра локали.

## Синтаксис

```
str.toLocaleUpperCase()
```

## Описание

Метод `toLocaleUpperCase()` возвращает значение строки, преобразованное в верхний регистр согласно правилам преобразования регистра локали. Метод `toLocaleUpperCase()` не изменяет значение самой строки. В большинстве случаев он возвращает тот же результат, что и метод {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}, но для некоторых локалей, например, турецкой, в которой правила преобразования регистра отличаются от правил по умолчанию, принятых в Юникоде, он может вернуть другой результат.

## Примеры

### Пример: использование метода `toLocaleUpperCase()`

```js
console.log("алфавит".toLocaleUpperCase()); // 'АЛФАВИТ'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
