---
title: EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
---

{{APIRef("DOM")}}

**EventTarget.addEventListener()** 方法将指定的监听器注册到 {{domxref("EventTarget")}} 上，当该对象触发指定的事件时，指定的回调函数就会被执行。事件目标可以是一个文档上的元素 {{domxref("Element")}}、{{domxref("Document")}} 和 {{domxref("Window")}}，也可以是任何支持事件的对象（比如 {{domxref("XMLHttpRequest")}}）。

> **备注：** *推荐*使用 `addEventListener()` 来注册一个事件监听器，理由如下：
>
> - 它允许为一个事件添加多个监听器。特别是对库、JavaScript 模块和其他需要兼容第三方库/插件的代码来说，这一功能很有用。
> - 相比于 `onXYZ` 属性绑定来说，它提供了一种更精细的手段来控制 `listener` 的触发阶段。（即可以选择捕获或者冒泡）。
> - 它对任何事件都有效，而不仅仅是 HTML 或 SVG 元素。

`addEventListener()` 的工作原理是将实现 {{domxref("EventListener")}} 的函数或对象添加到调用它的 {{domxref("EventTarget")}} 上的指定事件类型的事件侦听器列表中。如果要绑定的函数或对象已经被添加到列表中，该函数或对象不会被再次添加。

