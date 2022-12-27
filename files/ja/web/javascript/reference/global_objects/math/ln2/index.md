---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
---

{{JSRef}}

**`Math.LN2`** プロパティは 2 の自然対数、およそ 0.693 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-ln2.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`LN2` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.LN2` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.LN2 の使用

以下の関数は、2 の自然対数を返します。

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## 仕様書

| 仕様書                                                               |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.ln2', 'Math.LN2')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.LN2")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
