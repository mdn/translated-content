---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef("Global_Objects", "Object")}}

Метод **`Object.preventExtensions()`** предотвращает добавление новых свойств к объекту (то есть, предотвращает расширение этого объекта в будущем).

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## Синтаксис

```js
Object.preventExtensions(obj);
```

### Параметры

- `obj`
  - : Объект, который нужно сделать нерасширяемым.

### Возвращаемое значение

Объект, который делается нерасширяемым.

## Описание

Объект называется расширяемым, если к нему могут быть добавлены новые свойства. `Object.preventExtensions()` помечает объект как нерасширяемый, так что он никогда не будет иметь других свойств, кроме тех, что были у него на момент пометки его нерасширяемым. Обратите внимание, что, в общем случае, свойства нерасширяемого объекта всё ещё могут быть _удалены_. Попытка добавить новые свойства к нерасширяемому объекту потерпит неудачу, либо молча, либо с выбрасыванием исключения {{jsxref("Global_Objects/TypeError", "TypeError")}} (как правило, но не обязательно, это происходит в {{jsxref("Functions_and_function_scope/Strict_mode", "строгом режиме", "", 1)}}).

Метод `Object.preventExtensions()` предотвращает добавление только собственных свойств. Свойства всё ещё могут быть добавлены в прототип объекта. Однако, вызов `Object.preventExtensions()` на объекте также предотвращает расширение его свойства [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}.

Если превратить расширяемый объект в нерасширяемый возможно, в ECMAScript 5 нет никакого способа сделать обратную операцию.

## Примеры

```js
// Object.preventExtensions возвращает объект, который нужно сделать нерасширяемым.
var obj = {};
var obj2 = Object.preventExtensions(obj);
assert(obj === obj2);

// Объекты по умолчанию являются расширяемыми.
var empty = {};
assert(Object.isExtensible(empty) === true);

// ...но это может быть изменено.
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// Object.defineProperty выбрасывает исключение при добавлении нового свойства в нерасширяемый объект.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // выбросит TypeError

// В строгом режиме, попытки добавить новые свойства к нерасширяемому объекту, будут выбрасывать исключение TypeError.
function fail() {
  "use strict";
  nonExtensible.newProperty = "ОШИБКА"; // выбросит TypeError
}
fail();

// РАСШИРЕНИЕ (работает только в движках, поддерживающих свойство __proto__
// (которое является устаревшим. Используйте вместо него метод Object.getPrototypeOf)):
// нерасширяемые объекты неизменны.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: "hai" }; // выбросит TypeError
```

## Примечания

В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет рассматриваться как простой нерасширяемый объект и метод его просто вернёт.

```js
> Object.preventExtensions(1)
TypeError: 1 is not an object // код ES5

> Object.preventExtensions(1)
1                             // код ES6
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
