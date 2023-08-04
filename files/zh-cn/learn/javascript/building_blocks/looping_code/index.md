---
title: 循环吧，代码
slug: Learn/JavaScript/Building_blocks/Looping_code
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

编程语言可以很迅速方便地帮我们完成一些重复性的任务，从多个基本计算到几乎完成了很多类似工作的其他情况。现在我们来看看处理这种需求的 JavaScript 中可用的循环结构。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提条件：</th>
      <td>
        基本的电脑知识，对 HTML 与 CSS 有基本的了解，及已阅读：
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps"
          >JavaScript first steps</a
        >（JS 的入门）.
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何在 JS 里面使用循环语句。</td>
    </tr>
  </tbody>
</table>

## 来一起循环

循环，循环，循环。就与这些：[popular breakfast cereals](https://en.wikipedia.org/wiki/Froot_Loops), [roller coasters](https://en.wikipedia.org/wiki/Vertical_loop) and [musical production](<https://en.wikipedia.org/wiki/Loop_(music)>) 一样，类似存在于编程中。编程中的循环也是一直重复着去做一件事 - 此处循环便是编程中的术语。

让我们来想一下下图，这位农夫考虑为他的家庭做一周的食物计划，他或许就需要执行一段循环：

![](https://raw.githubusercontent.com/agnoCJY/agno.github.io/master/loop_js-02-farm-cn.png)

一段循环通常需要一个或多个条件：

- **一个开始条件，**它被初始化为一个特定的值 - 这是循环的起点 ("开始：我没有食物”，上面）。
- **一个结束条件，**这是循环停止的标准 - 通常计数器达到一定值。以上所说的“我有足够的食物”吗？假设他需要 10 份食物来养活他的家人。
- **一个迭代器，**这通常在每个连续循环上递增少量的计数器，直到达到退出条件。我们以前没有明确说明，但是我们可以考虑一下农民能够每小时收集 2 份食物。每小时后，他收集的食物量增加了两倍，他检查他是否有足够的食物。如果他已经达到 10 分（退出条件），他可以停止收集回家。

在 {{glossary("伪代码")}} 中，这看起来就像下面这样：

```js
loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop;
    // 我们有足够的食物了，回家吧。
  } else {
    food += 2; // 花一个小时多收集两个食物。
    // 循环将会继续执行。
  }
}
```

所以需要的食物量定为 10，农民目前的数量为 0。在循环的每次迭代中，我们检查农民的食物量是否等于他需要的量。如果是这样，我们可以退出循环。如果没有，农民花一个小时收集两部分食物，循环再次运行。

### 为何？

在这一点上，您可能会了解循环中的高级概念，但您可能会认为“好的，但是，这有助于我编写更好的 JavaScript 代码？”正如我们前面所说，循环与所做的事情都是一样的，这对于快速完成重复任务是非常有用的。

通常，循环的每个连续迭代的代码将略有不同，这意味着您可以完成相同但略有不同的任务的全部负载 - 如果您有很多不同的计算要做，做不同的一个，不一样的一个又一个！

让我们来看一个例子来完美地说明为什么循环是一件好事。假设我们想在{{htmlelement("canvas")}}元素上绘制 100 个随机圆（按更新按钮一次又一次地运行示例以查看不同的随机集）：

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Random canvas circles</title>
    <style>
      html {
        width: 100%;
        height: inherit;
        background: #ddd;
      }

      canvas {
        display: block;
      }

      body {
        margin: 0;
      }

      button {
        position: absolute;
        top: 5px;
        left: 5px;
      }
    </style>
  </head>
  <body>
    <button>Update</button>

    <canvas></canvas>

    <script>
      var btn = document.querySelector("button");
      var canvas = document.querySelector("canvas");
      var ctx = canvas.getContext("2d");

      var WIDTH = document.documentElement.clientWidth;
      var HEIGHT = document.documentElement.clientHeight;

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function draw() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (var i = 0; i < 100; i++) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,0,0,0.5)";
          ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      btn.addEventListener("click", draw);
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('为何？', '100%', 400) }}

您现在不需要理解所有代码，但我们来看看实际绘制 100 个圆的那部分代码：

