---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.clz32()`** возвращает количество ведущих нулевых битов в 32-битном двоичном представлении числа.

## Синтаксис

```
Math.clz32(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Название `clz32` является сокращением для более длинного `CountLeadingZeroes32` (`ПосчтитатьВедущиеНули32`).

Если значение `x` не является числом, оно будет сначала преобразовано в число, а потом в 32-битное беззнаковое целое число.

Если преобразованное 32-битное беззнаковое целое число равно `0`, метод вернёт `32`, поскольку все биты в числе равны `0`.

Этот метод особенно полезен для систем, которые компилируются в JS, например, для [Emscripten](/ru/docs/Emscripten).

## Примеры

### Пример: использование метода `Math.clz32()`

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

[NaN, Infinity, -Infinity, 0, -0, null, undefined, "foo", {}, []].filter(
  function (n) {
    return Math.clz32(n) !== 32;
  },
); // []

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

## Полифил

```js
Math.clz32 =
  Math.clz32 ||
  function (value) {
    value = Number(value) >>> 0;
    return value !== 0
      ? 31 - Math.floor(Math.log(value + 0.5) / Math.log(2))
      : 32;
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Math", "Math")}}
