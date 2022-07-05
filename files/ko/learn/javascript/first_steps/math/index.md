---
title: 자바스크립트의 기본적인 연산 - 숫자와 연산자
slug: Learn/JavaScript/First_steps/Math
tags:
  - Article
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Join
  - Quotes
  - concatenation
  - l10n:priority
  - strings
translation_of: Learn/JavaScript/First_steps/Math
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

이 장은 자바스크립트의 연산에 대해 다룹니다. 능숙하게 숫자를 다루기 위해 어떻게 {{Glossary("Operator","operators")}} 와 그 외 기능을 사용하는지 알아봅니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 커퓨터 지식, HTML과 CSS에 대한 기본적인 이해, JavaScript의 이해
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>자바스크립트 연산에 익숙해지기</td>
    </tr>
  </tbody>
</table>

## 모두가 수학을 좋아합니다

좋아요, 아닐수도 있습니다. 일부는 좋아하겠죠. 몇몇 사람들은 구구단을 배울 때부터 싫어했을 겁니다. 그리고 몇몇은 이 사이 어딘가 있겠죠. 그러나 누구도 수학이 삶을 살아가는데 필수적 요소라는건 부정할 수 없을겁니다. 우리가 자바스크립트(혹은 다른 프로그래밍 언어)를 배울때 특히 그렇습니다.  우리가 하는 일의 상당 부분은 수치형 데이터를 처리하고, 값을 계산하거나 하는 일에 의지합니다.

이 장은 당장 알아야 하는 부분만 다룹니다.

### 숫자의 종류

프로그래밍에서, 우리가 잘 알고있는 십진법 체계라도 당신이 생각한 것보다 복잡합니다.

- **정수**는 10, 400, 혹은 -5 같은 모든 숫자입니다.
- **부동소수점 실수**(*float*)는 12.5, 6.7786543과 같이 소수점과 소수 자릿수가 있습니다.
- **배정밀도 부동소수점 실수**(*double*)는 IEEE 754 표준 부동소수점보다 더 정확한 정밀도를 가지고 있는 특별한 데이터 타입입니다. (**Doubles**은 **Floats** 보다 더 많은 소수 자릿수를 표현할 수 있어서 소수점 표현에는 **Doubles**가 더 정확합니다.).

자바스크립트는 심지어 다른 숫자 타입을 지원합니다. 10진수는 10을 기준으로 합니다. (숫자 0\~9을 쓴다는 뜻입니다.), 하지만 자바스크립트는 아래와 같은 데이터 타입을 지원합니다.

- **2진수** — 10진수를 0과 1를 이용해 나타내는 데이터 타입입니다.
- **8진수** —  10진수를 0부터 7까지의 수를 이용해 나타내는 데이터 타입입니다.
- **16진수** — 10진수를 0부터 15까지의 수를 이용해 나타내는 데이터 타입입니다.(1\~10, A\~F) . [CSS의 색상](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Hexadecimal_values)을 지정할 때 쉽게 볼 수 있습니다.

**어려워서 힘들다고 느끼기 전에, 잠시 멈추세요!** 시작하기 위해서 우리는 이제부터 10진수만 사용하도록 하겠습니다. 다른 유형에 대해 생각할 필요가 없습니다.

두 번째 좋은 소식은 다른 프로그래밍 언어와 달리, 자바스크립트는 실수와 정수 모두 {{jsxref("Number")}}라는 하나의 데이터 타입만 사용합니다. 실수와 정수 모두 같은 데이터 타입이기 때문에 하나의 방법으로 동작하게 할 수 있다는 뜻입니다.

### 나를 위한 숫자들

우리가 필요한 기본 구문을 다시 익히기 위해 몇 가지 숫자를 빠르게 생각해 봅시다. [developer tools JavaScript console](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) 에 들어가서 아래의 나열된 명령어를 입력해주세요.

1.  먼저, 두 개의 변수를 선언합니다. 그리고 두 개의 변수를 정수와 실수로 초기화해줍니다. 각각 변수명을 콘솔 창에 입력해주세요. 그리고 어떤 값이 나오는지 확인해주세요.

    ```js
    var myInt = 5;
    var myFloat = 6.667;
    myInt;
    myFloat;
    ```

