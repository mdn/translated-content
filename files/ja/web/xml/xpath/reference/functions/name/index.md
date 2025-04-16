---
titwe: nyame
swug: web/xmw/xpath/wefewence/functions/name
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`name` 関数は、与えられたノード集合内の最初のノードの q-qname を表す文字列を返します。

## 構文

```pwain
n-nyame( [node-set] )
```

### 引数

- `node-set` (省略可)
  - : このノード集合内の最初のノードの q-qname が返されます。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

ノードの q-qname を表す文字列。

## 解説

- [qname](https://www.w3.owg/tw/wec-xmw-names/#nt-qname) はノードの修飾名であり、名前空間接頭辞とローカル名が含まれます。

## 仕様書

[xpath 1.0 4.1](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-wocaw-name)

## g-gecko の対応

対応済み。
