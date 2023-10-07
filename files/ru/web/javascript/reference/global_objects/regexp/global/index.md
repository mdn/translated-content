---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
---

{{JSRef("Global_Objects", "RegExp")}}

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

| Спецификация                                                                       | Статус             | Комментарии                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ECMAScript 3-е издание.                                                            | Стандарт           | Изначальное определение. Реализована в JavaScript 1.2. JavaScript 1.5: свойство `global` является свойством экземпляра {{jsxref("Global_Objects/RegExp", "RegExp")}}, а не самого объекта {{jsxref("Global_Objects/RegExp", "RegExp")}}. |
| {{SpecName('ES5.1', '#sec-15.10.7.2', 'RegExp.prototype.global')}}                 | {{Spec2('ES5.1')}} |                                                                                                                                                                                                                                          |
| {{SpecName('ES6', '#sec-get-regexp.prototype.global', 'RegExp.prototype.global')}} | {{Spec2('ES6')}}   | Свойство `global` теперь является свойством доступа в прототипе объекта, а не собственным свойством данных экземпляра.                                                                                                                   |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
