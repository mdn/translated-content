---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
---

{{JSRef}}Известный символ **`Symbol.toStringTag`** - это строковое значение свойства, которое используется при создании строки описания объекта по умолчанию. Доступ к нему осуществляется через {{jsxref("Object.prototype.toString()")}} метод.{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}{{js_property_attributes(0,0,0)}}

## Описание

Многие Javascript типы имеют теги по умолчанию:

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// ... and more
```

Другие имеют встроенный символ `toStringTag`:

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

При создании собственного класса JavaScript по умолчанию использует тег "Object":

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

С помощью `toStringTag` можно установить свой собственный тег:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
