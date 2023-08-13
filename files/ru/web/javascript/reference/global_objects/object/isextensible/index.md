---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`Object.isExtensible()`** определяет, является ли объект расширяемым (то есть, можно ли к нему добавлять новые свойства).

## Синтаксис

```
Object.isExtensible(obj)
```

### Параметры

- `obj`
  - : Проверяемый объект.

## Описание

Объекты являются расширяемыми по умолчанию: к ним можно добавлять новые свойства и (в движках, поддерживающих свойство [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)) их можно изменять. Объект может быть помечен, как не изменяемый с помощью методов {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}} или {{jsxref("Object.freeze()")}}.

## Примеры

```js
// Новые объекты являются расширяемыми.
var empty = {};
assert(Object.isExtensible(empty) === true);

// ...но это может быть изменено.
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// Запечатанные объекты по определению не расширяемы.
var sealed = Object.seal({});
assert(Object.isExtensible(sealed) === false);

// Замороженные объекты также по определению не расширяемы.
var frozen = Object.freeze({});
assert(Object.isExtensible(frozen) === false);
```

## Примечания

В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет рассматриваться, как простой не расширяемый объект и метод просто вернёт `false`.

```js
> Object.isExtensible(1)
TypeError: 1 is not an object // код ES5

> Object.isExtensible(1)
false                         // код ES6
```

## Спецификации

| Спецификация                                                           | Статус             | Комментарии                                              |
| ---------------------------------------------------------------------- | ------------------ | -------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.13', 'Object.isExtensible')}}         | {{Spec2('ES5.1')}} | Изначальное определение. Реализована в JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.isextensible', 'Object.isExtensible')}} | {{Spec2('ES6')}}   |                                                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
