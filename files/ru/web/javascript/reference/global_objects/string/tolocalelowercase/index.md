---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`toLocaleLowerCase()`** возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр согласно правилам преобразования регистра локали.

## Синтаксис

```
str.toLocaleLowerCase()
```

## Описание

Метод `toLocaleLowerCase()` возвращает значение строки, преобразованное в нижний регистр согласно правилам преобразования регистра локали. Метод `toLocaleLowerCase()` не изменяет значение самой строки. В большинстве случаев он возвращает тот же результат, что и метод {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}, но для некоторых локалей, например, турецкой, в которой правила преобразования регистра отличаются от правил по умолчанию, принятых в Юникоде, он может вернуть другой результат.

## Примеры

### Пример: использование метода `toLocaleLowerCase()`

```js
console.log("АЛФАВИТ".toLocaleLowerCase()); // 'алфавит'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