> **备注：** 如果先前向事件侦听器列表中添加过一个匿名函数，并且在之后的代码中调用 `addEventListener` 来添加一个功能完全相同的匿名函数，那么之后的这个匿名函数*也会*被添加到列表中。
>
> 实际上，即使使用*完全相同*的代码来定义一个匿名函数，这两个函数仍然存在区别，**在循环中也是如此**。在使用该方法的情况下，匿名函数的重复定义会带来许多麻烦，详见下文中的[内存问题](#内存问题)一节。

当一个 `EventListener` 在 `EventTarget` 正在处理事件的时候被注册到 `EventTarget` 上，它不会被立即触发，但可能在事件流后面的事件触发阶段被触发，例如可能在捕获阶段添加，然后在冒泡阶段被触发。

## 语法

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

### 参数

- `type`
  - : 表示监听[事件类型](/zh-CN/docs/Web/Events)的大小写敏感的字符串。
- `listener`
  - : 当所监听的事件类型触发时，会接收到一个事件通知（实现了 {{domxref("Event")}} 接口的对象）对象。`listener` 必须是一个实现了 {{domxref("EventListener")}} 接口的对象，或者是一个[函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)。有关回调本身的详细信息，请参阅[事件监听回调](#事件监听回调)
- `options` {{optional_inline}}

  - : 一个指定有关 `listener` 属性的可选参数对象。可用的选项如下：

    - `capture` {{optional_inline}}
      - : 一个布尔值，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。
    - `once` {{optional_inline}}
      - : 一个布尔值，表示 `listener` 在添加之后最多只调用一次。如果为 `true`，`listener` 会在其被调用之后自动移除。
    - `passive` {{optional_inline}}
      - : 一个布尔值，设置为 `true` 时，表示 `listener` 永远不会调用 `preventDefault()`。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看[使用 passive 改善滚屏性能](#使用_passive_改善滚屏性能)以了解更多。
    - `signal` {{optional_inline}}
      - : {{domxref("AbortSignal")}}，该 `AbortSignal` 的 {{domxref("AbortController/abort()", "abort()")}} 方法被调用时，监听器会被移除。

- `useCapture` {{optional_inline}}

  - : 一个布尔值，表示在 DOM 树中注册了 `listener` 的元素，是否要先于它下面的 `EventTarget` 调用该 `listener`。当 useCapture（设为 true）时，沿着 DOM 树向上冒泡的事件不会触发 listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 [DOM Level 3 事件](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)及 [JavaScript 事件顺序](https://www.quirksmode.org/js/events_order.html#link4)文档。如果没有指定，`useCapture` 默认为 `false`。

    > **备注：** 对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。捕获阶段的事件监听器会在任何非捕获阶段的事件监听器之前被调用。

- `wantsUntrusted` {{optional_inline}} {{Non-standard_inline}}
  - : 如果为 `true`，则事件处理程序会接收网页自定义的事件。此参数只适用于 Gecko（{{glossary("chrome")}} 的默认值为 `false`，其他常规网页的默认值为 `true`），主要用于附加组件的代码和浏览器本身。

### 返回值

无（{{jsxref("undefined")}}）。

## 用法说明

### 事件监听回调

事件监听器可以被指定为回调函数或一个对象（其 `handleEvent()` 方法用作回调函数）。

回调函数本身具有与 `handleEvent()` 方法相同的参数和返回值；也就是说，回调接受一个参数：一个基于 {{domxref("Event")}} 的对象，描述已发生的事件，并且它不返回任何内容。

例如，一个可同时处理 {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} 和 {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} 事件的函数如下：

```js
function eventHandler(event) {
  if (event.type === "fullscreenchange") {
    /* 处理 fullscreenchange 事件 */
  } else {
    /* 处理 fullscreenerror 事件 */
  }
}
```

### option 支持的安全检测

在旧版本的 DOM 的规定中，`addEventListener()` 的第三个参数是一个布尔值，表示是否在捕获阶段调用事件处理程序。随着时间的推移，很明显需要更多的选项。与其在方法之中添加更多参数（传递可选值将会变得异常复杂），倒不如把第三个参数改为一个包含了各种属性的对象，这些属性的值用来被配置删除事件侦听器的过程。

因为旧版本的浏览器（以及一些相对不算古老的）仍然假定第三个参数是布尔值，你需要编写一些代码来有效地处理这种情况。你可以对每一个你感兴趣的 options 值进行特性检测。

如果你想检测 `passive` 值，可以参考下面这个例子：

```js
let passiveSupported = false;

try {
  const options = {
    get passive() {
      // 该函数会在浏览器尝试访问 passive 值时被调用。
      passiveSupported = true;
      return false;
    },
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch (err) {
  passiveSupported = false;
}
```

这段代码为 `passive` 属性创建了一个带有 getter 函数的 `options` 对象；getter 设定了一个标识 `passiveSupported`，被调用后就会把其设为 `true`。那意味着如果浏览器检查 `options` 对象上的 `passive` 值时，`passiveSupported` 将会被设置为 `true`；否则它将保持 `false`。然后我们调用 `addEventListener()` 去设置一个指定这些选项的空事件处理器，这样如果浏览器将第三个参数认定为对象的话，这些选项值就会被检查。我们再调用 [`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener) 来移除事件处理器（注意：未被调用的事件处理器上的 `handleEvent()` 会被忽略）。

你可以利用这个方法检查 options 之中任一个值。只需使用与上面类似的代码，为选项设定一个 getter。

然后，当你想实际创建一个是否支持 options 的事件侦听器时，你可以这样做：

```js
someElement.addEventListener(
  "mouseup",
  handleMouseUp,
  passiveSupported ? { passive: true } : false,
);
```

我们在 `someElement` 这里添加了一个 {{domxref("Element/mouseup_event", "mouseup")}}。对于第三个参数，如果 `passiveSupported` 是 `true`，我们传递了一个 `passive` 值为 `true` 的 `options` 对象；如果相反的话，我们知道要传递一个布尔值，于是就传递 `false` 作为 `useCapture` 的参数。

如果你愿意，你可以用一个类似 [Modernizr](https://modernizr.com/docs) 或 [Detect It](https://github.com/rafrex/detect-it) 的第三方库来帮助你做这项测试。

你可以在 [Web Incubator Community Group](https://wicg.github.io/admin/charter.html) 里关于[`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) 的文章中了解更多。

## 示例

### 添加一个简单的监听器

这个例子用来展示如何使用 `addEventListener()` 监听鼠标点击一个元素的事件。

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

```js
// 改变 t2 内容的函数
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "three";
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

// 为 table 添加事件监听器
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

在这个例子中，`modifyText()` 是一个 `click` 事件的监听器，通过使用 `addEventListenter()` 注册到 table 对象上。在表格中任何位置单击都会触发事件并执行 `modifyText()`。

#### 结果

{{EmbedLiveSample('添加一个简单的监听器')}}

### 添加一个可被移除的监听器

这个例子用来展示如何使用 `addEventListenter()` 添加一个可被 {{domxref("AbortSignal")}} 移除的侦听器。

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

#### JavaScript

```js
// 为 table 添加可被移除的事件监听器
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// 改变 t2 内容的函数
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
    controller.abort(); // 当值变为 "three" 后，移除监听器
  }
}
```

在这个例子中，我们修改了上一个例子的代码。在第二行的内容变为 three 时，我们调用了传入 `addEventListener()` 的 {{domxref("AbortController")}} 中的 `abort()` 方法。如此，无论如何点击表格，第二行的内容都不会再发生改变，因为表格中的点击事件监听器已被移除。

#### 结果

{{EmbedLiveSample('添加一个可被移除的监听器')}}

### 带有匿名函数的监听器

现在我们来看看如何使用匿名函数来为事件监听器进行传参。

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

#### JavaScript

```js
// 改变 t2 内容的函数
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// 用匿名函数为 table 添加事件监听器
const el = document.getElementById("outside");
el.addEventListener(
  "click",
  function () {
    modifyText("four");
  },
  false,
);
```

请注意，侦听器是一个匿名函数，它封装了代码，然后代码可以将参数发送到 `modifyText()` 函数，该函数负责实际响应事件。

#### 结果

{{EmbedLiveSample('带有匿名函数的监听器')}}

### 带有箭头函数的监听器

这个例子用来展示如何通过箭头函数来实现一个监听器。

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

#### JavaScript

```js
// 改变 t2 内容的函数
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// 用箭头函数为 table 添加事件监听器
const el = document.getElementById("outside");
el.addEventListener(
  "click",
  () => {
    modifyText("four");
  },
  false,
);
```

#### 结果

{{EmbedLiveSample('带有箭头函数的监听器')}}

请注意尽管匿名函数和箭头函数有些类似，但是他们绑定不同的 `this` 对象。匿名函数（和所有传统的 Javascript 函数）创建他们独有的 `this` 对象，而箭头函数则继承绑定他所在函数的 `this` 对象。

这意味着在使用箭头函数时，原函数中可用的变量和常量在事件处理器中同样可用。

### options 用法示例

#### HTML

```html
<div class="outer">
  outer, once & none-once
  <div class="middle" target="_blank">
    middle, capture & none-capture
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      inner1, passive & preventDefault(which is not allowed)
    </a>
    <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
      inner2, none-passive & preventDefault(not open new page)
    </a>
  </div>
</div>
```

#### CSS

```css
.outer,
.middle,
.inner1,
.inner2 {
  display: block;
  width: 520px;
  padding: 15px;
  margin: 15px;
  text-decoration: none;
}
.outer {
  border: 1px solid red;
  color: red;
}
.middle {
  border: 1px solid green;
  color: green;
  width: 460px;
}
.inner1,
.inner2 {
  border: 1px solid purple;
  color: purple;
  width: 400px;
}
```

#### JavaScript

```js
const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");

const capture = {
  capture: true,
};
const noneCapture = {
  capture: false,
};
const once = {
  once: true,
};
const noneOnce = {
  once: false,
};
const passive = {
  passive: true,
};
const nonePassive = {
  passive: false,
};

outer.addEventListener("click", onceHandler, once);
outer.addEventListener("click", noneOnceHandler, noneOnce);
middle.addEventListener("click", captureHandler, capture);
middle.addEventListener("click", noneCaptureHandler, noneCapture);
inner1.addEventListener("click", passiveHandler, passive);
inner2.addEventListener("click", nonePassiveHandler, nonePassive);

function onceHandler(event) {
  alert("outer, once");
}
function noneOnceHandler(event) {
  alert("outer, none-once, default");
}
function captureHandler(event) {
  //event.stopImmediatePropagation();
  alert("middle, capture");
}
function noneCaptureHandler(event) {
  alert("middle, none-capture, default");
}
function passiveHandler(event) {
  // 在 passive 事件调用中不支持 preventDefault。
  event.preventDefault();
  alert("inner1, passive, open new page");
}
function nonePassiveHandler(event) {
  event.preventDefault();
  //event.stopPropagation();
  alert("inner2, none-passive, default, not open new page");
}
```

#### 结果

分别点击 outer、middle 和 inner 以查看选项的工作方式。

{{ EmbedLiveSample('options 用法示例', 600, 310, '') }}

在使用 `options` 对象中具体的值前，最好确保用户的浏览器支持它，因为这些是历史上并非所有浏览器都支持的附加功能。你可以查看 [option 支持的安全检测](#option_支持的安全检测)以了解更多

### 拥有多个 option 的监听器

你可以在 `options` 参数中设置多个 option。在以下示例中，我们将设置两个 option：

- `passive`，以确保 {{domxref("Event.preventDefault", "preventDefault()")}} 不会被调用
- `once`，以确保事件处理函数只会被调用一次。

#### HTML

```html
<button id="example-button">You have not clicked this button.</button>
<button id="reset-button">Click this button to reset the first button.</button>
```

#### JavaScript

```js
const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// 示例按钮的初始文本
const initialText = buttonToBeClicked.textContent;

// 点击示例按钮后显示的文本
const clickedText = "You have clicked this button.";

// 我们将事件监听器函数单独提出，以防止重复添加监听函数
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,
    once: true,
  });
}

