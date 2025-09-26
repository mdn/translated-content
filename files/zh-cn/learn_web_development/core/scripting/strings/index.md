---
title: 文本处理——JavaScript 中的字符串
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: 3e77d220b829f7477da24af0fa4acf1a54f5dbc9
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

接下来，我们将把注意力转向字符串——也就是编程中所说的文本片段。在本文中，我们将了解在学习 JavaScript 时，你应该了解的关于字符串的所有常见内容，例如创建字符串、在字符串中转义引号和连接字符串。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机读写能力，对 HTML 和 CSS 的基本理解，对 JavaScript 的理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>熟悉 JavaScript 中字符串的基本知识。</td>
    </tr>
  </tbody>
</table>

## 语言的力量

语言对人类非常重要——它们是我们交流的重要组成部分。由于 Web 是一种主要基于文本的媒介，旨在让人们进行交流和分享信息，因此对我们来说，掌握它所出现的文本是很有用的。{{glossary("HTML")}} 为我们的文本提供了结构和意义，{{glossary("CSS")}} 允许我们精确地设计它的样式，JavaScript 包含许多操作字符串的特性：创建定制的欢迎消息、在需要时显示正确的文本标签、将术语排序成所需的顺序，等等。

到目前为止，我们在课程中展示的所有程序都涉及到一些字符串操作。

## 创建字符串

乍一看，字符串的操作方式与数字类似，但当你深入研究时，你会发现一些显著的差异。让我们在[浏览器开发者控制台](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)中输入一些基本的代码来熟悉一下。

首先，输入以下几行：

```js
const string = "这场革命将不会被电视转播。";
console.log(string);
```

就像我们处理数字一样，我们声明一个变量，并用一个字符串值初始化它，然后返回值。这里唯一的区别是，在编写字符串时，我们需要在字符串值的两边加上引号。

如果你不这样做，或者在书写过程中，漏掉其中一个引号，你就会得到一个错误。试着输入以下几行：

```js example-bad
const badString1 = 这是一个测试;
const badString2 = '这是一个测试;
const badString3 = 这是一个测试';
```

这几行不起作用，因为没有用引号包裹的任何文本字符串都被假定为变量名、属性名、保留字，等等。如果浏览器不能找到它，那么将会引发错误（例如：“missing; before statement”）。如果浏览器能够识别字符串从哪里开始，但是不能找到字符串的结尾符，如第二行所示，那么它也会引发错误（带有“unterminated string literal”)。如果你写的程序目前也引发这样的错误，那么请回过头来仔细检查所有字符串，以确保没有漏写引号。

如果你之前定义了变量 `string`，下面的操作将会起作用——尝试一下：

```js
const badString = string;
console.log(badString);
```

`badString` 的值现在被设置为了与 `string` 具有相同的值。

### 单引号、双引号和反引号

在 JavaScript 中，你可以选择单引号（`'`）、双引号（`"`）或反引号（`` ` ``）来包裹字符串。以下所有方法都可以：

```js-nolint
const single = '单引号';
const double = "双引号";
const backtick = `反引号`;

console.log(single);
console.log(double);
console.log(backtick);
```

字符串的开头和结尾必须使用相同的字符，否则会出现错误：

```js-nolint example-bad
const badQuotes = '不允许这样写！";
```

使用单引号声明的字符串和使用双引号声明的字符串是相同的，你可以根据个人偏好来使用。但推荐选择一种样式并在代码中保持一致。

使用反引号声明的字符串是一种特殊字符串，被称为[_模板字面量_](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)。在大多数情况下，模板字面量与普通字符串类似，但它具有一些特殊的属性：

- 你可以在其中[嵌入 JavaScript](#嵌入_javascript)
- 你可以声明[多行](#多行字符串)的模板字面量

## 嵌入 JavaScript

在模板字面量中，你可以在 `${ }` 中包装 JavaScript 变量或表达式，其结果将被包含在字符串中：

```js
const name = "克里斯";
const greeting = `你好，${name}`;
console.log(greeting); // "你好，克里斯"
```

你可以使用相同的技术来连接两个变量：

```js
const one = "你好，";
const two = "请问最近如何？";
const joined = `${one}${two}`;
console.log(joined); // "你好，请问最近如何？"
```

像这样连接字符串被称为*串联*（concatenation）。

### 上下文中的串联

让我们看一下实际使用的串联：

```html
<button>按这里</button>
<div id="greeting"></div>
```

```js
const button = document.querySelector("button");

