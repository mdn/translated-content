---
title: 在代码中做决定——条件语句
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

在任何的编程语言中，代码需要依靠不同的输入作出决定并且采取行动。例如，在游戏中，如果玩家的生命值变成了 0，那么游戏就结束了。在天气应用中，如果在早晨运行，就显示一张日出的图片；如果在晚上，就显示星星和月亮的图片。在这篇文章中，我们将探索在 JavaScript 中所谓的条件语句是怎样工作的。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        了解 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>
        和 <a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS 基础</a>，熟悉前面课程中涵盖的
        JavaScript 的基础知识。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>了解怎样在 JavaScript 中使用条件语句控制结构。
        <ul>
          <li>了解什么是条件语句——一种根据测试结果运行不同代码路径的代码结构。</li>
          <li>使用 <code>if</code>/<code>else</code>/<code>else if</code> 来实现条件语句。</li>
          <li>使用比较运算符来创建测试。</li>
          <li>在测试中实现与、或和非的逻辑。</li>
          <li>switch 语句。</li>
          <li>三元运算符。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 只需一个条件你就可以拥有……！

人类（以及其他的动物）无时无刻不在做决定，这些决定都影响着他们的生活，从小事（“我应该吃一片还是两片饼干”）到重要的大事（“我应该留在我的祖国，在我家的农场工作；还是应该去美国学习天体物理学”）。

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
2. 要测试的条件，放到括号里（通常是“这个值大于另一个值吗”或者“这个值存在吗”）。这个条件会利用[比较运算符](/zh-CN/docs/Learn_web_development/Core/Scripting/Math#比较运算符)（我们在之前的模块中有过讨论）进行比较，并且返回 `true` 或者 `false`。
3. 一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且只会在条件返回 `true` 的时候运行。
4. 关键字 `else`。
5. 另一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且当条件不是 `true`（换句话说，条件为 `false`）的话，它才会运行。

这段代码真的非常易懂——它说“**如果**（if）**条件**（condition）返回 `true`，运行代码 A，**否则**（else）运行代码 B”

注意：你不一定需要 `else` 和第二个花括号——下面的代码也是符合语法规则的：

```js
if (condition) {
  /* 条件为真时运行的代码 */
}

/* 运行其他的代码 */
```

不过，这里你需要注意——在这种情况下，第二段代码不被条件语句控制，所以它**总会**运行，不管条件返回的是 `true` 还是 `false`。这不一定是一件坏事，但这可能不是你想要的——你经常只想要运行一段代码*或者*另一段，而不是两个都运行。

最后，虽然不推荐使用，但有时你可能会看到不加花括号的 `if...else` 语句：

```js example-bad
if (condition) /* 条件为真时运行的代码 */
else /* 否则，运行其他的代码 */
```

这是语法完全有效的代码，但不建议这样使用——因为如果有花括号进行代码切割的话，整体代码被切割为多行代码，更易读和易用。

### 一个真实的示例

为了更好的理解这种语法，让我们考虑一个真实的例子。想像一个孩子被他的父母要求帮助他们做家务。父母可能会说“嗨，宝贝儿，如果你帮我去购物，我会给你额外的零花钱，这样你就能买得起你想要的东西了。”在 JavaScript 中，我们可以这样表示：

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

> [!NOTE]
> 你可以[在 Github 上找到更加完整的示例](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)。）

### else if

上面的示例提供给我们两个选择或结果，但是如果我们想要两个以上呢？

有一种方法来让你的 `if...else` 连接你的额外的选择和结果——使用 `else if`。每一个额外的选择要求放到 `if () { }` 和 `else { }` 里——看看下面更复杂例子，它们是一个简单的天气预报应用的一部分。

```html
<label for="weather">选择今天的天气：</label
><select id="weather">
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
2. 在 JavaScript 中，我们同时存储了对 {{htmlelement("select")}} 和 {{htmlelement("p")}} 元素的引用，并对 `<select>` 添加了一个事件监听器，因此，当它的值改变时，`setWeather()` 函数被执行。
3. 当函数运行时，我们首先新建了一个 `choice` 变量去存储 `<select>` 目前被选中的值。接着我们用条件判断语句根据 `choice` 的值在段落中展示不同的文本。注意 `else if () { }` 块中的条件是怎么被判断的，除了第一个，它是在 `if () { }` 中被判断的。
4. 最后一个 `else { }` 中的选择通常被叫做“最后招数”——在所有的条件都不为 `true` 时其中的代码会被执行。在这个示例中，如果用户没有选择任何一个选项，它会将段落中的文本清空，例如当用户决定重新选择最开始出现的“--作出选择--”选项时，就会有这样的效果。

> [!NOTE]
> 你可以[在 GitHub 上找到这个示例](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)。）

### 关于比较运算符

比较运算符是用来判断条件语句中的条件的。我们先回过头来看看 [JavaScript 中的基本算术——数字与运算符](/zh-CN/docs/Learn_web_development/Core/Scripting/Math#比较运算符)文章中的比较运算符。我们有如下选择：

- `===` 和 `!==`——判断一个值是否严格等于，或不等于另一个。
- `<` 和 `>`——判断一个值是否小于，或大于另一个。
- `<=` 和 `>=`——判断一个值是否小于等于，或者大于等于另一个。

我们想特别提到测试布尔值（`true` / `false`），和一个你会频繁遇到的通用模式，任何不是 `false`、`undefined`、`null`、`0`、`NaN`、或空字符串（`''`）的值在作为条件语句进行测试时实际返回 `true`，因此可以简单地使用变量名称来测试它是否为真，甚至是否存在（即它不是未定义的）。例如：

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

如果要测试多个条件，而不需要编写嵌套 `if...else` 语句，[逻辑运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)可以帮助你。当在条件中使用时，前两个执行以下操作：

- `&&`——逻辑与。允许你把两个或多个表达式连在一起，这样所有的表达式都必须单独求值为 `true`，整个表达式才会返回 `true`。
- `||`——逻辑或。允许你把两个或多个表达式连在一起，其中有一个或多个表达式单独求值为 `true`，整个表达式就会返回 `true`。

举一个逻辑与的例子，刚才的那段代码片段可以写成下面这样：

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `外面现在是 ${temperature} 华氏度——风和日丽。让我们去海滩或公园，吃个冰激凌。`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `外面现在是 ${temperature} 华氏度——很热！如果你想出去，一定要涂抹一些防晒霜。`;
}
```

所以，只有当 `choice === 'sunny'` _并且_ `temperature < 86` 都返回 `true` 时，第一个代码块才会运行。

让我们快速看一个逻辑或的例子：

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("你应该赶紧离开这间房子。");
} else {
  console.log("或许你应该呆在这里。");
}
```

最后一种类型的逻辑运算符——逻辑非（以 `!` 运算符表示）——可以用于对一个表达式取反。让我们将其与上一个示例中的逻辑或结合在一起：

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("或许你应该呆在这里。");
} else {
  console.log("你应该赶紧离开这间房子。");
}
```

