---
title: JavaScript 中的基础数学 — 数字和操作符
slug: Learn/JavaScript/First_steps/Math
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

在本次课程中，我们讨论 JavaScript 中的数学 — 我们如何使用 {{Glossary("Operator","运算符")}} 和其他功能来成功地操作数字以完成我们的请求。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识，对 HTML 和 CSS 初步了解，知道 JavaScript 是什么。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>熟悉 JavaScript 中 Math 的基础知识。</td>
    </tr>
  </tbody>
</table>

## 人人都爱数学

好吧，可能不是。有些人喜欢数学，有些人可能从在学校必须学习乘法表和长除法时就讨厌数学，还有人介于两者之间。但我们都不能否认，数学是生活的基本组成部分，我们离不了它。尤其如此，当我们学习编写 JavaScript 程序（或任何其他语言），我们所做的很多事情都依赖于处理数值数据，计算新值等。你将不会惊讶地认识到 JavaScript 有一套可用的全功能的数学功能。

本文仅讨论你现在需要了解的基本部分。

### 数字类型

在编程中，即使是人人熟知的最普遍的十进制数，也比你想象的要复杂的多。我们使用不同的术语来描述不同类型的十进制数，例如：

- **整数** 就是整数，例如 10, 400, 或者 -5.
- **浮点数** (浮点) 有小数点或小数位，例如 12.5，和 56.7786543。
- **双精度**双精度是一种特定类型的浮点数，它们具有比标准浮点数更高的精度（这意味着它们精确到更大的小数位数）。

我们甚至有不同类型的数字系统！十进制是基数 10（意味着它在每列使用 0-9），但是我们也有这样的东西：

- **二进制**——计算机的最基础语言——0 和 1
- **八进制**——基数 8，每列使用 0-7
- **十六进制**——基数 16，每列使用 0-9，然后使用 a-f。在 CSS 中设置颜色时，可能会遇到这些数字。

在你开始担心你的大脑混乱之前，先停下来吧！一开始，我们将在本课程中坚持使用十进制数; 你很少会遇到需要开始考虑其他类型的情况，如果有的话。

第二个好消息是，与其他一些编程语言不同，JavaScript 只有一个数据类型用来表示数字（包括 integers 和 decimals），你猜对了，{{jsxref("Number")}}。这意味着，你在 JavaScript 中处理的任何类型的数字，都以完全相同的方式处理它们。

### 这是我们的全部数字

让我们快点玩一些数字，以重新定义我们所需要的基本语法。在你的[开发工具 JavaScript 控制台](/zh-CN/docs/Learn/Discover_browser_developer_tools)中输入下面列出的命令。

**[在新窗口中打开](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/)**

1. 首先，我们先声明一对变量，并分别用一个整数和一个浮点数来初始化它们，然后再输入变量名来检查是否正确：

   ```js
   let myInt = 5;
   let myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. 数值键入不带引号——在继续之前尝试声明和初始化更多包含数字的变量。
3. 现在我们来看看我们的原始变量是否是相同的数据类型。在 JavaScript 中有一个称为{{jsxref("Operators / typeof", "typeof")}} 的运算符。输入如下所示的两行：

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   在这两种情况下，都应该返回 `"number"`——这使得事情变得更简单，因为若是不同的数字具有不同的数据类型，那么我们还须以不同的方式处理它们。呦！

## 算术运算符

算术运算符是我们用来做和的基本运算符：

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
      <td>从左边减去右边的数。</td>
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
      <td>用右边的数除左边的数</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>求余 (有时候也叫取模)</td>
      <td>
        <p>在你将左边的数分成同右边数字相同的若干整数部分后，返回剩下的余数</p>
      </td>
      <td><code>8 % 3</code> (返回 2，8 除以 3 的倍数，余下 2。)</td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>幂</td>
      <td>
        <p>
          取底数的指数次方，即指数所指定的底数相乘。它在 EcmaScript 2016
          中首次引入。
        </p>
      </td>
      <td>
        <code>5 ** 5</code> (返回 3125，相当于
        <code>5 * 5 * 5 * 5 * 5</code> 。)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 你以后有时候会看到参与算术计算的数字被称为 操作数 ({{Glossary("Operand", "operands")}})。

> [!NOTE]
> 有时你可能会看到使用较旧的 {{jsxref("Math.pow()")}} 方法表达的指数，该方法的工作方式非常相似。例如，在 `Math.pow(7, 3)` 中，`7` 是基数，`3` 是指数，因此表达式的结果是 `343`。 `Math.pow(7, 3)` 相当于 `7 ** 3`。

我们可能不需要教你如何做基础数学，但我们想测试你对所涉及的语法的理解。尝试将下面的示例输入到[开发者工具 JavaScript 控制台](/zh-CN/docs/Learn/Discover_browser_developer_tools)中。

1. 首先尝试输入一些简单的例子，例如

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. 你还可以尝试声明变量并用数字初始化变量，然后尝试使用这些变量来求和 - 求和中变量的行为与直接用其持有的数来求和完全一样。例如：

   ```js
   let num1 = 10;
   let num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. 最后在本节中，尝试输入一些更复杂的表达式，如：

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

