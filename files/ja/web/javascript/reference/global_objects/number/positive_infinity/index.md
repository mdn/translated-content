---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
tags:
  - JavaScript
  - Number
  - プロパティ
  - リファレンス
browser-compat: javascript.builtins.Number.POSITIVE_INFINITY
translation_of: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---
{{JSRef}}

**`Number.POSITIVE_INFINITY`** プロパティは正の無限大を表す値です。

{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`Number.POSITIVE_INFINITY` の値はグローバルオブジェクトの {{jsxref("Infinity")}} プロパティの値と同じです。

この値は数学的な無限大とは少々異なった振る舞いをします。

- `POSITIVE_INFINITY` も含む任意の正の値と、 `POSITIVE_INFINITY` の積は `POSITIVE_INFINITY` になります。
- {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} も含む任意の負の値と、 `POSITIVE_INFINITY` の積は {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} になります。
- 任意の正の数を `POSITIVE_INFINITY` で割った商は、+0 になります。
- 任意の負の数を `POSITIVE_INFINITY` で割った商は、-0 になります。
- 零 と `POSITIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- {{jsxref("NaN")}} と `POSITIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- `POSITIVE_INFINITY` を {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} を除く、任意の負の値で割った商は {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} になります。
- `POSITIVE_INFINITY` を `POSITIVE_INFINITY` を除く、任意の正の値で割った商は `POSITIVE_INFINITY` になります。
- `POSITIVE_INFINITY` を {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} と `POSITIVE_INFINITY` のどちらかで割った商は {{jsxref("NaN")}} になります。
- `Number.POSITIVE_INFINITY > x` は任意の数 _x_ が `POSITIVE_INFINITY` でない場合に true になります。

成功した場合に有限数を返す関数がエラーである状態を示すために、`Number.POSITIVE_INFINITY` プロパティを使いたいかもしれません。しかし、そのような場合は、 {{jsxref("isFinite")}} の方がより適しているであろうことに留意してください。

`POSITIVE_INFINITY` は {{jsxref("Number")}} の静的プロパティですので、作成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に `Number.POSITIVE_INFINITY` として扱ってください。

## 例

### POSITIVE_INFINITY の使用

以下の例では、変数 `bigNumber` に最大値よりも大きな値が代入されています。{{jsxref("Statements/if...else", "if")}} ステートメントが実行されるとき、`bigNumber` は `Infinity` の値を持つので、処理が継続する前に `bigNumber` により扱いやすい値がセットされます。

```js
var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
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
