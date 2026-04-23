---
title: Math.SQRT1_2
short-title: SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.SQRT1_2`** は静的データプロパティで、1/2 の平方根、約 0.707 を表します。

{{InteractiveExample("JavaScript デモ: Math.SQRT1_2", "shorter")}}

```js interactive-example
function getRoot1Over2() {
  return Math.SQRT1_2;
}

console.log(getRoot1Over2());
// 予想される結果: 0.7071067811865476
```

## 値

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟷_𝟸</mi><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT1_2} = \sqrt{\frac{1}{2}} \approx 0.707</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## 解説

`Math.SQRT1_2` は定数であり、 [`Math.sqrt(0.5)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) と同等でよりパフォーマンスの高いものです。

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

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
