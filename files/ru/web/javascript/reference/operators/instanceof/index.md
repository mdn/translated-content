---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
---

{{jsSidebar("Operators")}}

Оператор **`instanceof`** проверяет, принадлежит ли объект к определённому классу. Другими словами, `object instanceof constructor` проверяет, присутствует ли объект `constructor.prototype` в цепочке прототипов `object`.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Синтаксис

```
object instanceof constructor
```

### Параметры

- `object`
  - : Проверяемый объект.

<!---->

- `constructor`
  - : Функция-конструктор, на которую идёт проверка.

## Описание

Оператор `instanceof` проверяет, присутствует ли объект `constructor.prototype` в цепочке прототипов `object`.

```js
// объявляем конструкторы
function C() {}
function D() {}

var o = new C();

// true, так как: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, так как D.prototype не присутствует в цепочке прототипов o
o instanceof D;

o instanceof Object; // true, так как:
C.prototype instanceof Object; // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, так как C.prototype отсутствует в цепочке прототипов o
o instanceof C;

D.prototype = new C(); // add C to [[Prototype]] linkage of D
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true, так как C.prototype теперь присутствует в цепочке прототипов o3
```

Обратите внимание: результат оператора `instanceof` зависит от свойства `constructor.prototype`, поэтому результат оператора может поменяться после изменения этого свойства. Также результат может поменяться после изменения прототипа `object` (или цепочки прототипов) с помощью `Object.setPrototypeOf` или нестандартного свойства `__proto__`.

### `instanceof` и множественные контексты (например, фреймы или окна)

Различные контексты имеют разные среды выполнения. Это означает, что они имеют различные built-ins (разный глобальный объект, различные конструкторы и т.д.). Это может давать неожиданные результаты. Например, `[] instanceof window.frames[0].Array` вернёт `false`, потому что `Array.prototype !== window.frames[0].Array` а массив наследуется от `Array`.

Это может казаться несущественной проблемой сначала, но при работе с несколькими фреймами или окнами, и передачи объектов из одного контекста в другой с помощью функций, это может стать серьёзной проблемой. С другой стороны, безопасно проверить, является ли некоторый объект массивом можно используя `Array.isArray(myObj)`.

Например, для проверки того, что [Node](/ru/docs/Web/API/Node) является [SVGElement](/ru/docs/Web/API/SVGElement) в разных контекстах можно использовать `myNode instanceof myNode.ownerDocument.defaultView.SVGElement`.

> **Примечание:** Использование XPCOM `instanceof` в коде имеет специальный эффект: `obj instanceof xpcomInterface` (например `Components.interfaces.nsIFile`) вызывает `obj.QueryInterface(xpcomInterface)` и возвращает `true` если проверка на QueryInterface прошла успешно. Побочным эффектом этого вызова является то, что можно использовать свойства _`xpcomInterface`_ на `obj` после успешной проверки с помощью `instanceof`. В отличии от стандартных глобальных JavaScript типов, проверка `obj instanceof xpcomInterface` работает как ожидается, даже если `obj` относится к другому контексту.

## Примеры

### Показывает, что `String` и `Date` имеют тип `Object` и граничные случаи

Следующий код использует `instanceof`, чтобы показать что объекты `String` и `Date` также имеют тип `Object` (они являются наследниками `Object`).

Однако, объекты, созданные с помощью литералов, являются исключениями — хотя их prototype равен `undefined`, выражение `instanceof Object` возвращает `true`.

```js
var simpleStr = "Это обычная строка";
var myString = new String();
var newStr = new String("Строка, созданная с помощью конструктора");
var myDate = new Date();
var myObj = {};

simpleStr instanceof String; // возвращает false, проверяет цепочку прототипов
myString instanceof String; // возвращает true
newStr instanceof String; // возвращает true
myString instanceof Object; // возвращает true

myObj instanceof Object; // возвращает true, несмотря на прототип, равный undefined
({}) instanceof Object; // возвращает true, аналогично предыдущей строчке

myString instanceof Date; // возвращает false

myDate instanceof Date; // возвращает true
myDate instanceof Object; // возвращает true
myDate instanceof String; // возвращает false
```

### Показывает, что `mycar` имеет тип `Car` и тип `Object`

Следующий код создаёт тип `Car` и экземпляр этого типа, `mycar`. Оператор `instanceof` показывает, что объект `mycar` имеет тип `Car` и тип `Object`.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car; // возвращает true
var b = mycar instanceof Object; // возвращает true
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [`typeof`](/ru/docs/Web/JavaScript/Reference/Operators/typeof)
- {{jsxref("Symbol.hasInstance")}}
