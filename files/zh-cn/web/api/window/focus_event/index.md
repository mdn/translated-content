---
title: Window：focus 事件
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

当元素获得焦点时，**`focus`** 事件就会触发。

与 `focus` 相反的事件是 {{domxref("Window/blur_event", "blur")}}，此事件不可取消，也不会冒泡。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## 事件类型

一个 {{domxref("FocusEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("FocusEvent")}}

## 事件属性

_此接口从它的父级继承了属性 {{domxref("UIEvent")}}，间接来自于 {{domxref("Event")}}。_

- {{domxref("FocusEvent.relatedTarget")}}
  - : {{domxref("EventTarget")}} 代表此次事件的次要目标。在一些案例中（例如切换浏览器 tab 标签时），出于安全的原因，这个属性可能会被设置为 `null`。

## 示例

### 在线示例

本示例在失去焦点时更改文档的外观。它使用 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 监听 `focus` 和 {{domxref("Window/blur_event", "blur")}} 事件。

#### HTML

```html
<p id="log">Click on this document to give it focus.</p>
```

#### CSS

```css
.paused {
  background: #ddd;
  color: #555;
}
```

#### JavaScript

```js
function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "This document has focus. Click outside the document to lose focus.";
}

const log = document.getElementById("log");

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
```

#### 结果

{{EmbedLiveSample("在线示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 相关联事件： {{domxref("Window/blur_event", "blur")}}
- `Element` 目标上的这个事件：{{domxref("Element/focus_event", "focus")}} 事件