在这一段代码中，如果逻辑或语句返回 `true`，则逻辑非运算符会取反，于是整个表达式将返回 `false`。

可以在任何结构中随意合并任意多个逻辑语句。下面的示例只在两边的逻辑或语句同时返回 true 时才会执行代码，这也就意味着整个逻辑与语句会返回 true：

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // 执行代码
}
```

在条件语句中运用逻辑或运算符最常见的错误是尝试给出一个要检查的变量，然后列出很多个都会返回 true 的值，不同的值之间用 `||`（或）运算符分隔。比如：

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // 执行代码
}
```

在这个例子里 `if ()` 里的条件总为真，因为 7（或者其他非零的数）总是求值为 `true`。这个条件实际意思是“如果 x 等于 5，或者 7 为真——它总是成立的”。这不是我们想要的逻辑，为了让它正常工作，你必须在每个或运算符的两边指定完整的测试：

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // 执行代码
}
```

## switch 语句

`if...else` 语句能够很好地实现条件代码，但是它们不是没有缺点。它们主要适用于只有几个选择的情况，且其中的每一个都需要相当数量的代码来运行，和/或条件很复杂的情况（例如多个逻辑运算符）。对于只想将变量设置一系列为特定值的选项或根据条件打印特定语句的情况，语法可能会很麻烦，特别是如果有大量选择的时候。

[`switch` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch)在这里是你的朋友——它们以单个表达式/值作为输入，然后查看多个选项，直到找到与该值相匹配的选项，执行与之相关的代码。这里有一些伪代码，可以给你一点灵感：

```js
switch (expression) {
  case choice1:
    // 运行这段代码
    break;

  case choice2:
    // 否则，运行这段代码
    break;

  // 包含尽可能多的情况

  default:
    // 此外，仅运行这段代码
    break;
}
```

这里我们有：

1. 关键字 `switch`，后跟一组括号。
2. 括号内可以是表达式或值。
3. 关键字 `case`，后跟一个选项的表达式/值，后面跟一个冒号。
4. 如果选项与表达式匹配，则运行一些代码。
5. 一个 `break` 语句，分号结尾。如果先前的选择与表达式/值匹配，则浏览器在此停止执行代码块，并执行 switch 语句之后的代码。
6. 任意个 case 选项（3-5 条）。
7. 关键字 `default`，后面跟随与 case 选项（3–5 条）完全相同的代码模式，只是 `default` 之后不需要再有选项，并且不需要 `break` 语句，因为之后没有任何运行代码。如果之前没有选项匹配，则运行 default 选项。

> [!NOTE]
> `default` 部分不是必须的——如果表达式不可能存在未知值，则可以安全地省略它。然而，如果有这样的可能，你需要包含它来处理未知的情况。

### switch 语句示例

我们来看一个真实的例子——我们将重写天气预报应用程序，以改用 switch 语句：

```html
<label for="weather">选择今天的天气：</label
><select id="weather">
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

