---
title: CSSMathSum：CSSMathSum() 构造函数
short-title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
l10n:
  sourceCommit: e1f6592bf96c5614a81ccb5dbd65e301b734b0e7
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`CSSMathSum()`** 构造函数创建一个新的 {{domxref("CSSMathSum")}} 对象。它表示在 {{domxref('CSSNumericValue')}} 上调用 {{domxref('CSSNumericValue.add','add()')}}、{{domxref('CSSNumericValue.sub','sub()')}} 或者 {{domxref('CSSNumericValue.toSum','toSum()')}} 得到的结果。

## 语法

```js-nolint
new CSSMathSum(values)
```

### 参数

- `values`
  - : 一个或多个数字（被封装为具有 `unit: "number"` 的 {{domxref("CSSUnitValue")}}）或 {{domxref("CSSNumericValue")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
