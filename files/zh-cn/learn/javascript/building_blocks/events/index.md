---
title: 事件介绍
slug: Learn/JavaScript/Building_blocks/Events
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

事件是您在编程时系统内发生的动作或者发生的事情，系统响应事件后，如果需要，您可以某种方式对事件做出回应。例如：如果用户在网页上单击一个按钮，您可能想通过显示一个信息框来响应这个动作。在这篇文章中，我们将讨论一些关于事件的重要概念，并且观察它们在浏览器上如何运行。这篇文章不会面面俱到，仅聚焦于您现阶段需要掌握的知识。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本电脑知识，对 HTML 和 CSS 的基本了解，及
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps"
          >JavaScript first steps</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解事件的基本理论，它们怎么在浏览器上运行的，以及在不同的编程环境下事件有何不同。
      </td>
    </tr>
  </tbody>
</table>

## 一系列事件

就像上面提到的，**事件**是您在编程时系统内发生的动作或者发生的事情——系统会在事件出现时产生或触发某种信号，并且会提供一个自动加载某种动作（列如：运行一些代码）的机制，比如在一个机场，当跑道清理完成，飞机可以起飞时，飞行员会收到一个信号，因此他们开始起飞。

![](mdn-mozilla-events-runway.png)

在 Web 中，事件在浏览器窗口中被触发并且通常被绑定到窗口内部的特定部分 — 可能是一个元素、一系列元素、被加载到这个窗口的 HTML 代码或者是整个浏览器窗口。举几个可能发生的不同事件：

- 用户在某个元素上点击鼠标或悬停光标。
- 用户在键盘中按下某个按键。
- 用户调整浏览器的大小或者关闭浏览器窗口。
- 一个网页停止加载。
- 提交表单。
- 播放、暂停、关闭视频。
- 发生错误。

如果您想看看更多其他的事件，请移步至 MDN 的[Event reference](/zh-CN/docs/Web/Events)。

每个可用的事件都会有一个**事件处理器**，也就是事件触发时会运行的代码块。当我们定义了一个用来回应事件被激发的代码块的时候，我们说我们**注册了一个事件处理器**。注意事件处理器有时候被叫做**事件监听器**——从我们的用意来看这两个名字是相同的，尽管严格地来说这块代码既监听也处理事件。监听器留意事件是否发生，然后处理器就是对事件发生做出的回应。

> **备注：** 网络事件不是 JavaScript 语言的核心——它们被定义成内置于浏览器的 JavaScript APIs。

### 一个简单的例子

让我们看一个简单的例子。前面您已经见到过很多事件和事件监听器，现在我们概括一下以巩固我们的知识。在接下来的例子中，我们的页面中只有一个 button，按下时，背景会变成随机的一种颜色。

```html
<button>Change color</button>
```

```css hidden
button { margin: 10px };
```

JavaScript 代码如下所示：

```js
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

我们使用 `btn` 变量存储 button，并使用了`Document.querySelector()` 函数。我们也定义了一个返回随机数字的函数。代码第三部分就是事件处理器。`btn`变量指向 button 元素，在 button 这种对象上可触发一系列的事件，因此也就可以使用事件处理器。我们通过将一个匿名函数（这个赋值函数包括生成随机色并赋值给背景色的代码）赋值给“点击”事件处理器参数，监听“点击”这个事件。

只要点击事件在`<button>`元素上触发，该段代码就会被执行。即每当用户点击它时，都会运行此段代码。

示例输出如下：

{{ EmbedLiveSample('一个简单的例子', '100%', 200) }}

### 这不仅应用在网页上

值得注意的是并不是只有 JavaScript 使用事件——大多的编程语言都有这种机制，并且它们的工作方式不同于 JavaScript。实际上，JavaScript 网页上的事件机制不同于在其他环境中的事件机制。

比如，[Node.js](/zh-CN/docs/Learn/Server-side/Express_Nodejs) 是一种非常流行的允许开发者使用 JavaScript 来建造网络和服务器端应用的运行环境。[Node.js event model](https://nodejs.org/docs/latest-v5.x/api/events.html) 依赖定期监听事件的监听器和定期处理事件的处理器——虽然听起来好像差不多，但是实现两者的代码是非常不同的，Node.js 使用像 on ( ) 这样的函数来注册一个事件监听器，使用 once ( ) 这样函数来注册一个在运行一次之后注销的监听器。 [HTTP connect event docs](https://nodejs.org/docs/latest-v5.x/api/http.html#http_event_connect) 提供了很多例子。

另外一个例子：您可以使用 JavaScript 来开发跨浏览器的插件（使用 [WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 开发技术。事件模型和网站的事件模型是相似的，仅有一点点不同——事件监听属性使用驼峰命名法（如`onMessage`而不是`onmessage`），还需要与 `addListener` 函数结合，参见 [runtime.onMessage page](/zh-CN/Add-ons/WebExtensions/API/runtime/onMessage#Examples) 上的一个例子。

您现在不需要掌握这些，我们只想表明不同的编程环境下事件机制是不同的，

## 使用网页事件的方式

您可以通过多种不同的方法将事件侦听器代码添加到网页，以便在关联的事件被触发时运行它。在本节中，我们将回顾不同的机制，并讨论应该使用哪些机制。

### 事件处理器属性

_这些是我们的课程中最常见到的代码 - 存在于事件处理程序过程的属性中_。回到上面的例子：

```js
const btn = document.querySelector('button');

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

