---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`isPrototypeOf()`** проверяет, входит ли объект в цепочку прототипов другого объекта.

> **Примечание:** метод `isPrototypeOf()` отличается от оператора {{jsxref("Operators/instanceof", "instanceof")}}. Выражение "`object instanceof AFunction`" проверяет, присутствует ли в цепочке прототипов объекта `object` объект `AFunction.prototype`, а не сам объект `AFunction`.

## Синтаксис

```
prototypeObj.isPrototypeOf(object)
```

### Параметры

- `prototypeObj`
  - : Объект, проверяемый на каждую ссылку в цепочке прототипов аргумента **object**.
- `object`
  - : Объект, в чьей цепочке прототипов производится поиск.

## Описание

Метод `isPrototypeOf()` позволяет вам проверять, существует ли объект в цепочке прототипов другого объекта.

Например, рассмотрим следующую цепочку прототипов:

```js
function Fee() {
  // ...
}

function Fi() {
  // ...
}
Fi.prototype = new Fee();

function Fo() {
  // ...
}
Fo.prototype = new Fi();

function Fum() {
  // ...
}
Fum.prototype = new Fo();
```

Если позже вы создадите экземпляр объекта `Fum` и захотите проверить, что прототип `Fi` существует в цепочке прототипов `Fum`, вы можете сделать следующее:

```js
var fum = new Fum();
// ...

if (Fi.prototype.isPrototypeOf(fum)) {
  // здесь безопасно что-то делать
}
```

Таким образом, вместе с оператором {{jsxref("Operators/instanceof", "instanceof")}}, это особенно пригождается, если у вас есть код, который может работать только с объектами, имеющими определённую цепочку прототипов, к примеру, чтобы он мог гарантировать, что в объекте присутствуют определённые методы или свойства.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
