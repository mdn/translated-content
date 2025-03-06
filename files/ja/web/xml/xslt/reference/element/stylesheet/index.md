---
title: <xsl:stylesheet>
slug: Web/XML/XSLT/Reference/Element/stylesheet
original_slug: Web/XSLT/Reference/Element/stylesheet
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

`<xsl:stylesheet>` 要素 (または同等の `<xsl:transform>` 要素) は、スタイルシートの最も外側の要素です。

### 名前空間宣言

文書を XSLT スタイルシートとして識別するために必要な擬似属性。通常これは `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"` です。

## 構文

```xml
<xsl:stylesheet
  version="NUMBER"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  id="NAME"
  extension-element-prefixes="LIST-OF-NAMES"
  exclude-result-prefixes="LIST-OF-NAMES">
    ENTIRE STYLESHEET
</xsl:stylesheet>
```

### 必須属性

- `version`
  - : このスタイルシートに必要な XSLT のバージョンを指定します。

### 任意属性

- `exclude-result-prefixes`
  - : この文書で使用されている名前空間のうち、出力文書に送信すべきではないものを指定します。リストは空白区切りです。
- `extension-element-prefixes`
  - : この文書における拡張要素の名前空間接頭辞をすべて、空白区切りのリストで指定します。
- `default-collation`
  - : この要素を祖先とする属性またはテキスト値のテンプレートに現れるすべての {{Glossary("XPath")}} 式で、内部の要素の別な `default-collation` 属性で上書きされた場合を除き、使用される既定の照合を指定します。これは特定の XSLT の構築 ([`<xsl:key>`](/ja/docs/Web/XSLT/Element/key) および [`<xsl:for-each-group>`](/ja/docs/Web/XSLT/Element/for-each-group) などの) も指定します。
- `default-mode`
  - : `mode` 属性の既定値を、スコープ内におけるすべての [`<xsl:template>`](/ja/docs/Web/XSLT/Element/template) および [`<xsl:apply-templates>`](/ja/docs/Web/XSLT/Element/apply-templates) 要素について定義します。
- `default-validation`
  - : スコープ内に現れるすべての関連する指示について `validation` 属性の既定値を定義します。
- `expand-text`
  - : 要素の配下のテキストノードをテキスト値のテンプレートとして扱うかどうかを指定します。
- `id`
  - : このスタイルシートの ID を指定します。これはスタイルシートが別の XML 文書に埋め込まれている場合に最もよく使用されます。
- `input-type-annotations`
  - : 元の文書がスキーマに対して検証されているかどうかに関係なく、同じ結果が生成されるように、要素から型表記を削除するかどうかを指定します。
- `use-when`
  - : 要素とそれを祖先として持つすべてのノードをスタイルシートから除外するかどうかを決定します。
- `xpath-default-namespace`
  - : XPath 式内で接頭辞のない要素名や型名に使用される名前空間を指定します。

### 種別

スタイルシートのもっとも外側の要素である必要があります。

## 仕様書

{{Specifications}}
