---
title: 保证无效值
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 1c93ad11838b16a30bcda1bb927e34085d694927
---

{{GlossarySidebar}}

在 CSS 中，保证无效值是 {{CSSXref("initial")}}。

当[自定义属性](/zh-CN/docs/Web/CSS/--*)的值为保证无效值时，{{CSSXref("var")}} 函数无法用它进行替换。尝试这样做会使声明在计算值时无效，除非指定了有效的备用值。

## 参见

- CSS {{CSSXref("initial")}}
- CSS {{CSSXref("var")}}
- [CSS 级联变量模块 1 规范](https://www.w3.org/TR/css-variables-1/#guaranteed-invalid)