这最后的一组计算中可能没有给出你期望的结果; 下面的部分也许能告诉你为什么。

### 运算符优先级

我们来看看上面的最后一个例子，假设 num2 的值为 50，num1 的值为 10（如上所述）：

```js
num2 + num1 / 8 + 2;
```

一般人，你会将它看作“50 加 10 等于 60”，然后“8 加 2 等于 10”，最后“60 除以 10 等于 6”。

但浏览器的“10 除以 8 等于 1.25”，那么“50 加 1.25 加 2 等于 53.25”。

这是因为**运算符优先级**——一些运算符将在计算算式（在编程中称为表达式）的结果时先于其他运算符被执行。JavaScript 中的运算符优先级与学校的数学课程相同——乘法和除法总是先完成，然后是加法和减法（总是从左到右进行计算）。

如果想要改变计算优先级，可以把想要优先计算的部分用括号围住。所以要得到结果为 6，我们可以这样做：

```js
(num2 + num1) / (8 + 2);
```

尝试看看。

> [!NOTE]
> 注意：可以在[表达式和运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#运算符优先级)中找到所有 JavaScript 运算符的完整列表及其优先级。

## 自增和自减运算符

有时候，你需要反复把一个变量加 1 或减 1。这可以方便地使用增量（`++`）和递减（ `--` ）运算符来完成。我们在[JavaScript 初体验](/zh-CN/docs/Learn/JavaScript/First_steps/A_first_splash)文章的“猜数字”游戏中使用了++，当我们添加 1 到我们的 guessCount 变量来跟踪用户在每次转动之后剩下的猜测时。

```js
guessCount++;
```

> [!NOTE]
> 它们最常用于[循环](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)中，你将在以后的课程中了解。例如，假设你想循环查看价格表，并为每个价格增加销售税。你可以使用循环依次查看每个值，并在每种情况下进行必要的计算，以添加销售税。当需要时，增量器用于移动到下一个值。我们实际上提供了一个简单的例子，显示了如何完成——[在线查看效果](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/loop.html)，并[查看源代码](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/maths/loop.html)，看看是否可以发现增量器！我们稍后将会详细介绍循环。

我们来试试看你们的控制台。首先，请注意，你不能将这些直接应用于一个数字，这可能看起来很奇怪，但是我们为变量赋值一个新的更新值，而不是对该值进行操作。以下将返回错误：

```js example-bad
3++;
```

所以，你只能增加一个现有的变量。尝试这个：

```js
let num1 = 4;
num1++;
```

好的，第二个奇怪的东西！执行此操作时，你会看到返回值为 4，这是因为浏览器返回当前值，然后增加变量。如果你再次返回变量值，则可以看到它已经递增：

```js
num1;
```

递减 `--` 同样如此，尝试以下操作：

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> 你可以使浏览器以其他方式进行操作 - 递增/递减变量，然后返回值 - 将操作符放在变量的开头，而不是结束。再次尝试上面的例子，但这次使用 `++num1` 和 `--num2`。

## 赋值运算符

赋值运算符是向变量分配值的运算符。我们已经使用了最基本的一个很多次了：`=`，它只是将右边的值赋给左边的变量，即：

```js
let x = 3; // x 的值是 3
let y = 4; // y 的值是 4
x = y; // x 和 y 有相同的值，4
```

但是还有一些更复杂的类型，它们提供了有用的快捷方式，可以使你的代码更加清洁和高效。最常见的如下：

| 运算符 | 名称     | 作用                                           | 示例              | 等价于               |
| ------ | -------- | ---------------------------------------------- | ----------------- | -------------------- |
| `+=`   | 加法赋值 | 右边的数值加上左边的变量，然后再返回新的变量。 | `x = 3; x += 4;`  | `x = 3; x = x + 4;`  |
| `-=`   | 减法赋值 | 左边的变量减去右边的数值，然后再返回新的变量。 | `x = 6; x -= 3;`  | `x = 6; x = x - 3;`  |
| `*=`   | 乘法赋值 | 左边的变量乘以右边的数值，然后再返回新的变量。 | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`   | 除法赋值 | 左边的变量除以右边的数值，然后再返回新的变量。 | `x = 10; x /= 5;` | `x = 10; x = x / 5;` |

尝试在你的控制台中输入上面的一些示例，以了解它们的工作原理。在每种情况下，你是否可以猜出在输入第二行之前的值。

请注意，你可以愉快地使用每个表达式右侧的其他变量，例如：

```js
let x = 3; // x 包含值 3
let y = 4; // y 包含值 4
x *= y; // x 现在包含值 12
```

> [!NOTE]
> 虽然有很多可用的[赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#Assignment_operators)，但是这些是你现在应该学习的基本的一类。

## 主动学习：调整画布框的大小

在这个练习中，我们将让你填写一些数字和操作符来操纵一个框的大小。该框使用称为 {{domxref("Canvas API", "", "", 1)}} 的浏览器 API 绘制。没有必要担心这是如何工作的——现在只关注数学。盒子的宽度和高度（以像素为单位）由变量 `x` 和 `y` 定义，变量 `x` 和 `y` 最初都被赋值为 50。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[新窗口打开](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

在上面的可编辑代码框中，有两行标有清晰的注释，我们希望你更新以使框增长/缩小到某些大小，在每种情况下使用某些操作符和/或值。我们希望你回答以下问题：

- 更改计算 x 的行，使框仍然是 50px 宽，并且使用数字 43 和 7 以及算术运算符计算 50。
- 更改计算 y 的行，使框为高 75 像素，使用数字 25 和 3 计算 75，以及算术运算符。
- 更改计算 x 的行，使框为 250px 宽，250 是使用两个数字和余数（模）运算符计算的。
- 更改计算 y 的行，使框为 150px 高，150 是使用三个数字计算的，以及减法和除数运算符。
- 更改计算 x 的行，因此该框为 200px 宽，并且使用数字 4 和赋值运算符计算 200。
- 更改计算 y 的行，使框为 200px 高，使用数字 50 和 3，乘法运算符和加法运算符计算 200。

如果你完全混淆了代码，别担心。你可以随时按“重置”按钮，使事情恢复正常。在你正确回答了上述所有问题后，可以自由地使用代码或创建自己的挑战。

## 比较运算符

有时，我们将要运行真/假测试，然后根据该测试的结果进行相应的操作 - 为此，我们使用比较运算符。

| 运算符 | 名称       | 作用                           | 示例          |
| ------ | ---------- | ------------------------------ | ------------- |
| `===`  | 严格等于   | 测试左右值是否相同             | `5 === 2 + 4` |
| `!==`  | 严格不等于 | 测试左右值是否**不**相同       | `5 !== 2 + 3` |
| `<`    | 小于       | 测试左值是否小于右值。         | `10 < 6`      |
| `>`    | 大于       | 测试左值是否大于右值           | `10 > 20`     |
| <=     | 小于或等于 | 测试左值是否小于或等于右值。   | `3 <= 2`      |
| >=     | 大于或等于 | 测试左值是否大于或等于正确值。 | `5 >= 4`      |

> [!NOTE]
> 你可能会看到有些人在他们的代码中使用`==`和`!=`来判断相等和不相等，这些都是 JavaScript 中的有效运算符，但它们与`===`/`!==`不同，前者测试值是否相同，但是数据类型可能不同，而后者的严格版本测试值和数据类型是否相同。严格的版本往往导致更少的错误，所以我们建议你使用这些严格的版本。

如果你尝试在控制台中输入这些值，你将看到它们都返回 `true`/`false` 值 - 我们在上一篇文章中提到的那些布尔值。这些是非常有用的，因为它们允许我们在我们的代码中做出决定 - 每次我们想要选择某种类型时，都会使用这些代码，例如：

- 根据功能是打开还是关闭，在按钮上显示正确的文本标签。
- 如果游戏结束，则显示游戏消息，或者如果游戏已经获胜，则显示胜利消息。
- 显示正确的季节性问候，取决于假期季节。
- 根据选择的缩放级别缩小或放大地图。

当我们在以后的文章中查看条件语句时，我们将介绍如何编写这样的逻辑。现在，我们来看一个简单的例子：

```html
<button>Start machine</button>
<p>The machine is stopped.</p>
```

```js
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
```

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[新窗口打开](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

你可以在 updateBtn（）函数内看到正在使用的等号运算符。在这种情况下，我们不会测试两个数学表达式是否具有相同的值 - 我们正在测试一个按钮的文本内容是否包含某个字符串 - 但它仍然是工作原理。如果按钮当前为“启动机器（start machine）”，则将其标签更改为“停止机器（stop machine）”，并根据需要更新标签。如果按钮上写着“停机”时被按下，我们将显示回原来的内容。

> [!NOTE]
> 这种在两个状态之间来回交换的行为通常被称为**切换**。它在一个状态和另一个状态之间切换 - 点亮，熄灭等

## 总结

在本文中，我们已经介绍了现在需要了解 JavaScript 中数字的基本信息。你会发现，在你学习 JavaScript 过程中，num 类型的数据一直都在被使用，所以熟练的掌握它是一个不错的选择。如果你是那些不喜欢数学的人之一，你应该庆幸这一章内容很简短。

在下一篇文章中，我们将探讨文本，以及 JavaScript 如何让我们操纵它。

> [!NOTE]
> 如果你喜欢数学，并希望阅读更多关于它如何在 JavaScript 中实现的，那么你可以在 MDN's main JavaScript 部分读到更多关于它的内容。对于学习[数字与日期](/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_dates)和[表达式与运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#运算符优先级)来说，那是一个不错的地方。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
