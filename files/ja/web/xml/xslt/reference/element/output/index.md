---
title: <xsl:output>
slug: Web/XML/XSLT/Reference/Element/output
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:output>` 要素は出力文書の特性を制御します。 Netscape で正しく機能するには、 method 属性を持つこの要素を使用する必要があります。 7.0 より `method="text"` は期待通りに機能します。

### 構文

```xml
<xsl:output
  method="xml" | "html" | "text"
  version=STRING
  encoding=STRING
  omit-xml-declaration="yes" | "no"
  standalone="yes" | "no"
  doctype-public=STRING
  doctype-system=STRING
  cdata-section-elements=LIST-OF-NAMES
  indent="yes" | "no"
  media-type=STRING />
```

### 必須属性

なし。

### 任意属性

- `method`
  - : 出力形式を指定します。
- `version`
  - : 出力文書内の XML 宣言または HTML 宣言の version 属性の値を指定します。この属性は `method="html"` または `method="xml"` の場合にのみ使用されます。
- `encoding`
  - : 出力文書の `encoding` 属性の値を指定します。
- `omit-xml-declaration`
  - : XML 宣言を出力に含めるかどうかを示します。許容可能な値は `yes` または `no` です。
- `standalone` (対応していません)
  - : 存在する場合、出力文書でスタンドアロン宣言が発生しその値が返されることを示します。許容可能な値は `yes` または `no` です。
- `doctype-public`
  - : 出力文書の `DOCTYPE` 宣言の `PUBLIC` 属性の値を指定します。
- `doctype-system`
  - : 出力文書の `DOCTYPE` 宣言の `SYSTEM` 属性の値を指定します。
- `cdata-section-elements`
  - : テキストの内容を `CDATA` セクションとして記述する要素をリストします。要素は空白で区切る必要があります。
- `indent` (対応していません)
  - : 階層構造を示すために出力を字下げするかどうかを指定します。
- `media-type` (対応していません)
  - : 出力文書の MIME タイプを指定します。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 16.

## Gecko の対応

部分的に対応。上記のコメントを参照してください。
