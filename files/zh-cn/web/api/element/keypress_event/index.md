---
title: 元素：keypress 事件
slug: Web/API/Element/keypress_event
---

{{APIRef}} {{deprecated_header}}

当按下产生字符或符号值的键时，将触发 `keypress` 事件。

产生字符值的键包括字母、数字和标点符号键。不产生字符值的键是修饰键，例如 <kbd>Alt</kbd>、<kbd>Shift</kbd>、<kbd>Ctrl</kbd> 或 <kbd>Meta</kbd> 键。

> **警告：** 由于此事件已被弃用，你应该改用 {{domxref("HTMLElement.beforeinput_event", "beforeinput")}} 或 {{domxref("Element.keydown_event", "keydown")}}。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("keypress", (event) => {});

onkeypress = (event) => {};
```

## 事件类型

{{DOMxRef("KeyboardEvent")}}。继承自 {{DOMxRef("Event")}}。

{{InheritanceDiagram("KeyboardEvent")}}

## 事件属性

_该接口还继承了其父接口 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 的属性。_

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}

  - : 返回一个布尔值，如果在发生此事件时按下 <kbd>Alt</kbd>（macOS 上的 <kbd>Option</kbd> 或 <kbd>⌥</kbd>）键，则返回 `true`。

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}

  - : 返回一个字符串，其中包含由事件表示的物理键的代码值。

    > **警告：** 此方法忽略用户的键盘布局，因此，如果用户按下 QWERTY 键盘布局中“Y”位置（在主键盘区域上方的一行中间），即使用户使用 QWERTZ 键盘（这意味着用户期望“Z”，而且所有其他属性都指示为“Z”）或 Dvorak 键盘布局（其中用户期望“F”），此方法仍将始终返回“KeyY”。如果你想向用户显示正确的按键信息，则可以使用 {{domxref("Keyboard.getLayoutMap()")}} 方法。

- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}

  - : 返回一个布尔值，如果生成键事件时 <kbd>Ctrl</kbd> 键处于激活状态，则为 `true`。

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}

  - : 返回一个布尔值，如果事件在 `compositionstart` 之后、`compositionend` 之前触发，则为 `true`。

- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}

  - : 返回一个字符串，表示由事件表示的键的键值。

- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : 返回一个表示键盘配置的区域设置的语言环境字符串。如果浏览器或设备不知道键盘的语言环境，则可能是空字符串。

    > **备注：** 这并不描述正在输入的数据的区域设置。用户可能在使用一种键盘布局时在输入不同语言的文本。

- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}

  - : 返回一个数字，表示键在键盘或其他输入设备上的位置。标识位置的常量列表如上面的键盘位置部分所示。

- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}

  - : 如果在生成按键事件时 <kbd>Meta</kbd> 键（在 Mac 键盘上是 <kbd>⌘ Command</kbd> 键，在 Windows 键盘上是 Windows 键（<kbd>⊞</kbd>））处于活动状态，则返回一个布尔值，该布尔值为 `true`。

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}

  - : 如果该按键被按住并且正在生成自动重复事件，则此函数返回一个布尔值 `true`。

- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}

  - : 如果在生成按键事件时 <kbd>Shift</kbd> 键处于激活状态，则返回一个布尔值，该布尔值为 `true`。

## 示例

### addEventListener 按键示例

该示例在聚焦 {{HtmlElement("input")}} 元素后，每当你按下一个键时，记录 {{domxref("KeyboardEvent.code")}} 的值。

```html
<div>
  <label for="sample">请将光标放在 input 元素上并输入一些内容：</label>
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

{{EmbedLiveSample("示例")}}

### 等同于 onkeypress

```js-nolint
input.onkeypress = logKey;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 事件同样也适用于 {{domxref("Document")}} 接口。
- 相关事件：
  - [`input`](/zh-cn/docs/Web/API/HTMLElement/input_event)
  - [`keydown`](/zh-cn/docs/Web/API/Element/keydown_event)
  - [`keyup`](/zh-cn/docs/Web/API/Element/keyup_event)
