---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}{{SeeCompatTable}}

Метод **`padStart()`** заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.

## Синтаксис

```
str.padStart(targetLength [, padString])
```

### Параметры

- `targetLength`
  - : Длина итоговой строки после дополнения текущей строки. Если значение меньше, чем длина текущей строки, текущая строка будет возвращена без изменений.
- `padString` {{optional_inline}}
  - : Строка для заполнения текущей строки. Если эта строка слишком длинная для заданной длины, она будет обрезана. Значение по умолчанию - " " (U+0020).

### Возвращаемое значение

{{jsxref("String")}} заданной длины с заполнением строкой, выполненное в начале.

## Примеры

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

## Полифил

Запуск данного кода перед любым другим кодом будет создавать `String.prototype.padStart()`, если он нативно не поддерживается.

```js
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(padString || " ");
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.padEnd()")}}
