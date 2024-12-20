---
title: DragEvent()
slug: Web/API/DragEvent/DragEvent
---

{{APIRef("HTML Drag and Drop API")}}

This constructor is used to create a synthetic {{domxref("DragEvent")}} object.

Although this interface has a constructor, it is not possible to create a useful {{domxref("DataTransfer")}} object from script, since {{domxref("DataTransfer")}} objects have a processing and security model that is coordinated by the browser during drag-and-drops.

该接口继承了 {{domxref("MouseEvent")}} 和 {{domxref("Event")}} 的属性。

## 语法

```js-nolint
new DragEvent(type)
new DragEvent(type, dragEventInit)
```

### 参数

- _type_
  - : Is a {{domxref("DOMString")}} representing the name of the event (see [DragEvent event types](/zh-CN/docs/Web/API/DragEvent#event_types)).
- _DragEventInit_{{optional_inline}}

  - : Is a `DragEventInit` dictionary, having the following fields:

    - `"dataTransfer"`, optional and defaults to `"null"`. The type is {{domxref("DataTransfer")}}.

The `DragEventInit` dictionary inherits from the {{domxref("MouseEvent.MouseEvent","MouseEventInit dictionary")}}.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
