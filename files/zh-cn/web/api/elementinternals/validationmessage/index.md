---
title: ElementInternals：validationMessage 属性
slug: Web/API/ElementInternals/validationMessage
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

{{domxref("ElementInternals")}} 接口的 **`validationMessage`** 只读属性返回该元素的验证消息。

## 值

一个包含此元素验证消息的字符串。

## 示例

在以下示例中，使用 {{domxref("ElementInternals.setValidity()")}} 设置验证消息，然后使用 `validationMessage` 返回该消息。

```js
this.internals_.setValidity({ valueMissing: true }, "我的消息");
console.log(this.internals_.validationMessage); // "我的消息"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
