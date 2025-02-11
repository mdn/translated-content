---
title: namespace-uri
slug: Web/XML/XPath/Reference/Functions/namespace-uri
original_slug: Web/XPath/Reference/Functions/namespace-uri
---

{{XsltSidebar}}{{ XsltRef() }}

`namespace-uri` 関数は、指定されたノード集合内の最初のノードの名前空間 URI を表す文字列を返します。

### 構文

```
namespace-uri( [node-set] )
```

### 引数

- `node-set` (省略可)
  - : このノード集合内の最初のノードの名前空間 URI が返されます。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

指定されたノードが属する名前空間の URI を表す文字列。

### 注

- 指定されたノードが特定の名前空間を持たなければ、空文字列が返されます。

<!---->

- 要素ノードおよび属性ノード以外のノードに対しては、常に空文字列が返されます。

### 定義

[XPath 1.0 4.1](https://www.w3.org/TR/xpath#function-local-name)

### Gecko での対応

対応済み。
