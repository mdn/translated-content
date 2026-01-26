---
title: JavaScript 中的基础数学——数字与运算符
short-title: 数字与运算符
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 045c634a3f8e2a1aa8cb02f27a224f640917d1ad
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

在本次课程中，我们讨论 JavaScript 中的数学——我们如何使用{{Glossary("Operator","运算符")}}和其他功能来成功地操作数字以完成我们的请求。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        初步了解 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a>。</td>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>JavaScript 中的基本数字运算——加法、减法、乘法和除法。</li>
          <li>如果数字被定义为字符串，那么它们就不再是数字，这可能会导致计算出现错误。</li>
          <li>使用 <code>Number()</code> 将字符串转换为数字。</li>
          <li>运算符优先级。</li>
          <li>自增与自减。</li>
          <li>赋值运算符与比较运算符。</li>
          <li>基础的 Math 对象方法，如 <code>Math.random()</code>、<code>Math.floor()</code> 和 <code>Math.ceil()</code>。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 人人都爱数学

好吧，可能不是。有些人喜欢数学，有些人可能从在学校必须学习乘法表和长除法时就讨厌数学，还有人介于两者之间。但我们都不能否认，数学是生活的基本组成部分，我们离不了它。这一点在学习 JavaScript 编程（或其他任何编程语言）时尤为明显——我们所做的许多事情都依赖于处理数值数据、计算新值等操作，因此你不会感到惊讶地发现，JavaScript 提供了一套功能齐全的数学函数。

本文仅讨论你现在需要了解的基本部分。

### 数字类型

在编程中，即使是人人熟知的最普遍的十进制数，也比你想象的要复杂的多。我们使用不同的术语来描述不同类型的十进制数，例如：

- **整数**是没有小数部分的数。它们可以是正数或负数，例如 10、400 或 -5。
- **浮点数**有小数点和小数位，例如 12.5 和 56.7786543。

我们甚至有不同类型的数字系统！十进制是基数 10（意味着它在每位使用 0-9），但是我们也有这样的东西：

