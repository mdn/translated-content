---
title: 使用类
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 8c56e742169bd80f27cbc57591f6b3a00e23c873
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript 是一个基于原型的语言——一个对象的行为取决于它自身的属性及其原型的属性。但是，对[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)来说，相较于与其他面向对象的语言，譬如 Java，创建对象的多层级结构及其属性的继承关系需要更多的代码行。本节，我们将展示如何利用类创建对象。

在许多其他语言中，_类_（或构造函数）与*对象*（或实例），是两个不同的概念。在 JavaScript 中，类可以看作是已有的原型继承机制的一种抽象——所有语法都可以转换为原型继承。类本身也是不过是 JavaScript 里一种普通的值，它们有其自己的原型链。事实上，大多数 JavaScript 纯函数都可用作构造函数——你可以用 `new` 运算符来调用一个构造函数以创建出一个新的对象。

本教程中，我们将研究类模型的方方面面。如果你想深入了解底层原型系统，请参阅[继承与原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)指南。

本章节假定你已熟悉 JavaScript 并能使用常规的对象。

## 类的概述

如果你已经有动手实践过 JavaScript 的经历，或是阅读指南一路过来，你可能已经用过类了，即便你还没有自己创建过。例如，[你可能会对这个很熟悉](/zh-CN/docs/Web/JavaScript/Guide/Representing_dates_times)：

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("曾几何时……");
}
```

在第一行，我们创建了一个 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 类的实例，并将其命名为 `bigDay`。在第二行，我们在 `bigDay` 实例上调用了 [`toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) [方法](/zh-CN/docs/Glossary/Method)，其会返回一个字符串。接下来，我们对比了两个数字：一个来自于方法 [`getTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) 的返回值，另一个来自于对 `Date` 类*本身*的直接调用，本例为 [`Date.now()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now)。

`Date` 是一个 JavaScript 的内建类。从这个例子中，我们可以得到一些关于类的基本概念：

- 类通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符创建对象。
- 每个对象都有一些属性（数据或方法），这些属性是由类添加的。
- 类本身也有一些属性（数据或方法），这些属性通常用于与实例进行交互。

这些对应于类的三个关键特征：

- 构造函数；
- 实例方法和实例字段；
- 静态方法和静态字段。

## 声明一个类

类通常通过*类声明*来创建。

```js
class MyClass {
  // 类主体……
}
```

在类体内，有若干特性可用。

```js
class MyClass {
  // 构造函数
  constructor() {
    // 构造函数主体
  }
  // 实例字段
  myField = "foo";
  // 实例方法
  myMethod() {
    // myMethod 主体
  }
  // 静态字段
  static myStaticField = "bar";
  // 静态方法
  static myStaticMethod() {
    // myStaticMethod 主体
  }
  // 静态块
  static {
    // 静态初始化代码
  }
  // 字段、方法、静态字段、静态方法、静态块都可以使用“私有”形式
  #myPrivateField = "bar";
}
```

如果你用过早于 ES6 的版本，你可能更熟悉使用函数作为构造函数。上面的模式大致可以转换为以下函数构造器：

```js
function MyClass() {
  this.myField = "foo";
  // 构造函数主体
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod 主体
};
MyClass.prototype.myMethod = function () {
  // myMethod 主体
};

(function () {
  // 静态初始化代码
})();
```

> [!NOTE]
> 私有字段和方法是类中的新特性，在函数构造器中并没有与之等价的语法。

### 构造一个类

在声明一个类之后，你可以使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符来创建它的实例。

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

典型函数构造器可以使用 `new` 来构造，也可以不使用 `new` 来调用。然而，对于类的“调用”则必须使用 `new`，否则会导致错误。

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### 类声明提升

与函数声明不同，类声明并不会被[提升](/zh-CN/docs/Glossary/Hoisting)（或者，在某些解释器中，可以被提升，但是有暂时性死区的限制），这意味着你不能在声明之前使用类。

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

该行为与使用 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 和 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 声明变量类似。

### 类表达式

类似于函数，类声明也有其表达式形式。

```js
const MyClass = class {
  // 类主体……
};
```

类表达式也可以有名字。表达式的名字只在类主体内可见。

