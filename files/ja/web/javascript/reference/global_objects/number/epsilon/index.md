---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.EPSILON`** プロパティは、1 と 1 より大きな最小の浮動小数点数の差を表します。

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}

## 値

2<sup>-52</sup>、またはおよそ `2.2204460492503130808472633361816E-16`。

{{js_property_attributes(0, 0, 0)}}

## 解説

`Number.EPSILON` は、1 と数値形式で表現できる次に大きな数値との差です。これは、[倍精度浮動小数点数形式](https://ja.wikipedia.org/wiki/倍精度浮動小数点数)では[仮数部](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値のエンコーディング)を 52 ビットでしか表現できず、最低ビットは 2<sup>-52</sup> で表されるためです。

なお、浮動小数点数の絶対精度は、数が大きくなるにつれ、指数が大きくなる一方で仮数部の精度は変わらないため、低下します。{{jsxref("Number.MIN_VALUE")}} は表現可能な正の数の最小値であり、`Number.EPSILON` よりもはるかに小さいものです

`EPSILON` は {{jsxref("Number")}} の静的プロパティなので、数値のプロパティとしてではなく、常に `Number.EPSILON` として使用しています。

## 例

### 同等性のテスト

10 進数や 2 進数など、どのような基数を選んでも、有限のビット数を占める数字エンコーディングシステムは、必然的にすべての数字を正確に表すことができません。なぜなら、有限のメモリーを使用して、数直線上の無限の点を表現しようとすることになるからです。例えば、10 進法では 1/3 を正確に表せませんし、2 進法では `0.1`を正確に表せません。したがって、例えば、`0.1 + 0.2` は `0.3` と正確に等しくはなりません。

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

このため、**浮動小数点数で `===` と比較してはいけない**というアドバイスがたくさんあります。その代わりに、異なる 2 種類の数値が十分に近い場合には、等しいとみなすことができます。`EPSILON`は、要するに `1` という数字がどの程度正確かを指定するものなので、演算結果が `1` 程度の大きさであれば、通常 `Number.EPSILON` 定数がエラーに対する妥当な閾値となります。

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

しかし、`Number.EPSILON` は、それ以上の大きさの演算処理を行う場合には不適切です。もしデータが 10<sup>3</sup> 程度の大きさであれば、小数点以下の部分は `Number.EPSILON` よりもずっと小さな精度を持つことになります。

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(x + y); // 2000.3000000000002; error of 10^-13 instead of 10^-16
console.log(equal(x + y, z)); // false
```

この場合、より大きな公差が必要となります。比較する数値の大きさはおよそ `2000` であるので、`2000 * Number.EPSILON` のような乗数で、この例では十分な許容範囲を作ることができます。

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

大きさだけでなく、入力の*精度*も考慮することが重要です。例えば、数値がフォーム入力から収集され、入力値が `0.1` のステップでしか調整できない場合（すなわち [`<input type="number" step="0.1">`](/ja/docs/Web/HTML/Attributes/step)）、データは `0.1` の精度しかないので通常は `0.01` など、はるかに大きな許容差を認めることを意味します。

> **メモ:** 有益な教訓：等値検査の閾値として、単純に `Number.EPSILON` を使用しないでくださ い。比較する数値の大きさや精度に適した閾値を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.EPSILON` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- 所属先の {{jsxref("Number")}} オブジェクト
