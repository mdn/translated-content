---
title: Element：keypress 事件
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

**`keypress`** 事件在按下[字母、数字、标点或符号](https://w3c.github.io/uievents/#unicode-character-categories)键时触发，或者在按下 <kbd>Enter</kbd> 键时触发——包括与 <kbd>Shift</kbd> 键或 <kbd>Ctrl</kbd> 键组合按下 <kbd>Enter</kbd> 的情况。否则，单独按下 <kbd>Alt</kbd>、<kbd>Shift</kbd>、<kbd>Ctrl</kbd>、<kbd>Meta</kbd>、<kbd>Esc</kbd> 或 <kbd>Option</kbd> 等修饰键时，*不会*触发 `keypress` 事件。

> [!WARNING]
> 由于此事件已被弃用，你应该改用 [`beforeinput`](/zh-CN/docs/Web/API/Element/beforeinput_event) 或 [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event)。

此事件会[冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)。它可以到达 {{domxref("Document")}} 和 {{domxref("Window")}}。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("keypress", (event) => { })

onkeypress = (event) => { }
```

## 事件类型

{{domxref("KeyboardEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("KeyboardEvent")}}

## 示例

### addEventListener keypress 示例

每当你在聚焦 {{htmlelement("input")}} 元素后按下某个键时，此示例会记录 {{domxref("KeyboardEvent.code")}} 的值。

要查看哪些键会触发 `keypress` 事件、哪些键不会，可以试着按下以下按键：

- 字母键、数字键和标点键
- 符号键，例如 <kbd>$</kbd>、<kbd>+</kbd>、<kbd>=</kbd>、<kbd>%</kbd> 和 <kbd>+</kbd> 键
- 修饰键，例如 <kbd>Alt</kbd>、<kbd>Shift</kbd>、<kbd>Ctrl</kbd>、<kbd>Meta</kbd>、<kbd>Esc</kbd>、<kbd>Option</kbd> 或 <kbd>⌘</kbd> 键
- <kbd>Enter</kbd> 键
- 与 <kbd>Shift</kbd> 或 <kbd>Ctrl</kbd> 键组合的 <kbd>Enter</kbd> 键
- 与 <kbd>Shift</kbd> 或 <kbd>Ctrl</kbd> 以外的修饰键组合的 <kbd>Enter</kbd> 键

```html
<div>
  <label for="sample">聚焦输入框并输入一些内容：</label>
  <input type="text" name="text" id="sample" />
</div>
<p id="log"></p>
```

```js
const log = document.getElementById("log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keypress_示例")}}

### 等效的 onkeypress

```js
input.onkeypress = logKey;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document")}} 接口，此事件也会以它为目标。
- 相关事件：
  - [`input`](/zh-CN/docs/Web/API/Element/input_event)
  - [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event)
  - [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event)
