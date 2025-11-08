---
title: JavaScript中的基本數學 - 數字和運算符
slug: Learn_web_development/Core/Scripting/Math
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

在本課程的這一點上，我們將討論 JavaScript 中的數學 - 我們如何使用{{Glossary("Operator","operators")}} 和其他功能來成功操縱數字來進行我們的出價。

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識:</th>
      <td>電腦基礎知識，了解基本的 HTML 和 CSS ，了解 JavaScript 是什麼。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>熟悉JavaScript中的基礎數學。</td>
    </tr>
  </tbody>
</table>

## 每個人都喜歡數學

好吧，也許不是。 我們中的一些人喜歡數學，我們有些人討厭數學，因為我們必須在學校學習乘法和除法，而我們中的一些人兩者皆要。 但我們都不能否認數學是生活中的一個基本組成部分，我們離不開它們。 當我們學習 JavaScript（或任何其他語言）的程式時，尤其如此 - 我們所做的很多事情都依賴於處理數值數據，計算新值等等，你不會驚訝學習 JavaScript 有一套功能齊全的數學函數。

本文僅討論你現在需了解的基本部分。

### 數字的種類

在程式裡，即使眾所周知的十進位數字系統也比你想像的要複雜。我們使用不同的術語來描述不同類型的十進位數字，例如：

- **Integers** 是整數，如：10，400，或 -5。
- **Floating point numbers** (floats) 浮點數具有小數點跟小數位，例如 12.5 和 56.7786543。
- **Doubles** 是一種特定型態的浮點數 that have greater precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal places).

我們甚至有不同類型的號碼系統！十進位以 10 為單位（表示每列使用 0–9），但是也有像這些：

- **二進位** —計算機的最底層語言；0 和 1。
- **八進位** —以 8 為單位，每列使用 0–7。
- **十六進位** —以 16 為單位，在每列中使用 0–9，然後使用 a–f。你之前在 CSS 中設置[顏色](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_values)時，可能已經遇到過這些數字。

**在開始擔心大腦融化之前，先等等！**首先，我們將在整個課程中完全使用十進位數；你很少會想到其他類型的需求，如果有的話。

第二個好消息是 JavaScript 只有一種數字資料類型 ，猜對了！就是{{jsxref("Number")}}。這代表無論你在 JavaScript 需要處理哪種數字，處理方法都是一樣的。

> [!NOTE]
> 事實上, JavaScript 有第二種數字型態， {{Glossary("BigInt")}}, 用於非常、非常、非常大的整數。但這節課我只需要擔心 `Number` 的值。

### 我怎麼看都是些數字!

讓我們來快速操作一些數字來重新認識一下我們會需要用到的基本語法。將下面的需求表輸入進你的開發者工具 js 控制台([developer tools JavaScript console](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools))，或是簡單建立在任何你偏好的控制台。

