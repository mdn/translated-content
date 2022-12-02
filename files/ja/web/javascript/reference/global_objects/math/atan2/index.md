---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
---

{{JSRef}}

**`Math.atan2()`** 関数は、`Math.atan2(y, x)` に対して点 (0, 0) から点 (x, y) までの半直線と、正の x 軸の間の平面上での角度 (ラジアン単位) を返します。

{{EmbedInteractiveExample("pages/js/math-atan2.html")}}

## 構文

```
Math.atan2(y, x)
```

### 引数

- `y`
  - : 点の y 座標です。
- `x`
  - : 点の x 座標です。

### 返値

点 (0, 0) から点 <math><semantics><annotation encoding="TeX">(x,y)</annotation></semantics></math> までの半直線と、正の x 軸の間の (<math><semantics><mrow><mo stretchy="false">[</mo><mo>-</mo><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy="false">]</mo></mrow><annotation encoding="TeX">[-\pi, \pi]</annotation></semantics></math> 内の) ラジアン単位の角度です。

## 解説

`Math.atan2()` メソッドは、`(x, y)` 座標のシータ角を表す -π から π までの数値を返します。これは、ラジアン単位で表された、正の X 軸と点 `(x, y)` の間の反時計回りの角度です。このメソッドへ渡す引数は、初めに y 座標、次に x 座標であることに注意してください。

![A simple diagram showing the angle returned by atan2(y, x)](atan2.png)

`Math.atan2()` は、`x` と `y` が別々に渡され、 `Math.atan()` は 2 つの引数の比率が渡されます。

`atan2()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.atan2()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.atan2() の使用

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2(±0, -0);               // ±PI.
Math.atan2(±0, +0);               // ±0.
Math.atan2(±0, -x);               // ±PI for x > 0.
Math.atan2(±0, x);                // ±0 for x > 0.
Math.atan2(-y, ±0);               // -PI/2 for y > 0.
Math.atan2(y, ±0);                // PI/2 for y > 0.
Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
Math.atan2(±Infinity, +Infinity); // ±PI/4.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.atan2")}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
