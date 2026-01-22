---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
---

{{jsxref("Object")}} 实例的 **`constructor`** 数据属性返回一个引用，指向创建该实例对象的构造函数。注意，此属性的值是对*函数本身*的引用，而不是一个包含函数名称的字符串。

> [!NOTE]
> 这是 JavaScript 对象的一个属性。关于类的 `constructor` 方法，请参见[其参考页面](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)。

## 值

对创建该实例对象的构造函数的引用。

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> 这个属性默认会在每个构造函数的 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性上创建，并由该构造函数创建的所有对象继承。

## 描述

除了 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)之外，任何对象都会在其 `[[Prototype]]` 上有一个 `constructor` 属性。使用字面量创建的对象也会有一个指向该对象构造函数类型的 `constructor` 属性，例如，数组字面量创建的 {{jsxref("Array")}} 对象和[对象字面量](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)创建的普通对象。

```js
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true
```

请注意，`constructor` 属性通常来自构造函数的 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性。如果你有一个更长的原型链，通常可以假定链中的每个对象都有一个 `constructor` 属性。

```js
const o = new TypeError(); // 继承关系：TypeError -> Error -> Object
const proto = Object.getPrototypeOf;
proto(o).constructor === TypeError; // true
proto(proto(o)).constructor === Error; // true
proto(proto(proto(o))).constructor === Object; // true
```

## 示例

### 打印对象的构造函数

下面这个示例创建一个构造函数（`Tree`），以及该类型的对象（`theTree`）。然后打印了 `theTree` 对象的 `constructor` 属性。

```js
function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Redwood");
console.log(`theTree.constructor 是 ${theTree.constructor}`);
```

这个示例会打印以下输出：

```plain
theTree.constructor 是 function Tree(name) {
  this.name = name;
}
```

### 为对象的 constructor 属性赋值

可以为非基本类型对象的 `constructor` 属性赋值。

```js
const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

const foo = new Foo();
foo.constructor = "bar";
foo.constructor === "bar"; // true

// 等等…
```

这不会覆盖旧的 `constructor` 属性——它实际上存在于实例的 `[[Prototype]]` 中，而不是作为其自有属性。

```js
const arr = [];
Object.hasOwn(arr, "constructor"); // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor"); // true

arr.constructor = String;
Object.hasOwn(arr, "constructor"); // true——实例属性会覆盖原型链上的同名属性
```

但是，即使对 `Object.getPrototypeOf(a).constructor` 重新赋值，它也不会改变对象的其他行为。例如，`instanceof` 的行为由 [`Symbol.hasInstance`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) 控制，而不是由 `constructor` 控制：

```js
const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true
```

`constructor` 属性没有受到保护，可以被重新赋值或被覆盖，因此在检测变量类型时，通常应避免使用它，而应该使用更不易出错的方法，如对于对象使用 `instanceof` 和 [`Symbol.toStringTag`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)，对于基本类型使用 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)。

### 更改构造函数原型对象的 constructor 属性

每个构造函数都有一个 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性，当通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符调用时，该属性将成为实例的 `[[Prototype]]`。因此，`ConstructorFunction.prototype.constructor` 将成为实例的 `[[Prototype]]` 上的属性，如前面所述。

然而，如果对 `ConstructorFunction.prototype` 重新赋值，`constructor` 属性将丢失。例如，以下是创建继承模式的常见方式：

```js
function Parent() {
  // …
}
Parent.prototype.parentMethod = function () {};

function Child() {
  Parent.call(this); // 确保所有内容都已正确初始化
}
// 将 Child.prototype 的 [[Prototype]] 指向 Parent.prototype
Child.prototype = Object.create(Parent.prototype);
```

由于重新赋值了 `Child.prototype`，`Child` 实例的 `constructor` 将是 `Parent`。

通常情况下，这不是什么大问题——JavaScript 几乎从不读取对象的 `constructor` 属性。唯一的例外是在使用 [`[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) 创建类的新实例时，但这种情况很少见，并且你应该使用 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends) 语法来子类化内置对象。

然而，在某些调用使用 `constructor` 从实例中访问原始类时，确保 `Child.prototype.constructor` 总是指向 `Child` 本身非常重要。考虑这种情况：对象具有 `create()` 方法来创建自身。

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  Parent.call(this);
}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // TypeError: new CreatedConstructor().create().create is undefined，因为 constructor === Parent
```

在上面的示例中，会抛出一个异常，因为 `constructor` 链接到 `Parent`。为了避免这种情况，只需将其赋值为你将要使用的必要构造函数即可。

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

CreatedConstructor.prototype = Object.create(Parent.prototype, {
  // 将原始构造函数返回给 Child
  constructor: {
    value: CreatedConstructor,
    enumerable: false, // 使其不可枚举，这样它就不会出现在 `for...in` 循环中
    writable: true,
    configurable: true,
  },
});

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // 跑起来没毛病
```

请注意，当手动添加 `constructor` 属性时，将属性设置为[不可枚举](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)非常重要，这将确保 `constructor` 就不会在 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环中被访问——尽管通常情况下不会被访问。

如果上面的代码看起来太死板，你也可以考虑使用 [`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 来操作原型链。

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

Object.setPrototypeOf(CreatedConstructor.prototype, Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // 在不重新创建 constructor 属性的情况下仍然有效
```

`Object.setPrototypeOf()` 存在潜在的性能缺陷，因为所有先前创建的涉及该原型链的对象都必须重新编译；但是，如果上述初始化代码发生在 `Parent` 或 `CreatedConstructor` 构造之前，其影响应该是很小的。

接下来，看另外一个相关示例。

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // 静态成员属性
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

Child.prototype = Object.create(ParentWithStatic.prototype, {
  // 将原始构造函数返回给 Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  // 使用 `this.constructor`，以期 `getStartPosition` 存在于一个静态方法中。
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

new Child(1, 1).getOffsetByInitialPosition();
// Error: this.constructor.getStartPosition is undefined，
// 因为构造函数是 Child，它没有 getStartPosition 静态方法
```

如果想要保证示例正常运行，我们需要让 `Parent` 作为构造函数，或给 `Child` 的构造分配静态属性：

```js
// …
Object.assign(Child, ParentWithStatic); // 注意，在创建 Child 的原型前我们先分配它的值
Child.prototype = Object.create(ParentWithStatic.prototype, {
  // 将原始构造函数返回给 Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
// …
```

但更好的方法是，我们可以使构造函数本身相互继承，就像类的 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends) 一样。

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // 静态成员属性
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

// 正确地创建继承关系！
Object.setPrototypeOf(Child.prototype, ParentWithStatic.prototype);
Object.setPrototypeOf(Child, ParentWithStatic);

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

console.log(new Child(1, 1).getOffsetByInitialPosition()); // { offsetX: -1, offsetY: -1 }
```

再次强调，使用 `Object.setPrototypeOf()` 可能会对性能产生不利影响，因此请确保它仅在必要时使用，并在构造函数声明后立即使用，并在创建任何实例之前使用，以避免对象被“污染”。

> [!NOTE]
> 设置或更新构造函数可能会导致结果不同且令人困惑的结果。为了防止它，只需在特定情况下定义 `constructor`。多数情况，不使用 `constructor`，并且不需要重新对其赋值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("statements/class","Class declaration","",1)}}
- {{jsxref("Classes/constructor","Class constructor","",1)}}
- 术语：{{Glossary("constructor", "", 1)}}