```js
const MyClass = class MyClassLongerName {
  // 类主体。这里 MyClass 和 MyClassLongerName 指向同一个类
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## 构造函数

类最重要的工作之一就是作为对象的“工厂”。例如，当我们使用 `Date` 构造函数时，我们期望它给我们一个新的对象，这个对象代表了我们传入的日期数据，而且我们可以使用该实例所暴露的其他方法来操作它。在类中，实例的创建是通过[构造函数](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)来完成的。

例如，我们创建一个名为 `Color` 的类，它代表了一个特定的颜色。用户通过传入一个 [RGB](/zh-CN/docs/Glossary/RGB) 三元组来创建颜色。

```js
class Color {
  constructor(r, g, b) {
    // 将 RGB 值作为 `this` 的属性
    this.values = [r, g, b];
  }
}
```

打开你的浏览器的开发者工具，将上面的代码粘贴到控制台中，然后创建一个实例：

```js
const red = new Color(255, 0, 0);
console.log(red);
```

你应该会看到如下输出：

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

你已经成功创建了一个 `Color` 实例，该实例有一个 `values` 属性，它是一个包含了你传入的 RGB 值的数组。这与下面的代码几乎是等价的：

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

构造函数的语法与普通函数完全相同——这意味着你可以使用其他语法，例如[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)：

```js
class Color {
  constructor(...values) {
    this.values = values;
  }
}

const red = new Color(255, 0, 0);
// 创建一个与上面等价的实例
```

每一次调用 `new` 都将创建一个新的实例。

```js
const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false
```

在类的构造函数里，`this` 的值指向新创建的实例。你可以赋予它新的属性，或者读取已有的属性（尤其是方法——我们将在下一节中介绍）。

`this` 的值将自动作为 `new` 的结果返回。不建议从构造函数中返回任何值——因为如果你返回一个非原始类型的值，它将成为 `new` 表达式的值，而 `this` 的值将被丢弃。你可以在 `new` 运算符的[描述](/zh-CN/docs/Web/JavaScript/Reference/Operators/new#描述)中阅读更多有关它的内容。

```js
class MyClass {
  constructor() {
    this.myField = "foo";
    return {};
  }
}

console.log(new MyClass().myField); // undefined
```

## 实例方法

如果一个类只有构造函数，那么它与一个只创建普通对象的 `createX` 工厂函数并没有太大的区别。然而，类的强大之处在于它们可以作为“模板”，自动将方法分配给实例。

例如，对于 `Date` 实例，你可以用一系列方法来获取日期的不同部分，例如[年份](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)、[月份](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)、[星期几](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)等等。你也可以通过 `setX` 方法来设置这些值，例如 [`setFullYear`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)。

对于我们的 `Color` 类，我们可以添加一个方法来获取红色值：

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

没有方法的帮助，你可能会尝试在构造函数内部定义该函数：

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}
```

这也是可以的。然而，这会导致每次创建 `Color` 实例时都会创建一个新的函数，即使它们都做着同样的事情！

```js
console.log(new Color().getRed === new Color().getRed); // false
```

与之相反地，如果你使用方法，它将在所有实例之间共享。一个函数可以在所有实例之间共享，且在不同实例调用时其行为也不同，因为 `this` 的值不同。你也许好奇这个方法存储在*哪里*——它被定义在所有实例的原型上，即 `Color.prototype`，详情参阅[继承与原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)。

相似地，我们也可以添加一个 `setRed` 方法来设置红色值：

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(0);
console.log(red.getRed()); // 0；此时也即黑色
```

## 私有字段

你或许会好奇：为什么我们要费心使用 `getRed` 和 `setRed` 方法，而不是直接访问实例上的 `values` 数组呢？

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
red.values[0] = 0;
console.log(red.values[0]); // 0
```

在面向对象编程中，有一个叫做“封装”的哲学。这是说你不应该访问对象的底层实现，而是使用抽象方法来与之交互。例如，如果我们突然决定将颜色表示为 [HSL](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hsl) 而不是 RGB：

```js
class Color {
  constructor(r, g, b) {
    // values 现在是一个 HSL 数组！
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.values[0]); // 0；不再是 255，因为 HSL 模型下纯红色的 H 分量为 0
```

用户对 `values` 数组代表 RGB 值的假设不再成立，这可能会打破他们的代码逻辑。因此，如果你是一个类的实现者，你应该隐藏实例的内部数据结构，以保持 API 的简洁性，并防止在你做了一些“无害的重构”时，用户代码不至于崩溃。在类中，这是通过[_私有字段_](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)来实现的。

私有字段是以 `#`（井号）开头的标识符。井号是这个字段名的必要部分，这也就意味着私有字段永远不会与公共字段或方法发生命名冲突。为了在类中的任何地方引用一个私有字段，你必须在类体中*声明*它（你不能在类体外部创建私有元素）。除此之外，私有字段与普通属性几乎是等价的。

