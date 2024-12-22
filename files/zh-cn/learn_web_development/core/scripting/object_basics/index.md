---
title: JavaScript 对象基础
slug: Learn_web_development/Core/Scripting/Object_basics
original_slug: Learn/JavaScript/Objects/Basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

在这学习 JavaScript 的对象的首篇文章中，我们将会学习有关对象基础的语法，并且回顾一些之前学过的 JavaScript 的一些特点，使你明白你所使用过的一些功能实际上是由对象提供的。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基础计算机基础，了解基础的 HTML 和 CSS，熟悉 JavaScript 基础（参见
        <a href="/zh-CN/docs/Learn_web_development/Core/Scripting"
          >JavaScript 第一步</a>和<a
          href="/zh-CN/docs/Learn_web_development/Core/Scripting">创建代码块</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        理解在 JavaScript 使用对象的基础知识：创建对象，访问和修改对象属性，以及使用构造函数。
      </td>
    </tr>
  </tbody>
</table>

## 对象基础

对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法），让我们通过一个例子来了解它们。

首先，将 [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) 文件复制到本地，文件的元素非常少——仅一个供我们编写源代码的 {{HTMLElement("script")}} 标签。我们将在此基础上研究对象基础语法。在使用此示例时，你应该打开[开发者工具 JavaScript 控制台](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)，并准备键入一些命令。

如同 JavaScript 中的很多东西一样，创建一个对象通常先定义并初始化变量。尝试在你的文件中输入以下 JavaScript 代码，保存并刷新页面：

```js
const person = {};
```

打开你的浏览器的 [JavaScript 控制台](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#javascript_控制台)输入 `person`，然后按下 <kbd>Enter</kbd>/<kbd>Return</kbd>，你可能会得到以下结果中的一种：

```plain
[object Object]
Object { }
{ }
```

恭喜，你刚创建了你的第一个对象。干的漂亮！但这是一个空对象，所以我们做不了很多事情。让我们像这样更新文件中的 JavaScript 对象：

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} 现在 ${this.age} 岁了。`);
  },
  introduceSelf: function () {
    console.log(`你好！我是 ${this.name[0]}。`);
  },
};
```

保存并刷新后，尝试在你的浏览器开发者工具的 JavaScript 控制台输入以下内容：

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith 现在 32 岁了。"
person.introduceSelf();
// "你好！我是 Bob。"
```

现在，你的对象拥有了一些数据和功能，你现在可以通过简单的语法访问它们了！

所以发生了什么？一个对象由许多的成员组成，每一个成员都拥有一个名字（如 `name`、`age`）和一个值（如 `['Bob', 'Smith']`、`32`）。每一组名字/值必须由逗号分隔开，并且名字和值之间由冒号分隔，语法规则如下所示：

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

对象成员的值可以是任意的，person 对象里包含了：一个数字、一个数组，以及两个函数。前两项是数据项，被称为对象的**属性**，后两项是允许对象对该数据进行某些操作的函数，称为对象的**方法**。

当对象的成员是函数时，语法会更简单。我们可以写 `bio()` 来代替 `bio: function()`。像这样：

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} 现在 ${this.age} 岁了。`);
  },
  introduceSelf() {
    console.log(`你好！我是 ${this.name[0]}。`);
  },
};
```

从现在开始，我们将使用这种更短的语法。

一个如上所示的对象被称之为对象字面量（object literal）——手动的写出对象的内容来创建一个对象。不同于从类实例化一个对象，我们会在后面学习这种方式。

当你想要传输一系列结构化的相关的数据项（例如，服务器发起请求以存储一些数据到数据库）时，常见的方式是使用字面量来创建一个对象。发送一个对象要比分别发送这些数据更有效率，当你使用名字标识这些数据时，它比数组更容易使用。

## 点表示法

在上面的例子中，你使用了**点表示法**（dot notation）来访问对象的属性和方法。对象的名字表现为一个**命名空间**（namespace）。当你想访问对象内部的属性或方法时，命名空间必须写在第一位。然后输入一个点，紧接着是你想要访问的目标——可以是简单属性的名字，或者是数组属性的一个子元素，又或者是对象的方法调用。如下所示：

```js
person.age;
person.bio();
```

### 子命名空间

可以用一个对象来做另一个对象成员的值。例如将 `name` 成员，从

```js
const person = {
  name: ["Bob", "Smith"],
};
```

改成

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```

