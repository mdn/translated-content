---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
---

{{JSRef}} {{non-standard_header}} {{deprecated_header}}

## Сводка

Метод **`__lookupGetter__()`** возвращает функцию, привязанную к геттеру указанного свойства.

## Синтаксис

```
obj.__lookupGetter__(sprop)
```

### Параметры

- `sprop`
  - : Строка, содержащая имя свойства, чей геттер должен быть возвращён.

## Описание

Если для свойства объекта был определён геттер, то на него невозможно сослаться через это свойство, поскольку оно ссылается на возвращаемое значение геттера. Метод `__lookupGetter__()` может использоваться для получения ссылки на геттер.

Сегодня это возможно сделать стандартным способом через {{jsxref("Object.getOwnPropertyDescriptor()")}} и {{jsxref("Object.getPrototypeOf()")}}.

## Примеры

```js
var obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

// Нестандартный и устаревший способ
obj.__lookupGetter__("foo");
// (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })

// Способ, совместимый со стандартом
Object.getOwnPropertyDescriptor(obj, "foo").get;
// (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })
```

## Спецификации

Не является частью какой-либо спецификации.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`Object.prototype.__lookupSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- оператор {{jsxref("Operators/get", "get")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}} и {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Руководство по JS: определение геттеров и сеттеров](/ru/docs/Web/JavaScript/Guide/Working_with_objects#.d0.9e.d0.bf.d1.80.d0.b5.d0.b4.d0.b5.d0.bb.d0.b5.d0.bd.d0.b8.d0.b5_.d0.b3.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2_.d0.b8_.d1.81.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2)
