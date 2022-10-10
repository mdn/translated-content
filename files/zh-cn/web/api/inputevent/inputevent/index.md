---
title: InputEvent()
slug: Web/API/InputEvent/InputEvent
---

{{APIRef("DOM Events")}}{{SeeCompatTable}}

构造函数 **`InputEvent()`** 返回一个新创建的 {{domxref("InputEvent")}} 对象。

## 语法

```
 event = new InputEvent(typeArg, inputEventInit);
```

### 参数

- _typeArg_
  - : 一个 {{domxref("DOMString")}} ，表示事件的名称。
- _inputEventInit_{{optional_inline}}

  - : 一个 `InputEventInit` 字典，有以下字段：

    - `inputType`（可选），指定可编辑内容更改类型的字符串，例如插入、删除或格式化文本。
    - `data`（可选），包含要插入的字符的字符串。如果更改未插入文本（例如删除字符时），则其可能为空字符串。
    - `dataTransfer`（可选），一个 {{domxref("DataTransfer")}} 对象，其中包含有关添加到可编辑内容，或从可编辑内容中删除的富文本或纯文本数据的信息。
    - `isComposing`（可选），一个布尔值，指示事件是组合会话的一部分，这意味着它在 {{event("compositionstart")}} 事件之后，但在 {{event("compositionend")}} 事件之前。默认值为 `false`。
    - `ranges`（可选），一个静态 {{domxref("Range")}} 数组，如果输入事件没有被取消，它将受到对 DOM 的更改的影响。

`InputEventInit` 字典也接受来自 {{domxref("UIEvent.UIEvent", "UIEventInit")}} 以及 {{domxref("Event.Event", "EventInit")}} 字典的值。

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("InputEvent")}}，它构造的对象所属的接口。
