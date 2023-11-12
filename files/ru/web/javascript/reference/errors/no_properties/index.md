---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
```

## Тип ошибки

{{jsxref("TypeError")}}.

## Что пошло не так?

У {{jsxref("null")}} и {{jsxref("undefined")}} нет свойств, к которым можно было бы обратиться.

## Примеры

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## Смотрите также

- {{jsxref("null")}}
- {{jsxref("undefined")}}
