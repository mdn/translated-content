---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
tags:
  - JavaScript
  - Object
  - Property
  - Prototype
browser-compat: javascript.builtins.Object.constructor
translation_of: Web/JavaScript/Reference/Global_Objects/Object/constructor
---
{{JSRef}}

**`constructor`** 属性返回 {{jsxref("Object")}} 的构造函数（用于创建实例对象）。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。

原始类型的值是只读的，如：`1`、`true` 和 `"test"`。

## 描述

所有对象（使用 `Object.create(null)` 创建的对象除外）都将具有 `constructor` 属性。在没有显式使用构造函数的情况下，创建的对象（例如对象和数组文本）将具有 `constructor` 属性，这个属性指向该对象的基本对象构造函数类型。

```js
const o = {}
o.constructor === Object // true

const o = new Object
o.constructor === Object // true

const a = []
a.constructor === Array // true

const a = new Array
a.constructor === Array // true

const n = new Number(3)
n.constructor === Number // true
```

## 示例

### 打印对象的构造函数

下面这个示例创建一个构造函数（`Tree`），以及该类型的对象（`theTree`）。然后打印了 `theTree` 对象的 `constructor` 属性。

```js
function Tree(name) {
  this.name = name
}

const theTree = new Tree('Redwood')
console.log('theTree.constructor is ' + theTree.constructor)
```

打印输出：

```js
theTree.constructor is function Tree(name) {
  this.name = name
}
```

### 改变对象的 constructor

可以为除了 `null` 和 `undefined`（因为这两者没有相应的构造函数）之外的任何类型指定 `constructor` 属性（如 `String`、`Number`、`Boolean` 等），但基本类型不会保留这些更改（也不会抛出异常）。也是同样的原因，基本类型允许设置任何属性（除了 `null` 和 `undefined`），而不会产生副作用。就是说，每当把这样的基本类型当成对象使用时，其对应的构造函数的实例就会在语句执行后立即被创建和丢弃。

```js
let val = null;
val.constructor = 1; // TypeError: val is null

val = 'abc';
val.constructor = Number; // val.constructor === String

val.foo = 'bar'; // An implicit instance of String('abc') was created and assigned the prop foo
val.foo === undefined; // true, since a new instance of String('abc') was created for this comparison, which doesn't have the foo property
```

因此，基本上除了上面的提到的基本类型外，任何对象都可以更改 `constructor` 属性的值，**请注意，改变** `constructor` **的属性不会影响** `instanceof` **运算符**：

```js
let a = [];
a.constructor = String
a.constructor === String // true
a instanceof String // false
a instanceof Array // true

a = new Foo();
a.constructor = 'bar'
a.constructor === 'bar' // true
```

如果对象被密封或冻结，那么更改 constructor 将不会起作用，也不会抛出异常：

```js
let a = Object.seal({});
a.constructor = Number;
a.constructor === Object; // true
```

### 改变函数的 constructor

大多数情况下，此属性用于定义一个**函数的构造函数（function-constructor）**，并使用 **new** 和原型链继承进一步使用它。

```js
function Parent() { /* ... */ }
Parent.prototype.parentMethod = function parentMethod() {}

function Child() {
  Parent.call(this) // Make sure everything is initialized properly
}
Child.prototype = Object.create(Parent.prototype) // re-define child prototype to Parent prototype

Child.prototype.constructor = Child // return original constructor to Child
```

但什么时候我们需要在这里执行最后一行？需要看具体情况而定。

让我们来尝试定义在哪些情况下，重新分配原始构造函数会发挥重要作用，以及在什么时候它是无效的代码行。

看下面的示例：该对象具有创建自身的 `create()` 方法。

```js
function Parent() { /* ... */ }
function CreatedConstructor() {
  Parent.call(this)
}

CreatedConstructor.prototype = Object.create(Parent.prototype)

CreatedConstructor.prototype.create = function create() {
  return new this.constructor()
}

new CreatedConstructor().create().create() // TypeError undefined is not a function since constructor === Parent
```

在上面的示例中，会抛出异常，因为构造函数链接到 `Parent`。

为了解决这个问题，只需为它分配一个要使用的必要构造函数。

```js
function Parent() { /* ... */ }
function CreatedConstructor() { /* ... */ }

CreatedConstructor.prototype = Object.create(Parent.prototype)
CreatedConstructor.prototype.constructor = CreatedConstructor // sets the correct constructor for future use

CreatedConstructor.prototype.create = function create() {
  return new this.constructor()
}

new CreatedConstructor().create().create() // it's pretty fine
```

相信你现在应该很清楚为什么改变构造是有用的。

接下来，看另外一个示例。

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 } // Static member property
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition
}

function Child(x, y) {
  this.position = {
    x: x,
    y: y
  }
}

Child.prototype = Object.create(ParentWithStatic.prototype)
Child.prototype.constructor = Child

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  let position = this.position
  let startPosition = this.constructor.getStartPosition() // error undefined is not a function, since the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  }
}
```

如果想要保证示例正常运行，我们需要让 `Parent` 作为构造函数，或给 `Child` 的构造分配静态属性：

```js
...
Child = Object.assign(Child, ParentWithStatic); // Notice that we assign it before we create(...) a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype);
...
```

或者将 `Parent` 的构造函数标识符分配给 `Child` 构造函数上的单独属性，并通过该属性访问它：

```js
...
Child.parentConstructor = ParentWithStatic
Child.prototype = Object.create(ParentWithStatic.prototype)
...
  let startPosition = this.constructor.parentConstructor.getStartPosition()
...
```

> **备注：** 设置或更新构造函数可能会导致结果不同且令人困惑的结果。为了防止它，只需在特定情况下定义 `constructor`。多数情况，不使用 `constructor`，并且不需要重新定义。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("statements/class","Class declaration","",1)}}
- {{jsxref("Classes/constructor","Class constructor","",1)}}
- Glossary: {{Glossary("constructor", "", 1)}}
