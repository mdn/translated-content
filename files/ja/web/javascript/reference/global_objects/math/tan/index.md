---
title: Math.tan()
short-title: tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.tan()`** は静的メソッドで、数値の正接（タンジェント）を返します。

{{InteractiveExample("JavaScript デモ: Math.tan()")}}

```js interactive-example
function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

console.log(getTanFromDegrees(0));
// 予想される結果: 0

console.log(getTanFromDegrees(45));
// 予想される結果: 0.9999999999999999

console.log(getTanFromDegrees(90));
// 予想される結果: 16331239353195370
```

## 構文

```js-nolint
Math.tan(x)
```

### 引数

- `x`
  - : ラジアンで角度を表す数値です。

### 返値

`x` の正接（タンジェント）です。 `x` が {{jsxref("Infinity")}} の場合は `-Infinity`、 {{jsxref("NaN")}} の場合は {{jsxref("NaN")}} を返します。

> [!NOTE]
> 浮動小数点の精度により、正確な値 π/2 を得ることはできないため、 `NaN` でなければ、結果は常に有限となります。

## 解説

`tan()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.tan()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.tan() の使用

```js
Math.tan(-Infinity); // NaN
Math.tan(-0); // -0
Math.tan(0); // 0
Math.tan(1); // 1.5574077246549023
Math.tan(Math.PI / 4); // 0.9999999999999999 (浮動小数点エラー)
Math.tan(Infinity); // NaN
```

### Math.tan() および π/2

正確に `tan(π/2)` を計算することはでいません。

```js
Math.tan(Math.PI / 2); // 16331239353195370
Math.tan(Math.PI / 2 + Number.EPSILON); // -6218431163823738
```

### Math.tan() に角度の値を使用

`Math.tan()` 関数はラジアンを受け付けますが、角度で使用したほうが簡単な場合が多いので、次の関数は角度の値を受け付け、それをラジアンに変換してタンジェントを返します。

```js
function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
