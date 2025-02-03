---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
l10n:
  sourceCommit: 2ec170b6264d51a15be498ac99b8a30b3dadec15
---

{{JSRef}}

**`Math.LOG2E`** 靜態數據屬性表示 [e](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/E) 以 2 為底的對數值，約為 1.443。

{{InteractiveExample("shorter")}}

```js interactive-example
function getLog2e() {
  return Math.LOG2E;
}

console.log(getLog2e());
// Expected output: 1.4426950408889634

```

## 值

<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟸𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.443</mn></mrow><annotation encoding="TeX">\mathtt{Math.LOG2E} = \log_2(\mathrm{e}) \approx 1.443</annotation></semantics>
</math>

{{js_property_attributes(0, 0, 0)}}

## 描述

由於 `LOG2E` 是 `Math` 的靜態屬性，因此你應始終以 `Math.LOG2E` 的方式使用，而非作為某個 `Math` 物件的屬性（`Math` 並不是建構子）。

## 範例

### 使用 Math.LOG2E

以下函式返回 e 以 2 為底的對數值：

```js
function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
