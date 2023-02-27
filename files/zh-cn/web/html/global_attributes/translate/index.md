---
title: translate
slug: Web/HTML/Global_attributes/translate
---

{{HTMLSidebar("Global_attributes")}}

[全局属性](/zh-CN/docs/Web/HTML/Global_attributes) **translate** 是一种[枚举](/zh-CN/docs/Glossary/Enumerated)属性，用来规定对应元素的*可翻译属性*值及其 {{domxref("Text")}} 子节点内容是否跟随系统语言作出对应的翻译变化。

该属性可以有以下值：

- 空字符串或 `yes`，意味着网页在进行本地化的时候，对应内容要被翻译。
- `no`，意味着对应的内容无需做任何翻译。

## 示例

在这个示例中，`translate` 属性令翻译工具不要翻译页脚的公司品牌名称。

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。
- 反映该属性的 {{domxref("HTMLElement.translate")}} 属性。
- [使用 HTML 的 translate 属性](https://www.w3.org/International/questions/qa-translate-flag)。
- HTML {{htmlattrxref("lang")}} 属性
