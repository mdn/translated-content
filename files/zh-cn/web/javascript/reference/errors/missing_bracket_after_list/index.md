---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: missing ] after element list
```

## 错误类型

{{jsxref("SyntaxError")}}.

## 哪里出错了？

数组初始化在某处出现了语法错误。比如缺少了右中括号 ("`]`") 或一个逗号 ("`,`")。

## 示例

### 不正确的数组初始化

```js example-bad
var list = [1, 2,

var instruments = [
  "Ukulele",
  "Guitar",
  "Piano"
};

var data = [{foo: "bar"} {bar: "foo"}];
```

正确的是：

```js example-good
var list = [1, 2];

var instruments = ["Ukulele", "Guitar", "Piano"];

var data = [{ foo: "bar" }, { bar: "foo" }];
```

## 相关

- {{jsxref("Array")}}
