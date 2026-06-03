---
title: 事件介绍
slug: Learn_web_development/Core/Scripting/Events
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

事件是你正在编程的系统中发生的事情，系统会告诉你有关这些事件的信息，以便你的代码能够对它们做出反应。

例如：如果用户在网页上单击一个按钮，你可能想通过显示一个信息框来响应这个动作。在这篇文章中，我们将讨论一些关于事件的重要概念，并且观察它们在浏览器上如何运行。这篇文章不会面面俱到，仅聚焦于你现阶段需要掌握的知识。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识，对 HTML 和 CSS 的基本了解，学习了 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting"
          >JavaScript 第一步</a
        >。
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

## 什么是事件？

事件是发生在你正在编程的系统中的事情——当事件发生时，系统产生（或“触发”）某种信号，并提供一种机制，当事件发生时，可以自动采取某种行动（即运行一些代码）。事件是在浏览器窗口内触发的，并倾向于附加到驻留在其中的特定项目。这可能是一个单一的元素，一组元素，当前标签中加载的 HTML 文档，或整个浏览器窗口。有许多不同类型的事件可以发生。

例如：

- 用户选择、点击或将光标悬停在某一元素上。
- 用户在键盘中按下某个按键。
- 用户调整浏览器窗口的大小或者关闭浏览器窗口。
- 网页结束加载。
- 表单提交。
- 视频播放、暂停或结束。
- 发生错误。

你可以从这里（以及从 MDN [事件参考](/zh-CN/docs/Web/API/Document_Object_Model/Events)文档）中看出，有**相当多**的事件可以被触发。

为了对一个事件做出反应，你要给它附加一个**事件处理器**。这是一个代码块（通常是你作为程序员创建的一个 JavaScript 函数），在事件发生时运行。当这样一个代码块被定义为响应一个事件而运行时，我们说我们在**注册一个事件处理器**。注意，事件处理器有时候被叫做**事件监听器**——从我们的用意来看这两个名字是相同的，尽管严格地来说这块代码既监听也处理事件。监听器留意事件是否发生，处理器对事件发生做出回应。

> [!NOTE]
> web 事件不是 JavaScript 语言的核心——它们被定义成内置于浏览器的 API。

### 示例：处理点击事件

在这个示例中，我们在页面中有一个 {{htmlelement("button")}} 元素：

```html
<button>改变颜色</button>
```

```css hidden
button {
  margin: 10px;
}
```

然后我们有一些 JavaScript。我们将在下一节中更详细地讨论这个问题，但现在我们可以说：它为按钮的 `"click"` 事件添加了一个事件处理器，该处理器对该事件的反应是将页面背景设置为随机颜色：

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

示例输出如下，试试点击按钮吧：

{{ EmbedLiveSample('示例：处理点击事件', '100%', 200, "", "") }}

## 使用 addEventListener()

正如我们在上一个示例中所看到的，能够触发事件的对象有一个 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 方法，这就是推荐的添加事件处理器的机制。

让我们仔细看一下上一个示例的代码：

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

HTML {{HTMLElement("button")}} 元素将在用户点击按钮时触发一个事件。所以它定义了一个 `addEventListener()` 函数，我们在这里调用它。我们要传入两个参数：

- 字符串 `"click"`，表示我们要监听点击事件。按钮可以触发很多其他的事件，比如当用户将鼠标移到按钮上时（[`"mouseover"`](/zh-CN/docs/Web/API/Element/mouseover_event) 事件），或者当用户按下一个键并且按钮被聚焦时（[`"keydown"`](/zh-CN/docs/Web/API/Element/keydown_event) 事件）。
- 当事件发生时所调用的函数。在我们的例子中，该函数生成一个随机的 RGB 颜色，并将页面 [`<body>`](/zh-CN/docs/Web/CSS/Reference/Properties/background-color) 的 [`background-color`](/zh-CN/docs/Web/HTML/Reference/Elements/body) 设置为该颜色。

把处理函数作为一个单独的具名函数也是可以的，像这样：

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
```

### 监听其他事件

有许多不同的事件可以由一个按钮元素来触发。让我们来做个实验。

首先，在本地创建 [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) 的副本，并在浏览器中打开。这只是我们已经玩过的简单的随机颜色示例的一个副本。现在试着依次将 `click` 改为以下不同的值，并观察示例中的结果：

- [`focus`](/zh-CN/docs/Web/API/Element/focus_event) 和 [`blur`](/zh-CN/docs/Web/API/Element/blur_event)：当按钮被聚焦或失焦时，颜色会改变；尝试按下 tab 键来聚焦于按钮，再次按下该键来使按钮失去焦点。这些事件通常用于在聚焦时显示填入表单字段的信息，或者在表单字段填入不正确的值时显示错误信息。
- [`dblclick`](/zh-CN/docs/Web/API/Element/dblclick_event)：颜色只在按钮被双击时改变。
- [`mouseover`](/zh-CN/docs/Web/API/Element/mouseover_event) 和 [`mouseout`](/zh-CN/docs/Web/API/Element/mouseout_event)：当鼠标指针在按钮上悬停，或指针移出按钮时，颜色分别会改变。

一些事件，如 `click`（点击事件），几乎对任何元素都可用。其他事件则更具体，只在某些情况下有用：例如，[`play`](/zh-CN/docs/Web/API/HTMLMediaElement/play_event) 事件只对某些元素有效，如 {{htmlelement("video")}} 元素。

### 移除监听器

如果你使用 `addEventListener()` 添加了一个事件处理器，你可以使用 [`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener) 方法再次删除它。例如，这将删除 `changeBackground()` 事件处理器：

