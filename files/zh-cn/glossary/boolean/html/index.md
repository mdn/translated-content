---
title: 布尔属性（HTML）
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{Glossary("HTML")}} **布尔属性**是表示 `true` 或 `false` 值的{{glossary("attribute", "属性")}}。如果 HTML 标签包含布尔属性——无论该属性的值如何——该属性都会在该元素上设置为 `true`。如果 HTML 标签不包含该属性，则该属性被设置为 `false`。

如果属性存在，则取值可以是：

- 没有任何值，例如 `attribute`
- 空字符串，例如 `attribute=""`
- 属性的名称本身，没有前导或尾随空格，例如 `attribute="attribute"`

> [!NOTE]
> 字符串“true”和“false”是无效的值。要将属性设置为 `false`，则该属性不应出现在元素标签中。尽管现代浏览器将*任何*字符串值视为 `true`，但你也不应该这样做。

以下是 HTML 布尔属性 `checked` 的示例：

```html
<!-- 以下复选框在初始渲染时将被选中 -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />

<!-- 以下复选框在初始渲染时将不被选中 -->
<input type="checkbox" />
```

## 参见

- [布尔属性](/zh-CN/docs/Web/HTML/Reference/Attributes#布尔属性)
- HTML 规范中的[布尔属性](https://html.spec.whatwg.org/#boolean-attributes)
- 相关术语：
  - {{Glossary("Attribute", "属性")}}
  - {{Glossary("Enumerated", "枚举属性")}}