```js
class Color {
  // 声明：每个 Color 实例都有一个名为 #values 的私有字段。
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

在类外访问私有字段会导致语法错误，且该错误可以在早期被捕获（早期语法错误）。因为 `#privateField` 是一个特殊语法，所以解释器可以在执行代码之前做一些静态分析，找到所有访问私有字段的地方。

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> 在 Chrome 控制台中运行的代码可以访问类外的私有字段，这是开发者工具针对 JavaScript 语法限制的特殊放宽。

JavaScript 中的私有字段是*硬私有*的：如果类没有实现暴露这些私有字段的方法，也就没有任何机制可以从类外访问它们。这意味着你可以对类的私有字段做任何重构，只要暴露的方法的行为保持不变即可。

在我们将 `values` 字段私有化之后，我们可以在 `getRed` 和 `setRed` 方法中添加一些逻辑，而不仅仅是简单信息传递。例如，我们可以在 `setRed` 中添加一个检查逻辑，以确保它是一个有效的 R 值：

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("无效的 R 值");
    }
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(1000); // RangeError：无效的 R 值
```

如果我们暴露 `values` 属性，我们的用户就会很容易地绕过这个检查，直接给 `values[0]` 赋值，从而创建一个无效的颜色。但是通过良好封装的 API，我们可以使我们的代码更加健壮，防止下游的逻辑错误。

类方法可以读取其他实例的私有字段，只要它们属于同一个类即可。

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    // #values 不一定要从 this 访问：
    // 你也可以访问属于同一个类的其他实例的私有字段。
    return this.#values[0] - anotherColor.#values[0];
  }
}

const red = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
red.redDifference(crimson); // 35
```

然而，若 `anotherColor` 并非一个 `Color` 实例，`#values` 将不存在（即使另一个类有一个同名的私有字段，它也不是同一个东西，也不能在这里访问）。访问一个不存在的私有字段会抛出错误，而不是像普通属性一样返回 `undefined`。如果你不知道一个对象上是否存在一个私有字段，且你希望在不使用 `try`/`catch` 来处理错误的情况下访问它，你可以使用 [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 运算符。

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    if (!(#values in anotherColor)) {
      throw new TypeError("期望 Color 实例");
    }
    return this.#values[0] - anotherColor.#values[0];
  }
}
```

> [!NOTE]
> 请记住，`#` 是一种特殊的标识符语法，你不能像字符串一样使用该字段名。`"#values" in anotherColor` 会查找一个名为 `"#values"` 的属性，而不是一个私有字段。

有一些限制在使用私有字段时需要注意：在单个类中，相同的名称不能声明两次，且它们不能被删除。这两种情况都会导致早期语法错误。

```js-nolint example-bad
class BadIdeas {
  #firstName;
  #firstName; // 这里会发生语法错误
  #lastName;
  constructor() {
    delete this.#lastName; // 也会发生语法错误
  }
}
```

