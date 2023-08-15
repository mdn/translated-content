---
title: 函数——可复用代码块
slug: Learn/JavaScript/Building_blocks/Functions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

在 JavaScript 中另一个基本概念是**函数**, 它允许你在一个代码块中存储一段用于处理单任务的代码，然后在任何你需要的时候用一个简短的命令来调用，而不是把相同的代码写很多次。在本文中，我们将探索函数的基本概念，如基本语法、如何定义和调用、范围和参数。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件：</th>
      <td>
        基本的电脑知识，对 HTML 与 CSS 有基本的了解，及已阅读：
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps"
          >JavaScript first steps</a
        >（JS 的入门）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解 Javascript 函数背后的基本概念。</td>
    </tr>
  </tbody>
</table>

## 我能在哪找到函数？

在 JavaScript 中，你将发现函数无处不在。事实上，到目前为止，我们一直在使用函数，只是我们还没很好的讨论它们。然而现在是时候了，让我们开始聊聊函数，并探索它们的语法。

几乎任何时候，只要你使用一个带有一对圆括号（`()`）的 JavaScript 结构，并且你不是在使用一个常见的比如 for 循环、while 或 do…while 循环，或者 if 语句这样的内置语言结构时，那么你就正在使用函数。

## 浏览器内置函数

在这套课程中我们已经使用了很多浏览器内置函数，当我们操作一个字符串的时候，例如：

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
console.log(newString);
// replace() 字符串函数接受一个字符串，
// 用另一个子字符串替换一个子字符串，并返回
// 替换后的新字符串
```

或者当我们操作一个数组的时候：

```js
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
console.log(madeAString);
// join() 函数接受一个数组，将
// 所有数组元素连接成一个单一的
// 字符串，并返回这个新字符串
```

或者当我们生成一个随机数时：

```js
var myNumber = Math.random();
// random() 函数生成一个随机
// 数字在 0 和 1 之间，并返回该
// 数字
```

...我们已经使用过函数了！

> **备注：** 如果需要，你可以随意将这些代码输入浏览器控制台以便于你熟悉其功能。

JavaScript 有许多内置的函数，可以让您做很多有用的事情，而无需自己编写所有的代码。事实上，许多你调用（运行或者执行的专业词语）浏览器内置函数时调用的代码并不是使用 JavaScript 来编写——大多数调用浏览器后台的函数的代码，是使用像 C++这样更低级的系统语言编写的，而不是像 JavaScript 这样的 web 编程语言。

请记住，这些内置浏览器函数不是核心 JavaScript 语言的一部分——被定义为浏览器 API 的一部分，它建立在默认语言之上，以提供更多的功能（请参阅本课程的早期部分以获得更多的描述）。我们将在以后的模块中更详细地使用浏览器 API。

## 函数与方法

程序员把函数称为对象**方法**（method）的一部分。你还不必了解 JavaScript 中已建构的对象在更深层次上是如何运作的——你可以等到下一小节，我们会教给你有关对象运作方式的一切。在我们继续前进之前，我们需要澄清一些有关方法和函数概念之间可能存在的误会——当你在网络上浏览相关信息的时候，你很可能会碰上这两个术语。

到目前为止我们所使用的内置代码同属于这两种形式：函数和方法。你可以在[这里](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)查看内置函数，内置对象以及其相关方法的完整列表。

严格说来，内置浏览器函数并不是函数——它们是**方法**。这听起来有点可怕和令人困惑，但不要担心——函数和方法在很大程度上是可互换的，至少在我们的学习阶段是这样的。

二者区别在于方法是在对象内定义的函数。浏览器内置函数（方法）和变量（称为属性）存储在结构化对象内，以使代码更加高效，易于处理。

## 自定义函数

您在过去的课程中还看到很多定制功能 - 在代码中定义的功能，而不是在浏览器中。每当您看到一个自定义名称后面都带有括号，那么您使用的是自定义函数。在我们的[循环文章中](/zh-CN/docs/Learn/JavaScript/Building_blocks/Looping_code)的 [random-canvas-circles.html](http://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) 示例（参见完整的[源代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)）中，我们包括一个如下所示的自定义函数：`draw()`

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

该函数在 {{htmlelement("canvas")}} 元素中绘制 100 个随机圆。每次我们想要这样做，我们可以使用这个函数来调用这个功能：

```js
draw();
```

而不是每次我们想重复一遍，都要写出所有的代码。函数可以包含任何您喜欢的代码 - 甚至可以从内部函数调用其他函数。以上函数例如调用`random()`函数三次，由以下代码定义：

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

我们需要这个函数，因为浏览器的内置 [Math.random()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 函数只生成一个 0 到 1 之间的随机十进制数。我们想要一个 0 到一个指定数字之间的随机整数。

## 调用函数

现在你可能很清楚这一点，但仅仅为了防止……，要在函数定义之后，实际使用它，你必须运行或调用它。这是通过将函数名包含在代码的某个地方，后跟圆括号来完成的。

```js
function myFunction() {
  alert("hello");
}

