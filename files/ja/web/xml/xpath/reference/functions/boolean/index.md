---
title: boolean
slug: Web/XML/XPath/Reference/Functions/boolean
original_slug: Web/XPath/Reference/Functions/boolean
---

{{XsltSidebar}}{{ XsltRef() }}

`boolean` 関数は式を評価し、 true または false を返します。

## 構文

```
boolean( expression )
```

## 引数

- `expression`
  - : 評価される式です。式は論理値のほか、数値やノード集合を参照することができます。

## 返値

`expression` を評価した結果から得られる論理値 `true` または `false`。

## メモ

- 数値は、正のゼロ、負のゼロ、 `NaN` の場合は false と評価されます。それ以外の場合は true と評価されます。
- ノード集合は、空集合でなければ true と評価されます。
- 文字列は、空文字列ならば false と評価されます。そうでなければ true と評価されます。
- 4 つの基本型以外の型のオブジェクトは、その型に応じた方法で論理値に変換されます。

## 定義

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-boolean)

## Gecko の対応

対応済み。
