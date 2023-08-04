---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
---

{{jsSidebar("Objects")}}

值 `null` 特指对象的值未设置。它是 JavaScript {{Glossary("Primitive", "基本类型")}} 之一，在布尔运算中被认为是[falsy](/zh-CN/docs/Glossary/Falsy)。

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## 语法

```plain
null
```

## 描述

值 `null` 是一个字面量，不像 {{jsxref("Global_Objects/undefined","undefined")}}，它不是全局对象的一个属性。`null` 是表示缺少的标识，指示变量未指向任何对象。把 `null` 作为尚未创建的对象，也许更好理解。在 API 中，`null` 常在返回类型应是一个对象，但没有关联的值的地方使用。

```js
// foo 不存在，它从来没有被定义过或者是初始化过：
foo;
// ReferenceError: foo is not defined

// foo 现在已经是知存在的，但是它没有类型或者是值：
var foo = null;
foo;
// null
```

### `null` 与 `undefined` 的不同点：

当检测 `null` 或 `undefined` 时，注意[相等（==）与全等（===）两个操作符的区别](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) ，前者会执行类型转换：

```js
typeof null; // "object" (因为一些以前的原因而不是'null')
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; //true
isNaN(1 + null); // false
isNaN(1 + undefined); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