需要访问这些属性，只需要链式的再使用一次点表示法，像这样：

```js
person.name.first;
person.name.last;
```

**注意**：你需要改变你之前的代码，从

```js
name[0];
name[1];
```

改成

```js
name.first;
name.last;
```

否则，你的方法将不再有效。

## 括号表示法

另外一种访问对象属性的方式是使用括号表示法（bracket notation），下方所示的[点表示法](#点表示法)：

```js
person.age;
person.name.first;
```

可以使用如下所示的括号表示法替代：

```js
person["age"];
person["name"]["first"];
```

这看起来很像访问一个数组的元素，并且基本上是相同的——使用关联了值的名称，而不是索引来选择元素。因此对象有时被称为**关联数组**——对象将字符串映射到值，而数组将数字映射到值。

点表示法通常优于括号表示法，因为它更简洁且更易于阅读。然而，在某些情况下你必须使用括号。例如，如果对象属性名称保存在变量中，则不能使用点表示法访问该值，但可以使用括号表示法访问该值。

在下面的示例中，`logProperty()` 函数可以使用 `person[propertyName]` 来检索 `propertyName` 中指定的属性的值。

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
```

## 设置对象成员

目前我们仅仅看到了如何查询（或**获取**）对象成员，而你也可以通过声明**设置**（更新）对象成员的值（使用点表示法或括号表示法），像这样：

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

尝试输入以上代码，然后再查看这些成员是否已经被改变了，像这样：

```js
person.age;
person["name"]["last"];
```

设置成员并不意味着你只能更新已经存在的属性的值和方法，你也可以创建新的成员。在 JS 控制台中尝试以下代码：

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("再见！");
};
```

现在你可以测试你新创建的成员

```js
person["eyes"];
person.farewell();
// "再见！"
```

括号表示法一个有用的地方是它不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字。假设我们想让用户能够通过在两个文本输入框中键入成员名称和值，在他们的人员数据中存储自定义的值类型。我们可以像这样获取这些值：

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

我们可以像这样把这个新的成员的名字和值加到 `person` 对象中：

```js
person[myDataName] = myDataValue;
```

为了测试它，尝试在你的代码里添加以下几行，就在 `person` 对象的右花括号的下面：

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

现在，保存并刷新页面，在输入框里输入以下代码：

```js
person.height;
```

这是使用点表示法无法做到的，点表示法只能接受字面量的成员的名字，不接受表示名称的变量。

## “this”的含义

你也许在我们的方法里注意到了一些奇怪的地方，看这个例子：

```js
introduceSelf() {
  console.log(`你好！我是 ${this.name[0]}。`);
}
```

你也许想知道“this”是什么，关键字 `this` 指向了当前代码运行时的对象——这里指 `person` 对象，为什么不直接写 `person` 呢？

当你只需要创建一个对象字面量时，`this` 就不是那么有用。但是如果你创建多个对象时，`this` 可以让你对每一个创建的对象都使用相同的方法定义。

让我们用两个简单的 person 对象来说明：

```js
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`你好！我是 ${this.name}。`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`你好！我是 ${this.name}。`);
  },
};
```

在本例中，尽管两个实例的方法代码完全相同，但 `person1.introduceSelf()` 输出“你好！我是 Chris。”，而 `person2.introduceSelf()` 输出“你好！我是 Deepti”。当你手工编写对象字面量时，这并不是很有用，但是当我们开始使用**构造函数**从单个对象定义创建多个对象时，这将是必不可少的，这就是下一节的主题。

## 构造函数介绍

使用对象字面量在只需要创建一个对象时是可以的，但如果你需要创建多个对象，如前面章节所示，它们就不够用了。我们必须为每个创建的对象编写相同的代码，如果我们想要更改对象的某些属性，比如添加一个 `height` 属性，那么我们必须手动更新每个对象。

我们希望有一种方法来定义对象的“特征”，即方法集和属性集，然后可以创建任意多个对象，只需更新不同属性的值。

第一个版本是一个函数：

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`你好！我是 ${this.name}。`);
  };
  return obj;
}
```

每次调用 `createPerson()` 函数时，它都会创建并返回一个新对象。该对象将具有两个成员：

- 一个 `name` 属性
- 一个 `introduceSelf()` 方法。

请注意，`createPerson()` 接受一个参数 `name` 来设置 `name` 属性的值，但是 `introduceSelf()` 方法的值对于使用此函数创建的所有对象都是相同的。这是创建对象的一种非常常见的模式。

现在我们可以创建任意多个对象，重用该定义：

```js
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "你好！我是 Salva。"

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "你好！我是 Frankie。"
```

这样可以正常工作，但有点冗长：我们必须创建一个空对象，初始化它，并返回它。更好的方法是使用**构造函数**。构造函数只是使用 {{jsxref("operators/new", "new")}} 关键字调用的函数。当你调用构造函数时，它将：

- 创建一个新对象
- 将 `this` 绑定到新对象，以便你可以在构造函数代码中引用 `this`
- 运行构造函数中的代码
- 返回新对象

按照惯例，构造函数以大写字母开头，并且以它们创建的对象类型命名。因此，可以将我们的示例重写如下：

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`你好！我是 ${this.name}。`);
  };
}
```

