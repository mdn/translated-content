---
title: "TypeError: More arguments needed"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: Object.create requires more than 0 arguments
TypeError: Object.setPrototypeOf requires more than 1 argument
TypeError: Object.defineProperties requires more than 0 arguments
```

## Тип ошибки

{{jsxref("TypeError")}}.

## Что пошло не так?

Ошибка в вызове функции. Необходимо передать больше аргументов.

## Примеры

Метод {{jsxref("Object.create()")}} требует хотя бы один аргумент, а {{jsxref("Object.setPrototypeOf()")}} минимум двух:

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
```

Вы можете исправить это, установив {{jsxref("null")}} в качестве прототипа, например:

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## Смотрите также

- [Функции](/ru/docs/Web/JavaScript/Guide/Functions)
