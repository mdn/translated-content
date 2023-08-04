---
title: 对象原型
slug: Learn/JavaScript/Objects/Object_prototypes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}

原型是 JavaScript 对象相互继承特性的机制。在这篇文章中，我们将解释什么是原型，原型链如何工作，以及如何为一个对象设置原型。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机素养，对 HTML 和 CSS 有基本的理解，熟悉 JavaScript 基础（参见
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">JavaScript 第一步</a>和<a href="/zh-CN/docs/Learn/JavaScript/Building_blocks"
          >创建 JavaScript 代码块</a
        >）以及面向对象的 JavaScript（OOJS）基础（参见<a href="/zh-CN/docs/Learn/JavaScript/Objects/Basics"
          >对象简介</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        理解 JavaScript 对象原型、原型链如何工作、如何设置对象的原型。
      </td>
    </tr>
  </tbody>
</table>

## 原型链

在浏览器控制台中，试着创建一个对象字面量：

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`来自 ${this.city} 的问候`);
  },
};
myObject.greet(); // 来自 Madrid 的问候
```

这里有一个对象，它具有数据属性 `city` 和方法 `greet()`。如果你在控制台中输入对象的名称，然后*跟随一个小数点*（如同 `myObject.`），控制台会列出该对象可用的一系列属性。你会看到，除了 `city` 和 `greet` 外，还有很多其他属性！

```
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

试着访问其中一个：

```js
myObject.toString(); // "[object Object]"
```

它可以成功调用（即使你不知道 `toString()` 到底在做什么）。

这些额外的属性是什么，它们是从哪里来的？

JavaScript 中所有的对象都有一个内置属性，称为它的 **prototype**（原型）。它本身是一个对象，故原型对象也会有它自己的原型，逐渐构成了**原型链**。原型链终止于拥有 `null` 作为其原型的对象上。

