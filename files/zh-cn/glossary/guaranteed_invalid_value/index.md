---
title: 保证无效值
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

在 CSS 中，保证无效值是 {{CSSXref("initial")}}。

当[自定义属性](/zh-CN/docs/Web/CSS/Reference/Properties/--*)的值为保证无效值时，{{CSSXref("var")}} 函数无法用它进行替换。尝试这样做会使声明在计算值时无效，除非指定了有效的回退值。

## 参见

- CSS {{CSSXref("initial")}}
- CSS {{CSSXref("var")}}
- [CSS 级联变量模块第 1 版](https://drafts.csswg.org/css-variables/#guaranteed-invalid)规范
