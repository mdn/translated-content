---
title: 有用的字符串方法
slug: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

现在我们学习基本的字符串语法，让我们开始思考一下我们可以对内置方法的字符串做什么有用的操作，例如查找文本字符串的长度，加入和分割字符串，将字符串中的一个字符替换为另一个字符。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的电脑知识，对 HTML 和 CSS 有一定的了解，最好是懂一点 javascript
        知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>明白字符串这个对象，学会使用字符串的基本方法去处理字符串</td>
    </tr>
  </tbody>
</table>

## 把字符串当作对象

我们曾经说过，现在我们重申一遍—在 javascript 中，一切东西都可以被当作对象。例如我们创建一个字符串。

```js
let string = "This is my string";
```

一旦你的变量成为字符串对象实例，你就可以有大量的原型和方法编辑它。如果你进入{{jsxref("String")}}对象页并观察页面旁边的列表你就会明白这一点。

**可能现在你的大脑开始迷糊了，不要担心！** 在你的学习进程中你真的不需要过早地理解大部分这方面知识，但是接下来我们这儿要看的是你要经常使用的一些知识。

现在我们在控制台中加些示例，我们已经提供了以下示例（你可在单独打开控制台标签或窗口，或者选择使用[浏览器开发者控制台](/zh-CN/docs/Learn/Discover_browser_developer_tools)）

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

{{ EmbedLiveSample('把字符串当作对象', '100%', 300) }}

### 获得字符串的长度

这很简单 — 你可以很轻松的使用 {{jsxref("String.prototype.length", "length")}} 属性。尝试输入以下的两行代码：

```js
let browserType = "mozilla";
browserType.length;
```

这个结果应该返回一个数字：7，因为"mozilla"的长度为 7 个字符。说字符串的长度有用是有很多原因的，例如，你可能想算出一连串名字的长度，并用名字长度来作为名字排序的依据，亦或让一个用户知道他输入的用户名太长，已经超出了输入的字符串长度限制。

### 检索特定字符串字符

在相关的注释中，您可以使用方括号表示法返回字符串中的任何字符 - 这意味着您可以在变量名的末尾包含方括号（\[ ]）。在方括号内，您可以包含要返回的字符的编号，例如，您要检索第一个字母，可以这样做：

```js
browserType[0];
```

电脑从 0 开始，不是 1！要检索任何字符串的最后一个字符，我们可以使用下面这行，将这种技术与我们上面看到的 length 属性相结合起来：

```js
browserType[browserType.length - 1];
```

“mozilla”的长度为 7，但由于计数从 0 开始，所以字符位置为 6，因此需要长度为**length-1**。例如，您可以使用它来查找一系列字符串的第一个字母，并按字母顺序排列。

### 在字符串中查找子字符串并提取它

1. 有时候你会想要找出一个较小的字符串是否存在于一个较大的字符串中（我们通常会说一个字符串中存在一个子字符串）。这可以使用{{jsxref("String.prototype.indexOf()","indexOf()")}}方法来完成，该方法需要一个{{glossary("parameter")}} — 你想要搜索的子字符串。尝试以下：

   ```js
   browserType.indexOf("zilla");
   ```

   结果是 2，因为子字符串“zilla”从“mozilla”内的位置 2（0，1，2 —— 所以从第 3 个字符）开始。这样的代码可以用来过滤字符串。例如，假设我们有一个 Web 地址列表，但我们只想打印出包含“mozilla”的那些地址。

2. 这可以用另一种可能更有效的方式来实现。尝试以下：

   ```js
   browserType.indexOf("vanilla");
   ```

   这应该会得到 `-1` 的结果 —— 当在主字符串中找不到子字符串（在本例中为“vanilla”）时将返回 `-1`。

   您可以使用它来查找不包含子串“mozilla”的所有字符串实例，或者如果使用否定运算符，请执行以下操作。你可以这样做：

   ```js
   if (browserType.indexOf("mozilla") !== -1) {
     // do stuff with the string
   }
   ```

3. 当你知道字符串中的子字符串开始的位置，以及想要结束的字符时，{{jsxref("String.prototype.slice()", "slice()")}}可以用来提取 它。尝试以下：

   ```js
   browserType.slice(0, 3);
   ```

   这时返回"moz"——第一个参数是开始提取的字符位置，第二个参数是提取的最后一个字符的后一个位置。所以提取从第一个位置开始，直到但不包括最后一个位置。（此例中）你也可以说第二个参数等于被返回的字符串的长度。

4. 此外，如果您知道要在某个字符之后提取字符串中的所有剩余字符，则不必包含第二个参数，而只需要包含要从中提取的字符位置 字符串中的其余字符。尝试以下：

   ```js
   browserType.slice(2);
   ```

   这返回“zilla” —— 这是因为 2 的字符位置是字母 z，并且因为没有包含第二个参数，所以返回的子字符串是字符串中的所有剩余字符。

> **备注：** `slice()`的第二个参数是可选的：如果没有传入这个参数，分片结束位置会在原始字符串的末尾。这个方法也有其他的选项；学习{{jsxref("String.prototype.slice()", "slice()")}}这页，来看看你还能发现什么其他作用。

### 转换大小写

字符串方法{{jsxref("String.prototype.toLowerCase()","toLowerCase()")}}和{{jsxref("String.prototype.toUpperCase()","toUpperCase()")}}字符串并将所有字符分别转换为小写或大写。例如，如果要在将数据存储在数据库中之前对所有用户输入的数据进行规范化，这可能非常有用。