// 当点击重置按钮后，示例按钮将被重置，并可以再次更新它自身的状态
resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();
```

#### 结果

{{EmbedLiveSample('拥有多个 option 的监听器')}}

## 备注

### 处理过程中 `this` 的值的问题

通常来说 {{jsxref("Operators/this","this")}} 的值是触发事件的元素的引用，这种特性在多个相似的元素使用同一个通用事件监听器时非常让人满意。

当使用 `addEventListener()` 为一个元素注册事件的时候，事件处理器里的 {{jsxref("Operators/this","this")}} 值是该元素的引用。其与传递给句柄的 event 参数的 `currentTarget` 属性的值一样。

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // 输出 my_element 的 className
  console.log(e.currentTarget === this); // 输出 `true`
});
```

需要注意的是，[箭头函数没有它自己的 `this` 上下文](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#没有单独的this)。

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // 警告：`this` 并不指向 `my_element`
  console.log(e.currentTarget === this); // 输出 `false`
});
```

如果一个事件的属性（例如 {{domxref("Element.click_event", "onclick")}}）是在 HTML 代码中指定的，则这个属性中的 JavaScript 语句实际上会被包裹在一个处理函数中，在这个处理函数中使用 `this` 的效果和使用 `addEventListener()` 来绑定事件的效果是一样的；`this` 的出现代表了元素的引用。

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` 指向 table 元素；输出 'my_table' -->
  …
