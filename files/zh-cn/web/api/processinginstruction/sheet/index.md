---
title: "ProcessingInstruction: sheet property"
short-title: sheet
slug: Web/API/ProcessingInstruction/sheet
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("DOM")}}

**`sheet`** 属性是 {{domxref("ProcessingInstruction")}} 接口的一个只读属性，它包含了与该处理指令相关联的样式表信息。

处理指令 `xml-stylesheet` 常用于在 XML 文件中关联样式表。

## 值

**`sheet`** 属性与 {{DOMxref("Stylesheet")}} 对象关联，如果 Stylesheet 不存在，那么值为 `null`。

## 示例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="rule.css"?>
<root>
  <!-- 其他元素和内容 -->
</root>
```

处理指令的 `sheet` 属性将返回描述 `rule.css` 的 {{domxref("StyleSheet")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)
