---
title: Element：focus 事件
slug: Web/API/Element/focus_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

**`focus`** 事件在元素获得焦点时触发。此事件不会冒泡，但随后触发的相关 {{domxref("Element/focusin_event", "focusin")}} 事件会冒泡。

与 `focus` 相反的是 {{domxref("Element/blur_event", "blur")}} 事件，该事件在元素*失去*焦点时触发。

`focus` 事件不可取消。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("focus", (event) => { })

onfocus = (event) => { }
```

## 事件类型

{{domxref("FocusEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("FocusEvent")}}

## 示例

### 简单示例

#### HTML

```html
<form id="form">
  <label>
    一些文本：
    <input type="text" placeholder="文本输入" />
  </label>
  <label>
    密码：
    <input type="password" placeholder="密码" />
  </label>
</form>
```

#### JavaScript

```js
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
```

#### 结果

{{EmbedLiveSample("简单示例", '100%', '50px')}}

### 事件委托

实现此事件的事件委托有两种方式：使用 {{domxref("Element/focusin_event", "focusin")}} 事件，或者将 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 的 `useCapture` 参数设为 `true`。

#### HTML

```html
<form id="form">
  <label>
    一些文本：
    <input type="text" placeholder="文本输入" />
  </label>
  <label>
    密码：
    <input type="password" placeholder="密码" />
  </label>
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

- {{domxref("HTMLElement.focus()")}} 方法
- 相关事件：{{domxref("Element/blur_event", "blur")}}、{{domxref("Element/focusin_event", "focusin")}}、{{domxref("Element/focusout_event", "focusout")}}
- `Window` 目标上的这个事件：{{domxref("Window/focus_event", "focus")}} 事件
- [聚焦：focus/blur](https://javascript.info/focus-blur)
