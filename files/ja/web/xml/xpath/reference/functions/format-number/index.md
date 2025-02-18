---
title: format-number
slug: Web/XML/XPath/Reference/Functions/format-number
original_slug: Web/XPath/Reference/Functions/format-number
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{XsltSidebar}}

`format-number` 関数は数値を評価し、指定された書式で数値を表す文字列を返します。

### 構文

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### 引数

- `number`
  - : 書式化する数値
- `pattern`
  - : Java の [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) クラスの書式の文字列。
- `decimalFormat` (任意)
  - : 使用する数値書式を定義する[`xsl:decimal-format`](/ja/docs/Web/XSLT/Element/decimal-format)要素の名前。省略すると、既定の 10 進形式が使用されます。

### 返値

新しい書式の数値を表す文字列。

### メモ

この関数は XPath への XSLT 固有の追加です。コア XPath 関数ライブラリーの一部ではありません。

### 定義

[XSLT 1.0 12.3](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-format-number)

### Gecko の対応

対応済み
