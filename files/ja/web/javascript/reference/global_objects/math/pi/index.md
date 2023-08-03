---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
---

{{JSRef}}

**`Math.PI`** プロパティは、円周と直径の比率、およそ 3.14159 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pi.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`PI` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.PI` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.PI の使用

次の関数は `Math.PI` を使用して、指定された半径を持つ円の円周を計算します。

```js
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1); // 6.283185307179586
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.PI")}}

## 関連情報

- {{jsxref("Math")}}