要将 `Person()` 作为构造函数调用，我们使用 `new`：

```js
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();
// "你好！我是 Salva。"

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "你好！我是 Frankie。"
```

## 你一直在使用对象

当你使用过这些例子之后，你可能会发现你对点表示法并不陌生，这是因为我们在这个课程里一直在使用它！每次我们学习的示例使用浏览器内建的 API 和 JavaScript 的一些对象时，我们就在使用对象，因为，这些功能是由跟我们所看到的对象同样的结构来构建的，尽管比我们自己定义的示例要复杂许多。

所以当我们这样使用字符串的方法时：

```js
myString.split(",");
```

你正在使用一个 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 对象上的方法。每当在代码中创建字符串时，该字符串都会被自动创建为 `String` 的实例，因此会有一些常见的方法和属性。

当你这样访问 document 对象时：

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

你正在使用 [`Document`](/zh-CN/docs/Web/API/Document) 对象上的方法。每个页面在加载完毕后，会有一个 `Document` 的实例被创建，叫做 `document`，它代表了整个页面的结构，内容和一些功能，比如页面的 URL。同样的，这意味 `document` 有一些可用的方法和属性。

这同样适用于你使用过的几乎所有其他的内置对象或 API——[`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)、[`Math`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)，等。

请注意内置对象或 API 并不总是自动地创建对象的实例，举例来说，[通知 API](/zh-CN/docs/Web/API/Notifications_API)——允许浏览器发起系统通知，需要你为每一个你想发起的通知都使用构造函数进行实例化。尝试在 JavaScript 控制台里输入以下代码：

```js
const myNotification = new Notification("你好！");
```

## 技能测试！

你已经读到这篇文章的末尾了，但是你还记得最重要的知识吗？进行下一步之前，你可以找到一些进一步的测试来验证你已经记住了这些知识——参见 [“技能测试：对象基础”](/zh-CN/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics)。

## 总结

恭喜，你已经阅读到了我们有关 JavaScript 对象的第一篇文章的末尾，你现在应该对如何在 JavaScript 中使用对象有了很好的认识，包括你自己创建一个简单的对象。你应该清楚对象有利于存储一些相关联的数据和函数，如果你尝试以分开的方式去保存 `person` 对象包含的所有的属性和方法，这是令人沮丧且效率低下的，而且会有很多的变量和函数之间同名的风险。对象使我们将一些信息安全地锁在了它们自己的包内，防止它们被损坏。

在下一篇文章，我们将讨论**原型**（prototype），这是 JavaScript 让对象从其他对象继承属性的基本方式。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
