---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

`null` 值特指未不存在任何对象值。它是 JavaScript 的[原始值](/zh-CN/docs/Glossary/Primitive)之一，且在布尔运算中被视为[假值](/zh-CN/docs/Glossary/Falsy)。

{{InteractiveExample("JavaScript Demo: Standard built-in objects - Null")}}

```js interactive-example
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels("sky"));
// Expected output: 0
```

## 语法

```js-nolint
null
```

## 描述

值 `null` 被写作字面量：`null`。不像 {{jsxref("undefined")}}，`null` 不是全局对象的属性。相反，`null` 是表示缺少的标识，指示变量未指向任何对象。在 API 中，`null` 常在预期的值应是一个对象，但又没有关联的对象的地方使用。

```js
// foo 不存在。它从未被定义或初始化：
foo; //ReferenceError: foo is not defined
```

```js
// 已知 foo 现在已经存在，但它没有类型和值：
const foo = null;
foo; //null
```

## 示例

### `null` 与 `undefined` 的不同点

当检查值是否为 `null` 或 `undefined` 时，请注意[相等（==）与全等（===）运算符的区别](/zh-CN/docs/Web/JavaScript/Reference/Operators)，前者会执行类型转换：

```js
typeof null; // "object"（因历史原因而不是 "null"）
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
- {{jsxref("Operators/void", "void")}}