</table>
```

注意到在一个函数里 `this` 调用的效果和[标准规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)里面是一样的。请看下面一个例子：

```html
<script>
  function logID() {
    console.log(this.id);
  }
</script>
<table id="my_table" onclick="logID();">
  <!-- 被调用时，`this` 指向全局（window）对象 -->
  …
</table>
```

这时，`logID()` 中的 `this` 的值会变成全局（{{domxref("Window")}}）对象的引用（在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中为 `undefined`）。

#### 使用 bind() 指定 `this` 的值

{{jsxref("Function.prototype.bind()")}} 方法可以让你为所有后续的调用建立一个固定的 `this` 上下文，以此解决因不同位置的函数调用带来的 `this` 指向不明晰的问题。然而，你仍然需要保持一份对监听器的引用，以便你可以在后续的代码中将其移除。

下面是一个使用/不使用 `bind()` 的例子：

```js
const Something = function (element) {
  // |this| is a newly created object
  this.name = "Something Good";
  this.onclick1 = function (event) {
    console.log(this.name); // undefined, as |this| is the element
  };

  this.onclick2 = function (event) {
    console.log(this.name); // 'Something Good', as |this| is bound to newly created object
  };

  // bind causes a fixed `this` context to be assigned to onclick2
  this.onclick2 = this.onclick2.bind(this);

  element.addEventListener("click", this.onclick1, false);
  element.addEventListener("click", this.onclick2, false); // Trick
};
const s = new Something(document.body);
```

另一种方法是使用 `handleEvent()` 这个特殊函数来捕获任何事件：

```js
const Something = function (element) {
  // |this| is a newly created object
  this.name = "Something Good";
  this.handleEvent = function (event) {
    console.log(this.name); // 'Something Good', as this is bound to newly created object
    switch (event.type) {
      case "click":
        // some code here…
        break;
      case "dblclick":
        // some code here…
        break;
    }
  };

  // Note that the listeners in this case are |this|, not this.handleEvent
  element.addEventListener("click", this, false);
  element.addEventListener("dblclick", this, false);

  // You can properly remove the listeners
  element.removeEventListener("click", this, false);
  element.removeEventListener("dblclick", this, false);
};
const s = new Something(document.body);
```

还有一种控制 _this_ 指向的方法，是给 `EventListener` 传递一个函数，来调用想要访问的对应作用域对象：

```js
class SomeClass {
  constructor() {
    this.name = "Something Good";
  }

