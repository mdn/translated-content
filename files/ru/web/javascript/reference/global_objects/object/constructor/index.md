---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Возвращает ссылку на функцию {{jsxref("Global_Objects/Object", "Object")}}, создавшую прототип экземпляра. Обратите внимание, что значение этого свойства является ссылкой на саму функцию, а не строкой, содержащей имя функции. Для примитивных значений, вроде `1`, `true` или `"test"`, значение доступно только для чтения.

## Описание

Все объекты наследуют свойство `constructor` из своего прототипа:

```js
var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

## Примеры

### Пример: отображение конструктора объекта

В следующем примере создаётся прототип `Tree` и объект этого типа `theTree`. Затем в примере отображается свойство `constructor` объекта `theTree`.

```js
function Tree(name) {
  this.name = name;
}

var theTree = new Tree("Красное дерево");
console.log("theTree.constructor равен " + theTree.constructor);
```

Вывод примера будет следующим:

```js
theTree.constructor равен function Tree(name) {
  this.name = name;
}
```

### Пример: изменение конструктора объекта

Следующий пример показывает, как изменить конструктор значений общих объектов. Не затрагиваются только значения `true`, `1` и `"тест"`, поскольку они имеют родные конструкторы только для чтения. Этот пример показывает, что полагаться на свойство `constructor` объекта не всегда безопасно.

```js
function Type() {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true, // останется неизменным
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1, // останется неизменным
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  "тест", // останется неизменным
];

for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [
    types[i].constructor,
    types[i] instanceof Type,
    types[i].toString(),
  ];
}

console.log(types.join("\n"));
```

Вывод примера будет следующим:

```js
function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {
    [native code]
},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {

}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {
    [native code]
},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {
    [native code]
},false,тест
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
