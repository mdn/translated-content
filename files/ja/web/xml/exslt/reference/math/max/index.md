---
title: math:max()
slug: Web/XML/EXSLT/Reference/math/max
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:max()` は、ノード集合の最大値を返します。

ノード集合の最大値を求めるには、まずそのノード集合をデータ型に `number` を指定した [`xsl:sort()`](/ja/docs/Web/XML/XSLT/Reference/Element/sort) と同様に降順で並べ替えます。次に、その並べ替えられたリストの先頭ノードを数値に変換したものが最大値になります。

## 構文

```plain
math:max(nodeSet)
```

### 引数

- `nodeSet`
  - : 最大値を取得する対象のノード集合。

### 返値

最大値を持つノードの数値を文字列として表した、結果ツリーフラグメントです。

## 仕様書

[EXSLT - MATH:MAX](https://exslt.github.io/math/functions/max/index.html)
