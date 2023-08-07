---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Метод **`Number.isNaN()`** определяет, является ли переданное значение {{jsxref("Global_Objects/NaN", "NaN")}}. Это более надёжная версия оригинальной глобальной функции {{jsxref("Global_Objects/isNaN", "isNaN()")}}.

## Синтаксис

```
Number.isNaN(value)
```

### Параметры

- `value`
  - : Значение, проверяемое на {{jsxref("Global_Objects/NaN", "NaN")}}.

## Описание

Поскольку оба оператора проверки на равенство, {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} и {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}, вычисляются в `false` при проверке, что {{jsxref("Global_Objects/NaN", "NaN")}} _и есть_ {{jsxref("Global_Objects/NaN", "NaN")}}, появляется необходимость в функции `Number.isNaN()`. Эта ситуация отличается от всех других возможных сравнений в JavaScript.

В отличие от глобальной функции {{jsxref("Global_Objects/isNaN", "isNaN()")}}, `Number.isNaN()` не имеет проблемы принудительного преобразования параметра в число. Это значит, что в него безопасно передавать значения, которые обычно превращаются в {{jsxref("Global_Objects/NaN", "NaN")}}, но на самом деле {{jsxref("Global_Objects/NaN", "NaN")}} не являются. Также это значит, что метод возвращает `true` только для числовых значений, имеющих значение {{jsxref("Global_Objects/NaN", "NaN")}}.

## Примеры

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// При использовании глобальной функции isNaN() это всё будет true
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// А это всё в любом случае будет false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

## Полифил

```js
Number.isNaN =
  Number.isNaN ||
  function (value) {
    return typeof value === "number" && isNaN(value);
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Number", "Number")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
