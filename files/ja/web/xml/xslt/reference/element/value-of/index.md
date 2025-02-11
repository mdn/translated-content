---
title: <xsl:value-of>
slug: Web/XML/XSLT/Reference/Element/value-of
original_slug: Web/XSLT/Reference/Element/value-of
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:value-of>` 要素は XPath 式を評価し、それを文字列に変換し、その文字列を result tree に書きます。

### 構文

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### 必須属性

- `select`
  - : 評価され、出力ツリーに書き込まれる XPath 式を指定します。

### オプション属性

- `disable-output-escaping` (Netscape は変換の結果 - 下の「出力」 - を直列化しませんので、この属性は本質的に文脈上は無関係です。html エンティティを出力するには、代わりに数値を使用します (例: `&nbsp`の `&#160`) )
  - : 出力に書き込まれたときに特殊文字をエスケープするかどうかを指定します。使用可能な値は "`yes`" または "`no`" です。たとえば "`yes`" が設定されている場合、文字>は `>` ではなく"`&gt`" として出力されます。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 7.6.1.

### Gecko のサポート

上記以外はサポートされています。
