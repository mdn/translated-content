---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
---

{{jsSidebar("Objects")}}

## Сводка

Глобальное свойство **`Infinity`** является числовым значением, представляющим бесконечность.

{{js_property_attributes(0, 0, 0)}}

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## Описание

`Infinity` является свойством _глобального объекта_, то есть, это переменная в глобальной области видимости.

Начальным значением `Infinity` является {{jsxref("Number.POSITIVE_INFINITY")}}. Значение `Infinity` (положительная бесконечность) больше любого другого числа, включая саму положительную бесконечность. Это значение ведёт себя как математическая бесконечность; например, любое положительное число, умноженное на `Infinity` даёт `Infinity`, а любое число, делённое на `Infinity` даёт 0.

В спецификации ECMAScript 5 `Infinity` является свойством только для чтения (реализована в JavaScript 1.8.5 / Firefox 4).

## Примеры

```
console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