这个 [`onclick`](/zh-CN/docs/Web/API/GlobalEventHandlers/onclick) 是被用在这个情景下的事件处理器的属性，它就像 button 其他的属性（如 [`btn.textContent`](/zh-CN/docs/Web/API/Node/textContent), or [`btn.style`](/zh-CN/docs/Web/API/HTMLElement/style)), 但是有一个特别的地方——当您将一些代码赋值给它的时候，只要事件触发代码就会运行。

您也可以将一个有名字的函数赋值给事件处理参数（正如我们在 [Build your own function](/zh-CN/docs/Learn/JavaScript/Building_blocks/Build_your_own_function) 中看到的），下面的代码也是这样工作的：

```js
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

有很多事件处理参数可供选择，我们来做一个实验。

首先将 [random-color-eventhandlerproperty.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerproperty.html) 复制到本地，然后用浏览器打开。别慌，这只是我们之前已经进行过的一个简单随机颜色的示例的代码复制。将 `btn.onclick` 依次换成其他值，在浏览器中观察效果。

- [`btn.onfocus`](/zh-CN/docs/Web/API/GlobalEventHandlers/onfocus)及[`btn.onblur`](/zh-CN/docs/Web/API/GlobalEventHandlers/onblur) — 颜色将于按钮被置于焦点或解除焦点时改变（尝试使用 Tab 移动至按钮上，然后再移开）。这些通常用于显示有关如何在置于焦点时填写表单字段的信息，或者如果表单字段刚刚填入不正确的值，则显示错误消息。
- [`btn.ondblclick`](/zh-CN/docs/Web/API/GlobalEventHandlers/ondblclick) — 颜色将仅于按钮被双击时改变。
- [`window.onkeypress`](/zh-CN/docs/Web/API/GlobalEventHandlers/onkeypress), [`window.onkeydown`](/zh-CN/docs/Web/API/GlobalEventHandlers/onkeydown), [`window.onkeyup`](/zh-CN/docs/Web/API/GlobalEventHandlers/onkeyup) — 当按钮被按下时颜色会发生改变。`keypress` 指的是通俗意义上的按下按钮 (按下并松开), 而 `keydown` 和 `keyup` 指的是按键动作的一部分，分别指按下和松开。注意如果你将事件处理器添加到按钮本身，它将不会工作 — 我们只能将它添加到代表整个浏览器窗口的 [window](/zh-CN/docs/Web/API/Window)对象中。
- [`btn.onmouseover`](/zh-CN/docs/Web/API/GlobalEventHandlers/onmouseover) 和 [`btn.onmouseout`](/zh-CN/docs/Web/API/GlobalEventHandlers/onmouseout) — 颜色将会在鼠标移入按钮上方时发生改变，或者当它从按钮移出时。

一些事件非常通用，几乎在任何地方都可以用（比如 onclick 几乎可以用在几乎每一个元素上），然而另一些元素就只能在特定场景下使用，比如我们只能在 video 元素上使用 [onplay](/zh-CN/docs/Web/API/GlobalEventHandlers/GlobalEventHandlers.onplay) 。

### 内联事件处理器——请勿使用

你也许在你的代码中看到过这么一种写法：

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

> **备注：** 您可以在[GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerattributes.html)上找到这个示例的完整源代码 (也可以[在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventhandlerattributes.html)).

在 Web 上注册事件处理程序的最早方法是类似于上面所示的**事件处理程序 HTML 属性**(也称为内联事件处理程序)—属性值实际上是当事件发生时要运行的 JavaScript 代码。上面的例子中调用一个在{{htmlelement("script")}}元素在同一个页面上，但也可以直接在属性内插入 JavaScript，例如：

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">Press me</button>
```

