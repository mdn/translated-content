---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
---

{{JSRef}}

Функция **`Math.trunc()`** возвращает целую часть числа путём удаления всех дробных знаков.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Синтаксис

```
Math.trunc(x)
```

### Параметры

- `x`
  - : Число.

### Возвращаемое значение

- `x`
  - : Целая часть данного числа.

## Описание

В отличие от других трёх методов объекта `Math` — {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} и {{jsxref("Math.round()")}} — метод `Math.trunc()` работает очень просто. Отбрасывается запятая и все цифры после неё, не обращая внимания на знак аргумента.

Аргумент, переданный в этот метод, будет неявно преобразован в число.

Поскольку `trunc()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.trunc()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` ( `Math` не является конструктором).

## Примеры

### Использование `Math.trunc()`

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

## Полифил

```js
if (!Math.trunc) {
  Math.trunc = function (v) {
    v = +v;
    if (!isFinite(v)) return v;

    return v - (v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);

    // returns:
    //  0        ->  0
    // -0        -> -0
    //  0.2      ->  0
    // -0.2      -> -0
    //  0.7      ->  0
    // -0.7      -> -0
    //  Infinity ->  Infinity
    // -Infinity -> -Infinity
    //  NaN      ->  NaN
    //  null     ->  0
  };
}
```

Либо:

```js
if (!Math.trunc) {
  Math.trunc = function (v) {
    v = +v;
    return v - (v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
  };
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
