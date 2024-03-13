---
title: 元素：focus 事件
slug: Web/API/Element/focus_event
---

**`focus`** 事件在元素获取焦点时触发。这个事件和 {{domxref("Element/focusin_event", "focusin")}} 最大的区别仅仅在于后者会事件冒泡。

`focus` 与 {{domxref("Element/blur_event", "blur")}} 正好相反。

该事件不可取消，也不会冒泡。

## 语法

在象 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称或设置事件处理器属性。

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## 事件属性

_该接口还从其父级 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承属性。_

- {{domxref("FocusEvent.relatedTarget")}}
  - : 一个 {{domxref("EventTarget")}}，表示此事件的次要目标。在某些情况下（例如切换到当前标签页或离开当前标签页），处于安全原因，该属性可能会被设置为 `null`。

## 示例

### 简单示例

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input" />
  <input type="password" placeholder="password" />
</form>
```

#### 结果

{{EmbedLiveSample("简单示例", '100%', '50px')}}

### 事件委托

此事件有两个可以实现事件委托的方法：通过在支持的浏览器上使用 {{domxref("Element/focusin_event", "focusin")}} 事件，或者通过设置 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 的参数`useCapture` 值为 `true`。

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input" />
  <input type="password" placeholder="password" />
</form>
```

#### JavaScript

```js
const form = document.getElementById("form");

form.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "pink";
  },
  true,
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);
```

#### 结果

{{EmbedLiveSample("事件委托", '100%', '50px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关的事件：{{domxref("Element/blur_event", "blur")}}、{{domxref("Element/focusin_event", "focusin")}}、{{domxref("Element/focusout_event", "focusout")}}
- 在 `Window` 目标上的该事件：{{domxref("Window/focus_event", "focus")}} 事件
- [Focusing: focus/blur](https://javascript.info/focus-blur)
