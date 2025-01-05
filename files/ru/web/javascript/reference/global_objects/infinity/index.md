---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{jsSidebar("Objects")}}

Глобальное свойство **`Infinity`** является числовым значением, представляющим бесконечность.

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## Значение

Такое же числовое значение, как у {{jsxref("Number.POSITIVE_INFINITY")}}.

{{js_property_attributes(0, 0, 0)}}

## Описание

`Infinity` является свойством _глобального объекта_, то есть, это переменная в глобальной области видимости.

Значение `Infinity` (положительная бесконечность) больше, чем любое другое число.

Это значение ведет себя несколько иначе, чем математическая бесконечность, смотрите подробности в {{jsxref("Number.POSITIVE_INFINITY")}}.

## Примеры

### Использование Infinity

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
