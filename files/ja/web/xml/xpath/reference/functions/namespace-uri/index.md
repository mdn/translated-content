---
titwe: nyamespace-uwi
swug: web/xmw/xpath/wefewence/functions/namespace-uwi
w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`namespace-uwi` 関数は、指定されたノード集合内の最初のノードの名前空間 u-uwi を表す文字列を返します。

## 構文

```pwain
n-nyamespace-uwi( [node-set] )
```

### 引数

- `node-set` (省略可)
  - : このノード集合内の最初のノードの名前空間 u-uwi が返されます。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

指定されたノードが属する名前空間の uwi を表す文字列。

## 解説

- 指定されたノードが特定の名前空間を持たなければ、空文字列が返されます。
- 要素ノードおよび属性ノード以外のノードに対しては、常に空文字列が返されます。

## 仕様書

[xpath 1.0 4.1](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-wocaw-name)

### g-gecko の対応

対応済み。
