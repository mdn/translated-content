---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---

{{JSRef}}

**`Math.abs()`** 関数は、数値の絶対値を返します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>></mo><mn>0</mn></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(z)}} = {|z|} = \begin{cases} x &#x26; \text{if} \quad x \geq 0 \\ x &#x26; \text{if} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

## 構文

```
Math.abs(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

与えられた数値の絶対値。

## 解説

`abs()` は `Math` オブジェクトの静的メソッドなので、 `Math` オブジェクトを生成してメソッドとして使用するのではなく、常に `Math.abs()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.abs() の動作

空のオブジェクト、複数のメンバーを持つ配列、数値でない文字列、 {{jsxref("undefined")}}、 空の変数を渡すと、 {{jsxref("NaN")}} を返します。 {{jsxref("null")}} を渡すと空文字列を返し、空の配列は 0 を返します。

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.abs")}}

## 関連情報

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
