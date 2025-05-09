---
title: local-name
slug: Web/XML/XPath/Reference/Functions/local-name
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`local-name` 関数は、与えられたノード集合内の最初のノードのローカル名 (local name) を表す文字列を返します。

## 構文

```plain
local-name( [node-set] )
```

### 引数

- `node-set` (省略可)
  - : このノード集合内の最初のノードのローカル名が返されます。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

文字列。

## 解説

- ローカル名は展開名 ([expanded-name](https://www.w3.org/TR/xpath#dt-expanded-name)) のローカル部分です。

## 仕様書

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

### Gecko の対応

対応済み。