你会发现 HTML 属性等价于对许多事件处理程序的属性；但是，你不应该使用这些 —— 他们被认为是不好的做法。使用一个事件处理属性似乎看起来很简单，如果你只是在做一些非常快的事情，但很快就变得难以管理和效率低下。

一开始，您不应该混用 HTML 和 JavaScript，因为这样文档很难解析——最好的办法是只在一块地方写 JavaScript 代码。

即使在单一文件中，内置事件处理器也不是一个好主意。一个按钮看起来还好，但是如果有一百个按钮呢？您得在文件中加上 100 个属性。这很快就会成为维护人员的噩梦。使用 Java Script，您可以给网页中的 button 都加上事件处理器。就像下面这样：

```js
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}
```

> **备注：** 将您的编程逻辑与内容分离也会让您的站点对搜索引擎更加友好。

### addEventListener() 和 removeEventListener()

新的事件触发机制被定义在 [Document Object Model (DOM) Level 2 Events](https://www.w3.org/TR/DOM-Level-2-Events/) Specification, 这个细则给浏览器提供了一个函数 — [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)。这个函数和事件处理属性是类似的，但是语法略有不同。我们可以重写上面的随机颜色背景代码：

```js
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
```

> **备注：** 您可以在[Github](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-addeventlistener.html)上找到这个示例的完整源代码 (也可以 [在线运行](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-addeventlistener.html))。

在 `addEventListener()` 函数中，我们具体化了两个参数——我们想要将处理器应用上去的事件名称，和包含我们用来回应事件的函数的代码。注意将这些代码全部放到一个匿名函数中是可行的：

```js
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});
```

这个机制带来了一些相较于旧方式的优点。有一个相对应的方法，`removeEventListener()，`这个方法移除事件监听器。例如，下面的代码将会移除上个代码块中的事件监听器：

```js
btn.removeEventListener('click', bgChange);
```

在这个简单的、小型的项目中可能不是很有用，但是在大型的、复杂的项目中就非常有用了，可以非常高效地清除不用的事件处理器，另外在其他的一些场景中也非常有效——比如您需要在不同环境下运行不同的事件处理器，您只需要恰当地删除或者添加事件处理器即可。

您也可以给同一个监听器注册多个处理器，下面这种方式不能实现这一点：

```js
myElement.onclick = functionA;
myElement.onclick = functionB;
```

第二行会覆盖第一行，但是下面这种方式就会正常工作了：

```js
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

当元素被点击时两个函数都会工作：

此外，该事件机制还提供了许多其他强大的特性和选项。这对于本文来说有点超出范围，但是如果您想要阅读它们，请查看[`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)和[`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener)参考页面。

### 我该使用哪种机制？

在三种机制中，您绝对不应该使用 HTML 事件处理程序属性 - 这些属性已经过时了，而且也是不好的做法，如上所述。

另外两种是相对可互换的，至少对于简单的用途：

- 事件处理程序属性功能和选项会更少，但是具有更好的跨浏览器兼容性 (在 Internet Explorer 8 的支持下)，您应该从这些开始学起。
- DOM Level 2 Events (`addEventListener()`, etc.) 更强大，但也可以变得更加复杂，并且支持不足（只支持到 Internet Explorer 9）。但是您也应该尝试这个方法，并尽可能地使用它们。

第三种机制（DOM Level 2 Events (`addEventListener()`, etc.)）的主要优点是，如果需要的话，可以使用`removeEventListener()`删除事件处理程序代码，而且如果有需要，您可以向同一类型的元素添加多个监听器。例如，您可以在一个元素上多次调用`addEventListener('click', function() { ... })`，并可在第二个参数中指定不同的函数。对于事件处理程序属性来说，这是不可能的，因为后面任何设置的属性都会尝试覆盖较早的属性，例如：

```js
element.onclick = function1;
element.onclick = function2;
etc.
```

> **备注：** 如果您在工作中被要求支持比 Internet Explorer 8 更老的浏览器，那么您可能会遇到困难，因为这些古老的浏览器会使用与现代浏览器不同的事件处理模型。但是不要害怕，大多数 JavaScript 库 (例如 jQuery ) 都内置了能够跨浏览器差异的函数。在你学习 JavaScript 旅程里的这个阶段，不要太担心这个问题。

## 其他事件概念

本节我们将简要介绍一些与事件相关的高级概念。在这一点并不需要完全理解透彻，但它可能有助于你解释一些经常会遇到的代码模式。

### 事件对象

有时候在事件处理函数内部，您可能会看到一个固定指定名称的参数，例如`event`，`evt`或简单的`e`。这被称为**事件对象**，它被自动传递给事件处理函数，以提供额外的功能和信息。例如，让我们稍稍重写一遍我们的随机颜色示例：

```js
function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);
```

> **备注：** 您可以在 Github 上查看这个示例的 [完整代码](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventobject.html) ，或者在这里查看 [实时演示](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)。

在这里，您可以看到我们在函数中包括一个事件对象`e`，并在函数中设置背景颜色样式在 `e.target` 上——它指的是按钮本身。事件对象 `e` 的 `target` 属性始终是事件刚刚发生的元素的引用。所以在这个例子中，我们在按钮上设置一个随机的背景颜色，而不是页面。

> **备注：** 您可以使用任何您喜欢的名称作为事件对象 - 您只需要选择一个名称，然后可以在事件处理函数中引用它。开发人员最常使用 e / evt / event，因为它们很简单易记。坚持标准总是很好。

当您要在多个元素上设置相同的事件处理程序时，`e.target`非常有用，并且在发生事件时对所有元素执行某些操作。例如，你可能有一组 16 块方格，当它们被点击时就会消失。用 e.target 总是能准确选择当前操作的东西（方格）并执行操作让它消失，而不是必须以更困难的方式选择它。在下面的示例中 (请参见[useful-eventtarget.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/useful-eventtarget.html)完整代码;也可以在线运行[running live](http://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)）我们使用 JavaScript 创建了 16 个`<div>`元素。接着我们使用 `document.querySelectorAll()`选择全部的元素，然后遍历每一个，为每一个元素都添加一个`onclick`单击事件，每当它们点击时就会为背景添加一个随机颜色。

```js
const divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
```

输出如下 (试着点击它 - 玩的开心):

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Useful event target example</title>
    <style>
      div {
        background-color: red;
        height: 100px;
        width: 25%;
        float: left;
      }
    </style>
  </head>
  <body>
    <script>
      for (let i = 1; i <= 16; i++) {
        const myDiv = document.createElement('div');
        document.body.appendChild(myDiv);
      }

      function random(number) {
        return Math.floor(Math.random()*number);
      }

      function bgChange() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        return rndCol;
      }

      const divs = document.querySelectorAll('div');

      for (let i = 0; i < divs.length; i++) {
        divs[i].onclick = function(e) {
          e.target.style.backgroundColor = bgChange();
        }
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('事件对象', '100%', 400) }}

你遇到的大多数事件处理器的事件对象都有可用的标准属性和函数（方法）（请参阅完整列表 `Event` 对象引用）。然而，一些更高级的处理程序会添加一些专业属性，这些属性包含它们需要运行的额外数据。例如，媒体记录器 API 有一个`dataavailable`事件，它会在录制一些音频或视频时触发，并且可以用来做一些事情 (例如保存它，或者回放)。对应的`ondataavailable`处理程序的事件对象有一个可用的数据属性。

### 阻止默认行为

有时，你会遇到一些情况，你希望事件不执行它的默认行为。最常见的例子是 Web 表单，例如自定义注册表单。当你填写详细信息并按提交按钮时，自然行为是将数据提交到服务器上的指定页面进行处理，并将浏览器重定向到某种“成功消息”页面（或 相同的页面，如果另一个没有指定。）

当用户没有正确提交数据时，麻烦就来了 - 作为开发人员，你希望停止提交信息给服务器，并给他们一个错误提示，告诉他们什么做错了，以及需要做些什么来修正错误。一些浏览器支持自动的表单数据验证功能，但由于许多浏览器不支持，因此建议你不要依赖这些功能，并实现自己的验证检查。我们来看一个简单的例子。

首先，一个简单的 HTML 表单，需要你填入名（first name）和姓（last name）

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p></p>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

这里我们用一个`onsubmit`事件处理程序（在提交的时候，在一个表单上发起`submit`事件）来实现一个非常简单的检查，用于测试文本字段是否为空。如果是，我们在事件对象上调用`preventDefault()`函数，这样就停止了表单提交，然后在我们表单下面的段落中显示一条错误消息，告诉用户什么是错误的：

```js
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
```

显然，这是一种非常弱的表单验证——例如，用户输入空格或数字提交表单，表单验证并不会阻止用户提交——这不是我们例子想要达到的目的。输出如下：

{{ EmbedLiveSample('阻止默认行为', '100%', 140) }}

> **备注：** 查看完整的源代码 [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/preventdefault-validation.html) (也可以 [running live](http://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) )

### 事件冒泡及捕获

最后即将介绍的这个主题你常常不会深究，但如果你不理解这个主题，就会十分痛苦。事件冒泡和捕捉是两种机制，主要描述当在一个元素上有两个相同类型的事件处理器被激活会发生什么。为了容易理解，我们来看一个例子——在新标签页打开这个[show-video-box.html](http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box.html) 例子（在这里可以查看源码 [source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html)）。也可以在下面查看：

{{ EmbedLiveSample('事件冒泡及捕获', '100%', 500) }}

这是一个非常简单的例子，它显示和隐藏一个包含 {{htmlelement("video")}} 元素的 {{htmlelement("div")}} 元素：

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.mp4" type="video/mp4">
    <source src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.webm" type="video/webm">
    <p>Your browser doesn't support HTML video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
  </video>
</div>
```

