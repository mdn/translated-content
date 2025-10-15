---
title: Math.PI
short-title: PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.PI`** は静的データプロパティで、円周と直径の比率、およそ 3.14159 を表します。

{{InteractiveExample("JavaScript デモ: Math.PI")}}

```js interactive-example
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(Math.PI);
// 予想される結果: 3.141592653589793

console.log(calculateCircumference(10));
// 予想される結果: 62.83185307179586
```

## 値

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙿𝙸</mi><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{Math.PI} = \pi \approx 3.14159</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

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

{{Compat}}

## 関連情報

- {{jsxref("Math")}}
