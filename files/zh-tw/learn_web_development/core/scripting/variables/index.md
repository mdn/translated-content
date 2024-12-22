---
title: 存儲你需要的資訊 - 變數
slug: Learn_web_development/Core/Scripting/Variables
original_slug: Learn/JavaScript/First_steps/Variables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

閱讀完最後幾篇文章之後，你現在應該知道 JavaScript 是什麼，它可以為你做什麼，如何將它與其他 Web 技術一起使用，以及它的主要功能從高層看起來如何。 在本文中，我們將深入了解真正的基礎知識，了解如何使用 JavaScript 的大多數基本構建塊 - 變數。

<table class="learn-box">
  <tbody>
    <tr>
      <th scope="row">必備知識:</th>
      <td>電腦基礎知識，了解基本的 HTML 和 CSS ，了解 JavaScript 是什麼。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>熟悉 JavaScript 變數的基本知識。</td>
    </tr>
  </tbody>
</table>

## 你需要的工具

在此篇文章中，你將被要求輸入程式碼行來測試你對內容的理解。如果你使用的是網頁瀏覽器，最適合輸入代碼的地方便是 JavaScript 主控台, (請參閱[什麼是瀏覽器開發工具](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)這篇文章以取得更多關於此工具的資訊).

## 什麼是變量／變數？

變量是值的容器，就像我們可能在總和中使用的數字，或者我們可能用作句子一部分的字符串。 但關於變量的一個特殊之處在於它們包含的值可以改變。 我們來看一個簡單的例子：

```html
<button>請按我</button>
```

```js
const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("你叫什麼名字?");
  alert("你好 " + name + ", 很高興認識你!");
};
```

{{ EmbedLiveSample('什麼是變量／變數_variable_？','100%', 50, "", "", "hide-codepen-jsfiddle") }}

在此示例中，按下按鈕會運行幾行代碼。 第一行在屏幕上彈出一個框，要求讀者輸入其名稱，然後將值存儲在變量中。 第二行顯示歡迎消息，其中包含從變量值中獲取的名稱。

要理解為什麼這麼有用，讓我們考慮如何在不使用變量的情況下編寫此示例。 它最終會看起來像這樣：

```plain example-bad
let name = prompt('What is your name?');

if (name === 'Adam') {
  alert('Hello Adam, nice to see you!');
} else if (name === 'Alan') {
  alert('Hello Alan, nice to see you!');
} else if (name === 'Bella') {
  alert('Hello Bella, nice to see you!');
} else if (name === 'Bianca') {
  alert('Hello Bianca, nice to see you!');
} else if (name === 'Chris') {
  alert('Hello Chris, nice to see you!');
}

// ... 等等 ...
```

你可能暫時還沒有完全理解這些代碼和語法，但是你應該能夠理解到 — 如果我們沒有變量，我們就不得不寫大量的代碼去檢查輸入的名字，然後顯示相應名稱的消息 。這樣做顯然是低效率（雖然例子中只有 5 種選擇，但代碼卻相對地長）和不可行的 — 你沒有辦法列舉出所有可能的名字。

使用變量才是明智的。隨著你對 JavaScript 越來越了解，你會開始習慣使用變量。

變量的另一個特性就是它們能夠存儲任何的東西 — 不只是字符串和數字。變量可以存儲更複雜的數據，甚至是函數。你將在後續的內容中體驗到這些用法。

> [!NOTE]
> 變量是用來儲存數值的，而變量和數值是兩個不同的概念。變量不是數值本身，它們僅僅是一個用於儲存數值的容器。你可以把變量想像成一個個用來裝東西的紙皮箱。

![](boxes.png)

## 定義變量

要想使用變量，你需要做的第一步就是創建它 — 更準確的說，是定義一個變量。定義一個變量的語法是在關鍵字 `var` 或 `let` 之後加上變量的名字：

```js
let myName;
let myAge;
```

在這裡我們定義了兩個變量 `myName` 和 `myAge`。那麼現在嘗試輸入這些代碼到你的瀏覽器終端。之後，嘗試使用你自己選擇的名稱來創建一兩個變量。

