---
title: format-number
slug: Web/XPath/Functions/format-number
---

{{ XsltRef() }}

`format-number`関数は数値を評価し、与えられた形式の数値を表す文字列を返します。

### 構文

```
format-number(number ,pattern [,decimal-format] )
```

### 引数

- `number`
  - : フォーマットする数値

<!---->

- `pattern`
  - : JDK 1.1 DecimalFormat クラスの形式の文字列。（[JDK 1.1](http://java.sun.com/products/archive/jdk/1.1/)のドキュメントはオンラインでは入手できません。[Java SE 6 DecimalFormat](https://docs.oracle.com/javase/jp/6/api/java/text/DecimalFormat.html)はこちらです）

<!---->

- `decimal-format` (任意)
  - : 使用する数値書式を定義する[`xsl:decimal-format`](/ja/docs/XSLT/Elements/decimal-format)要素の名前。省略すると、デフォルトの 10 進形式が使用されます。

### 返値

新しい形式の数値を表す文字列。

### 注記

この関数は XPath への XSLT 固有の追加です。コア XPath 関数ライブラリの一部ではありません。

### 定義

[XSLT 1.0 12.3](http://www.w3.org/TR/xslt#function-format-number)

### Gecko のサポート

サポート済み
