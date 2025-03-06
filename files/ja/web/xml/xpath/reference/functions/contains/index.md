---
title: contains
slug: Web/XML/XPath/Reference/Functions/contains
original_slug: Web/XPath/Reference/Functions/contains
---

{{XsltSidebar}}{{ XsltRef() }}

`contains` 関数は、第 1 引数の文字列に第 2 引数の文字列が含まれているかどうかを判定し、論理値 true または false を返します。

### 構文

```
contains(haystack ,needle )
```

### 引数

- `haystack`
  - : 検索される文字列

<!---->

- `needle`
  - : `haystack` の部分文字列かどうかを検索する文字列

### 返値

`haystack` に `needle` が含まれていれば `true`。 そうでなければ `false`。

### 定義

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-contains)

### Gecko でのサポート

サポート済み。
