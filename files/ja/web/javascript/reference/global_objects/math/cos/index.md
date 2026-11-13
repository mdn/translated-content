---
title: Math.cos()
short-title: cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

**`Math.cos()`** は静的メソッドで、ラジアン単位で表した角度の余弦（コサイン）を返します。

{{InteractiveExample("JavaScript デモ: Math.cos()")}}

```js interactive-example
function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

console.log(getCircleX(1, 10));
// 予想される結果: 5.403023058681398

console.log(getCircleX(2, 10));
// 予想される結果: -4.161468365471424

console.log(getCircleX(Math.PI, 10));
// 予想される結果: -10
```

## 構文

```js-nolint
Math.cos(x)
```

### 引数

- `x`
  - : 角度をラジアンで表した数値です。

### 返値

`x` の余弦で、-1 以上 1 以下です。 `x` が{{jsxref("Infinity")}}、`-Infinity`、または {{jsxref("NaN")}} の場合、 {{jsxref("NaN")}} を返します。

## 解説

`cos()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.cos()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.cos() の使用

```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
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
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
- CSS {{cssxref("cos()")}} 関数
