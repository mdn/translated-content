---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
tags:
  - JavaScript
  - Number
  - プロパティ
  - リファレンス
browser-compat: javascript.builtins.Number.NEGATIVE_INFINITY
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---
{{JSRef}}

**`Number.NEGATIVE_INFINITY`** プロパティは負の無限大を表す値です。

{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`Number.NEGATIVE_INFINITY` の値は、グローバルオブジェクトの {{jsxref("Infinity")}} プロパティの負の値と同じです。

この値は数学的な無限大とは少々異なった振る舞いをします。

- {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} も含む任意の正の値と、 `NEGATIVE_INFINITY` の積は `NEGATIVE_INFINITY` になります。
- `NEGATIVE_INFINITY` も含む任意の負の値と、 `NEGATIVE_INFINITY` の積は {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} になります。
- 任意の正の数を `NEGATIVE_INFINITY` で割った商は、-0 になります。
- 任意の負の数を `NEGATIVE_INFINITY` で割った商は、+0 になります。
- 零 と `NEGATIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- NaN と `NEGATIVE_INFINITY` の積は {{jsxref("NaN")}} になります。
- `NEGATIVE_INFINITY` を `NEGATIVE_INFINITY` を除く、任意の負の値で割った商は {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} になります。
- `NEGATIVE_INFINITY` を {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} を除く、任意の正の値で割った商は `NEGATIVE_INFINITY` になります。
- `NEGATIVE_INFINITY` を `NEGATIVE_INFINITY` または {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} のいずれかで割った商は {{jsxref("NaN")}} になります。
- `x > Number.NEGATIVE_INFINITY` は _x_ の値が `NEGATIVE_INFINITY` ではない場合に true になります。

成功した場合に有限数を返す関数がエラーである状態を示すために、`Number.NEGATIVE_INFINITY` プロパティを使いたいかもしれません。しかし、そのような場合は、 {{jsxref("isFinite")}} の方がより適しているであろうことに留意してください。

`NEGATIVE_INFINITY` は {{jsxref("Number")}} の静的プロパティですので、作成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に `Number.NEGATIVE_INFINITY` として扱ってください。

## 例

### NEGATIVE_INFINITY の使用

以下の例では、変数 `smallNumber` に最小値よりも小さな値が代入されています。{{jsxref("Statements/if...else", "if")}} ステートメントが実行されたとき、`smallNumber` は `-Infinity` の値を持つので、処理が継続する前に `smallNumber` により扱いやすい値がセットされます。

```js
var smallNumber = (-Number.MAX_VALUE) * 2;

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
- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
