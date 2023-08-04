---
title: JavaScript 中的类
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

在[上一篇文章](/zh-CN/docs/Learn/JavaScript/Objects/Object-oriented_programming)中，我们介绍了面向对象编程（OOP）的基本概念，并介绍了一个使用 OOP 原则对学校的教授和学生进行建模的示例。

我们还讨论了如何使用[原型](/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)和[构造函数](/zh-CN/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)来实现这样的模型，而 JavaScript 还提供了更接近经典 OOP 概念的特性。

在本文中，我们将介绍这些特性。注意，这里描述的特性并不是一种继承对象的新方式：在引擎的底层，这一特性使用的仍是原型。这只是一种更容易的创建原型链的方法。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机素养，对 HTML 和 CSS 有基本的理解，熟悉 JavaScript
        基础（参见<a
          href="/zh-CN/docs/Learn/JavaScript/First_steps">第一步</a>和<a
          href="/zh-CN/docs/Learn/JavaScript/Building_blocks"
          >创建代码块</a>）以及面向对象的
          JavaScript（OOJS）基础（参见
        <a href="/zh-CN/docs/Learn/JavaScript/Objects/Basics"
          >JavaScript 对象基础</a>、<a
          href="/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes">对象原型</a>和<a
          href="/zh-CN/docs/Learn/JavaScript/Objects/Object-oriented_programming">面向对象编程</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解如何使用 JavaScript 提供的特性实现“经典”的面向对象编程。</td>
    </tr>
  </tbody>
</table>

## 类和构造函数

你可以使用 {{jsxref("Statements/class", "class")}} 关键字声明一个类。下面是上一篇文章中关于 `Person` 类的一个声明：

```js
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

在这个 `Person` 类的声明中，有：

- 一个 `name` 属性。
- 一个需要 `name` 参数的构造函数，这一参数用于初始化新的对象的 `name` 属性。
- 一个 `introduceSelf()` 方法，使用 `this` 引用了对象的属性。

`name;` 这一声明是可选的：你可以省略它，因为在构造函数中的 `this.name = name;` 这行代码会在初始化 `name` 属性前自动创建它。但是，在类声明中明确列出属性可以方便阅读代码的人更容易确定哪些属性是这个类的一部分。

你也可以在声明属性时，为其初始化一个默认值。就像这样：`name = '';`。

构造函数使用 {{jsxref("Classes/constructor", "constructor")}} 关键字来声明。就像[在类声明外的构造函数](/zh-CN/docs/Learn/JavaScript/Objects/Basics)一样，它会：

- 创建一个新的对象
- 将 `this` 绑定到这个新的对象，你可以在构造函数代码中使用 `this` 来引用它
- 执行构造函数中的代码
- 返回这个新的对象

如上文中给出的类声明的代码，你可以像这样创建和使用一个新的 `Person` 实例：

```js
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

注意，我们使用类的名字来调用构造函数，即示例中的 `Person`。

### 省略构造函数

如果你不需要任何特殊的初始化内容，你可以省略构造函数，默认的构造函数会被自动生成：

```js
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
```

## 继承

对于上文给出的 `Person` 类，我们声明一个它的子类 `Professor`。

```js
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
```

我们使用 {{jsxref("Classes/extends", "extends")}} 关键字来声明这个类继承自另一个类。

我们为 `Professor` 类添加了一个新的属性 `teaches`，就像声明的那样。

因为我们想在创建新的 `Professor` 时设置 `teaches`，我们需要声明一个需要 `name` 和 `teaches` 参数的构造函数。构造函数中需要做的第一件事是使用 {{jsxref("Operators/super", "super()")}} 调用父类的构造函数，并传递 `name` 参数。父类的构造函数会设置 `name` 属性。然后 `Professor` 的构造函数接着设置 `teaches` 属性。

> **备注：** 如果子类有任何自己的初始化内容需要完成，它也**必须**先使用 `super()` 来调用父类的构造函数，并传递父类构造函数期望的任何参数。

我们还覆盖了父类的 `introduceSelf()` 方法，并添加了一个新的方法 `grade()`，来为论文打分（我们的教授不是很好，只是随意地为论文打分）。

有了这个声明，我们现在可以创建和使用 professor 实例了：

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## 封装

最后，让我们了解一下 JavaScript 中如何实现封装。在上一篇文章中，我们讨论了我们为什么想要使得 `Student` 的 `year` 属性变为私有的，我们可以在不破坏任何使用了 `Student` 类的代码的情况下，修改射箭课程的规则。

这里，就像我们之前想要的那样，声明了 `Student` 类：

```js
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}
```

在这个类的声明中，`#year` 是一个[私有数据属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields)。我们可以构造一个 `Student` 对象，然后在内部使用 `#year`，但如果在类的外部尝试访问 `#year`，浏览器将会抛出错误：

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
```

私有数据属性必须在类的声明中声明，而且其名称需以 `#` 开头。

### 私有方法

与私有数据属性一样，你也可以声明私有方法。而且名称也是以 `#` 开头，只能在类自己的方法中调用：

```js
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError
```

## 测试你的技能！

你已经看到了本文的结尾，但你还记得本文的绝大多数重要的信息吗？在继续学习新的内容之前，你可以找一些进一步的测验来验证你已经掌握了这些信息——参见[测试你的技能：面向对象的 JavaScript](/zh-CN/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript)。

## 总结

本文中，我们介绍了 JavaScript 中可用的面向对象编程的主要工具。我们没有涵盖所有的内容，但这些应该足以让你入门。我们的[关于类的文章](/zh-CN/docs/Web/JavaScript/Reference/Classes)可让你进一步学习相关的知识。
