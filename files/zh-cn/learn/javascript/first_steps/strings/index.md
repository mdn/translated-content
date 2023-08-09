---
title: 文本处理 — JavaScript 中的字符串
slug: Learn/JavaScript/First_steps/Strings
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

接下来，我们将把注意力转向文本片段——也就是编程中所说的**字符串**。在本文中，我们将了解在学习 JavaScript 时，您应该了解的关于字符串的所有常见事项，例如创建字符串、在字符串中转义引号，和连接字符串。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机读写能力，对 HTML 和 CSS 的基本理解，对 JavaScript 的理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>要熟悉 JavaScript 中字符串的基本知识。</td>
    </tr>
  </tbody>
</table>

## 语言的力量

语言对人类非常重要——它们是我们交流的重要组成部分。由于 Web 是一种主要基于文本的媒介，旨在让人们进行交流和分享信息，因此对我们来说，掌握它所出现的单词是很有用的。{{glossary("HTML")}}为我们的文本提供了结构和意义， {{glossary("CSS")}} 允许我们精确地设计它的样式，JavaScript 包含许多操作字符串的特性，创建定制的欢迎消息，在需要时显示正确的文本标签，将术语排序到所需的顺序，等等。

到目前为止，我们在课程中展示的所有程序都涉及到一些字符串操作。

## 字符串——基本知识

字符串与数字的处理方式第一眼看上去十分相似，但是当你深入挖掘时，你将会看到一些显著的差异。让我们首先在一个控制台输入一些基本的行来熟悉一下。
我们在下面提供了一个（你也可以在一个单独的选项卡或窗口中[打开这个控制台](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html)，或者如果你愿意使用[浏览器开发人员控制台](/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)）。

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
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement("div");
      var inputPara = document.createElement("p");
      var inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch (e) {
        var result = "error — " + e.message;
      }

      var outputDiv = document.createElement("div");
      var outputPara = document.createElement("p");

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

{{ EmbedLiveSample('字符串——基本知识', '100%', 300) }}

### 创建一个字符串

1. 首先，输入下面的代码：

   ```js
   let string = "The revolution will not be televised.";
   string;
   ```

   就像我们处理数字一样，我们声明一个变量，用一个字符串值初始化它，然后返回值。这里惟一的区别是，在编写字符串时，我们需要在字符串上加上引号。

2. 如果你不这样做，或者在书写过程中，漏掉其中一个引号，你就会得到一个错误。
   试着输入以下几行：

   ```js example-bad
   let badString = This is a test;
   let badString = 'This is a test;
   let badString = This is a test';
   ```

   这些行不起作用，因为没有引号的任何文本字符串都被假定为变量名、属性名、保留字或类似。如果浏览器不能找到它，那么将会引发语法错误（例如：“missing ; before statement”）。
   如果浏览器能够识别字符串从哪里开始，但是不能找到字符串的结尾符，如第二行所示，那么它则会提示这样的错误 (“unterminated string literal”)。如果您写的程序目前也引发这样的错误，那么请你回过头来仔细检查你的代码，看是否漏写了引号。

3. 如果您之前定义了变量字符串，下面的操作将会起作用 — 现在来试一试：

   ```js
   let badString = string;
   badString;
   ```

   现在将 `string` 的值赋值给 `badString`，赋值之后，两个字符串的值相等。

### 单引号和双引号

1. 在 JavaScript 中，您可以选择单引号或双引号来包裹字符串。
   下面两种方式都可以：

   ```js
   let sgl = "Single quotes.";
   let dbl = "Double quotes";
   sgl;
   dbl;
   ```

2. 两者之间几乎没有什么区别，根据个人偏好来使用。但是，您应该选择一个并坚持使用它，不一致的引号混用代码可能会让人很迷惑，特别是如果您在同一个字符串中使用不同的引号！
   下面将返回一个错误：

   ```js example-bad
   let badQuotes = 'What on earth?";
   ```

3. 浏览器会认为字符串没有被关闭，因为在字符串中您没有使用其他类型的引号。
   例如，这两种情况都是可以的：

   ```js
   let sglDbl = 'Would you eat a "fish supper"?';
   let dblSgl = "I'm feeling blue.";
   sglDbl;
   dblSgl;
   ```

