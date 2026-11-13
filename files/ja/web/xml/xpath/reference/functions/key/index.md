---
title: key
slug: Web/XML/XPath/Reference/Functions/key
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`key` 関数は、指定されたキーに対して指定された値を持つノードのノード集合を返します。

## 構文

```plain
key( keyname, value )
```

### 引数

- `keyname`
  - : 使用される [`xsl:key`](/ja/docs/Web/XML/XSLT/Reference/Element/key) 要素の名前を含む文字列。
- `value`
  - : 返されるノード集合には、指定されたキーに対してこの値を持つすべてのノードが含まれます。

### 返値

ノード集合です。

## 解説

- [`xsl:key`](/ja/docs/Web/XML/XSLT/Reference/Element/key) 要素は、指定された要素がキーと一致するために使用される属性を定義します

この関数は XPath への XSLT 固有の追加です。コア XPath 関数ライブラリーの一部ではありません。

## 仕様書

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

## Gecko の対応

対応済み。
