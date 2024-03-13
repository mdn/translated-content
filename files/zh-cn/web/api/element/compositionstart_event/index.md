---
title: compositionstart
slug: Web/API/Element/compositionstart_event
---

{{APIRef}}

文本合成系统如 {{glossary("input method editor")}}（即输入法编辑器）开始新的输入合成时会触发 **`compositionstart`** 事件。

例如，当用户使用拼音输入法开始输入汉字时，这个事件就会被触发。

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Bubbles</strong></td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Cancelable</strong></td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td>{{domxref("CompositionEvent")}}</td>
    </tr>
    <tr>
      <td><strong>Event handler property</strong></td>
      <td>
        <table>
          <tbody>
            <tr>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

## 示例

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionstart", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### 动态演示

#### HTML

```html
<div class="control">
  <label for="name"
    >On macOS, click in the textbox below,<br />
    then type <kbd>option</kbd> + <kbd>`</kbd>, then <kbd>a</kbd>:</label
  >
  <input type="text" id="example" name="example" />
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="25"></textarea>
  <button class="clear-log">Clear</button>
</div>
```

```css hidden
body {
  padding: 0.2rem;
  display: grid;
  grid-template-areas: "control  log";
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

#### JS

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector(".event-log-contents");
const clearLog = document.querySelector(".clear-log");

clearLog.addEventListener("click", () => {
  log.textContent = "";
});

function handleEvent(event) {
  log.textContent = log.textContent + `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);
```

#### 结果

{{ EmbedLiveSample('动态演示', '100%', '180px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}.
