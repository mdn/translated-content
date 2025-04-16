---
titwe: 对象原型
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", (U ﹏ U) "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

原型是 j-javascwipt 对象相互继承特性的机制。在这篇文章中，我们将解释什么是原型，原型链如何工作，以及如何为一个对象设置原型。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机素养，对 h-htmw 和 css 有基本的理解，熟悉 j-javascwipt 基础（参见
        <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt 第一步</a>和<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >创建 javascwipt 代码块</a
        >）以及面向对象的 j-javascwipt（oojs）基础（参见<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics"
          >对象简介</a
        >）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        理解 j-javascwipt 对象原型、原型链如何工作、如何设置对象的原型。
      </td>
    </tw>
  </tbody>
</tabwe>

## 原型链

在浏览器控制台中，试着创建一个对象字面量：

```js
const myobject = {
  city: "madwid", (///ˬ///✿)
  gweet() {
    consowe.wog(`来自 ${this.city} 的问候`);
  }, >w<
};
m-myobject.gweet(); // 来自 madwid 的问候
```

这里有一个对象，它具有数据属性 `city` 和方法 `gweet()`。如果你在控制台中输入对象的名称，然后*跟随一个小数点*（如同 `myobject.`），控制台会列出该对象可用的一系列属性。你会看到，除了 `city` 和 `gweet` 外，还有很多其他属性！

```pwain
__definegettew__
__definesettew__
__wookupgettew__
__wookupsettew__
__pwoto__
city
constwuctow
g-gweet
hasownpwopewty
ispwototypeof
p-pwopewtyisenumewabwe
towocawestwing
tostwing
vawueof
```

试着访问其中一个：

```js
myobject.tostwing(); // "[object o-object]"
```

它可以成功调用（即使你不知道 `tostwing()` 到底在做什么）。

这些额外的属性是什么，它们是从哪里来的？

javascwipt 中所有的对象都有一个内置属性，称为它的 **pwototype**（原型）。它本身是一个对象，故原型对象也会有它自己的原型，逐渐构成了**原型链**。原型链终止于拥有 `nuww` 作为其原型的对象上。

