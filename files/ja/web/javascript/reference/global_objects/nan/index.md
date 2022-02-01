---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
tags:
  - JavaScript
  - プロパティ
  - リファレンス
browser-compat: javascript.builtins.NaN
translation_of: Web/JavaScript/Reference/Global_Objects/NaN
---
{{jsSidebar("Objects")}}

グローバルプロパティ **`NaN`** は非数 (Not-A-Number) を表す値です。

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## 解説

`NaN` は**グローバルオブジェクト**のプロパティです。言い換えれば、グローバルスコープにある変数です。

`NaN` の初期値は非数であり、 {{jsxref("Number.NaN")}} の値と同等です。最近のブラウザーであれば、 `NaN` は設定、書き込みがともに不可能なプロパティとなっています。そうでない場合であっても、オーバーライドは無効となります。プログラムの中で `NaN` を使用するのは、むしろまれなことです。

`NaN` を返す演算には 5 種類があります。

- 数値が解釈できない (例えば `parseInt("blabla")` または `Number(undefined)`)
- 結果が実数にならない数学演算 (例えば `Math.sqrt(-1)`)
- オペランドが `NaN` である (例えば `7 ** NaN`)
- 不確定形 (例えば `0 * Infinity` または `undefined + undefined`)
- 文字列が関わる加算以外の何らかの演算 (例えば `"foo" / 3`)

## 例

### NaN に対するテスト

`NaN` は別の `NaN` 値を含むあらゆる数と (`==`、`!=`、`===`、`!==` によって) 同じではないと比較されます。ある値が `NaN` かどうかを的確に判定するには {{jsxref("Number.isNaN()")}} か {{jsxref("Global_Objects/isNaN", "isNaN()")}} を使用してください。あるいは自己比較を実行しましょう。 `NaN` は、また `NaN` だけが、自身と同等ではないと比較評価されます。

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
Number.isNaN(NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```

ただし、 `isNaN()` と `Number.isNaN()` には違いがあることに気をつけてください。前者は、値そのものが `NaN` であったり、値の変換の結果 `NaN` になる場合に `true` を返します。後者は値そのものが `NaN` のときにだけ `true` を返します。

```js
isNaN('hello world');        // true
Number.isNaN('hello world'); // false
```

同じ理由で、 `bigint` 値の場合は `isNaN()` ではエラーが発生しますが、 `Number.isNaN()` では発生しません。

```js
isNaN(1n);        // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

加えて、配列メソッドの中には `NaN` を見つけることができるもの、できないものがあります。

```js
let arr = [2, 4, NaN, 12];
arr.indexOf(NaN);                      // -1 (false)
arr.includes(NaN);                     // true
arr.findIndex(n => Number.isNaN(n));   // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