1. 首先，先來宣告兩個變數，並分別賦予他們初始值為整數與浮點數，然後接著打上變數名稱來確認萬事預備:

   ```js
   var myInt = 5;
   var myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. 數字的值不需要引號框起來 — 試著宣告和賦予更多初始值為數字的變數，在繼續下去之前。
3. 現在，來確認 Now let's check that both our original variables are of the same datatype. There is an operator called {{jsxref("Operators/typeof", "typeof")}} in JavaScript that does this. Enter the below two lines as shown:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   You should get `"number"` returned in both cases — this makes things a lot easier for us than if different numbers had different data types, and we had to deal with them in different ways. Phew!

## 算術運算符

Arithmetic operators are the basic operators that we use to do sums:

<table>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+</code></td>
      <td>加法</td>
      <td>Adds two numbers together.</td>
      <td><code>6 + 9</code></td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>減法</td>
      <td>Subtracts the right number from the left.</td>
      <td><code>20 - 15</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>乘法</td>
      <td>Multiplies two numbers together.</td>
      <td><code>3 * 7</code></td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>除法</td>
      <td>Divides the left number by the right.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>餘數 (sometimes called modulo)</td>
      <td>
        <p>
          Returns the remainder left over after you've divided the left number
          into a number of integer portions equal to the right number.
        </p>
      </td>
      <td>
        <code>8 % 3</code> (returns 2, as three goes into 8 twice, leaving 2
        left over.)
      </td>
    </tr>
    <tr>
      <td>**</td>
      <td>指數</td>
      <td>
        Raises a <code>base</code> number to the <code>exponent</code> power,
        that is, the <code>base</code> number multiplied by itself,
        <code>exponent</code> times. It was first Introduced in EcmaScript 2016.
      </td>
      <td>
        <code>5 ** 2</code> (5的2次方得 <code>25</code>，跟
        <code>5 * 5</code>結果相同)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> You'll sometimes see numbers involved in sums referred to as {{Glossary("Operand", "operands")}}.

**備註：** You may sometimes see exponents expressed using the older {{jsxref("Math.pow()")}} method, which works in a very similar way. For example, in `Math.pow(7, 3)`, `7` is the base and `3` is the exponent, so the result of the expression is `343`. `Math.pow(7, 3)` is equivalent to `7**3`.

We probably don't need to teach you how to do basic math, but we would like to test your understanding of the syntax involved. Try entering the examples below into your [developer tools JavaScript console](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), or use the simple built in console seen earlier if you'd prefer, to familiarize yourself with the syntax.

1. First try entering some simple examples of your own, such as

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. You can also try declaring and initializing some numbers inside variables, and try using those in the sums — the variables will behave exactly like the values they hold for the purposes of the sum. For example:

   ```js
   var num1 = 10;
   var num2 = 50;
   9 * num1;
   num2 / num1;
   ```

3. Last for this section, try entering some more complex expressions, such as:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Some of this last set of sums might not give you quite the result you were expecting; the below section might well give the answer as to why.

### Operator precedence

Let's look at the last example from above, assuming that `num2` holds the value 50 and `num1` holds the value 10 (as originally stated above):

```js
num2 + num1 / 8 + 2;
```

As a human being, you may read this as _"50 plus 10 equals 60"_, then _"8 plus 2 equals 10"_, and finally _"60 divided by 10 equals 6"_.

But the browser does _"10 divided by 8 equals 1.25"_, then _"50 plus 1.25 plus 2 equals 53.25"_.

This is because of **operator precedence** — some operators will be applied before others when calculating the result of a sum (referred to as an expression, in programming). Operator precedence in JavaScript is the same as is taught in math classes in school — Multiply and divide are always done first, then add and subtract (the sum is always evaluated from left to right).

If you want to override operator precedence, you can put parentheses round the parts that you want to be explicitly dealt with first. So to get a result of 6, we could do this:

```js
(num2 + num1) / (8 + 2);
```

Try it and see.

> [!NOTE]
> A full list of all JavaScript operators and their precedence can be found in [Expressions and operators](Learn/JavaScript/First_steps/Math).

## 遞增和遞減運算符

Sometimes you'll want to repeatedly add or subtract one to/from a numeric variable value. This can be conveniently done using the increment (`++`) and decrement(`--`) operators. We used `++` in our "Guess the number" game back in our [first splash into JavaScript](/zh-TW/docs/Learn_web_development/Core/Scripting/A_first_splash) article, when we added 1 to our `guessCount` variable to keep track of how many guesses the user has left after each turn.

```js
guessCount++;
```

> [!NOTE]
> They are most commonly used in [loops](/zh-TW/docs/Web/JavaScript/Guide/Loops_and_iteration), which you'll learn about later on in the course. For example, say you wanted to loop through a list of prices, and add sales tax to each one. You'd use a loop to go through each value in turn and do the necessary calculation for adding the sales tax in each case. The incrementor is used to move to the next value when needed. We've actually provided a simple example showing how this is done — [check it out live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/loop.html), and [look at the source code](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/maths/loop.html) to see if you can spot the incrementors! We'll look at loops in detail later on in the course.

Let's try playing with these in your console. For a start, note that you can't apply these directly to a number, which might seem strange, but we are assigning a variable a new updated value, not operating on the value itself. The following will return an error:

```js
3++;
```

So, you can only increment an existing variable. Try this:

```js
var num1 = 4;
num1++;
```

Okay, strangeness number 2! When you do this, you'll see a value of 4 returned — this is because the browser returns the current value, _then_ increments the variable. You can see that it's been incremented if you return the variable value again:

```js
num1;
```

The same is true of `--` : try the following

```js
var num2 = 6;
num2--;
num2;
```

> [!NOTE]
> You can make the browser do it the other way round — increment/decrement the variable _then_ return the value — by putting the operator at the start of the variable instead of the end. Try the above examples again, but this time use `++num1` and `--num2`.

## 賦值運算符

Assignment operators are operators that assign a value to a variable. We have already used the most basic one, `=`, loads of times — it simply assigns the variable on the left the value stated on the right:

```js
var x = 3; // x contains the value 3
var y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

But there are some more complex types, which provide useful shortcuts to keep your code neater and more efficient. The most common are listed below:

| Operator | Name                      | Purpose                                                                                                  | Example           | Shortcut for         |
| -------- | ------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`     | Addition assignment       | Adds the value on the right to the variable value on the left, then returns the new variable value       | `x = 3; x += 4;`  | `x = 3; x = x + 4;`  |
| `-=`     | Subtraction assignment    | Subtracts the value on the right from the variable value on the left, and returns the new variable value | `x = 6; x -= 3;`  | `x = 6; x = x - 3;`  |
| `*=`     | Multiplication assignment | Multiples the variable value on the left by the value on the right, and returns the new variable value   | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`     | Division assignment       | Divides the variable value on the left by the value on the right, and returns the new variable value     | `x = 10; x /= 5;` | `x = 10; x = x / 5;` |