```js
for (var i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

- `random()`,在前面的代码中定义过了，返回一个 `0` 到 x-1 间的整数。
- `WIDTH` 和`HEIGHT` 浏览器内部窗口的宽度和高度。

您应该有一个基本的想法 - 我们使用一个循环来运行这个代码的 100 次迭代，其中每一个在页面上的随机位置绘制一个圆。无论我们绘制 100 个圆，1000 还是 10,000，所需的代码量将是相同的。只有一个数字必须改变。

如果我们在这里没有使用循环，我们必须为我们想要绘制的每个圆重复以下代码：

```js
ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```

这将非常无聊而且很难维持高速。循环真的相当好用。

## 循环的标准

我们开始探索一些特定的循环结构。第一个，你会经常使用到它，for 循环 - 以下为 for 循环的语法：

```plain
for (initializer; exit-condition; final-expression) {
  // code to run
}
```

我们有：

1. 关键字`for`，后跟一些括号。
2. 在括号内，我们有三个项目，以分号分隔：

   1. 一个**初始化器** - 这通常是一个设置为一个数字的变量，它被递增来计算循环运行的次数。它也有时被称为**计数变量**。
   2. 一个**退出条件** - 如前面提到的，这个定义循环何时停止循环。这通常是一个表现为比较运算符的表达式，用于查看退出条件是否已满足的测试。
   3. 一个**最终条件** - 这总是被判断（或运行），每个循环已经通过一个完整的迭代消失时间。它通常用于增加（或在某些情况下递减）计数器变量，使其更接近退出条件值。

3. 一些包含代码块的花括号 - 每次循环迭代时都会运行这个代码。

我们来看一个真实的例子，所以我们可以看出这些做得更清楚。

```js
var cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
var info = "My cats are called ";
var para = document.querySelector("p");

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ", ";
}

