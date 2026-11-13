---
title: normalize-space
slug: Web/XML/XPath/Reference/Functions/normalize-space
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`normalize-space` 関数は、文字列から前後のホワイトスペースを取り除き、連続するホワイトスペースを 1 つの空白に置き換え、その結果として得られる文字列を返します。

## 構文

```plain
normalize-space( [string] )
```

## 引数

- `string` (省略可)
  - : 正規化する文字列。省略すると、コンテキストノードを文字列に変換したものが使用されます。

## 返値

正規化された文字列。

## 仕様書

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-normalize-space)

## Gecko の対応

対応済み。
