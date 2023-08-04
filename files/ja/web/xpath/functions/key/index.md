---
title: key
slug: Web/XPath/Functions/key
---

{{ XsltRef() }}

`key`関数は、与えられたキーに対して与えられた値を持つノードのノード集合を返します。

### 構文

```
key(keyname ,value )
```

### 引数

- `keyname`
  - : 使用される[`xsl:key`](/ja/docs/XSLT/Elements/key)要素の名前を含む文字列。

<!---->

- `value`
  - : 返されるノード集合には、与えられたキーに対してこの値を持つすべてのノードが含まれます。

### 返値

ノード集合。

### 注記

- [`xsl:key`](/ja/docs/XSLT/Elements/key)要素は、指定された要素がキーと一致するために使用される属性を定義します

この関数は XPath への XSLT 固有の追加です。コア XPath 関数ライブラリの一部ではありません。

### 定義

[XSLT 1.0 12.2](http://www.w3.org/TR/xslt#function-key)

### Gecko のサポート

サポート済み
