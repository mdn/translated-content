---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

{{JSRef("Global_Objects", "Object")}}

**`toLocaleString()`** 方法返回一个该对象的字符串表示。此方法被用于派生对象为了特定语言环境的目的（locale-specific purposes）而重载使用。

## 语法

```plain
obj.toLocaleString();
```

### 返回值

表示对象的字符串。

## 描述

{{jsxref("Object")}} `toLocaleString` 返回调用 {{jsxref("Object.toString", "toString()")}} 的结果。

该函数提供给对象一个通用的`toLocaleString` 方法，即使不是全部都可以使用它。见下面的列表。

### 覆盖 `toLocaleString` 的对象

- {{jsxref("Array")}}：{{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}：{{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}：{{jsxref("Date.prototype.toLocaleString()")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.toString()")}}
