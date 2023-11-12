---
title: 循環代碼
slug: Learn/JavaScript/Building_blocks/Looping_code
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

編程語言對於快速完成重複性任務非常有用，從多個基本計算到幾乎任何其他需要完成大量類似工作的情況。 在這裡，我們將看看 JavaScript 中可用於處理此類需求的循環結構。

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
      <td>To understand how to use loops in JavaScript.</td>
    </tr>
  </tbody>
</table>

## 保持循環

循環，循環，循環。 除了與受歡迎的早餐穀物，過山車和音樂作品有關聯，它們還是編程中的關鍵概念。 編程循環都是一遍又一遍地做同一件事-在編程方面被稱為迭代。

讓我們考慮一個農民的例子，他要確保他有足夠的食物來養家糊口。 他可能使用以下循環來實現此目的：

![](loop_js-02-farm.png)

循環通常具有以下一項或多項功能：

- 一個用一定值初始化的計數器-這是循環的起點（上面的「開始：我沒有食物」）。
- 一種條件，它是對/錯測試，用於確定循環是繼續運行還是停止（通常在計數器達到某個值時）。 「我是否有足夠的食物？」對此進行了說明。 以上。 假設他需要 10 份食物來養家糊口的話。
- 一個迭代器，通常在每個連續循環上使計數器增加一小部分，直到條件不再成立為止。 上面我們沒有明確說明這一點，但是我們可以考慮一下農民每小時可以收集 2 份食物。 每小時之後，他收集的食物數量增加了 2，然後他檢查是否有足夠的食物。 如果他已達到 10 個部分（此時條件不再成立，則循環退出），他可以停止收集並回家。

In {{glossary("pseudocode")}}, this would look something like the following:

```plain
loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop;
    // We have enough food; let's go home
  } else {
    food += 2; // Spend an hour collecting 2 more food
    // loop will then run again
  }
}
```

因此，所需的食物數量設置為 10，而農民當前擁有的食物數量設置為 0。在循環的每次迭代中，我們檢查農民擁有的食物數量是否等於他所需的數量。 如果是這樣，我們可以退出循環。 如果不是這樣，農民將花一個小時收集兩份食物，然後循環再次運行。

### 不用麻煩

在這一點上，您可能了解了循環背後的高級概念，但您可能在想：「好，很好，但這如何幫助我編寫更好的 JavaScript 代碼？」 如前所述，循環與一次又一次地執行同一操作有關，這對於快速完成重複性任務非常有用。

通常，代碼在每次循環的每次迭代中都會略有不同，這意味著您可以完成全部相似但略有不同的任務，一般情況，如果您要執行許多不同的計算，則需要不斷地執行不同的式子，而不能一遍又一遍重複！

讓我們看一個示例，以完美地說明為什麼循環是如此便利。 Let's say we wanted to draw 100 random circles on a {{htmlelement("canvas")}} element (press the _Update_ button to run the example again and again to see different random sets):

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

{{ EmbedLiveSample('不用麻煩', '100%', 400) }}

您現在不必了解所有代碼，但讓我們看一下實際繪製 100 個圓圈的代碼部分：

```js
for (var i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

- `代碼前面定義的random（），返回0到x-1之間的整數。`
- `WIDTH和HEIGHT是內部瀏覽器窗口的寬度和高度。`

您應該了解基本概念-我們正在使用一個循環來運行此代碼的 100 次迭代，每個迭代在頁面上的隨機位置繪製一個圓圈。 無論我們繪製 100 個圓，1000 個還是 10,000 個，所需的代碼量都是相同的。 只需更改一個數字。

如果我們不在此處使用循環，則必須為每個要繪製的圓重複以下代碼：

```js
ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```

這將變得很無聊，並且很難很快維護。 循環確實是最好的。

## 循環的規範

讓我們開始探索一些特定的循環結構。 第一個是 for 循環，您將在大多數時候使用它，它具有以下語法：

```js
for (initializer; exit - condition; final - expression) {
  // code to run
}
```

這裡我們有：

1. 關鍵字「 for」，即跟隨其後的一些括號。
2. 在括號內，我們有三個項目，以 ; 分隔：

   1. 初始化程序-通常是一個設置為數字的變量，該變量將遞增以計算循環運行的次數。 有時也稱為計數器變量。
   2. 退出條件-如前所述，它定義了循環何時應停止循環。 通常，這是一個具有比較運算符的表達式，該測試用於檢驗是否滿足退出條件。
   3. 最終表達式—每當循環經過完整的迭代時，總是對它進行評估（或運行）。 它通常用於遞增（或在某些情況下遞減）計數器變量，以使其更接近退出條件值。

3. 一些花括號包含一個代碼塊-每次循環迭代時都將運行此代碼。

讓我們看一個真實的例子，以便我們可以更清楚地看到它們的作用。

```js
var cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
var info = "My cats are called ";
var para = document.querySelector("p");

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ", ";
}

