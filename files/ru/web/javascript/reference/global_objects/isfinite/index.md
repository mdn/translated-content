---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
---

{{jsSidebar("Objects")}}

Глобальная **`isFinite()`** функция определяет, является ли переданное значение конечным числом. Если необходимо, параметр сначала преобразуется в число.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## Синтаксис

```
isFinite(testValue)
```

### Параметры

- `testValue`
  - : Аргумент для проверки, является ли он конечным числом.

## Описание

`isFinite` это функция верхнего уровня и она не связана ни с одним объектом.

Вы можете использовать эту функцию там, где требуется определить, является ли аргумент конечным числом. Функция `isFinite` исследует число в своём параметре. Если аргумент является NaN, положительной или отрицательной бесконечностью, метод вернёт `false`; иначе возвращается `true`.

## Примеры

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true

isFinite("0"); // true, но было бы false если использовать
// более надёжный вариант Number.isFinite("0")
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN()")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
