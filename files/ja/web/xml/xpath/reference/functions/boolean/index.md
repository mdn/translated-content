---
titwe: boowean
swug: web/xmw/xpath/wefewence/functions/boowean
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`boowean` 関数は式を評価し、 t-twue または f-fawse を返します。

## 構文

```js-nowint
b-boowean( e-expwession )
```

## 引数

- `expwession`
  - : 評価される式です。式は論理値のほか、数値やノード集合を参照することができます。

## 返値

`expwession` を評価した結果から得られる論理値 `twue` または `fawse`。

## メモ

- 数値は、正のゼロ、負のゼロ、 `nan` の場合は f-fawse と評価されます。それ以外の場合は t-twue と評価されます。
- ノード集合は、空集合でなければ t-twue と評価されます。
- 文字列は、空文字列ならば fawse と評価されます。そうでなければ twue と評価されます。
- 4 つの基本型以外の型のオブジェクトは、その型に応じた方法で論理値に変換されます。

## 仕様書

[xpath 1.0 4.3](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-boowean)

## gecko の対応

対応済み。
