---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`codePointAt()`** возвращает неотрицательное целое число, являющееся закодированным в UTF-16 значением кодовой точки.

## Синтаксис

```
str.codePointAt(pos)
```

### Параметры

- `pos`
  - : Позиция элемента в строке, чья кодовая точка возвращается функцией.

## Описание

Если на указанной позиции нет элементов, будет возвращено значение {{jsxref("Global_Objects/undefined", "undefined")}}. Если суррогатная пара UTF-16 не начинается в позиции `pos`, будет возвращено кодовое значение в позиции `pos`.

## Примеры

### Пример: использование метода `codePointAt()`

```js
"ABC".codePointAt(1); // 66
"\uD800\uDC00".codePointAt(0); // 65536

"XYZ".codePointAt(42); // undefined
```

## Полифил

Следующий полифил расширяет прототип строки определённой в ECMAScript 6 функцией `codePointAt()`, если браузер не имеет её родной поддержки.

```js
/*! http://mths.be/codepointat v0.1.0 от @mathias */
if (!String.prototype.codePointAt) {
  (function () {
    "use strict"; // необходимо для поддержки методов `apply`/`call` с `undefined`/`null`
    var codePointAt = function (position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) {
        // лучше, чем `isNaN`
        index = 0;
      }
      // Проверяем выход индекса за границы строки
      if (index < 0 || index >= size) {
        return undefined;
      }
      // Получаем первое кодовое значение
      var first = string.charCodeAt(index);
      var second;
      if (
        // проверяем, не начинает ли оно суррогатную пару
        first >= 0xd800 &&
        first <= 0xdbff && // старшая часть суррогатной пары
        size > index + 1 // следующее кодовое значение
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          // младшая часть суррогатной пары
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      return first;
    };
    if (Object.defineProperty) {
      Object.defineProperty(String.prototype, "codePointAt", {
        value: codePointAt,
        configurable: true,
        writable: true,
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  })();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