para.textContent = info;
```

这给我们以下输出：

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Basic for loop example</title>
    <style></style>
  </head>
  <body>
    <p></p>

    <script>
      var cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
      var info = "My cats are called ";
      var para = document.querySelector("p");

      for (var i = 0; i < cats.length; i++) {
        info += cats[i] + ", ";
      }

      para.textContent = info;
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('循环的标准', '100%', 60, "", "", "hide-codepen-jsfiddle") }}

> **备注：** 您可以[在 GitHub 上找到这段示例代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/basic-for.html)。 （也可以[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for.html)）。

这显示了一个循环用于迭代数组中的项目，并与每个项目进行一些操作 - JavaScript 中非常常见的模式。这里：

1. 迭代器`i`从 0 开始（`var i = 0`）。
2. 循环将会一直运行直到它不再小于猫数组的长度。这很重要 - 退出条件显示循环仍然运行的条件。所以在这种情况下，`< cats.length` 仍然是真的，循环仍然运行。
3. 在循环中，我们将当前的循环项（`cats[i]`是`cats[当前下标的任何东西]`）以及逗号和空格连接到`info`变量的末尾。所以：

   1. 在第一次运行中，`i = 0`，所以 `cats[0] +', '` 将被连接到 `info("Bill")` 上。
   2. 在第二次运行中，`i = 1`，所以 `cats[1] +', '` 将被连接到 `info("Jeff")` 上。
   3. 等等。每次循环运行后，1 将被添加到 i（`i++`），然后进程将再次启动。

4. 当等于`cats.length`时，循环将停止，浏览器将移动到循环下面的下一个代码位。

> **备注：** 我们将退出条件设为 `< cats.length`，而不是 `<= cats.length` 是因为计算机从 0 开始，而不是 1 - 开始时 `i` 是 0，并且逐步增加到 `i = 4`（最后一个数组的索引）。 `cats.length` 返回 5，因为数组中有 5 个项目，但是我们不希望达到 `i = 5`，因为这将返回未定义的最后一个项目（没有索引为 5 的数组项目）。所以我们想要比 `cats.length` 少 1（`i <`），而不是 `cats.length`（`i <=`）。

> **备注：** 退出条件的一个常见错误是使它们使用“等于”(`===`) 而不是说“小于或等于”(`<=`)。如果我们想要运行我的循环到`i = 5`，退出条件将需要是`i <= cats.length`。如果我们设置为`i === cats.length`，循环将不会运行，因为在第一次循环迭代时 i 不等于 5，所以循环会立即停止。

我们留下的一个小问题是最后的输出句子形式不是很好：

> My cats are called Bill, Jeff, Pete, Biggles, Jasmin,

理想情况下，我们想改变最后循环迭代中的连接，以便在句子末尾没有逗号。嗯，没问题 - 我们可以很高兴地在我们的 for 循环中插入一个条件来处理这种特殊情况：

```js
for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }
}
```

> **备注：** 您可以[在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/basic-for-improved.html)。（也可以[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html)）

> **警告：** 使用`for`- 与所有循环一样，您必须确保初始化程序被迭代，以便最终达到退出条件。如果没有，循环将永不停止，浏览器将强制它停止，否则会崩溃。这被称为无限循环。

## 使用 break 退出循环

如果要在所有迭代完成之前退出循环，可以使用 break 语句。当我们查看 switch 语句时，我们已经在上一篇文章中遇到过这样的情况 - 当 switch 语句中符合输入表达式的情况满足时，break 语句立即退出 switch 语句并移动到代码之后。

与循环相同 - break 语句将立即退出循环，并使浏览器移动到跟随它的任何代码。

说我们想搜索一系列联系人和电话号码，只返回我们想要找的号码？首先，一些简单的 HTML - 一个文本{{htmlelement("input")}}，允许我们输入一个名称来搜索，一个{{htmlelement("button")}}元素来提交搜索，以及一个{{htmlelement ("p")}}元素显示结果：

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

然后是 JavaScript：

```js
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent =
        splitContact[0] + "'s number is " + splitContact[1] + ".";
      break;
    } else if (i === contacts.length - 1) {
      para.textContent = "Contact not found.";
    }
  }
});
```

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple contact search example</title>
    <style></style>
  </head>
  <body>
    <label for="search">Search by contact name: </label>
    <input id="search" type="text" />
    <button>Search</button>

    <p></p>

    <script>
      var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
      var para = document.querySelector('p');
      var input = document.querySelector('input');
      var btn = document.querySelector('button');

      btn.addEventListener('click', function() {
        var searchName = input.value;
        input.value = '';
        input.focus();
        for (var i = 0; i < contacts.length; i++) {
          var splitContact = contacts[i].split(':');
          if (splitContact[0] === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
          } else if (i === contacts.length-1)
                para.textContent = 'Contact not found.';
          }
        }
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('使用 break 退出循环', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

1. 首先我们有一些变量定义 - 我们有一个联系信息数组，每个项目是一个字符串，包含一个以冒号分隔的名称和电话号码。
2. 接下来，我们将一个事件监听器附加到按钮（`btn`）上，这样当按下它时，运行一些代码来执行搜索并返回结果。
3. 我们将输入的值输入到一个名为`searchName`的变量中，然后清空文本输入并重新对准它，准备进行下一个搜索。
4. 现在有趣的部分，for 循环：

   1. 我们的计数器开始时为在 0，直到计数器不再小于`contacts.length`，并在循环的每次迭代之后将`i`递增 1。
   2. 在循环中，我们首先将当前联系人（`contacts [i]`）拆分为冒号字符，并将生成的两个值存储在名为`splitContact`的数组中。
   3. 然后，我们使用条件语句来测试`splitContact [0]`（联系人姓名）是否等于输入的`searchName`。如果是，我们在段落中输入一个字符串来报告联系人的号码，并使用 break 来结束循环。

5. 在`(contacts.length-1)` 迭代后，如果联系人姓名与输入的搜索不符，则段落文本设置为“未找到联系人”，循环继续迭代。

> **备注：** 您可以[在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html)或[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)。

## 使用 continue 跳过迭代

continue 语句以类似的方式工作，而不是完全跳出循环，而是跳过当前循环而执行下一个循环。我们来看另外一个例子，它把一个数字作为一个输入，并且只返回开平方之后为整数的数字（整数）。

HTML 与最后一个例子基本相同 - 一个简单的文本输入和一个输出段落。JavaScript 也是一样的，虽然循环本身有点不同：

```js
var num = input.value;

