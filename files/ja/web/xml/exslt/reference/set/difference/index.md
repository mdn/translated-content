---
title: set:difference()
slug: Web/XML/EXSLT/Reference/set/difference
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`set:difference()` は 2 つのノード集合の差を返します。つまり、一方のノード集合に含まれ、もう一方には含まれないノードからなるノード集合を返します。

`set:difference` のテンプレート版では、これらのノードに `set:difference` モードでテンプレートを適用し、ノードをコピーして、それらからなる結果ツリーの断片を返します。

## 構文

```plain
set:difference(nodeSet1, nodeSet2)
```

### 引数

- `nodeSet1`
  - : ノードを差し引く元となるノード集合です。
- `nodeSet2`
  - : `nodeSet1` から差し引くノードのセットです。

### 返値

`nodeSet1` には含まれ、`nodeSet2` には含まれないノードからなるノード集合です。

## 仕様書

[EXSLT - SET:DIFFERENCE](https://exslt.github.io/set/functions/difference/index.html)