```css hidden
div {
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 480px;
  height: 380px;
  border-radius: 10px;
  background-color: #eee;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1));
}

.hidden {
  left: -50%;
}

.showing {
  left: 50%;
}

div video {
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

当“button”元素按钮被单击时，将显示视频，它是通过将改变 `<div>` 的 class 属性值从 `hidden` 变为 `showing`(这个例子的 CSS 包含两个 `class`，它们分别控制这个 `<div>` 盒子在屏幕上显示还是隐藏。)：

```js
const btn = document.querySelector('button');
const videoBox = document.querySelector('div');

function displayVideo() {
  if (videoBox.getAttribute('class') === 'hidden') {
    videoBox.setAttribute('class','showing');
  }
}

btn.addEventListener('click', displayVideo);
```

然后我们再添加几个`click`事件处理器，第一个添加在`<div>`元素上，第二个添加在`<video>`元素上。这个想法是当视频 (`<video>`）外 `<div>`元素内这块区域被单击时，这个视频盒子应该再次隐藏；当单击视频 (`<video>`）本身，这个视频将开始播放。

```js
videoBox.addEventListener('click', () => videoBox.setAttribute('class', 'hidden'));

const video = document.querySelector('video');

video.addEventListener('click', () => video.play());
```

但是有一个问题 - 当您点击`video`开始播放的视频时，它会在同一时间导致`<div>`也被隐藏。这是因为`video`在`<div>`之内 - `video`是`<div>`的一个子元素 - 所以点击`video`实际上是同时也运行`<div>`上的事件处理程序。

#### 对事件冒泡和捕捉的解释

当一个事件发生在具有父元素的元素上 (例如，在我们的例子中是`<video>`元素) 时，现代浏览器运行两个不同的阶段 - 捕获阶段和冒泡阶段。在捕获阶段：

- 浏览器检查元素的最外层祖先`<html>`，是否在捕获阶段中注册了一个`onclick`事件处理程序，如果是，则运行它。
- 然后，它移动到`<html>`中单击元素的下一个祖先元素，并执行相同的操作，然后是单击元素再下一个祖先元素，依此类推，直到到达实际点击的元素。

在冒泡阶段，恰恰相反：

- 浏览器检查实际点击的元素是否在冒泡阶段中注册了一个`onclick`事件处理程序，如果是，则运行它
- 然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，等等，直到它到达`<html>`元素。

在现代浏览器中，默认情况下，所有事件处理程序都在冒泡阶段进行注册。因此，在我们当前的示例中，当您单击视频时，这个单击事件从 `<video>`元素向外冒泡直到`<html>`元素。沿着这个事件冒泡线路：

- 它发现了`video.onclick...`事件处理器并且运行它，因此这个视频`<video>`第一次开始播放。
- 接着它发现了（往外冒泡找到的） `videoBox.onclick...`事件处理器并且运行它，因此这个视频`<video>`也隐藏起来了。

#### 用 stopPropagation() 修复问题

这是令人讨厌的行为，但有一种方法来解决它！标准事件对象具有可用的名为 [`stopPropagation()`](/zh-CN/docs/Web/API/Event/stopPropagation)的函数，当在事件对象上调用该函数时，它只会让当前事件处理程序运行，但事件不会在**冒泡**链上进一步扩大，因此将不会有更多事件处理器被运行 (不会向上冒泡)。所以，我们可以通过改变前面代码块中的第二个处理函数来解决当前的问题：

```js
video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};
```

你可以尝试把 [show-video-box.html source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html) 拷贝到本地，然后自己动手修复它，或者在 [show-video-box-fixed.html](http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html) 页面查看修复结果（也可以在这里 [source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box-fixed.html) 查看源码）。

> **备注：** 为什么我们要弄清楚捕捉和冒泡呢？那是因为，在过去糟糕的日子里，浏览器的兼容性比现在要小得多，Netscape（网景）只使用事件捕获，而 Internet Explorer 只使用事件冒泡。当 W3C 决定尝试规范这些行为并达成共识时，他们最终得到了包括这两种情况（捕捉和冒泡）的系统，最终被应用在现在浏览器里。

> **备注：** 如上所述，默认情况下，所有事件处理程序都是在冒泡阶段注册的，这在大多数情况下更有意义。如果您真的想在捕获阶段注册一个事件，那么您可以通过使用[`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)注册您的处理程序，并将可选的第三个属性设置为 true。

