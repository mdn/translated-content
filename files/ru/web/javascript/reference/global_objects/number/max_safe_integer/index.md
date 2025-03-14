---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Статическое свойство **`Number.MAX_SAFE_INTEGER`** представляет максимальное безопасное целочисленное значение в JavaScript (2<sup>53</sup> – 1).

Для бо́льших целых чисел используется {{jsxref("BigInt")}}.

{{InteractiveExample("JavaScript Demo: Number.MAX_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true
```

## Значение

`9007199254740991` (9,007,199,254,740,991 или приблизительно 9 квадриллионов).

{{js_property_attributes(0, 0, 0)}}

## Описание

[Формат чисел с плавающей запятой двойной точности](https://ru.wikipedia.org/wiki/Число_двойной_точности) имеет только 52 бита для представления [мантиссы](/ru/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), поэтому он может безопасно представлять целые числа в диапазоне от -(2<sup>53</sup> – 1) до 2<sup>53</sup> – 1. «Безопасность» в этом контексте означает способность точно представлять целые числа и правильно их сравнивать. Например, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` будет иметь истинное значение, что математически неверно. Больше информации в {{jsxref("Number.isSafeInteger()")}}.

Поскольку `MAX_SAFE_INTEGER` является статическим свойством объекта {{jsxref("Number")}}, вы всегда должны использовать его как `Number.MAX_SAFE_INTEGER`, а не как свойство числового значения.

## Примеры

### Значение MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Связь между MAX_SAFE_INTEGER и EPSILON

{{jsxref("Number.EPSILON")}} — это 2<sup>-52</sup>, а `MAX_SAFE_INTEGER` — это (2<sup>53</sup> – 1), оба значения являются производными от размера мантиссы, который составляет 53 бита (при этом старший бит всегда равен 1). Их умножение даст значение, очень близкое (но не равное) 2.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Number.MAX_SAFE_INTEGER` в `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
