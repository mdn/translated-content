---
title: 事件处理器（概述）
slug: Web/Events/Event_handlers
---

事件是浏览器窗口内触发的信号，用于通知浏览器或操作系统环境的变化。程序员可以创建用于在事件触发时运行的*事件处理器*代码，使网页能够适当地响应变化。

本页提供了有关如何使用事件和事件处理器的非常简短的“提醒”。新开发人员应阅读[事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)。

## 有哪些可用事件？

事件记录在产生事件的 JavaScript 对象的页面中和/或页面下方。例如，要了解浏览器窗口或当前文档触发的事件，请参阅 [`Window`](/zh-CN/docs/Web/API/Window#事件) 和 [`Document`](/zh-CN/docs/Web/API/Document#事件) 中的事件部分。

你可以使用[事件参考](/zh-CN/docs/Web/Events#事件索引)查找哪些 JavaScript 对象会触发特定 API 的事件，例如动画、媒体等。

## 注册事件处理器

有两种推荐的注册处理器的方法。可以将事件处理器代码赋值给目标元素对应的 _onevent_ 属性，或使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法将处理器注册为元素的监听器，从而在事件触发时运行事件处理器的代码。无论哪种情况，处理器都将接收一个符合 [`Event` 接口](/zh-CN/docs/Web/API/Event)的对象。主要区别在于可以使用事件监听器方法添加（或删除）多个事件处理器。

> [!WARNING]
> 不推荐使用 HTML onevent 属性设置事件处理器的第三种方法！它们会使标签变长，从而降低了可读性且变得难以调试。有关详细信息，请参阅[内联事件处理器](/zh-CN/docs/Learn_web_development/Core/Scripting/Events#内联事件处理器——不要使用)。

### 使用 onevent 属性

按照惯例，触发事件的 JavaScript 对象都有相应的“onevent”属性（以事件名称加前缀“on”命名）。当事件触发时，这些属性会被调用以运行相关的处理器的代码，也可能被你自己的代码直接调用。

要设置事件处理器的代码，只需将其赋值给相应的 onevent 属性即可。一个元素的每个事件只能分配一个事件处理器。如果需要，可以通过将另一个函数赋值给相同的属性来替换处理器。

下面我们将展示如何使用 `onclick` 属性为 `click` 事件设置一个简单的 `greet()` 函数。

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

请注意，代表事件的对象会作为第一个参数传递给事件处理器。此事件对象实现或派生自 {{domxref("Event")}} 接口。

### EventTarget.addEventListener

在元素上设置事件处理器的最灵活的方法是使用 {{domxref("EventTarget.addEventListener")}} 方法。这种方法允许为一个元素分配多个监听器，并在需要时*删除*监听器（使用 {{domxref("EventTarget.removeEventListener")}} 方法）。

> [!NOTE]
> 添加和删除事件处理器的功能允许你在不同情况下执行不同的操作，例如，让同一个按钮执行不同的操作。此外，在更复杂的程序中，清理旧的或未使用的事件处理器可以提高效率。

下面我们展示了如何将一个简单的 `greet()` 函数设置为 `click` 事件的监听器/事件处理器（如果需要，你可以使用匿名函数代替具名函数）。请再次注意，事件（event）会作为第一个参数传递给事件处理器。

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

该方法还可以使用其他参数/选项来控制捕获和删除事件的方式。更多信息请参阅 {{domxref("EventTarget.addEventListener")}} 参考页面。

#### 使用终止信号

事件监听器的一个显著特点是可以使用终止信号同时清理多个事件处理器。

具体做法是将相同的 {{domxref("AbortSignal")}} 传递给所有你想要可以一起移除的事件处理器的 {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 调用。然后，你可以在拥有“AbortSignal”（终止信号）的控制器上调用 {{domxref("AbortController/abort()", "abort()")}}，这样就能移除通过该信号添加的所有事件处理器。例如，要添加一个可以使用 `AbortSignal` 移除的事件处理器：

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // 将 AbortSignal 传递给该处理器
```

然后，通过上面代码创建的事件处理器可以这样移除：

```js
controller.abort(); // 移除与此控制器关联的任何/所有事件处理器
```

<section id="Quick_links">
  <ol>
    <li><a href="/zh-CN/docs/Learn_web_development/Core/Scripting/Events">事件介绍</a></li>
    <li><a href="/zh-CN/docs/Web/Events">事件参考</a></li>
  </ol>
</section>
