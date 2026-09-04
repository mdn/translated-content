---
title: Element：scrollBy() 方法
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("CSSOM view API")}}

{{domxref("Element")}} 接口的 **`scrollBy()`** 方法可使元素按给定的距离滚动。

## 语法

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### 参数

- `xCoord`
  - : 你希望横向滚动的像素值。
- `yCoord`
  - : 你希望纵向滚动的像素值。
- `options`
  - : 包含以下属性的对象：
    - `top` {{optional_inline}}
      - : 指定沿 Y 轴滚动窗口或元素的像素数。
    - `left` {{optional_inline}}
      - : 指定沿 X 轴滚动窗口或元素的像素数。
    - `behavior` {{optional_inline}}
      - : 决定滚动是瞬时完成还是平滑动画。该选项为字符串，必须取以下值之一：
        - `smooth`：滚动以平滑动画方式进行。
        - `instant`：滚动以单次跳跃瞬时完成。
        - `auto`：滚动行为由该元素上 {{cssxref("scroll-behavior")}} CSS 属性的计算值决定。

        若省略，`behavior` 默认为 `auto`。

### 返回值

一个 {{jsxref("Promise")}}，兑现为一个包含以下属性的对象：

- `interrupted`
  - : 一个布尔值，指示滚动操作是否被中断（`true`）或未被中断（`false`）。此类中断通常发生在一次程序化滚动正在进行时，又在同一元素上发起另一次程序化滚动，且前一次尚未完成的情况。

## 示例

### 基本用法

```js
// 滚动某个元素
element.scrollBy(300, 300);
```

使用 `options`：

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### 响应滚动结束

我们的 [element 方法演示](https://mdn.github.io/dom-examples/scroll-promises/element-methods/)（[查看源代码](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)）展示了如何使用 `scrollBy()` 的 Promise 返回值来响应滚动操作的结束。该技巧主要适用于滚动随时间平滑进行的情况（通过将 [`behavior`](#behavior) 选项设为 `smooth`，或将滚动元素的 {{cssxref("scroll-behavior")}} 属性设为 `smooth` 来实现）。

#### HTML

我们的 HTML 包含一个装有若干段落内容的 {{htmlelement("section")}} 元素，以及一个包含 {{htmlelement("button")}} 元素的工具栏 {{htmlelement("div")}}，这些按钮会对 `<section>` 触发各种滚动操作。

```html
<div>
  <button class="scroll">scroll() 到 1000</button>
  <button class="scroll-to">scrollTo() 顶部</button>
  <button class="scroll-by">scrollBy() 200</button>
  <button class="scroll-into-view">将最后一个 &lt;p&gt; 滚入视图</button>
</div>

<section>...</section>
```

#### CSS

我们为 `<section>` 元素设置固定的 {{cssxref("height")}}，并将 {{cssxref("overflow-y")}} 设为 `scroll` 以使其可纵向滚动，同时将其 {{cssxref("scroll-behavior")}} 属性设为 `smooth`，从而使任何滚动操作都以随时间平滑的动画方式进行，而不是瞬时完成。

```css
section {
  border: 1px solid black;
  padding: 20px;
  margin-top: 60px;
  height: 500px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
```

我们还创建了两个类选择器；当对元素应用 `fade-out` 或 `fade-in` 类时，会应用 {{cssxref("animation")}}，使其分别平滑淡出或淡入。我们还定义了 {{cssxref("@keyframes")}} 块，以定义这些动画所需的 {{cssxref("opacity")}} 变化。

```css
.fade-out {
  animation: fade-out 0.3s linear both;
}

.fade-in {
  animation: fade-in 0.3s linear both;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

为简洁起见，其余 CSS 未予展示。

#### JavaScript

我们首先获取运行 `scrollBy()` 操作的 `<button>`、工具栏 `<div>` 以及可滚动的 `<section>` 的引用：

```js
const scrollByBtn = document.querySelector(".scroll-by");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

接下来，我们定义名为 `isInterrupted()` 的函数，用于在滚动操作完成时运行，并以布尔值 `interrupted` 作为参数。它会向控制台输出一条消息，说明滚动已完成，并指示操作是否被中断（`interrupted` 为 `true`）或未被中断。此外，如果 `interrupted` 为 `true`，它会调用 `alert()` 以明确提示中断。

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

点击按钮时，我们立即为工具栏应用 `fade-out` 类，使其淡出。然后对 `<section>` 运行 `scrollBy(0, 200)`，使其内容向下滚动 200 像素，同时等待其 Promise 兑现并将 `result` 存入常量。Promise 兑现后，我们调用 `isInterrupted()` 报告滚动操作已完成以及是否被中断。最后，为工具栏应用 `fade-in` 类，使其再次淡入。

```js
scrollByBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scrollBy(0, 200);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

为简洁起见，与 `scrollBy()` 无关的代码未予展示。

#### 结果

点击按钮以查看滚动行为。请注意：按下按钮时工具栏会淡出，平滑滚动结束后再淡入。也可以先按一个按钮，再在第一次滚动操作完成前迅速按下另一个按钮。请注意，在这些情况下，滚动会被报告为已中断。

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

你也可以[在单独的标签页中加载演示](https://mdn.github.io/dom-examples/scroll-promises/element-methods/)并查看[源代码](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)。

#### 关于特性检测的补充说明

如果你在不支持返回 Promise 的滚动操作的浏览器中运行此示例，滚动操作仍然平滑，但工具栏不会在操作完成后淡出再淡入。特性检测由名为 `supportsScrollPromises()` 的函数处理，它会运行一次滚动操作并测试其返回值是否为 Promise：

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

查看[源代码](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js)以了解特性检测的用法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
