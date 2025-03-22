---
title: 函数返回值
slug: Learn_web_development/Core/Scripting/Return_values
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting")}}

函数返回值 - 是本章中最后一个基础概念，让我们一起来瞧瞧.。有些函数在执行完毕后不会返回一个有用的值，但有些会，重要的是理解返回的是什么，怎样在你的代码中使用这些值，我们将在下面讨论这些。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>
          基础的计算机知识，懂得基础的 HTML 和 CSS,
          <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript </a
          >第一步学习，函数-<a
            href="/zh-CN/docs/Learn_web_development/Core/Scripting/Functions"
          >
          </a
          >可重用的代码块。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解什么函数的返回值 , 和如何使用它们</td>
    </tr>
  </tbody>
</table>

## 什么是返回值？

返回值意如其名，是指函数执行完毕后返回的值。你已经多次遇见过返回值，尽管你可能没有明确的考虑过他们。让我们回顾一个熟悉的例子（来自本系列之前的[一篇文章](/zh-CN/docs/Learn_web_development/Core/Scripting/Functions#浏览器内置函数)）：

```js
const myText = "我是一个字符串";
const newString = myText.replace("字符串", "香肠");
console.log(newString);
// replace() 字符串函数接受源字符串和目标字符串，
// 将源字符串替换为目标字符串，并返回新形成的字符串
```

我们对 `myText` 字符串调用 [replace()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 函数，并接收两个参数：
- 要查找的字符串(`"字符串"`)
- 用于替换的字符串(`"香肠"`)

当这个函数完成（完成运行）后，它返回一个值，这个值是一个新的字符串，它具有替换的功能。在上面的代码中，我们保存这个返回值，以作为`newString`变量的内容。

如果您查看MDN文档中 replace() 函数的页面，你会看到一个[返回值](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value)的章节。理解函数的返回值非常关键，因此我们尽可能在文档中提供此类信息。

一些函数不返回任何值 (在我们的参考页中，这类函数的返回值在文档中标记为空值 `void` 或未定义值 `undefined` 。).例如，前一篇文章中编写的 [displayMessage() function](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50) , 函数在被调用时不会返回特定值，它仅负责在屏幕上显示一个弹窗。

一般来说，返回值用于函数作为计算的中间步骤。假设您需要得到一个最终结果，而该结果依赖于某些需要通过函数计算的值。函数计算完成后，可以通过返回值将结果存储在变量中，供后续计算使用。

### 在自定义的函数中使用返回值

要从自定义函数返回值，你需要使用[return](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 关键字。我们最近在[random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)示例中见过此用法。我们的 `draw()` 会在{{htmlelement("canvas")}}上随机绘制100个圆圈:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

在每次循环中，random() 函数被调用了三次，分别生成圆圈的x坐标、y坐标和半径的随机值。random() 函数接收一个整数参数，并返回一个介于0到该参数的随机整数：

```js
function randomNumber(number) {
  return Math.floor(Math.random() * number);
}
```

这个函数也可以写成这样：

```js
function randomNumber(number) {
  var result = Math.floor(Math.random() * number);
  return result;
}
```

但是第一个版本写起来更快，而且更简洁。

我们每次调用函数都返回`Math.floor(Math.random()*number)`的计算结果。该返回值会直接出现在函数被调用的位置，代码随后继续执行后续逻辑。
例如，当执行以下代码时：

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

假设三次 random() 调用分别返回 500、200 和 35，则这行代码实际等价于：

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

该行代码中，首先会调用（random(WIDTH)、random(HEIGHT)、random(50)）函数，每个函数的返回值会作为对应位置的参数值被传入 ctx.arc() 方法并执行绘图操作。

## 主动学习：我们自己的返回值函数

让我们着手编写具有我们自己的返回值的函数。

1. 首先，从 GitHub 的[function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html)文件复制一份本地副本。这个简单的 HTML 页面包含一个 {{htmlelement("input")}} 文本框和一个段落。还有一个 {{htmlelement("script")}} 元素，我们在其中用两个变量预存了对两个 HTML 元素的引用。这个页面允许你在文本框中输入一个数字，并在下方显示与该数字相关的不同数字。
2. {{htmlelement("script")}}元素中已有的两行代码下方，插入这三个函数：

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     var x = num;
     while (x > 1) {
       num *= x - 1;
       x--;
     }
     return num;
   }
   ```

   `squared()` 和 `cubed()` 函数如其名称所示，返回它们参数的平方和立方。factorial() 函数返回参数的阶乘。

3. 在现有函数下方，添加以下事件处理程序，实现打印文本输入框中数字信息的功能：

   ```js
   input.onchange = function () {
     var num = input.value;
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent =
         num +
         " squared is " +
         squared(num) +
         ". " +
         num +
         " cubed is " +
         cubed(num) +
         ". " +
         num +
         " factorial is " +
         factorial(num) +
         ".";
     }
   };
   ```

通过监听 change 事件，当文本输入框的值发生变化并提交时（例如输入值后，通过按 <kbd>Tab</kbd> 或 <kbd>Return</kbd> 移出输入焦点），该匿名函数会执行。函数运行时，输入框的值会被存入常量 num。

if 语句在输入值非数字时显示错误信息。条件判断使用 isNaN(num) 检测 —— 若返回 true 表示 num 不是数字。isNaN() 函数专门用于检测值是否为非数字。

若条件返回 false，则 num 是有效数字，函数会在段落元素中输出该数字的平方、立方和阶乘值。这些值通过调用 squared()、cubed() 和 factorial() 函数计算得出。。

4.保存代码，在浏览器中加载并测试。

> [!NOTE]
> 若示例运行失败，可对比[GitHub上的完成版](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html)（或查看[实时演示](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)），也可联系我们寻求帮助。
## 轮到你了！
现在，尝试编写自己的函数并添加到函数库中。比如计算平方根、立方根，或给定半径的圆周长？

附加函数编写建议：

学习其他函数的错误处理示例。建议验证必要参数，并为可选参数提供默认值，以减少程序报错。

考虑创建函数库。随着编程经验积累，你会重复使用某些功能。建立自己的工具函数库是高效的选择，可轻松移植到新项目或直接应用于 HTML 页面。
## 技能测试
本文已结束，你是否掌握了核心知识？可通过[函数测试](https://en-us/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions)检验成果。
## 总结

函数既有趣又实用。尽管涉及大量语法和功能细节，但其核心概念易于理解。

如有疑问，可随时重读本文或[联系我们](/zh-CN/docs/Learn_web_development#联系我们)寻求帮助。

## 延伸阅读

- [Functions in-depth](/zh-CN/docs/Web/JavaScript/Reference/Functions) — 涵盖高阶函数知识的详细指南。
- [Callback functions in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — 常见模式是将函数作为参数传入另一函数并在内部调用。此内容虽稍超当前范围，但值得后续学习。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
