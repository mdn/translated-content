---
title: 构造函数
slug: Web/JavaScript/Reference/Classes/constructor
l10n:
  sourceCommit: a5c7f9bfb294da287c1877c5eeec69a42638be0e
---

**`constructor`** 是一种用于创建和初始化 [`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class) 对象实例的特殊方法。

> [!NOTE]
> 本页介绍 `constructor` 语法。关于所有对象的 `constructor` 属性，请参见 {{jsxref("Object.prototype.constructor")}}。

{{InteractiveExample("JavaScript Demo: Classes Constructor")}}

```js interactive-example
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// Expected output: "Polygon"
```

## 语法

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
```

还有一些额外的语法限制：

- 名为 `constructor` 的类方法不能是 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)、[setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)、[async](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 或 [generator](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)。
- 一个类不能有一个以上的 `constructor` 方法。

## 描述

通过构造函数，你可以在调用实例化对象的其他方法之前，提供必须完成的自定义初始化。

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`你好，我的名字是 ${this.name}`);
  }
}

const otto = new Person("Otto");

otto.introduce(); // 你好，我的名字是 Otto
```

如果不指定构造函数，则使用默认的构造函数。如果你的类是基类，默认构造函数会是空的：

```js-nolint
constructor() {}
```

如果你的类是派生类，默认构造函数会调用父构造函数，并传递所提供的任何参数：

```js-nolint
constructor(...args) {
  super(...args);
}
```

> [!NOTE]
> 像上面这样的显式构造函数与默认构造函数的区别在于，后者实际上并不通过[参数展开](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)来调用[数组迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)。

这样代码才能正常工作：

```js
class ValidationError extends Error {
  printCustomerMessage() {
    return `验证失败 :-(（详细信息：${this.message}）`;
  }
}

try {
  throw new ValidationError("非有效电话号码");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // 这是 Error，而不是 ValidationError！
    console.log(error.printCustomerMessage());
  } else {
    console.log("未知错误", error);
    throw error;
  }
}
```

`ValidationError` 类不需要显式构造函数，因为它不需要进行任何自定义初始化。默认构造函数会根据给定的参数初始化父类 `Error` 。

但是，如果你提供了自己的构造函数，而你的类派生自某个父类，那么你必须使用 [`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 显式地调用父类的构造函数。例如：

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // 调用父类构造函数
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomerMessage() {
    return `发生未知错误 :-(（详细信息：${this.message}，错误代码：${this.code}）`;
  }
}

try {
  throw new ValidationError("非有效手机号码");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // 现在这是 ValidationError！
    console.log(error.printCustomerMessage());
  } else {
    console.log("未知错误", error);
    throw error;
  }
}
```

在类中使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)，需要经过以下步骤：

1. （如果是派生类）`super()` 调用之前的 `constructor` 主体。这部分不应访问 `this`，因为它尚未初始化。
2. （如果是派生类）执行 `super()` 调用，通过同样的过程初始化父类。
3. 当前类的[字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)将被初始化。
4. 执行调用 `super()` 后的 `constructor` 主体（如果是基类，则对整个主体）。

在 `constructor` 主体中，你可以通过 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 访问正在创建的对象，并通过 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 访问用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用的类。请注意，在执行 `constructor` 之前，方法（包括 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)）和[原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)已在 `this` 上初始化，因此你甚至可以从父类的构造函数访问子类的方法。但是，如果这些方法使用了 `this`，这时 `this` 尚未完全初始化。这意味着读取派生类的公共字段的结果是 `undefined`，而读取私有字段将导致 `TypeError`。

```js example-bad
new (class C extends class B {
  constructor() {
    console.log(this.foo());
  }
} {
  #a = 1;
  foo() {
    return this.#a; //TypeError: Cannot read private member #a from an object whose class did not declare it
    // 这并不是因为 class 没有声明它，
    // 而是由于私有字段在父类构造函数运行的时候尚未初始化
  }
})();
```

`constructor` 方法可能有返回值。基类可以在构造函数中返回任何值，而派生类必须返回一个对象、 `undefined` 值，或抛出 {{jsxref("TypeError")}}。

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// 因为返回值不是一个对象，所以它会被忽略
// 这与函数构造函数一致

class ChildClass extends ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ChildClass()); TypeError: Derived constructors may only return object or undefined
```

如果父类构造函数返回一个对象，则该对象将被用作 `this` 值，派生类的[类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)将在该值上定义。这种技巧被称为[“返回重载”](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements#返回重写对象)，它允许在无关对象上定义派生类的字段（包括[私有](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)字段）。

`constructor` 遵循正常的[方法](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)语法，因此[参数默认值](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)等都可以使用。

```js
class Person {
  constructor(name = "Anonymous") {
    this.name = name;
  }
  introduce() {
    console.log(`你好，我的名字是 ${this.name}`);
  }
}

const person = new Person();
person.introduce(); // 你好，我的名字是 Anonymous
```

构造函数必须是一个明确的值。[计算属性](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#计算属性名)不能成为构造函数。

```js
class Foo {
  // 这是一个计算属性。它不会作为构造函数被拾取。
  ["constructor"]() {
    console.log("被调用");
    this.a = 1;
  }
}

const foo = new Foo(); // 无日志
console.log(foo); // Foo {}
foo.constructor(); // 记录“被调用”
console.log(foo); // Foo { a: 1 }
```

禁止将异步方法、生成器方法、访问器和类字段称为 `constructor`。私有名称不能被命名为 `#constructor`。任何名为 `constructor` 的成员都必须是普通方法。

## 示例

### 使用`constructor`方法

以下代码片段来自 [类的实例](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)（[在线 demo](https://googlechrome.github.io/samples/classes-es6/index.html)）。

```js
class Square extends Polygon {
  constructor(length) {
    // 在这里，它调用了父类的构造函数，并将 lengths 提供给 Polygon 的"width"和"height"
    super(length, length);
    // 注意：在派生类中，必须先调用 super() 才能使用 "this"。
    // 忽略这个，将会导致一个引用错误。
    this.name = "Square";
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}
```

### 在绑定了不同原型的构造函数中调用 super

`super()` 调用当前类原型的构造函数。如果更改了当前类的原型，`super()` 将调用新原型的构造函数。更改当前类的 `prototype` 属性的原型不会影响 `super()` 调用哪个构造函数。

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

// 让 Square 扩展 Rectangle（这是一个基类），而不是 Polygon
Object.setPrototypeOf(Square, Rectangle);

const newInstance = new Square();

// newInstance 仍然是 Polygon 的实例，因为我们没有
// 没有改变 Square.prototype 的原型，所以 newInstance 的
// 原型链仍然是
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon); // true
console.log(newInstance instanceof Rectangle); // false

// 然而，由于 super() 调用 Rectangle 作为构造函数，
// newInstance 的 name 属性将按照 Rectangle 中的逻辑进行初始化
console.log(newInstance.name); // Rectangle
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)指南
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [静态初始块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Object.prototype.constructor")}}
