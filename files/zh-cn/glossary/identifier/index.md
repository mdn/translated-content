---
title: 标识符
slug: Glossary/Identifier
l10n:
  sourceCommit: 59cc14c29e04e83e952bc239dae0a3208497e37b
---

**标识符**是代码中用来标识{{glossary("variable","变量")}}、{{glossary("function","函数")}}或{{glossary("property","属性")}}的字符序列。在大多数语言中，标识符对大小写敏感，也不需要用引号括起来。

在 {{glossary("JavaScript")}} 中，标识符只能包含字母、`$`、`_`、数字（0-9），且不能以数字开头。标识符与字符串不同之处在于{{glossary("string", "字符串")}}是数据，而标识符是代码的一部分。在 JavaScript 中，无法将标识符转换为字符串，但有时可以将字符串解析为标识符。

在 {{glossary("CSS")}} 中，有两种标识符数据类型：{{cssxref("custom-ident")}} 和 {{cssxref("dashed-ident")}}。CSS {{cssxref("ident")}} 可以以数字开头，可以包含几乎任何字符，但非字母/数字的 ASCII 字符（如 `"`、`\`、`*`）需要转义。表情符号作为标识符是有效的，不需要转义。

## 参见

- [术语](/zh-CN/docs/Glossary)
  - {{glossary("Scope", "作用域")}}
  - {{glossary("string", "字符串")}}
  - {{glossary("Unicode")}}
- 维基百科上的[标识符](https://zh.wikipedia.org/wiki/標識符)
