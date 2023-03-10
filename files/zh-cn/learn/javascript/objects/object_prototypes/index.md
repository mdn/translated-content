---
title: 对象原型
slug: Learn/JavaScript/Objects/Object_prototypes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}

通过原型这种机制，JavaScript 中的对象从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言的继承机制不同。本文将探讨这些差别，解释原型链如何工作，并了解如何通过 `prototype` 属性向已有的构造器添加方法

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机素养，对 HTML 和 CSS 有基本的理解，熟悉 JavaScript
        基础（参见
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">JavaScript 第一步</a>和
        <a href="/zh-CN/docs/Learn/JavaScript/Building_blocks"
          >创建 JavaScript 代码块</a
        >）以及面向对象的 JavaScript (OOJS) 基础（参见
        <a href="/zh-CN/docs/Learn/JavaScript/Object/Basics"
          >面向对象编程基本概念</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        理解 JavaScript 对象原型、原型链如何工作、如何向
        <code>prototype</code> 属性添加新的方法。
      </td>
    </tr>
  </tbody>
</table>

## 基于原型的语言？

JavaScript 常被描述为一种**基于原型的语言 (prototype-based language)**——每个对象拥有一个**原型对象**，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为**原型链 (prototype chain)**，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

准确地说，这些属性和方法定义在 Object 的构造器函数 (constructor functions) 之上的`prototype`属性上，而非对象实例本身。

在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是\_\_proto\_\_属性，是从构造函数的`prototype`属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

> **备注：** 理解对象的原型（可以通过 [`Object.getPrototypeOf(obj)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)或者已被弃用的[`__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)属性获得）与构造函数的 `prototype` 属性之间的区别是很重要的。前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，`Object.getPrototypeOf(new Foobar())` 和 `Foobar.prototype` 指向着同一个对象。

以上描述很抽象；我们先看一个例子。

## 使用 Javascript 中的原型

在 javascript 中，函数可以有属性。每个函数都有一个特殊的属性叫作**原型（prototype）**，正如下面所展示的。请注意，下面的代码是独立的一段 (在网页中没有其他代码的情况下，这段代码是安全的)。为了最好的学习体验，你最好打开一个控制台 (在 Chrome 和 Firefox 中，可以按 Ctrl+Shift+I 来打开) 切换到"控制台" 选项卡，复制粘贴下面的 JavaScript 代码，然后按回车来运行。

```js
function doSomething(){}
console.log( doSomething.prototype );
// It does not matter how you declare the function, a
//  function in javascript will always have a default
//  prototype property.
var doSomething = function(){};
console.log( doSomething.prototype );
```

正如上面所看到的，`doSomething` 函数有一个默认的原型属性，它在控制台上面呈现了出来。运行这段代码之后，控制台上面应该出现了像这样的一个对象。

```js
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

现在，我们可以添加一些属性到 doSomething 的原型上面，如下所示。

```js
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
```

结果：

```js
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

然后，我们可以使用 new 运算符来在现在的这个原型基础之上，创建一个 `doSomething` 的实例。正确使用 new 运算符的方法就是在正常调用函数时，在函数名的前面加上一个 `new` 前缀。通过这种方法，在调用函数前加一个 `new` ，它就会返回一个这个函数的实例化对象。然后，就可以在这个对象上面添加一些属性。看。

```js
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );
```

结果：

```js
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

就像上面看到的，`doSomeInstancing` 的 `__proto__` 属性就是`doSomething.prototype`. 但是这又有什么用呢？好吧，当你访问 `doSomeInstancing` 的一个属性，浏览器首先查找 `doSomeInstancing` 是否有这个属性。如果 `doSomeInstancing` 没有这个属性，然后浏览器就会在 `doSomeInstancing` 的 `__proto__` 中查找这个属性 (也就是 doSomething.prototype). 如果 doSomeInstancing 的 `__proto__` 有这个属性，那么 doSomeInstancing 的 `__proto__` 上的这个属性就会被使用。否则，如果 doSomeInstancing 的 `__proto__` 没有这个属性，浏览器就会去查找 doSomeInstancing 的 `__proto__` 的 `__proto__` ，看它是否有这个属性。默认情况下，所有函数的原型属性的 `__proto__` 就是 `window.Object.prototype`. 所以 doSomeInstancing 的 `__proto__` 的 `__proto__` (也就是 doSomething.prototype 的 `__proto__` (也就是 `Object.prototype`)) 会被查找是否有这个属性。如果没有在它里面找到这个属性，然后就会在 doSomeInstancing 的 `__proto__` 的 `__proto__` 的 `__proto__` 里面查找。然而这有一个问题：doSomeInstancing 的 `__proto__` 的 `__proto__` 的 `__proto__` 不存在。最后，原型链上面的所有的 `__proto__` 都被找完了，浏览器所有已经声明了的 `__proto__` 上都不存在这个属性，然后就得出结论，这个属性是 `undefined`.

```js
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
```

结果：

```js
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## 理解原型对象

