---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef}}

## Сводка

Метод **`Number.isNaN()`** определяет, является ли переданное значение {{jsxref("NaN")}}. Это более надёжная версия оригинальной глобальной функции {{jsxref("isNaN", "isNaN()")}}.

## Синтаксис

```
Number.isNaN(value)
```

### Параметры

- `value`
  - : Значение, проверяемое на {{jsxref("NaN")}}.

## Описание

Поскольку оба оператора проверки на равенство, {{jsxref("Operators", "==", "#Equality")}} и {{jsxref("Operators", "===", "#Identity")}}, вычисляются в `false` при проверке, что {{jsxref("NaN")}} _и есть_ {{jsxref("NaN")}}, появляется необходимость в функции `Number.isNaN()`. Эта ситуация отличается от всех других возможных сравнений в JavaScript.

В отличие от глобальной функции {{jsxref("isNaN", "isNaN()")}}, `Number.isNaN()` не имеет проблемы принудительного преобразования параметра в число. Это значит, что в него безопасно передавать значения, которые обычно превращаются в {{jsxref("NaN")}}, но на самом деле {{jsxref("NaN")}} не являются. Также это значит, что метод возвращает `true` только для числовых значений, имеющих значение {{jsxref("NaN")}}.

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

- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}
