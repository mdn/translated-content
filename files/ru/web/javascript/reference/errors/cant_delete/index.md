---
title: 'TypeError: property "x" is non-configurable and can''t be deleted(свойство "x" не настраивается и не может быть удалено)'
slug: Web/JavaScript/Reference/Errors/Cant_delete
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: вызов delete на 'x' не разрешён в строгом режиме (Edge)
TypeError: свойство "x" не настраивается и не может быть удалено. (браузер Firefox)
TypeError: не удаётся удалить свойство "x" из #<Object> (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}} in strict mode only.

## Что пошло не так?

Была сделана попытка удалить свойство, но это свойство не изменяется. Настраиваемый атрибут определяет, можно ли удалить свойство из объекта и можно ли изменить его атрибуты (отличные от доступных для записи).

Эта ошибка возникает только в коде строгого режима. В нестрогом коде операция возвращает false.

## Примеры

Не настраиваемые свойства не очень распространены, но их можно создать с помощью {{jsxref("Object.defineProperty()")}} или {{jsxref("Object.freeze()")}}.

```js example-bad
"use strict";
var obj = Object.freeze({ name: "Elsa", score: 157 });
delete obj.score; // TypeError

("use strict");
var obj = {};
Object.defineProperty(obj, "foo", { value: 2, configurable: false });
delete obj.foo; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop(); // TypeError
```

В JavaScript также встроено несколько настраиваемых свойств. Возможно, вы пытались удалить математическую константу.

```js example-bad
"use strict";
delete Math.PI; // TypeError
```

## Смотрите также

- [delete operator](/ru/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
