---
title: 在代码中做决定——条件语句
slug: Learn/JavaScript/Building_blocks/conditionals
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

在任何的编程语言中，代码需要依靠不同的输入作出决定并且采取行动。例如，在游戏中，如果玩家的生命值变成了 0，那么游戏就结束了。在天气应用中，如果在早晨运行，就显示一张日出的图片；如果在晚上，就显示星星和月亮的图片。在这篇文章中，我们将探索在 JavaScript 中所谓的条件语句是怎样工作的。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机知识，对 HTML 和 CSS 有基本的了解，已经阅读了 <a
          href="/zh-CN/docs/Learn/JavaScript/First_steps"
          >JavaScript 第一步</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解怎样在 JavaScript 中使用条件语句控制结构。</td>
    </tr>
  </tbody>
</table>

## 只需一个条件你就可以拥有……！

人类（以及其他的动物）无时无刻不在做决定，这些决定都影响着他们的生活，从小事（“我应该吃一片还是两片饼干”）到重要的大事（“我应该留在我的祖国，在我父亲的农场工作；还是应该去美国学习天体物理学”）。

条件语句结构允许我们来描述在 JavaScript 中这样的选择，从不得不作出的选择（例如：“一片还是两片”）到产生的结果或这些选择（也许是“吃一片饼干”可能会“仍然感觉饿”，或者是“吃两片饼干”可能会“感觉饱了，但妈妈会因为我吃掉了所有的饼干而骂我”。）

![一个类似于人的卡通人物拿着一个标有“Cookies”的饼干罐。该人物的头上有一个问号。有两个说话的气泡。左边的说话泡泡有一个饼干。右边的气泡有两块饼干。这意味着该人物正试图决定是要一块饼干还是两块饼干。](cookie-choice-small.png)

## if...else 语句

让我们看看到目前为止你将会在 JavaScript 中用到的最常见的条件语句类型——[`if...else` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)。

### 基本的 if...else 语法

基本的 `if...else` 语法看起来这样：

```js
if (condition) {
  /* 条件为真时运行的代码 */
} else {
  /* 否则，运行其他的代码 */
}
```

在这里我们有：

