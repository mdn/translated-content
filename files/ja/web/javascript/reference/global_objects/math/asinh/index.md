---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
---

{{JSRef}}

**`Math.asinh()`** 関数は、数値の双曲線逆正弦 (ハイパーボリックアークサイン) を返します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

## 構文

```
Math.asinh(x)
```

### 引数

- `x`
  - : 数値

### 返値

与えられた数値の双曲線逆正弦 (ハイパーボリックアークサイン) です。

## 解説

`asinh()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.asinh()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.asinh() の使用

```js
Math.asinh(1); // 0.881373587019543
Math.asinh(0); // 0
```

## ポリフィル

`Math.asinh` は、次の関数でエミュレートできます。

```js
if (!Math.asinh)
  Math.asinh = function (x) {
    var absX = Math.abs(x),
      w;
    if (absX < 3.725290298461914e-9)
      // |x| < 2^-28
      return x;
    if (absX > 268435456)
      // |x| > 2^28
      w = Math.log(absX) + Math.LN2;
    else if (absX > 2)
      // 2^28 >= |x| > 2
      w = Math.log(2 * absX + 1 / (Math.sqrt(x * x + 1) + absX));
    else
      var t = x * x,
        w = Math.log1p(absX + t / (1 + Math.sqrt(1 + t)));

    return x > 0 ? w : -w;
  };
```

`Math.log1p` にもポリフィルを適用する必要があるかもしれません。詳しくは [Math.log1p](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.asinh")}}

## 関連情報

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
