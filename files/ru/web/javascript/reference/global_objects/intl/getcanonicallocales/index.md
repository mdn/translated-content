---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
---

{{JSRef}}

Метод **`Intl.getCanonicalLocales()`** возвращает массив, содержащий канонические коды языков. Повторяющиеся значения будут отброшены и элементы будут проверены на соответствие структуры языковых тегов.

{{InteractiveExample("JavaScript Demo: Intl.GetCanonicalLocales")}}

```js interactive-example
console.log(Intl.getCanonicalLocales("EN-US"));
// Expected output: Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// Expected output: Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // Expected output (Firefox/Safari): RangeError: invalid language tag: "EN_US"
  // Expected output (Chrome): RangeError: Incorrect locale information provided
}
```

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
