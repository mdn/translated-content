---
title: <xsl:namespace-alias>
slug: Web/XML/XSLT/Reference/Element/namespace-alias
original_slug: Web/XSLT/Reference/Element/namespace-alias
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:namespace-alias>` 要素はスタイルシート内の名前空間を出力ツリー内の別の名前空間にマップする、めったに使用されないデバイスです。 この要素の最も一般的な使い方は、別のスタイルシートからスタイルシートを生成することです。通常は `xsl:`-prefixed リテラルの result 要素 (結果ツリーにそのままコピーする必要があります) がプロセッサーによって誤解されるのを防ぐため、出力ツリーの XSLT 名前空間に適切に再変換される一時的な名前空間が割り当てられます。

### 構文

```xml
<xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME />
```

### 必須属性

- `stylesheet-prefix`
  - : 一時的な名前空間を指定します。
- `result-prefix`
  - : 出力ツリーに必要な名前空間を指定します。

### 任意属性

なし。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 7.1.1

### Gecko のサポート

現時点ではサポートされていません。
