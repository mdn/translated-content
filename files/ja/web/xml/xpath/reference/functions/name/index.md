---
title: name
slug: Web/XML/XPath/Reference/Functions/name
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`name` 関数は、与えられたノード集合内の最初のノードの QName を表す文字列を返します。

## 構文

```plain
name( [node-set] )
```

### 引数

- `node-set` (省略可)
  - : このノード集合内の最初のノードの QName が返されます。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

ノードの QName を表す文字列。

## 解説

- [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) はノードの修飾名であり、名前空間接頭辞とローカル名が含まれます。

## 仕様書

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko の対応

対応済み。
