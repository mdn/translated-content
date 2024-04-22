---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
---

{{JSRef}}

Метод **`Intl.getCanonicalLocales()`** возвращает массив, содержащий канонические коды языков. Повторяющиеся значения будут отброшены и элементы будут проверены на соответствие структуры языковых тегов.

{{EmbedInteractiveExample("pages/js/intl-getcanonicallocales.html")}}

## Синтаксис

```
Intl.getCanonicalLocales(locales)
```

### Параметры

- `locales`
  - : Список {{jsxref("String")}} значений, из которых нужно получить канонические коды языков.

### Возвращаемое значение

Массив, содержащий канонические коды языков

## Примеры

```js
Intl.getCanonicalLocales("RU-RU"); // ["ru-RU"]
Intl.getCanonicalLocales(["RU-RU", "Fr"]); // ["ru-RU", "fr"]

Intl.getCanonicalLocales("RU_RU");
// RangeError:'EN_US' is not a structurally valid language tag
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
