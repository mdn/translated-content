---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
---

{{JSRef}} {{non-standard_header}} {{deprecated_header}}

## Сводка

Метод **`__defineSetter__()`** привязывает свойство объекта к функции, вызываемой каждый раз при попытке установить значение этого свойства.

## Синтаксис

```
obj.__defineSetter__(prop, fun)
```

### Параметры

- `prop`
  - : Строка, содержащая имя свойства, привязываемого к заданной функции.
- `fun`
  - : Функция, вызываемая при попытке установить значение указанному свойству. Эта функция имеет вид:

    ```
    function(val) { . . . }
    ```

    - `val`
      - : Псевдоним переменной, содержащей значение, которое пытаются присвоить свойству `prop`.

## Описание

Метод `__defineSetter__()` позволяет определять {{jsxref("Operators/set", "сеттер", "", 1)}} на уже существующем объекте.

## Примеры

```js
// Нестандартный и устаревший способ

const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5

// Способ, совместимый со стандартом

// Использование оператора set
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5

// Использование метода Object.defineProperty()
const o = {};
Object.defineProperty(o, "value", {
  set: function (val) {
    this.anotherValue = val;
  },
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## Спецификации

Не является частью какой-либо спецификации.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`Object.prototype.__defineGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- оператор {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [Руководство по JS: определение геттеров и сеттеров](/ru/docs/Web/JavaScript/Guide/Working_with_objects#.d0.9e.d0.bf.d1.80.d0.b5.d0.b4.d0.b5.d0.bb.d0.b5.d0.bd.d0.b8.d0.b5_.d0.b3.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2_.d0.b8_.d1.81.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2)
- [\[Запись в блоге\] Устаревание \_\_defineGetter\_\_ и \_\_defineSetter\_\_](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) (англ.)
- [Firefox bug 647423](https://bugzil.la/647423)
