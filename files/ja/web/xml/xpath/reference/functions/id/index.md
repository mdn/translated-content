---
title: id
slug: Web/XML/XPath/Reference/Functions/id
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`id` 関数は渡された ID に一致するノードを探し、識別されたノードを格納するノード集合を返します。

## 構文

```plain
id( expression )
```

### 引数

- `expression`
  - : `expression` がノード集合ならば、そのノード集合内のそれぞれのノードの文字列値が個々の ID として扱われます。返されるノード集合はそれらの ID に対応するノードの集合です。
    `expression` が文字列、またはその他のノード集合以外の型である場合、`expression` は空白で区切られた ID のリストとして扱われます。返されるノード集合はそれらの ID に対応するノードの集合です。

### 返値

与えられた単一または複数の ID によって識別された、単一または複数のノードを格納したノード集合。

## 解説

- どの属性が ID として扱われるかは、XML 文書の DTD によって決定されます。 [XPath 1.0 5.2.1](https://www.w3.org/TR/xpath#unique-id) を参照してください。

## 仕様書

[XPath 1.0 4.1](https://www.w3.org/TR/xpath#function-id)

## Gecko の対応

部分的に対応。