1. 关键字 `if`，并且后面跟随括号。
2. 要测试的条件，放到括号里（通常是“这个值大于另一个值吗”或者“这个值存在吗”）。这个条件会利用[比较运算符](/zh-CN/docs/Learn/JavaScript/First_steps/Math#比较运算符)（我们会在最后的模块中讨论）进行比较，并且返回 `true` 或者 `false`。
3. 一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且只会在条件语句返回 `true` 的时候运行。
4. 关键字 `else`。
5. 另一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且当条件语句返回值不是 `true`（换句话说，这个返回值为 `false`）的话，它才会运行。

这段代码真的非常易懂——它说“**如果**（if）**条件**（condition）返回 `true`，运行代码 A，**否则**（else）运行代码 B”

注意：你不一定需要 `else` 和第二个花括号——下面的代码也是符合语法规则的：

```js
if (condition) {
  /* 条件为真时运行的代码 */
}

/* 运行其他的代码 */
```

不过，这里你需要注意——在这种情况下，第二段代码不被条件语句控制，所以它**总会**运行，不管条件返回的是 `true` 还是 `false`。这不一定是一件坏事，但这可能不是你想要的——你经常只想要运行一段代码*或者*另一段，而不是两个都运行。

最后，虽然不推荐使用，但有时你可能会看到不加大括号的 `if...else` 语句：

```js example-bad
if (condition) /* 条件为真时运行的代码 */
else /* 否则，运行其他的代码 */
```

这是完全有效的代码，但不建议这样使用——因为如果有花括号进行代码切割的话，整体代码被切割为多行代码，更易读和易用。

### 一个真实的例子

为了更好的理解这种语法，让我们考虑一个真实的例子。想像一个孩子被他的父母要求帮助他们做家务。父母可能会说“嗨，宝贝儿，如果你帮我去购物，我会给你额外的零花钱，这样你就能买得起你想要的玩具了。”在 JavaScript 中，我们可以这样表示：

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

这段代码显示的结果是变量 `shoppingDone` 总是返回 `false`，意味着对我们的穷孩子来说很失望。如果孩子去购物的话，就需要依靠我们提供机制来使父母把变量 `shoppingDone` 变成 `true`。

> **备注：** 你可以[在 Github 上找到这个例子](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)）

### else if

最后一个例子提供给我们两个选择或结果，但是如果我们想要两个以上呢？

有一种方法来让你的 `if...else` 连接你的额外的选择和结果——使用 `else if`。每一个额外的选择要求放到 `if () { }` 和 `else { }` 里——看看下面更多涉及到的例子，它们属于一个普通的天气预报的应用的一部分。

```html
<label for="weather">选择今天的天气：</label>
<select id="weather">
  <option value="">--作出选择--</option>
  <option value="sunny">晴天</option>
  <option value="rainy">雨天</option>
  <option value="snowing">雪天</option>
  <option value="overcast">阴天</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent = "阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
  } else if (choice === "rainy") {
    para.textContent = "外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
  } else if (choice === "snowing") {
    para.textContent =
      "大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
  } else if (choice === "overcast") {
    para.textContent =
      "虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100) }}

1. 这里我们有 HTML {{htmlelement("select")}} 元素让我们选择不同的天气，以及一个简单的段落。
2. 在 JavaScript 中，我们同时存储了对 {{htmlelement("select")}} 和 {{htmlelement("p")}} 的引用，并对 `<select>` 添加了一个事件监听器，因此，当它的值改变时，`setWeather()` 函数被执行。
3. 当函数运行时，我们首先新建了一个 `choice` 变量去存储当前被选的 `<select>` 中的值。接着我们用条件判断语句根据 `choice` 的值选择性的展示段落中的文本。注意 `else if () { }` 块中的条件是怎么被判断的，除了第一个，它是在 `if () { }` 中被判断的。
4. 最后一个 `else { }` 中的选择通常被叫做“最后招数”——在所有的条件都不为 `true` 时其中的代码会被执行。在这个例子中，如果用户没有选择任何一个选项，它会将段落中的文本清空，例如当用户决定重新选择最开始出现的“--作出选择--”选项时，就会有这样的效果。

> **备注：** 你可以[在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)。）

### 关于比较运算符

比较运算符是用来判断条件语句中的条件的。我们先回过头来看看 [JavaScript 中的基本算术——数字与运算符](/zh-CN/docs/Learn/JavaScript/First_steps/Math#比较运算符)文章中的比较运算符。我们有如下选择：

- `===` 和 `!==`——判断一个值是否严格等于，或不等于另一个。
- `<` 和 `>`——判断一个值是否小于，或大于另一个。
- `<=` 和 `>=`——判断一个值是否小于或等于，或者大于或等于另一个。

我们想特别提到测试布尔值（`true` / `false`），和一个你会频繁遇到的通用模式，任何不是 `false`、`undefined`、`null`、`0`、`NaN`、或一个空字符串（`''`）在作为条件语句进行测试时实际返回 `true`，因此可以简单地使用变量名称来测试它是否为真，甚至是否存在（即它不是 undefined 的）。例如：

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("耶！这里有一些制作奶酪吐司的奶酪。");
} else {
  console.log("今天你的吐司上没有奶酪了。");
}
```

而且，回到我们以前关于孩子为自己的父母做家务的例子，你可以这样写：

```js
let shoppingDone = false;
let childsAllowance;

// 不必直接明确指定 'shoppingDone === true'
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

### 嵌套 if...else

将一个 `if...else` 语句放在另外一个中嵌套是完全可行的。例如，我们可以更新我们的天气预报应用程序，以显示更多的选择，具体取决于温度：

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `外面现在是 ${temperature} 华氏度——风和日丽。让我们去海滩或公园，吃个冰激凌。`;
  } else if (temperature >= 86) {
    para.textContent = `外面现在是 ${temperature} 华氏度——很热！如果你想出去，一定要涂抹一些防晒霜。`;
  }
}
```

即使代码全部一起工作，每个 `if...else` 语句完全独立于另一个。

### 逻辑运算符：与、或、非

如果要测试多个条件，而不需要编写嵌套 `if...else` 语句，[逻辑运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)可以帮助您。当在条件下使用时，前两个执行以下操作：

- `&&`——逻辑与。允许你把两个或多个表达式连在一起，这样所有的表达式都必须单独评估为 `true`，整个表达式才能返回 `true`。
- `||`——逻辑或。允许你把两个或多个表达式连在一起，其中一个或多个表达式必须单独评估为 `true`，整个表达式才能返回 `true`。

举一个逻辑与的例子，刚才的那段代码片段可以写成下面这样：

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent =
    "外面现在是" +
    temperature +
    " 华氏度——风和日丽。让我们去海滩或公园，吃个冰激凌。";
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent =
    "外面现在是" +
    temperature +
    " 华氏度——很热！如果你想出去，一定要涂抹一些防晒霜。";
}
```

所以，只有当 `choice === 'sunny'` _并且_ `temperature < 86` 都返回 `true` 时，第一个代码块才能运行。

让我们快速看一个逻辑或的例子：

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("你需要赶紧离开这间房子。");
} else {
  console.log("或许你应该呆在这里。");
}
```

