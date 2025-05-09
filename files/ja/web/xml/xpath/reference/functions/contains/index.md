---
title: contains
slug: Web/XML/XPath/Reference/Functions/contains
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`contains` 関数は、第 1 引数の文字列に第 2 引数の文字列が含まれているかどうかを判定し、論理値 true または false を返します。

## 構文

```plain
contains(haystack, needle)
```

### 引数

- `haystack`
  - : 検索される文字列
- `needle`
  - : `haystack` の部分文字列かどうかを検索する文字列

### 返値

`haystack` に `needle` が含まれていれば `true`。 そうでなければ `false`。

## 仕様書

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-contains)

## Gecko の対応

対応済み。
