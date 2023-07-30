---
title: 如何存储你需要的信息——变量
slug: Learn/JavaScript/First_steps/Variables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

在读完之前的一些文章之后，你现在应该大概知道了 JavaScript 是什么，你能用它干什么，它是怎么跟其他 web 技术协同工作的，以及从上层来看，它有哪些主要特性。在本文中，我们将深入了解真正的基础知识，学习如何使用 JavaScript 最基础的构建单元——变量。

<table class="learn-box">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>电脑基础知识，了解基本的 HTML 和 CSS，了解 JavaScript 是什么。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>熟悉 JavaScript 变量的基础知识。</td>
    </tr>
  </tbody>
</table>

## 需要的工具

在本文中，你将要输入一些代码来测试你对相关内容的理解。如果你是用的桌面浏览器，输入这些代码最好的地方是浏览器的 JavaScript 控制台（参考[什么是浏览器开发工具](/zh-CN/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)以查看如何使用这些工具）。

当然，我们也提供了一个简单的 JavaScript 终端，嵌入在下文的页面中，以便你更容易的输入和测试这些代码。

## 变量是什么？

一个变量，就是一个用于存放数值的容器。这个数值可能是一个用于累加计算的数字，或者是一个句子中的字符串。变量的独特之处在于它存放的数值是可以改变的。让我们看一个简单的例子：

```html
<button>Press me</button>
```

```js
const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("What is your name?");
  alert("Hello " + name + ", nice to see you!");
};
```

{{ EmbedLiveSample('变量是什么？', '100%', 50) }}

在上面的例子中，点击按钮之后，第一行代码会在屏幕上弹出一个对话框，让你输入名字，然后存储输入的名字到一个变量。第二行代码将会显示包含你名字的欢迎信息，你的名字就是从之前的变量里面读取的。

为了理解变量的作用，我们可以思考一下，如果不使用变量，我们实现上述功能的代码将是这样的：

```plain example-bad
let name = prompt('What is your name?');

if (name === 'Adam') {
  alert('Hello Adam, nice to see you!');
} else if (name === 'Alan') {
  alert('Hello Alan, nice to see you!');
} else if (name === 'Bella') {
  alert('Hello Bella, nice to see you!');
} else if (name === 'Bianca') {
  alert('Hello Bianca, nice to see you!');
} else if (name === 'Chris') {
  alert('Hello Chris, nice to see you!');
}

// ... and so on ...
```

你可能暂时还没有完全理解这些代码和语法，但是你应该能够理解到——如果我们没有变量，我们就不得不写大量的代码去枚举和检查输入的名字，然后去显示它们。这样做显然是低效率和不可行的——你没有办法列举出所有可能的输入。

变量的另一个特性就是它们能够存储任何的东西——不只是字符串和数字。变量可以存储更复杂的数据，甚至是函数。你将在后续的内容中体验到这些用法。

我们说，变量是用来存储数值的，那么有一个重要的概念需要区分。变量不是数值本身，它们仅仅是一个用于存储数值的容器。你可以把变量想象成一个个用来装东西的纸箱子。

![](boxes.png)

## 声明变量

要想使用变量，你需要做的第一步就是创建它——更准确的说，是声明一个变量。声明一个变量的语法是在 `var` 或 `let` 关键字之后加上这个变量的名字：

```js
let myName;
let myAge;
```

在这里我们声明了两个变量 `myName` 和 `myAge`. 那么现在尝试输入这些代码到你的浏览器终端或者下面提供的 JavaScript 终端 (你也可以在另一个独立的标签页或窗口 [open this consol](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) ). 此外，你也可以多声明几个变量。

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript console</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0c323d;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0c323d;
        color: #809089;
      }

      div {
        clear: both;
      }
    </style>
  </head>
  <body></body>

  <script>
    let geval = eval;
    function createInput() {
      let inputDiv = document.createElement("div");
      let inputPara = document.createElement("p");
      let inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        let result = geval(e.target.value);
      } catch (e) {
        let result = "error — " + e.message;
      }

      let outputDiv = document.createElement("div");
      let outputPara = document.createElement("p");

      outputDiv.setAttribute("class", "output");
      outputPara.textContent = "Result: " + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = "0.5";

      createInput();
    }

    createInput();
  </script>