让我们尝试输入以下几行来看看会发生什么：

```js
let radData = "My NaMe Is MuD";
radData.toLowerCase();
radData.toUpperCase();
```

### 替换字符串的某部分

您可以使用{{jsxref("String.prototype.replace()","replace()")}}方法将字符串中的一个子字符串替换为另一个子字符串。在基础的层面上，这个工作非常简单。你当然可以用它做一些更高级的事情，但目前我们不会涉及到。

它需要两个参数 - 要被替换下的字符串和要被替换上的字符串。尝试这个例子：

```js
browserType.replace("moz", "van");
```

注意，在实际程序中，想要真正更新 `browserType` 变量的值，您需要设置变量的值等于刚才的操作结果；它不会自动更新子串的值。所以事实上你需要这样写：`browserType = browserType.replace('moz','van');`。

## 主动学习的示例

在本节中，我们会让您尽力编写一些字符串操作代码。在下面的每个练习中，我们有一个字符串数组，一个循环，用于处理数组中的每个值，并将其显示在项目符号列表中。您现在不需要了解数组或循环 - 这些将在以后的文章中解释。所有你需要做的每一种情况都是写出将以我们想要的格式输出字符串的代码。

每个示例都附带一个“重置”按钮，您可以使用该按钮重置代码，如果您犯了错误，并且无法再次工作，并且显示解决方案按钮，您可以按下来看到一个潜在的答案，如果你真的卡住了。

### 过滤问候留言

在第一个练习中，我们将简单介绍一下 - 我们有一系列的问候卡片消息，但我们希望对它们进行排序，以列出圣诞消息。我们希望您在 `if(...)` 结构中填写条件测试，以测试每个字符串，并将其打印在列表中，如果它是圣诞消息。

1. 首先考虑一下如何测试每种情况下的消息是否为圣诞消息。所有这些消息中都有什么字符串，您可以使用什么方法来测试是否存在？
2. 然后，您需要编写 _操作数 1 操作符 操作数 2_ 形式的条件测试。左边的东西等于右边的东西吗？或者在这种情况下，方法调用在左边返回的结果在右边？
3. 提示：在这种情况下，测试方法调用是否不等于某个结果可能更有用。

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 290px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar greetings = ['Happy Birthday!',\n                 'Merry Christmas my love',\n                 'A happy Christmas to all the family',\n                 'You\\'re all I want for Christmas',\n                 'Get well soon'];\n\nfor(var i = 0; i < greetings.length; i++) {\n  var input = greetings[i];\n  if(greetings[i].indexOf('Christmas') !== -1) {\n    var result = input;\n    var listItem = document.createElement('li');\n    listItem.textContent = result;\n    list.appendChild(listItem);\n  }\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('过滤问候留言', '100%', 490) }}

### 大写修正

在这个练习中，我们有英国城市的名字，但是这个大写字母都搞砸了。我们希望你改变它们，使它们都是小写字母，除了首字母。一个很好的方法是：

1. 将输入变量中包含的整个字符串转换为小写，并将其存储在新变量中。
2. 在此新变量中获取字符串的第一个字母并将其存储在另一个变量中。
3. 将此最新变量用作子字符串，将小写字符串的第一个字母从小写更改为大写。将此替换过程的结果存储在另一个新变量中。
4. 让 `result` 变量的值与最终结果相等，而不是使用 `input` 变量。

> **备注：** 一个提示 - 字符串方法的参数不必是字符串文字; 它们也可以是变量，甚至是在其上调用方法的变量。

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 250px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];\n\nfor(var i = 0; i < cities.length; i++) {\n  var input = cities[i];\n  var lower = input.toLowerCase();\n  var firstLetter = lower.slice(0,1);\n  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n  var result = capitalized;\n  var listItem = document.createElement('li');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('大写修正', '100%', 450) }}

### 从原先部分得到新字符串

在最后一个练习中，阵列包含一堆字符串，其中包含有关英格兰北部火车站的信息。字符串是包含三字母站代码的数据项，后面是一些机器可读数据，后跟分号，后跟可读站名。例如：

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

我们要提取站点代码和名称，并将它们放在一起，具有以下结构的字符串：

```plain
MAN: Manchester Piccadilly
```

我们建议这样做：

1. 提取三个字母的站代码并将其存储在一个新的变量中。
2. 查找分号的字符索引号。
3. 使用分号字符索引号作为参考点提取人可读的站名，并将其存储在新变量中。
4. 连接两个新的变量和一个字符串文字，使最终的字符串。
5. 将 `result` 变量的值更改为等于最终的字符串，而不是 `input`。

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 285px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar stations = ['MAN675847583748sjt567654;Manchester Piccadilly',\n                'GNF576746573fhdg4737dh4;Greenfield',\n                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',\n                'SYB4f65hf75f736463;Stalybridge',\n                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];\n\nfor(var i = 0; i < stations.length; i++) {\n  var input = stations[i];\n  var code = input.slice(0,3);\n  var semiC = input.indexOf(';');\n  var name = input.slice(semiC + 1);\n  var final = code + ': ' + name;\n  var result = final;\n var listItem = document.createElement('li');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('从原先部分得到新字符串', '100%', 485) }}

## 结论

你不能逃避的事实是在编程中处理单词和句子是非常重要的——特别是在 JavaScript 中，因为网站都是关于与人沟通的。本文已经给出了您现在需要了解的关于操作字符串的基础知识。这将在未来进入更复杂的主题时为您服务。接下来，我们将在短期内研究我们需要关注的最后一个主要的数据类型——数组。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
