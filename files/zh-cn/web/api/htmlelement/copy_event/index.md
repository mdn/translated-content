---
title: HTMLElement：copy 事件
slug: Web/API/HTMLElement/copy_event
l10n:
  sourceCommit: dea44952741f722ccf62f8e868d1bc988e953aa0
---

{{ APIRef("HTML DOM") }}

**`copy`** 事件在用户通过浏览器的用户界面开始复制操作时触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## 事件类型

{{domxref("ClipboardEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ClipboardEvent")}}

## 事件属性

_也从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("DataTransfer")}} 对象，其包含用户发起的 {{domxref("HTMLElement/cut_event", "cut")}}、`copy` 或 {{domxref("HTMLElement/paste_event", "paste")}} 操作所影响的数据，以及它的 MIME 类型。

## 示例

此示例阻止每一次对 {{htmlElement("textarea")}} 的复制和粘贴的尝试。

### HTML

```html
<h3>试一下这个文本区域：</h3>
<textarea id="editor" rows="3">
尝试对该字段复制和粘贴文本！
</textarea>

<h3>日志：</h3>
<p id="log"></p>
```

### JavaScript

```js
const log = document.getElementById("log");

function logCopy(event) {
  log.innerText = `已阻止复制！\n${log.innerText}`;
  event.preventDefault();
}

function logPaste(event) {
  log.innerText = `已阻止粘贴！\n${log.innerText}`;
  event.preventDefault();
}

const editor = document.getElementById("editor");

editor.oncopy = logCopy;
editor.onpaste = logPaste;
```

### 结果

{{EmbedLiveSample("示例", 700, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件
  - {{domxref("HTMLElement.cut_event")}}
  - {{domxref("HTMLElement.paste_event")}}