- **二进制**——计算机的最基础语言——0 和 1。
- **八进制**——基数 8，每位使用 0-7。
- **十六进制**——基数 16，每位使用 0-9 与 a-f。[在 CSS 中设置颜色](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units#十六进制_rgb_值)时，可能会遇到这些数字。

**在你开始担心你的大脑混乱之前，先停下来吧**！首先，在本课程中，我们将仅使用十进制数；你很少会遇到需要开始考虑其他类型的情况，如果有的话。

第二个好消息是，与其他一些编程语言不同，JavaScript 只有一个数据类型用来表示数字（无论是整数还是小数）——你猜对了，这就是 {{jsxref("Number")}}。这意味着，你在 JavaScript 中处理的任何类型的数字，都以完全相同的方式处理它们。

### 这是我们的全部数字

让我们快速通过一些数字练习来重新熟悉我们需要的基本语法。将以下命令输入到[开发者工具 JavaScript 控制台](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)中。

1. 首先，我们先声明一对变量，并分别用一个整数和一个浮点数来初始化它们，然后再输入变量名来检查是否正确：

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. 数值键入不带引号——在继续之前尝试声明和初始化更多包含数字的变量。
3. 现在我们来看看我们的原始变量是否是相同的数据类型。在 JavaScript 中有一个称为 {{jsxref("Operators/typeof", "typeof")}} 的运算符。输入如下所示的两行：

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   在这两种情况下，都应该返回 `"number"`——这使得事情变得更简单，因为若是不同的数字具有不同的数据类型，那么我们还须以不同的方式处理它们。呼——

### 实用的 Number 方法

[`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 对象是一个实例，它表示你在 JavaScript 中使用的所有标准数字。该对象提供了一系列有用的方法，供你对数字进行操作。本文并未详细介绍这些方法，因为我们希望将其作为入门指南，仅涵盖当前所需的真正基础内容；然而，一旦你反复阅读本模块后，建议查阅对象参考页面以进一步了解可用功能。

例如，要将数字四舍五入到指定的小数位数，可以使用 [`toFixed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 方法。在浏览器的[控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)中输入以下代码：

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### 转换至 number 数据类型

有时，你可能会遇到一个以字符串类型存储的数字，这会使得对其进行计算变得困难。这种情况最常发生在数据被输入到[表单](/zh-CN/docs/Learn_web_development/Extensions/Forms)的输入框中，且[输入类型为文本](/zh-CN/docs/Web/HTML/Reference/Elements/input/text)时。解决此问题的方法是将字符串值传递给 [`Number()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 构造函数，以返回该值的数字版本。

例如，尝试在控制台下输入这几行：

```js
let myNumber = "74";
myNumber += 3;
```

你会得到的结果为 743，而不是 77，因为 `myNumber` 实际上是一个字符串。你可以通过以下代码来测试这个行为：

```js
typeof myNumber;
```

为了修正计算，可以这么做：

```js
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```

结果为 77，与最初预期一致。

## 算术运算符

算术运算符用于在 JavaScript 中进行数学计算：

<table>
  <thead>
    <tr>
      <th scope="col">运算符</th>
      <th scope="col">名称</th>
      <th scope="col">作用</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+</code></td>
      <td>加法</td>
      <td>两个数相加。</td>
      <td><code>6 + 9</code></td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>减法</td>
      <td>从左边的数减去右边的数。</td>
      <td><code>20 - 15</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>乘法</td>
      <td>两个数相乘。</td>
      <td><code>3 * 7</code></td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>除法</td>
      <td>将左侧的数除以右侧的数。</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>求余（有时候也叫取模）</td>
      <td>
        <p>在你将左边的数分成同右边数字相同的若干整数部分后，返回剩下的余数</p>
      </td>
      <td><code>8 % 3</code>（返回 2，因为 3 可以被 8 整除两次，还剩余 2。）</td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>幂</td>
      <td>
        <p>
          取底数（<code>base</code>）的指数次（<code>exponent</code>）方，即指数所指定的底数相乘指数所指定的次数。
        </p>
      </td>
      <td>
        <code>5 ** 2</code>（返回 <code>3125</code>，相当于
        <code>5 * 5</code> 。）
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 在算术运算中，有时会看到涉及的数字被称为{{Glossary("Operand", "操作数")}}。

> [!NOTE]
> 有时你可能会看到使用较旧的 {{jsxref("Math.pow()")}} 方法表达的指数，该方法的工作方式非常相似。例如，在 `Math.pow(7, 3)` 中，`7` 是基数，`3` 是指数，因此表达式的结果是 `343`。`Math.pow(7, 3)` 相当于 `7 ** 3`。

我们可能不需要教你如何进行基础数学运算，但我们想测试你对所涉及的语法的理解。尝试将下面的示例输入到[开发者工具 JavaScript 控制台](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)中。

1. 首先尝试输入一些简单的例子，例如

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. 你还可以尝试声明变量并用数字初始化变量，然后尝试使用这些变量来求和——求和中变量的行为与直接用其持有的数来求和完全一样。例如：

   ```js
   let num1 = 10;
   let num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. 在本节的最后，尝试输入一些更复杂的表达式，如：

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

这最后的一组计算中可能没有给出你期望的结果；下面的部分也许能告诉你为什么。

### 运算符优先级

我们来看看上面的最后一个例子，假设 num2 的值为 50，num1 的值为 10（如上所述）：

```js
num2 + num1 / 8 + 2;
```

一般人，你会将它看作“_50 加 10 等于 60_”，然后“_8 加 2 等于 10_”，最后“_60 除以 10 等于 6_”。

但浏览器会看作“_10 除以 8 等于 1.25_”，然后“_50 加 1.25 加 2 等于 53.25_”。

这是因为**运算符优先级**——一些运算符将在计算算式（在编程中称为*表达式*）的结果时先于其他运算符被执行。JavaScript 中的运算符优先级与学校的数学课程相同——乘法和除法总是先完成，然后是加法和减法（总是从左到右进行计算）。

如果想要改变计算优先级，可以把想要优先计算的部分用括号围住。所以要得到结果为 6，我们可以这样做：

```js
(num2 + num1) / (8 + 2);
```

尝试将上一行输入到控制台中进行测试。

> [!NOTE]
> 可以在[表达式和运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#运算符优先级)中找到所有 JavaScript 运算符的完整列表及其优先级。

## 自增和自减运算符

有时候，你需要反复把一个变量加 1 或减 1。这可以方便地使用自增（`++`）和自减（`--`）运算符来完成。我们在 [JavaScript 初体验](/zh-CN/docs/Learn_web_development/Core/Scripting/A_first_splash)文章的“猜数字”游戏中，当我们添加 1 到我们的 guessCount 变量来跟踪用户在每次转动之后剩下的猜测时，我们使用了 `++` 运算符。

```js
guessCount++;
```

让我们在控制台中尝试使用这些操作。首先需要注意的是，你无法直接将这些操作应用于一个数字，这可能看起来有些奇怪，但我们实际上是在为变量赋予一个新的更新值，而非直接对值本身进行操作。以下代码将返回错误：

```js example-bad
3++;
```

所以，你只能增加一个现有的变量。尝试这个：

```js
let num1 = 4;
num1++;
```

好的，第二个奇怪的东西！执行此操作时，你会看到返回值为 4，这是因为浏览器先返回当前值，*然后*增加变量。如果你再次返回变量值，则可以看到它已经递增：

```js
num1;
```

自减运算符 `--` 同样如此，尝试以下操作：

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> 你可以使浏览器以其他方式进行操作——先递增/递减变量，*然后*返回值——将操作符放在变量的开头，而不是结束。再次尝试上面的例子，但这次使用 `++num1` 和 `--num2`。

## 赋值运算符

赋值运算符是向变量分配值的运算符。我们已经使用了最基本的一个很多次了：`=`，它只是将右边的值赋给左边的变量，即：

```js
let x = 3; // x 的值是 3
let y = 4; // y 的值是 4
x = y; // x 和 y 有相同的值，4
```

但是还有一些更复杂的类型，它们提供了有用的快捷方式，可以使你的代码更加整洁和高效。最常见的类型如下：

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">运算符</th>
      <th scope="col">名称</th>
      <th scope="col">作用</th>
      <th scope="col">示例</th>
      <th scope="col">等价形式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+=</code></td>
      <td>加法赋值</td>
      <td>
        右边的值加上左边的变量值，然后返回新的变量值
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>减法赋值</td>
      <td>
       从左侧的变量值中减去右侧的值，然后返回新的变量值
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>乘法赋值</td>
      <td>
        左侧的变量值乘上右侧的值，然后返回新的变量值
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>除法赋值</td>
      <td>
        左边的变量值除以右边的数值，然后返回新的变量值
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

尝试在你的控制台中输入上面的一些示例，以了解它们的工作原理。在每种情况下，你是否可以猜出在输入第二行之前的值。

请注意，你可以在每个表达式的右侧使用其他变量，例如：

```js
let x = 3; // x 包含值 3
let y = 4; // y 包含值 4
x *= y; // x 现在包含值 12
```

> [!NOTE]
> 虽然有很多可用的[赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)，但是这些是你现在应该学习的基本的一类。

## 调整画布盒子的大小

在这个练习中，我们将让你填写一些数字和操作符来操纵一个盒子的大小。该盒子使用称为 {{domxref("Canvas API", "", "", 1)}} 的浏览器 API 绘制。没有必要担心这是如何工作的——现在只关注其数学部分。盒子的宽度和高度（以像素为单位）由变量 `x` 和 `y` 定义，变量 `x` 和 `y` 最初都被赋值为 50。

```html hidden live-sample___canvas-exercise
<canvas id="canvas" width="400" height="200"></canvas>
<p></p>
```

```js live-sample___canvas-exercise
const canvas = document.getElementById("canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

// 仅编辑以下两行
let x = 50;
let y = 50;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x, y);
para.textContent = `长方形的宽为 ${x}px，长为 ${y}px。`;
```

{{EmbedLiveSample("canvas-exercise", '100%', 300)}}

在 MDN 代码演练场中打开上述示例，点击“**Play**”按钮，然后按照以下步骤操作，使用特定的运算符和/或值，使盒子在不同情况下实现扩展或缩小至特定尺寸：

- 修改计算 `x` 的代码行，确保框体宽度仍为 `50px`，但 `50` 需通过数字 `43` 和 `7` 以及算术运算符进行计算。
- 修改计算 `y` 的代码行，使框的高度为 `75px`，但 `75` 是通过数字 `25` 和 `3` 以及算术运算符计算得出的。
- 修改计算 `x` 的代码行，使框的宽度为 `100px`，但 `100` 是通过三个数字以及减法和除法运算符计算得出的。
- 修改计算 `y` 的代码行，使框的高度为 `200px`，但 `200` 是通过数字 2 和 `x` 以及乘法运算符计算得出的。

如果你不小心弄乱了代码，不用担心。你可以随时按“重置”按钮，重新开始练习。

## 比较运算符

有时，我们将要运行真/假测试，然后根据该测试的结果进行相应的操作——为此，我们使用**比较运算符**。

| 运算符 | 名称       | 作用                         | 示例          |
| ------ | ---------- | ---------------------------- | ------------- |
| `===`  | 严格等于   | 测试左右值是否相同。         | `5 === 2 + 4` |
| `!==`  | 严格不等于 | 测试左右值是否**不**相同。   | `5 !== 2 + 3` |
| `<`    | 小于       | 测试左值是否小于右值。       | `10 < 6`      |
| `>`    | 大于       | 测试左值是否大于右值。       | `10 > 20`     |
| <=     | 小于或等于 | 测试左值是否小于或等于右值。 | `3 <= 2`      |
| >=     | 大于或等于 | 测试左值是否大于或等于右值。 | `5 >= 4`      |

> [!NOTE]
> 你可能会看到有些人在他们的代码中使用 `==` 和 `!=` 来判断相等和不相等，这些都是 JavaScript 中的有效运算符，但它们与 `===`/`!==` 不同，前者测试值是否相同，但是数据类型可能不同，而后者严格测试值和数据类型是否相同。严格的测试往往导致更少的错误，所以我们建议你使用这些严格的版本。

如果你尝试在控制台中输入这些值，你将看到它们都返回 `true`/`false` 值——我们在上一篇文章中提到的那些布尔值。这些是非常有用的，因为它们允许我们在我们的代码中做出决定——每次我们想要选择某种类型时，都会使用这些代码，例如：

- 根据功能是打开还是关闭，在按钮上显示正确的文本标签。
- 如果游戏结束，则显示游戏消息，或者如果游戏已经获胜，则显示胜利消息。
- 显示正确的季节性问候，取决于假期季节。
- 根据选择的缩放级别缩小或放大地图。

当我们在以后的文章中查看条件语句时，我们将介绍如何编写这样的逻辑。现在，我们来看一个简单的例子：

```html live-sample___conditional
<button>启动机器</button>
<p>机器已停止运行。</p>
```

```js live-sample___conditional
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "启动机器") {
    btn.textContent = "停止机器";
    txt.textContent = "机器已启动！";
  } else {
    btn.textContent = "启动机器";
    txt.textContent = "机器已停止运行。";
  }
}
```

{{EmbedLiveSample("conditional", '100%', 100)}}

你可以在 `updateBtn()` 函数内看到正在使用的相等运算符。在这种情况下，我们不会测试两个数学表达式是否具有相同的值——我们正在测试一个按钮的文本内容是否包含某个字符串——但它仍然是相同的工作原理。如果按钮当前为“启动机器”，则将其标签更改为“停止机器”，并根据需要更新标签。如果按钮上写着“停止机器”时被按下，我们将显示回原来的内容。

> [!NOTE]
> 这种在两个状态之间来回交换的行为通常被称为**切换**。它在一个状态和另一个状态之间切换——点亮，熄灭等。

## 技能测试！

你已经阅读到了本篇文章的末尾，但还能记清楚最重要的部分吗？你可以做一些深入的测试，来验证你是否在进行下一步学习之前，记住了这些知识，请参阅[技能测试：数学](/zh-CN/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math)。

## 总结

在本文中，我们已经介绍了现在需要了解 JavaScript 中数字的基本信息。你会发现，在你学习 JavaScript 过程中，number 类型的数据一直都在被使用，所以熟练的掌握它是一个不错的选择。如果你是那些不喜欢数学的人之一，你应该庆幸这一章内容很简短。

在下一篇文章中，我们将探讨文本，以及 JavaScript 如何让我们操纵它。

## 参见

- [数字与文本](/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [表达式与运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
