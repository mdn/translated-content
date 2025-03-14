---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
---

{{JSRef}} {{non-standard_header}} {{deprecated_header}}

## Сводка

Метод **`__defineGetter__()`** привязывает свойство объекта к функции, вызываемой каждый раз при поиске этого свойства.

## Синтаксис

```
obj.__defineGetter__(prop, func)
```

### Параметры

- `prop`
  - : Строка, содержащая имя свойства, привязываемого к заданной функции.
- `func`
  - : Функция, привязываемая к поиску указанного свойства.

## Описание

Метод `__defineGetter__()` позволяет определить {{jsxref("Operators/get", "геттер", "", 1)}} на уже существующем объекте.

## Примеры

```js
// Нестандартный и устаревший способ

const o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5

// Способы, совместимые со стандартом

// Использование оператора get
const o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5

// Использование Object.defineProperty()
const o = {};
Object.defineProperty(o, "gimmeFive", {
  get: function () {
    return 5;
  },
});
console.log(o.gimmeFive); // 5
```

## Спецификации

Не является частью какой-либо спецификации.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`Object.prototype.__defineSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- оператор {{jsxref("Operators/get", "get")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [Руководство по JS: определение геттеров и сеттеров](/ru/docs/Web/JavaScript/Guide/Working_with_objects#.d0.9e.d0.bf.d1.80.d0.b5.d0.b4.d0.b5.d0.bb.d0.b5.d0.bd.d0.b8.d0.b5_.d0.b3.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2_.d0.b8_.d1.81.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2)
- [\[Запись в блоге\] Устаревание \_\_defineGetter\_\_ и \_\_defineSetter\_\_](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) (англ.)
- [Firefox bug 647423](https://bugzil.la/647423)