4. 但是，您不能在字符串中包含相同的引号，因为它是用来包含它们的。下面将会出现错误，因为它会混淆浏览器和字符串的结束位置：

   ```js example-bad
   let bigmouth = 'I've got no right to take my place...';
   ```

   这个指引将会让我们很好地进入下一个主题。

### 转义字符串中的字符

要修复我们之前的问题代码行，我们需要避免引号的问题。转义字符意味着我们对它们做一些事情，以确保它们被识别成文本，而不是代码的一部分。在 JavaScript 中，我们通过在字符之前放一个反斜杠来实现这一点。试试这个：

```js-nolint
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
```

这回正常了。你可以用别的方式来达到一样的目的，例如。`\",` 除此之外有一些特殊的代码。更多细节请参见[转义符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#Parameters)。

## 连接字符串

1. 连接是一个很花哨的编程词，意思是“连接在一起”。在 JavaScript 中连接字符串使用加号 (+) 操作符，我们也用它来将数字加在一起，但是在这种情况下，它做了一些不同的事情。让我们在控制台中尝试一个例子。

   ```js
   let one = "Hello, ";
   let two = "how are you?";
   let joined = one + two;
   joined;
   ```

   变量 `joined` 的值的结果，它包含的值为 "Hello, how are you?"。

2. 最后一个例子中，我们只是把两个字符串连接在一起，但是你可以喜欢连接多少就多少个，只需要在它们之间加上 + 操作符。试试这个：

   ```js
   let multiple = one + one + one + one + two;
   multiple;
   ```

3. 你还能用真实的字符串和变量来混合。试试这个：

   ```js
   let response = one + "I am fine — " + two;
   response;
   ```

> **备注：** 当您在您的代码中输入一个实际的字符串时，用单引号或双引号括起来，它被称为字符串文字。

### 上下文中的串联

让我们看一下在操作中使用的连接——这是本课程早些时候的一个例子：

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

{{ EmbedLiveSample('上下文中的串联', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

这里我们使用的是第 4 行中的 {{domxref("window.prompt()", "window.prompt()")}} 函数，它要求用户通过一个弹出对话框回答一个问题然后将他们输入的文本存储在一个给定的变量中 — 在这个例子中是就是 `name` 变量。然后，我们在第 5 行中使用 {{domxref("window.alert()","window.alert()")}} 函数来显示另一个弹出窗口，其中包含一个字符串，我们用两个字符串常量和 name 变量通过连接进行组合。

### 数字与字符串

1. 当我们尝试添加 (或连接) 一个字符串和一个数字时，会发生什么？
   让我们在我们的控制台中尝试一下：

   ```js
   "Front " + 242;
   ```

   您可能会认为这会抛出一个错误，但它运行得很好。
   试图将字符串表示为一个数字并不是很讲的通，但是用数字表示一个字符串则不然，因此浏览器很聪明地将数字转换为字符串，并将这两个字符串连接在一起。

2. 你甚至可以用两个数字来这么操作——你可以通过用引号将数字包装成一个字符串。尝试以下方法 (我们使用 typeof 操作符来检查变量是一个数字还是一个字符串):

   ```js
   let myDate = "19" + "67";
   typeof myDate;
   ```

3. 如果您有一个数值变量，您想要将其转换为字符串，并且不改变其他地方，或者您想将一个字符串转换为一个数字而不改变其其他地方，那么您可以使用以下两个构造：

   - 如果可以的话， {{jsxref("Number")}} 对象将把传递给它的任何东西转换成一个数字。
     试一试：

     ```js
     let myString = "123";
     let myNum = Number(myString);
     typeof myNum;
     ```

   - 另一方面，每个数字都有一个名为 [toString()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 的方法，它将把它转换成等价的字符串。
     试试这个：

     ```js
     let myNum = 123;
     let myString = myNum.toString();
     typeof myString;
     ```

   这些结构在某些情况下是非常有用的，例如，如果一个用户将一个数字输入到一个表单文本字段中，这将是一个字符串，但是如果你想要将这个数字添加到某些东西中时，你需要它是一个数字，所以你可以通过 `Number()` 来处理这个问题。我们在[数字猜谜游戏中第 54 行](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L54)就是这么做的。

## 结论

这就是 JavaScript 中所涉及的字符串的基本内容。在下一篇文章中，我们将在此基础上，研究 JavaScript 中字符串的一些内置方法，以及如何使用它们来操纵我们的字符串，使之成为我们想要的形式。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
