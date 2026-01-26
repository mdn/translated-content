---
title: Number.NEGATIVE_INFINITY
short-title: NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number.NEGATIVE_INFINITY`** は静的データプロパティで、負の無限大の値を表します。

{{InteractiveExample("JavaScript デモ: Number.NEGATIVE_INFINITY")}}

```js interactive-example
function checkNumber(smallNumber) {
  if (smallNumber === Number.NEGATIVE_INFINITY) {
    return "Process number as -Infinity";
  }
  return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));
// 予想される結果: -1.7976931348623157e+308

console.log(checkNumber(-Number.MAX_VALUE * 2));
// 予想される結果: "Process number as -Infinity"
```

## 値

グローバルの {{jsxref("Infinity")}} プロパティの負の値と同じです。

{{js_property_attributes(0, 0, 0)}}

## 解説

`Number.NEGATIVE_INFINITY` の値は、数学的な無限大とは少々異なった振る舞いをします。

- {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}} も含む任意の正の値と、 `NEGATIVE_INFINITY` の積は `NEGATIVE_INFINITY` になります。
- `NEGATIVE_INFINITY` も含む任意の負の値と、 `NEGATIVE_INFINITY` の積は {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}} になります。
- 任意の正の数を `NEGATIVE_INFINITY` で割った商は、[負のゼロ](https://ja.wikipedia.org/wiki/−0)になります（[IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) で定義されているとおり）。
- 任意の負の数を `NEGATIVE_INFINITY` で割った商は、[正のゼロ](https://ja.wikipedia.org/wiki/0)になります（[IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) で定義されているとおり）。
- 零 と `NEGATIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- NaN と `NEGATIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- `NEGATIVE_INFINITY` を `NEGATIVE_INFINITY` 以外の任意の負の値で割った商は {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}} になります。
- `NEGATIVE_INFINITY` を {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}} 以外の任意の正の値で割った商は `NEGATIVE_INFINITY` になります。
- `NEGATIVE_INFINITY` を `NEGATIVE_INFINITY` または {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}} のいずれかで割った商は {{jsxref("NaN")}} になります。
- `x > Number.NEGATIVE_INFINITY` は _x_ の値が `NEGATIVE_INFINITY` ではない場合に true になります。

成功した場合に有限数を返す関数がエラーである状態を示すために、`Number.NEGATIVE_INFINITY` プロパティを使いたいかもしれません。しかし、そのような場合は {{jsxref("NaN")}} の方がより適しているでしょう。

`NEGATIVE_INFINITY` は {{jsxref("Number")}} の静的プロパティですので、数値のプロパティとしてではなく、常に `Number.NEGATIVE_INFINITY` として使用してください。

## 例

### NEGATIVE_INFINITY の使用

以下の例では、変数 `smallNumber` に最小値よりも小さな値が代入されています。{{jsxref("Statements/if...else", "if")}} ステートメントが実行されたとき、`smallNumber` は `-Infinity` の値を持つので、処理が継続する前に `smallNumber` により扱いやすい値がセットされます。

```js
let smallNumber = -Number.MAX_VALUE * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite()")}}