> [!NOTE]
> 在 JavaScript 中，所有代碼指令都會以分號結尾（ `;`）－ 如果忘記加分號，你的單行代碼可能正常執行，但是在執行多行代碼的時候就可能出錯。所以，最好是養成主動以分號作為代碼結尾的習慣。

你可以輸入變量的名稱，來驗證這個變量的數值是否在執行環境（execution environment）中已經存在。例如，

```js
myName;
myAge;
```

以上這兩個變量並沒有數值，他們是空的容器。當你輸入變量名並按輸入鍵後，你會得到一個 `undefined` （沒有定義的值）的返回值。如果變量並不存在的話，你就會得到一個錯誤信息。請嘗試輸入：

```js
scoobyDoo;
```

> [!NOTE]
> 千萬不要把兩個概念弄混淆了，「一個變量**存在，但是沒有數值**」和「一個變量**並不存在**」— 他們完全是兩回事。在前面你看到的盒子的類比中，不存在意味著沒有可以存放變量的「盒子」。沒有定義的值意味著**有**一個「盒子」，但是它裡面沒有任何數值。

## 初始化變量

一旦你定義了一個變量，你就能夠初始化它來儲存數值。方法如下：在變量名之後跟上一個等號 (`=`)，然後是數值。例如：

```js
myName = "Chris";
myAge = 37;
```

Try going back to the console now and typing in these lines. You should see the value you've assigned to the variable returned in the console to confirm it, in each case. Again, you can return your variable values by simply typing their name into the console — try these again:

```js
myName;
myAge;
```

你可以同時定義並初始化變量，像是：

```js
let myDog = "Rover";
```

This is probably what you'll do most of the time, as it is quicker than doing the two actions on two separate lines.

## 比較 var 和 let 的不同

此刻你或許會思考「為什麼我們需要兩種方法來定義變數??」「為甚麼要有`var`和`let`??」

原因有些歷史淵源。在 Javascript 剛被創造的時候，只有`var`可以使用。在大部分的情況下都很正常，但是`var`的運作方式有些問題 — 它的設計有時會令人困惑甚至惹惱人。所以`let`在現代版本中的 Javascript 被創造出來，一個與`var`工作原理有些不同的創建變數的關鍵字，修復了`var`的種種問題。

以下將介紹幾個簡單的分別。我們現在不會一一講解全部的不同，但是當你慢慢深入 Javascript，你將會開始發現它們的(如果你真的很想現在知道，歡迎看看我們的[let 介紹頁](/zh-TW/docs/Web/JavaScript/Reference/Statements/let))。

如下，假設你需要宣告、初始化一個變數`myName`，即使你是初始化之後才宣告也是可行的：

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> This won't work when typing individual lines into a JavaScript console, just when running multiple lines of JavaScript in a web document.

This works because of **hoisting** — read [var hoisting](/zh-TW/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) for more detail on the subject.

Hoisting no longer works with `let`. If we changed `var` to `let` in the above example, it would fail with an error. This is a good thing — declaring a variable after you initialize it makes for confusing, harder to understand code.

Secondly, when you use `var`, you can declare the same variable as many times as you like, but with `let` you can't. The following would work:

```js
var myName = "Chris";
var myName = "Bob";
```

But the following would throw an error on the second line:

```js
let myName = "Chris";
let myName = "Bob";
```

You'd have to do this instead:

```js
let myName = "Chris";
myName = "Bob";
```

Again, this is a sensible language decision. There is no reason to redeclare variables — it just makes things more confusing.

