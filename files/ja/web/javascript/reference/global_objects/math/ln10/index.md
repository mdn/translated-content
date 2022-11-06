---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
---

{{JSRef}}

**`Math.LN10`** プロパティは 10 の自然対数、およそ 2.302 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN10</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-ln10.html","shorter")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`LN10` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.LN10` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.LN10 の使用

以下の関数は、10 の自然対数を返します。

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## 仕様書

| 仕様書                                                                   |
| ------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-math.ln10', 'Math.LN10')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.LN10")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
