---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 672033be010ddec986fd7e12fd01297995ecc9b0
---

{{APIRef("Popover API")}}

**`ToggleEvent`** 接口表示当元素的状态发生改变时通知用户的事件。

它为 `HTMLElement` 的 {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} 和 {{domxref("HTMLElement.toggle_event", "toggle")}} 事件提供事件对象，这两个事件会在弹出框元素在显示与隐藏状态间切换时（分别在切换前与切换后）触发。

- `beforetoggle` 在[弹出框](/zh-CN/docs/Web/API/Popover_API)和 {{htmlelement("dialog")}} 元素上触发
  `toggle` 在[弹出框](/zh-CN/docs/Web/API/Popover_API)、{{htmlelement("dialog")}} 元素和 {{htmlelement("details")}} 元素上触发

{{InheritanceDiagram}}

## 构造函数

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}}
  - : 创建一个 `ToggleEvent` 对象。

## 实例属性

_此接口继承其父接口 {{DOMxRef("Event")}} 的属性。_

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : 一个字符串（取值为 `"open"` 或 `"closed"`），表示元素转换后的状态。
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : 一个字符串（取值为 `"open"` 或 `"closed"`），表示元素转换前的状态。

## 示例

### 基础示例

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("弹出窗口正在显示");
  } else {
    console.log("弹出窗口正在隐藏");
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [弹出框 API](/zh-CN/docs/Web/API/Popover_API)
- [`beforetoggle` 事件](/zh-CN/docs/Web/API/HTMLElement/beforetoggle_event)
- [`toggle` 事件](/zh-CN/docs/Web/API/HTMLElement/toggle_event)
