---
title: 查找并解决 JavaScript 代码的错误
slug: Learn/JavaScript/First_steps/What_went_wrong
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

上一节中你创建了“猜数字”游戏，但它可能没有正常工作。别担心，本节将为你提供一些简单的提示，来帮助你查找并修复 JavaScript 程序中的错误，从而让你远离困扰。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>计算机基础知识，初步理解 HTML 和 CSS，了解 JavaScript。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>获得独立修复简单问题的能力和信心。</td>
    </tr>
  </tbody>
</table>

## 错误类型

一般来说，代码错误主要分为两种：

- **语法错误**：代码中存在拼写错误，将导致程序完全或部分不能运行，通常你会收到一些出错信息。只要熟悉语言并了解出错信息的含义，你就能够顺利修复它们。
- **逻辑错误**：有些代码语法虽正确，但执行结果和预期相悖，这里便存在着逻辑错误。这意味着程序虽能运行，但会给出错误的结果。由于一般你不会收到来自这些错误的提示，它们通常比语法错误更难修复。

事情远没有你想的那么简单，随着探究的深入，会有更多差异因素浮出水面。但在编程生涯的初级阶段上述分类方法已足矣。下面我们将依次分析。

## 一个出错的示例

让我们重回猜数字游戏，这次我们将故意引入一些错误。请到 Github 下载一份 [number-game-errors.html](https://github.com/roy-tian/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) （或 [在线运行](https://roy-tian.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)）。

1. 请分别在你的文本编辑器和浏览器中打开刚下载的文件。
2. 先试玩游戏，你会发现在点击“确定”按钮时，游戏并没有响应。

> **备注：** 你可能还在为修复你自己版本的游戏头疼，但我们仍然希望你先用我们的版本来完成这一节，这样你才能学到本节中的技术。然后再去修复自己的游戏也不晚。

首先查看开发者控制台，看是否存在语法错误，然后尝试修复。详见下文。

## 修复语法错误

以前的课程中，你学会了在 [开发工具 JavaScript 控制台](/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools) 中输入一些简单的 JavaScript 命令。（如果你忘记了如何在浏览器中打开它，可以直接打开上面的链接）。更实用的是，当 JavaScript 代码进入浏览器的 JavaScript 引擎时，如果存在语法错误，控制台会提供出错信息。现在我们去看一看。

1. 打开 `number-game-errors.html` 所在的标签页，然后打开 JavaScript 控制台。你将看到以下出错信息：

   ![不是函数](屏幕快照_2018-10-17_20.27.08.png)

2. 这个错误很容易跟踪，浏览器为你提供了几条有用的信息（截图来自 Firefox，其他浏览器也提供类似信息）。从左到右依次为：

   - 红色“!”表示这是一个错误。
   - 一条出错信息，表示问题出在哪儿：“TypeError：**guessSubmit**.addeventListener is not a function”（类型错误：**guessSubmit**.addeventListener 不是函数）
   - 点击 \[详细了解] 将跳转到一个 MDN 页面，其中包含了此类错误超详细的解释。
   - JavaScript 文件名，点击将跳转到开发者工具的“调试器”标签页。如果你按照这个链接，你会看到错误突出显示的确切行。
   - 出错的行，以及导致错误的首个字符号。这里错误来自 86 行，第 3 个字符。

3. 我们在代码编辑器中找到第 86 行：

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. 出错信息显示“guessSubmit.addeventListener 不是一个函数”，说明这里可能存在拼写错误。如果你不确定某语法的拼写是否正确，可以到 MDN 上去查找，目前最简便的方法就是去你喜欢的搜索引擎搜索“MDN + 语言*特性”。就本文当前内容你可以点击*：[`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)。
5. 因此这里错误显然是我们把函数名写错造成的。请记住，JavaScript 区分大小写，所以任何轻微的不同或大小写问题都会导致出错。将 `addeventListener` 改为 `addEventListener` 便可解决。

> **备注：** 更多信息请参考 [类型错误：“x”不是一个函数](/zh-CN/docs/Web/JavaScript/Reference/Errors/Not_a_function)。

### 语法错误：第二轮

1. 保存页面并刷新，可以看到出错信息不见了。
2. 现在，如果尝试输入一个数字并按确定按钮，你会看到...另一个错误！ ![](屏幕快照_2018-10-17_21.56.00.png)
3. 此次出错信息为“TypeError：lowOrHi is null”（“类型错误：lowOrHi 为 null”），在第 78 行。

   > **备注：** [`Null`](/zh-CN/docs/Glossary/Null)是一个特殊值，意思是“什么也没有”，或者“没有值”。这表示 `lowOrHi` 已声明并初始化，但没有任何有意义的值，可以说：它没有类型没有值。

   > **备注：** 这条错误没有在页面加载时立即发生，是因为它发生在函数内部（`checkGuess() { ... }`块中）。函数内部的代码运行于一个外部代码相互独立的域内，后面函数的文章中将更详细地讲解。此时此刻，只有当代码运行至 86 行并调用 `checkGuess()` 函数时，代码才会抛出出错信息。

4. 请观察第 78 行代码：

   ```js
   lowOrHi.textContent = "你猜高了！";
   ```

5. 该行试图将 `lowOrHi` 变量中的 `textContent` 属性设置为一个字符串，但是失败了，这是因为 `lowOrHi` 并不包含预期的内容。为了一探究竟，你可以在代码中查找一下该变量的的其他实例。`lowOrHi` 最早出现于第 48 行：

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. 此处，我们试图让该变量包含一个指向文档 HTML 中特定元素的引用。我们来检查一下在该行代码执行后变量的值是否为 `null`。在第 49 行添加以下代码：

   ```js
   console.log(lowOrHi);
   ```

   > **备注：** [`console.log()`](/zh-CN/docs/Web/API/Console/log) 是一个非常实用的调试功能，它可以把值打印到控制台。因此我们将其置于代码第 48 行时，它会将 `lowOrHi` 的值打印至控制台。

7. 保存并刷新，你将在控制台看到 `console.log()` 的执行结果：![](屏幕快照_2018-10-18_16.43.40.png) 显然，此处 `lowOrHi` 的值为 `null`，所以第 48 行肯定有问题。
8. 我们来思考问题有哪些可能。第 48 行使用 [`document.querySelector()`](/zh-CN/docs/Web/API/Document/querySelector) 方法和一个 CSS 选择器来取得一个元素的引用。进一步查看我们的文件，我们可以找到有问题的段落：

   ```js
   <p class="lowOrHi"></p>
   ```

9. 这里我们需要一个类选择器，它应以一个点开头（`.`），但被传递到第 48 行的`querySelector()`方法中的选择器没有点。这可能是问题所在！尝试将第 48 行中的 `lowOrHi` 改成 `.lowOrHi`。
10. 再次保存并刷新，此时 `console.log()` 语句应该返回我们想要的 `<p>` 元素。终于把错误搞定了！此时你可以把 `console.log()` 一行删除，或保留它以便随后参考。选择权在你。

> **备注：** 此错误的更多详细信息请参阅：[类型错误：“x”（不）是“y”](/zh-CN/docs/Web/JavaScript/Reference/Errors/Unexpected_type)。

### 语法错误：第三轮

1. 现在，如果你再次试玩，你离成功更进了一步。游戏过程按部就班，直到猜测正确或机会用完，游戏结束。
2. 此时如果点击“开始新游戏”，游戏将再次出错，抛出与开始时同样的错误——“TypeError：resetButton.addeventListener is not a function”！这次它来自第 94 行。
3. 查看第 94 行，很容易看到我们犯了同样的错误。我们只需要再次将 `addeventListener` 改为 `addEventListener`。现在就改吧。

## 逻辑错误

此时，游戏应该可以顺利进行了。但经过几次试玩后你一定会注意到要猜的随机数不是 0 就是 1。这可不是我们期望的！

游戏的逻辑肯定是哪里出现了问题，因为游戏并没有返回错误，只是不能正确运行。

1. 寻找 `randomNumber` 变量和首次设定随机数的代码。保存着游戏开始时玩家要猜的随机数的实例大约在 44 行：

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

   重新开始游戏产生随机数的设定语句大约在 113 行：

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

2. 为了检查问题是否来自这两行，我们要再次转到我们的朋友 - 控制台：在两行代码之后各插入下面的代码：

   ```js
   console.log(randomNumber);
   ```

3. 保存并刷新，然后试玩，你会看到在控制台显示的随机数总是等于 1。

### 修正逻辑错误

为了解决这个问题，让我们来思考这行代码如何工作。首先，我们调用 [`Math.random()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random),它生成一个在 0 和 1 之间的十进制随机数，例如 0.5675493843。

```js
Math.random();
```

接下来，我们把调用 `Math.random()` 的结果作为参数传递给 [`Math.floor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)，它会舍弃小数部分返回与之最接近的整数。然后我们给这个结果加上 1：

```js
Math.floor(Math.random()) + 1;
```

由于将一个 0 和 1 之间的随机小数的小数部分舍弃，返回的整数一定为 0，因此在此基础上加 1 之后返回值一定为 1。要在舍弃小数部分之前将它乘以 100。便可得到 0 到 99 之间的随机数：

```js
Math.floor(Math.random() * 100);
```

然后再加 1，便可得到一个 100 以内随机的自然数：

```js
Math.floor(Math.random() * 100) + 1;
```

将上述两行内容替换为此，然后保存刷新，游戏终于如期运行了！

## 其他常见错误

代码中还会遇到其他常见错误。本节将指出其中的大部分。

### SyntaxError: missing ; before statement<br>（语法错误：语句缺少分号）

这个错误通常意味着你漏写了一行代码最后的分号，但是此类错误有时候会更加隐蔽。例如如果我们把 `checkGuess()` 函数中的这一行 :

```js
let userGuess = Number(guessField.value);
```

改成

```js
let userGuess === Number(guessField.value);
```

将抛出一个错误。因为系统认为你在做其他事情。请不要把赋值运算符（`=`，为一个变量赋值）和严格等于运算符（`===`，比较两个值是否相等，返回 `true`/`false`）弄混淆。

> **备注：** 此错误的更多详细信息请参考 [SyntaxError: missing ; before statement](/zh-CN/docs/Web/JavaScript/Reference/Statements) 。

### 不管输入什么程序总说“你猜对了！”

这是混淆赋值和严格等于运算符的又一症状。例如我们把 `checkGuess()` 里的：

```js
if (userGuess === randomNumber) {
```

改成

```js
if (userGuess = randomNumber) {
```

因为条件永远返回 `true`，使得程序报告你猜对了。小心哦！

### SyntaxError: missing ) after argument list<br>（语法错误：参数表末尾缺少括号）

这个很简单。通常意味着函数/方法调用后的结束括号忘写了。

> **备注：** 有关此错误的更多详细信息请参考： [SyntaxError: missing ) after argument list](/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list)。

### SyntaxError: missing : after property id<br>（语法错误：属性 ID 后缺少冒号）

JavaScript 对象的形式有错时通常会导致此类错误，如果把

```js
function checkGuess() {
```

写成了

```js
function checkGuess( {
```

浏览器会认为我们试图将函数的内容当作参数传回函数。写圆括号时要小心！

### SystaxError: missing } after function body<br>（语法错误：函数体末尾缺少花括号）

这个简单。通常意味着函数或条件结构中丢失了一个花括号。如果我们将 `checkGuess()` 函数末尾的花括号删除，就会得到这个错误。

### SyntaxError: expected expression, got '_string_'<br>（语法错误：得到一个 '_string_' 而非表达式）

或者

### SyntaxError: unterminated string literal<br>（语法错误：字符串字面量未正常结束）

这个错误通常意味着字符串两端的引号漏写了一个。如果你漏写了字符串开始的引号，将得到第一条出错信息，这里的 '_string'_ 将被替换为浏览器发现的意外字符。如果漏写了末尾的引号将得到第二条。

对于所有的这些错误，想想我们在实例中是如何逐步解决的。错误出现时，转到错误所在的行观察是否能发现问题所在。记住，错误不一定在那一行，错误的原因也可能和我们在上面所说的不同！

> **备注：** 有关这些错误的更多详细信息请参考：[SyntaxError: Unexpected token](/zh-CN/docs/Web/JavaScript/Reference/Errors/Unexpected_token) 以及 [SyntaxError: unterminated string literal](/zh-CN/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal)。

## 小结

我们有了能够在简单的 JavaScript 程序中除错的基础知识。解决代码中的错误并不总是那么简单，但至少本节内容可以为刚刚踏上学习之路的你节省出几个小时来补觉，同时让问题更快速得到解决。

## 参见

- 许多错误不能一一的在这里列出来，我们正在编写一个参考文档来详细说明它们的含义。请参阅 [JavaScript 出错信息参考](/zh-CN/docs/Web/JavaScript/Reference/Errors).
- 如果你在阅读了本文之后遇到了一些错误但不知如何解决，你能够得到别人的帮助！可以到 [学习区](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294) 或者 [Mozilla IRC](https://wiki.mozilla.org/IRC) 的 [#mdn](irc://irc.mozilla.org/mdn) 聊天室来提问。告诉我们你遇到的错误是什么，我们会尽量帮助你。附加一段你的代码也是很有用的。

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