> [!NOTE]
> 你可以[在 GitHub 上找到这个示例](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)。）

## 三元运算符

在我们举一些例子之前，我们要介绍一下最后一个语法。[三元或条件运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)是一个很简单的语法，其用于测试一个条件，如果条件为 `true` 则返回一个值/表达式，否则（`false`）返回另外一个——这在某些情况下是很有用的，如果你通过 `true`/`false` 条件来选择，这比 `if...else` 块占用的代码要少很多。伪代码看起来像这样：

```js-nolint
condition ? 运行这段代码 : 否则，运行这段代码
```

所以我们来看一个例子：

```js
const greeting = isBirthday
  ? "小王生日快乐，祝你有个美好的一天！"
  : "小王早上好。";
```

在这里我们有一个变量叫做 `isBirthday`——如果它是 `true`，我们给客人一个生日快乐的消息；如果不是，改为标准的每日问候。

### 三元运算符示例

三元运算符不仅用于设置变量值，你还可以运行函数或代码行——任何你喜欢的东西。下面的实时示例显示了一个简单的主题选择器，其中网站的样式是用三元运算符应用的。

```html
<label for="theme">选择主题：</label
><select id="theme">
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

在这里，我们有一个用于选择主题（黑色或白色）的 {{htmlelement('select')}} 元素，加上一个简单的 {{htmlelement("Heading_Elements", "h1")}} 以显示网站标题。我们也有一个函数叫做 `update()`，它将两种颜色作为参数（输入）。网站的背景颜色设置为第一个提供的颜色，其文本颜色设置为第二个提供的颜色。

最后，我们还有一个 [onchange](/zh-CN/docs/Web/API/HTMLElement/change_event) 事件监听器，用于运行一个包含三元运算符的函数。它以 `select.value === 'black'` 测试条件开始。如果这返回 `true`，我们运行带有黑色和白色参数的函数 `update()`，这意味着我们最终得到黑色的背景颜色和白色的文字颜色。如果返回 `false`，我们运行带有白色和黑色参数的函数 `update()`，这意味着站点颜色被反转。

> [!NOTE]
> 你可以[在 GitHub 上找到这个示例](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html)（也可以[在线运行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)。）

## 主动学习：一个简单的日历

在这个例子中，你将帮助我们完成一个简单的日历应用程序。在你的代码中：

- {{htmlelement("select")}} 允许用户在不同月份之间进行选择。
- `onchange` 事件处理器检测 `<select>` 菜单中选择的值何时更改。
- 名为 `createCalendar()` 的函数用来绘制日历并在 {{htmlelement("Heading_Elements", "h1")}} 元素中显示正确的月份。

我们需要你在 `createCalendar()` 函数中写一个条件语句，就在 `// 在这里添加条件语句` 注释的下面。它应该：

1. 查看所选月份（存储在 `choice` 变量中，这将是 `<select>` 值更改后的元素值，例如“一月”）。
2. 为 `days` 变量赋值，使之等于所选月份的天数。要做到这一点，你必须查询一年中每个月的天数。在这个例子中，你可以忽略闰年。

提示：

- 建议你使用逻辑或将多个月组合成一个单一条件，许多月份共享相同的天数。
- 考虑最常用的天数，并将其用作默认值。

如果你犯了错误，可以随时使用“重置”按钮重置该示例。如果真的卡住了，请按“查看解答”查看解决方案。

```html hidden
<h2>实时输出</h2>
<iframe id="output" width="100%" height="600px"></iframe>

<h2>可编辑代码</h2>
<p class="a11y-label">按下 Esc 以将焦点移出代码区（Tab 键添加制表符）。</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // 在这里添加条件语句

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "一月";
createCalendar("一月");
</textarea>

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
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const outputIFrame = document.querySelector("#output");
const textarea = document.getElementById("code");
const initialCode = textarea.value;
let userCode = textarea.value;

const solutionCode = `const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  if (month === "二月") {
    days = 28;
  } else if (
    month === "四月" ||
    month === "六月" ||
    month === "九月" ||
    month === "十一月"
  ) {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "一月";
createCalendar("一月");`;

function outputDocument(code) {
  const outputBody = `
<div class="output" style="height: 500px; overflow: auto">
  <label for="month">选择月份：</label><select id="month">
    <option value="一月">一月</option>
    <option value="二月">二月</option>
    <option value="三月">三月</option>
    <option value="四月">四月</option>
    <option value="五月">五月</option>
    <option value="六月">六月</option>
    <option value="七月">七月</option>
    <option value="八月">八月</option>
    <option value="九月">九月</option>
    <option value="十月">十月</option>
    <option value="十一月">十一月</option>
    <option value="十二月">十二月</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>`;

  const outputStyle = `
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
}`;
  return `
