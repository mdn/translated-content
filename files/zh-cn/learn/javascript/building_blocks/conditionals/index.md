---
title: 在代码中做决定——条件语句
slug: Learn/JavaScript/Building_blocks/conditionals
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

在任何的编程语言中，代码需要依靠不同的输入作出决定并且采取行动。例如，在游戏中，如果玩家的生命值变成了 0，那么游戏就结束了。在天气应用中，如果在早晨运行，就显示一张日出的图片；如果在晚上，就显示星星和月亮的图片。在这篇文章中，我们将探索在 JavaScript 中所谓的条件语句是怎样工作的。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机知识，对 HTML 和 CSS 有基本的了解，<a
          href="/zh-CN/docs/Learn/JavaScript/First_steps"
          >JavaScript 的第一步</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解怎样在 JavaScript 中使用条件语句的结构。</td>
    </tr>
  </tbody>
</table>

## 只需一个条件你就可以拥有……！

人类（以及其他的动物）无时无刻不在做决定，这些决定都影响着他们的生活，从小事（“我应该吃一片还是两片饼干”）到重要的大事（“我应该留在我的祖国，在我父亲的农场工作；还是应该去美国学习天体物理学”）。

条件语句结构允许我们来描述在 JavaScript 中这样的选择，从不得不作出的选择（例如：“一片还是两片”）到产生的结果或这些选择（也许是“吃一片饼干”可能会“仍然感觉饿”，或者是“吃两片饼干”可能会“感觉饱了，但妈妈会因为我吃掉了所有的饼干而骂我”。）

![](cookie-choice-small.png)

## if ... else 语句

让我们看看到目前为止你将会在 JavaScript 中用到的最常见的条件语句类型 — `if ... else` 语句。

### 基本的的 if…else 语法

基本的 if…else 语法看起来像下面的 {{glossary("伪代码")}}:

```js
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

在这里我们有：

1. 关键字 if，并且后面跟随括号。
2. 要测试的条件，放到括号里（通常是“这个值大于另一个值吗”或者“这个值存在吗”）。这个条件会利用[比较运算符](/zh-CN/Learn/JavaScript/First_steps/Math#Comparison_operators)（我们会在最后的模块中讨论）进行比较，并且返回 true 或者 false。
3. 一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且只会在条件语句返回 true 的时候运行。
4. 关键字 else。
5. 另一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且当条件语句返回值不是 true 的话，它才会运行。

这段代码真的非常易懂——它说“**如果（if）条件（condition）**返回 true，运行代码 A，**否则（else）**运行代码 B”

注意：你不一定需要 else 和第二个花括号——下面的代码也是符合语法规则的：

```js
if (condition) {
  code to run if condition is true
}

run some other code
```

不过，这里你需要注意——在这种情况下，第二段代码不被条件语句控制，所以它总会运行，不管条件返回的是 true 还是 false。这不一定是一件坏事，但这可能不是你想要的——你经常只想要运行一段代码或者另一段，而不是两个都运行。

最后，有时候你可能会看到 if…else 语句没有写花括号，像下面的速记风格：

```js
if (condition) code to run if condition is true
else run some other code instead
```

这是完全有效的代码，但不建议这样使用——因为如果有花括号进行代码切割的话，整体代码被切割为多行代码，更易读和易用。

### 一个真实的例子

为了更好的理解这种语法，让我们考虑一个真实的例子。想像一个孩子被他的父母要求帮助他们做家务。父母可能会说“嗨，宝贝儿，如果你帮我去购物，我会给你额外的零花钱，这样你就能买得起你想要的玩具了。”在 JavaScript 中，我们可以这样表示：

```js
var shoppingDone = false;

if (shoppingDone === true) {
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

这段代码显示的结果是变量 `shoppingDone` 总是返回 `false`，意味着对我们的穷孩子来说很失望。如果孩子去购物的话，就需要依靠我们提供机制来使父母把变量 `shoppingDone` 变成 `true`。

> **备注：** 你可以看到在[Github 上这个例子的完整版本](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/allowance-updater.html)（也可以[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)）

### else if

最后一个例子提供给我们两个选择或结果，但是如果我们想要两个以上呢？

有一种方法来让你的 `if…else` 连接你的额外的选择和结果——使用 `else if`。每一个额外的选择要求放到 `if() { ... }` 和 `else { ... }` 里——看看下面更多涉及到的例子，它们属于一个普通的天气预报的应用的一部分。

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100) }}

