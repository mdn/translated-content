---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
---

{{jsSidebar("Objects")}}

该全局 **`isFinite()`** 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## 语法

```js-nolint
isFinite(testValue)
```

### 参数

- `testValue`
  - : 用于检测有限性（finiteness）的值。

### 描述

isFinite 是全局的方法，不与任何对象有关系。

你可以用这个方法来判定一个数字是否是有限数字。`isFinite` 方法检测它参数的数值。如果参数是 `NaN`，正无穷大或者负无穷大，会返回`false`，其他返回 `true`。

## 示例

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true，在更强壮的 Number.isFinite(null) 中将会得到 false

isFinite("0"); // true，在更强壮的 Number.isFinite('0') 中将会得到 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN()")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