para.textContent = info;
```

這為我們提供了以下輸出：

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

{{ EmbedLiveSample('不用麻煩', '100%', 60, "", "", "hide-codepen-jsfiddle") }}

> **備註：** You can find this [example code on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for.html) too (also [see it running live](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for.html)).

這顯示了一個循環，該循環用於遍歷數組中的項目並對其進行處理-這是 JavaScript 中非常常見的模式。 這裡：

1. 迭代器 i 從 0 開始（變量 i = 0）。
2. 它被告知運行，直到它不再小於 cats 數組的長度為止。 這很重要,退出條件顯示了循環仍將運行的條件。 因此，在這種情況下，儘管 i \<cats.length 仍然為 true，循環仍將運行。
3. 在循環內部，我們將當前循環項（cats \[i]是 cats \[無論 i 當時是什麼]）與一個逗號和一個空格連接到 info 變量的末尾。 所以：

   1. 在第一次運行中，i = 0，因此 cats \[0] +'，'將連接到 info（「 Bill，」）上。
   2. 在第二次運行中，i = 1，因此 cats \[1] +'，'將連接到 info（「 Jeff，」）上
   3. 等等。每次循環運行後，將 1 加到 i（i ++），然後該過程將再次開始。

4. 當 i 等於 cats.length 時，循環將停止，瀏覽器將繼續循環下方的下一段代碼。

> **備註：** We have made the exit condition `i < cats.length`, not `i <= cats.length`, because computers count from 0, not 1 — we are starting `i` at `0`, and going up to `i = 4` (the index of the last array item). `cats.length` returns 5, as there are 5 items in the array, but we don't want to get up to `i = 5`, as that would return `undefined` for the last item (there is no array item with an index of 5). So therefore we want to go up to 1 less than `cats.length` (`i <`), not the same as `cats.length` (`i <=`).

> **備註：** A common mistake with exit conditions is making them use "equal to" (`===`) rather than say "less than or equal to" (`<=`). If we wanted to run our loop up to `i = 5`, the exit condition would need to be `i <= cats.length`. If we set it to `i === cats.length`, the loop would not run at all because `i` is not equal to `5` on the first loop iteration, so it would stop immediately.

我們剩下的一個小問題是最終輸出語句的格式不太正確：

> My cats are called Bill, Jeff, Pete, Biggles, Jasmin,

理想情況下，我們希望在最終循環迭代中更改串聯，以使句子的末尾沒有逗號。 好吧，沒問題-我們可以很高興地在 for 循環中插入一個條件來處理這種特殊情況：

```js
for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }
}
```

> **備註：** You can find this [example code on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for-improved.html) too (also [see it running live](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html)).

> **警告：** With for — as with all loops — you must make sure that the initializer is iterated so that it eventually reaches the exit condition. If not, the loop will go on forever, and either the browser will force it to stop, or it will crash. This is called an **infinite loop**.

## 中斷退出循環

如果要在所有迭代完成之前退出循環，可以使用 break 語句。 在查看 switch 語句時，我們已經在上一篇文章中遇到了這一問題—當在 switch 語句中遇到與輸入表達式匹配的 case 時，break 語句立即退出 switch 語句並移至其後的代碼上。

循環也是如此，-break 語句將立即退出循環，並使瀏覽器繼續執行緊隨其後的任何代碼。

假設我們要搜索一系列聯繫人和電話號碼，然後僅返回我們要查找的號碼？ 首先，提供一些簡單的 HTML-文本 {{htmlelement("input")}} 允許我們輸入要搜索的名稱，{{htmlelement("button")}} 元素以提交搜索，以及 {{htmlelement ("p")}} 元素以在以下位置顯示結果：

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Now on to the JavaScript:

```js
var contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
var para = document.querySelector("p");
var input = document.querySelector("input");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var searchName = input.value;
  input.value = "";
  input.focus();
  for (var i = 0; i < contacts.length; i++) {
    var splitContact = contacts[i].split(":");
    if (splitContact[0] === searchName) {
      para.textContent =
        splitContact[0] + "'s number is " + splitContact[1] + ".";
      break;
    } else {
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
      var contacts = [
        "Chris:2232322",
        "Sarah:3453456",
        "Bill:7654322",
        "Mary:9998769",
        "Dianne:9384975",
      ];
      var para = document.querySelector("p");
      var input = document.querySelector("input");
      var btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        var searchName = input.value;
        input.value = "";
        input.focus();
        for (var i = 0; i < contacts.length; i++) {
          var splitContact = contacts[i].split(":");
          if (splitContact[0] === searchName) {
            para.textContent =
              splitContact[0] + "'s number is " + splitContact[1] + ".";
            break;
          } else if (i === contacts.length - 1)
            para.textContent = "Contact not found.";
        }
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('中斷退出循環', '100%', 100) }}

