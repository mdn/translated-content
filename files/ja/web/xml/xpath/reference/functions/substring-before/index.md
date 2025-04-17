---
title: substring-before
slug: Web/XML/XPath/Reference/Functions/substring-before
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`substring-before` 関数は、与えられた文字列内で、与えられた部分文字列よりも前にある部分の文字列を返します。

## 構文

```plain
substring-before( haystack, needle )
```

### 引数

- `haystack`
  - : 評価される文字列。この文字列の一部が返される。
- `needle`
  - : 検索する文字列。`haystack` 内で最初に見つかった `needle` よりも前にあるすべての文字が返される。

### 返値

文字列。

### 例

| XPath の例                      | 出力         |
| ------------------------------- | ------------ |
| `substring-before('aa-bb','-')` | `aa`         |
| `substring-before('aa-bb','a')` | `(空文字列)` |
| `substring-before('aa-bb','b')` | `aa-`        |
| `substring-before('aa-bb','q')` | (空文字列)   |

## 仕様書

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-before)

## Gecko の対応

対応済み。
