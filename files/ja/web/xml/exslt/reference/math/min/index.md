---
title: math:min()
slug: Web/XML/EXSLT/Reference/math/min
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:min()` は、ノードセットの最小値を返します。

ノードセットの最小値を求めるには、まずそのノードセットを、データ型に `number` を指定した [`xsl:sort()`](/ja/docs/Web/XML/XSLT/Reference/Element/sort) と同様に昇順で並べ替えます。次に、その並べ替えられたリストの先頭ノードを数値に変換したものが最小値になります。

## 構文

```plain
math:min(nodeSet)
```

### 引数

- `nodeSet`
  - : 最小値を取得する対象のノードセット。

### 返値

最小値を持つノードの数値を文字列として表した、結果ツリーフラグメントです。

## 仕様書

[EXSLT - MATH:MIN](https://exslt.github.io/math/functions/min/index.html)