```js
btn.removeEventListener("click", changeBackground);
```

事件处理器也可以通过传递 {{domxref("AbortSignal")}} 到 {{domxref("EventTarget/addEventListener()", "addEventListener()")}}，然后在拥有 `AbortSignal` 的控制器上调用{{domxref("AbortController/abort()", "abort()")}}，从而删除事件处理器。例如，要添加一个可以使用 `AbortSignal` 来删除的事件处理器，可以这样做：

```js-nolint
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // 向该处理器传递 AbortSignal
);
```

然后可以像这样删除上面代码创建的事件处理器：

```js
controller.abort(); // 移除任何/所有与该控制器相关的事件处理器
```

对于简单的小程序，清理旧的、未使用的事件处理器是没有必要的，但对于更大的、更复杂的程序，它可以提高效率。另外，删除事件处理器的能力允许你让同一个按钮在不同的情况下执行不同的动作：你所要做的就是添加或删除处理程序。

### 在单个事件上添加多个监听器

通过对 {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 的多次调用，每次提供不同的处理器，你可以为一个事件设置多个处理器：

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

当点击按钮时，所有处理器函数都会运行。

### 了解更多

对于 `addEventListener()` 来说，还有很多强大的特性和选项。

这些有些超出了本文的范畴，如果你想了解更多，请参见 [`addEventListener`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 和 [`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener) 参考页面。

## 其他事件监听器机制

我们推荐你使用 `addEventListener()` 来注册事件处理器。这是最强大的方法，在更复杂的程序中，它的扩展性最好。然而，还有两种注册事件处理器的方法，你可能会看到：*事件处理器属性*和*内联事件处理器*。

### 事件处理器属性

可以触发事件的对象（如按钮）通常也有属性，其名称是 `on`，后面是事件的名称。例如，元素有一个属性 `onclick`。这被称为*事件处理器属性*。为了监听事件，你可以将处理函数分配给该属性。

例如，我们可以像这样重写随机颜色示例：

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

你也可以将处理器属性分配给具名函数：

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

对于事件处理器属性，你不能为一个事件添加一个以上的处理程序。例如，你可以在一个元素上多次调用 `addEventListener('click', handler)`，并在第二个参数中指定不同的函数：

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

对于事件处理器属性来说，这是不可能的，因为任何后续尝试都会覆写较早设置的属性：

```js
element.onclick = function1;
element.onclick = function2;
```

### 内联事件处理器——不要使用

你可能也会在代码中看到这种形式：

```html
<button onclick="bgChange()">按下我</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

在 web 上发现的最早的注册事件处理器的方法涉及到[_事件处理器 HTML 属性_](/zh-CN/docs/Web/HTML/Reference/Attributes#event_handler_attributes)（或*内联事件处理器*），如示例所示。属性值就是你想在事件发生时运行的 JavaScript 代码。上面的示例调用了同一页面上 {{htmlelement("script")}} 元素内定义的一个函数，但你也可以直接在属性内插入 JavaScript，比如说：

```html
<button onclick="alert('你好，这是来自旧式事件处理器的一条消息');">
  按下我
</button>
```

你可以找到许多事件处理器属性的 HTML 属性的等价表示；但是，你不应该使用这些属性——它们被认为是不好的做法。如果你正在做一些非常快速的事情，使用事件处理器属性可能看起来很容易，但它们很快就会变得无法管理和低效。

首先，把你的 HTML 和你的 JavaScript 混在一起不是一个好主意，因为它变得难以阅读。把你的 JavaScript 分开是一个好的做法，如果它在一个单独的文件中，你可以把它应用到多个 HTML 文档中。

即使在单个文件中，内联事件处理器也不是个好主意。一个按钮是可以的，但如果你有 100 个按钮呢？你必须在文件中添加 100 个属性；这将很快变成一个维护的噩梦。通过使用 JavaScript，你可以很容易地为页面上的所有按钮添加一个事件处理函数，不管有多少个，使用这样的方法：

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

最后，作为一项安全措施，许多常见的服务器配置将禁止内联 JavaScript。

**你永远不应该使用 HTML 事件处理器属性**——那些已经过时了，使用它们是不好的做法。

## 事件对象

有时候在事件处理函数内部，你可能会看到一个固定指定名称的参数，例如 `event`、`evt` 或 `e`。这被称为**事件对象**，它被自动传递给事件处理函数，以提供额外的功能和信息。例如，让我们稍稍重写一遍我们的随机颜色示例：

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> [!NOTE]
> 你可以在 GitHub 上查看这个示例的[完整代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) ，或者在这里查看[实时演示](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)。

在这里，可以看到我们在函数中包括一个事件对象 `e`，并在函数中设置背景颜色样式在 `e.target` 上——它指的是按钮本身。事件对象 `e` 的 `target` 属性始终是事件刚刚发生的元素的引用。所以在这个例子中，我们在按钮上设置一个随机的背景颜色，而不是页面。

> [!NOTE]
> 可以使用任何喜欢的名称作为事件对象——只需要选择一个名称，然后可以在事件处理函数中引用它。开发人员最常使用 `e`/`evt`/`event`，因为它们很简单易记。保持一致总是好的——至少对自己。如果可能的话，对别人也是如此。

### 事件对象的额外属性

大多数事件对象都有一套标准的属性和方法，请参阅 {{domxref("Event")}} 对象参考，以获得完整的列表。

一些事件对象添加了与该特定类型的事件相关的额外属性。例如，{{domxref("Element/keydown_event", "keydown")}} 事件在用户按下一个键时发生。它的事件对象是 {{domxref("KeyboardEvent")}}，它是一个专门的 `Event` 对象，有一个 `key` 属性，告诉你哪个键被按下：

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

试着在文本框中输入文字，观察输出：

{{EmbedLiveSample("事件对象的额外属性", 100, 100)}}

## 阻止默认行为

有时，你会遇到一些情况，你希望事件不执行它的默认行为。最常见的例子是 Web 表单，例如自定义注册表单。当你填写详细信息并按提交按钮时，自然行为是将数据提交到服务器上的指定页面进行处理，并将浏览器重定向到某种“成功消息”页面（或相同的页面，如果另一个没有指定）。

当用户没有正确提交数据时，麻烦就来了——作为开发人员，你希望停止提交信息给服务器，并给他们一个错误提示，告诉他们什么做错了，以及需要做些什么来修正错误。一些浏览器支持自动的表单数据验证功能，但由于许多浏览器不支持，因此建议你不要依赖这些功能，并实现自己的验证检查。我们来看一个简单的例子。

首先，这里有一个简单的 HTML 表单，需要你填入名（first name）和姓（last name）：

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

接下来是 JavaScript 代码——这里我们在 [`submit`](/zh-CN/docs/Web/API/HTMLFormElement/submit_event) 事件（表单提交时触发提交事件）的处理程序中实现一个非常简单的检查，测试文本字段是否为空。如果是这样，我们就在事件对象上调用 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault) 函数，停止表单提交，然后在我们的表单下面的段落中显示错误信息，告诉用户出了什么问题：

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
```

显然，这是一种非常弱的表单验证——例如，用户输入空格或数字提交表单，表单验证并不会阻止用户提交——但对于演示来说已经足够。输出如下：

{{ EmbedLiveSample('阻止默认行为', '100%', 180) }}

> [!NOTE]
> 你可以在 GitHub 上查看这个示例的完整源代码 [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html)，也可以[在线运行它](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)。

## 并不只是网页

事件不是 JavaScript 独有的——大多数编程语言都有某种事件模型，而模型的工作方式往往与 JavaScript 的方式不同。事实上，网页的 JavaScript 的事件模型与其他环境中使用的 JavaScript 的事件模型也是不同的。

例如，[Node.js](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) 是一个非常流行的 JavaScript 运行时，使开发人员能够使用 JavaScript 来构建网络和服务器端应用程序。[Node.js 事件模型](https://nodejs.org/api/events.html)依靠监听器来监听事件，依靠发射器来定期发射事件。听起来没有什么不同，但代码却很不同，利用 `on()` 等函数来注册一个事件监听器，而 `once()` 则是注册一个一次性事件监听器，在运行一次后取消注册。[HTTP 连接事件文档](https://nodejs.org/api/http.html#event-connect)提供了一个很好的例子。

你也可以使用一种叫做 [WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 的技术编写 JavaScript，建立跨浏览器的附加组件（浏览器功能增强）。其中的事件模型类似于 Web 事件模型，但有点不同——事件监听器的属性是驼峰式的（如 `onMessage` 而不是 `onmessage`），需要与 `addListener` 函数相结合。参见 [`runtime.onMessage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#示例) 页面的示例。

在这个学习阶段，你不需要了解其他此类环境的情况；我们只是想让你明白，在不同的编程环境中，事件会有所不同。

## 结论

现在你应该知道在这个早期阶段需要了解的所有 web 事件。如上所述，事件并不是 JavaScript 的核心部分——它们是在浏览器 Web API 中定义的。

另外，理解 JavaScript 在不同环境下使用不同的事件模型很重要——从 Web API 到其他领域，如浏览器 WebExtensions 和 Node.js（服务器端 JavaScript）。我们并不期望现在了解所有这些领域，但是当你在学习 web 开发的过程中，理解这些事件的基础是很有帮助的。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}
