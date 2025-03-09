---
title: id
slug: Web/XML/XPath/Reference/Functions/id
original_slug: Web/XPath/Reference/Functions/id
---

{{XsltSidebar}}{{ XsltRef() }}

`id` 関数は渡された ID に一致するノードを探し、識別されたノードを格納するノード集合を返します。

### 構文

```
id(expression )
```

### 引数

- `expression`
  - : `expression` がノード集合ならば、そのノード集合内のそれぞれのノードの文字列値が個々の ID として扱われます。返されるノード集合はそれらの ID に対応するノードの集合です。
    `expression` が文字列、またはその他のノード集合以外の型である場合、`expression` は空白で区切られた ID のリストとして扱われます。返されるノード集合はそれらの ID に対応するノードの集合です。

### 返値

与えられた単一または複数の ID によって識別された、単一または複数のノードを格納したノード集合。

### 注

- どの属性が ID として扱われるかは、XML 文書の DTD によって決定されます。 [XPath 1.0 5.2.1](https://www.w3.org/TR/xpath#unique-id) を参照してください。

### 定義

[XPath 1.0 4.1](https://www.w3.org/TR/xpath#function-id)

### Gecko での対応

一部対応。
