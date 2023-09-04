---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`propertyIsEnumerable()`** возвращает логическое значение, указывающее, является ли указанное свойство перечисляемым.

## Синтаксис

```
obj.propertyIsEnumerable(prop)
```

### Параметры

- `prop`
  - : Имя проверяемого свойства.

## Описание

Каждый объект имеет метод `propertyIsEnumerable`. Этот метод может определять, является ли указанное свойство в объекте перечисляемым в цикле {{jsxref("Statements/for...in", "for...in")}}, за исключением свойств, унаследованных из цепочки прототипов. Если объект не имеет указанного свойства, метод вернёт `false`.

## Примеры

### Пример: базовое использование `propertyIsEnumerable`

Следующий пример показывает использование метода `propertyIsEnumerable` на объектах и массивах:

```js
var o = {};
var a = [];
o.prop = "перечисляемое";
a[0] = "перечисляемое";

o.propertyIsEnumerable("prop"); // вернёт true
a.propertyIsEnumerable(0); // вернёт true
```

### Пример: определённые пользователем и встроенные объекты

Следующий пример демонстрирует перечисляемость свойств, определённых пользователем и встроенных свойств:

```js
var a = ["перечисляемое"];

a.propertyIsEnumerable(0); // вернёт true
a.propertyIsEnumerable("length"); // вернёт false

Math.propertyIsEnumerable("random"); // вернёт false
this.propertyIsEnumerable("Math"); // вернёт false
```

### Пример: собственные и унаследованные свойства

```js
var a = [];
a.propertyIsEnumerable("constructor"); // вернёт false

function firstConstructor() {
  this.property = "не перечисляемое";
}

firstConstructor.prototype.firstMethod = function () {};

function secondConstructor() {
  this.method = function method() {
    return "перечисляемый";
  };
}

secondConstructor.prototype = new firstConstructor();
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = "перечисляемое";

o.propertyIsEnumerable("arbitraryProperty"); // вернёт true
o.propertyIsEnumerable("method"); // вернёт true
o.propertyIsEnumerable("property"); // вернёт false

o.property = "перечисляемое";

o.propertyIsEnumerable("property"); // вернёт true

// Эти вызовы вернут false, поскольку все свойства находятся в прототипе,
// который метод propertyIsEnumerable не просматривает (даже несмотря на то,
// что последние два свойства перечисляются через цикл for...in)
o.propertyIsEnumerable("prototype"); // вернёт false (в JS 1.8.1/FF3.6)
o.propertyIsEnumerable("constructor"); // вернёт false
o.propertyIsEnumerable("firstMethod"); // вернёт false
```

## Спецификации

| Спецификация                                                                                               | Статус             | Комментарии              |
| ---------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------ |
| ECMAScript 3-е издание.                                                                                    | Стандарт           | Изначальное определение. |
| {{SpecName('ES5.1', '#sec-15.2.4.7', 'Object.prototype.propertyIsEnumerable')}}                            | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES6', '#sec-object.prototype.propertyisenumerable', 'Object.prototype.propertyIsEnumerable')}} | {{Spec2('ES6')}}   |                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/ru/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