For these reasons and more, we recommend that you use `let` as much as possible in your code, rather than `var`. There is no reason to use `var`, unless you need to support old versions of Internet Explorer with your code (it doesn't support `let` until version 11; the modern Windows Edge browser supports `let` just fine).

> [!NOTE]
> We are currently in the process of updating the course to use `let` rather than `var`. Bear with us!

## Updating a variable

Once a variable has been initialized with a value, you can change (or update) that value by simply giving it a different value. Try entering the following lines into your console:

```js
myName = "Bob";
myAge = 40;
```

### 變數命名規則悄悄話

You can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character.

- You shouldn't use other characters because they may cause errors or be hard to understand for an international audience.
- Don't use underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
- Don't use numbers at the start of variables. This isn't allowed and will cause an error.
- A safe convention to stick to is so-called ["lower camel case"](https://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms), where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. We've been using this for our variable names in the article so far.
- Make variable names intuitive, so they describe the data they contain. Don't just use single letters/numbers, or big long phrases.
- Variables are case sensitive — so `myage` is a different variable to `myAge`.
- One last point — you also need to avoid using JavaScript reserved words as your variable names — by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like `var`, `function`, `let`, and `for` as variable names. Browsers will recognize them as different code items, and so you'll get errors.

> [!NOTE]
> You can find a fairly complete list of reserved keywords to avoid at [Lexical grammar — keywords](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

良好的命名範例：

```plain example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

不好的命名範例：

```plain example-bad
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```

Error-prone name examples:

```plain example-bad
var
Document
```

Try creating a few more variables now, with the above guidance in mind.

## 變數資料類型

There are a few different types of data we can store in variables. In this section we'll describe these in brief, then in future articles, you'll learn about them in more detail.

So far we've looked at the first two, but there are others.

### 數字

You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating point numbers). You don't need to declare variable types in JavaScript, unlike some other programming languages. When you give a variable a number value, you don't include quotes:

```js
let myAge = 17;
```

### 字串

Strings are pieces of text. When you give a variable a string value, you need to wrap it in single or double quote marks, otherwise, JavaScript will try to interpret it as another variable name.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### 布林值

Booleans are true/false values — they can have two values, `true` or `false`. These are generally used to test a condition, after which code is run as appropriate. So for example, a simple case would be:

```js
let iAmAlive = true;
```

Whereas in reality it would be used more like this:

```js
let test = 6 < 3;
```

This is using the "less than" operator (`<`) to test whether 6 is less than 3. As you might expect, it will return `false`, because 6 is not less than 3! You will learn a lot more about such operators later on in the course.

### 陣列

An array is a single object that 它包含多個用方括號括起來並用逗號分隔的值。Try entering the following lines into your console:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Once these arrays are defined, you can access each value by their location within the array. Try these lines:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

The square brackets specify an index value corresponding to the position of the value you want returned. You might have noticed that arrays in JavaScript are zero-indexed: the first element is at index 0.

You'll learn a lot more about arrays in [a future article](/zh-TW/docs/Learn_web_development/Core/Scripting/Arrays).

### 物件

在編程中，物件是對真實生活物件進行建模的代碼結構。 你可以擁有一個代表停車場的簡單物件，其中包含有關其寬度和長度的信息，或者你可以擁有一個代表一個人的物件，並用物件紀錄其姓名、身高、體重、慣用語言，如何跟他打招呼等的資訊。

請試著在你的 console 中輸入以下指令：

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

取得物件中儲存的資料可以使用以下語法：

```js
dog.name;
```

We won't be looking at objects any more for now — you can learn more about those in [a future module](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects).

## 動態型別

JavaScript 是一個"動態型別語言"，意思是不像其他強型別程式語言，在 JavaScript 宣告變數時你不用指定指定資料類型(數字、字串或陣列等等)。

For example, if you declare a variable and give it a value enclosed in quotes, the browser will treat the variable as a string:

```js
let myString = "Hello";
```

It will still be a string, even if it contains numbers, so be careful:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Try entering the four lines above into your console one by one, and see what the results are. You'll notice that we are using a special operator called [`typeof`](/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof) — this returns the data type of the variable you pass into it. The first time it is called, it should return `string`, as at that point the `myNumber` variable contains a string, `'500'`. Have a look and see what it returns the second time you call it.

## JavaScript 中的常數

許多程式語言都有常數的概念：一經宣告就不改變的值。設定常數有許多原因，例如若引入第三方腳本而改動變數值，將會造成許多問題而且很難除錯。

一開始 JavaScript 是沒有常數的，直到今日我們才有了關鍵字 `const`，讓我們儲存不能改變的值：

```js
const daysInWeek = 7;
const hoursInDay = 24;
```

`const` works in exactly the same way as `let`, except that you can't give a `const` a new value. In the following example, the second line would throw an error:

```js
const daysInWeek = 7;
daysInWeek = 8;
```

## Summary

By now you should know a reasonable amount about JavaScript variables and how to create them. In the next article, we'll focus on numbers in more detail, looking at how to do basic math in JavaScript.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
