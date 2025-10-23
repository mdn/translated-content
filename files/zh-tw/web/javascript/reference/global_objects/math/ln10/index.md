---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

**`Math.LN10`** 靜態數據屬性表示 10 的自然對數值，約為 2.303。

{{InteractiveExample("JavaScript Demo: Math.LN10", "shorter")}}

```js interactive-example
function getNatLog10() {
  return Math.LN10;
}

console.log(getNatLog10());
// 預期輸出：2.302585092994046
```

## 值

<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟷𝟶</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.303</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN10} = \ln(10) \approx 2.303</annotation></semantics>
</math>

{{js_property_attributes(0, 0, 0)}}

## 描述

由於 `LN10` 是 `Math` 的靜態屬性，因此你應始終以 `Math.LN10` 的方式使用，而非作為某個 `Math` 物件的屬性（`Math` 並不是建構子）。

## 範例

### 使用 Math.LN10

以下函式返回 10 的自然對數值：

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
