---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

**`Math.SQRT2`** 是一个静态数据属性，表示 2 的平方根，约等于 1.414。

{{InteractiveExample("JavaScript Demo: Math.SQRT2", "shorter")}}

```js interactive-example
function getRoot2() {
  return Math.SQRT2;
}

console.log(getRoot2());
// 预期输出：1.4142135623730951
```

## 值

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟸</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT2} = \sqrt{2} \approx 1.414</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## 描述

`Math.SQRT2` 是一个常量，它是 [`Math.sqrt(2)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) 的性能更优等价写法。

由于 `SQRT2` 是 `Math` 的静态属性，因此你应始终使用 `Math.SQRT2` 来访问它，而不是通过某个你创建的 `Math` 对象来访问（`Math` 不是构造函数）。

## 示例

### 使用 Math.SQRT2

以下函数返回 2 的平方根：

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