2.  숫자는 따옴표(" 또는 ')가 없습니다. — 계속 하기 전에 여러 개의 변수를 선언하고 숫자를 초기화 해주세요.
3.  우리들의 변수들의 데이터 타입을 확인합니다. 자바스크립트에서는 데이터 타입을 확인하기 위해 {{jsxref("Operators/typeof", "typeof")}} 라는 키워드를 사용합니다. 아래와 같이 입력해 주세요:

    ```js
    typeof myInt;
    typeof myFloat;
    ```

    `"number"` 는 정수와 실수인 경우에 나옵니다. — 이것들은 정수와 실수가 다른 데이터 타입일 때 보다 다루기 쉽게 해줍니다.  그리고 다른 데이터 타입일 때 다른 방법으로 다뤄야만 합니다. 호우\~!

## 산술 연산자

산술연산자들의 기본적인 용도는 덧셈을 할 때 입니다.

<table class="standard-table">
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
      <td>Addition</td>
      <td>두 개의 숫자를 더합니다.</td>
      <td><code>6 + 9</code></td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>Subtraction</td>
      <td>왼쪽에 있는 수를 오른쪽 수로 뺍니다.</td>
      <td><code>20 - 15</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Multiplication</td>
      <td>두 개의 숫자를 곱합니다.</td>
      <td><code>3 * 7</code></td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>Division</td>
      <td>왼쪽의 숫자를 오른쪽 숫자로 나눠서 몫을 구합니다.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Remainder (sometimes called modulo)</td>
      <td><p>왼쪽의 숫자를 오른쪽 숫자로 나눠서 나머지를 구합니다.</p></td>
      <td>
        <code>8 % 3</code><br />( 2를 반환합니다, 8을 3으로 나눴을 때 몫이 2이기
        때문입니다.)
      </td>
    </tr>
  </tbody>
</table>

<div class="note"><p><strong>팁</strong>:  연산에 관계된 수를 피연산자라고 부릅니다.<br>참고 - {{Glossary("Operand", "operands")}}.</p></div>

아직 수학을 공부할 필요는 없습니다. 하지만 우리는 문법 확인을 해야합니다. 아래의 명령어들을 [developer tools JavaScript console](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) 에 입력해주세요.

1.  아래의 명령어를 콘솔창에 입력해주세요.

    ```js
    10 + 7
    9 * 8
    60 % 3
    ```

2.  You can also try declaring and initializing some numbers inside variables, and try using those in the sums — the variables will behave exactly like the values they hold for the purposes of the sum. For example:

    ```js
    var num1 = 10;
    var num2 = 50;
    9 * num1;
    num2 / num1;
    ```

3.  Last for this section, try entering some more complex expressions, such as:

    ```js
    5 + 10 * 3;
    num2 % 9 * num1;
    num2 + num1 / 8 + 2;
    ```

Some of this last set of sums might not give you quite the result you were expecting; the below section might well give the answer as to why.

### Operator precedence

Let's look at the last example from above, assuming that `num2` holds the value 50 and `num1` holds the value 10 (as originally stated above):

```js
num2 + num1 / 8 + 2;
```

As a human being, you may read this as _"50 plus 10 equals 60"_, then _"8 plus 2 equals 10"_, and finally _"60 divided by 10 equals 6"_.

But the browser does _"10 divided by 8 equals 1.25"_, then _"50 plus 1.25 plus 2 equals 53.25"_.

This is because of **operator precedence** — some operators will be applied before others when calculating the result of a sum (referred to as an expression, in programming).  Operator precedence in JavaScript is the same as is taught in math classes in school — Multiply and divide are always done first, then add and subtract (the sum is always evaluated from left to right).

If you want to override operator precedence, you can put parentheses round the parts that you want to be explicitly dealt with first. So to get a result of 6, we could do this:

```js
(num2 + num1) / (8 + 2);
```

Try it and see.

> **참고:** A full list of all JavaScript operators and their precedence can be found in [Expressions and operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operator_precedence).

## Increment and decrement operators

Sometimes you'll want to repeatedly add or subtract one to/from a numeric variable value. This can be conveniently done using the increment (`++`) and decrement(`--`) operators. We used `++` in our  "Guess the number" game back in our [first splash into JavaScript](/en-US/docs/Learn/JavaScript/Introduction_to_JavaScript_1/A_first_splash) article, when we added 1 to our `guessCount` variable to keep track of how many guesses the user has left after each turn.

```js
guessCount++;
```

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

> **참고:** You can make the browser do it the other way round — increment/decrement the variable _then_ return the value — by putting the operator at the start of the variable instead of the end. Try the above examples again, but this time use `++num1` and `--num2`.

## Assignment operators

Assignment operators are operators that assign a value to a variable. We have already used the most basic one, `=`, loads of times — it simply assigns the variable on the left the value stated on the right:

```js
var x = 3; // x contains the value 3
var y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

But there are some more complex types, which provide useful shortcuts to keep your code neater and more efficient. The most common are listed below:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col">Example</th>
      <th scope="col">Shortcut for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+=</code></td>
      <td>Addition assignment</td>
      <td>
        Adds the value on the right to the variable value on the left, then
        returns the new variable value
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraction assignment</td>
      <td>
        Subtracts the value on the right from the variable value on the left,
        and returns the new variable value
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplication assignment</td>
      <td>
        Multiplies the variable value on the left by the value on the right, and
        returns the new variable value
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Division assignment</td>
      <td>
        Divides the variable value on the left by the value on the right, and
        returns the new variable value
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Try typing some of the above examples into your console, to get an idea of how they work. In each case, see if you can guess what the value is before you type in the second line.

Note that you can quite happily use other variables on the right hand side of each expression, for example:

```js
var x = 3; // x contains the value 3
var y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> **참고:** There are lots of [other assignment operators available](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators), but these are the basic ones you should learn now.

## Active learning: sizing a canvas box

In this exercise, you will manipulate some numbers and operators to change the size of a box. The box is drawn using a browser API called the {{domxref("Canvas API", "", "", "true")}}. There is no need to worry about how this works — just concentrate on the math for now. The width and height of the box (in pixels) are defined by the variables `x` and `y`, which are initially both given a value of 50.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 520)}}