最后一种类型的逻辑运算符， **逻辑非** `!` 运算符可以用于对一个表达式取否。让我们把**非运算符**结合上一个例子里的或运算看看：

```js
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('或许你应该呆在这里。');
} else {
  console.log('你需要赶紧离开这间房子。);
}
```

在这一段代码中，如果**逻辑或**所在的语句返回 `true`，则**非运算符**会将其取否，于是整个表达式的返回值将会是 `false`。

可以在任何结构中随意合并很多个逻辑表达式。接下来的例子将会只在**或运算符**两边的语句同时返回 true 时才会执行代码，这也就意味着整个**与运算符**语句将会返回 true：

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // 执行代码
}
```

在条件语句中运用**或逻辑运算符**最常见的错误是尝试声明变量后，仅检查该变量一次的情况下赋予很多个都会返回 true 的值，不同的值之间用 `||`（或）运算符分隔。比如：

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // 执行代码
}
```

在这个例子里 `if ()` 里的条件总为真，因为 7（或者其他非零的数）的值总是为真。这个条件实际意思是“如果 x 等于 5，或者 7 为真——它总是成立的”。这不是我们想要的逻辑，为了让它正常工作，你必须在每个或运算符的两边指定完整的测试：

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // 执行代码
}
```

## switch 语句

`if...else` 语句能够很好地实现条件代码，但是它们不是没有缺点。它们主要适用于只有几个选择的情况，每个都需要相当数量的代码来运行，和/或条件很复杂的情况（例如多个逻辑运算符）。对于只想将变量设置一系列为特定值的选项或根据条件打印特定语句的情况，语法可能会很麻烦，特别是如果有大量选择的时候。

[`switch` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) 在这里是你的朋友——它们以单个表达式/值作为输入，然后查看多个选项，直到找到与该值相匹配的选项，执行与之相关的代码。这里有一些伪代码，可以给你一点灵感：

```
switch (表达式) {
  case 选择1:
    运行这段代码
    break;

  case 选择2:
    否则，运行这段代码
    break;

  // 包含尽可能多的情况

  default:
    实际上，仅仅运行这段代码
}
```

这里我们有：

1. 关键字 `switch`, 后跟一组括号。
2. 括号内可以是表达式或值。
3. 关键字 `case`, 后跟一个选项的表达式/值，后面跟一个冒号.
4. 如果选项与表达式匹配，则运行一些代码。
5. 一个 `break` 语句，分号结尾。如果先前的选择与表达式/值匹配，则浏览器在此停止执行代码块，并执行 switch 语句之后的代码。
6. 你可以添加任意的 case 选项（选项 3-5 个）。
7. 关键字 `default`, 后面跟随和 `case` 完全相同的代码模式（选项 3–5 个），`default` 之后不需要再有选项，并且不需要 `break` 语句，因为之后没有任何运行代码。如果之前没有选项匹配，则运行 `default` 选项。

> **备注：** `default` 部分不是必须的——如果表达式不可能存在未知值，则可以安全地省略它。然而，如果有这样的机会，你需要包括它来处理未知的情况。

### switch 语句示例

我们来看一个真实的例子——我们将重写天气预报应用程序，以改用 switch 语句：

```html
<label for="weather">选择今天的天气：</label>
<select id="weather">
  <option value="">--作出选择--</option>
  <option value="sunny">晴天</option>
  <option value="rainy">雨天</option>
  <option value="snowing">雪天</option>
  <option value="overcast">阴天</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent = "阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
      break;
    case "rainy":
      para.textContent = "外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
      break;
    case "snowing":
      para.textContent =
        "大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
      break;
    case "overcast":
      para.textContent =
        "虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('switch 语句示例', '100%', 100) }}

