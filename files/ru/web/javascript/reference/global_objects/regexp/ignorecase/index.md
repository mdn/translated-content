---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
---

{{JSRef}}

## Сводка

Свойство **`ignoreCase`** указывает, использовался ли в определении регулярного выражения флаг `"i"`. Свойство `ignoreCase` является свойством только для чтения и принадлежит экземпляру регулярного выражения.

{{js_property_attributes(0, 0, 0)}}

## Описание

Значение свойства `ignoreCase` имеет тип {{jsxref("Global_Objects/Boolean", "Boolean")}} и содержит `true`, если при определении регулярного выражения использовался флаг `"i"`; в противном случае оно содержит `false`. Флаг `"i"` указывает на то, что регистр символов в строке, с которой сопоставляется регулярное выражение, должен игнорироваться.

Вы не можете напрямую изменить это свойство.

## Примеры

### Пример: использование свойства `ignoreCase`

```js
var regex = new RegExp("foo", "i");

console.log(regex.ignoreCase); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
