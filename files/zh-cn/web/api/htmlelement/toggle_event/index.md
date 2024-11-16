---
title: HTMLElement：toggle 事件
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 接口的 **`toggle`** 事件会在{{domxref("Popover_API", "弹出框", "", "nocode")}}元素、{{htmlelement("dialog")}} 元素或 {{htmlelement("details")}} 元素刚刚显示或隐藏后触发。

- 如果元素从隐藏过渡到显示，则 [`event.oldState`](/zh-CN/docs/Web/API/ToggleEvent/oldState) 属性会被设置为 `closed` 而 [`event.newState`](/zh-CN/docs/Web/API/ToggleEvent/newState) 属性会被设置为 `open`。
- 如果元素从显示过渡到隐藏，则 `event.oldState` 会是 `open` 而 `event.newState` 会是 `closed`。

此事件不[可取消](/zh-CN/docs/Web/API/Event/cancelable)。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## 事件类型

{{domxref("ToggleEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ToggleEvent")}}

## 示例

以下示例代码演示了如何使用{{domxref("Popover_API", "弹出框", "", "nocode")}}的 `toggle` 事件。相同的代码也可以相同的方式用于 {{htmlelement("dialog")}} 或 {{htmlelement("details")}} 元素。

### 基础示例

此示例显示了如何监听 `toggle` 事件并记录结果。

#### HTML

```html
<button popovertarget="mypopover">打开/关闭弹出框</button>
<div id="mypopover" popover>弹出框的内容</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

以下代码为 `toggle` 事件添加事件处理器，并记录其状态。

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("已显示弹出框");
  } else {
    console.log("已隐藏弹出框");
  }
});
```

#### 结果

{{EmbedLiveSample("基础示例", '100%', '250px')}}

### 关于 toggle 事件合并的备注

如果在事件循环开始一个循环之前触发了多个 `toggle` 事件，则只会触发一次事件。这被称为“事件合并”。

例如：

```js
popover.addEventListener("toggle", () => {
  //……
});

popover.showPopover();
popover.hidePopover();
// `toggle` 仅触发一次
```

### 其他示例

- `HTMLDialogElement` 中的[打开模态框](/zh-CN/docs/Web/API/HTMLDialogElement#打开模态框)示例

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`popover`](/zh-CN/docs/Web/HTML/Global_attributes/popover) HTML 全局属性
- [弹出框 API](/zh-CN/docs/Web/API/Popover_API)
- 相关事件：[`beforetoggle`](/zh-CN/docs/Web/API/HTMLElement/beforetoggle_event)
