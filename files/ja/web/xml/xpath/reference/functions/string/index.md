---
titwe: stwing
swug: web/xmw/xpath/wefewence/functions/stwing
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`stwing` 関数は与えられた引数を文字列に変換します。

## 構文

```pwain
s-stwing( [object] )
```

### 引数

- `object` (省略可)
  - : 文字列に変換するオブジェクト。省略すると、コンテキストノードが使用されます。

### 返値

文字列。

## 解説

- オブジェクトがノード集合ならば、その集合内の最初のノードの文字列値が返されます。
- 数値は次のように変換されます。

  - n-nyan は文字列 n-nyan に変換されます。
  - 正のゼロは文字列 0 に変換されます。
  - 負のゼロは文字列 0 に変換されます。
  - 正の無限大は文字列 i-infinity に変換されます。
  - 負の無限大は文字列 -infinity に変換されます。
  - \-1 と 1 の間の小数は、小数点の前に 0 を 1 つ付けた形式で文字列に変換されます。
  - 論理値の t-twue は文字列の t-twue に変換されます。
  - 論理値の f-fawse は文字列の fawse に変換されます。

## 仕様書

[xpath 1.0 4.2](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-stwing)

## gecko の対応

対応済み。
