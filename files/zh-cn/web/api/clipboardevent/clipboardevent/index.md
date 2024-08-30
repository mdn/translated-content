---
title: ClipboardEvent()
slug: Web/API/ClipboardEvent/ClipboardEvent
---

{{APIRef("Clipboard API")}}{{SeeCompatTable}}

**`ClipboardEvent()`** 构造函数返回一个新建的 {{domxref("ClipboardEvent")}} 对象，这个对象表示与修改剪切板相关的事件，这些事件包括 [`cut`](/zh-CN/docs/Web/API/Element/cut_event) 、 [`copy`](/zh-CN/docs/Web/API/Element/copy_event) 和 [`paste`](/zh-CN/docs/Web/API/Element/paste_event) 事件。

## 语法

```js-nolint
new ClipboardEvent(type)
new ClipboardEvent(type, options)
```

### 参数

_`ClipboardEvent()` 构造函数也从_ _{{domxref("Event.Event", "Event()")}}_ _继承参数。_

- _type_
  - : 一个 {{domxref("DOMString")}} 字符串，描述了 `ClipboardEvent` 事件类型的名字，大小写敏感，可以是：`'copy'`、 `'cut'`或者 `'paste'`。
- _options_ **{{optional_inline}}**

  - : 选项如下：

    - `clipboardData`: 一个 {{domxref("DataTransfer")}} containing the data concerned by the clipboard event.
    - `dataType`{{non-standard_inline}}: A {{domxref("DOMString")}} containing the MIME-type of the data contained in the `data` argument.
    - `data`{{non-standard_inline}}: A {{domxref("DOMString")}} containing the data concerned by the clipboard event.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 与复制相关的事件：[`copy`](/zh-CN/docs/Web/API/Element/copy_event), [`cut`](/zh-CN/docs/Web/API/Element/cut_event), [`paste`](/zh-CN/docs/Web/API/Element/paste_event)
- 所属的 {{domxref("ClipboardEvent")}} 接口。
