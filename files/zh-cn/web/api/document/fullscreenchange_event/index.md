---
title: Document：fullscreenchange 事件
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("Fullscreen API")}}

**`fullscreenchange`** 事件会在浏览器进入或退出全屏模式后立即触发。

该事件被发送到正在进入或退出全屏模式的 `Element`，并且此事件会向上冒泡到 `Document` 对象。

要确定 `Element` 是进入还是退出全屏模式，请检查 {{domxref("Document.fullscreenElement")}} 的值：如果此值为 `null`，则表示该元素正在退出全屏模式，否则表示该元素正在进入全屏模式。

此事件不能被取消。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}} 类型

## 示例

### 打印 `fullscreenchange` 事件

在此示例中，向 {{domxref("Document")}} 添加了 `fullscreenchange` 事件处理器。

如果用户单击“切换全屏模式”按钮，`click` 处理器将切换 `div` 的全屏模式。如果 `document.fullscreenElement` 具有值，则会退出全屏模式。否则，div 将被置于全屏模式。

请记住，在处理 `fullscreenchange` 事件时，元素的状态已经发生了变化。因此，如果更改是为了全屏模式，`document.fullscreenElement` 将指向现在处于全屏模式的元素。另一方面，如果 `document.fullscreenElement` 为 `null`，则全屏模式已被取消。

对于示例代码，这意味着，如果元素当前处于全屏模式，则 `fullscreenchange` 处理器在控制台中打印全屏元素的 `id`。如果 `document.fullscreenElement` 为 `null`，则代码记录消息表示更改是为了退出全屏模式。

#### HTML

```html
<h1>fullscreenchange 事件示例</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">切换全屏模式</button>
  <pre id="logger"></pre>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

#fullscreen-div {
  height: 150px;
  padding: 1rem;
  background-color: pink;
}

#logger {
  height: 80px;
  padding: 0 0.5rem;
  background-color: white;
  overflow: scroll;
}
```

#### JavaScript

```js
const logger = document.querySelector("#logger");
const fullScreenElement = document.querySelector("#fullscreen-div");

function log(message) {
  logger.textContent = `${logger.textContent}\n${message}`;
}

function fullscreenchangeHandler(event) {
  // 如果有元素处于全屏模式，则 document.fullscreenElement 将指向该元素。如果没有元素处于全屏模式，则该属性的值为 null。
  if (document.fullscreenElement) {
    log(`元素：${document.fullscreenElement.id} 进入全屏模式。`);
  } else {
    log("退出全屏模式。");
  }
}

document.addEventListener("fullscreenchange", fullscreenchangeHandler);

// 在切换按钮被点击时，将会进入或退出全屏模式
document.getElementById("toggle-fullscreen").addEventListener("click", () => {
  if (document.fullscreenElement) {
    // exitFullscreen 方法只能在 Document 对象上使用。
    document.exitFullscreen();
  } else {
    fullScreenElement.requestFullscreen();
  }
});
```

{{EmbedLiveSample("打印 fullscreenchange 事件", 640, 250, "", "", "", "fullscreen")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document/fullscreenerror_event", "fullscreenerror")}}
- {{domxref("Element")}}：{{domxref("Element/fullscreenchange_event", "fullscreenchange")}} 事件
- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [全屏 API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