**[Open in new window](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

In the editable code box above, there are two lines marked with a comment that we'd like you to update to make the box grow/shrink to certain sizes, using certain operators and/or values in each case. Let's try the following:

- Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.
- Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.
- Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.
- Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.
- Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
- Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.

Don't worry if you totally mess the code up. You can always press the Reset button to get things working again. After you've answered all the above questions correctly, feel free to play with the code some more or create your own challenges.

## Comparison operators

Sometimes we will want to run true/false tests, then act accordingly depending on the result of that test — to do this we use **comparison operators**.

| Operator | Name                     | Purpose                                                                      | Example       |
| -------- | ------------------------ | ---------------------------------------------------------------------------- | ------------- |
| `===`    | Strict equality          | Tests whether the left and right values are identical to one another         | `5 === 2 + 4` |
| `!==`    | Strict-non-equality      | Tests whether the left and right values are **not** identical to one another | `5 !== 2 + 3` |
| `<`      | Less than                | Tests whether the left value is smaller than the right one.                  | `10 < 6`      |
| `>`      | Greater than             | Tests whether the left value is greater than the right one.                  | `10 > 20`     |
| `<=`     | Less than or equal to    | Tests whether the left value is smaller than or equal to the right one.      | `3 <= 2`      |
| `>=`     | Greater than or equal to | Tests whether the left value is greater than or equal to the right one.      | `5 >= 4`      |

> **Note:** You may see some people using `==` and `!=` in their tests for equality and non-equality. These are valid operators in JavaScript, but they differ from `===`/`!==`. The former versions test whether the values are the same but not whether the values' datatypes are the same. The latter, strict versions test the equality of both the values and their datatypes. The strict versions tend to result in fewer errors, so we recommend you use them.

If you try entering some of these values in a console, you'll see that they all return `true`/`false` values — those booleans we mentioned in the last article. These are very useful, as they allow us to make decisions in our code, and they are used every time we want to make a choice of some kind. For example, booleans can be used to:

- Display the correct text label on a button depending on whether a feature is turned on or off
- Display a game over message if a game is over or a victory message if the game has been won
- Display the correct seasonal greeting depending what holiday season it is
- Zoom a map in or out depending on what zoom level is selected

We'll look at how to code such logic when we look at conditional statements in a future article. For now, let's look at a quick example:

```html
<button>Start machine</button>
<p>The machine is stopped.</p>
```

```js
var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
```

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[Open in new window](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

You can see the equality operator being used just inside the `updateBtn()` function. In this case, we are not testing if two mathemetical expressions have the same value — we are testing whether the text content of a button contains a certain string — but it is still the same principle at work. If the button is currently saying "Start machine" when it is pressed, we change its label to  "Stop machine", and update the label as appropriate. If the button is currently saying "Stop machine" when it is pressed, we swap the display back again.

> **Note:** Such a control that swaps between two states is generally referred to as a **toggle**. It toggles between one state and another — light on, light off, etc.

## Summary

In this article we have covered the fundamental information you need to know about numbers in JavaScript, for now. You'll see numbers used again and again, all the way through your JavaScript learning, so it's a good idea to get this out of the way now. If you are one of those people that doesn't enjoy math, you can take comfort in the fact that this chapter was pretty short.

In the next article, we'll explore text and how JavaScript allows us to manipulate it.

> **Note:** If you do enjoy math and want to read more about how it is implemented in JavaScript, you can find a lot more detail in MDN's main JavaScript section. Great places to start are our [Numbers and dates](/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates) and [Expressions and operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) articles.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

## In this module

- [What is JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/en-US/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Arrays](/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)
