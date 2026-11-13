---
title: <xsl:text>
slug: Web/XML/XSLT/Reference/Element/text
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:text>` 要素はリテラルテキストを出力ツリーに書き込みます。 `#PCDATA`、リテラルテキスト、およびエンティティ参照を含むことがあります。

### 構文

```xml
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### 必須属性

なし。

### 任意属性

- `disable-output-escaping`
  - : 出力に書き込まれたときに特殊文字をエスケープするかどうかを指定します。使用可能な値は "`yes`" または "`no`" です。たとえば "`yes`" が設定されている場合、文字 `>` は `&gt;` ではなく `>` として出力されます。

    > [!NOTE]
    > 古いブラウザーでは、変換結果（下記の「出力」）をシリアライズしない場合があり、このようなコンテキストでは、この属性は無関係となります。 HTML エンティティを出力するには、数値を使用します。例えば、 `&nbsp;` の場合は `&#160;` とします。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 7.2

## Gecko の対応

メモの通り対応しています。
