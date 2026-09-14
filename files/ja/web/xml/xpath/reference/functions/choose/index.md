---
title: choose
slug: Web/XML/XPath/Reference/Functions/choose
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`choose` 関数は論理値の引数に基づいて、指定されたオブジェクトのうち 1 つを返します。

> [!NOTE]
> このメソッドは廃止予定である `if ()` の代わりに使われるべきです。

## 構文

```plain
choose( boolean, object1, object2 )
```

### 値

- `boolean`
  - : どのオブジェクトを返すかを決定するのに使われる論理値演算。
- `object1`
  - : 返値とされる 1 つめのオブジェクト。
- `object2`
  - : 返値とされる 2 つめのオブジェクト。

### 返値

もし与えられた論理値が真であれば、1 つめのオブジェクトが返されます。そうでなければ 2 つめのオブジェクトが返されます。

> [!NOTE]
> 返される値でないものも含め、すべての引数が評価されます。

## 仕様書

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

## Gecko の対応

対応済み。