function greet() {
  const name = prompt("你叫什么名字？");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `你好呀，${name}！很高兴见到你！`;
}

button.addEventListener("click", greet);
```

{{EmbedLiveSample('上下文中的串联', '100%', 50, , , , , 'allow-modals')}}

这里我们使用了第 4 行中的 {{domxref("window.prompt()", "window.prompt()")}} 函数，它要求用户在弹出的对话框中回答一个问题然后将他们输入的文本存储在一个给定的变量中——在这个示例中是 `name` 变量。然后，我们将名称插入通用的问候消息中，并显示该字符串。

### 使用“+”连接字符串

你只能将 `${}` 与模板字面量一起使用，而不能与不同字符串一起使用。你可以使用 `+` 运算符来连接普通字符串。

```js
const greeting = "你好";
const name = "克里斯";
console.log(greeting + "，" + name); // "你好，克里斯"
```

但是，模板字面量通常更具可读性：

```js
const greeting = "你好";
const name = "克里斯";
console.log(`${greeting}，${name}`); // "你好，克里斯"
```

### 在字符串中包含表达式

除了变量，你还可以在模板字面量中包含 JavaScript 表达式，表达式的结果将包含在最终的结果中：

```js
const song = "青花瓷";
const score = 9;
const highestScore = 10;
const output = `我喜欢歌曲《${song}》。我给它打了 ${
  (score / highestScore) * 100
} 分。`;
console.log(output); // "我喜欢歌曲《青花瓷》。我给它打了 90 分。"
```

## 多行字符串

模板字符串会保留源代码中的换行符，因此你可以编写跨越多行的字符串，如下所示：

```js
const newline = `终于有一天，
你知道了必须做的事情，而且开始……`;
console.log(newline);

/*
终于有一天，
你知道了必须做的事情，而且开始……
*/
```

要使用普通字符串获得等效的输出，你必须在字符串中包含换行字符（`\n`）：

```js
const newline = "终于有一天，\n你知道了必须做的事情，而且开始……";
console.log(newline);

/*
终于有一天，
你知道了必须做的事情，而且开始……
*/
```

有关更多示例和高级特性的详细信息，请参阅我们的[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)参考页面。

## 在字符串中包含引号

既然我们使用引号来表示字符串的开始和结束，那么我们如何在字符串中包含实际的引号呢？我们知道这样做是不行的：

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

一种常见的方法是换用其他字符来声明字符串：

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

另一种选择是*转义*存在问题的引号。转义字符意味着我们对它们做了一些处理，以确保它们被识别为文本，而不是代码的一部分。在 JavaScript 中，我们通过在字符之前加上反斜杠来实现这一点。试试这个：

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

你可以使用相同的技术来插入其他特殊字符。有关更多详细信息，请参阅[转义序列](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#转义序列)。

## 数字与字符串

当我们尝试连接一个字符串和数字时会发生什么？让我们在控制台中尝试一下：

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

你可能会认为这会返回一个错误，但它可以正常工作。数字应该如何显示为字符串是相当明确的，所以浏览器会自动将数字转换为字符串，并将两个字符串连接起来。

如果你有一个数字变量，你想将其转换为字符串，或者你想将一个字符串变量转换为数字，你可以使用以下两个结构：

- 如果可以的话，{{jsxref("Number/Number", "Number()")}} 函数会将其参数转换为数字。试试这个：

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- 相反，{{jsxref("String/String", "String()")}} 函数将其参数转换为字符串。试试这个：

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

这些结构在某些情况下非常有用。例如，如果用户在表单的文本字段中输入一个数字，那么它就是一个字符串。然而，如果你想将这个数字与某个值相加，则需要它是一个数字，因此你可以通过 `Number()` 来处理它。我们在[数字猜谜游戏的第 59 行](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L59)是这样做的。

## 结论

这就是 JavaScript 中所涉及的字符串的基础知识。在下一篇文章中，我们将在此基础上，研究 JavaScript 中字符串的一些内置方法，以及如何使用它们来操作我们的字符串，使之成为我们想要的形式。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