> **备注：** 指向对象原型的属性并**不**是 `prototype`。它的名字不是标准的，但实际上所有浏览器都使用 [`__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)。访问对象原型的标准方法是 {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}}。

当你试图访问一个对象的属性时：如果在对象本身中找不到该属性，就会在原型中搜索该属性。如果仍然找不到该属性，那么就搜索原型的原型，以此类推，直到找到该属性，或者到达链的末端，在这种情况下，返回 `undefined`。

所以，在调用 `myObject.toString()` 时，浏览器做了这些事情：

- 在 `myObject` 中寻找 `toString` 属性
- `myObject` 中找不到 `toString` 属性，故在 `myObject` 的原型对象中寻找 `toString`
- 其原型对象拥有这个属性，然后调用它。

`myObject` 的原型是什么？为了找到答案，我们可以使用 `Object.getPrototypeOf()` 函数：

```js
Object.getPrototypeOf(myObject); // Object { }
```

有个对象叫 `Object.prototype`，它是最基础的原型，所有对象默认都拥有它。`Object.prototype` 的原型是 `null`，所以它位于原型链的终点：

![myObject 的原型链](myobject-prototype-chain.svg)

一个对象的原型并不总是 `Object.prototype`，试试这段代码：

```js
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
```

这段代码创建了 `Date` 对象，然后遍历了它的原型链，记录并输出了原型。从中我们知道 `myDate` 的原型是 `Date.prototype` 对象，_它_（`Date.prototype`）的原型是 `Object.prototype`。

![myDate 的原型链](mydate-prototype-chain.svg)

实际上，如果调用了你所熟悉的方法（如 `myDate2.getMonth()`），是在 `Date.prototype` 上定义的方法调用的。

## 属性遮蔽

如果你在一个对象中定义了一个属性，而在该对象的原型中定义了一个同名的属性，会发生什么？我们来看看：

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("别的东西！");
};

myDate.getYear(); // '别的东西！'
```

鉴于对原型链的描述，这应该是可以预测的。当我们调用 `getYear()` 时，浏览器首先在 `myDate` 中寻找具有该名称的属性，如果 `myDate` 没有定义该属性，才检查原型。因此，当我们给 `myDate` 添加 `getYear()` 时，就会调用 `myDate` 中的版本。

这叫做属性的“遮蔽”。

## 设置原型

在 JavaScript 中，有多种设置对象原型的方法，这里我们将介绍两种：`Object.create()` 和构造函数。

### 使用 Object.create

`Object.create()` 方法创建一个新的对象，并允许你指定一个将被用作新对象原型的对象。

这里有个示例：

```js
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

这里我们创建了一个 `personPrototype` 对象，它有一个 `greet()` 方法。然后我们使用 `Object.create()` 来创建一个以 `personPrototype` 为原型的新对象。现在我们可以在新对象上调用 `greet()`，而原型提供了它的实现。

### 使用构造函数

在 JavaScript 中，所有的函数都有一个名为 `prototype` 的属性。当你调用一个函数作为构造函数时，这个属性被设置为新构造对象的原型（按照惯例，在名为 `__proto__` 的属性中）。

因此，如果我们设置一个构造函数的 `prototype`，我们可以确保所有用该构造函数创建的对象都被赋予该原型：

```js
const personPrototype = {
  greet() {
    console.log(`你好，我的名字是 ${this.name}！`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// 或
// Person.prototype.greet = personPrototype.greet;
```

这里我们：

- 创建了一个 `personPrototype` 对象，它具有 `greet()` 方法
- 创建了一个 `Person()` 构造函数，它初始化了要创建人物对象的名字

然后我们使用 [Object.assign](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 将 `personPrototype` 中定义的方法绑定到 `Person` 函数的 `prototype` 属性上。

在这段代码之后，使用 `Person()` 创建的对象将获得 `Person.prototype` 作为其原型，其中自动包含 `greet` 方法。

```js
const reuben = new Person("Reuben");
reuben.greet(); // 你好，我的名字是 Reuben！
```

这也解释了为什么我们之前说 `myDate` 的原型被称为 `Date.prototype`：它是 `Date` 构造函数的 `prototype` 属性。

### 自有属性

我们使用上面的 `Person` 构造函数创建的对象有两个属性：

- `name` 属性，在构造函数中设置，在 `Person` 对象中可以直接看到
- `greet()` 方法，在原型中设置

我们经常看到这种模式，即方法是在原型上定义的，但数据属性是在构造函数中定义的。这是因为方法通常对我们创建的每个对象都是一样的，而我们通常希望每个对象的数据属性都有自己的值（就像这里每个人都有不同的名字）。

直接在对象中定义的属性，如这里的`name`，被称为**自有属性**，你可以使用静态方法 {{jsxref("Object/hasOwn", "Object.hasOwn()")}} 检查一个属性是否是自有属性：

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> **备注：** 你也可以在这里使用非静态方法 {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}}，但我们推荐尽可能使用 `Object.hasOwn()` 方法。

## 原型与继承

原型是 JavaScript 的一个强大且非常灵活的功能，使得重用代码和组合对象成为可能。

特别是它们支持某种意义的**继承**。继承是面向对象的编程语言的一个特点，它让程序员表达这样的想法：系统中的一些对象是其他对象的更专门的版本。

例如，如果我们正在为一所学校建模，我们可能有*教授*和*学生*：他们都是*人*，所以有一些共同的特征（例如，他们都有名字），但每个人都可能增加额外的特征（例如，教授有一个他们所教的科目），或者可能以不同的方式实现同一个特征。在一个 OOP 系统中，我们可以说教授和学生都**继承自**人。

你可以看到在 JavaScript 中，如果 `Professor` 和 `Student` 对象具有原型 `Person`，那么他们可以继承共同的属性，同时增加和重新定义那些需要不同的属性。

在下一篇文章中，我们将与面向对象编程语言的其他主要特征一起讨论继承，并看看 JavaScript 是如何支持它们的。

## 总结

本文介绍了 JavaScript 对象原型，包括原型对象链如何允许对象相互继承特性，原型属性以及如何使用它来为构造函数添加方法，以及其他相关主题。

在下一篇文章中，我们将了解面向对象编程的基本概念。

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects")}}
