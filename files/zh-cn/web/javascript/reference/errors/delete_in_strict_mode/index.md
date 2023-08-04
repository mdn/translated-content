---
title: "SyntaxError: applying the 'delete' operator to an unqualified name is deprecated"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Delete of an unqualified identifier in strict mode. (Chrome)
```

## 错误类型

{{jsxref("SyntaxError")}} 仅出现在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下。

## 哪里出错了？

在 JavaScript 中，普通变量是不能通过 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 操作符来删除的。在严格模式下，试图去删除一个变量会报错，这是不允许的。

delete 操作符只能用于删除对象中的属性。只有可配置的对象属性才“符合”被删除的条件。

与一般流行的观点相反的是，delete 操作符与直接释放内存**无关**。内存管理是通过切断引用来间接实现的。可以参考[内存管理](/zh-CN/docs/Web/JavaScript/Memory_management)页面与 [delete](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 操作符页面来获取更多的细节信息。

这个错误提示只出现于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)。在非严格模式下，该操作返回 false。

## 示例

在 JavaScript 中，普通变量是不能删除的，在严格模式下会报错：

```js example-bad
"use strict";

var x;

// ...

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

要释放变量引用的内容，可以将变量值设置为 {{jsxref("null")}}:

```js example-good
"use strict";

var x;

// ...

x = null;

// x can be garbage collected
```

## 相关内容

- [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)
- [内存管理](/zh-CN/docs/Web/JavaScript/Memory_management)
- [TypeError: property "x" is non-configurable and can't be deleted](/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_delete)
