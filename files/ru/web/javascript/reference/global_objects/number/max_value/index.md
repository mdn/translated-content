---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---

{{JSRef}}

## Сводка

Свойство **`Number.MAX_VALUE`** представляет максимальное числовое значение, представимое в JavaScript.

{{js_property_attributes(0, 0, 0)}}

## Описание

Свойство `MAX_VALUE` имеет значение, приблизительно равное `1.79E+308`. Значения, большие `MAX_VALUE` представляются как «бесконечность».

Поскольку `MAX_VALUE` является статическим свойством объекта {{jsxref("Global_Objects/Number", "Number")}}, вы всегда должны использовать его как `Number.MAX_VALUE`, а не как свойство созданного вами объекта {{jsxref("Global_Objects/Number", "Number")}}.

## Примеры

### Пример: использование `MAX_VALUE`

В следующем примере кода производится умножение двух значений. Если результат меньше или равен `MAX_VALUE`, вызывается функция `func1`; в противном случае вызывается функция `func2`.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.MIN_VALUE")}}
