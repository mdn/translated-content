---
title: Identifier (識別子)
slug: Glossary/Identifier
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**識別子** (identifier) は {{glossary("variable", "変数")}}、{{glossary("function", "関数")}}、{{glossary("property", "プロパティ")}} などを識別するコード内の文字の並びです。多くの言語では、識別子は大文字小文字の区別があり、引用符で囲みません。

{{glossary("JavaScript")}} においては、識別子は {{glossary("Unicode")}} の文字、 `$`、 `_`、 数字 (0-9) を含めることができますが、数字で始めることはできません。
識別子は{{glossary("String", "文字列")}}とは異なります。文字列がデータであるのに対して、識別子はコードの一部です。 JavaScript において、識別子を文字列に変換する方法はありませんが、ときに文字列を識別子に解釈することは可能です。

{{glossary("CSS")}} では、{{cssxref("custom-ident")}} と {{cssxref("dashed-ident")}} の 2 つの識別子データ型があります。CSS の {{cssxref("ident")}} には、ほぼすべての文字が含まれていますが、`"`、`\`、`*` などの英数字以外の ASCII 文字はエスケープしなければなりません。また、数字で始まることはできず、絵文字はエスケープを要求されない識別子として有効です。

## 関連情報

- 関連用語:
  - {{glossary("Scope", "スコープ")}}
  - {{glossary("string", "文字列")}}
  - {{glossary("Unicode")}}

- [識別子](https://ja.wikipedia.org/wiki/識別子#プログラミング言語における識別子) - ウィキペディア
