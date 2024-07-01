---
title: 在代碼中做出決定 - 條件
slug: Learn/JavaScript/Building_blocks/conditionals
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

在任何編程語言中，代碼都需要根據不同的輸入做出決策並相應地執行操作。 例如，在遊戲中，如果玩家的生命數量為 0，則遊戲結束。 在天氣應用程序中，如果在早上查看，則顯示日出圖形; 如果是夜晚，則顯示星星和月亮。 在本文中，我們將探討條件結構如何在 JavaScript 中工作。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a basic understanding of HTML and CSS,
        <a href="/zh-TW/docs/Learn/JavaScript/First_steps"
          >JavaScript first steps</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To understand how to use conditional structures in JavaScript.</td>
    </tr>
  </tbody>
</table>

## 你可以擁有一個條件..!

從小到大，人們(和其它動物)作出決定的時間會影響到他們的生活 ("我應該吃一個或兩個餅乾?") ("我應該留在我的家鄉並在我父親的農場工作還是應該要到美國研讀天體物理學?")

條件敘述句（Conditional statements）讓我們能將這些決定的過程在 Javascript 表示出來，從一定得做出的選擇（例如：「吃一個或兩個餅乾」），到這些選擇的結果（或許「吃一個餅乾」會出現「還是會餓」這種結果，而「吃兩個餅乾」的結果會是「吃飽了，但因為吃了全部餅乾而被媽媽罵」）。

![](cookie-choice-small.png)

## if ... else 敘述句

讓我們來看 Javascript 中最常見的條件敘述句 [`if ... else` statement](/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else).

### 基本的 if ... else 語法

最基本的 `if...else` 語法看起來像以下 {{glossary("虛擬碼")}}:

```plain
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

這邊我們可以得知基礎的架構：

1. 關鍵字 `if` 和後頭的括號。
2. 想測試的條件放在括號中（通常像是「這個值是否大於其他值」或是「這個值是否存在」等等）。這裡的條件會使用先前提過的 [比較運算子](/zh-TW/Learn/JavaScript/First_steps/Math#Comparison_operators)（[comparison operators](/zh-TW/Learn/JavaScript/First_steps/Math#Comparison_operators)），並且最後會回傳 `true` 或是 `false`。
3. 第一組大括號，在大括號裡面有一些程式碼 — 內容可以是任何我們所需要執行的程式碼，並且只有在條件句回傳 `true` 才會執行。
4. 關鍵字 `else`。
5. 另一組大括號，在大括號中我們一樣是放置所需的程式碼，並只有在條件句回傳 `false` 才會執行。

這個程式碼的架構很容易理解 — 「如果條件回傳 `true` ，則執行程式 A，否則執行程式 B」。

值得注意的是，`else` 和第二組大括號並不是必要的。如以下範例也能夠執行：

```plain
if (condition) {
  code to run if condition is true
}

run some other code
```

然而，在這邊有一點要注意：在這個例子中的第二個區塊並沒有被條件式控制，也就是說無論條件式回傳的是 `true` 或是 `false`，它都會執行。這並不一定是件壞事，但它可能不會是你要的，通常你可能是想要執行程式碼的一個區塊或是另一塊，而不是兩個都執行。

最後一點，你可能有時候會看到 `if...else` 敘述是不加大括弧的：

```plain
if (condition) code to run if condition is true
else run some other code instead
```

這當然也是有效的程式碼，但不太建議這樣用。使用大括弧能夠很清楚地看到程式區塊、縮排，也能夠擁有多行程式碼，對於程式的可讀性會提高許多。

### A real example

To understand this syntax better, let's consider a real example. Imagine a child being asked for help with a chore by their mother or father. The parent might say "Hey sweetheart, if you help me by going and doing the shopping, I'll give you some extra allowance so you can afford that toy you wanted." In JavaScript, we could represent this like so:

```js
var shoppingDone = false;

