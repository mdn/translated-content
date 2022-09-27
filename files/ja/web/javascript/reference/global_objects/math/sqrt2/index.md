---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
---

{{JSRef}}

**`Math.SQRT2`** プロパティは、 2 の平方根、約 1.414 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt2.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`SQRT2` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.SQRT2` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.SQRT2 の使用

以下の関数は 2 の平方根を返します。

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## 仕様書

| 仕様書                                                                       |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.sqrt2', 'Math.SQRT2')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.SQRT2")}}

## 関連情報

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
