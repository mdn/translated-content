---
title: 闭包
slug: Web/JavaScript/Closures
l10n:
  sourceCommit: 2463abc1ca0fb6588d182651f8f659ae0d618915
---

{{jsSidebar("Intermediate")}}

**闭包**是捆绑起来（封闭的）的函数和函数周围状态（**词法环境**）的引用的组合。换而言之，闭包让函数能访问它的外部作用域。在 JavaScript 中，闭包会随着函数的创建而同时创建。

## 词法作用域

请看下面的示例代码：

```js
function init() {
  var name = "Mozilla"; // name 是 init 创建的局部变量
  function displayName() {
    // displayName() 是内部函数，它形成一个闭包
    alert(name); // 使用父函数中声明的变量
  }
  displayName();
}
init();
```

`init()` 创建了一个局部变量 `name` 和一个名为 `displayName()` 的函数。`displayName()` 是定义在 `init()` 里的内部函数，并且仅在 `init()` 函数体内可用。请注意，`displayName()` 没有自己的局部变量。然而，因为它可以访问到外部作用域的变量，所以 `displayName()` 可以使用父函数 `init()` 中声明的变量 `name`。

使用[这个 JSFiddle 链接](https://jsfiddle.net/3dxck52m/)运行该代码后发现，`displayName()` 函数成功显示了变量 `name` 的值（该变量在其父函数中声明）。这个*词法作用域*的例子描述了解析器在函数嵌套的情况下解析变量名的方式。*词法（lexical）*一词指的是，词法作用域根据源代码中声明变量的位置来确定该变量在何处可用。嵌套函数可访问在它们外部作用域中声明的变量。

### let 作用域和 const 作用域

传统上（ES 6 之前），JavaScript 变量仅有两种类型的作用域：*函数作用域*和*全局作用域*。用 `var` 声明的变量要么属于函数作用域要么属于全局作用域，这取决于变量是在函数内声明的还是在函数外声明的。这可能有些棘手，因为带花括号的块并不会创建作用域：

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

对于来自块会创建作用域的其他语言（如 C、Java）的开发者而言，上面的代码应该在 `console.log` 这一行抛出一个错误，因为我们在任意一个块中的 `x` 的作用域的外边。然而，因为块不会为 `var` 创建作用域，这里的 `var` 语句实际上创建的是全局作用域。下面也介绍了一个[实际的例子](#在循环中创建闭包一个常见错误)，解释在和闭包结合时，这个特性如何造成真实的问题。

在 ES 6 中，JavaScript 引入了 `let` 和 `const` 声明，这些声明围绕在诸如[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)的其他东西之中，会创建块级作用域的变量。

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

本质上，ES 6 最终将块当作作用域，但仅当你使用 `let` 或 `const` 声明变量，ES 6 中引入的[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)引入了另一种作用域。闭包能够捕获所有这些作用域中的变量，稍后我们会介绍这些情形。

## 闭包

现在来考虑以下例子：

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

运行这段代码的效果和之前 `init()` 函数的示例完全一样。其中不同的地方（也是有意思的地方）在于内部函数 `displayName()` _在执行前_，从外部函数返回。

第一眼看上去，也许不能直观地看出这段代码能够正常运行。在一些编程语言中，一个函数中的局部变量仅存在于此函数的执行期间。一旦 `makeFunc()` 执行完毕，你可能会认为 `name` 变量将不能再被访问。然而，因为代码仍按预期运行，所以在 JavaScript 中情况显然与此不同。

原因在于，JavaScript 中的函数会形成了闭包。 *闭包*是由函数以及声明该函数的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。在本例子中，`myFunc` 是执行 `makeFunc` 时创建的 `displayName` 函数实例的引用。`displayName` 的实例维持了一个对它的词法环境（变量 `name` 存在于其中）的引用。因此，当 `myFunc` 被调用时，变量 `name` 仍然可用，其值 `Mozilla` 就被传递到`alert`中。

下面是一个更有意思的示例 — 一个 `makeAdder` 函数：

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

在这个示例中，我们定义了 `makeAdder(x)` 函数，它接受一个参数 `x` ，并返回一个新的函数。返回的函数接受一个参数 `y`，并返回`x+y`的值。

从本质上讲，`makeAdder` 是一个函数工厂 — 他创建了将指定的值和它的参数相加求和的函数。在上面的示例中，我们使用函数工厂创建了两个新函数 — 一个将其参数和 5 求和，另一个和 10 求和。

`add5` 和 `add10` 都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在 `add5` 的环境中，`x` 为 5。而在 `add10` 中，`x` 则为 10。

## 实用的闭包

闭包很有用，因为它允许将数据（词法环境）与运算数据的函数关联起来。这显然类似于面向对象编程。在面向对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。

因此，通常你使用只有一个方法的对象的地方，都可以使用闭包。

在 Web 中，你想要这样做的情况特别常见。大部分我们所写的 JavaScript 代码都是基于事件的 — 定义某种行为，然后将其添加到用户触发的事件之上（比如点击或者按键）。我们的代码通常作为回调：为响应事件而执行的函数。

假如，我们想在页面上添加一些可以调整字号的按钮。一种方法是以像素为单位指定 `body` 元素的 `font-size`，然后通过相对的 `em` 单位设置页面中其他元素（例如`header`）的字号：

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

我们的文本尺寸调整按钮可以修改 `body` 元素的 `font-size` 属性，由于我们使用相对单位，页面中的其他元素也会相应地调整。

以下是 JavaScript：

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`，`size14` 和 `size16` 三个函数将分别把 `body` 文本调整为 12，14，16 像素。我们可以将它们分别添加到按钮的点击事件上。如下所示：

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

用 [JSFiddle](https://jsfiddle.net/hotae160/) 运行这段代码。

## 用闭包模拟私有方法

像 Java 这样的编程语言是支持将方法声明为私有的，即它们只能被同一个类中的其他方法所调用。

而 JavaScript 没有这种原生支持，但我们可以使用闭包来模拟私有方法。私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。

下面的示例展现了如何使用闭包来定义公共函数，并令其可以访问私有函数和变量。这个方式也称为[模块模式（module pattern）](http://www.google.com/search?q=javascript+module+pattern)：

```js
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

在之前的示例中，每个闭包都有它自己的词法环境；而这次我们只创建了一个词法环境，为三个函数所共享：`Counter.increment`，`Counter.decrement` 和 `Counter.value`。

该共享环境创建于一个立即执行的匿名函数体内。这个环境中包含两个私有项：名为 `privateCounter` 的变量和名为 `changeBy` 的函数。这两项都无法在这个匿名函数外部直接访问。必须通过匿名函数返回的三个公共函数访问。

这三个公共函数是共享同一个环境的闭包。多亏 JavaScript 的词法作用域，它们都可以访问 `privateCounter` 变量和 `changeBy` 函数。

> [!NOTE]
> 你应该注意到我们定义了一个匿名函数，用于创建一个计数器。我们立即执行了这个匿名函数，并将他的值赋给了变量`Counter`。我们可以把这个函数储存在另外一个变量`makeCounter`中，并用他来创建多个计数器。

```js
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
```

请注意两个计数器 `Counter1` 和 `Counter2` 是如何维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 `privateCounter` 。

每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。

> [!NOTE]
> 以这种方式使用闭包，提供了许多与面向对象编程相关的好处——特别是数据隐藏和封装。

## 闭包作用域链

嵌套函数能访问的外部函数的作用域包括外部函数包围的作用域——高效地形成一条函数作用域链。阐释，consider 下面地示例代码：

```js
// 全局作用域
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // 外部函数作用域
      return function (d) {
        // 局部作用域
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

你也可以不用匿名函数：

```js
// 全局作用域
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // 外部函数作用域
      return function sum4(d) {
        // 局部作用域
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
```

在上面地示例中，有一系列地嵌套函数，所有地嵌套函数都能访问外部函数地作用域。在这个上下文中，我们说闭包能访问*全部*的外部作用域。

闭包也能捕获块作用域和模块作用域中的变量。例如，下面的示例创建了一个块级作用域变量 `y` 上的闭包：

```js
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();
```
模块上的闭包更有趣。

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

这里，模块导出一对 getter-setter 函数，它们包住了模块作用域变量 `x`。即使在 `x` 不能从其他模块中直接访问，它也能通过函数进行读写。

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

闭包也能包住导入的值，这称为*实时 {{Glossary("binding", "绑定")}}*，因为在原始值变化时，导入值也相应地变化。

```js
// myModule.js
export let x = 1;
export const setX = (val) => {
  x = val;
};
```

```js
// closureCreator.js
import { x } from "./myModule.js";

export const getX = () => x; // 包住导入的实时绑定
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## 在循环中创建闭包：一个常见错误

在 ECMAScript 2015 引入 [`let` 关键字](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 之前，在循环中有一个常见的闭包创建问题。参考下面的示例：

```html
<p id="help">Helpful notes will appear here</p>
<p>Email: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // Culprit is the use of `var` on this line
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/51brm6ps/", "", 200)}}

数组 `helpText` 中定义了三个有用的提示信息，每一个都关联于对应的文档中的 `input` 的 ID。通过循环这三项定义，依次为相应 `input` 添加了一个 `onfocus` 事件处理函数，以便显示帮助信息。

运行这段代码后，你会发现它没有达到想要的效果。无论焦点在哪个 `input` 上，显示的都是关于年龄的信息。

原因是赋值给 `onfocus` 的是闭包。这些闭包是由他们的函数定义和在 `setupHelp` 作用域中捕获的环境所组成的。这三个闭包在循环中被创建，但他们共享了同一个词法作用域，在这个作用域中存在一个变量 item。这是因为变量 `item` 使用 `var` 进行声明，由于变量提升，所以具有函数作用域。当 `onfocus` 的回调执行时，`item.help` 的值被决定。由于循环在事件触发之前早已执行完毕，变量对象 `item`（被三个闭包所共享）已经指向了 `helpText` 的最后一项。

解决这个问题的一种方案是使用更多的闭包：特别是使用前面所述的函数工厂：

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/12185/", "", 300)}}

这段代码可以如我们所期望的那样工作。所有的回调不再共享同一个环境， `makeHelpCallback` 函数为每一个回调创建一个新的词法环境。在这些环境中，`help` 指向 `helpText` 数组中对应的字符串。

另一种方法使用了匿名闭包：

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();
```

如果不想使用过多的闭包，你可以用 ES2015 引入的 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 或 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 关键词：

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

这个例子使用 `const` 而不是 `var`，因此每个闭包都绑定了块作用域的变量，这意味着不再需要额外的闭包。

另一个可选方案是使用 `forEach()` 来遍历 `helpText` 数组并给每一个 [`<input>`](/zh-CN/docs/Web/HTML/Element/input) 添加一个监听器，如下所示：

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

## 性能考量

如果不是某些特定任务需要使用闭包，在其他函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是说，对于每个对象的创建，方法都会被重新赋值）。

考虑以下示例：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

在上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName() {
    return this.name;
  },
  getMessage() {
    return this.message;
  },
};
```

但我们不建议重新定义原型。可改成如下例子：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

在前面的两个示例中，继承的原型可以为所有对象共享，不必在每一次创建对象时定义方法。参见 [继承和原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 一章可以了解更为详细的信息。
