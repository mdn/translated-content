---
title: <xsl:text>
slug: Web/XML/XSLT/Reference/Element/text
original_slug: Web/XSLT/Reference/Element/text
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:text>` 要素はリテラルテキストを出力ツリーに書き込みます。 `#PCDATA`、リテラルテキスト、およびエンティティ参照を含むことがあります。

### 構文

```xml
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### 必須属性

なし

### 任意属性

- `disable-output-escaping` (Netscape は変換の結果 - 下の「出力」 - を直列化しませんので、この属性は本質的に文脈上は無関係です。html エンティティを出力するには、代わりに数値を使用します (例: `&nbsp`の `&#160`) )
  - : 出力に書き込まれたときに特殊文字をエスケープするかどうかを指定します。使用可能な値は "`yes`" または "`no`" です。たとえば "`yes`" が設定されている場合、文字 `>` は `&gt;` ではなく `>` として出力されます。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 7.2

### Gecko のサポート

注意の通りサポートされています。