</html>
```

{{ EmbedLiveSample('声明变量', '100%', 300) }}

> **备注：** 在 JavaScript 中，所有代码指令都会以分号结尾 (`;`) — 如果忘记加分号，你的单行代码可能执行正常，但是在多行代码在一起的时候就可能出错。所以，最好是养成主动以分号作为代码结尾的习惯。

你可以通过使用变量的方式来验证这个变量的数值是否在执行环境中已经存在。例如，

```js
myName;
myAge;
```

以上这两个变量并没有数值，他们是空的容器。当你输入变量名并回车后，你会得到一个`undefined`的返回值。如果他们并不存在的话，那你就会得到一个报错信息。不信的话，可以尝试输入：

```js
scoobyDoo;
```

> **备注：** 千万不要把两个概念弄混淆了，“一个变量存在，但是没有数值”和“一个变量并不存在” — 他们完全是两回事 — 在前面你看到的盒子的类比中，不存在意味着没有可以存放变量的“盒子”。没有定义的值意味着有一个“盒子”，但是它里面没有任何值。

## 初始化变量

一旦你定义了一个变量，你就能够初始化它。方法如下，在变量名之后跟上一个“=”，然后是数值：

```js
myName = "Chris";
myAge = 37;
```

现在回到控制台并且尝试输入这几行。每输入一条你都应该确认一下控制台输出的变量是不是你刚赋的值。同样，你可以通过在控制台中输入变量的名称来返回该变量的值 — 再次尝试下这些：

```js
myName;
myAge;
```

你可以像这样在声明变量的时候给变量初始化：

```js
let myName = "Chris";
```

这可能是大多数时间你都会使用的方式，因为它要比在单独的两行上做两次操作要快。

> **备注：** 如果你写一个声明和初始化变量的多行 JavaScript 代码的程序，你可以在初始化变量之后再实际声明它，并且它仍然可以工作。这是因为变量的声明通常在其余的代码执行之前完成。这叫做**顶置**—阅读[var hoisting](/zh-CN/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)来了解更多细节。

## var 与 let 的区别

此时，您可能会想：“为什么我们需要两个关键字来定义变量？”，“为什么有 `var` 和 `let` 呢？"。

原因是有些历史性的。回到最初创建 JavaScript 时，是只有 `var` 的。在大多数情况下，这种方法可以接受，但有时在工作方式上会有一些问题——它的设计会令人困惑或令人讨厌。因此，`let` 是在现代版本中的 JavaScript 创建的一个新的关键字，用于创建与 `var` 工作方式有些不同的变量，解决了过程中的问题。

下面解释几个简单的差异。我们现在不会讨论所有的差异，但是当您了解有关 JavaScript 的更多信息时，您将开始发现它们（如果您现在真的想要阅读它们，请随时查看我们的[参考页面](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)）。

首先，如果你编写一个声明并初始化变量的多行 JavaScript 程序，你可以在初始化一个变量之后用 `var` 声明它，它仍然可以工作。例如：

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> **备注：** 只有在 web 文档中运行多行 JavaScript 时才会有这种效果，当在 JavaScript 控制台中键入单独的行，这将不起作用。

这是由于变量的**提升**，更多细节请阅读[变量提升](/zh-CN/docs/Web/JavaScript/Reference/Statements/var#变量提升)。

但提升操作不再适用于 `let` 。如果将上面例子中的 `var` 替换成 `let` 将不起作用并引起一个错误。这是一件好事——因为初始化后再声明一个变量会使代码变得混乱和难以理解。

其次，当你使用 `var` 时，可以根据需要多次声明相同名称的变量，但是 `let` 不能。以下将有效：

```js
var myName = "Chris";
var myName = "Bob";
```

但是以下内容会在第二行引发错误：

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

你必须这样做：

```js
let myName = "Chris";
myName = "Bob";
```

同样，这是一个明智的语言决定。没有理由重新声明变量——这只会让事情变得更加混乱。

出于这些以及其他原因，我们建议您在代码中尽可能多地使用 `let`，而不是 `var`。因为没有理由使用 `var`，除非您需要用代码支持旧版本的 Internet Explorer (它直到第 11 版才支持 `let` ，现代的 Windows Edge 浏览器支持的很好)。

> **备注：** 我们目前正在更新课程以使用 let 而不是 var。忍耐一下！

## 更新变量

一旦变量赋值，您可以通过简单地给它一个不同的值来更新它。试试在你的控制台中输入下面几行：

```js
myName = "Bob";
myAge = 40;
```

### 关于变量命名的规则

你可以给你的变量赋任何你喜欢的名字，但有一些限制。一般你应当坚持使用拉丁字符 (0-9,a-z,A-Z) 和下划线字符。

- 你不应当使用规则之外的其他字符，因为它们可能引发错误，或对国际用户来说难以理解。
- 变量名不要以下划线开头—— 以下划线开头的被某些 JavaScript 设计为特殊的含义，因此可能让人迷惑。
- 变量名不要以数字开头。这种行为是不被允许的，并且将引发一个错误。
- 一个可靠的命名约定叫做 ["小写驼峰命名法"](https://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms)，用来将多个单词组在一起，小写整个命名的第一个字母然后大写剩下单词的首字符。我们已经在文章中使用了这种命名方法。
- 让变量名直观，它们描述了所包含的数据。不要只使用单一的字母/数字，或者长句。
- 变量名大小写敏感——因此`myage`与`myAge`是 2 个不同的变量。
- 最后也是最重要的一点—— 你应当避免使用 JavaScript 的保留字给变量命名。保留字，即是组成 JavaScript 的实际语法的单词！因此诸如 `var`、`function`、`let` 和 `for` 等，都不能被作为变量名使用。浏览器将把它们识别为不同的代码项，因此你将得到错误。

> **备注：** 你能从[词汇语法—关键字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)找到一个相当完整的保留关键字列表来避免使用关键字当作变量。

好的命名示例：

```plain example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

