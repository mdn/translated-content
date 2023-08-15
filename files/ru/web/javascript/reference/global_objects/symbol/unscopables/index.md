---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
---

{{JSRef}}

Широко известный символ **`Symbol.unscopables`** используется для указания значения объекта, чьи собственные и наследуемые имена свойств исключаются из привязок связанного объекта оператора [`with`](/ru/docs/Web/JavaScript/Reference/Statements/with).

{{js_property_attributes(0,0,0)}}

## Описание

`Символ @@unscopables` (`Symbol.unscopables`) может быть определён к любому объекту, чтобы исключить имена свойств из-за того, что они отображаются как лексические переменные с привязкой окружения [`with`](/ru/docs/Web/JavaScript/Reference/Statements/with). Обратите внимание: если использовать ["Строгий режим"](/ru/docs/Web/JavaScript/Reference/Strict_mode), оператор `with` будет недоступен и вероятнее всего также не понадобится этот символ.

Если вы зададите свойству значение `true` в объекте `unscopables` сделает его "_unscopable_" и, следовательно, оно не будет задействовано в области лексических переменных. Придав свойству значение `false`, Вы сделаете его `scopable` и, как следствие, оно будет задействовано в области лексических переменных.

## Примеры

Приведённый код отлично работает в ES5 и ниже. Однако в ECMAScript 2015 и более поздних версиях был введён метод {{jsxref("Array.prototype.keys()")}}. Это означает, что внутри окружения `with`, "ключи" будут методом, а не переменной. Вот где теперь встроенные свойства символа {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} вступают в игру и препятствуют тому, чтобы некоторые из методов Array были включены в оператор `with`.

```js
var keys = [];

with (Array.prototype) {
  keys.push("что-то");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

`Вы также можете задать unscopables` для собственных объектов.

```js
var obj = {
  foo: 1,
  bar: 2,
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true,
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
- оператор [`with`](/ru/docs/Web/JavaScript/Reference/Statements/with) (не доступен в [режиме Strict](/ru/docs/Web/JavaScript/Reference/Strict_mode))
