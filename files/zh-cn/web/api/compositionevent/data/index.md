---
title: CompositionEvent：data 属性
short-title: data
slug: Web/API/CompositionEvent/data
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("UI Events")}}

{{domxref("CompositionEvent")}} 接口的只读属性 **`data`** 返回由引发事件的输入方法生成的字符；其具体性质取决于生成 `CompositionEvent` 对象的事件类型。

## 值

字符串。该字符串将表示事件的数据：

- 对于 `compositionstart` 事件，这是当前选中的文本，将被正在组合的字符串替换。即使内容更改了选择范围，此值也不会改变；相反，它表示组合开始时所选的字符串。
- 对于 `compositionupdate` 事件，这是编辑正在进行时当前的字符串。
- 对于 `compositionend` 事件，这是提交到编辑器的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CompositionEvent")}}
