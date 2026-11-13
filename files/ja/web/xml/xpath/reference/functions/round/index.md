---
title: round
slug: Web/XML/XPath/Reference/Functions/round
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`round` 関数は、与えられた数値に最も近い整数を返します。

## 構文

```plain
round( decimal )
```

### 引数

- `decimal`
  - : 丸められる 10 進数の実数。

### 返値

`decimal` よりも小さいか、大きいか、等しい、最も近い整数。

## 解説

- \-0.5 は負のゼロに丸められます。 0.4 は正のゼロに丸められます。

## 仕様書

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-round)

## Gecko の対応

対応済み。
