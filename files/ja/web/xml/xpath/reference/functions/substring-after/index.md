---
title: substring-after
slug: Web/XML/XPath/Reference/Functions/substring-after
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`substring-after` 関数は、与えられた文字列内で、与えられた部分文字列よりも後にある残りの部分を返します。

## 構文

```plain
substring-after( haystack, needle )
```

### 引数

- `haystack`
  - : 評価される文字列。この文字列の一部が返されます。
- `needle`
  - : 検索する文字列。`haystack` 内で最初に見つかった `needle` よりも後にあるすべての文字が返されます。

### 返値

文字列。

### 例

| XPath の例                     | 出力       |
| ------------------------------ | ---------- |
| `substring-after('aa-bb','-')` | `bb`       |
| `substring-after('aa-bb','a')` | `a-bb`     |
| `substring-after('aa-bb','b')` | `b`        |
| `substring-after('aa-bb','q')` | (空文字列) |

## 仕様書

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-after)

## Gecko の対応

対応済み。
