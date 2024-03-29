---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
---

{{JSRef}}

## Сводка

Метод **`Math.cos()`** возвращает косинус числа.

## Синтаксис

```
Math.cos(x)
```

### Параметры

- `x`
  - : Число радиан.

## Описание

Метод `Math.cos()` возвращает числовое значение от -1 до 1, которое представляет косинус угла.

Поскольку метод `cos()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.cos()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.cos()`

```js
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
