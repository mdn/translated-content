---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: missing } after property list
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

在[对象初始化](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)的时候语法出错了。可能是遗漏了一个大括号，也可能是遗漏了逗号。还要检查是否以正确的顺序关闭了大括号或括号。缩进或格式化代码也许可以更好帮助你看清这些芜杂的。

## 示例

### 遗漏的逗号

很多情况下，对象初始值代码会中缺少逗号：

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

正确的是：

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## 相关

- [Object initializer](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)
