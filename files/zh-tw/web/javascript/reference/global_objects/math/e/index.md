---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.E`** 靜態資料屬性代表歐拉數（Euler's number），即自然對數的底數 e ，其值約為 2.718。

{{InteractiveExample}}

```js interactive-example
function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// Expected output: 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// Expected output: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// Expected output: 105.12710963760242

```

## 值

<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{Math.E} = e \approx 2.718</annotation></semantics>
</math>

{{js_property_attributes(0, 0, 0)}}

## 描述

由於 `E` 是 `Math` 的靜態屬性，因此你必須使用 `Math.E`，而不是從你所建立的 `Math` 物件中存取該屬性（`Math` 並非建構子）。

## 範例

### 使用 Math.E

以下函式會回傳 e：

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
