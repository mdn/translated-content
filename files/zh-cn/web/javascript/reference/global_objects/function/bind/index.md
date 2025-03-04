---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
---

{{JSRef}}

{{jsxref("Function")}} 实例的 **`bind()`** 方法创建一个新函数，当调用该新函数时，它会调用原始函数并将其 `this` 关键字设置为给定的值，同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。

{{InteractiveExample("JavaScript Demo: Function.bind()", "taller")}}

```js interactive-example
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42
```

## 语法

```js-nolint
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```

### 参数

- `thisArg`
  - : 在调用绑定函数时，作为 `this` 参数传入目标函数 `func` 的值。如果函数不在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 和 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 会被替换为全局对象，并且原始值会被转换为对象。如果使用 {{jsxref("Operators/new", "new")}} 运算符构造绑定函数，则忽略该值。
- `arg1, …, argN` {{optional_inline}}
  - : 在调用 `func` 时，插入到传入绑定函数的参数前的参数。

### 返回值

使用指定的 `this` 值和初始参数（如果提供）创建的给定函数的副本。

## 描述

`bind()` 函数创建一个新的*绑定函数（bound function）*。调用绑定函数通常会执行其所包装的函数，也称为*目标函数（target function）*。绑定函数将绑定时传入的参数（包括 `this` 的值和前几个参数）提前存储为其内部状态。而不是在实际调用时传入。通常情况下，你可以将 `const boundFn = fn.bind(thisArg, arg1, arg2)` 和 `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` 构建的绑定函数的调用效果视为等效（但就构建 `boundFn` 的过程而言，不是二者等效的）。

绑定函数可以通过调用 `boundFn.bind(thisArg, /* more args */)` 进一步进行绑定，从而创建另一个绑定函数 `boundFn2`。新绑定的 `thisArg` 值会被忽略，因为 `boundFn2` 的目标函数是 `boundFn`，而 `boundFn` 已经有一个绑定的 `this` 值了。当调用 `boundFn2` 时，它会调用 `boundFn`，而 `boundFn` 又会调用 `fn`。`fn` 最终接收到的参数按顺序为：`boundFn` 绑定的参数、`boundFn2` 绑定的参数，以及 `boundFn2` 接收到的参数。

```js
"use strict"; // 防止 `this` 被封装到到包装对象中

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

如果目标函数是可构造的，绑定函数也可以使用 `new` 运算符进行构造。这样做的效果就好像目标函数本身被构造一样。前置的参数会像通常一样传递给目标函数，而提供的 `this` 值会被忽略（因为构造函数会准备自己的 `this`，如 {{jsxref("Reflect.construct")}} 的参数所示）。如果直接构造绑定函数，[`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) 将指向目标函数（也就是说，绑定函数对 `new.target` 是透明的）。

```js
class Base {
  constructor(...args) {
    console.log(new.target === Base);
    console.log(args);
  }
}

const BoundBase = Base.bind(null, 1, 2);

new BoundBase(3, 4); // true, [1, 2, 3, 4]
```

然而，由于绑定函数没有 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性，它不能作为 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends) 的基类。

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