if (shoppingDone === true) {
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

This code as shown will always result in the `shoppingDone` variable returning `false`, meaning disappointment for our poor child. It'd be up to us to provide a mechanism for the parent to set the `shoppingDone` variable to `true` if the child did the shopping.

> **備註：** You can see a more [complete version of this example on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/allowance-updater.html) (also see it [running live](http://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

The last example provided us with two choices, or outcomes — but what if we want more than two?

There is a way to chain on extra choices/outcomes to your `if...else` — using `else if`. Each extra choice requires an additional block to put in between `if() { ... }` and `else { ... }` — check out the following more involved example, which could be part of a simple weather forecast application:

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
var select = document.querySelector("select");
var para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

1. Here we've got an HTML {{htmlelement("select")}} element allowing us to make different weather choices, and a simple paragraph.
2. In the JavaScript, we are storing a reference to both the {{htmlelement("select")}} and {{htmlelement("p")}} elements, and adding an event listener to the `<select>` element so that when its value is changed, the `setWeather()` function is run.
3. When this function is run, we first set a variable called `choice` to the current value selected in the `<select>` element. We then use a conditional statement to show different text inside the paragraph depending on what the value of `choice` is. Notice how all the conditions are tested in `else if() {...}` blocks, except for the first one, which is tested in an `if() {...} block`.
4. The very last choice, inside the `else {...}` block, is basically a "last resort" option — the code inside it will be run if none of the conditions are `true`. In this case, it serves to empty the text out of the paragraph if nothing is selected, for example if a user decides to re-select the "--Make a choice--" placeholder option shown at the beginning.

> **備註：** You can also [find this example on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-else-if.html) ([see it running live](http://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) on there also.)

### A note on comparison operators

Comparison operators are used to test the conditions inside our conditional statements. We first looked at comparison operators back in our [Basic math in JavaScript — numbers and operators](/zh-TW/Learn/JavaScript/First_steps/Math#Comparison_operators) article. Our choices are:

- `===` and `!==` — test if one value is identical to, or not identical to, another.
- `<` and `>` — test if one value is less than or greater than another.
- `<=` and `>=` — test if one value is less than or equal to, or greater than or equal to, another.

> **備註：** Review the material at the previous link if you want to refresh your memories on these.

We wanted to make a special mention of testing boolean (`true`/`false`) values, and a common pattern you'll come across again and again. Any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`) actually returns `true` when tested as a conditional statement, therefore you can simply use a variable name on its own to test whether it is `true`, or even that it exists (i.e. it is not undefined.) So for example:

```js
var cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

And, returning to our previous example about the child doing a chore for their parent, you could write it like this:

```js
var shoppingDone = false;

if (shoppingDone) {
  // don't need to explicitly specify '=== true'
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

### Nesting if ... else

It is perfectly OK to put one `if...else` statement inside another one — to nest them. For example, we could update our weather forecast application to show a further set of choices depending on what the temperature is:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent =
      "It is " +
      temperature +
      " degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.";
  } else if (temperature >= 86) {
    para.textContent =
      "It is " +
      temperature +
      " degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.";
  }
}
```

Even though the code all works together, each `if...else` statement works completely independently of the other one.

### Logical operators: AND, OR and NOT

If you want to test multiple conditions without writing nested `if...else` statements, [logical operators](/zh-TW/docs/Web/JavaScript/Reference/Operators/Logical_Operators) can help you. When used in conditions, the first two do the following:

- `&&` — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to `true` for the whole expression to return `true`.
- `||` — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to `true` for the whole expression to return `true`.

To give you an AND example, the previous example snippet can be rewritten to this:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent =
    "It is " +
    temperature +
    " degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.";
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent =
    "It is " +
    temperature +
    " degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.";
}
```

So for example, the first code block will only be run if `choice === 'sunny'` _and_ `temperature < 86` return `true`.

Let's look at a quick OR example:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

The last type of logical operator, NOT, expressed by the `!` operator, can be used to negate an expression. Let's combine it with OR in the above example:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In this snippet, if the OR statement returns `true`, the NOT operator will negate it so that the overall expression returns `false`.

You can combine as many logical statements together as you want, in whatever structure. The following example executes the code inside only if both OR statements return true, meaning that the overall AND statement will return true:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

A common mistake when using the logical OR operator in conditional statements is to try to state the variable whose value you are checking once, and then give a list of values it could be to return true, separated by `||` (OR) operators. For example:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In this case the condition inside `if(...)` will always evaluate to true since 7 (or any other non-zero value) always evaluates to true. This condition is actually saying "if x equals 5, or 7 is true — which it always is". This is logically not what we want! To make this work you've got to specify a complete test either side of each OR operator:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch statements

`if...else` statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (e.g. multiple logical operators). For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

[`switch` statements](/zh-TW/docs/Web/JavaScript/Reference/Statements/switch) are your friend here — they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:

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

Here we've got:

1. The keyword `switch`, followed by a set of parentheses.
2. An expression or value inside the parentheses.
3. The keyword `case`, followed by a choice that the expression/value could be, followed by a colon.
4. Some code to run if the choice matches the expression.
5. A `break` statement, followed by a semi-colon. If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the switch statement.
6. As many other cases (bullets 3–5) as you like.
7. The keyword `default`, followed by exactly the same code pattern as one of the cases (bullets 3–5), except that `default` does not have a choice after it, and you don't need to `break` statement as there is nothing to run after this in the block anyway. This is the default option that runs if none of the choices match.

> **備註：** You don't have to include the `default` section — you can safely omit it if there is no chance that the expression could end up equaling an unknown value. If there is a chance of this however, you need to include it to handle unknown cases.

### A switch example

Let's have a look at a real example — we'll rewrite our weather forecast application to use a switch statement instead:

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
var select = document.querySelector("select");
var para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  var choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('A_switch_example', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

> **備註：** You can also [find this example on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-switch.html) (see it [running live](http://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) on there also.)

## 三元運算符

There is one final bit of syntax we want to introduce you to, before we get you to play with some examples. The [ternary or conditional operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is a small bit of syntax that tests a condition and returns one value/expression if it is `true`, and another if it is `false` — this can be useful in some situations, and can take up a lot less code than an `if...else` block if you simply have two choices that are chosen between via a `true`/`false` condition. The pseudocode looks like this:

```plain
( condition ) ? run this code : run this code instead
```

So let's look at a simple example:

```js
var greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Here we have a variable called `isBirthday` — if this is `true`, we give our guest a happy birthday message; if not, we give her the standard daily greeting.

### Ternary operator example

You don't just have to set variable values with the ternary operator; you can also run functions, or lines of code — anything you like. The following live example shows a simple theme chooser where the styling for the site is applied using a ternary operator.

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
var select = document.querySelector("select");
var html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  select.value === "black"
    ? update("black", "white")
    : update("white", "black");
};
```

{{ EmbedLiveSample('Ternary_operator_example', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

Here we've got a {{htmlelement('select')}} element to choose a theme (black or white), plus a simple {{htmlelement('h1')}} to display a website title. We also have a function called `update()`, which takes two colors as parameters (inputs). The website's background color is set to the first provided color, and its text color is set to the second provided color.

Finally, we've also got an [onchange](/zh-TW/docs/Web/API/GlobalEventHandlers/onchange) event listener that serves to run a function containing a ternary operator. It starts with a test condition — `select.value === 'black'`. If this returns `true`, we run the `update()` function with parameters of black and white, meaning that we end up with background color of black and text color of white. If it returns `false`, we run the `update()` function with parameters of white and black, meaning that the site color are inverted.

> **備註：** You can also [find this example on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-ternary.html) (see it [running live](http://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) on there also.)

## Active learning: A simple calendar

In this example you are going to help us finish a simple calendar application. In the code you've got:

- A {{htmlelement("select")}} element to allow the user to choose between different months.
- An `onchange` event handler to detect when the value selected in the `<select>` menu is changed.
- A function called `createCalendar()` that draws the calendar and displays the correct month in the {{htmlelement("h1")}} element.

We need you to write a conditional statement inside the `onchange` handler function, just below the `// ADD CONDITIONAL HERE` comment. It should:

1. Look at the selected month (stored in the `choice` variable. This will be the `<select>` element value after the value changes, so "January" for example.)
2. Set a variable called `days` to be equal to the number of days in the selected month. To do this you'll have to look up the number of days in each month of the year. You can ignore leap years for the purposes of this example.

Hints:

- You are advised to use logical OR to group multiple months together into a single condition; many of them share the same number of days.
- Think about which number of days is the most common, and use that as a default value.

If you make a mistake, you can always reset the example with the "Reset" button. If you get really stuck, press "Show solution" to see a solution.

```html hidden
<h2>Live output</h2>
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

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
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
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var select = document.querySelector('select');\nvar list = document.querySelector('ul');\nvar h1 = document.querySelector('h1');\n\nselect.onchange = function() {\n var choice = select.value;\n var days = 31;\n if(choice === 'February') {\n days = 28;\n } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {\n days = 30;\n }\n\n createCalendar(days, choice);\n}\n\nfunction createCalendar(days, choice) {\n list.innerHTML = '';\n h1.textContent = choice;\n for(var i = 1; i <= days; i++) {\n var listItem = document.createElement('li');\n listItem.textContent = i;\n list.appendChild(listItem);\n }\n }\n\ncreateCalendar(31,'January');";
var solutionEntry = jsSolution;

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
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
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

{{ EmbedLiveSample('Active learning: A simple calendar', '100%', 1110) }}

## Active learning: More color choices

In this example you are going to take the ternary operator example we saw earlier and convert the ternary operator into a switch statement that will allow us to apply more choices to the simple website. Look at the {{htmlelement("select")}} — this time you'll see that it has not two theme options, but five. You need to add a switch statement just underneath the `// ADD SWITCH STATEMENT` comment:

- It should accept the `choice` variable as its input expression.
- For each case, the choice should equal one of the possible values that can be selected, i.e. white, black, purple, yellow, or psychedelic.
- For each case, the `update()` function should be run, and be passed two color values, the first one for the background color, and the second one for the text color. Remember that color values are strings, so need to be wrapped in quotes.

If you make a mistake, you can always reset the example with the "Reset" button. If you get really stuck, press "Show solution" to see a solution.

```html hidden
<h2>Live output</h2>
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

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 450px;width: 95%">
var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var select = document.querySelector('select');\nvar html = document.querySelector('.output');\n\nselect.onchange = function() {\n var choice = select.value;\n\n switch(choice) {\n case 'black':\n update('black','white');\n break;\n case 'white':\n update('white','black');\n break;\n case 'purple':\n update('purple','white');\n break;\n case 'yellow':\n update('yellow','darkgray');\n break;\n case 'psychedelic':\n update('lime','purple');\n break;\n }\n}\n\nfunction update(bgColor, textColor) {\n html.style.backgroundColor = bgColor;\n html.style.color = textColor;\n}";
var solutionEntry = jsSolution;

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
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
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

{{ EmbedLiveSample('Active learning: More color choices', '100%', 950) }}

## Conclusion

And that's all you really need to know about conditional structures in JavaScript right now! I'm sure you'll have understood these concepts and worked through the examples with ease; if there is anything you didn't understand, feel free to read through the article again, or [contact us](/zh-TW/Learn#Contact_us) to ask for help.

## See also

- [Comparison operators](/zh-TW/Learn/JavaScript/First_steps/Math#Comparison_operators)
- [Conditional statements in detail](/zh-TW/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Conditional_statements)
- [if...else reference](/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)
- [Conditional (ternary) operator reference](/zh-TW/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
