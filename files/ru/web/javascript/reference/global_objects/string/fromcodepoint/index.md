---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Статический метод **`String.fromCodePoint()`** возвращает строку, созданную из указанной последовательности кодовых точек.

## Синтаксис

```
String.fromCodePoint(num1[, ...[, numN]])
```

### Параметры

- `num1, ..., numN`
  - : Последовательность кодовых точек.

### Выбрасываемые исключения

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : Исключение {{jsxref("Global_Objects/RangeError", "RangeError")}} выбрасывается в случае, если методу предоставлена неверная кодовая точка Юникода (например, "RangeError: NaN is not a valid code point").

## Описание

Поскольку метод `fromCodePoint()` является статическим методом объекта {{jsxref("Global_Objects/String", "String")}}, вы всегда должны использовать его как `String.fromCodePoint()`, а не как метод созданного вами экземпляра {{jsxref("Global_Objects/String", "String")}}.

## Примеры

### Пример: использование метода `fromCodePoint()`

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

```js
// Метод String.fromCharCode() не может вернуть символ по такой большой кодовой точке
// Следующий же метод может вернуть 4-байтный символ так же, как и обычный
// 2-байтный (то есть, он может вернуть один символ, который на самом деле
// имеет длину 2, а не 1!)
console.log(String.fromCodePoint(0x2f804)); // или 194564 в десятичной записи
```

## Полифил

Метод `String.fromCodePoint()` был добавлен к стандарту ECMAScript в 6-й версии и может поддерживаться ещё не во всех браузерах или окружениях. Используйте код ниже в качестве полифила:

```js
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
if (!String.fromCodePoint) {
  (function () {
    var defineProperty = (function () {
      // IE 8 поддерживает метод `Object.defineProperty` только на элементах DOM
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    })();
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function () {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return "";
      }
      var result = "";
      while (++index < length) {
        var codePoint = Number(arguments[index]);
        if (
          !isFinite(codePoint) || // `NaN`, `+Infinity` или `-Infinity`
          codePoint < 0 || // неверная кодовая точка Юникода
          codePoint > 0x10ffff || // неверная кодовая точка Юникода
          floor(codePoint) != codePoint // не целое число
        ) {
          throw RangeError("Invalid code point: " + codePoint);
        }
        if (codePoint <= 0xffff) {
          // кодовая точка Базовой многоязыковой плоскости (БМП)
          codeUnits.push(codePoint);
        } else {
          // Астральная кодовая точка; делим её на суррогатную пару
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          highSurrogate = (codePoint >> 10) + 0xd800;
          lowSurrogate = (codePoint % 0x400) + 0xdc00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 == length || codeUnits.length > MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    if (defineProperty) {
      defineProperty(String, "fromCodePoint", {
        value: fromCodePoint,
        configurable: true,
        writable: true,
      });
    } else {
      String.fromCodePoint = fromCodePoint;
    }
  })();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