Try typing some of the above examples into your console, to get an idea of how they work. In each case, see if you can guess what the value is before you type in the second line.

Note that you can quite happily use other variables on the right hand side of each expression, for example:

```js
var x = 3; // x contains the value 3
var y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> There are lots of [other assignment operators available](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators#賦值運算子), but these are the basic ones you should learn now.

## Active learning: sizing a canvas box

In this exercise, you will manipulate some numbers and operators to change the size of a box. The box is drawn using a browser API called the {{domxref("Canvas API", "", "", "true")}}. There is no need to worry about how this works — just concentrate on the math for now. The width and height of the box (in pixels) are defined by the variables `x` and `y`, which are initially both given a value of 50.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[Open in new window](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

In the editable code box above, there are two lines marked with a comment that we'd like you to update to make the box grow/shrink to certain sizes, using certain operators and/or values in each case. Let's try the following:

- Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.
- Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.
- Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.
- Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.
- Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
- Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.

Don't worry if you totally mess the code up. You can always press the Reset button to get things working again. After you've answered all the above questions correctly, feel free to play with the code some more or create your own challenges.

## 比較運算符

Sometimes we will want to run true/false tests, then act accordingly depending on the result of that test — to do this we use **comparison operators**.

| Operator | Name                     | Purpose                                                                  | Example       |
| -------- | ------------------------ | ------------------------------------------------------------------------ | ------------- |
| `===`    | Strict equality          | Tests whether the left and right values are identical to one another     | `5 === 2 + 4` |
| `!==`    | Strict-non-equality      | Tests whether the left and right values **not** identical to one another | `5 !== 2 + 3` |
| `<`      | Less than                | Tests whether the left value is smaller than the right one.              | `10 < 6`      |
| `>`      | Greater than             | Tests whether the left value is greater than the right one.              | `10 > 20`     |
| `<=`     | Less than or equal to    | Tests whether the left value is smaller than or equal to the right one.  | `3 <= 2`      |
| `>=`     | Greater than or equal to | Tests whether the left value is greater than or equal to the right one.  | `5 >= 4`      |

> [!NOTE]
> You may see some people using `==` and `!=` in their tests for equality and non-equality. These are valid operators in JavaScript, but they differ from `===`/`!==`. The former versions test whether the values are the same but not whether the values' datatypes are the same. The latter, strict versions test the equality of both the values and their datatypes. The strict versions tend to result in fewer errors, so we recommend you use them.

If you try entering some of these values in a console, you'll see that they all return `true`/`false` values — those booleans we mentioned in the last article. These are very useful, as they allow us to make decisions in our code, and they are used every time we want to make a choice of some kind. For example, booleans can be used to:

- Display the correct text label on a button depending on whether a feature is turned on or off
- Display a game over message if a game is over or a victory message if the game has been won
- Display the correct seasonal greeting depending what holiday season it is
- Zoom a map in or out depending on what zoom level is selected

We'll look at how to code such logic when we look at conditional statements in a future article. For now, let's look at a quick example:

```html
<button>Start machine</button>
<p>The machine is stopped.</p>
```

```js
var btn = document.querySelector("button");
var txt = document.querySelector("p");

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

**[Open in new window](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

You can see the equality operator being used just inside the `updateBtn()` function. In this case, we are not testing if two mathemetical expressions have the same value — we are testing whether the text content of a button contains a certain string — but it is still the same principle at work. If the button is currently saying "Start machine" when it is pressed, we change its label to "Stop machine", and update the label as appropriate. If the button is currently saying "Stop machine" when it is pressed, we swap the display back again.

> [!NOTE]
> Such a control that swaps between two states is generally referred to as a **toggle**. It toggles between one state and another — light on, light off, etc.

## Summary

In this article we have covered the fundamental information you need to know about numbers in JavaScript, for now. You'll see numbers used again and again, all the way through your JavaScript learning, so it's a good idea to get this out of the way now. If you are one of those people that doesn't enjoy math, you can take comfort in the fact that this chapter was pretty short.

In the next article, we'll explore text and how JavaScript allows us to manipulate it.

> [!NOTE]
> If you do enjoy math and want to read more about how it is implemented in JavaScript, you can find a lot more detail in MDN's main JavaScript section. Great places to start are our [Numbers and dates](/zh-TW/docs/Web/JavaScript/Guide/Numbers_and_strings) and [Expressions and operators](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators) articles.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