  register() {
    const that = this;
    window.addEventListener("keydown", (e) => {
      that.someMethod(e);
    });
  }

  someMethod(e) {
    console.log(this.name);
    switch (e.keyCode) {
      case 5:
        // some code here…
        break;
      case 6:
        // some code here…
        break;
    }
  }
}

const myObject = new SomeClass();
myObject.register();
```

### 在使用监听器时进行数据交换

事件监听器看起来就像一个“孤岛”，要向它传入数据非常困难，更别说是要在它被调用后获取任何数据了。事件监听器仅仅接受[事件对象](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#事件对象)这一个自动传入的参数，并且它的返回值还会被忽略。那怎样才能与事件监听器交换数据呢？其实有很多种方法可以做到。

#### 使用 `this` 传入数据

[上文](#使用_bind_指定_this_的值)提到，你可以使用 `Function.prototype.bind()` 来以 `this` 作为媒介向监听器传值。

```js
const myButton = document.getElementById("my-button-id");
const someString = "Data";

myButton.addEventListener(
  "click",
  function () {
    console.log(this); // 预期输出：'Data'
  }.bind(someString),
);
```

这个方法适合在你无需关心监听器是在哪个 HTML 元素上触发的时候使用，好处是这样传值就好像是你在使用参数列表向监听器传值一样。

#### 巧用变量作用域传值

当外部作用域包含一个（使用 `const`、`let` 的）变量声明时，所有该作用域内声明的函数都可以访问该变量（查看[此链接](/zh-CN/docs/Glossary/Function#不同类型的函数)以了解外部/内部函数，以及[此链接](/zh-CN/docs/Web/JavaScript/Reference/Statements/var#隐式全局变量和外部函数作用域)以了解变量作用域）。因此，最简单的传入数据的方法就是使监听器所在的作用域可以访问到你所声明的变量。

```js
const myButton = document.getElementById("my-button-id");
let someString = "Data";

myButton.addEventListener("click", () => {
  console.log(someString); // 预期输出：'Data'

  someString = "Data Again";
});

console.log(someString); // 预期输出：'Data'（不可能是 'Data Again'）
```

> **备注：** 虽然内部作用域可以访问到外部 `const` 和 `let` 所声明的变量，但你在事件监听器内对变量所做的任何修改都不能在外部作用域内体现。为什么呢？因为在事件监听器被执行时，其外部作用域已经执行完毕了。

#### 使用对象进行数据交换

与 JavaScript 中的大部分函数不同，一个对象只要有被引用计数，它就会一直存在于内存之中。并且，对象可以拥有自己的属性，属性又可以被引用形式传递，使得它有潜力成为在作用域间传值的候选。让我们来试试。

> **备注：** 实际上，在 JavaScript 中，函数也是对象的一种。（因此，函数也可以有自己的对象，甚至可以在其执行结束后依旧存在于内存中，只要将其分配到一个永久存在于内存中的变量即可。）

因为只需一个变量引用就可以使对象的属性将数据存储在内存之中，你可以使用它与事件监听器进行数据交换，并且更改后的数据会被保留。请看下面这个例子：

```js
const myButton = document.getElementById("my-button-id");
const someObject = { aProperty: "Data" };

myButton.addEventListener("click", () => {
  console.log(someObject.aProperty); // 预期输出：'Data'

  someObject.aProperty = "Data Again"; // 更改值
});

