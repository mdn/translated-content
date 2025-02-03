---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.E`** 静态数据属性表示欧拉数，即自然对数的底数 e，其值约为 2.718。

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

由于 `E` 是 `Math` 对象的静态属性，所以应该像这样使用：`Math.E`，而不是作为你创建的 `Math` 实例对象的属性（`Math` 不是构造函数）。

## 示例

### 使用 Math.E

以下函数返回 e 的值：

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
