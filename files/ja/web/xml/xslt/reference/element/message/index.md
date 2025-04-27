---
title: <xsl:message>
slug: Web/XML/XSLT/Reference/Element/message
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:message>` 要素は (NS の JavaScript コンソールに) メッセージを出力し、オプションでスタイルシートの実行を終了します。これはデバッグに便利です。

## 構文

```xml
<xsl:message terminate="yes" | "no" >
  TEMPLATE
</xsl:message>
```

### 必須属性

なし。

### 任意属性

- `terminate`
  - : "`yes`" に設定すると実行を終了する必要があります。デフォルト値は "`no`" です。この場合メッセージが出力され、実行が続行されます。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 13.

## Gecko の対応

対応済み。
