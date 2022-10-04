---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
---

{{jsSidebar("Errors")}}

## 信息

```plain
ReferenceError: reference to undefined property "x" (Firefox)
```

## 错误类型

仅在 [strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 下出现 {{jsxref("ReferenceError")}} 警告。

## 哪里出错了？

脚本尝试去访问一个不存在的对象属性。[property accessors](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 页面描述了两种访问属性的方法。

引用未定义属性的错误仅出现在 [strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 代码中。在非严格代码中，对不存在的属性的访问将被忽略。

## 示例

### 无效的

本例中，`bar` 属性是未定义的，隐藏 `ReferenceError` 会出现。

```js example-bad
"use strict";

var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### 无效的

为了避免错误，您需要向对象添加 `bar` 的定义或在尝试访问 `bar` 属性之前检查 `bar` 属性的存在；一种检查的方式是使用 {{jsxref("Object.prototype.hasOwnProperty()")}} 方法。如下所示：

```js example-good
"use strict";

var foo = {};

// Define the bar property

foo.bar = "moon";
console.log(foo.bar); // "moon"

// Test to be sure bar exists before accessing it

if (foo.hasOwnProperty("bar") {
  console.log(foo.bar);
}
```

## 相关

- [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