让我们回到 `Person()` 构造器的例子。请把这个例子载入浏览器。如果你还没有看完上一篇文章并写好这个例子，也可以使用 [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) 中的例子（亦可参考[源代码](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)）。

本例中我们将定义一个构造器函数：

```js
function Person(first, last, age, gender, interests) {

  // 属性与方法定义

};
```

然后创建一个对象实例：

```js
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```

在 JavaScript 控制台输入 "`person1.`"，你会看到，浏览器将根据这个对象的可用的成员名称进行自动补全：

![](object-available-members.png)

在这个列表中，你可以看到定义在 `person1` 的原型对象、即 `Person()` 构造器中的成员—— `name`、`age`、`gender`、`interests`、`bio`、`greeting`。同时也有一些其他成员—— `watch`、`valueOf` 等等——这些成员定义在 `Person()` 构造器的原型对象、即 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 之上。下图展示了原型链的运作机制。

![](mdn-graphics-person-person-object-2.png)

那么，调用 `person1` 的“实际定义在 `Object` 上”的方法时，会发生什么？比如：

```js
person1.valueOf()
```

这个方法仅仅返回了被调用对象的值。在这个例子中发生了如下过程：

- 浏览器首先检查，`person1` 对象是否具有可用的 `valueOf()` 方法。
- 如果没有，则浏览器检查 `person1` 对象的原型对象（即 `Person`构造函数的 prototype 属性所指向的对象）是否具有可用的 `valueof()` 方法。
- 如果也没有，则浏览器检查 `Person()` 构造函数的 prototype 属性所指向的对象的原型对象（即 `Object`构造函数的 prototype 属性所指向的对象）是否具有可用的 `valueOf()` 方法。这里有这个方法，于是该方法被调用。

> **备注：** 必须重申，原型链中的方法和属性**没有**被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。

> **备注：** 没有官方的方法用于直接访问一个对象的原型对象——原型链中的“连接”被定义在一个内部属性中，在 JavaScript 语言标准中用 `[[prototype]]` 表示（参见 {{glossary("ECMAScript")}}）。然而，大多数现代浏览器还是提供了一个名为 [`__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) （前后各有 2 个下划线）的属性，其包含了对象的原型。你可以尝试输入 `person1.__proto__` 和 `person1.__proto__.__proto__`，看看代码中的原型链是什么样的！

## prototype 属性：继承成员被定义的地方

那么，那些继承的属性和方法在哪儿定义呢？如果你查看 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 参考页，会发现左侧列出许多属性和方法——大大超过我们在 `person1` 对象中看到的继承成员的数量。某些属性或方法被继承了，而另一些没有——为什么呢？

原因在于，继承的属性和方法是定义在 `prototype` 属性之上的（你可以称之为子命名空间 (sub namespace) ）——那些以 `Object.prototype.` 开头的属性，而非仅仅以 `Object.` 开头的属性。`prototype` 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。

于是 `Object.prototype.watch()、`[`Object.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) 等等成员，适用于任何继承自 `Object()` 的对象类型，包括使用构造器创建的新的对象实例。

