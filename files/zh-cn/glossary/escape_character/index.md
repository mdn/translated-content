---
title: 转义字符
slug: Glossary/Escape_character
l10n:
  sourceCommit: bd74b8a8222517dead9def675a499dcf1dc30328
---

属于**转义字符**一类的{{glossary("character", "字符")}}会导致紧随其后的一个或多个字符被以不同的方式解释，形成**转义序列**。这通常用于表示在字面上打印时具有特殊含义的字符，例如字符串字面量中的引号字符。转义序列还有其他用途，尤其是在[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions#转义序列)中。

- 在 JavaScript 的[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)、[字符串字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字面量)和[标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)中，可以使用反斜杠（`\`）来转义字符，如 `\'`、`\"`、`\u0026` 等。
- 在 CSS 标识符中，可以使用反斜杠（`\`）转义字符，如 `\\`、`\n`、`\26` 等。详见[转义字符](/zh-CN/docs/Web/CSS/Reference/Values/ident#转义字符)。
- 在 HTML 文本内容和属性值中，可以使用{{glossary("character reference", "字符参考")}}，如 `&lt;`、`&#60;` 或 `&#x3C;`。
- 在 {{glossary("URL")}} 中，可以使用百分号（`%`）转义字符，如 `%20`、`%3C`、`%3E` 等。

## 参见

- 相关术语：
  - {{glossary("Character", "字符")}}
  - {{glossary("Character reference", "字符参考")}}
  - {{glossary("Code point", "码位")}}
- 维基百科上的[转义字符](https://zh.wikipedia.org/wiki/转义字符)
- 维基百科上的[转义序列](https://zh.wikipedia.org/wiki/转义序列)
