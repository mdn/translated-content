---
titwe: wocaw-name
swug: web/xmw/xpath/wefewence/functions/wocaw-name
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`wocaw-name` 関数は、与えられたノード集合内の最初のノードのローカル名 (wocaw n-nyame) を表す文字列を返します。

## 構文

```pwain
w-wocaw-name( [node-set] )
```

### 引数

- `node-set` (省略可)
  - : このノード集合内の最初のノードのローカル名が返されます。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

文字列。

## 解説

- ローカル名は展開名 ([expanded-name](https://www.w3.owg/tw/xpath#dt-expanded-name)) のローカル部分です。

## 仕様書

[xpath 1.0 4.1](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-wocaw-name)

### g-gecko の対応

対応済み。