[`Object.is()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)、[`Object.keys()`](zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)，以及其他不在 `prototype` 对象内的成员，不会被“对象实例”或“继承自 `Object()` 的对象类型”所继承。这些方法/属性仅能被 `Object()` 构造器自身使用。

> **备注：** 这看起来很奇怪——构造器本身就是函数，你怎么可能在构造器这个函数中定义一个方法呢？其实函数也是一个对象类型，你可以查阅 [`Function()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 构造器的参考文档以确认这一点。

1. 你可以检查已有的 `prototype` 属性。回到先前的例子，在 JavaScript 控制台输入：

    ```js
    Person.prototype
    ```

2. 输出并不多，毕竟我们没有为自定义构造器的原型定义任何成员。缺省状态下，构造器的 `prototype` 属性初始为空白。现在尝试：

    ```js
    Object.prototype
    ```

你会看到 `Object` 的 `prototype` 属性上定义了大量的方法；如前所示，继承自 `Object` 的对象都可以使用这些方法。

JavaScript 中到处都是通过原型链继承的例子。比如，你可以尝试从 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)、[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)、[`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 和 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 全局对象的原型中寻找方法和属性。它们都在原型上定义了一些方法，因此当你创建一个字符串时：

```js
var myString = 'This is my string.';
```

`myString` 立即具有了一些有用的方法，如 [`split()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)、[`indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)、[`replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 等。

> **警告：** `prototype` 属性大概是 JavaScript 中最容易混淆的名称之一。你可能会认为，`this` 关键字指向当前对象的原型对象，其实不是（还记得么？原型对象是一个内部对象，应当使用 `__proto__` 访问）。`prototype` 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。

**create()**

我们曾经讲过如何用 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 方法创建新的对象实例。

1. 例如，在上个例子的 JavaScript 控制台中输入：

    ```js
    var person2 = Object.create(person1);
    ```

2. `create()` 实际做的是从指定原型对象创建一个新的对象。这里以 `person1` 为原型对象创建了 `person2` 对象。在控制台输入：

    ```js
    person2.__proto__
    ```

结果返回对象`person1`。

## constructor 属性

每个实例对象都从原型中继承了一个 constructor 属性，该属性指向了用于构造此实例对象的构造函数。

1. 例如，在控制台中尝试下面的指令：

    ```js
    person1.constructor
    person2.constructor
    ```

    都将返回 `Person()` 构造器，因为该构造器包含这些实例的原始定义。

    一个小技巧是，你可以在 `constructor` 属性的末尾添加一对圆括号（括号中包含所需的参数），从而用这个构造器创建另一个对象实例。毕竟构造器是一个函数，故可以通过圆括号调用；只需在前面添加 `new` 关键字，便能将此函数作为构造器使用。

2. 在控制台中输入：

    ```js
    var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
    ```

3. 现在尝试访问新建对象的属性，例如：

    ```js
    person3.name.first
    person3.age
    person3.bio()
    ```

正常工作。通常你不会去用这种方法创建新的实例；但如果你刚好因为某些原因没有原始构造器的引用，那么这种方法就很有用了。

此外，[`constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 属性还有其他用途。比如，想要获得某个对象实例的构造器的名字，可以这么用：

```js
instanceName.constructor.name
```

具体地，像这样：

```js
person1.constructor.name
```

## 修改原型

从我们从下面这个例子来看一下如何修改构造器的 `prototype` 属性。

1. 回到 [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) 的例子，在本地为[源代码](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)创建一个副本。在已有的 JavaScript 的末尾添加如下代码，这段代码将为构造器的 `prototype` 属性添加一个新的方法：

    ```js
    Person.prototype.farewell = function() {
      alert(this.name.first + ' has left the building. Bye for now!');
    }
    ```

2. 保存代码，在浏览器中加载页面，然后在控制台输入：

    ```js
    person1.farewell();
    ```

你会看到一条警告信息，其中还显示了构造器中定义的人名；这很有用。但更关键的是，整条继承链动态地更新了，任何由此构造器创建的对象实例都自动获得了这个方法。

再想一想这个过程。我们的代码中定义了构造器，然后用这个构造器创建了一个对象实例，*此后*向构造器的 `prototype` 添加了一个新的方法：

```js
function Person(first, last, age, gender, interests) {

  // 属性与方法定义

};

var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
```

但是 `farewell()` 方法*仍然*可用于 `person1` 对象实例——旧有对象实例的可用功能被自动更新了。这证明了先前描述的原型链模型。这种继承模型下，上游对象的方法不会复制到下游的对象实例中；下游对象本身虽然没有定义这些方法，但浏览器会通过上溯原型链、从上游对象中找到它们。这种继承模型提供了一个强大而可扩展的功能系统。

> **备注：** 如果运行样例时遇到问题，请参阅 [oojs-class-prototype.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-prototype.html) 样例（也可查看[即时运行](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-prototype.html)）。

你很少看到属性定义在 prototype 属性中，因为如此定义不够灵活。比如，你可以添加一个属性：

```js
Person.prototype.fullName = 'Bob Smith';
```

但这不够灵活，因为人们可能不叫这个名字。用 `name.first` 和 `name.last` 组成 `fullName` 会好很多：

```js
Person.prototype.fullName = this.name.first + ' ' + this.name.last;
```

然而，这么做是无效的，因为本例中 `this` 引用全局范围，而非函数范围。访问这个属性只会得到 `undefined undefined`。但这个语句若放在 先前定义在 `prototype` 上的方法中则有效，因为此时语句位于函数范围内，从而能够成功地转换为对象实例范围。你可能会在 `prototype` 上定义常属性 (constant property) （指那些你永远无需改变的属性），但一般来说，在构造器内定义属性更好。

> **备注：** 关于 `this` 关键字指代（引用）什么范围/哪个对象，这个问题超出了本文讨论范围。事实上，这个问题有点复杂，如果现在你没能理解，也不用担心。

事实上，一种极其常见的对象定义模式是，在构造器（函数体）中定义属性、在 `prototype` 属性上定义方法。如此，构造器只包含属性定义，而方法则分装在不同的代码块，代码更具可读性。例如：

```js
// 构造器及其属性定义

function Test(a,b,c,d) {
  // 属性定义
};

// 定义第一个方法

Test.prototype.x = function () { ... }

// 定义第二个方法

Test.prototype.y = function () { ... }

// 等等……
```

在 Piotr Zalewa 的 [school plan app](https://github.com/zalun/school-plan-app/blob/master/stage9/js/index.js) 样例中可以看到这种模式。

## 总结

本文介绍了 JavaScript 对象原型，包括原型链如何允许对象之间继承特性、`prototype` 属性、如何通过它来向构造器添加方法，以及其他有关主题。

下一篇文章中，我们将了解如何在两个自定义的对象间实现功能的继承。

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}