for (var i = 1; i <= num; i++) {
  var sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + " ";
}
```

Here's the output:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Integer squares generator</title>
    <style></style>
  </head>
  <body>
    <label for="number">Enter number: </label>
    <input id="number" type="text" />
    <button>Generate integer squares</button>

    <p>Output:</p>

    <script>
      var para = document.querySelector("p");
      var input = document.querySelector("input");
      var btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        para.textContent = "Output: ";
        var num = input.value;
        input.value = "";
        input.focus();
        for (var i = 1; i <= num; i++) {
          var sqRoot = Math.sqrt(i);
          if (Math.floor(sqRoot) !== sqRoot) {
            continue;
          }

          para.textContent += i + " ";
        }
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('使用 continue 跳过迭代', '100%', 100) }}

1. 在这种情况下，输入应为数字（`num`）。for 循环给定一个从 1 开始的计数器（在这种情况下，我们对 0 不感兴趣），一个退出条件，当计数器大于输入`num`时循环将停止，并且迭代器的计数器将每次增加 1。
2. 在循环中，我们使用`Math.sqrt(i)`找到每个数字的平方根，然后测试平方根是否是一个整数，通过判断当它被向下取整时，它是否与自身相同（这是`Math.floor(...)`对传递的数字的作用）。
3. 如果平方根和四舍五入的平方根不相等（`!==`），则表示平方根不是整数，因此我们对此不感兴趣。在这种情况下，我们使用 continue 语句跳过当前循环而执行下一个循环迭代，而不在任何地方记录该数字。
4. 如果平方根是一个整数，我们完全跳过 if 块，所以 continue 语句不被执行; 相反，我们将当前 i 值加上一个空格连接到段落内容的末尾。

> **备注：** 您可以[在 GitHub 上查看完整代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html)，或者[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)。

## while 语句和 do ... while 语句

`for` 不是 JavaScript 中唯一可用的循环类型。实际上还有很多其他的，而现在你不需要理解所有这些，所以值得看几个人的结构，这样你就可以在稍微不同的方式识别出相同的功能。

首先，我们来看看 while 循环。这个循环的语法如下所示：

```plain
initializer
while (exit-condition) {
  // code to run

  final-expression
}
```

除了在循环之前设置初始化器变量，并且在运行代码之后，循环中包含 final-expression，而不是这两个项目被包含在括号中，这与以前的 for 循环非常类似。退出条件包含在括号内，前面是 while 关键字而不是 for。

同样的三个项目仍然存在，它们仍然以与 for 循环中相同的顺序定义 - 这是有道理的，因为您必须先定义一个初始化器，然后才能检查它是否已到达退出条件; 在循环中的代码运行（迭代已经完成）之后，运行最后的条件，这只有在尚未达到退出条件时才会发生。

我们再来看看我们的猫列表示例，但是重写了一个 while 循环：

```js
var i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
}
```

> **备注：** This still works just the same as expected — have a look at it [running live on GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (also view the [full source code](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

[do...while](/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while)循环非常类似但在 while 后提供了终止条件：

```plain
initializer
do {
  // code to run

  final-expression
} while (exit-condition)
```

在这种情况下，在循环开始之前，初始化程序先重新开始。do 关键字直接在包含要运行的代码的花括号和终止条件之前。

这里的区别在于退出条件是一切都包含在括号中，而后面是一个 while 关键字。在 do ... while 循环中，花括号中的代码总是在检查之前运行一次，以查看是否应该再次执行（在 while 和 for 中，检查首先出现，因此代码可能永远不会执行）。

我们再次重写我们的猫列表示例，以使用 do...while 循环：

```js
var i = 0;

do {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
} while (i < cats.length);
```

> **备注：** 再一次，它正如我们期望的那样工作 — 看一看它在[Github 在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (或者查看[完整源代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> **警告：** 使用 while 和 do...while — 所有循环都一样 — 你必须保证初始变量是迭代的，那么它才会逐渐地达到退出条件。不然，它将会永远循环下去，要么浏览器会强制终止它，要么它自己会崩溃。这称为无限循环。

## 主动学习：启动倒计时！

在这个练习中，我们希望你打印出一个简单的启动倒计时到输出框，从 10 到关闭。具体来说，我们希望你：

- 从 10 下降到 0.我们为您提供了一个初始化器 - var i = 10;
- 对于每次迭代，创建一个新的段落并将其附加到输出\<div>，我们使用`var output = document.querySelector('.output');`。在评论中，我们为您提供了需要在循环中某处使用的三条代码行：

  - `var para = document.createElement('p');` —新建一个段落。
  - `output.appendChild(para);` — 将段落附加到输出 `<div>`中。
  - `para.textContent =` — 段落内的文字等于您放在右侧的任何内容。

- 不同的迭代数字需要将不同的文本放在该迭代的段落中（您需要一个条件语句和多个`para.textContent = lines`）：

  - 如果数字是 10，打印“Countdown 10”到段落。
  - 如果数字为 0，请打印“Blast off！”到段落。
  - 对于任何其他数字，只打印段落的数字。

- 记住要包括一个迭代器！然而，在这个例子中，我们在每次迭代之后都下降，而不是上升，所以你不想要`i++` - 你如何向下迭代？

如果您犯了错误，您可以随时使用“重置”按钮重置该示例。如果你真的卡住了，请按“显示解决方案”来查看解决方案。

```html hidden
<div class="output" style="height: 410px;overflow: auto;"></div>

<textarea id="code" class="playable-code" style="height: 300px;">
var output = document.querySelector('.output');
output.innerHTML = '';

// var i = 10;

