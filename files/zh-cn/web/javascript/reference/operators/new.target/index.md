---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

**`new.target`** 元属性允许你检测函数或构造函数是否是通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符被调用的。在通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符执行的函数或构造函数中，`new.target` 返回一个指向 `new` 调用的构造函数或函数的引用。在普通的函数调用中，`new.target` 的值是 {{jsxref("undefined")}}。

{{InteractiveExample("JavaScript Demo: Expressions - new.target")}}

```js interactive-example
function Foo() {
  if (!new.target) {
    throw new TypeError("calling Foo constructor without new is invalid");
  }
}

try {
  Foo();
} catch (e) {
  console.log(e);
  // Expected output: TypeError: calling Foo constructor without new is invalid
}
```

## 语法

```js-nolint
new.target
```

### 值

`new.target` 保证是一个可构造的函数值或 `undefined`。

- 在类构造函数中，它指向 `new` 调用的类，这可能是当前构造函数的子类，因为子类通过 [`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 传递调用了父类的构造函数。
- 在普通函数中，如果函数是直接通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 构造的，则 `new.target` 指向函数本身。如果函数不是通过 `new` 调用的，则 `new.target` 是 {{jsxref("undefined")}}。函数可以被用作 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends) 的基类，这种情况下 `new.target` 可能指向子类。
- 如果构造函数（类或者函数）是通过 [`Reflect.construct()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct) 调用的，那么 `new.target` 指向作为 `newTarget` 传递的值（默认为 `target`）。
- 在[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)中，`new.target` 是从周围的作用域继承的。如果箭头函数不是在另一个具有 `new.target` {{Glossary("binding", "绑定")}}的类或函数中定义的，则会抛出语法错误。
- 在[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)中，`new.target` 是 {{jsxref("undefined")}}。

## 描述

`new.target` 语法由关键字 `new`、点和标识符 `target` 组成。由于 `new` 是[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#保留字)而非标识符；其并不是[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)，而是一种特殊的表达式语法。

`new.target` 元属性在所有的函数/类主体均可用。在函数或类的外部使用 `new.target` 会导致语法错误。

## 示例

### 函数调用中的 new\.target

在普通的函数调用中（和构造函数调用相对），`new.target` 的值是 {{jsxref("undefined")}}。这使得你可以检测一个函数是否是作为构造函数通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 被调用的。

```js
function Foo() {
  if (!new.target) {
    throw new Error("必须通过 new 来调用 Foo()");
  }
  console.log("Foo 是通过 new 进行初始化的");
}

new Foo(); // 记录“Foo 是通过 new 进行初始化的”
Foo(); // 抛出“必须通过 new 来调用 Foo()”
```

### 构造函数中的 new\.target

在类的构造函数中，`new.target` 指向直接被 `new` 执行的构造函数。如果构造函数位于父类中，并且是由子类的构造函数委托的，情况也是如此。`new.target` 指向被 `new` 所调用的类。例如，当通过 `new B()` 初始化 `b` 时，打印出了 `B` 的名称；类似地，对于 `a`，打印出了类 `A` 的名称。

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

const a = new A(); // 记录“A”
const b = new B(); // 记录“B”
```

### 使用 Reflect.construct() 的 new\.target

在 {{jsxref("Reflect.construct()")}} 和类出现之前，通常通过传递 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的值，并让基类构造函数对其进行更改来实现继承。

```js example-bad
function Base() {
  this.name = "基类";
}

function Extended() {
  // 让 Base() 构造函数可在现有的 `this` 值上工作，
  // 而不是在 `new` 创建的新对象上工作的唯一方法。
  Base.call(this);
  this.otherProperty = "子类";
}

Object.setPrototypeOf(Extended.prototype, Base.prototype);
Object.setPrototypeOf(Extended, Base);

console.log(new Extended()); // Extended { name: '基类', otherProperty: '子类' }
```

然而，{{jsxref("Function/call", "call()")}} 和 {{jsxref("Function/apply", "apply()")}} 实际上是对函数进行*调用*而非*构造*，所以 `new.target` 的值是 `undefined`。这意味着如果 `Base()` 检查它是否是通过 `new` 构造的，将会抛出错误（或者可能表现出其他意外的行为）。例如，你不能通过这种方式扩展 [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)，因为 `Map()` 构造函数不能在不使用 `new` 的情况下调用。

所有内置构造函数都通过读取 `new.target.prototype` 直接构造新实例的整个原型链。因此，为了确保（1）`Base` 是通过 `new` 构造的，以及（2）`new.target` 指向子类而不是 `Base` 本身，我们需要使用 {{jsxref("Reflect.construct()")}}。

```js
function BetterMap(entries) {
  // 调用基类构造函数，但将 `new.target` 设置为子类，
  // 因此创建的实例具有正确的原型链。
  return Reflect.construct(Map, [entries], BetterMap);
}

BetterMap.prototype.upsert = function (key, actions) {
  if (this.has(key)) {
    this.set(key, actions.update(this.get(key)));
  } else {
    this.set(key, actions.insert());
  }
};

Object.setPrototypeOf(BetterMap.prototype, Map.prototype);
Object.setPrototypeOf(BetterMap, Map);

const map = new BetterMap([["a", 1]]);
map.upsert("a", {
  update: (value) => value + 1,
  insert: () => 1,
});
console.log(map.get("a")); // 2
```

> [!NOTE]
> 实际上，由于缺少 `Reflect.construct()`，在转译为 ES6 以前的代码时，无法正确地对内置对象进行子类化（例如 [`Error` 子类化](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error#自定义错误类型)）。

但是，如果你正在编写 ES6 代码，最好使用类和 `extends`，因为它更易读且更少出错。

```js
class BetterMap extends Map {
  // 构造函数被省略，因为它只是默认的

  upsert(key, actions) {
    if (this.has(key)) {
      this.set(key, actions.update(this.get(key)));
    } else {
      this.set(key, actions.insert());
    }
  }
}

const map = new BetterMap([["a", 1]]);
map.upsert("a", {
  update: (value) => value + 1,
  insert: () => 1,
});
console.log(map.get("a")); // 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