错误与差的命名示例：

```plain example-bad
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```

现在尝试创建更多的变量，请将上面的指导铭记于心。

## 变量类型

可以为变量设置不同的数据类型。本节我们将对其进行简短的介绍，在以后的文章中，你会更详细地了解它们。

到目前为止我们已经认识了前 2 个，但是还有其他的。

### Number

你可以在变量中存储数字，不论这些数字是像 30（也叫整数）这样，或者像 2.456 这样的小数（也叫做浮点数）。与其他编程语言不同，在 JavaScript 中你不需要声明一个变量的类型。当你给一个变量数字赋值时，不需要用引号括起来。

```js
let myAge = 17;
```

### String

字符串是文本的一部分。当你给一个变量赋值为字符串时，你需要用单引号或者双引号把值给包起来，否则 JavaScript 将会把这个字符串值理解成别的变量名。

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Boolean

Boolean 的值有 2 种：true 或 false。它们通常被用于在适当的代码之后，测试条件是否成立。举个例子，一个简单的示例如下：

```js
let iAmAlive = true;
```

然而实际上通常是以下用法：

```js
let test = 6 < 3;
```

这是使用“小于”操作符（<）来测试 6 小于 3。正如你所料的，将会返回`false`，因为 6 并不小于 3！在这个课程中，以后你将会学到许多有关操作符的知识。

### Array

数组是一个单个对象，其中包含很多值，方括号括起来，并用逗号分隔。尝试在您的控制台输入以下行：

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

当数组被定义后，您可以使用如下所示的语法来访问各自的值，例如下行：

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

此处的方括号包含一个索引值，该值指定要返回的值的位置。您可能已经注意到，计算机从 0 开始计数，而不是像我们人类那样的 1。

在以后的文章，你将更多地了解数组。

### Object

在编程中，对象是现实生活中的模型的一种代码结构。您可以有一个简单的对象，代表一个停车场，并包含有关其宽度和长度的信息，或者您可以有一个代表一个人的对象，并包含有关他们的名字，身高，体重，他们说什么语言，如何说 你好，他们，等等。

尝试在您的控制台输入以下行：

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

要检索存储在对象中的信息，可以使用以下语法：

```js
dog.name;
```

我们现在不会看对象了 - 您可以在将来的模块中了解更多关于这些对象的信息。

## 动态类型

JavaScript 是一种“动态类型语言”，这意味着不同于其他一些语言 (译者注：如 C、JAVA)，您不需要指定变量将包含什么数据类型（例如 number 或 string）

例如，如果你声明一个变量并给它一个带引号的值，浏览器就会知道它是一个字符串：

```js
let myString = "Hello";
```

即使它包含数字，但它仍然是一个字符串，所以要小心：

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

尝试依次将上述代码输入您的控制台，看看结果是什么（无须输入//之后的注释）。我们使用了一个名为`typeof`的特殊的操作符 ——它会返回所传递给它的变量的数据类型。第一次在上面的代码中调用它，它应该返回 string，因为此时 myNumber 变量包含一个字符串'500'。看看它第二次将返回什么。

## 总结

到目前为止，您应该了解了一些 JavaScript 变量以及如何创建它们。在下一篇文章中，我们将更详细地关注数字，了解如何在 JavaScript 中使用基础数学。

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}
