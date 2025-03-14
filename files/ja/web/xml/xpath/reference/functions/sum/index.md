---
title: sum
slug: Web/XML/XPath/Reference/Functions/sum
original_slug: Web/XPath/Reference/Functions/sum
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{XsltSidebar}}

`sum` 関数は、指定されたノード集合内のそれぞれのノードの数値としての値を合計した数値を返します。

### 構文

```plain
sum(node-set)
```

### 引数

- `node-set`
  - : 評価されるノード集合。 このノード集合内のそれぞれのノードが [number()](/ja/docs/Web/XPath/Functions/number) 関数に渡されたかのように評価され、その結果として得られた数値の合計が返されます。

### 返値

数値です。

### メモ

なし。

### 定義

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-sum)

### Gecko での対応

対応済み。
