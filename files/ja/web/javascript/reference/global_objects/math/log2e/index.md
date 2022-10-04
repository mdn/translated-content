---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
---

{{JSRef}}

**`Math.LOG2E`** プロパティは 2 を底とした e の対数、約 1.442 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2e.html","shorter")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`LOG2E` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.LOG2E` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.LOG2E の使用

以下の関数は、2 を底とした e の対数を返します。

```js
function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## 仕様書

| 仕様書                                                                       |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.log2e', 'Math.LOG2E')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.LOG2E")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
