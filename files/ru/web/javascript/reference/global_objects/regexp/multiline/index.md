---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
---

{{JSRef}}

## Сводка

Свойство **`multiline`** указывает, использовался ли в определении регулярного выражения флаг `"m"`. Свойство `multiline` является свойством только для чтения и принадлежит экземпляру регулярного выражения.

{{js_property_attributes(0, 0, 0)}}

## Описание

Значение свойства `multiline` имеет тип {{jsxref("Global_Objects/Boolean", "Boolean")}} и содержит `true`, если при определении регулярного выражения использовался флаг `"m"`; в противном случае оно содержит `false`. Флаг `"m"` указывает на то, что многострочная входная строка должна рассматриваться в виде нескольких строк. Например, если используется флаг `"m"`, специальные символы `"^"` и `"$"` меняют своё поведение: с установленным флагом они сопоставляются в началом / концом каждой строки в многострочной строке, а не с началом / концом всей многострочной строки.

Вы не можете напрямую изменить это свойство.

## Примеры

### Пример: использование свойства `multiline`

```js
var regex = new RegExp("foo", "m");

console.log(regex.multiline); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