当将绑定函数用作 [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符右操作数时，`instanceof` 会访问绑定函数内部存储的目标函数，并读取其 `prototype` 属性。

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

绑定函数具有以下属性：

- [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : 目标函数的 `length` 减去被绑定的参数个数（不包括 `thisArg` 参数），最小值为 0。
- [`name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : 目标函数的 `name` 前加上 `"bound "` 前缀。

绑定函数还会继承目标函数的[原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)。然而，它不会继承目标函数的其他自有属性（例如，如果目标函数是一个类，则不会继承其[静态属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)）。

## 示例

### 创建绑定函数

`bind()` 最简单的用法是创建一个函数，无论如何调用，它都会使用特定的 `this` 值进行调用。

JavaScript 新手经常犯的一个错误是将一个方法从对象中提取出来，然后再调用，并期望方法中的 `this` 是原来的对象（比如在回调中传入这个方法）。

然而，如果不做特殊处理的话，通常会丢失原始对象。使用这个函数加上原始的对象来创建一个绑定函数，巧妙地解决了这个问题：

```js
// 顶级的“this”绑定到“globalThis”。
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// “getX”的“this”参数绑定到“module”。
console.log(module.getX()); // 81

const retrieveX = module.getX;
// “retrieveX”的“this”参数在非严格模式下绑定到“globalThis”。
console.log(retrieveX()); // 9

// 创建一个新函数“boundGetX”，并将“this”参数绑定到“module”。
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
```

> [!NOTE]
> 如果在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下运行这个示例，`retrieveX` 的 `this` 参数会绑定到 `undefined` 而不是 `globalThis`，这会导致 `retrieveX()` 的调用失败。
>
> 如果在一个 ECMAScript 模块中运行这个示例，顶级的 `this` 会绑定到 `undefined` 而不是 `globalThis`，导致 `this.x = 9` 赋值失败。
>
> 如果在 Node CommonJS 模块中运行这个示例，则顶级的 `this` 会绑定到 `module.exports` 而不是 `globalThis`。然而，在非严格模式下，`retrieveX` 的 `this` 仍然会绑定到 `globalThis`，而在严格模式下会绑定为 `undefined`。因此，在非严格模式下（默认情况下），`retrieveX()` 调用会返回 `undefined`, 因为 `this.x = 9` 会写入的是一个不同的对象（`module.exports`），而 `getX` 读取的是另一个对象（`globalThis`）。

实际上，一些内置的“方法”也是返回绑定函数的 getter 方法，其中一个显著的例子是 [`Intl.NumberFormat.prototype.format()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#使用_format_和_map)，当访问时，它返回一个绑定函数，你可以直接将其作为回调函数传递。

### 偏函数

`bind()` 的另一个简单用法是创建一个具有预设初始参数的函数。

这些参数（如果有的话）会跟随提供的 `this` 值，并在传递给目标函数的参数列表的开头插入，其后是在调用绑定函数时传递的参数。

```js
function list(...args) {
  return args;
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

console.log(list(1, 2, 3)); // [1, 2, 3]

console.log(addArguments(1, 2)); // 3

// 创建一个带有预设前导参数的函数
const leadingThirtySevenList = list.bind(null, 37);

// 创建一个带有预设第一个参数的函数。
const addThirtySeven = addArguments.bind(null, 37);

console.log(leadingThirtySevenList()); // [37]
console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
console.log(addThirtySeven(5)); // 42
console.log(addThirtySeven(5, 10)); // 42
//（最后一个参数 10 被忽略）
```

### 配合 setTimeout()

在默认情况下，在 {{domxref("Window.setTimeout", "setTimeout()")}} 内部，`this` 关键字将被设置为 [`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)，在浏览器中它是 {{domxref("window")}} 对象。当处理需要将 `this` 引用类实例的类方法时，你可以显式地将 `this` 绑定到回调函数，以便保持实例的引用。

```js
class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
  }
  bloom() {
    // 延迟 1 秒后宣布开花
    setTimeout(this.declare.bind(this), 1000);
  }
  declare() {
    console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
  }
}

const flower = new LateBloomer();
flower.bloom();
// 1 秒后调用“flower.declare()”
```

你还可以使用[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)来实现此目的。

```js
class LateBloomer {
  bloom() {
    // 延迟 1 秒后宣布开花
    setTimeout(() => this.declare(), 1000);
  }
}
```

### 作为构造函数使用的绑定函数

绑定函数自动适用于与 {{jsxref("Operators/new", "new")}} 运算符一起使用，以用于构造目标函数创建的新实例。当使用绑定函数是用来构造一个值时，提供的 `this` 会被忽略。然而，提供的参数仍会被插入到构造函数调用时的参数列表之前。

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

// thisArg 的值并不重要，因为它被忽略了
const YAxisPoint = Point.bind(null, 0 /*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

请注意，你无需采取任何特殊措施来创建一个绑定函数，以便与 {{jsxref("Operators/new", "new")}} 运算符一起使用。[`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)、[`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)、[`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 等都如预期工作，就好像构造函数从未被绑定一样。唯一的区别是它不能再用于 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)。

相应地，你无需采取任何特殊措施来创建一个绑定函数，使其只能以普通方式调用，即使你更希望要求只能使用 {{jsxref("Operators/new", "new")}} 来调用绑定函数。如果你在没有使用 `new` 的情况下调用它，绑定的 `this` 将不再被忽略。

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// 仍然可以作为普通函数调用
//（尽管通常这是不可取的）
YAxisPoint(13);

// 现在可以从外部观察对 `this` 的修改
console.log(emptyObj); // { x: 0, y: 13 }
```

如果你希望限制绑定函数只能使用 {{jsxref("Operators/new", "new")}} 调用，或者只能在没有使用 `new` 的情况下调用，目标函数必须强制执行该限制，例如通过检查 `new.target !== undefined` 或使用 [class](/zh-CN/docs/Web/JavaScript/Reference/Classes)。

### 绑定类

在类上使用 `bind()` 会保留大部分类的语义，只是当前类的所有静态自有属性会丢失。然而，由于原型链被保留，你仍然可以访问从父类继承的静态属性。这意味着绑定后的类实例仍然可以享受到继承自父类的静态属性的功能。

```js
class Base {
  static baseProp = "基类属性";
}

class Derived extends Base {
  static derivedProp = "派生类属性";
}

const BoundDerived = Derived.bind(null);
console.log(BoundDerived.baseProp); // "基类属性"
console.log(BoundDerived.derivedProp); // undefined
console.log(new BoundDerived() instanceof Derived); // true
```

### 将方法转换为实用函数

`bind()` 在某些情况下也非常有用，比如当你想将一个需要特定 `this` 值的方法转换为一个普通的实用函数，该函数将之前的 `this` 参数作为普通参数传入。这类似于通用实用函数的工作方式：而不是调用 `array.map(callback)`，你可以使用 `map(array, callback)`，这样可以避免修改 `Array.prototype`，并且可以在不是数组的类数组对象（比如 [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)）上使用 `map`。

以 {{jsxref("Array.prototype.slice()")}} 为例，你可以使用它将类数组对象转换为真正的数组。你可以创建一个类似下面的快捷方式：

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

请注意，你不能保存 `slice.call` 并将其作为普通函数调用，因为 `call()` 方法还会读取其应该调用的函数作为其 `this` 值。在这种情况下，你可以使用 `bind()` 来绑定 `call()` 的 `this` 值。在下面的代码片段中，`slice()` 是一个绑定了 `this` 值为 {{jsxref("Array.prototype.slice()")}} 的 {{jsxref("Function.prototype.call()")}} 的版本。这意味着可以消除额外的 `call()` 调用：

```js
// 与上一个示例中的“slice”相同
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Function.prototype.bind` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "函数", "", 1)}}
