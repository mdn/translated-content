---
title: Window：blur 事件
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("UI Events")}}

**`blur`** 事件在元素失去焦点时触发。

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

处理此事件期间，{{DOMxRef("Document.activeElement")}} 的值因浏览器而异（[Firefox bug 452307](https://bugzil.la/452307)）：IE10 将其设为焦点将要移向的元素，而 Firefox 和 Chrome 往往将其设为文档的 `body`。

## 参见

- 相关事件：{{domxref("Window/focus_event", "focus")}}
- `Element` 目标上的这个事件：{{domxref("Element/blur_event", "blur")}} 事件