1. 首先，我們有一些變量定義-我們有一個聯繫信息陣列，每個項目都是一個字符串，其中包含用冒號分隔的姓名和電話號碼。
2. 接下來，我們將事件監聽器附加到按鈕（btn），以便在按下按鈕時，將運行一些代碼來執行搜索並返回結果。
3. 我們將輸入到文本輸入中的值存儲在一個名為 searchName 的變量中，然後清空文本輸入並再次對其進行聚焦，以準備進行下一次搜索。
4. 現在到有趣的部分，for 循環：

   1. 我們從 0 開始啟動計數器，運行循環直到計數器不再小於 contact.length，然後在每次循環之後將 i 遞增 1。
   2. 在循環內部，我們首先將當前觸點（contacts \[i]）分割為冒號字符，並將得到的兩個值存儲在名為 splitContact 的數組中。
   3. 然後，我們使用條件語句來測試 splitContact \[0]（聯繫人的姓名）是否等於輸入的 searchName。 如果是這樣，我們在段落中輸入一個字符串以報告聯繫人的電話號碼，然後使用 break 結束循環。

5. 在（contacts.length-1）迭代之後，如果聯繫人姓名與輸入的搜索不匹配，則將段落文本設置為「找不到聯繫人。」，然後循環繼續進行迭代。

