---
title: substring
slug: Web/XML/XPath/Reference/Functions/substring
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`substring` 関数は与えられた文字列の一部を返します。

## 構文

```plain
substring(string, start)
substring(string, start, length)
```

### 引数

- `string`
  - : 評価する文字列。
- `start`
  - : `string` 内での部分文字列の開始位置。
- `length` (省略可)
  - : 部分文字列の長さです。
    省略すると、返される文字列には `start` の位置から `string` の最後までのすべての文字が格納されます。

### 返値

文字列。

## 解説

他の XPath 関数と同様に、位置はゼロ始まりではありません。 文字列内の最初の文字の位置は 1 であり、0 ではありません。

## 仕様書

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring)

## Gecko の対応

対応済み。
