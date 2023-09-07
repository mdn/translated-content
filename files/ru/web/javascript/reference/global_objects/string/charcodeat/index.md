---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`charCodeAt()`** возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).

## Синтаксис

```
str.charCodeAt(index)
```

### Параметры

- `index`
  - : Целое число больше, либо равное 0 и меньше длины строки; если параметр не является числом, он устанавливается в 0.

## Описание

Кодовые точки Юникода простираются в диапазоне от 0 до 1114111 (0x10FFFF). Первые 128 кодовых точек Юникода напрямую отображаются в кодировку ASCII. Информацию по Юникоду смотрите в [Руководстве по JavaScript](/ru/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode).

Обратите внимание, что метод `charCodeAt()` всегда возвращает значение, меньшее 65536. Так происходит потому, что большие кодовые точки представляются парой (меньших значений) «суррогатных» псевдо-символов, которые используются для составления настоящего символа. Поэтому для того, чтобы получить полный символ для значений символов от 65536 и выше, необходимо получить не только значение `charCodeAt(i)`, но также значение `charCodeAt(i + 1)` (как если бы строка состояла из двух букв). Смотрите второй и третий примеры ниже.

Метод `charCodeAt()` возвращает {{jsxref("Global_Objects/NaN", "NaN")}}, если указанный индекс меньше нуля или больше длины строки.

Обратная совместимость: в более старых версиях (например, в JavaScript 1.2) метод `charCodeAt()` возвращал число из кодировки ISO-Latin-1 по указанному индексу. Диапазон символов в кодировке ISO-Latin-1 простирается от 0 до 255. Первые 127 чисел напрямую отображаются в кодировку ASCII.

## Примеры

### Пример: использование метода `charCodeAt()`

В следующем примере возвращается число 65, значение Unicode для латинского символа «A».

```js
"ABC".charCodeAt(0); // вернёт 65
```

### Пример: исправление метода `charCodeAt()` для обработки символов не в Базовой многоязыковой плоскости, если их предыдущее присутствие в строке неизвестно

Эта версия может использоваться в циклах for, даже когда неизвестно, были ли до указанной позиции символы из не-БМП.

```js
function fixedCharCodeAt(str, idx) {
  // например, fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // например, fixedCharCodeAt('\uD800\uDC00', 1); // false
  idx = idx || 0;
  var code = str.charCodeAt(idx);
  var hi, low;

  // Старшая часть суррогатной пары (последнее число можно изменить на 0xDB7F,
  // чтобы трактовать старшую часть суррогатной пары в частной плоскости как
  // одиночный символ)
  if (0xd800 <= code && code <= 0xdbff) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw "Старшая часть суррогатной пары без следующей младшей в fixedCharCodeAt()";
    }
    return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
  }
  if (0xdc00 <= code && code <= 0xdfff) {
    // Младшая часть суррогатной пары
    // Мы возвращаем false, чтобы цикл пропустил эту итерацию,
    // поскольку суррогатная пара
    // уже обработана в предыдущей итерации
    return false;
    // hi = str.charCodeAt(idx - 1);
    // low = code;
    // return ((hi - 0xD800) * 0x400) +
    //   (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

### Пример: исправление метода `charCodeAt()` для обработки символов не в Базовой многоязыковой плоскости, если их предыдущее присутствие в строке известно

```js
function knownCharCodeAt(str, idx) {
  str += "";
  var code,
    end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while (surrogatePairs.exec(str) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return NaN;
  }

  code = str.charCodeAt(idx);

  var hi, low;
  if (0xd800 <= code && code <= 0xdbff) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    // Перешагиваем через один, поскольку один «символ» является частью суррогатной пары
    return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
  }
  return code;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
