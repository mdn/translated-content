---
title: "Element：focusin 事件"
short-title: focusin
slug: Web/API/Element/focusin_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

当元素获得焦点时，**`focusin`** 事件会在 {{domxref("Element/focus_event", "focus")}} 事件之后触发。这两个事件的区别在于 `focusin` 会冒泡，而 `focus` 不会。

与 `focusin` 相反的是 {{domxref("Element/focusout_event", "focusout")}} 事件，该事件在元素失去焦点时触发。

`focusin` 事件不可取消。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("focusin", (event) => { })

onfocusin = (event) => { }
```

## 事件类型

{{domxref("FocusEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("FocusEvent")}}

## 示例

### 实时示例

#### HTML

```html
<form id="form">
  <label>
    Some text:
    <input type="text" placeholder="text input" />
  </label>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
```

#### 结果

{{EmbedLiveSample("实时示例", '100%', '50px')}}

## 规范

{{Specifications}}

> [!NOTE]
> _UI Events_ 规范描述的[焦点事件的触发顺序](/en-US/docs/Web/API/FocusEvent#order_of_events)与当前浏览器的实际实现不同。

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Element/blur_event", "blur")}}、{{domxref("Element/focus_event", "focus")}}、{{domxref("Element/focusout_event", "focusout")}}
- [聚焦：focus/blur](https://javascript.info/focus-blur)