1. 这里我们有 HTML {{htmlelement("select")}} 元素让我们选择不同的天气，以及一个简单的段落。
2. 在 JavaScript 中，我们同时存储了对 {{htmlelement("select")}} 和 {{htmlelement("p")}} 的引用，并对 `<select>` 添加了一个事件监听器，因此，当它的值改变时，`setWeather()`函数被执行。
3. 当函数运行时，我们首先新建了一个 `choice` 变量去存储当前被选的 `<select>` 中的值。接着我们用条件判断语句根据 `choice` 的值选择性的展示段落中的文本。注意 `else if() {...}` 段中的条件是怎么被判断的，除了第一个，它是在 `if() {...}` 中被判断的。
4. 最后一个 `else {...}` 中的选择通常被叫做“最后招数” — 在所有的条件都不为 true 时其中的代码会被执行。在这个例子中，如果用户没有选择任何一个选项，它会将段落中的文本清空，例如当用户决定重新选择最开始出现的"--Make a choice--"选项时，就会有这样的效果。

> **备注：** 你可以 [在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-else-if.html) （也可以[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)。）

### 关于比较运算符

比较运算符是用来判断条件语句中的条件的。我们先回过头来看看[Basic math in JavaScript — numbers and operators](/zh-CN/Learn/JavaScript/First_steps/Math#Comparison_operators) 文章中的比较运算符。我们有如下选择：

- `===` 和 `!==` — 判断一个值是否严格等于，或不等于另一个。
- `<` 和 `>` — 判断一个值是否小于，或大于另一个。
- `<=` 和 `>=` — 判断一个值是否小于或等于，或者大于或等于另一个。

> **备注：** 如果你想复习这些内容，可以回顾之前链接上的材料。

我们想特别提到测试布尔值（true / false），和一个通用模式，你会频繁遇到它，任何不是 `false`, `undefined`, `null`, `0`, `NaN` 的值，或一个空字符串（''）在作为条件语句进行测试时实际返回 true，因此您可以简单地使用变量名称来测试它是否为真，甚至是否存在（即它不是未定义的）。例如：

```js
var cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
```

而且，回到我们以前关于孩子为自己的父母做家务的例子，你可以这样写：

```js
var shoppingDone = false;

if (shoppingDone) { // don't need to explicitly specify '=== true'
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

### 嵌套 if ... else

将另一个 if ... else 语句放在另一个中 - 嵌套它是完全可行的。例如，我们可以更新我们的天气预报应用程序，以显示更多的选择，具体取决于温度：

```js
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
  }
}
```

即使代码全部一起工作，每个 if ... else 语句完全独立于另一个。

### 逻辑运算符：&& , || 和 !

如果要测试多个条件，而不需要编写嵌套 if ... else 语句，逻辑运算符可以帮助您。当在条件下使用时，前两个执行以下操作：

- `&&` — 逻辑与; 使得并列两个或者更多的表达式成为可能，只有当这些表达式每一个都返回`true`时，整个表达式才会返回`true.`
- `||` — 逻辑或; 当两个或者更多表达式当中的任何一个返回 `true` 则整个表达式将会返回 `true`.
- ! — 逻辑非; 对一个布尔值取反，非 true 返回 false，非 false 返回 true.

举一个逻辑 && 的例子，刚才的那段代码片段可以写成下面这样：

```js
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
}
```

所以，只有当`choice === 'sunny'`并且`temperature < 86`都返回`true`时，第一个代码块才能运行。

让我们快速看一个 **||** 的例子：

```js
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}
```

最后一种类型的逻辑运算符， **逻辑非**`!` 运算符表示，可以用于对一个表达式取否。让我们把**非运算符**结合上一个例子里的**或表达式**看看：

```js
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}
```

在这一段代码中，如果**逻辑或**所在的语句返回 `true`，则**非运算符**会将其取否，于是整个表达式的返回值将会是`false`。

您可以在任何结构中随意合并很多个逻辑表达式。接下来的例子将会只在**或运算符**两边的语句同时返回 true 时才会执行代码，这也就意味着整个**与运算符**语句将会返回 true：

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}
```

在条件语句中运用**或逻辑运算符**最常见的错误是尝试声明变量后，仅检查该变量一次的情况下赋予很多个都会返回 true 的值，不同的值之间用 `||` (或) 运算符分隔。比如：

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

在这个例子里 `if(...)` 里的条件总为真，因为 7 (或者其它非零的数) 的值总是为真。这个条件实际意思是 "如果 x 等于 5, 或者 7 为真 — 它总是成立的". 这不是我们想要的逻辑，为了 让它正常工作你必须指定每个或**表达式**两边都是完整的检查：

```js
if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // run my code
}
```

## switch 语句

