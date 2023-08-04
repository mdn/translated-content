---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
---

{{JSRef}}

**`Math.cos()`** は静的関数で、指定された角度の余弦 ([コサイン](https://ja.wikipedia.org/wiki/コサイン)) を返します。ここで角度は[ラジアン](https://ja.wikipedia.org/wiki/ラジアン)で指定します。この値は <math style="display: inline;"><mstyle displaystyle="true"><mfrac><msub><mrow><mtext>length</mtext> </mrow><mrow><mrow><mtext>adjacent</mtext> </mrow></mrow></msub><msub><mrow><mtext>length</mtext> </mrow><mrow><mrow><mtext>hypotenuse</mtext> </mrow></mrow></msub></mfrac></mstyle></math> です。

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## 構文

```
Math.cos(x)
```

### 引数

- `x`
  - : 余弦を返すラジアンの角度。

### 返値

与えられた数値の余弦 (コサイン) です。

## 解説

`Math.cos()` メソッドはラジアンで指定された角度の余弦 (コサイン) を表す -1 から 1 までの範囲の数値を表します。

`cos()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.cos()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.cos() の使用

```js
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.cos")}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
