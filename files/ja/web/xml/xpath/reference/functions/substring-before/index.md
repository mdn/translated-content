---
title: substring-before
slug: Web/XML/XPath/Reference/Functions/substring-before
original_slug: Web/XPath/Reference/Functions/substring-before
---

{{XsltSidebar}}{{ XsltRef() }}

`substring-before` 関数は、与えられた文字列内で、与えられた部分文字列よりも前にある部分の文字列を返します。

### 構文

```
substring-before(haystack ,needle )
```

### 引数

- `haystack`
  - : 評価される文字列。この文字列の一部が返される。

<!---->

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

### 定義元

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-substring-before)

### Gecko の対応

対応済み。
