---
title: "SyntaxError: missing : after property id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: missing : after property id
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

当使用[对象初始化](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)语法创建对象的时候，需要使用半角冒号 (:) 将属性键与属性值隔开。

```js
var obj = { propertyKey: "value" };
```

## 示例

### 冒号与等号

下面的代码会运行失败，原因是对象初始化语法中不允许使用等号来代替冒号。

```js example-bad
var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
```

修复方法就是使用冒号，或者是在对象创建之后使用方括号语法来为其设定新的属性。

```js example-good
var obj = { propertyKey: "value" };

// or alternatively

var obj = {};
obj["propertyKey"] = "value";
```

### 空属性

不能像下面这样创建空属性：

```js example-bad
var obj = { propertyKey; };
// SyntaxError: missing : after property id
```

假如你需要创建一个无值属性，那么需要将它的值设置为 {{jsxref("null")}} 。

```js example-good
var obj = { propertyKey: null };
```

### 计算得来的属性

如果需要使用表达式来创建属性键，那么需要使用方括号。否则属性名称不会进行计算：

```js example-bad
var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
```

把计算表达式放置到方括号（`[]`）中：

```js example-good
var obj = { ["b" + "ar"]: "foo" };
```

## 相关内容

- [Object initializer](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)
