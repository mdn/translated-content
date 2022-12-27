---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---

{{JSRef}}

**`Math.LOG10E`** プロパティは 10 を底とした e の対数、約 0.434 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10e.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`LOG10E` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.LOG10E` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.LOG10E の使用

以下の関数は、10 を底とした e の対数を返します。

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## 仕様書

| 仕様書                                                                       |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.log10e', 'Math.LOG10E')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.LOG10E")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
