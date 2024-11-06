---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что произошло не так?

Обычно, объект расширяемый и к нему можно добавить новые свойства. Однако в этой ситуации {{jsxref("Object.preventExtensions()")}} сделал объект нерасширяемым, так что у него не может появиться других свойств, отличных от тех, которые были объявлены когда объект стал нерасширяемым.

## Примеры

В строгом режиме при попытке добавить новые свойства в нерасширяемый объект возникает ошибка TypeError. В нестрогом режиме добавление свойства "x" игнорируется.

```js example-bad
"use strict";

var obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": "obj" is not extensible
```

В обеих, строгом и нестрогом режимах, вызов {{jsxref("Object.defineProperty()")}} вызывает исключение при добавлении нового свойства в нерасширяемый объект.

```js example-bad
var obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": "obj" is not extensible
```

Чтобы исправить эту ошибку, необходимо удалить вызов {{jsxref("Object.preventExtensions()")}} полностью или переместить его в положение, чтобы сначала свойство добавлялось, а потом объект помечался как нерасширяемый. Конечно вы также можете удалить свойство, которое пытались добавить, если оно вам не нужно.

```js example-good
"use strict";

var obj = {};
obj.x = "foo"; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## Смотрите также

- {{jsxref("Object.preventExtensions()")}}