<!doctype html>
<html>
  <head>
    <style>${outputStyle}</style>
  </head>
  <body>
    ${outputBody}
    <script>${code}<${"/"}script>
  </body>
</html>`;
}

function update() {
  output.setAttribute("srcdoc", outputDocument(textarea.value));
}

update();

textarea.addEventListener("input", update);

reset.addEventListener("click", () => {
  textarea.value = initialCode;
  userEntry = textarea.value;
  solution.value = "查看解答";
  update();
});

solution.addEventListener("click", () => {
  if (solution.value === "查看解答") {
    // 记住用户代码的状态，以便我们可以进行恢复
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "隐藏解答";
  } else {
    textarea.value = userCode;
    solution.value = "查看解答";
  }
  update();
});

// 阻止 Tab 键跳出 textarea，并在光标位置插入制表符
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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
```

{{ EmbedLiveSample('主动学习：一个简单的日历', '100%', 1210) }}

## 主动学习：更多颜色选择！

在这个例子中，你将要采取我们前面看到的三元运算符示例，并将三元运算符转换为一个 switch 语句，这将允许我们对简单的网站应用更多的选择。看看 {{htmlelement("select")}}——这次你会看到它不是两个主题选项，而是五个。你需要在 `// 添加 switch 语句` 注释下面添加一个 switch 语句：

- 它应该接受 `choice` 变量作为其输入表达式。
- 对于每种情况，选择应该等于可以选择的可能值之一，即 `white`、`black`、`purple`、`yellow` 或 `psychedelic`。
- 对于每种情况，应运行 `update()` 函数，并传递两个颜色值，第一个颜色值为背景颜色，第二个颜色值为文本颜色。请记住，颜色值是字符串，因此需要用引号括起来。

如果你犯了错误，可以随时使用“重置”按钮重置该示例。如果真的卡住了，请按“查看解答”查看解决方案。

```html hidden
<h2>实时输出</h2>
<iframe id="output" width="100%" height="350px"></iframe>

<h2>可编辑代码</h2>
<p class="a11y-label">按下 Esc 以将焦点移出代码区（Tab 键添加制表符）。</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // 添加 switch 语句
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
</textarea>

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
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const outputIFrame = document.querySelector("#output");
const textarea = document.getElementById("code");
const initialCode = textarea.value;
let userCode = textarea.value;

const solutionCode = `const select = document.querySelector('select');
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
      update('yellow','purple');
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

function outputDocument(code) {
  const outputBody = `
<div class="output" style="height: 300px;">
  <label for="theme">选择主题：</label
  ><select id="theme">
    <option value="white">白色</option>
    <option value="black">黑色</option>
    <option value="purple">紫色</option>
    <option value="yellow">黄色</option>
    <option value="psychedelic">迷幻</option>
  </select>

  <h1>这是我的网站</h1>
</div>`;

  return `
<!doctype html>
<html>
  <head>
  </head>
  <body>
    ${outputBody}
    <script>${code}<${"/"}script>
  </body>
</html>`;
}

function update() {
  output.setAttribute("srcdoc", outputDocument(textarea.value));
}

update();

textarea.addEventListener("input", update);

reset.addEventListener("click", () => {
  textarea.value = initialCode;
  userEntry = textarea.value;
  solution.value = "查看解答";
  update();
});

solution.addEventListener("click", () => {
  if (solution.value === "查看解答") {
    // 记住用户代码的状态，以便我们可以进行恢复
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "隐藏解答";
  } else {
    textarea.value = userCode;
    solution.value = "查看解答";
  }
  update();
});

// 阻止 Tab 键跳出 textarea，并在光标位置插入制表符
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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
```

{{ EmbedLiveSample('主动学习：更多颜色选择！', '100%', 950) }}

## 技能测试！

你已经阅读到了本篇文章的末尾，但还能记清楚最重要的部分吗？你可以做一些深入的测试，来验证你是否在进行下一步学习之前，记住了这些知识，请参阅[技能测试：条件语句](/zh-CN/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals)。

## 总结

这就是你现在真正需要了解的有关 JavaScript 中的条件结构的全部内容！接下来，我们将探讨循环遍历的代码。

## 参见

- [比较运算符](/zh-CN/docs/Learn_web_development/Core/Scripting/Math#比较运算符)
- [条件声明详细信息](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#条件语句)
- [if...else 参考](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [条件（三元）运算符参考](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
