---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
---

{{JSRef}}

**`call()`** 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

> **备注：** 该方法的语法和作用与 {{jsxref("Function.apply", "apply()")}} 方法类似，只有一个区别，就是 `call()` 方法接受的是**一个参数列表**，而 `apply()` 方法接受的是**一个包含多个参数的数组**。

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## 语法

```plain
function.call(thisArg, arg1, arg2, ...)
```

### 参数

- `thisArg`
  - : 可选的。在 _`function`_ 函数运行时使用的 `this` 值。请注意，`this`可能不是该方法看到的实际值：如果这个函数处于[非严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象，原始值会被包装。
- `arg1, arg2, ...`
  - : 指定的参数列表。

## 返回值

使用调用者提供的 `this` 值和参数调用该函数的返回值。若该方法没有返回值，则返回 `undefined`。

## 描述

`call()` 允许为不同的对象分配和调用属于一个对象的函数/方法。

`call()` 提供新的 **this** 值给当前调用的函数/方法。你可以使用 `call` 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。

## 示例

### 使用 `call` 方法调用父构造函数

在一个子构造函数中，你可以通过调用父构造函数的 `call` 方法来实现继承，类似于 `Java` 中的写法。下例中，使用 `Food` 和 `Toy` 构造函数创建的对象实例都会拥有在 `Product` 构造函数中添加的 `name` 属性和 `price` 属性，但 `category` 属性是在各自的构造函数中定义的。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

var cheese = new Food("feta", 5);
var fun = new Toy("robot", 40);
```

### 使用 `call` 方法调用匿名函数

在下例中的 `for` 循环体内，我们创建了一个匿名函数，然后通过调用该函数的 `call` 方法，将每个数组元素作为指定的 `this` 值执行了那个匿名函数。这个匿名函数的主要目的是给每个数组元素对象添加一个 `print` 方法，这个 `print` 方法可以打印出各元素在数组中的正确索引号。当然，这里不是必须得让数组元素作为 `this` 值传入那个匿名函数（普通参数就可以），目的是为了演示 `call` 的用法。

```js
var animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];

for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }).call(animals[i], i);
}
```

### 使用 `call` 方法调用函数并且指定上下文的 '`this`'

在下面的例子中，当调用 `greet` 方法的时候，该方法的`this`值会绑定到 `obj` 对象。

```js
function greet() {
  var reply = [this.animal, "typically sleep between", this.sleepDuration].join(
    " ",
  );
  console.log(reply);
}

var obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### 使用 **`call`** 方法调用函数并且不指定第一个参数（`argument`）

在下面的例子中，我们调用了 `display` 方法，但并没有传递它的第一个参数。如果没有传递第一个参数，`this` 的值将会被绑定为全局对象。

```js
var sData = "Wisen";

function display() {
  console.log("sData value is %s ", this.sData);
}

display.call(); // sData value is Wisen
```

> **备注：** 在严格模式下，`this` 的值将会是 `undefined`。见下文。

```js
"use strict";

var sData = "Wisen";

function display() {
  console.log("sData value is %s ", this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- [JavaScript 面向对象入门](/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
