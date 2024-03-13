---
title: BroadcastChannel：message 事件
slug: Web/API/BroadcastChannel/message_event
---

{{APIRef}}

当频道收到一条消息时，会在关联的 {{domxref('BroadcastChannel')}} 对象上触发 `message` 事件。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("message", (event) => {});
onmessage = (event) => {};
```

## 事件类型

一个 {{domxref("MessageEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MessageEvent")}}

## 事件属性

_除了下面列出的属性之外，还可以使用父接口 {{domxref("Event")}} 的属性。_

- {{domxref("MessageEvent.data", "data")}} {{readonlyInline}}
  - : 由消息发送者发送的数据。
- {{domxref("MessageEvent.origin", "origin")}} {{readonlyInline}}
  - : 一个表示消息发送者来源的字符串。
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{readonlyInline}}
  - : 一个表示事件唯一 ID 的字符串。
- {{domxref("MessageEvent.source", "source")}} {{readonlyInline}}
  - : 一个*消息事件源*，可以是一个用于表示消息发送者的 {{glossary("WindowProxy")}}、{{domxref("MessagePort")}} 或 {{domxref("ServiceWorker")}} 对象。
- {{domxref("MessageEvent.ports", "ports")}} {{readonlyInline}}
  - : 一个与发送消息（通过频道发送消息或向 SharedWorker 发送消息）的频道相关联的 {{domxref("MessagePort")}} 对象的数组。

## 示例

在这个示例中，有一个 [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe) 作为发送者，当用户点击按钮之后，会广播 [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea) 中的内容。同时，有两个 `iframe` 作为接收者，会监听广播的消息，并将结果写入 [`<div>`](/zh-CN/docs/Web/HTML/Element/div) 元素。

### 发送者

```html hidden
<h1>发送者</h1>
<label for="message">请输入要广播的信息：</label><br />
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">广播信息</button>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 150px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}

textarea {
  padding: 0.2rem;
}

label,
br {
  margin: 0.5rem 0;
}

button {
  vertical-align: top;
  height: 1.5rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
const messageControl = document.querySelector("#message");
const broadcastMessageButton = document.querySelector("#broadcast-message");

broadcastMessageButton.addEventListener("click", () => {
  channel.postMessage(messageControl.value);
});
```

### 接收者 1

```html hidden
<h1>接收者 1</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### 接收者 2

```html hidden
<h1>接收者 2</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### 结果

{{ EmbedLiveSample('发送者', '100%', 220) }}

{{ EmbedLiveSample('接收者 1', '100%', 160) }}

{{ EmbedLiveSample('接收者 2', '100%', 160) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：[`messageerror`](/zh-CN/docs/Web/API/BroadcastChannel/messageerror_event)。
