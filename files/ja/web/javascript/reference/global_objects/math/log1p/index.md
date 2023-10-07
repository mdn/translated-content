---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
---

{{JSRef}}

**`Math.log1p()`** 関数は、 1 + 数値の ({{jsxref("Math.E", "e")}} を底とする) 自然対数を返します。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mo>-</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log1p.html")}}

## 構文

```
Math.log1p(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

1 + 与えられた数値の ({{jsxref("Math.E", "e")}} を底とした) 自然対数です。数値が **-1** よりも小さかった場合は {{jsxref("NaN")}} が返されます。

## 解説

`x` の値が非常に小さかった場合、 1 を加えると有効精度が減少します。 JS で使用する倍精度浮動小数点型の精度は 15 桁です。 1 + 1e-15 = 1.000000000000001 ですが、 1 + 1e-16 = 1.000000000000000 となり、 15 桁を超えた桁は四捨五入されるため、正確に 1.0 となります。

log(1 + x) を計算すると、 x が小さければ、 x にとても近い答えになるはずです (これが「自然」対数と呼ばれる所以です)。 Math.log(1 + 1.1111111111e-15) を計算すると、 1.1111111111e-15 に近い答えが得られるはずです。しかし、 1.00000000000000111022 の対数を取ることになります (四捨五入は二進数なので、時に醜い結果になることがあります) ので、答えは 1.11022...e-15 となり、正しい数字は 3 桁だけです。もし、代わりに Math.log1p(1.1111111111e-15) を計算した場合は、もっとずっと正確な答えである 1.1111111110999995e-15 が得られ、 15 桁の正しい数字が得られます (この場合は実際には 16 桁です)。

`x` の値が -1 未満であった場合、返値は常に {{jsxref("NaN")}} です。

`log1p()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log1p()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## ポリフィル

これは次の関数でエミュレートできます。

```js
Math.log1p =
  Math.log1p ||
  function (x) {
    x = Number(x);
    if (x < -1 || x !== x) return NaN;
    if (x === 0 || x === Infinity) return x;

    var nearX = x + 1 - 1;

    return nearX === 0 ? x : x * (Math.log(x + 1) / nearX);
  };
```

## 例

### Math.log1p() の使用

```js
Math.log1p(1); // 0.6931471805599453
Math.log1p(0); // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.log1p")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
