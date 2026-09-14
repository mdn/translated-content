---
title: Math.E
short-title: E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.E`** は静的プロパティで、オイラー定数である自然対数の底 (e)、約 2.718 を表します。

{{InteractiveExample("JavaScript デモ: Math.E")}}

```js interactive-example
function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// 予想される結果: 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// 予想される結果: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// 予想される結果: 105.12710963760242
```

## 値

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{Math.E} = e \approx 2.718</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## 解説

`E` は `Math` オブジェクトの静的プロパティなので、`Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.E` として使用するようにしてください（`Math` はコンストラクターではありません）。

## 例

### Math.E の使用

以下の関数は、e を返します。

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