方法、[getter 与 setter](#访问器字段) 也可以是私有的。当你需要类内部做一些复杂的事情，但是不希望代码的其他部分调用时，它们就很有用。

例如，想象一下创建 [HTML 自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)时，当点击、触摸等事件被激活时可能会做一些有点复杂的事情。此外，当元素被点击时发生的有点复杂的事情应该限制在这个类中，因为程序的其他部分（或者不应该）永远不会访问它。

```js
class Counter extends HTMLElement {
  #xValue = 0;
  constructor() {
    super();
    this.onclick = this.#clicked.bind(this);
  }
  get #x() {
    return this.#xValue;
  }
  set #x(value) {
    this.#xValue = value;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clicked() {
    this.#x++;
  }
  #render() {
    this.textContent = this.#x.toString();
  }
  connectedCallback() {
    this.#render();
  }
}

customElements.define("num-counter", Counter);
```

在这个例子中，几乎每个字段和方法都是私有的。因此，它向程序的其他部分提供了一个接口，这个接口与内置的 HTML 元素非常相似，而 `Counter` 的内部则不受外部影响。

## 访问器字段

`color.getRed()` 和 `color.setRed()` 允许我们读取和写入颜色的红色值。如果你熟悉像 Java 这样的语言，你会对这种模式非常熟悉。然而，在 JavaScript 中，使用方法来简单地访问属性仍然有些不便。*访问器字段*允许我们像访问“实际属性”一样操作某些东西。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
  set red(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 0
```

这就像是对象有了一个 `red` 属性——但实际上，实例上并没有这样的属性！实例只有两个方法，分别以 `get` 和 `set` 为前缀，而这使得我们可以像操作属性一样操作它们。

如果一个字段仅有一个 getter 而没有 setter，它将是只读的。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 255
```

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，`red.red = 0` 这一行将抛出类型错误：“Cannot set property red of #\<Color> which has only a getter”。在非严格模式下，赋值将被静默忽略。

## 公共字段

我们已经见过了私有字段，对应地，还有公共字段。公共字段使得实例可以获得属性，且它们常常独立于构造函数的参数。

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

公共字段几乎等价于将一个属性赋值给 `this`。例如，上面的例子也可以转换为：

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## 静态属性

在上面的 `Date` 例子中，我们还遇到了 [`Date.now()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now) 方法，它返回当前日期。这个方法不属于任何日期实例——它属于类本身。然而，它被放在 `Date` 类上，而不是作为全局的 `DateNow()` 函数，因为它在处理日期实例时最有用。

> [!NOTE]
> 一个好的习惯是给工具方法一个前缀（这也称作“命名空间”）。例如，除了旧的、没有前缀的 [`parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 方法之外，JavaScript 后来还添加了带有前缀的 [`Number.parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) 方法，以表明它是用于处理数字的。

[_静态属性_](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)是一组在类本身上定义的特性，而不是在类的实例上定义的特性。这些特性包括：

- 静态方法
- 静态字段
- 静态 getter 与 setter

可见，我们之前见过的所有类的特性都有其静态版本。例如，对于我们的 `Color` 类，我们可以创建一个静态方法，它检查给定的三元组是否是有效的 RGB 值：

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

静态属性与实例属性的区别在于：

- 它们有 `static` 前缀，且
- 它们不能从实例中访问。

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

有一个特殊结构叫做[_静态初始化块_](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)，它是一个在类第一次加载时运行的代码块。

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

静态初始化块几乎等价于在类声明之后立即执行一些代码。唯一的区别是它们可以访问静态私有元素。

## 扩展与继承

类的一个关键特性（除了私有字段）是*继承*，这意味着一个对象可以“借用”另一个对象的大部分行为，同时覆盖或增强某些部分的逻辑。

例如，假定我们需要为 `Color` 类引入透明度支持。我们可能会尝试添加一个新的字段来表示它的透明度：

```js
class Color {
  #values;
  constructor(r, g, b, a = 1) {
    this.#values = [r, g, b, a];
  }
  get alpha() {
    return this.#values[3];
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha 值必须在 0 与 1 之间");
    }
    this.#values[3] = value;
  }
}
```

然而，这意味着每个实例——即使是大多数不透明的实例（那些 alpha 值为 1 的实例）——都必须有额外的 alpha 值，这并不是很优雅。此外，如果特性继续增长，我们的 `Color` 类将变得非常臃肿且难以维护。

所以，在面向对象编程中，我们更愿意创建一个*派生类*。派生类可以访问父类的所有公共属性。在 JavaScript 中，派生类是通过 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends) 子句声明的，它指示它扩展自哪个类。

```js
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha 值必须在 0 与 1 之间");
    }
    this.#alpha = value;
  }
}
```

有一些事情需要注意。首先，在构造函数中，我们调用了 `super(r, g, b)`。在访问 `this` 之前，必须调用 [`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super)，这是 JavaScript 的要求。`super()` 调用父类的构造函数来初始化 `this`——这里大致相当于 `this = new Color(r, g, b)`。`super()` 之前也可以有代码，但你不能在 `super()` 之前访问 `this`——JavaScript 会阻止你访问未初始化的 `this`。

在父类完成对 `this` 的修改后，派生类才可以对其进行自己的逻辑。这里我们添加了一个名为 `#alpha` 的私有字段，并提供了一对 getter/setter 来与之交互。

派生类会继承父类的所有方法。例如，考虑我们为[访问器字段](#访问器字段)部分中的 `Color` 添加的 `get red()` 访问器——即使我们没有在 `ColorWithAlpha` 中声明它，我们仍然可以访问 `red`，因为这个行为是由父类指定的：

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

派生类也可以覆盖父类的方法。例如，所有类都隐式继承自 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 类，它定义了一些基本方法，例如 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)。然而，基本的 `toString()` 方法是出了名的无用方法，因为它在大多数情况下打印 `[object Object]`：

```js
console.log(red.toString()); // [object Object]
```

所以，我们可以覆盖它，以便在打印颜色时打印它的 RGB 值：

