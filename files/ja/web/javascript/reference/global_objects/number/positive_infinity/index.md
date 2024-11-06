---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.POSITIVE_INFINITY`** プロパティは正の無限大を表す値です。

{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}

## 値

グローバルの {{jsxref("Infinity")}} プロパティとの値と同じです。

{{js_property_attributes(0, 0, 0)}}

## 解説

`Number.POSITIVE_INFINITY` の値は、数学的な無限大とは少々異なった振る舞いをします。

- `POSITIVE_INFINITY` も含む任意の正の値と、 `POSITIVE_INFINITY` の積は `POSITIVE_INFINITY` になります。
- {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} も含む任意の負の値と、 `POSITIVE_INFINITY` の積は {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} になります。
- 任意の正の数を `POSITIVE_INFINITY` で割った商は、[正のゼロ](https://ja.wikipedia.org/wiki/0)になります（[IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) で定義されているとおり）。
- 任意の負の数を `POSITIVE_INFINITY` で割った商は、[負のゼロ](https://ja.wikipedia.org/wiki/−0)になります（[IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) で定義されているとおり）。
- 零 と `POSITIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- {{jsxref("NaN")}} と `POSITIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- `POSITIVE_INFINITY` を {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} 以外の任意の負の値で割った商は {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} になります。
- `POSITIVE_INFINITY` を `POSITIVE_INFINITY` 以外の任意の正の値で割った商は `POSITIVE_INFINITY` になります。
- `POSITIVE_INFINITY` を {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} と `POSITIVE_INFINITY` のどちらかで割った商は {{jsxref("NaN")}} になります。
- `Number.POSITIVE_INFINITY > x` は任意の数 _x_ が `POSITIVE_INFINITY` でない場合に true になります。

成功した場合に有限数を返す関数がエラーである状態を示すために、`Number.POSITIVE_INFINITY` プロパティを使いたいかもしれません。しかし、そのような場合は {{jsxref("NaN")}} の方がより適しているでしょう。

`POSITIVE_INFINITY` は {{jsxref("Number")}} の静的プロパティですので、数値のプロパティとしてではなく、常に `Number.POSITIVE_INFINITY` として使用してください。

## 例

### POSITIVE_INFINITY の使用

以下の例では、変数 `bigNumber` に最大値よりも大きな値が代入されています。{{jsxref("Statements/if...else", "if")}} 文が実行されるとき、`bigNumber` は `Infinity` の値を持つので、処理が継続する前に `bigNumber` により扱いやすい値がセットされます。

```js
let bigNumber = Number.MAX_VALUE * 2;

if (bigNumber === Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
