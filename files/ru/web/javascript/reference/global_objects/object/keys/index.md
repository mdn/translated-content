---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`Object.keys()`** возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом {{jsxref("Statements/for...in", "for...in")}} (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).

## Синтаксис

```
Object.keys(obj)
```

### Параметры

- `obj`
  - : Объект, чьи собственные перечисляемые свойства будут возвращены.

## Описание

Метод `Object.keys` возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте. Порядок свойств такой же, как и при ручном перечислении свойств в объекте через цикл.

## Примеры

```js
var arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // консоль: ['0', '1', '2']

// Массивоподобный объект
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // консоль: ['0', '1', '2']

// Массивоподобный объект со случайным порядком ключей
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(an_obj)); // консоль: ['2', '7', '100']

// Свойство getFoo является не перечисляемым свойством
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // консоль: ['foo']
```

Если вы хотите увидеть все свойства, а не только перечисляемые, смотрите метод {{jsxref("Object.getOwnPropertyNames()")}}.

## Примечания

В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES2015 такой аргумент будет приведён к объекту.

```js
> Object.keys('foo')
TypeError: 'foo' is not an object // код ES5

> Object.keys('foo')
['0', '1', '2']                   // код ES2015
```

## Полифил

Для добавления поддержки совместимого метода `Object.keys` в старых окружениях, которые его ещё не реализуют, скопируйте следующий кусок кода:

```js
// From https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"),
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (
        typeof obj !== "object" &&
        (typeof obj !== "function" || obj === null)
      ) {
        throw new TypeError("Object.keys called on non-object");
      }

      var result = [],
        prop,
        i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  })();
}
```

Пожалуйста, обратите внимание, что вышеприведённый код в IE7 (и, может быть, в IE8) включает и не перечисляемые ключи, если объект передаётся из другого окна.

Более простой полифил может быть найден в статье [Javascript - Object.keys Browser Compatibility](http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html) (англ.).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/ru/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
