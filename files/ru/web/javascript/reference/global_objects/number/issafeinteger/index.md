---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Статический метод **`Number.isSafeInteger()`** определяет, является ли переданное значение _безопасным целым числом_.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

## Синтаксис

```js-nolint
Number.isSafeInteger(testValue)
```

### Параметры

- `testValue`
  - : Проверяемое значение.

### Возвращаемое значение

Логическое значение `true` если переданное значение является безопасным целым числом, в противном случае `false`.

## Описание

К безопасным целым числам относятся все целые числа от -(2<sup>53</sup> – 1) до 2<sup>53</sup> – 1 включительно (±9 007 199 254 740 991). Безопасное целое число — это целое число, которое:

- может быть точно представлено как число двойной точности по стандарту IEEE-754, и
- это представление не может быть результатом округления любого другого целого числа для соответствия представлению по стандарту IEEE-754.

Например, 2<sup>53</sup> - 1 является безопасным целым числом: оно может быть точно представлено, и никакое другое целое число не округляется до него ни при каком режиме округления IEEE-754. А вот 2<sup>53</sup> _не_ является безопасным целым числом: оно может быть точно представлено в IEEE-754, но целое число 2<sup>53</sup> + 1 не может быть представлено в IEEE-754, а вместо этого округляется до 2<sup>53</sup> при округлении до ближайшего и до нуля.

Обработка значений больше или меньше \~9 квадриллионов с полной точностью требует использования библиотек, поддерживающих [арифметику произвольной точности](https://ru.wikipedia.org/wiki/Длинная_арифметика). Дополнительную информацию о представлениях чисел с плавающей точкой смотрите в [The Floating-Point Guide](https://floating-point-gui.de/) (англ.).

Для бо́льших целых чисел рассмотрите возможность использования типа {{jsxref("BigInt")}}.

## Примеры

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Number.isSafeInteger` в `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
