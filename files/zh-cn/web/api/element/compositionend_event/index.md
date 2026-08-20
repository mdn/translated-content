---
title: Element：compositionend 事件
short-title: compositionend
slug: Web/API/Element/compositionend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

**`compositionend`** 事件在诸如{{glossary("input method editor", "输入法编辑器")}}之类的文本组合系统完成或取消当前组合会话时，会在该元素上触发。

例如，用户使用[汉语拼音](https://zh.wikipedia.org/wiki/汉语拼音){{glossary("Input method editor", "输入法编辑器")}}完成输入一个汉字后，可能触发此事件。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("compositionend", (event) => { })

oncompositionend = (event) => { }
```

## 事件类型

{{domxref("CompositionEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("CompositionEvent")}}

## 示例

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionend", (event) => {
  console.log(`生成的字符为：${event.data}`);
});
```

### 运行实例

#### HTML

```html
<div class="control">
  <p>先选中文本框，然后打开输入法：</p>
  <ul>
    <li>在 macOS 上按 <kbd>option</kbd> + <kbd>`</kbd></li>
    <li>在 Windows 上按 <kbd>windows</kbd> + <kbd>.</kbd></li>
  </ul>
  <label for="example">示例输入</label>
  <input type="text" id="example" name="example" />
</div>

<div class="event-log">
  <label for="eventLog">事件日志：</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="25"
    id="eventLog"></textarea>
  <button class="clear-log">清除</button>
</div>
```

```css hidden
body {
  padding: 0.2rem;
  display: grid;
  grid-template-areas: "control log";
}

.control {
  grid-area: control;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

input[type="text"] {
  margin: 0.5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

#### JavaScript

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector(".event-log-contents");
const clearLog = document.querySelector(".clear-log");

clearLog.addEventListener("click", () => {
  log.textContent = "";
});

function handleEvent(event) {
  log.textContent += `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);
```

#### 结果

{{EmbedLiveSample('运行实例', '100%', '180px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Element/compositionstart_event", "compositionstart")}}、{{domxref("Element/compositionupdate_event", "compositionupdate")}}。
