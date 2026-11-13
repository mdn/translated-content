---
title: Element：keydown 事件
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

**`keydown`** 事件在某个键被按下时触发。

与已弃用的 {{domxref("Element/keypress_event", "keypress")}} 事件不同，`keydown` 事件会针对所有按键触发，无论它们是否产生字符值。

`keydown` 和 [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event) 事件提供一个表明按下了哪个键的代码，而 `keypress` 表明输入了哪个字符。例如，小写字母“a”在 `keydown` 和 `keyup` 中会被报告为 65，但在 `keypress` 中为 97。所有事件均将大写字母“A”报告为 65。

按键事件的事件目标是当前正在处理键盘操作的焦点元素。这包括：{{HTMLElement("input")}}、{{HTMLElement("textarea")}}、任何设置了 [`contentEditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/contenteditable) 的元素，以及其他可通过键盘交互的元素，例如 {{HTMLElement("a")}}、{{HTMLElement("button")}} 和 {{HTMLElement("summary")}}。如果没有合适的元素处于焦点，事件目标将是 {{HTMLElement("body")}} 或根元素。此事件会[冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)。它可以到达 {{domxref("Document")}} 和 {{domxref("Window")}}。

不同按键事件之间，事件目标可能会改变。例如，按下 <kbd>Tab</kbd> 键时，`keydown` 的目标会与 `keyup` 的目标不同，因为焦点已经改变。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("keydown", (event) => { })

onkeydown = (event) => { }
```

## 事件类型

{{domxref("KeyboardEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("KeyboardEvent")}}

## 示例

### addEventListener keydown 示例

每当你在 {{HtmlElement("input")}} 元素内按下某个键时，此示例会记录 {{domxref("KeyboardEvent.code")}} 的值。

```html
<input placeholder="点这里，然后按下某个键。" size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keydown_示例")}}

### 使用 IME 时的 keydown 事件

从 Firefox 65 开始，`keydown` 和 [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event) 事件现在会在{{glossary("Input method editor", "输入法编辑器")}}的组合期间触发，以提升 CJKT 用户的跨浏览器兼容性（[Firefox bug 354358](https://bugzil.la/354358)）。要忽略所有属于组合过程的 `keydown` 事件，可以像下面这样做（229 是与已被 IME 处理的事件相关的 `keyCode` 特殊值）：

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // 执行某些操作
});
```

> [!NOTE]
> 键入打开输入法的第一个字符时，`compositionstart` 可能在 `keydown` *之后*触发；键入关闭输入法的最后一个字符时，`compositionend` 可能在 `keydown` *之前*触发。在这些情况下，即使事件属于组合过程，`isComposing` 仍为 `false`。不过，此时 {{domxref("KeyboardEvent.keyCode")}} 仍为 `229`，因此尽管 `keyCode` 已弃用，仍建议一并检查它。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`input`](/zh-CN/docs/Web/API/Element/input_event)
- [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event)
- [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event)
