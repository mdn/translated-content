---
title: Math.sin()
short-title: sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

**`Math.sin()`** は静的メソッドで、ラジアン単位で表した数値の正弦（サイン）を返します。

{{InteractiveExample("JavaScript デモ: Math.sin()")}}

```js interactive-example
function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 10));
// 予想される結果: 8.414709848078965

console.log(getCircleY(2, 10));
// 予想される結果: 9.092974268256818

console.log(getCircleY(Math.PI, 10));
// 予想される結果: 1.2246467991473533e-15
```

## 構文

```js-nolint
Math.sin(x)
```

### 引数

- `x`
  - : ラジアンで角度を表す数値です。

### 返値

`x` の正弦で、-1 から 1 まで（両端を含む）です。`x` が {{jsxref("Infinity")}}、`-Infinity`、または {{jsxref("NaN")}} の場合は、{{jsxref("NaN")}} を返します。

## 解説

`sin()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.sin()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.sin() の使用

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
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
- {{jsxref("Math.tan()")}}
- CSS {{cssxref("sin()")}} 関数
