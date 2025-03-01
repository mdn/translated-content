---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Метод **`padEnd()`** значений {{jsxref("String")}} заполняет строку указанной строкой (повторяя её необходимое количество раз) так, чтобы результирующая строка достигла указанной длины.
Заполнение происходит с конца исходной строки.

{{InteractiveExample("JavaScript Demo: String.padEnd()")}}

```js interactive-example
const str1 = "Блины со сметаной";

console.log(str1.padEnd(25, "."));
// Результат: "Блины со сметаной........"

const str2 = "200";

console.log(str2.padEnd(5));
// Результат: "200  "
```

## Синтаксис

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

Если `padString` слишком длинный, чтобы уместиться в `targetLength`, он будет усечен: для языков с письмом слева направо будет применена самая левая часть, а для языков с письмом справа налево — самая правая. Значение по умолчанию для этого параметра — " "

### Параметры

- `targetLength`
  - : Длина результирующей строки после заполнения. Если значение меньше или равно `str.length`, текущая строка будет возвращена юез изменений.
- `padString` {{optional_inline}}
  - : Строка, которая будет использована для заполнения исходной строки `str`. Если `padString` слишком длинная, чтобы оставаться в пределах `targetLength`, то она будет обрезана: для языков с письмом слева направо будет применена самая левая часть, а для языков с письмом справа налево — самая правая. Значение по умолчанию для этого параметра — " " (`U+0020`).

### Возвращаемое значение

{{jsxref("String")}} указанной длины `targetLength` с заполнением `padString`, применённым к концу исходной строки `str`.

## Примеры

### Использование padEnd

```js
"мир".padEnd(10); // "мир       "
"мир".padEnd(10, "наш"); // "мирнашнашн"
"мир".padEnd(6, "123456"); // "мир123"
"мир".padEnd(1); // "мир"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `String.prototype.padEnd` в `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padStart()")}}
