---
title: CSSNumericValue：div() 方法
slug: Web/API/CSSNumericValue/div
---

{{APIRef("CSS Typed OM")}}

{{domxref("CSSNumericValue")}} 接口的 **`div()`** 方法将 `CSSNumericValue` 除以提供的值。

## 语法

```js-nolint
div(number)
```

### 参数

- `number`
  - : 可以是一个数字或者一个 {{domxref('CSSNumericValue')}}。

### 返回值

一个 {{domxref('CSSMathProduct')}}。

### 异常

- {{jsxref("TypeError")}}
  - ：如果传递给方法的类型无效，则抛出错误。

## 示例

```js
let mathProduct = CSS.px("24").div(CSS.percent("4"));
// 输出 "calc(24px / 4%)"
mathProduct.toString();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
