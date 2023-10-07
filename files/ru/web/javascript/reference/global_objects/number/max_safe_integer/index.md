---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Константа **`Number.MAX_SAFE_INTEGER`** представляет максимальное безопасное целочисленное значение в JavaScript (`253 - 1`).

{{js_property_attributes(0, 0, 0)}}

## Описание

Константа `MAX_SAFE_INTEGER` имеет значение `9007199254740991`. Смысл этого числа в том, что в JavaScript используется [формат чисел с плавающей запятой двойной точности](https://ru.wikipedia.org/wiki/Число_двойной_точности), как определено в стандарте [IEEE 754](https://ru.wikipedia.org/wiki/IEEE_754), а он может безопасно представлять числа только в диапазоне от `-(253 - 1)` до `253 - 1`.

Поскольку `MAX_SAFE_INTEGER` является статическим свойством объекта {{jsxref("Global_Objects/Number", "Number")}}, вы всегда должны использовать его как `Number.MAX_SAFE_INTEGER`, а не как свойство созданного вами объекта {{jsxref("Global_Objects/Number", "Number")}}.

## Примеры

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
Math.pow(2, 53) - 1; // 9007199254740991
```

## Полифил

```js
if (!Number.MAX_SAFE_INTEGER) {
  Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
