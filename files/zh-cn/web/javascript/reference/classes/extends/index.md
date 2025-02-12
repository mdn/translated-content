---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Classes")}}

**`extends`** 关键字用于[类声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)或者[类表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)中，以创建一个类，该类是另一个类的子类。

{{InteractiveExample("JavaScript Demo: Classes Extends", "taller")}}

```js interactive-example
class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());
// Expected output: "19-Aug-1975"
```

## 语法

```js-nolint
class ChildClass extends ParentClass { /* … */ }
```

- `ParentClass`
  - : 求值为构造函数（包括类）或 `null` 的表达式。

## 描述

`extends` 关键字用来创建自定义类或者内置对象的子类。

任何可以用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用并具有 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性的构造函数都可以作为候选的父类的构造函数。这两个条件必须同时成立——例如，[绑定函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)和 {{jsxref("Proxy")}} 可以被构造，但它们没有 `prototype` 属性，因此不能被子类化。

```js
function OldStyleClass() {
  this.someProperty = 1;
}
OldStyleClass.prototype.someMethod = function () {};

class ChildClass extends OldStyleClass {}

class ModernClass {
  someProperty = 1;
  someMethod() {}
}

class AnotherChildClass extends ModernClass {}
```

`ParentClass` 的 `prototype` 属性必须是 {{jsxref("Object")}} 或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)，但在实践中很少需要担心这个问题，因为非对象的 `prototype` 无论如何都不会按照应有的方式运行（[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符会忽略它）。

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// 实际上并不是一个数字！
```

`extends` 为 `ChildClass` 和 `ChildClass.prototype` 设置了原型。

|                              | `ChildClass` 的原型对象 | `ChildClass.prototype` 的原型对象 |
| ---------------------------- | ----------------------- | --------------------------------- |
| 缺少 `extends`               | `Function.prototype`    | `Object.prototype`                |
| [`extends null`](#拓展_null) | `Function.prototype`    | `null`                            |
| `extends ParentClass`        | `ParentClass`           | `ParentClass.prototype`           |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// 允许静态属性的继承
Object.getPrototypeOf(ChildClass) === ParentClass;
// 允许实例属性的继承
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

`extend` 的右侧不一定是标识符。你可以使用任何求值为构造函数的表达式。这通常有助于创建[混入（mixin）](#混入)。`extends` 表达式中的 `this` 值是围绕类定义的 `this` ，而引用类的名称会导致 {{jsxref("ReferenceError")}}，因为类尚未初始化。在此表达式中，{{jsxref("Operators/await", "await")}} 和 {{jsxref("Operators/yield", "yield")}} 按预期工作。

```js
class SomeClass extends class {
  constructor() {
    console.log("基类");
  }
} {
  constructor() {
    super();
    console.log("派生类");
  }
}

new SomeClass();
// 基类
// 派生类
```

基类可以从构造函数中返回任何内容，而派生类必须返回对象或 `undefined` ，否则将抛出 {{jsxref("TypeError")}}。

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// 返回值将被忽略，因为它不是一个对象
// 这与函数构造函数一致

class ChildClass extends ParentClass {
  constructor() {
    super();
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

如果父类构造函数返回一个对象，则在进一步初始化[类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)时，该对象将被用作派生类的 `this` 值。这种技巧被称为[“返回覆盖”](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties#返回重写对象)，它允许在无关对象上定义派生类的字段（包括[私有](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)字段）。

### 子类化内置类

> [!WARNING]
> 标准委员会目前的立场是，以前版本规范中的内置类的子类化机制设计过度，对性能和安全性造成了不可忽视的影响。新的内置方法较少考虑子类，引擎实现者正在[研究是否要删除某些子类机制](https://github.com/tc39/proposal-rm-builtin-subclassing)。在增强内置类时，请考虑使用组合而非继承。

下面是扩展类时可能会遇到的一些问题：

- 在子类上调用静态工厂方法（如 {{jsxref("Promise.resolve()")}} 或 {{jsxref("Array.from()")}}）时，返回的实例始终是子类的实例。
- 在子类上调用返回新实例的实例方法（如 {{jsxref("Promise.prototype.then()")}} 或 {{jsxref("Array.prototype.map()")}}）时，返回的实例始终是子类的实例。
- 在可能的情况下，实例方法会尽量委托给最小的原始方法集。例如，对于 {{jsxref("Promise")}} 的子类，覆盖 {{jsxref("Promise/then", "then()")}} 会自动导致 {{jsxref("Promise/catch", "catch()")}} 的行为发生变化；或对于 {{jsxref("Map")}} 的子类，覆盖 {{jsxref("Map/set", "set()")}} 会自动导致 {{jsxref("Map/Map", "Map()")}} 构造函数的行为发生变化。

然而，要正确地实现上述期望，需要付出不小的努力。

- 第一个要求静态方法读取 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的值，以获取构造函数来构造返回的实例。这意味着 `[p1,p2,p3].map(Promise.resolve)` 会抛出错误，因为 `Promise.resolve` 中的 `this` 是 `undefined`。解决这个问题的方法是，如果 `this` 不是构造函数，就回退到基类，就像 {{jsxref("Array.from()")}} 所做的那样，但这仍然意味着基类是特例。
- 第二个要求实例方法读取 [`this.constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 以获取构造函数。但是，`new this.constructor()` 可能会破坏老旧的代码，因为 `constructor` 属性是可写和可配置的，而且不受任何保护。因此，许多复制的内置方法都使用构造函数的 [`[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) 属性（默认情况下只返回 `this`，即构造函数本身）。然而，`[Symbol.species]` 允许运行任意代码和创建任意类型的实例，这就带来了安全问题，并使子类化语义变得非常复杂。
- 第三个会导致自定义代码的可见调用，从而使很多优化更难实现。例如，如果使用包含 _x_ 个元素的可迭代元素调用 `Map()` 构造函数，那么它必须明显地调用 `set()` 方法 _x_ 次，而不仅仅是将元素复制到内部存储。

这些问题并非内置类所独有。对于你自己的类，你也可能需要做出同样的决定。不过，对于内置类来说，可优化性和安全性是更大的问题。新的内置方法总是构造基类，并尽可能少地调用自定义方法。如果你想在实现上述期望的同时对内置类进行子类化，你需要重写所有已具有默认行为的方法。在基类上添加任何新方法都可能会破坏子类的语义，因为这些方法是默认继承的。因此，扩展内置类的更好方法是使用[_组合_](#避免继承)。

### 拓展 null

`extends null` 设计用于轻松创建[不继承自 `Object.prototype` 的对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)。然而，由于关于是否应在构造函数中调用 `super()` 的决定尚未确定，因此在实践中不可能使用任何不返回对象的构造函数实现来构造这样的类。[TC39 委员会正在努力重新启用这一特性](https://github.com/tc39/ecma262/pull/1321)。

```js
new (class extends null {})();
// TypeError: Super constructor null of anonymous class is not a constructor

new (class extends null {
  constructor() {}
})();
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

new (class extends null {
  constructor() {
    super();
  }
})();
// TypeError: Super constructor null of anonymous class is not a constructor
```

相反，你需要从构造函数中明确返回一个实例。

```js
class NullClass extends null {
  constructor() {
    // 使用 new.target 允许派生类具有正确的原型链
    return Object.create(new.target.prototype);
  }
}

const proto = Object.getPrototypeOf;
console.log(proto(proto(new NullClass()))); // null
```

## 示例

### 使用 extends

第一个例子是根据名为 `Polygon` 类创建一个名为 `Square` 的类。当前示例是从这个[在线演示](https://googlechrome.github.io/samples/classes-es6/index.html)中提取出来的[（源代码）](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)。

```js
class Square extends Polygon {
  constructor(length) {
    // 在这里，它会调用父类的构造函数，并为多边形的宽度和高度提供长度
    super(length, length);
    // 在派生类中，必须先调用 super() 才能用“this”。省略这一点将导致引用错误。
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### 扩展普通对象

类不能扩展常规（不可构造）对象。如果想通过在继承实例中使用常规对象的所有属性来继承该对象，可以使用 {{jsxref("Object.setPrototypeOf()")}} 代替：

```js
const Animal = {
  speak() {
    console.log(`${this.name} 发出了噪音`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog("Mitzie");
d.speak(); // Mitzie 发出了噪音
```

### 扩展内置对象

这个示例继承了内置的 {{jsxref("Date")}} 对象。当前示例是从这个[在线演示](https://googlechrome.github.io/samples/classes-es6/index.html)中提取出来的[（源代码）](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)。

```js-nolint
class MyDate extends Date {
  getFormattedDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}
```

### 扩展 `Object`

所有 JavaScript 对象默认情况下都继承自 `Object.prototype`，因此乍一看，编写 `extends Object` 似乎是多余的。与完全不写 `extends` 的唯一区别是构造函数本身继承了 `Object` 的静态方法，例如 {{jsxref("Object.keys()")}}。然而，由于没有任何 `Object` 静态方法会使用 `this` 值，因此继承这些静态方法仍然没有任何价值。

{{jsxref("Object/Object", "Object()")}} 构造函数特殊处理了子类化情况。如果通过 [`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 隐式调用该构造函数，则该构造函数始终以 `new.target.prototype` 为原型初始化一个新对象。传递给 `super()` 的任何值都将被忽略。

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

将这种行为与不对子类进行特殊处理的自定义包装器进行比较：

```js
function MyObject(v) {
  return new Object(v);
}
class D extends MyObject {
  constructor(v) {
    super(v);
  }
}
console.log(new D(1) instanceof Number); // true
```

### Species

你可能希望在派生数组类 `MyArray` 中返回 {{jsxref("Array")}} 对象。Species 模式可让你覆盖默认构造函数。

例如，在使用 {{jsxref("Array.prototype.map()")}} 等返回默认构造函数的方法时，你希望这些方法返回的是父 `Array` 对象，而不是 `MyArray` 对象。{{jsxref("Symbol.species")}} 符号可让你做到这一点：

```js
class MyArray extends Array {
  // 将 Species 覆盖到父类 Array 的构造函数
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

许多内置复制方法都实现了这一行为。有关此功能的注意事项，请参阅[子类化内置类](#子类化内置类)讨论。

### 混入

抽象子类或*混入*是类的模板。一个类只能有一个父类，因此不可能从工具类等多重继承。功能必须由超类提供。

一个以父类为输入，以扩展该父类的子类为输出的函数可以用来实现混入：

```js
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

使用这些混入的类可以这样编写：

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

### 避免继承

在面向对象编程中，继承是一种非常强的耦合关系。它意味着子类默认继承基类的所有行为，但这并不总是你想要的。例如，请看 `ReadOnlyMap` 的实现：

```js
class ReadOnlyMap extends Map {
  set() {
    throw new TypeError("A read-only map must be set at construction time.");
  }
}
```

结果发现 `ReadOnlyMap` 无法构造，因为 [`Map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) 构造函数调用了实例的 `set()` 方法。

```js
const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.
```

我们可以通过使用一个私有标志来指示是否正在构造实例来解决这个问题。然而，这种设计的一个更重要的问题是，它破坏了[里氏替换原则](https://zh.wikipedia.org/wiki/里氏替换原则)，该原则规定子类应该可以替换其超类。如果函数期望使用一个 `Map` 对象，那么它也应该能够使用一个 `ReadOnlyMap` 对象，这在这里就会被打破。

继承常常会导致[圆——椭圆问题](https://en.wikipedia.org/wiki/Circle–ellipse_problem)，因为两种类型虽然有很多共同特征，但都不能完美地包含另一种类型的行为。一般来说，除非有非常充分的理由使用继承，否则最好使用组合。组合是指一个类拥有另一个类对象的引用，但只将该对象用作实现细节。

```js
class ReadOnlyMap {
  #data;
  constructor(values) {
    this.#data = new Map(values);
  }
  get(key) {
    return this.#data.get(key);
  }
  has(key) {
    return this.#data.has(key);
  }
  get size() {
    return this.#data.size;
  }
  *keys() {
    yield* this.#data.keys();
  }
  *values() {
    yield* this.#data.values();
  }
  *entries() {
    yield* this.#data.entries();
  }
  *[Symbol.iterator]() {
    yield* this.#data[Symbol.iterator]();
  }
}
```

在这种情况下，`ReadOnlyMap` 类不是 `Map` 的子类，但它仍然实现了大部分相同的方法。这意味着更多的代码重复，但也意味着 `ReadOnlyMap` 类与 `Map` 类不是强耦合的，并且在 `Map` 类更改时不会轻易中断，从而避免了[子类化内置类的语义问题](#子类化内置类)。例如，如果 `Map` 类添加了一个不调用 `set()` 的 [`emplace()`](https://github.com/tc39/proposal-upsert) 方法，就会导致 `ReadOnlyMap` 类不再是只读的，除非后者也相应地更新以覆盖 `emplace()`。此外，`ReadOnlyMap` 对象根本没有 `set` 方法，这比在运行时抛出错误更准确。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)指南
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/constructor", "constructor")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super")}}
