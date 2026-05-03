---
title: "Event: stopImmediatePropagation() 方法"
short-title: stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("Event")}} 接口的 **`stopImmediatePropagation()`** 方法阻止监听同一事件的其他事件监听器被调用。

如果多个事件监听器被附加到相同元素的相同事件类型上，当此事件触发时，它们会按其被添加的顺序被调用。如果在其中一个事件监听器中执行 `stopImmediatePropagation()`，则该元素上以及任何其他元素上的剩余监听器都不会被调用。

## 语法

```js-nolint
stopImmediatePropagation()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 比较事件阻止函数

下面的示例包含三个嵌套的 div 元素，每个 div 内都有一个按钮。每个按钮都注册了三个 click 事件监听器，每个 div 也注册了一个 click 事件监听器。

- 顶部按钮允许正常的事件传播。
- 中间按钮在其第一个事件处理程序中调用 `stopPropagation()`。
- 底部按钮在其第一个事件处理程序中调用 `stopImmediatePropagation()`。

#### HTML

```html
<h2>点击按钮</h2>
<div>
  外层 div<br />
  <div>
    中层 div<br />
    <div>
      内层 div<br />
      <button>允许传播</button><br />
      <button id="stopPropagation">停止传播</button><br />
      <button id="stopImmediatePropagation">立即停止传播</button>
    </div>
  </div>
</div>
<pre></pre>
```

#### CSS

```css
div {
  display: inline-block;
  padding: 10px;
  background-color: white;
  border: 2px solid black;
  margin: 10px;
}

button {
  width: 100px;
  color: #000088;
  padding: 5px;
  background-color: white;
  border: 2px solid black;
  border-radius: 30px;
  margin: 5px;
}
```

#### JavaScript

```js
const outElem = document.querySelector("pre");

/* 清空输出 */
document.addEventListener(
  "click",
  () => {
    outElem.textContent = "";
  },
  true,
);

/* 为按钮设置事件监听器 */
document.querySelectorAll("button").forEach((elem) => {
  for (let i = 1; i <= 3; i++) {
    elem.addEventListener("click", (evt) => {
      /* 在第一个事件处理程序中进行传播停止操作 */
      if (i === 1 && elem.id) {
        evt[elem.id]();
        outElem.textContent += `事件处理程序 1 调用了 ${elem.id}()\n`;
      }

      outElem.textContent += `在"${elem.textContent}"按钮上处理了 click 事件 ${i}\n`;
    });
  }
});

/* 为 div 设置事件监听器 */
document
  .querySelectorAll("div")
  .forEach((elem) =>
    elem.addEventListener(
      "click",
      (evt) =>
        (outElem.textContent += `在"${elem.firstChild.data.trim()}"上处理了 click 事件\n`),
    ),
  );
```

#### 结果

每个 click 事件处理程序在被调用时都会显示一条状态消息。如果你按下中间的按钮，你会看到 `stopPropagation()` 允许在该按钮上注册的所有 click 事件处理程序执行，但阻止了 div 的 click 事件处理程序执行（通常情况下会执行）。然而，如果你按下底部的按钮，`stopImmediatePropagation()` 会停止调用该方法的事件之后的所有事件传播。

{{ EmbedLiveSample("比较事件阻止函数", 500, 550) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
