---
title: <xsl:decimal-format>
slug: Web/XML/XSLT/Reference/Element/decimal-format
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:decimal-format>` 要素は、`format-number( )` 関数を使用して数字を文字列に変換する際に使用される文字と記号を定義します。

### 構文

```xml
<xsl:decimal-format
  name=NAME
  decimal-separator=CHARACTER
  grouping-separator=CHARACTER
  infinity=STRING
  minus-sign=CHARACTER
  NaN=STRING
  percent=CHARACTER
  per-mille=CHARACTER
  zero-digit=CHARACTER
  digit=CHARACTER
  pattern-separator=CHARACTER />
```

### 必須属性

なし。

### 任意属性

- `name`
  - : この形式の名前を指定します。
- `decimal-separator`
  - : 小数点文字を指定します。既定値は `.` です。
- `grouping-separator`
  - : 桁区切り文字を指定します。 既定値は `,` です。
- `infinity`
  - : 無限を表すために使用される文字列を指定します。既定値は文字列 `Infinity` です。
- `minus-sign`
  - : マイナス記号文字を指定します。既定値はハイフン `-` です。
- `NaN`
  - : 値が数値でない場合に使用される文字列を指定します。既定値は文字列 `NaN` です。
- `percent`
  - : パーセント符号文字を指定します。既定値は `%` です。
- `per-mille`
  - : 千分率の文字を指定します。既定値は `‰` です。
- `zero-digit`
  - : 数字のゼロ文字を指定します。 既定値は `0` です。
- `digit`
  - : 数字を表すために書式パターンで使用される文字を指定します。既定値は `#` です。
- `pattern-separator`
  - : 正と負のサブパターンを書式パターンで区切る文字を指定します。既定値はセミコロン `;` です。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 12.3.

## Gecko の対応

1.0 (Mozilla 1.0、Netscape 7.0) でサポートされています。
