---
title: substring
slug: Web/XML/XPath/Reference/Functions/substring
original_slug: Web/XPath/Reference/Functions/substring
---

{{XsltSidebar}}{{ XsltRef() }}

`substring` 関数は与えられた文字列の一部を返します。

### 構文

```
substring(string ,start [,length] )
```

### 引数

- `string`
  - : 評価する文字列。

<!---->

- `start`
  - : `string` 内での部分文字列の開始位置。
- `length` (省略可)
  - : 部分文字列の長さ。 省略すると、返される文字列には `start` の位置から `string` の最後までのすべての文字が格納される。

### 返値

文字列。

### 注

他の XPath 関数と同様に、位置はゼロ始まりではありません。 文字列内の最初の文字の位置は 1 であり、0 ではありません。

### 定義

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-substring)

### Gecko での対応

対応済み。