> **备注：** 你可以[在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)。）

## 三元运算符

在我们举一些例子之前，我们要介绍一下最后一句语法。[三元或条件运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)是一个语法的小点，用于测试一个条件，并返回一个值/表达式，如果它是 `true` 则返回其中一个，否则（`false`）返回另外一个——这在某些情况下是很有用的，如果你通过 `true`/`false` 条件来选择，这比 `if...else` 块占用的代码要少很多。伪代码看起来像这样：

```
condition ? 运行这段代码 : 否则，运行这段代码
```

所以我们来看一个简单的例子：

```js
const greeting = isBirthday
  ? "小王生日快乐，祝你有个美好的一天！"
  : "小王早上好。";
```

在这里我们有一个变量叫做 `isBirthday`——如果它是 `true`，我们给客人一个生日快乐的消息；如果不是，改为标准的每日问候。

### 三元运算符示例

三元运算符不仅用于设置变量值，你还可以运行函数或代码行——任何你喜欢的东西。下面的实时示例显示了一个简单的主题选择器，其中网站的样式是用三元运算符应用的。

```html
<label for="theme">选择主题：</label>
<select id="theme">
  <option value="white">白</option>
  <option value="black">黑</option>
</select>

<h1>这是我的网页</h1>
```

```js
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
```

{{ EmbedLiveSample('三元运算符示例', '100%', 300) }}

在这里，我们有一个 {{htmlelement('select')}} 选择主题（黑色或白色）的元素，加上一个简单 {{htmlelement("Heading_Elements", "h1")}} 以显示网站标题。我们也有一个函数叫做 `update()`，它将两种颜色作为参数（输入）。网站的背景颜色设置为第一个提供的颜色，其文本颜色设置为第二个提供的颜色。

最后，我们还有一个 [onchange](/zh-CN/docs/Web/API/HTMLElement/change_event)事件监听器，用于运行一个包含三元运算符的函数。它以 `select.value === 'black'` 测试条件开始。如果这返回 `true`，我们运行带有黑色和白色参数的函数 `update()`，这意味着我们最终得到黑色的背景颜色和白色的文字颜色。如果返回 `false`，我们运行带有白色和黑色参数的函数 `update()`，这意味着站点颜色被反转。

> **备注：** 你可以[在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)。）

## 主动学习：一个简单的日历

在这个例子中，你将帮助我们完成一个简单的日历应用程序。在你的代码中：

- 一个 {{htmlelement("select")}} 元素表示一个控件，提供一个选项菜单元素，允许用户在不同月份之间进行选择。
- `onchange` 事件处理器检测 `<select>` 菜单中选择的值何时更改。
- 一个叫做 `createCalendar()` 的函数，它用来绘制日历并在 {{htmlelement("Heading_Elements", "h1")}} 元素中显示正确的月份。

我们需要你在 `onchange` 处理函数中写一个条件语句，就在 `// ADD CONDITIONAL HERE` 注释的下面。这应该：

1. 查看所选月份（存储在 `choice` 变量中，这将是 `<select>` 值更改后的元素值，例如“1 月”）。
2. 设置一个名为 `days` 的变量，使之等于所选月份的天数。要做到这一点，你必须查询一年中每个月的天数。在这个例子中，你可以忽略闰年。

提示：

- 建议你使用逻辑或将多个月组合成一个单一条件，许多月份共享相同的天数。
- 考虑最常用的天数，并将其用作默认值。

如果你犯了错误，可以随时使用“重置”按钮重置该示例。如果真的卡住了，请按“查看解答”查看解决方案。

