---
title: Document：compatMode 属性
slug: Web/API/Document/compatMode
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ ApiRef("DOM") }}

**`Document.compatMode`** 只读属性表示文档是以[怪异模式](/zh-CN/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)或标准模式渲染。

## 值

可以是一个枚举值：

- 如果文档处于怪异模式，则为“`BackCompat`”。
- 如果文档处于无怪异模式（也称为“标准模式”）或有限怪异模式（也称为“接近标准模式”）下，则为“`CSS1Compat`”。

> [!NOTE]
> 所有这些模式现在都已经标准化，因此较旧的“标准模式”和“接近标准模式”名称已经不合逻辑，也不再在标准中使用。

## 示例

```js
if (document.compatMode === "BackCompat") {
  // 怪异模式中
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