`if...else` 语句能够很好地实现条件代码，但是它们不是没有缺点。它们主要适用于您只有几个选择的情况，每个都需要相当数量的代码来运行，和/或 的条件很复杂的情况（例如多个逻辑运算符）。对于只想将变量设置一系列为特定值的选项或根据条件打印特定语句的情况，语法可能会很麻烦，特别是如果您有大量选择。

[`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) 语句在这里是您的朋友 - 他们以单个表达式/值作为输入，然后查看多个选项，直到找到与该值相匹配的选项，执行与之相关的代码。这里有一些伪代码，可以给你一点灵感：

```plain
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
```

这里我们得到：

1. 关键字 `switch`, 后跟一组括号。
2. 括号内的表达式或值。
3. 关键字 `case`, 后跟一个选项的表达式/值，后面跟一个冒号.
4. 如果选择与表达式匹配，则运行一些代码。
5. 一个 `break` 语句，分号结尾。如果先前的选择与表达式/值匹配，则浏览器在此停止执行代码块，并执行 switch 语句之后的代码。
6. 你可以添加任意的 case 选项（选项 3-5）.
7. 关键字 `default`, 后面跟随和 `case` 完全相同的代码模式 (选项 3–5), except that `default` 之后不需要再有选项，并且您不需要 `break` 语句，因为之后没有任何运行代码。如果之前没有选项匹配，则运行`default`选项。

> **备注：** `default` 部分不是必须的 - 如果表达式不可能存在未知值，则可以安全地省略它。如果有机会，您需要包括它来处理未知的情况。

### switch 语句示例

我们来看一个真实的例子 - 我们将重写天气预报应用程序，以改用 switch 语句：

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
  var choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
```

{{ EmbedLiveSample('switch 语句示例', '100%', 100) }}

> **备注：** 你可以 [在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-switch.html) （也可以[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)。）

## 三元运算符

在我们举一些例子之前，我们要介绍一下最后一句语法。[三元或条件运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)是一个语法的小点，用于测试一个条件，并返回一个值/表达，如果它是`true`，另一个是`false`-这种情况下是有用的，并且可以占用比`if...else`块较少的代码块。如果你只有两个通过`true`/ `false`条件选择。伪代码看起来像这样：

```plain
( condition ) ? run this code : run this code instead
```

所以我们来看一个简单的例子：

```js
var greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';
```

在这里我们有一个变量叫做`isBirthday`- 如果它是`true`，我们给客人一个生日快乐的消息; 如果不是，我们给她标准的每日问候。

### 三元运算符示例

你不需要用三元运算符设置变量值; 你也可以运行任何你喜欢的函数或代码行。以下实例显示了一个简单的主题选择器，其中该站点的样式应用了三元运算符。

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
```

{{ EmbedLiveSample('三元运算符示例', '100%', 300) }}

在这里，我们有一个 [`<select>`](/zh-CN/docs/Web/HTML/Element/select) 选择主题（黑色或白色）的元素，加上一个简单 [`<h1>`](/zh-CN/docs/Web/HTML/Element/h1) 的显示网站标题。我们也有一个函数叫做 `update()`，它将两种颜色作为参数（输入）。网站的背景颜色设置为第一个提供的颜色，其文本颜色设置为第二个提供的颜色。

最后，我们还有一个[onchange](/zh-CN/docs/Web/API/GlobalEventHandlers/onchange)事件监听器，用于运行一个包含三元运算符的函数。它以测试条件开始`select.value === 'black'`。如果这返回`true`，我们运行`update()`带有黑色和白色参数的函数，这意味着我们最终得到黑色的背景颜色和白色的文字颜色。如果返回`false`，我们运行`update()`带有白色和黑色参数的函数，这意味着站点颜色被反转。

> **备注：** 你可以 [在 GitHub 上找到这个例子](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-ternary.html) （也可以[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)。）

## 主动学习：一个简单的日历

在这个例子中，您将帮助我们完成一个简单的日历应用程序。在你的代码中：

- 一个 [`<select>`](/zh-CN/docs/Web/HTML/Element/select) 元素表示一个控件，提供一个选项菜单元素，允许用户在不同月份之间进行选择。
- `onchange` 事件处理器检测 `<select>` 菜单中选择的值何时更改。
- 一个叫做 `createCalendar()` 的函数，它用来绘制日历并在 [`<h1>`](/zh-CN/docs/Web/HTML/Element/h1) 元素中显示正确的月份。

我们需要你在`onchange`处理函数中写一个条件语句，就在`// ADD CONDITIONAL HERE`任务的下面。这应该：

1. 查看所选月份（存储在`choice`变量中，这将是`<select>`值更改后的元素值，例如“1 月”）。
2. 设置一个被调用`days`为等于所选月份天数的变量。为此，您必须查看一年中每个月的天数。为了这个例子的目的，你可以忽略闰年。

提示：

- 建议您使用逻辑或将多个月组合成一个单一条件; 他们中的许多人共享相同的天数。
- 考虑最常用的天数，并将其用作默认值。

如果您犯了错误，您可以随时使用“Reset”按钮重置该示例。如果真的卡住了，请按“Show solution”查看解决方案。

```html hidden
<div class="output" style="height: 500px;overflow: auto;">
  <label for="month">Select month: </label>
  <select id="month">
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>

<hr>

<textarea id="code" class="playable-code" style="height: 500px;">
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  // ADD CONDITIONAL HERE

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
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
  background-color: #4A2DB6;
  color: white;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var select = document.querySelector(\'select\');\nvar list = document.querySelector(\'ul\');\nvar h1 = document.querySelector(\'h1\');\n\nselect.onchange = function() {\n  var choice = select.value;\n  var days = 31;\n  if(choice === \'February\') {\n    days = 28;\n  } else if(choice === \'April\' || choice === \'June\' || choice === \'September\'|| choice === \'November\') {\n    days = 30;\n  }\n\n  createCalendar(days, choice);\n}\n\nfunction createCalendar(days, choice) {\n  list.innerHTML = \'\';\n  h1.textContent = choice;\n for(var i = 1; i <= days; i++) {\n    var listItem = document.createElement(\'li\');\n    listItem.textContent = i;\n    list.appendChild(listItem);\n  }\n }\n\ncreateCalendar(31,\'January\');';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
```

{{ EmbedLiveSample('主动学习：一个简单的日历', '100%', 1110) }}

## 主动学习：更多颜色选择！

在这个例子中，您将要采取我们前面看到的三元运算符示例，并将三元运算符转换为一个 switch 语句，这将允许我们对简单的网站应用更多的选择。看看 {{htmlelement("select")}}——这次你会看到它不是两个主题选项，而是五个。你需要在 `// ADD SWITCH STATEMENT` 注释下面添加一个 switch 语句：

- 它应该接受`choice`变量作为其输入表达式。
- 对于每种情况，选择应该等于可以选择的可能值之一，即白色，黑色，紫色，黄色或迷幻色。
- 对于每种情况，应运行`update()`函数，并传递两个颜色值，第一个颜色值为背景颜色，第二个颜色值为文本颜色。请记住，颜色值是字符串，因此需要用引号括起来。

如果您犯了错误，您可以随时使用“Reset”按钮重置该示例。如果真的卡住了，请按“Show solution”查看解决方案。

```html hidden
<div class="output" style="height: 300px;">
  <label for="theme">Select theme: </label>
  <select id="theme">
    <option value="white">White</option>
    <option value="black">Black</option>
    <option value="purple">Purple</option>
    <option value="yellow">Yellow</option>
    <option value="psychedelic">Psychedelic</option>
  </select>

  <h1>This is my website</h1>
</div>

<hr>

<textarea id="code" class="playable-code" style="height: 450px;">
var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var select = document.querySelector(\'select\');\nvar html = document.querySelector(\'.output\');\n\nselect.onchange = function() {\n  var choice = select.value;\n\n  switch(choice) {\n    case \'black\':\n      update(\'black\',\'white\');\n      break;\n    case \'white\':\n      update(\'white\',\'black\');\n      break;\n    case \'purple\':\n      update(\'purple\',\'white\');\n      break;\n    case \'yellow\':\n      update(\'yellow\',\'darkgray\');\n      break;\n    case \'psychedelic\':\n      update(\'lime\',\'purple\');\n      break;\n  }\n}\n\nfunction update(bgColor, textColor) {\n  html.style.backgroundColor = bgColor;\n  html.style.color = textColor;\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
```

{{ EmbedLiveSample('主动学习：更多颜色选择！', '100%', 850) }}

## 测试你的技能！

你已经阅读到了本篇文章的末尾，但还能记清楚最重要的部分吗？你可以做一些深入的测试，来验证你是否在进行下一步学习之前，记住了这些知识，请参阅[测试你的技能：条件语句](/zh-CN/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals)

## 结论

这就是现在您真正需要了解的 JavaScript 中的条件结构！我相信你会理解这些概念，并轻松地通过这些例子; 如果有什么不明白的，请随时阅读文章，或者[联系我们](/zh-CN/Learn#Contact_us)寻求帮助。

## 参见

- [比较运算符](/zh-CN/Learn/JavaScript/First_steps/Math#Comparison_operators)
- [条件声明详细](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Conditional_statements)
- [if...else 参考](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [条件（三元）运算符引用](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
