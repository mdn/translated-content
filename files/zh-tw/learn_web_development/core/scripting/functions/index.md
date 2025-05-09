---
title: 函數 - 可重複使用的程式碼區塊
slug: Learn_web_development/Core/Scripting/Functions
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

程式設計的另一個基本概念是函數，它允許你儲存一段程式碼，該程式碼在定義的區塊內執行單個任務，然後在需要時使用一個簡短命令調用該程式碼區塊，而不必多次輸入相同的程式碼。 在本文中，我們將探索函數背後的基本概念，例如基本語法、如何調用和定義它們、作用域範圍與參數。

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>
        基礎電腦術語、對 HTML 及 CSS 有基本認識、<a href="/zh-TW/docs/Learn_web_development/Core/Scripting"
          >JavaScript 的第一步</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        了解 JavaScript 函數背後的基本概念。
      </td>
    </tr>
  </tbody>
</table>

## 我在哪能找到函數？

在 JavaScript 裡，你到處都能看到函數的蹤影。事實上，我們在前面的課程中一直都在用函數，只是沒什麼提及而已。如今是時候讓我們詳細探討函數並認真探索它們的語法了。

幾乎每當你使用了包含一對小括號 — `()` — 的 JavaScritp 結構，並且沒有用到諸如 [for 迴圈](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop)、[while 與 do...while 迴圈](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops#while_and_do_..._while)或 [if...else 敘述](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals#if_..._else_statements)等常見的內建語言結構時，你就是在使用函數。

## 瀏覽器內建函數

到目前為止，我們已在課程中大量使用了瀏覽器內建的函數。例如，每當我們操控一個字串時：

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
console.log(newString);
// 字串的 replace() 函數會先替換一段子字串，
// 再回傳替換過後的新字串
```

或是每當我們操控一個陣列時：

```js
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
console.log(madeAString);
// 陣列的 join() 函數會先將所有陣列元素合併，
// 形成一個新字串，再回傳該新字串
```

或是每當我們產生一個亂數：

```js
var myNumber = Math.random();
// random() 函數會先產生一個介於 0 到 1 之間
// 的亂數，再回傳該數字
```

……我們其實當在使用函數。

> [!NOTE]
> 若有需要，你可以瀏覽器的 JavaScript 主控台中輸入以上指令碼，藉此重新熟悉這些功能。

JavaScript 語言有很多內建函數，讓你不用重覆寫所有程式碼就能做很多事。事實上，在你執行瀏覽器的內建函數時，你呼叫到的某些程式碼並不能用 JavaScript 來寫——很多這種函數是在部分呼叫瀏覽器背景語言，大多是由 C++ 這種低階系統語言寫成，而非 JavaScript 這種網際網路語言。

麻煩謹記在心，有些瀏覽器內建函數不是 JavaScript 語言核心的一部份——有些被定義為瀏覽器 API 的一部份，它們已預設語言為基礎來提供更多功能（[先前的章節](/zh-TW/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do)裡有更多說明）。在未來的模組中我們會更深入探討瀏覽器 API 的用法。

## 函數（function） vs 方法（method）

在我們繼續前，有件事需要先釐清——技術上來說，瀏覽器內建函數並不是函數（function）——它們是**方法**（method）。這聽起來有點令人疑惑，不過別擔心——在你目前的學習階段，「函數」與「方法」這兩個詞彙大多時候是可以互換的，至少對我們的目標而言。

這兩個詞的區別在方法（method）是定義在物件裡的函數（function）。瀏覽器內建函數（方法）和變數（此處被稱作**屬性**（property））被儲存在建構好的物件裡，令程式碼控制起來更有效率也更簡單。

你還不需要了解 JavaScript 物件的內部運作——在之後的模組我們會學到物件內部的所有運作方式，以及如何創建你自己的物件。此時，我們只需要釐清方法與函數之間任何可能搞混的地方——在你上網查相關教學資源時很可能兩個詞彙都會碰到。

## 自訂函數

You've also seen a lot of **custom functions** in the course so far — functions defined in your code, not inside the browser. Anytime you saw a custom name with parentheses straight after it, you were using a custom function. In our [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) example (see also the full [source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html)) from our [loops article](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops), we included a custom `draw()` function that looked like this:

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

This function draws 100 random circles inside an {{htmlelement("canvas")}} element. Every time we want to do that, we can just invoke the function with this

```js
draw();
```

rather than having to write all that code out again every time we want to repeat it. And functions can contain whatever code you like — you can even call other functions from inside functions. The above function for example calls the `random()` function three times, which is defined by the following code:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

We needed this function because the browser's built-in [Math.random()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function only generates a random decimal number between 0 and 1. We wanted a random whole number between 0 and a specified number.

## 呼叫函數

You are probably clear on this by now, but just in case ... to actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// 呼叫一次函數
```

## 匿名函數

You may see functions defined and invoked in slightly different ways. So far we have just created a function like so:

```js
function myFunction() {
  alert("hello");
}
```

But you can also create a function that doesn't have a name:

```js
function() {
  alert('hello');
}
```

This is called an **anonymous function** — it has no name! It also won't do anything on its own. You generally use an anonymous function along with an event handler, for example the following would run the code inside the function whenever the associated button is clicked:

```js
var myButton = document.querySelector("button");

myButton.onclick = function () {
  alert("hello");
};
```

The above example would require there to be a {{htmlelement("button")}} element available on the page to select and click. You've already seen this structure a few times throughout the course, and you'll learn more about and see it in use in the next article.

You can also assign an anonymous function to be the value of a variable, for example:

```js
var myGreeting = function () {
  alert("hello");
};
```

This function could now be invoked using:

```js
myGreeting();
```

This effectively gives the function a name; you can also assign the function to be the value of multiple variables, for example:

```js
var anotherGreeting = function () {
  alert("hello");
};
```

This function could now be invoked using either of

```js
myGreeting();
anotherGreeting();
```

But this would just be confusing, so don't do it! When creating functions, it is better to just stick to this form:

```js
function myGreeting() {
  alert("hello");
}
```

You will mainly use anonymous functions to just run a load of code in response to an event firing — like a button being clicked — using an event handler. Again, this looks something like this:

```js
myButton.onclick = function () {
  alert("hello");
  // 這邊你的程式碼想寫多長就寫多長
};
```

## 函數參數

Some functions require **parameters** to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly.

> [!NOTE]
> Parameters are sometimes called arguments, properties, or even attributes.

As an example, the browser's built-in [Math.random()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function doesn't require any parameters. When called, it always returns a random number between 0 and 1:

```js
var myNumber = Math.random();
```

The browser's built-in string [replace()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace) function however needs two parameters — the substring to find in the main string, and the substring to replace that string with:

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
```

> [!NOTE]
> When you need to specify multiple parameters, they are separated by commas.

It should also be noted that sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array [join()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join) function's parameter is optional:

```js
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
// 回傳 'I love chocolate frogs'
var madeAString = myArray.join();
// 回傳 'I,love,chocolate,frogs'
```

If no parameter is included to specify a joining/delimiting character, a comma is used by default.

## 函數作用域及衝突

Let's talk a bit about {{glossary("scope")}} — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate **scope**, meaning that they are locked away in their own separate compartments, unreachable from inside other functions or from code outside the functions.

The top level outside all your functions is called the **global scope**. Values defined in the global scope are accessible from everywhere in the code.

JavaScript is set up like this for various reasons — but mainly because of security and organization. Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident.

For example, say you have an HTML file that is calling in two external JavaScript files, and both of them have a variable and a function defined that use the same name:

```html
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```js
// first.js
var name = "Chris";
function greeting() {
  alert("Hello " + name + ": welcome to our company.");
}
```

```js
// second.js
var name = "Zaptec";
function greeting() {
  alert("Our company is called " + name + ".");
}
```

Both functions you want to call are called `greeting()`, but you can only ever access the `second.js` file's `greeting()` function — it is applied to the HTML later on in the source code, so its variable and function overwrite the ones in `first.js`.

> [!NOTE]
> You can see this example [running live on GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (see also the [source code](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/functions)).

Keeping parts of your code locked away in functions avoids such problems, and is considered best practice.

It is a bit like a zoo. The lions, zebras, tigers, and penguins are kept in their own enclosures, and only have access to the things inside their enclosures — in the same manner as the function scopes. If they were able to get into other enclosures, problems would occur. At best, different animals would feel really uncomfortable inside unfamiliar habitats — a lion or tiger would feel terrible inside the penguins' watery, icy domain. At worst, the lions and tigers might try to eat the penguins!

![](mdn-mozilla-zoo.png)

The zoo keeper is like the global scope — he or she has the keys to access every enclosure, to restock food, tend to sick animals, etc.

### 互動學習：玩轉作用域

Let's look at a real example to demonstrate scoping.

1. First, make a local copy of our [function-scope.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-scope.html) example. This contains two functions called `a()` and `b()`, and three variables — `x`, `y`, and `z` — two of which are defined inside the functions, and one in the global scope. It also contains a third function called `output()`, which takes a single parameter and outputs it in a paragraph on the page.
2. Open the example up in a browser and in your text editor.
3. Open the JavaScript console in your browser developer tools. In the JavaScript console, enter the following command:

   ```js
   output(x);
   ```

   You should see the value of variable `x` output to the screen.

4. Now try entering the following in your console

   ```js
   output(y);
   output(z);
   ```

   Both of these should return an error along the lines of "[ReferenceError: y is not defined](/zh-TW/docs/Web/JavaScript/Reference/Errors/Not_defined)". Why is that? Because of function scope — `y` and `z` are locked inside the `a()` and `b()` functions, so `output()` can't access them when called from the global scope.

5. However, what about when it's called from inside another function? Try editing `a()` and `b()` so they look like this:

   ```js
   function a() {
     var y = 2;
     output(y);
   }

   function b() {
     var z = 3;
     output(z);
   }
   ```

   Save the code and reload it in your browser, then try calling the `a()` and `b()` functions from the JavaScript console:

   ```js
   a();
   b();
   ```

   You should see the `y` and `z` values output in the page. This works fine, as the `output()` function is being called inside the other functions — in the same scope as the variables it is printing are defined in, in each case. `output()` itself is available from anywhere, as it is defined in the global scope.

6. Now try updating your code like this:

   ```js
   function a() {
     var y = 2;
     output(x);
   }

   function b() {
     var z = 3;
     output(x);
   }
   ```

   Save and reload again, and try this again in your JavaScript console:

   ```js
   a();
   b();
   ```

   Both the `a()` and `b()` call should output the value of x — 1. These work fine because even though the `output()` calls are not in the same scope as `x` is defined in, `x` is a global variable so is available inside all code, everywhere.

7. Finally, try updating your code like this:

   ```js
   function a() {
     var y = 2;
     output(z);
   }

   function b() {
     var z = 3;
     output(y);
   }
   ```

   Save and reload again, and try this again in your JavaScript console:

   ```js
   a();
   b();
   ```

   This time the `a()` and `b()` calls will both return that annoying "[ReferenceError: z is not defined](/zh-TW/docs/Web/JavaScript/Reference/Errors/Not_defined)" error — this is because the `output()` calls and the variables they are trying to print are not defined inside the same function scopes — the variables are effectively invisible to those function calls.

> [!NOTE]
> The same scoping rules do not apply to loop (e.g. `for() { ... }`) and conditional blocks (e.g. `if() { ... }`) — they look very similar, but they are not the same thing! Take care not to get these confused.

> [!NOTE]
> The [ReferenceError: "x" is not defined](/zh-TW/docs/Web/JavaScript/Reference/Errors/Not_defined) error is one of the most common you'll encounter. If you get this error and you are sure that you have defined the variable in question, check what scope it is in.

### 函數裡的函數

Keep in mind that you can call a function from anywhere, even inside another function. This is often used as a way to keep code tidy — if you have a big complex function, it is easier to understand if you break it down into several sub-functions:

```js
function myBigFunction() {
  var myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}
```

Just make sure that the values being used inside the function are properly in scope. The example above would throw an error `ReferenceError: myValue is not defined`, because although the `myValue` variable is defined in the same scope as the function calls, it is not defined inside the function definitions — the actual code that is run when the functions are called. To make this work, you'd have to pass the value into the function as a parameter, like this:

```js
function myBigFunction() {
  var myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
```

## 結論

這篇文章探討了函數背後的基本觀念，為下一章的實戰演練以及帶你一步步建立你的自訂函數奠定基礎。

## 更多請看

- [函數詳細指南](/zh-TW/docs/Web/JavaScript/Guide/Functions) — 包含一些本文為提及的進階功能
- [函數參考文件](/zh-TW/docs/Web/JavaScript/Reference/Functions)
- [預設參數](/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[箭頭函數](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — 進階概念參考文件

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
