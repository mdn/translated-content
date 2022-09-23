---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
---

{{JSRef}}

**`Math.SQRT2`** プロパティは、 1/2 の平方根、約 0.707 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0.707</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`SQRT1_2` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.SQRT1_2` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.SQRT1_2 の使用

以下の関数は 1 を 2 の平方根で割った値を返します。

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## 仕様書

| 仕様書                                                                           |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.sqrt1_2', 'Math.SQRT1_2')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.SQRT1_2")}}

## 関連情報

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