```html hidden
<h2>实时输出</h2>
<div class="output" style="height: 500px;overflow: auto;">
  <label for="month">Select month: </label>
  <select id="month">
    <option value="January">一月</option>
    <option value="February">二月</option>
    <option value="March">三月</option>
    <option value="April">四月</option>
    <option value="May">五月</option>
    <option value="June">六月</option>
    <option value="July">七月</option>
    <option value="August">八月</option>
    <option value="September">九月</option>
    <option value="October">十月</option>
    <option value="November">十一月</option>
    <option value="December">十二月</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>

<h2>可编辑代码</h2>
<p class="a11y-label">按下 Esc 以将焦点移出代码区（Tab 键添加制表符）。</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="查看解答" />
</div>
```

```css hidden
.output * {
  box-sizing: border-box;
}

.output ul {
  padding-left: 0;
}

.output li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}

html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "查看解答";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "查看解答") {
    textarea.value = solutionEntry;
    solution.value = "隐藏解答";
  } else {
    textarea.value = userEntry;
    solution.value = "查看解答";
  }
  updateCode();
});

const jsSolution = `const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;
  let days = 31;
  if (choice === 'February') {
    days = 28;
  } else if (choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
    days = 30;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "查看解答") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('主动学习：一个简单的日历', '100%', 1110) }}

## 主动学习：更多颜色选择！

在这个例子中，你将要采取我们前面看到的三元运算符示例，并将三元运算符转换为一个 switch 语句，这将允许我们对简单的网站应用更多的选择。看看 {{htmlelement("select")}}——这次你会看到它不是两个主题选项，而是五个。你需要在 `// ADD SWITCH STATEMENT` 注释下面添加一个 switch 语句：

- 它应该接受 `choice` 变量作为其输入表达式。
- 对于每种情况，选择应该等于可以选择的可能值之一，即 `white`、`black`、`purple`、`yellow` 或 `psychedelic`。
- 对于每种情况，应运行 `update()` 函数，并传递两个颜色值，第一个颜色值为背景颜色，第二个颜色值为文本颜色。请记住，颜色值是字符串，因此需要用引号括起来。

如果你犯了错误，可以随时使用“重置”按钮重置该示例。如果真的卡住了，请按“查看解答”查看解决方案。

```html hidden
<h2>实时输出</h2>
<div class="output" style="height: 300px;">
  <label for="theme">选择主题：</label>
  <select id="theme">
    <option value="white">White</option>
    <option value="black">Black</option>
    <option value="purple">Purple</option>
    <option value="yellow">Yellow</option>
    <option value="psychedelic">Psychedelic</option>
  </select>

  <h1>这是我的网站</h1>
</div>

<h2>可编辑代码</h2>
<p class="a11y-label">按下 Esc 以将焦点移出代码区（Tab 键添加制表符）。</p>

<textarea id="code" class="playable-code" style="height: 450px;width: 95%">
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="查看解答" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "查看解答";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "查看解答") {
    textarea.value = solutionEntry;
    solution.value = "隐藏解答";
  } else {
    textarea.value = userEntry;
    solution.value = "查看解答";
  }
  updateCode();
});

const jsSolution = `const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  switch(choice) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','darkgray');
      break;
    case 'psychedelic':
      update('lime','purple');
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }
  updateCode();
};
```

{{ EmbedLiveSample('主动学习：更多颜色选择！', '100%', 850) }}

## 测试你的技能！

你已经阅读到了本篇文章的末尾，但还能记清楚最重要的部分吗？你可以做一些深入的测试，来验证你是否在进行下一步学习之前，记住了这些知识，请参阅[测试你的技能：条件语句](/zh-CN/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals)

## 结论

这就是现在真正需要了解的 JavaScript 中的条件结构！如果有什么不明白的，请随时再次阅读文章，或者[联系我们](/zh-CN/docs/Learn#联系我们)寻求帮助。

## 参见

- [比较运算符](/zh-CN/docs/Learn/JavaScript/First_steps/Math#比较运算符)
- [条件声明详细](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#条件语句)
- [if...else 参考](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [条件（三元）运算符参考](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
