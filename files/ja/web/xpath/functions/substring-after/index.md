---
title: substring-after
slug: Web/XPath/Functions/substring-after
---

{{ XsltRef() }}

`substring-after` 関数は、与えられた文字列内で、与えられた部分文字列よりも後にある残りの部分を返します。

### 構文

```
substring-after(haystack ,needle )
```

### 引数

- _`haystack`_
  - : 評価される文字列。この文字列の一部が返される。

<!---->

- _`needle`_
  - : 検索する文字列。_`haystack`_ 内で最初に見つかった *`needle`* よりも後にあるすべての文字が返される。

### 返値

文字列。

### 例

| XPath の例                     | 出力       |
| ------------------------------ | ---------- |
| `substring-after('aa-bb','-')` | `bb`       |
| `substring-after('aa-bb','a')` | `a-bb`     |
| `substring-after('aa-bb','b')` | `b`        |
| `substring-after('aa-bb','q')` | (空文字列) |

### 定義元

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-substring-after)

### Gecko での対応

対応済み。
