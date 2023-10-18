---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`Object.isSealed()`** определяет, является ли объект запечатанным.

## Синтаксис

```
Object.isSealed(obj)
```

### Параметры

- `obj`
  - : Проверяемый объект.

## Описание

Возвращает `true`, если объект является запечатанным, иначе возвращает `false`. Объект является запечатанным, если он является не {{jsxref("Object.isExtensible", "расширяемым", "", 1)}} и если все его свойства являются не настраиваемыми и, следовательно, не удаляемыми (но не обязательно не записываемыми).

## Примеры

```js
// По умолчанию объекты не запечатаны.
var empty = {};
assert(Object.isSealed(empty) === false);

// Если вы сделаете пустой объект не расширяемым, он по определению станет запечатанным.
Object.preventExtensions(empty);
assert(Object.isSealed(empty) === true);

// То же самое не верно для не пустого объекта, пока все его свойства не станут не настраиваемыми.
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
assert(Object.isSealed(hasProp) === false);

// Но сделав все его свойства не настраиваемыми, объект становится запечатанным.
Object.defineProperty(hasProp, "fee", { configurable: false });
assert(Object.isSealed(hasProp) === true);

// Простейшим способом запечатать объект, конечно, является использование метода Object.seal.
var sealed = {};
Object.seal(sealed);
assert(Object.isSealed(sealed) === true);

// Запечатанный объект по определению является не расширяемым.
assert(Object.isExtensible(sealed) === false);

// Запечатанный объект может быть замороженным, но это не всегда так.
assert(Object.isFrozen(sealed) === true); // все свойства также являются не записываемыми

var s2 = Object.seal({ p: 3 });
assert(Object.isFrozen(s2) === false); // свойство 'p' всё ещё записываемое

var s3 = Object.seal({
  get p() {
    return 0;
  },
});
assert(Object.isFrozen(s3) === true); // для свойств доступа значение имеет только их настраиваемость
```

## Примечания

В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет рассматриваться, как простой запечатанный объект и метод просто вернёт `true`.

```js
> Object.isSealed(1)
TypeError: 1 is not an object // код ES5

> Object.isSealed(1)
true                          // код ES6
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