// var para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
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
  "var output = document.querySelector('.output');\noutput.innerHTML = '';\n\nvar i = 10;\n\nwhile(i >= 0) {\n  var para = document.createElement('p');\n  if(i === 10) {\n    para.textContent = 'Countdown ' + i;\n  } else if(i === 0) {\n    para.textContent = 'Blast off!';\n  } else {\n    para.textContent = i;\n  }\n\n  output.appendChild(para);\n\n  i--;\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('主动学习：启动倒计时！', '100%', 880) }}

## 主动学习：填写来宾列表

在本练习中，我们希望您获取存储在数组中的名称列表，并将其放入来宾列表中。但这不是那么容易 - 我们不想让菲尔和洛拉进来，因为他们是贪婪和粗鲁的，总是吃所有的食物！我们有两个名单，一个是客人承认的，一个是客人拒绝的。

具体来说，我们希望你：

- 编写一个循环，它将从 0 迭代到 people 数组的长度。你需要从一个初始化器`var i = 0`开始，但是你需要什么退出条件？
- 在每个循环迭代期间，使用条件语句检查当前数组项是否等于“Phil”或“Lola”：

  - 如果是，则将数组项连接到拒绝段落的`textContent`的末尾，后跟逗号和空格。
  - 如果不是，则将数组项连接到接收段落的`textContent`的末尾，后跟逗号和空格。

我们已经提供给您：

- `var i = 0;` — 你的初始化程序
- `refused.textContent +=` - 将连接某些东西的行的开头，结束于`refused.textContent`。
- `admitted.textContent +=` - 将连接某些内容到一行的结尾的行的开始。

额外的奖金问题 - 成功完成上述任务后，您将留下两个名称列表，用逗号分隔，但它们将不整齐 - 每个结尾处都会有一个逗号。你可以制定出如何在每种情况下编写最后一个逗号的行，并添加一个完整的停止？看看有用的字符串方法文章的帮助。

如果您犯了错误，您可以随时使用“重置”按钮重置该示例。如果你真的卡住了，请按“显示解决方案”来查看解决方案。

```html hidden
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit:</p>
  <p class="refused">Refuse:</p>
</div>

<textarea id="code" class="playable-code" style="height: 400px;">
var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// var i = 0;

// refused.textContent += ;
// admitted.textContent += ;

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
  "var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];\n\nvar admitted = document.querySelector('.admitted');\nvar refused = document.querySelector('.refused');\n\nvar i = 0;\n\ndo {\n  if(people[i] === 'Phil' || people[i] === 'Lola') {\n    refused.textContent += people[i] + ', ';\n  } else {\n    admitted.textContent += people[i] + ', ';\n  }\n  i++;\n} while(i < people.length);\n\nrefused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';\nadmitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('主动学习：填写来宾列表', '100%', 680) }}

## 应该使用哪种循环类型？

对于基本用途，for，while 和 do ... while 循环大部分可互换。他们都可以用来解决相同的问题，你使用哪一个将在很大程度上取决于你的个人偏好 - 哪一个你最容易记住或最直观的。我们再来看看他们。

首先是 `for`:

```plain
for (initializer; exit-condition; final-expression) {
  // code to run
}
```

`while`:

```plain
initializer
while (exit-condition) {
  // 要运行的代码

  final-expression
}
```

最后是 `do...while`:

```plain
initializer
do {
  // 要运行的代码

  final-expression
} while (exit-condition)
```

我们建议使用`for`，因为它可能是最简单地帮你记住一切 - 初始化程序，退出条件和最终表达式都必须整齐地放入括号，所以很容易看到他们在哪里并检查你没有丢失他们。

> **备注：** 还有其他循环类型/特性，这些特性在 高级/专门 的情况下是有用的，超出了本文的范围。如果您想进一步了解循环学习，请阅读我们的高级[循环和迭代指南](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)。

## 结论

本文向您展示了背后的基本概念，以及 JavaScript 中循环代码时可用的不同选项。你现在应该明白为什么循环是一个处理重复代码的好机制，并且在你自己的例子中使用它们！

如果您有什么不明白的地方，可以再通读一遍，或者[联系我们](/zh-CN/Learn#Contact_us)寻求帮助。

## 相关链接

- [Loops and iteration in detail](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for statement reference](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)
- [while](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) and [do...while](/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while) references
- [break](/zh-CN/docs/Web/JavaScript/Reference/Statements/break) and [continue](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue) references
- [What's the Best Way to Write a JavaScript For Loop?](https://www.impressivewebs.com/javascript-for-loop/) — some advanced loop best practices

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