myFunction();
// 调用一次该函数
```

## 匿名函数

您可能会以稍微不同的方式看到定义和调用的函数。到目前为止，我们刚刚创建了如下函数：

```js
function myFunction() {
  alert("hello");
}
```

但是您也可以创建一个没有名称的函数：

```js
function() {
  alert('hello');
}
```

这个函数叫做**匿名函数**——它没有函数名！它也不会自己做任何事情。你通常将匿名函数与事件处理程序一起使用，例如，如果单击相关按钮，以下操作将在函数内运行代码：

```js
var myButton = document.querySelector("button");

myButton.onclick = function () {
  alert("hello");
};
```

上述示例将要求 {{htmlelement("button")}} 在页面上提供可用于选择并单击的元素。您在整个课程中已经看到过这种结构了几次，您将在下一篇文章中了解更多信息并在其中使用。

你还可以将匿名函数分配为变量的值，例如：

```js
var myGreeting = function () {
  alert("hello");
};
```

现在可以使用以下方式调用此函数：

```js
myGreeting();
```

有效地给变量一个名字;还可以将该函数分配为多个变量的值，例如：

```js
var anotherGreeting = function () {
  alert("hello");
};
```

现在可以使用以下任一方法调用此函数

```js
myGreeting();
anotherGreeting();
```

但这只会令人费解，所以不要这样做！创建方法时，最好坚持下列形式：

```js
function myGreeting() {
  alert("hello");
}
```

你将主要使用匿名函数来运行负载的代码以响应事件触发（如点击按钮）——使用事件处理程序。再次，这看起来像这样：

```js
myButton.onclick = function () {
  alert("hello");
  // 我可以在这里放入
  // 尽可能多的代码
};
```

> **备注：** 匿名函数也称为函数表达式。函数表达式与函数声明有一些区别。函数声明会进行声明提升（declaration hoisting），而函数表达式不会。

## 函数参数

一些函数需要在调用它们时指定参数 ——这些参数值需要放在函数括号内，才能正确地完成其工作。

> **备注：** 参数有时称为参数（argument）、属性（propertie）或甚至特性（attribute）。

例如，浏览器的内置 [Math.random()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 函数不需要任何参数。当被调用时，它总是返回 0 到 1 之间的随机数：

```js
var myNumber = Math.random();
```

浏览器的内置字符串[replace（）](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)函数需要两个参数：在主字符串中查找的子字符串，以及用以下替换该字符串的子字符串：

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
```

> **备注：** 当你需要指定多个参数时，它们以逗号分隔。

