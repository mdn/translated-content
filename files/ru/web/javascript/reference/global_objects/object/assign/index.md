---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
---

{{JSRef}}

Метод **`Object.assign()`** используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.

## Синтаксис

```
Object.assign(target, ...sources)
```

### Параметры

- `target`
  - : Целевой объект.
- `sources`
  - : Исходные объекты.

### Возвращаемое значение

Возвращается получившийся целевой объект.

## Описание

Метод `Object.assign()` копирует из исходных объектов в целевой объект только _перечисляемые_ и _собственные_ свойства. Он использует внутренний метод `[[Get]]` на исходных объектах и внутренний метод `[[Set]]` на целевом объекте, так что он также вызывает геттеры и сеттеры. Именно поэтому он _присваивает_ свойства вместо простого копирования или определения новых свойств. Это поведение может сделать метод непригодным для вливания новых свойств в прототип, если вливаемые исходные объекты содержат геттеры. Вместо него для копирования в прототипы определений свойств, включая признак их перечисляемости, следует использовать методы {{jsxref("Object.getOwnPropertyDescriptor()")}} и {{jsxref("Object.defineProperty()")}}.

Копируются свойства типов как {{jsxref("String")}}, так и {{jsxref("Symbol")}}.

В случае возникновения ошибки, например, когда свойство является незаписываемым, возбуждается исключение {{jsxref("TypeError")}}, а целевой объект `target` остаётся неизменным.

Обратите внимание, что метод `Object.assign()` не выкидывает исключения, если в качестве исходных значений выступают {{jsxref("null")}} или {{jsxref("undefined")}}.

## Примеры

### Пример: клонирование объекта

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Пример: слияние объектов

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.
```

### Пример: копирование символьных свойств

```js
var o1 = { a: 1 };
var o2 = { [Symbol("foo")]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 }
```

### Пример: наследуемые и неперечисляемые свойства не копируются

```js
var obj = Object.create(
  { foo: 1 },
  {
    // foo является унаследованным свойством.
    bar: {
      value: 2, // bar является неперечисляемым свойством.
    },
    baz: {
      value: 3,
      enumerable: true, // baz является собственным перечисляемым свойством.
    },
  },
);

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Пример: примитивы оборачиваются в объекты

```js
var v1 = "123";
var v2 = true;
var v3 = 10;
var v4 = Symbol("foo");

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
console.log(obj); // { "0": "1", "1": "2", "2": "3" }
```

### Пример: исключения прерывают текущую задачу копирования

```js
var target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo является свойством только-для-чтения

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// При присваивании свойству target.foo выбрасывается исключение

console.log(target.bar); // 2, первый исходный объект успешно скопировался.
console.log(target.foo2); // 3, первое свойство второго исходного объекта успешно скопировалось.
console.log(target.foo); // 1, здесь было выброшено исключение.
console.log(target.foo3); // undefined, метод assign завершился, свойство foo3 не скопировалось.
console.log(target.baz); // undefined, третий исходный объект так же не скопировался.
```

### Пример: копирование методов доступа

```js
var obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, значением свойства copy.bar является значение, возвращаемое геттером obj.bar.

// Такой вариант функции присваивания позволяет копировать методы доступа.
function myAssign(target, ...sources) {
  sources.forEach((source) => {
    Object.defineProperties(
      target,
      Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {}),
    );
  });
  return target;
}

var copy = myAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## Полифил

Этот полифил не поддерживает символьные свойства, поскольку ES5 всё равно не поддерживает символы:

```js
if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (target, firstSource) {
      "use strict";
      if (target === undefined || target === null) {
        throw new TypeError("Cannot convert first argument to object");
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));
        for (
          var nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex++
        ) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    },
  });
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.defineProperties()")}}
