---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
---

{{JSRef}}

## Сводка

Свойство **`global`** указывает, использовался ли в определении регулярного выражения флаг `"g"`. Свойство `global` является свойством только для чтения и принадлежит экземпляру регулярного выражения.

{{js_property_attributes(0, 0, 0)}}

## Описание

Значение свойства `global` имеет тип {{jsxref("Global_Objects/Boolean", "Boolean")}} и содержит `true`, если при определении регулярного выражения использовался флаг `"g"`; в противном случае оно содержит `false`. Флаг `"g"` указывает на то, что регулярное выражение должно проверять все возможные сопоставления в строке.

Вы не можете напрямую изменить это свойство.

## Примеры

### Пример: использование свойства `global`

```js
var regex = new RegExp("foo", "g");

console.log(regex.global); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
