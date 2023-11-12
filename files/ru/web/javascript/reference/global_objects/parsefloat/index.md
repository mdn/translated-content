---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
---

{{jsSidebar("Objects")}}

Функция **`parseFloat()`** принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Синтаксис

```
parseFloat(строка)
```

### Параметры

- `строка`
  - : Текстовая строка, из которой вам надо выделить десятичное число.

### Возвращаемое значение

Число с плавающей точкой, полученное из строки. Если первый символ не может быть сконвертирован в число, то возвращается {{jsxref("NaN")}}.

## Описание

`parseFloat` - это высокоуровневая функция, не привязанная ни к одному объекту.

`parseFloat` разбирает текстовую строку, ищет и возвращает из неё десятичное число. Если функция встретит знак, отличный от (+ или -), цифр(0-9), разделительной точки, или показателя степени, она вернёт значение, предшествующее этому знаку, игнорируя все последующие символы . Допускаются позади и впереди идущие пробелы.

Если первый символ нельзя привести к числовому виду, `parseFloat` вернёт `NaN`.

С точки зрения математики, значение `NaN` не является числом в какой-либо системе счисления. Чтобы определить, вернёт ли `parseFloat` значение {{jsxref("NaN")}} в качестве результата, можно вызвать функцию {{jsxref("Global_Objects/isNaN", "isNaN")}}. Если `NaN` участвует в арифметических операциях, результатом также будет `NaN`.

`parseFloat` также может вернуть значение `Infinity` ("бесконечность"). Вы можете использовать функцию {{jsxref("Global_Objects/isFinite", "isFinite")}}, чтобы определить, является ли результат конечным числом (not `Infinity`, `-Infinity`, или `NaN`).

## Примеры

### `parseFloat` возвращает число

Все примеры ниже вернут **3.14**

```
parseFloat(3.14);
parseFloat('3.14');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14какие-нибудь не цифровые знаки');

var foo = Object.create(null);
foo.toString = function () { return "3.14"; };
parseFloat(foo);

var foo = Object.create(null);
foo.valueOf = function () { return "3.14"; };
parseFloat(foo);
```

### `parseFloat` возвращает NaN

Пример ниже вернёт `NaN`

```js
parseFloat("FF2");
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("isNaN", "isNaN()")}}
