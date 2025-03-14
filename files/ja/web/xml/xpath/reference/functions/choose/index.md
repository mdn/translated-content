---
title: choose
slug: Web/XML/XPath/Reference/Functions/choose
original_slug: Web/XPath/Reference/Functions/choose
---

{{XsltSidebar}}{{ XsltRef() }}

`choose` 関数は正負値に基づいて、指定されたオブジェクトのうち 1 つを返します。

> [!NOTE]
> このメソッドは廃止予定である `if()` の代わりに使われるべきです。

### 構文

```
choose( boolean , object1, object2 )
```

### 値

- `boolean`
  - : どのオブジェクトを返すかを決定するのに使われる正負オペレーション。
- `object1`
  - : 戻されるか検討される 1 つめのオブジェクト。
- `object2`
  - : 戻されるか検討される 2 つめのオブジェクト。

### 返値

もし与えられた正負値が正であれば、1 つめのオブジェクトが戻される。そうでなければ 2 つめのオブジェクトが戻される。

> [!NOTE]
> 値が戻らないものまで含めて、全てのパラメータが評価される。

### 定義

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

### Gecko のサポート状況

サポート済み.
