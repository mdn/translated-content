---
title: key
slug: Web/XML/XPath/Reference/Functions/key
original_slug: Web/XPath/Reference/Functions/key
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

`key` 関数は、指定されたキーに対して指定された値を持つノードのノード集合を返します。

### 構文

```plain
key( keyname, value )
```

### 引数

- `keyname`
  - : 使用される [`xsl:key`](/ja/docs/Web/XSLT/Element/key) 要素の名前を含む文字列。
- `value`
  - : 返されるノード集合には、指定されたキーに対してこの値を持つすべてのノードが含まれます。

### 返値

ノード集合です。

### メモ

- [`xsl:key`](/ja/docs/Web/XSLT/Element/key) 要素は、指定された要素がキーと一致するために使用される属性を定義します

この関数は XPath への XSLT 固有の追加です。コア XPath 関数ライブラリーの一部ではありません。

### 定義

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

### Gecko の対応

対応済み。
