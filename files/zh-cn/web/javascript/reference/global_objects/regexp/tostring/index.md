---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

**`toString()`** 返回一个表示该正则表达式的字符串。

## 语法

```plain
regexObj.toString()
```

### 参数

无

## 描述

{{jsxref("Global_Objects/RegExp", "RegExp")}} 对象覆盖了 {{jsxref("Global_Objects/Object", "Object")}} 对象的 `toString()` 方法，并没有继承 {{jsxref("Object.prototype.toString()")}}。对于 `RegExp` 对象，`toString` 方法返回一个该正则表达式的字符串形式。

## 示例

### 示例：使用 `toString`

下例输出 `RegExp` 对象的字符串值：

```plain
myExp = new RegExp("a+b+c");
alert(myExp.toString());       // 显示 "/a+b+c/"

foo = new RegExp("bar", "g");
alert(foo.toString());         // 显示 "/bar/g"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.toString()")}}
