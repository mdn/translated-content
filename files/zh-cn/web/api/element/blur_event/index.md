---
title: blur (event)
slug: Web/API/Element/blur_event
---

当一个元素失去焦点的时候 blur 事件被触发。它和 [`focusout`](/zh-CN/docs/Mozilla_event_reference/focusout) 事件的主要区别是 focusout 支持冒泡。

## 常规信息

- 规范
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-blur)
- 接口
  - : {{domxref("FocusEvent")}}
- 是否冒泡
  - : 否
- 可取消默认行为
  - : 否
- 目标对象
  - : 元素（Element）
- 默认行为
  - : 无

> **备注：** {{domxref("Document.activeElement")}} 的值随浏览器的不同而不同（[Firefox bug 452307](https://bugzil.la/452307)）：IE10 把值设为焦点将要移向的对象，而 Firefox 和 Chrome 往往把值设为 `body`。

## 属性

| 属性                               | 类型                                  | 描述                                         |
| ---------------------------------- | ------------------------------------- | -------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}            | 产生该事件的对象 (DOM 树中最顶级的那个对象). |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}              | 事件类型。                                   |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                 | 该事件是否冒泡。                             |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                 | 该事件是否可取消默认行为。                   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM 元素) | 无                                           |

## 事件代理

有两种方法来为这个事件实现事件代理：在支持 `focusout` 事件的浏览器中使用 focusout 事件（除了 FireFox 以外的浏览器都支持 focusout）或者通过设置 [`addEventListener`](/zh-CN/docs/DOM/element.addEventListener) 方法的第三个参数 "useCapture" 为 `true：`

### HTML

```html
<form id="form">
  <input type="text" placeholder="text input" />
  <input type="password" placeholder="password" />
</form>
```

### JavaScript

```js
var form = document.getElementById("form");
form.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
  },
  true,
);
form.addEventListener(
  "blur",
  function (event) {
    event.target.style.background = "";
  },
  true,
);
```

{{EmbedLiveSample('事件代理')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关的事件

- [`focus`](/zh-CN/docs/Web/API/Element/focus_event)
- [`blur`](/zh-CN/docs/Web/API/Element/blur_event)
- [`focusin`](/zh-CN/docs/Web/API/Element/focusin_event)
- [`focusout`](/zh-CN/docs/Web/API/Element/focusout_event)