> **備註：** You can view the [full source code on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/contact-search.html) too (also [see it running live](http://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Skipping iterations with continue

The [continue](/zh-TW/docs/Web/JavaScript/Reference/Statements/continue) statement works in a similar manner to `break`, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop. Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers).

The HTML is basically the same as the last example — a simple text input, and a paragraph for output. The JavaScript is mostly the same too, although the loop itself is a bit different:

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

{{ EmbedLiveSample('Skipping iterations with continue', '100%', 100) }}

1. In this case, the input should be a number (`num`). The `for` loop is given a counter starting at 1 (as we are not interested in 0 in this case), an exit condition that says the loop will stop when the counter becomes bigger than the input `num`, and an iterator that adds 1 to the counter each time.
2. Inside the loop, we find the square root of each number using [Math.sqrt(i)](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), then check whether the square root is an integer by testing whether it is the same as itself when it has been rounded down to the nearest integer (this is what [Math.floor()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) does to the number it is passed).
3. If the square root and the rounded down square root do not equal one another (`!==`), it means that the square root is not an integer, so we are not interested in it. In such a case, we use the `continue` statement to skip on to the next loop iteration without recording the number anywhere.
4. If the square root IS an integer, we skip past the if block entirely so the `continue` statement is not executed; instead, we concatenate the current `i` value plus a space on to the end of the paragraph content.

> **備註：** You can view the [full source code on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/integer-squares.html) too (also [see it running live](http://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while and do ... while

`for` is not the only type of loop available in JavaScript. There are actually many others and, while you don't need to understand all of these now, it is worth having a look at the structure of a couple of others so that you can recognize the same features at work in a slightly different way.

First, let's have a look at the [while](/zh-TW/docs/Web/JavaScript/Reference/Statements/while) loop. This loop's syntax looks like so:

```plain
initializer
while (exit-condition) {
  // code to run

  final-expression
}
```

This works in a very similar way to the for loop, except that the initializer variable is set before the loop, and the final-expression is included inside the loop after the code to run — rather than these two items being included inside the parentheses. The exit-condition is included inside the parentheses, which are preceded by the `while` keyword rather than `for`.

The same three items are still present, and they are still defined in the same order as they are in the for loop — this makes sense, as you still have to have an initializer defined before you can check whether it has reached the exit-condition; the final-condition is then run after the code inside the loop has run (an iteration has been completed), which will only happen if the exit-condition has still not been reached.

Let's have a look again at our cats list example, but rewritten to use a while loop:

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

> **備註：** This still works just the same as expected — have a look at it [running live on GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (also view the [full source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/while.html)).

The [do...while](/zh-TW/docs/Web/JavaScript/Reference/Statements/do...while) loop is very similar, but provides a variation on the while structure:

```plain
initializer
do {
  // code to run

  final-expression
} while (exit-condition)
```

In this case, the initializer again comes first, before the loop starts. The `do` keyword directly precedes the curly braces containing the code to run and the final-expression.

The differentiator here is that the exit-condition comes after everything else, wrapped in parentheses and preceded by a `while` keyword. In a `do...while` loop, the code inside the curly braces is always run once before the check is made to see if it should be executed again (in while and for, the check comes first, so the code might never be executed).

Let's rewrite our cat listing example again to use a `do...while` loop:

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

> **備註：** Again, this works just the same as expected — have a look at it [running live on GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (also view the [full source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/do-while.html)).

> **警告：** With while and do...while — as with all loops — you must make sure that the initializer is iterated so that it eventually reaches the exit condition. If not, the loop will go on forever, and either the browser will force it to stop, or it will crash. This is called an **infinite loop**.

## Active learning: Launch countdown

In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blast off. Specifically, we want you to:

- Loop from 10 down to 0. We've provided you with an initializer — `var i = 10;`.
- For each iteration, create a new paragraph and append it to the output `<div>`, which we've selected using `var output = document.querySelector('.output');`. In comments, we've provided you with three code lines that need to be used somewhere inside the loop:

  - `var para = document.createElement('p');` — creates a new paragraph.
  - `output.appendChild(para);` — appends the paragraph to the output `<div>`.
  - `para.textContent =` — makes the text inside the paragraph equal to whatever you put on the right hand side, after the equals sign.

- Different iteration numbers require different text to be put in the paragraph for that iteration (you'll need a conditional statement and multiple `para.textContent =` lines):

  - If the number is 10, print "Countdown 10" to the paragraph.
  - If the number is 0, print "Blast off!" to the paragraph.
  - For any other number, print just the number to the paragraph.

- Remember to include an iterator! However, in this example we are counting down after each iteration, not up, so you **don't** want `i++` — how do you iterate downwards?

If you make a mistake, you can always reset the example with the "Reset" button. If you get really stuck, press "Show solution" to see a solution.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 410px;overflow: auto;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 300px;width: 95%">
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
  "var output = document.querySelector('.output');\noutput.innerHTML = '';\n\nvar i = 10;\n\nwhile(i >= 0) {\n var para = document.createElement('p');\n if(i === 10) {\n para.textContent = 'Countdown ' + i;\n } else if(i === 0) {\n  para.textContent = 'Blast off!';\n } else {\n para.textContent = i;\n }\n\n output.appendChild(para);\n\n i--;\n}";
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

{{ EmbedLiveSample('Active learning: Launch countdown', '100%', 880) }}

## Active learning: Filling in a guest list

In this exercise, we want you to take a list of names stored in an array, and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

Specifically, we want you to:

- Write a loop that will iterate from 0 to the length of the `people` array. You'll need to start with an initializer of `var i = 0;`, but what exit condition do you need?
- During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:

  - If it is, concatenate the array item to the end of the `refused` paragraph's `textContent`, followed by a comma and a space.
  - If it isn't, concatenate the array item to the end of the `admitted` paragraph's `textContent`, followed by a comma and a space.

We've already provided you with:

- `var i = 0;` — Your initializer.
- `refused.textContent +=` — the beginnings of a line that will concatenate something on to the end of `refused.textContent`.
- `admitted.textContent +=` — the beginnings of a line that will concatenate something on to the end of `admitted.textContent`.

Extra bonus question — after completing the above tasks successfully, you will be left with two lists of names, separated by commas, but they will be untidy — there will be a comma at the end of each one. Can you work out how to write lines that slice the last comma off in each case, and add a full stop to the end? Have a look at the [Useful string methods](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods) article for help.

If you make a mistake, you can always reset the example with the "Reset" button. If you get really stuck, press "Show solution" to see a solution.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit:</p>
  <p class="refused">Refuse:</p>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
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
  "var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];\n\nvar admitted = document.querySelector('.admitted');\nvar refused = document.querySelector('.refused');\n\nadmitted.textContent = 'Admit: ';\nrefused.textContent = 'Refuse: '\nvar i = 0;\n\ndo {\n if(people[i] === 'Phil' || people[i] === 'Lola') {\n refused.textContent += people[i] + ', ';\n } else {\n admitted.textContent += people[i] + ', ';\n }\n i++;\n} while(i < people.length);\n\nrefused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';\nadmitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';";
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

{{ EmbedLiveSample('Active learning: Filling in a guest list', '100%', 680) }}

## Which loop type should you use?

For basic uses, `for`, `while`, and `do...while` loops are largely interchangeable. They can all be used to solve the same problems, and which one you use will largely depend on your personal preference — which one you find easiest to remember or most intuitive. Let's have a look at them again.

First `for`:

```plain
for (initializer; exit-condition; final-expression) {
  // code to run
}
```

`while`:

```plain
initializer
while (exit-condition) {
  // code to run

  final-expression
}
```

and finally `do...while`:

```plain
initializer
do {
  // code to run

  final-expression
} while (exit-condition)
```

We would recommend `for`, at least to begin with, as it is probably the easiest for remembering everything — the initializer, exit-condition, and final-expression all have to go neatly into the parentheses, so it is easy to see where they are and check that you aren't missing them.

> **備註：** There are other loop types/features too, which are useful in advanced/specialized situations and beyond the scope of this article. If you want to go further with your loop learning, read our advanced [Loops and iteration guide](/zh-TW/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Conclusion

This article has revealed to you the basic concepts behind, and different options available when, looping code in JavaScript. You should now be clear on why loops are a good mechanism for dealing with repetitive code, and be raring to use them in your own examples!

If there is anything you didn't understand, feel free to read through the article again, or [contact us](/zh-TW/Learn#Contact_us) to ask for help.

## See also

- [Loops and iteration in detail](/zh-TW/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for statement reference](/zh-TW/docs/Web/JavaScript/Reference/Statements/for)
- [while](/zh-TW/docs/Web/JavaScript/Reference/Statements/while) and [do...while](/zh-TW/docs/Web/JavaScript/Reference/Statements/do...while) references
- [break](/zh-TW/docs/Web/JavaScript/Reference/Statements/break) and [continue](/zh-TW/docs/Web/JavaScript/Reference/Statements/continue) references
- [What's the Best Way to Write a JavaScript For Loop?](https://www.impressivewebs.com/javascript-for-loop/) — some advanced loop best practices

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