#### 事件委托

冒泡还允许我们利用事件委托——这个概念依赖于这样一个事实，如果你想要在大量子元素中单击任何一个都可以运行一段代码，您可以将事件监听器设置在其父节点上，并让子节点上发生的事件冒泡到父节点上，而不是每个子节点单独设置事件监听器。

一个很好的例子是一系列列表项，如果你想让每个列表项被点击时弹出一条信息，您可以将`click`单击事件监听器设置在父元素`<ul>`上，这样事件就会从列表项冒泡到其父元素`<ul>`上。

这个的概念在 David Walsh 的博客上有更多的解释，并有多个例子——看看[How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate).

## 结论

现在您应该知道在这个早期阶段您需要了解的所有 web 事件。如上所述，事件并不是 JavaScript 的核心部分——它们是在浏览器 Web APIs 中定义的。

另外，理解 JavaScript 在不同环境下使用不同的事件模型很重要——从 Web api 到其他领域，如浏览器 WebExtensions 和 Node.js(服务器端 JavaScript)。我们并不期望您现在了解所有这些领域，但是当您在学习 web 开发的过程中，理解这些事件的基础是很有帮助的。

如果你有什么不明白的地方，请重新阅读这篇文章，或者联系[contact us](/zh-CN/Learn#Contact_us)我们寻求帮助。

## 参见

- [Event order](http://www.quirksmode.org/js/events_order.html) (discussion of capturing and bubbling) — an excellently detailed piece by Peter-Paul Koch.
- [Event accessing](http://www.quirksmode.org/js/events_access.html) (discussing of the event object) — another excellently detailed piece by Peter-Paul Koch.
- [Event reference](/zh-CN/docs/Web/Events)

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
