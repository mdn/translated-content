---
title: 数组
slug: Learn/JavaScript/First_steps/Arrays
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

在本模块的最后一篇文章中，我们将看看数组 —— 一种将一组数据存储在单个变量名下的优雅方式。现在我们看看它有什么用，然后探索如何来创建一个数组，检索、添加和删除存储在数组中的元素，以及其他更多的功能。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的电脑知识，对 HTML、CSS 语法有基础的理解，能理解什么是 JavaScript。
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>理解什么是数组，和如何在 JavaScript 中操作数组。</td>
    </tr>
  </tbody>
</table>

## 数组是什么？

数组通常被描述为“像列表一样的对象”; 简单来说，数组是一个包含了多个值的对象。数组对象可以存储在变量中，并且能用和其他任何类型的值完全相同的方式处理，区别在于我们可以单独访问列表中的每个值，并使用列表执行一些有用和高效的操作，如循环 - 它对数组中的每个元素都执行相同的操作。也许我们有一系列产品和价格存储在一个数组中，我们想循环遍历所有这些产品，并将它们打印在发票上，同时将所有产品的价格统计在一起，然后将总价格打印在底部。

如果我们没有数组，我们必须将每个产品存储在一个单独的变量中，然后调用打印的代码，并为每个产品单独添加。花费的时间要长得多，效率很低，而且也容易出错。如果我们有 10 个产品需要添加发票，那就只是有点麻烦而已，但是 100 个，或者 1000 个呢？我们稍后将在文章中使用这个例子。

像以前的文章一样，我们通过在 JavaScript 控制台中输入一些示例来了解数组的基础知识。我们在下面提供了一个（您也可以在单独的选项卡或窗口中打开此控制台，或者如果您愿意，请使用[浏览器的开发者工具控制台](/zh-CN/docs/Learn/Discover_browser_developer_tools)）。

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

      if (document.querySelectorAll("div").length > 1) {
        inputForm.focus();
      }

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

{{ EmbedLiveSample('数组是什么？', '100%', 300) }}

### 创建数组

数组由方括号构成，其中包含用逗号分隔的元素列表。

1. 假设我们想在一个数组中存储一个购物清单 - 我们会做一些像下面这样的事情。在您的控制台中输入以下行：

   ```js
   let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping;
   ```

2. 在这种情况下，数组中的每个项目都是一个字符串，但请记住，您可以将任何类型的元素存储在数组中 - 字符串，数字，对象，另一个变量，甚至另一个数组。您也可以混合和匹配项目类型 - 它们并不都是数字，字符串等。尝试下面这些：

   ```js
   let sequence = [1, 1, 2, 3, 5, 8, 13];
   let random = ["tree", 795, [0, 1, 2]];
   ```

3. 尝试创建您自己的几个数组，然后再继续往下看。

### 访问和修改数组元素

