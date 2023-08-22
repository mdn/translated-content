---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`Object.getPrototypeOf()`** возвращает прототип (то есть, внутреннее свойство `[[Prototype]]`) указанного объекта.

## Синтаксис

```
Object.getPrototypeOf(obj)
```

### Параметры

- `obj`
  - : Объект, чей прототип будет возвращён.

## Примеры

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

```js
> Object.getPrototypeOf('foo')
TypeError: "foo" is not an object  // код ES5
> Object.getPrototypeOf('foo')
String.prototype                   // код ES6
```

## Примечания

В ES5, если параметр `obj` не является объектом, будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6, параметр будет приведён к объекту {{jsxref("Global_Objects/Object", "Object")}}.

```js
> Object.getPrototypeOf('foo')
TypeError: "foo" is not an object  // код ES5
> Object.getPrototypeOf('foo')
String.prototype                   // код ES6
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

### Примечания по Opera

Хотя старые версии Opera и не поддерживают метод `Object.getPrototypeOf()`, Opera поддерживает нестандартное свойство [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), начиная с версии Opera 10.50.

## Смотрите также

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}} {{experimental_inline}}
- [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- Запись в блоге Джона Резига о [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/)