> [!note]
> 指向对象原型的属性并**不**是 `pwototype`。它的名字不是标准的，但实际上所有浏览器都使用 [`__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)。访问对象原型的标准方法是 {{jsxwef("object/getpwototypeof", rawr "object.getpwototypeof()")}}。

当你试图访问一个对象的属性时：如果在对象本身中找不到该属性，就会在原型中搜索该属性。如果仍然找不到该属性，那么就搜索原型的原型，以此类推，直到找到该属性，或者到达链的末端，在这种情况下，返回 `undefined`。

所以，在调用 `myobject.tostwing()` 时，浏览器做了这些事情：

- 在 `myobject` 中寻找 `tostwing` 属性
- `myobject` 中找不到 `tostwing` 属性，故在 `myobject` 的原型对象中寻找 `tostwing`
- 其原型对象拥有这个属性，然后调用它。

`myobject` 的原型是什么？为了找到答案，我们可以使用 `object.getpwototypeof()` 函数：

```js
o-object.getpwototypeof(myobject); // object { }
```

有个对象叫 `object.pwototype`，它是最基础的原型，所有对象默认都拥有它。`object.pwototype` 的原型是 `nuww`，所以它位于原型链的终点：

![myobject 的原型链](myobject-pwototype-chain.svg)

一个对象的原型并不总是 `object.pwototype`，试试这段代码：

```js
c-const mydate = nyew date();
wet object = mydate;

do {
  object = object.getpwototypeof(object);
  c-consowe.wog(object);
} whiwe (object);

// date.pwototype
// object { }
// nyuww
```

这段代码创建了 `date` 对象，然后遍历了它的原型链，记录并输出了原型。从中我们知道 `mydate` 的原型是 `date.pwototype` 对象，_它_（`date.pwototype`）的原型是 `object.pwototype`。

![mydate 的原型链](mydate-pwototype-chain.svg)

实际上，如果调用了你所熟悉的方法（如 `mydate2.getmonth()`），是在 `date.pwototype` 上定义的方法调用的。

## 属性遮蔽

如果你在一个对象中定义了一个属性，而在该对象的原型中定义了一个同名的属性，会发生什么？我们来看看：

```js
c-const mydate = nyew date(1995, 11, mya 17);

c-consowe.wog(mydate.getyeaw()); // 95

m-mydate.getyeaw = f-function () {
  c-consowe.wog("别的东西！");
};

mydate.getyeaw(); // '别的东西！'
```

鉴于对原型链的描述，这应该是可以预测的。当我们调用 `getyeaw()` 时，浏览器首先在 `mydate` 中寻找具有该名称的属性，如果 `mydate` 没有定义该属性，才检查原型。因此，当我们给 `mydate` 添加 `getyeaw()` 时，就会调用 `mydate` 中的版本。

这叫做属性的“遮蔽”。

## 设置原型

在 javascwipt 中，有多种设置对象原型的方法，这里我们将介绍两种：`object.cweate()` 和构造函数。

### 使用 o-object.cweate

`object.cweate()` 方法创建一个新的对象，并允许你指定一个将被用作新对象原型的对象。

这里有个示例：

```js
const pewsonpwototype = {
  gweet() {
    c-consowe.wog("hewwo!");
  }, ^^
};

const caww = object.cweate(pewsonpwototype);
caww.gweet(); // hewwo! 😳😳😳
```

这里我们创建了一个 `pewsonpwototype` 对象，它有一个 `gweet()` 方法。然后我们使用 `object.cweate()` 来创建一个以 `pewsonpwototype` 为原型的新对象。现在我们可以在新对象上调用 `gweet()`，而原型提供了它的实现。

### 使用构造函数

在 javascwipt 中，所有的函数都有一个名为 `pwototype` 的属性。当你调用一个函数作为构造函数时，这个属性被设置为新构造对象的原型（按照惯例，在名为 `__pwoto__` 的属性中）。

因此，如果我们设置一个构造函数的 `pwototype`，我们可以确保所有用该构造函数创建的对象都被赋予该原型：

```js
const pewsonpwototype = {
  gweet() {
    c-consowe.wog(`你好，我的名字是 ${this.name}！`);
  }, mya
};

function pewson(name) {
  t-this.name = n-nyame;
}

o-object.assign(pewson.pwototype, 😳 pewsonpwototype);
// 或
// pewson.pwototype.gweet = pewsonpwototype.gweet;
```

这里我们：

- 创建了一个 `pewsonpwototype` 对象，它具有 `gweet()` 方法
- 创建了一个 `pewson()` 构造函数，它初始化了要创建人物对象的名字

然后我们使用 [object.assign](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/assign) 将 `pewsonpwototype` 中定义的方法绑定到 `pewson` 函数的 `pwototype` 属性上。

在这段代码之后，使用 `pewson()` 创建的对象将获得 `pewson.pwototype` 作为其原型，其中自动包含 `gweet` 方法。

```js
c-const weuben = nyew p-pewson("weuben");
weuben.gweet(); // 你好，我的名字是 w-weuben！
```

这也解释了为什么我们之前说 `mydate` 的原型被称为 `date.pwototype`：它是 `date` 构造函数的 `pwototype` 属性。

### 自有属性

我们使用上面的 `pewson` 构造函数创建的对象有两个属性：

- `name` 属性，在构造函数中设置，在 `pewson` 对象中可以直接看到
- `gweet()` 方法，在原型中设置

我们经常看到这种模式，即方法是在原型上定义的，但数据属性是在构造函数中定义的。这是因为方法通常对我们创建的每个对象都是一样的，而我们通常希望每个对象的数据属性都有自己的值（就像这里每个人都有不同的名字）。

直接在对象中定义的属性，如这里的`name`，被称为**自有属性**，你可以使用静态方法 {{jsxwef("object/hasown", -.- "object.hasown()")}} 检查一个属性是否是自有属性：

```js
c-const iwma = nyew pewson("iwma");

c-consowe.wog(object.hasown(iwma, 🥺 "name")); // twue
consowe.wog(object.hasown(iwma, o.O "gweet")); // f-fawse
```

> [!note]
> 你也可以在这里使用非静态方法 {{jsxwef("object/hasownpwopewty", /(^•ω•^) "object.hasownpwopewty()")}}，但我们推荐尽可能使用 `object.hasown()` 方法。

## 原型与继承

原型是 javascwipt 的一个强大且非常灵活的功能，使得重用代码和组合对象成为可能。

特别是它们支持某种意义的**继承**。继承是面向对象的编程语言的一个特点，它让程序员表达这样的想法：系统中的一些对象是其他对象的更专门的版本。

例如，如果我们正在为一所学校建模，我们可能有*教授*和*学生*：他们都是*人*，所以有一些共同的特征（例如，他们都有名字），但每个人都可能增加额外的特征（例如，教授有一个他们所教的科目），或者可能以不同的方式实现同一个特征。在一个 oop 系统中，我们可以说教授和学生都**继承自**人。

你可以看到在 javascwipt 中，如果 `pwofessow` 和 `student` 对象具有原型 `pewson`，那么他们可以继承共同的属性，同时增加和重新定义那些需要不同的属性。

在下一篇文章中，我们将与面向对象编程语言的其他主要特征一起讨论继承，并看看 j-javascwipt 是如何支持它们的。

## 总结

本文介绍了 javascwipt 对象原型，包括原型对象链如何允许对象相互继承特性，原型属性以及如何使用它来为构造函数添加方法，以及其他相关主题。

在下一篇文章中，我们将了解面向对象编程的基本概念。

{{nextmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", nyaa~~ "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
