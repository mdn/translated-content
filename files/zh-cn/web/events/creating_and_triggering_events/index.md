---
title: 创建和触发事件
slug: Web/Events/Creating_and_triggering_events
---

本文演示了如何创建和分派 DOM 事件。这些事件通常称为**合成事件**，而不是浏览器本身触发的事件。

## 创建自定义事件

可以使用 [`Event`](/zh-CN/docs/Web/API/Event) 构造函数创建事件，如下所示：

```js
const event = new Event("build");

// 监听该事件。
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// 分派该事件。
elem.dispatchEvent(event);
```

上述代码使用了 [EventTarget.dispatchEvent()](/zh-CN/docs/Web/API/EventTarget/dispatchEvent) 方法。

绝大多数现代浏览器中都支持这个构造函数。要了解更为复杂的方法，可参考下面的[过时的方式](#过时的方式)。

### 添加自定义数据——CustomEvent()

要向事件对象添加更多数据，可以使用 [CustomEvent](/zh-CN/docs/Web/API/CustomEvent) 接口，**detail** 属性可用于传递自定义数据。
例如，可以像这样创建事件：

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

下面的代码允许你在事件监听器中访问更多的数据：

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### 过时的方式

早期的创建事件的方法使用了受 Java 启发的 API。下面是一个使用 {{domxref("document.createEvent()")}} 的示例：

```js
// 创建事件。
const event = document.createEvent("Event");

// 定义事件的名称为“build”。
event.initEvent("build", true, true);

// 监听该事件。
elem.addEventListener(
  "build",
  (e) => {
    // e.target 与 elem 相匹配
  },
  false,
);

// 目标（target）可以是任何元素或其他 EventTarget。
elem.dispatchEvent(event);
```

### 事件冒泡

通常需要从子元素触发事件，并让其祖先捕获它；且可以带有数据：

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// 创建一个新事件，允许冒泡，并提供要传递给“detail”属性的任何数据
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// 表单（form）元素监听自定义的“awesome”事件，然后在控制台打印传递的 text() 方法的输出
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// 当用户输入时，表单中的文本区域会分派/触发事件，并以自身为事件的起点
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### 动态创建和分派事件

元素可以监听尚未创建的事件：

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // 动态创建并分派/触发一个事件
  // 注意：我们还可以使用“函数表达式”（而不是“箭头函数表达式”），这样“this”将表示该元素
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## 触发内置事件

下面的示例演示了使用 DOM 方法在复选框上模拟点击（click）（即，通过编程方法生成 click 事件）。[参见这个动态示例。](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // 处理器调用了 preventDefault。
    alert("cancelled");
  } else {
    // 没有处理器调用 preventDefault。
    alert("not cancelled");
  }
}
```

## 参见

- [CustomEvent()](/zh-CN/docs/Web/API/CustomEvent/CustomEvent)
- {{domxref("document.createEvent()")}}
- {{domxref("Event.initEvent()")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- {{domxref("EventTarget.addEventListener()")}}

<section id="Quick_links">
  <ol>
    <li><a href="/zh-CN/docs/Learn_web_development/Core/Scripting/Events">事件介绍</a></li>
    <li><a href="/zh-CN/docs/Web/Events/Event_handlers">事件处理器（概述）</a></li>
    <li><a href="/zh-CN/docs/Web/Events">事件参考</a></li>
  </ol>
</section>