setInterval(() => {
  if (someObject.aProperty === "Data Again") {
    console.log("Data Again: True");
    someObject.aProperty = "Data"; // 将值重置以等待下次事件调用
  }
}, 5000);
```

在这一例子中，虽然事件监听器和定时函数的作用域都在 `someObject.aProperty` 的值变更前执行完毕，但 `someObject` 仍被事件监听器和定时函数所*引用*而存在于内存中，这两个函数依然能访问到同样的数据（也就是说，当其中一方改变了数据，另一方可以对这一改变做出响应）。

> **备注：** 对象的是以引用方式存储于变量中的，也即变量中存储的只是对象的内存地址而已。在其他方面上，这也意味着“存储”这个对象的变量可以对其他引用（或“存储”）同一个对象的变量产生影响。当两个变量引用同一对象时（比如 `let a = b = {aProperty: 'Yeah'};`），仅对其中一个变量进行更改仍然会影响到另一个变量。

> **备注：** 基于对象存储于变量中的“引用”逻辑，你可以在一个函数执行完毕后返回一个对象以使其“保活”（使其保留在内存中且不丢失数据）。

### 内存问题

```js
const els = document.getElementsByTagName("*");

// 例一
for (let i = 0; i < els.length; i++) {
  els[i].addEventListener(
    "click",
    (e) => {
      /* 处理点击事件 */
    },
    false,
  );
}

// 例二
function processEvent(e) {
  /* 处理同样的点击事件 */
}

for (let i = 0; i < els.length; i++) {
  els[i].addEventListener("click", processEvent, false);
}
```

在上面的第一个例子中，一个新的（匿名）函数在每次循环中被创建一次。在第二个例子中，与之前的匿名函数功能相同的函数被用作事件监听器，但后者所带来的内存开销要更小一点，因为函数只被声明过一次。此外，在第一个例子中，我们不能调用 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}，因为我们没有保留任何对匿名函数的引用（在例子的情况中，是没有保存对循环中创建的多个匿名函数的引用）。而在第二个例子中，`processEvent` 是一个可被引用的函数，因此可以调用 `myElement.removeEventListener("click", processEvent, false)`。

实际上，真正影响内存的并不是没有保持函数引用，而是没有保持*静态*的函数引用。

### 使用 passive 改善滚屏性能

将 `passive` 设为 `true` 可以启用性能优化，并可大幅改善应用性能，正如下面这个例子：

```js
/* 检测浏览器是否支持该特性 */
let passiveIfSupported = false;

try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get() {
        passiveIfSupported = { passive: true };
      },
    }),
  );
} catch (err) {}

window.addEventListener(
  "scroll",
  (event) => {
    /* do something */
    // 不能使用 event.preventDefault();
  },
  passiveIfSupported,
);
```

根据规范，`addEventListener()` 的 `passive` 默认值始终为 `false`。然而，这引入了触摸事件和滚轮事件的事件监听器在浏览器尝试滚动页面时阻塞浏览器主线程的可能性——这可能会大大降低浏览器处理页面滚动时的性能。

为了避免这一问题，大部分浏览器（Safari 和 Internet Explorer 除外）将文档级节点 {{domxref("Window")}}、{{domxref("Document")}} 和 {{domxref("Document.body")}} 上的 {{domxref("Element/wheel_event", "wheel")}}、{{domxref("Element/mousewheel_event", "mousewheel")}}、{{domxref("Element/touchstart_event", "touchstart")}} 和 {{domxref("Element/touchmove_event", "touchmove")}} 事件的 `passive` 默认值更改为 `true`。如此，事件监听器便不能[取消事件](/zh-CN/docs/Web/API/Event/preventDefault)，也不会在用户滚动页面时阻止页面呈现。

> **备注：** 若你想要了解哪些浏览器（或特定浏览器的哪一个版本）具体实现了上述功能，请参见下方的浏览器兼容性表。

因此，当你想要覆盖这一行为并确认 `passive` 在所有浏览器中都被设为 `false`，你必须显式地将其设为 `false`，而不是依赖浏览器的默认设置。

不过，你无需担心基本 {{domxref("Element/scroll_event", "scroll")}} 事件的 `passive` 值。因为该事件不能被取消，事件监听器也就无法阻止页面的渲染。

### 旧版本浏览器

在不支持 `addEventListener()` 的 `options` 参数的旧浏览器上，尝试使用它会阻止使用 `useCapture` 参数而不正确使用[特征检测](#option_支持的安全检测)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("EventTarget.removeEventListener()")}}
- [创建和触发自定义事件](/zh-CN/docs/Web/Events/Creating_and_triggering_events)
- [More details on the use of `this` in event handlers](https://www.quirksmode.org/js/this.html)
