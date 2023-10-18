---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.fround()`** возвращает ближайшее число с плавающей запятой [одинарной точности](https://ru.wikipedia.org/wiki/Число_одинарной_точности), представляющее указанное число.

## Синтаксис

```
Math.fround(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `fround()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.fround()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.fround()`

```js
Math.fround(0); // 0
Math.fround(1); // 1
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.5); // 1.5
Math.fround(NaN); // NaN
```

## Полифил

Этот метод может эмулироваться следующим образом, при условии, что среда выполнения поддерживает объект {{jsxref("Float32Array")}}:

```js
Math.fround =
  Math.fround ||
  function (x) {
    return new Float32Array([x])[0];
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.round()")}}
