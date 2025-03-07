---
title: number
slug: Web/XML/XPath/Reference/Functions/number
original_slug: Web/XPath/Reference/Functions/number
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{XsltSidebar}}

`number` 関数はオブジェクトを数値に変換し、その数値を返します。

### 構文

```plain
number( [object] )
```

### 引数

- `object` (省略可)
  - : 数値に変換するオブジェクト。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

オブジェクトを変換した結果として得られる数値。

### 注

- 文字列は、文字列内で数値の前にある空白文字を取り除き、数値の後にある空白文字を無視することによって数値に変換されます。文字列がこのパターンに一致しない場合は、NaN に変換されます。
- 論理値 true は 1 に変換され、 false は 0 に変換されます。
- ノード集合は、まず [string()](/ja/docs/Web/XPath/Functions/string) 関数を呼び出したかのように文字列に変換され、それから文字列の引数と同じ方法で変換されます。
- 4 つの基本型以外の型のオブジェクトは、その型に応じた方法で数値に変換されます。

### 定義

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-number)

### Gecko での対応

対応済み。
