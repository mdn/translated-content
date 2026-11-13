---
title: Window：blur 事件
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("UI Events")}}

**`blur`** 事件在窗口失去焦点（例如用户将焦点从页面移至地址栏）时触发。在此之前，焦点可能位于文档的视口或其中的某个元素上。

与 `blur` 相反的是 {{domxref("Window/focus_event", "focus")}}。

此事件不可取消，也不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## 事件类型

{{domxref("FocusEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("FocusEvent")}}

## 示例

### 实时示例

本示例在文档失去焦点时更改其外观。它使用 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 监听 {{domxref("Window/focus_event", "focus")}} 和 `blur` 事件。

#### HTML

```html
<p id="log">点击此文档使其获得焦点。</p>
```

#### CSS

```css
.paused {
  background: #dddddd;
  color: #555555;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

function pause() {
  document.body.classList.add("paused");
  log.textContent = "失去焦点！";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent = "此文档拥有焦点。点击文档外部可失去焦点。";
}

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
```

#### 结果

{{EmbedLiveSample("实时示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Window/focus_event", "focus")}}
- `Element` 目标上的这个事件：{{domxref("Element/blur_event", "blur")}} 事件
