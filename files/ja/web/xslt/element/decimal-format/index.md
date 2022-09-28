---
title: <xsl:decimal-format>
slug: Web/XSLT/Element/decimal-format
---

{{ XsltRef() }}

`<xsl:decimal-format>` 要素は、_`format-number( )`_ 関数を使用して数字を文字列に変換する際に使用される文字と記号を定義します。

### 構文

```
<xsl:decimal-format
  name=NAME
  decimal-separator=CHARACTER
  grouping-separator=CHARACTER
  infinity=STRING
  minus-sign=CHARACTER
  NaN=STRING
  percent=CHARACTER
  per-mille=CHARATER
  zero-digit=CHARACTER
  digit=CHARACTER
  pattern-separator=CHARACTER />
```

### 必須属性

なし

### 任意属性

- `name`
  - : この形式の名前を指定します。

<!---->

- `decimal-separator`
  - : 小数点文字を指定します。デフォルトは (`.`) です。

<!---->

- `grouping-separator`
  - : 桁区切り文字を指定します。 デフォルトは (`,`) です。

<!---->

- `infinity`
  - : 無限を表すために使用される文字列を指定します。デフォルトは文字列 "`Infinity`"です。

<!---->

- `minus-sign`
  - : マイナス記号文字を指定します。デフォルトはハイフン (`-`) です。

<!---->

- `NaN`
  - : 値が数値でない場合に使用される文字列を指定します。デフォルトは文字列 "`NaN`" です。

<!---->

- `percent`
  - : パーセント符号文字を指定します。デフォルトは (`%`) です。

<!---->

- `per-mille`
  - : 1000 文字ごとに指定します。デフォルトは (`‰`) です。

<!---->

- `zero-digit`
  - : 数字のゼロ文字を指定します。 デフォルトは (`0`) です。

<!---->

- `digit`
  - : 数字を表すためにフォーマットパターンで使用される文字を指定します。デフォルトは (`#`) です。

<!---->

- `pattern-separator`
  - : 正と負のサブパターンをフォーマットパターンで区切る文字を指定します。デフォルトはセミコロン (`;`) です。

### タイプ

最上位は `<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

### 定義

XSLT, section 12.3.

### Gecko のサポート

1.0 (Mozilla 1.0、Netscape 7.0) でサポートされています。