```js
class Color {
  #values;
  // …
  toString() {
    return this.#values.join(", ");
  }
}

console.log(new Color(255, 0, 0).toString()); // '255, 0, 0'
```

在派生类内，你可以使用 `super` 访问父类的方法。这允许你可以在避免代码重复的情况下增强父类的方法。

```js
class ColorWithAlpha extends Color {
  #alpha;
  // …
  toString() {
    // 调用父类的 toString()，并以此构建新的返回值
    return `${super.toString()}, ${this.#alpha}`;
  }
}

console.log(new ColorWithAlpha(255, 0, 0, 0.5).toString()); // '255, 0, 0, 0.5'
```

当你用 `extends` 时，静态方法也会继承，因此你也可以覆盖或增强它们。

```js
class ColorWithAlpha extends Color {
  // ...
  static isValid(r, g, b, a) {
    // 调用父类的 isValid()，并在此基础上增强返回值
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

派生类无权访问父类的私有字段——这是 JavaScript 私有字段的一个关键特性（“硬私有”）。私有字段的有效范围被严格限制在类体内，所以*任何*外部代码都无权访问。

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

一个类只能至多扩展自一个父类。这可以防止多重继承中的问题，例如[菱形问题](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem)。然而，由于 JavaScript 的动态性，仍然可以通过类组合和[混入](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends#混入)来实现多重继承的效果。

派生类的实例同时也是父类的实例，可用 [`instancesof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符来验证。

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## 为什么用类？

本指南到目前为止一直很实用：我们专注于*如何*使用类，但有一个问题尚未解答：*为什么*要使用类？答案是：视情况而定。

类引入了一种*范式*，或者说是一种组织代码的方式。类是面向对象编程的基础，而面向对象编程是建立在诸如[继承](<https://zh.wikipedia.org/wiki/继承_(计算机科学)>)和[多态](<https://zh.wikipedia.org/wiki/继承_(计算机科学)>)（特别是*子类型多态*）等概念之上的。然而，许多人在哲学上反对某些面向对象编程的做法，因此不使用类。

例如，`Date` 对象的一个令人厌恶的特性是它是*可变的*。

```js
function incrementDay(date) {
  return date.setDate(date.getDate() + 1);
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// 旧日期也被修改了！？
console.log(date); // 2019-06-20
```

可变性与内部状态是面向对象编程的重要方面，但通常会使代码难以理解——因为任何看似无害的操作都可能产生意想不到的副作用，并改变程序中其他部分的行为。

为了代码的可重复利用，我们通常会求助于扩展类，但这也会导致类的层次结构与继承关系变得复杂。

![一个典型 OOP 继承树，有五个类和三个层级](figure8.1.png)

然而，当一个类只能继承另一个类时，往往难以清晰地描述这种继承关系。一种常见的情况是，我们想要同时拥有来自多个类的行为。在 Java 中，我们可以利用接口；在 JavaScript 中，我们可以利用混入。但归根结底，仍不是很方便。

往好的方面想，类是一种非常强大的工具，我们可以利用它提高我们组织代码的层次。例如，如若没有 `Color` 类，我们可能需要创建一堆工具函数：

```js
function isRed(color) {
  return color.red === 255;
}
function isValidColor(color) {
  return (
    color.red >= 0 &&
    color.red <= 255 &&
    color.green >= 0 &&
    color.green <= 255 &&
    color.blue >= 0 &&
    color.blue <= 255
  );
}
// ...
```

但利用类，我们可以将它们组织入 `Color` 命名空间内，这提高了代码的可读性。此外，私有字段允许我们隐藏内部数据结构，这使得我们可以在不破坏 API 的情况下对其进行重构。

简而言之，你应该在你想要储存一些内部数据、并暴露大量方法的时候考虑使用类。例如这些内置的 JavaScript 类：

- [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 与 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 类存储了元素的集合，你可以通过 `get()`、`set()`、`has()` 等方法访问它们。
- [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 类以 Unix 时间戳的形式存储日期，并允许你格式化、更新与读取单独的日期元素。
- [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 类存储了特定异常的信息，包括错误消息、堆栈跟踪、原因等。它是少数几个拥有丰富继承结构的类之一：有多个内置类（例如 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 与 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)）继承自 `Error`。在发生错误时，这种继承允许细化错误的语义：每个错误类都代表一个特定类型的错误，可以很容易地通过 [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 进行检查。

JavaScript 提供了以面向对象的方式组织代码的能力，但是否并如何使用它完全取决于程序员的判断。

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