然后，您可以使用括号表示法访问数组中的元素，与 [检索特定字符串字符](/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods#检索特定字符串字符) 的方法相同。

1. 在您的控制台中输入以下内容：

   ```js
   shopping[0];
   // returns "bread"
   ```

2. 您还可以简单地为单个数组元素提供新值来修改数组中的元素。例如：

   ```js
   shopping[0] = "tahini";
   shopping;
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > **备注：** 我们以前说过，但还是提醒一下 —— 电脑从 0 开始计数！

3. 请注意，数组中包含数组的话称之为多维数组。您可以通过将两组方括号链接在一起来访问数组内的另一个数组。例如，要访问数组内部的一个项目，即 `random` 数组中的第三个项目（参见上一节），我们可以这样做：

   ```js
   random[2][2];
   ```

4. 在继续之前，尝试对您的数组示例进行一些修改。玩一玩，看看哪些有效，哪些无效。

### 获取数组长度

你可以通过使用 {{jsxref("Array.prototype.length","length")}} 属性获取数组的长度（数组中有多少项元素），这与查找字符串的长度（以字符为单位）完全相同。尝试以下代码：

```js
sequence.length;
// should return 7
```

虽然 length 属性也有其他用途，但最常用于循环（循环遍历数组中的所有项）。例如：

```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

您将在以后的文章中正确地了解循环，但简而言之，这段代码的意思是：

1. 在数组中的元素编号 0 开始循环。
2. 在元素编号等于数组长度的时候停止循环。这适用于任何长度的数组，但在这种情况下，它将在编号 7 的时候终止循环（这很好，因为我们希望最后一位元素的编号是 6）。
3. 对于每个元素，使用 [console.log()](/zh-CN/docs/Web/API/Console/log) 将其打印到浏览器控制台。

## 一些有用的数组方法

在本节中，我们将介绍一些相当有用的数组方法，这些方法允许我们将字符串拆分为字符串数组，反之亦然，以及添加或删除元素。

### 字符串和数组之间的转换

通常，您会看到一个包含在一个长长的字符串中的原始数据，您可能希望将有用的项目分成更有用的表单，然后对它们进行处理，例如将它们显示在数据表中。为此，我们可以使用 {{jsxref("String.prototype.split()","split()")}} 方法。在其最简单的形式中，这需要一个参数，您要将字符串分隔的字符，并返回分隔符之间的子串，作为数组中的项。

> **备注：** 好吧，从技术上讲，这是一个字符串方法，而不是一个数组方法，但是我们把它放在数组中，因为它在这里很合适。

1. 我们来玩一下这个方法，看看它是如何工作的。首先，在控制台中创建一个字符串：

   ```js
   let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. 现在我们用每个逗号分隔它：

   ```js
   let myArray = myData.split(",");
   myArray;
   ```

3. 最后，尝试找到新数组的长度，并从中检索一些项目：

   ```js
   myArray.length;
   myArray[0]; // the first item in the array
   myArray[1]; // the second item in the array
   myArray[myArray.length - 1]; // the last item in the array
   ```

4. 您也可以使用 {{jsxref("Array.prototype.join()","join()")}} 方法进行相反的操作。尝试以下：

   ```js
   let myNewString = myArray.join(",");
   myNewString;
   ```

5. 将数组转换为字符串的另一种方法是使用 {{jsxref("Array.prototype.toString()","toString()")}} 方法。 `toString()` 可以比 `join()` 更简单，因为它不需要一个参数，但更有限制。使用 `join()` 可以指定不同的分隔符（尝试使用与逗号不同的字符运行步骤 4）。

   ```js
   let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); //Rocket,Flash,Bella,Slugger
   ```

### 添加和删除数组项

我们还没有涵盖添加和删除数组元素，现在让我们来看看。我们将使用在上一节中最后提到的 `myArray` 数组。如果您尚未遵循该部分，请先在控制台中创建数组：

```js
let myArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
```

首先，要在数组末尾添加或删除一个项目，我们可以使用 {{jsxref("Array.prototype.push()","push()")}} 和 {{jsxref("Array.prototype.pop()","pop()")}}。

1. 让我们先使用 `push()` —— 注意，你需要添加一个或多个要添加到数组末尾的元素。尝试下面的代码：

   ```js
   myArray.push("Cardiff");
   myArray;
   myArray.push("Bradford", "Brighton");
   myArray;
   ```

2. 当方法调用完成时，将返回数组的新长度。如果要将新数组长度存储在变量中。例如：

   ```js
   var newLength = myArray.push("Bristol");
   myArray;
   newLength;
   ```

3. 从数组中删除最后一个元素的话直接使用 `pop()` 就可以。例如：

   ```js
   myArray.pop();
   ```

4. 当方法调用完成时，将返回已删除的项目。你也可以这样做：

   ```js
   let removedItem = myArray.pop();
   myArray;
   removedItem;
   ```

{{jsxref("Array.prototype.unshift()","unshift()")}} 和 {{jsxref("Array.prototype.shift()","shift()")}} 从功能上与 {{jsxref("Array.prototype.push()","push()")}} 和 {{jsxref("Array.prototype.pop()","pop()")}} 完全相同，只是它们分别作用于数组的开始，而不是结尾。

1. 首先 `unshift()` ——尝试一下这个命令：

   ```js
   myArray.unshift("Edinburgh");
   myArray;
   ```

2. 现在 `shift()` —— 尝试一下！

   ```js
   let removedItem = myArray.shift();
   myArray;
   removedItem;
   ```

## 积极学习：打印这些产品

我们回到前面描述的例子 —— 打印出发票上的产品名称和价格，然后计算总价格并将其印在底部。在下面的可编辑示例中，包含数字的注释 —— 每个注释标记都是您必须向代码添加内容的地方。它们如下：

1. 在 `// number 1` 注释下面是一些字符串，每个字符串包含一个产品名称和一个冒号分隔的价格。我们希望您将其转换为一个数组，并将其存储在名为 `products` 的数组中。
2. 与 `// number 2` 注释同一行的是 for 循环的开头。在这行中，我们目前有 `i <= 0`，这是一个条件测试，导致 [for 循环](/zh-CN/docs/Learn/JavaScript/First_steps/A_first_splash#循环（Loop）) 立即停止，因为它说“当 `i` 不再小于或等于 0”时停止，而 `i` 从 0 开始。我们希望您使用条件测试来替换它，当 `i` 不再小于 `products` 数组的长度时，该条件测试会停止循环。
3. 就在 `// number 3` 注释的下方，我们希望您编写一行代码，将当前数组项目（名称：价格）分成两个独立的项目，一个只包含该名称，一个只包含该价格。如果您不确定如何执行此操作，请参阅[有用的字符串方法](/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods)文章以获得一些帮助，甚至更好的看看本文中的[字符串和数组之间的转换](#字符串和数组之间的转换)部分。
4. 作为上述代码行的一部分，您还需要将价格从字符串转换为数字。如果你不记得如何做，请查看[第一个字符串](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#创建一个字符串)文章。
5. 有一个名为 `total` 的变量被创建，并在代码的顶部赋值为 0。在循环内（在 `// number 4` 注释下面），我们希望您添加一行，将当前项目价格添加到循环中的迭代变量，以便在代码结尾处将正确的总数打印到发票上。您可能需要一个赋值运算符来执行此操作。
6. 我们希望您改变 `// number 5` 注释的行，以便使 `itemText` 变量等于“当前项目名称 - $ 当前项目价格”，例如“Shoes - $ 23.99”，以此将每个项目的正确信息都印在发票上。这只是简单的字符串连接，您应该对此很熟悉。

```html hidden
<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<textarea id="code" class="playable-code" style="height: 370px;">
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
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
  "var list = document.querySelector('.output ul');\nvar totalBox = document.querySelector('.output p');\nvar total = 0;\nlist.innerHTML = '';\ntotalBox.textContent = '';\n\nvar products = ['Underpants:6.99',\n                'Socks:5.99',\n                'T-shirt:14.99',\n                'Trousers:31.99',\n                'Shoes:23.99'];\n\nfor(var i = 0; i < products.length; i++) {\n  var subArray = products[i].split(':');\n  var name = subArray[0];\n  var price = Number(subArray[1]);\n  total += price;\n  itemText = name + ' — $' + price;\n\n  var listItem = document.createElement('li');\n  listItem.textContent = itemText;\n  list.appendChild(listItem);\n}\n\ntotalBox.textContent = 'Total: $' + total.toFixed(2);";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('积极学习：打印这些产品', '100%', 600) }}

## 积极学习：前 5 个搜索

当您在 Web 程序中维护当前活动元素的记录时，{{jsxref("Array.prototype.push()","push()")}} 和 {{jsxref("Array.prototype.pop()","pop()")}} 是不错的方法。例如，在动画场景中，您可能会有一系列表示当前显示的背景图像的对象，并且由于性能或混乱原因，您可能只需要一次显示 50 个。当创建新对象并将其添加到数组中时，可以从数组中删除较旧的对象以保持所需的数量。

在这个例子中，我们将展示一种更简单的使用方法 - 在这里我们给你一个假的搜索网站，一个搜索框。这个想法是，当在搜索框中输入时，列表中会显示 5 个先前的搜索字词。当列表项目数量超过 5 时，每当新项目被添加到顶部时，最后一个项目开始被删除，因此总是显示 5 个以前的搜索字词。

> **备注：** 在真正的搜索应用中，您可能可以点击先前的搜索字词返回上一次搜索，并显示实际的搜索结果！我们现在只是保持简单的逻辑。

要完成该应用程序，我们需要您：

1. 在 `//number 1` 注释下面添加一行，将输入到搜索框中的当前值添加到数组的开头。这可以使用 `searchInput.value` 检索。
2. 在 `// number 2` 注释下方添加一行，该行删除数组末尾的当前值。

```html hidden
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>Search</button>

  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 370px;">
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // 如果搜索框不为空，我们则将搜索词添加到开头
  if (searchInput.value !== '') {
    // number 1

    // 清空显示的搜索关键词列表，防止显示
    // 每次输入搜索词都会重新生成显示的内容
    list.innerHTML = '';

    // 通过循环遍历，显示所有的搜索关键词
    for (var i = 0; i < myHistory.length; i++) {
      var itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 如果数组的长度大于 5，那么便移除旧的搜索关键词
    if (myHistory.length >= 5) {
      // number 2

    }

    // 清空并聚焦到搜索框，准备下一次的搜索
    searchInput.value = '';
    searchInput.focus();
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
  "var list = document.querySelector('.output ul');\nvar searchInput = document.querySelector('.output input');\nvar searchBtn = document.querySelector('.output button');\n\nlist.innerHTML = '';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n  if(searchInput.value !== '') {\n    myHistory.unshift(searchInput.value);\n\n    list.innerHTML = '';\n\n    for(var i = 0; i < myHistory.length; i++) {\n     var itemText = myHistory[i];\n      var listItem = document.createElement('li');\n      listItem.textContent = itemText;\n      list.appendChild(listItem);\n    }\n\n    if(myHistory.length >= 5) {\n      myHistory.pop();\n    }\n\n    searchInput.value = '';\n    searchInput.focus();\n  }\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('积极学习：前 5 个搜索', '100%', 600) }}

## 总结

阅读本文后，我们相信您会明白数组是很有用的; 你会看到它们在 JavaScript 中随处可见，通常与循环相关，以便对数组中的每个元素做同样的事情。我们将教你所有有用的基础知识，了解下一个模块中的循环，但现在你应该给自己鼓掌，并稍加休息; 您已经完成了本单元中的所有文章！

唯一需要做的就是通过这个模块的评估，这将测试你对之前的文章的理解。

## 相关链接

- [Indexed collections](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections) — 数组及其表兄弟类型阵列的高级指导。
- {{jsxref("Array")}} — Array 对象引用页面 - 有关此页面中讨论功能的详细参考指南等。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}