还应该注意，有时参数不是必须的——你不必指定它们。如果没有，该功能一般会采用某种默认行为。作为示例，数组 [`join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 函数的参数是可选的：

<!-- autocorrect-disable -->

```js
const myArray = ["我", "爱", "巧克力", "青蛙"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// 返回 '我 爱 巧克力 青蛙'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// 返回 '我,爱,巧克力,青蛙'
```

<!-- autocorrect-enable -->

如果没有包含参数来指定加入/分隔符，默认情况下会使用逗号。

## 函数作用域和冲突

我们来谈一谈{{glossary("scope", "作用域")}}——处理函数时一个非常重要的概念。当你创建一个函数时，函数内定义的变量和其他东西都在它们自己的单独的范围内，意味着它们被锁在自己独立的隔间中，不能被函数外的代码访问。

所有函数的最外层被称为全局作用域。在全局作用域内定义的值可以在任意地方访问。

JavaScript 由于各种原因而建立，但主要是由于安全性和组织性。有时您不希望变量可以在代码中的任何地方访问 - 您从其他地方调用的外部脚本可能会开始搞乱您的代码并导致问题，因为它们恰好与代码的其他部分使用了相同的变量名称，造成冲突。这可能是恶意的，或者是偶然的。

例如，假设您有一个 HTML 文件，它调用两个外部 JavaScript 文件，并且它们都有一个使用相同名称定义的变量和函数：

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
let name = "Chris";
function greeting() {
  alert("Hello " + name + ": welcome to our company.");
}
```

```js
// second.js
let name = "Zaptec";
function greeting() {
  alert("Our company is called " + name + ".");
}
```

这两个函数都使用 `greeting()` 形式调用，但是你只能访问到 first.js 文件的`greeting()`函数（第二个文件被忽视了）。另外，第二次尝试使用 `let` 关键字定义 `name` 变量导致了一个错误。

> **备注：** 你可以[在 GitHub 上参考运行的实例](http://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html)（查看完整[源代码](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)）。

将代码锁定在函数中的部分避免了这样的问题，并被认为是最佳实践。

这有点像一个动物园。狮子，斑马，老虎和企鹅都保留在自己的园子中，只能拿到到它们园子中的东西 —— 与其函数作用域相同。如果他们能进入其他园子，就会出现问题。不同的动物会在不熟悉的栖息地内感到真的不舒服 - 一只狮子或老虎会在企鹅的水多的，冰冷的的领域中感到可怕。最糟糕的是，狮子和老虎可能会尝试吃企鹅！

![](mdn-mozilla-zoo.png)

动物园管理员就像全局作用域 - 他或她有钥匙访问每个园子，重新投喂食物，照顾生病的动物等。

### 主动学习：和 scope 玩耍

我们来看一个真正的例子来展示范围

1. 首先，创建我们的 [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) 示例的本地副本。它包含两个函数 `a()` 和 `b()`，和三个变量——`x`、`y`和`z`——其中两个在函数中被定义，另一个被定义在全局作用域内。它还包含一个名为 `output()` 的函数，它接收一个参数，并将其输出到页面的一个段落中。
2. 在浏览器和文本编辑器中打开示例。
3. 在浏览器开发工具中打开 JavaScript 控制台。在 JavaScript 控制台中，输入以下命令：

   ```js
   output(x);
   ```

   您应该看到变量`x`输出到屏幕的值。

4. 现在尝试在您的控制台中输入以下内容

   ```js
   output(y);
   output(z);
   ```

   这两个都应该返回错误沿“[ReferenceError：y 未定义](/zh-CN/docs/Web/JavaScript/Reference/Errors/Not_defined)”。这是为什么？由于函数作用域 - `y` 和 `z` 被锁定在函数 `a()` 和 `b()` 函数中，所以 `output()` 从全局作用域调用时无法访问它们。

5. 但是，从另一个函数里面调用什么呢？尝试编辑 `a()`、`b()` 所以它们看起来像这样：

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

   保存代码并重新加载到浏览器中，然后尝试从 JavaScript 控制台调用 `a()` 和 `b()` 函数：

   ```js
   a();
   b();
   ```

   你应该看到页面中输出的 `y` 和 `z` 的值。这样就没问题，因为 `output()` 函数在其他函数的内部被调用——在这种情况下，输出变量的定义和函数的调用都在同一个作用域中。`output()` 它可以从任何地方被调用，因为它在全局作用域中被定义。

6. 现在尝试更新您的代码，如下所示：

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

7. 再次保存并重新加载，并在 JavaScript 控制台中再次尝试：

   ```js
   a();
   b();
   ```

   函数 `a()`和`b()`都应该输出 x---1 的值。这些没有问题，因为即使`output()`的调用与`x`的定义不在同一个作用域内，但`x`是一个全局变量，所以在所有代码中都可用。

8. 最后，尝试更新您的代码，如下所示：

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

9. 再次保存并重新加载，并在 JavaScript 控制台中再次尝试：

   ```js
   a();
   b();
   ```

   这次`a()`和`b()`调用都会返回那个令人讨厌的 "[ReferenceError: z is not defined](/zh-CN/docs/Web/JavaScript/Reference/Errors/Not_defined)" error — 这是因为`output()`函数的调用和输出变量的定义不在同一个函数作用域内 - 变量对这些函数调用是不可见的。

> **备注：** 相同的范围规则不适用于循环（for（）{...}）和条件块（if（）{...}） - 它们看起来非常相似，但它们不一样！小心不要让这些困惑。

> **备注：** ReferenceError："x"未定义错误是您遇到的最常见的错误。如果您收到此错误，并且确定您已经定义了该问题的变量，请检查它的范围。

### 函数内部的函数

请记住，您可以从任何地方调用函数，甚至可以在另一个函数中调用函数。这通常被用作保持代码整洁的方式 - 如果您有一个复杂的函数，如果将其分解成几个子函数，它更容易理解：

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

要确保函数调取的数值处在有效的作用域内。上面的例子中会产生一个错误提示，`ReferenceError：myValue is not define`，因为尽管`myValue`变量与函数调用指令处在同一个作用域中，但它却没有在函数内被定义 —— 实际代码在调用函数时就开始运行了。为了使代码正确运作，你必须将值作为参数传递给函数，如下所示：

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

## 测试你的技能！

你已经来到了本文章的结尾，但是你还能记得最重要的知识吗？你可以在离开这里找到一些更深度的测试来证实你已经记住了这些知识——查看[测试你的技能：函数](/zh-CN/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions)（英文）。后两章文本包含了这个测试需要的技能，所以你可能先需要阅读再尝试该测试。

## 总结

本文探讨了函数背后的基本概念，为之后的学习奠定了基础。下一步，我们将进行实践，并带你一步步建立起你自己的函数。

## 参见

- [Functions detailed guide](/zh-CN/docs/Web/JavaScript/Guide/Functions) — covers some advanced features not included here.
- [Functions reference](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [Default parameters](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Arrow functions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — advanced concept references

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}
