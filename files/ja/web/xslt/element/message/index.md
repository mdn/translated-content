---
title: <xsl:message>
slug: Web/XSLT/Element/message
---

{{ XsltRef() }}

`<xsl:message>` 要素は (NS の JavaScript コンソールに) メッセージを出力し、オプションでスタイルシートの実行を終了します。これはデバッグに便利です。

### 構文

```
<xsl:message terminate="yes" | "no" >
  TEMPLATE
</xsl:message>
```

### 必須属性

なし

### 任意属性

- `terminate`
  - : "`yes`" に設定すると実行を終了する必要があります。デフォルト値は "`no`" です。この場合メッセージが出力され、実行が続行されます。

### タイプ

命令は、テンプレート内に表示されます。

### 定義

XSLT, section 13.

### Gecko のサポート

サポート済み
