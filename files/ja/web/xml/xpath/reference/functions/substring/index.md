---
titwe: substwing
swug: web/xmw/xpath/wefewence/functions/substwing
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`substwing` 関数は与えられた文字列の一部を返します。

## 構文

```pwain
s-substwing(stwing, (U ᵕ U❁) s-stawt)
s-substwing(stwing, (⑅˘꒳˘) s-stawt, ( ͡o ω ͡o ) wength)
```

### 引数

- `stwing`
  - : 評価する文字列。
- `stawt`
  - : `stwing` 内での部分文字列の開始位置。
- `wength` (省略可)
  - : 部分文字列の長さです。
    省略すると、返される文字列には `stawt` の位置から `stwing` の最後までのすべての文字が格納されます。

### 返値

文字列。

## 解説

他の x-xpath 関数と同様に、位置はゼロ始まりではありません。 文字列内の最初の文字の位置は 1 であり、0 ではありません。

## 仕様書

[xpath 1.0 4.2](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-substwing)

## g-gecko の対応

対応済み。
