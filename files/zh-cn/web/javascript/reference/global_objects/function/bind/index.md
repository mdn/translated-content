---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
---

{{JSRef}}

**`bind()`** 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## 语法

```plain
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

### 参数

- `thisArg`
  - : 调用绑定函数时作为 `this` 参数传递给目标函数的值。如果使用{{jsxref("Operators/new", "new")}}运算符构造绑定函数，则忽略该值。当使用 `bind` 在 `setTimeout` 中创建一个函数（作为回调提供）时，作为 `thisArg` 传递的任何原始值都将转换为 `object`。如果 `bind` 函数的参数列表为空，或者`thisArg`是`null`或`undefined`，执行作用域的 `this` 将被视为新函数的 `thisArg`。
- `arg1, arg2, ...`
  - : 当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

### 返回值

返回一个原函数的拷贝，并拥有指定的 **`this`** 值和初始参数。

## 描述

**bind()** 函数会创建一个新的**绑定函数**（**bound function**，BF）。绑定函数是一个 exotic function object（怪异函数对象，ECMAScript 2015 中的术语），它包装了原函数对象。调用**绑定函数**通常会导致执行**包装函数**。
**绑定函数**具有以下内部属性：

- **\[\[BoundTargetFunction]]** - 包装的函数对象
- **\[\[BoundThis]]** - 在调用包装函数时始终作为 **this** 值传递的值。
- **\[\[BoundArguments]]** - 列表，在对包装函数做任何调用都会优先用列表元素填充参数列表。
- **\[\[Call]]** - 执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个**this**值和一个包含通过调用表达式传递给函数的参数的列表。

当调用绑定函数时，它调用 **\[\[BoundTargetFunction]]** 上的内部方法 **\[\[Call]]**，就像这样 **Call(_boundThis_, _args_)**。其中，**boundThis** 是 **\[\[BoundThis]]**，**args** 是 **\[\[BoundArguments]]** 加上通过函数调用传入的参数列表。

绑定函数也可以使用 {{jsxref("Operators/new", "new")}} 运算符构造，它会表现为目标函数已经被构建完毕了似的。提供的 `this` 值会被忽略，但前置参数仍会提供给模拟函数。

## 示例

### 创建绑定函数

`bind()` 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 **`this`** 值。JavaScript 新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，期望方法中的 `this` 是原来的对象（比如在回调中传入这个方法）。如果不做特殊处理的话，一般会丢失原来的对象。基于这个函数，用原始的对象创建一个绑定函数，巧妙地解决了这个问题：

```js
this.x = 9; // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

### 偏函数

`bind()` 的另一个最简单的用法是使一个函数拥有预设的初始参数。只要将这些参数（如果有的话）作为 `bind()` 的参数写在 `this` 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.bind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]

var result2 = addThirtySeven(5);
// 37 + 5 = 42

var result3 = addThirtySeven(5, 10);
// 37 + 5 = 42，第二个参数被忽略
```

### 配合 `setTimeout`

在默认情况下，使用 {{ domxref("window.setTimeout()") }} 时，`this` 关键字会指向 {{ domxref("window") }}（或 `global`）对象。当类的方法中需要 `this` 指向类的实例时，你可能需要显式地把 `this` 绑定到回调函数，就不会丢失该实例的引用。

```js
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 在 1 秒钟后声明 bloom
LateBloomer.prototype.bloom = function () {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};

var flower = new LateBloomer();
flower.bloom(); // 一秒钟后，调用 'declare' 方法
```

### 作为构造函数使用的绑定函数

> **警告：** 这部分演示了 JavaScript 的能力并且记录了 `bind()` 的超前用法。以下展示的方法并不是最佳的解决方案，且可能不应该用在任何生产环境中。

绑定函数自动适应于使用 {{jsxref("Operators/new", "new")}} 操作符去构造一个由目标函数创建的新实例。当一个绑定函数是用来构建一个值的，原来提供的 `this` 就会被忽略。不过提供的参数列表仍然会插入到构造函数调用时的参数列表之前。

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// 本页下方的 polyfill 不支持运行这行代码，
// 但使用原生的 bind 方法运行是没问题的：

var YAxisPoint = Point.bind(null, 0 /*x*/);

/*（译注：polyfill 的 bind 方法中，如果把 bind 的第一个参数加上，
即对新绑定的 this 执行 Object(this)，包装为对象，
因为 Object(null) 是 {}，所以也可以支持）*/

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

请注意，你不需要做特别的处理就可以创建一个和 {{jsxref("Operators/new", "new")}} 操作符一起使用的绑定函数。也就是说，你不需要做特别处理就可以创建一个可以被直接调用的绑定函数，即使你更希望绑定函数是用 {{jsxref("Operators/new", "new")}} 操作符来调用。

```js
// ...接着上面的代码继续的话，
// 这个例子可以直接在你的 JavaScript 控制台运行

// 仍然能作为一个普通函数来调用
//（即使通常来说这个不是被期望发生的）
YAxisPoint(13);

emptyObj.x + "," + emptyObj.y; //  '0,13'
```

如果你希望一个绑定函数要么只能用 {{jsxref("Operators/new", "new")}} 操作符，要么只能直接调用，那你必须在目标函数上显式规定这个限制。

### 快捷调用

在你想要为一个需要特定的 **`this`** 值的函数创建一个捷径（shortcut）的时候，`bind()` 也很好用。

你可以用 {{jsxref("Array.prototype.slice")}} 来将一个类似于数组的对象（array-like object）转换成一个真正的数组，就拿它来举例子吧。你可以简单地这样写：

```js
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

用 `bind()`可以使这个过程变得简单。在下面这段代码里面，`slice` 是 {{jsxref("Function.prototype")}} 的 {{jsxref("Function.prototype.apply()", "apply()")}} 方法的绑定函数，并且将 {{jsxref("Array.prototype")}} 的 {{jsxref("Array.prototype.slice()", "slice()")}} 方法作为 **`this`** 的值。这意味着我们压根儿用不着上面那个 `apply()`调用了。

```js
// 与前一段代码的 "slice" 效果相同
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- `Function.prototype.bind` 的 polyfill 可以参考 [core-js](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "函数")}}
