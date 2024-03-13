---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

当脚本尝试去访问一个不存在的对象属性时，就会出现 JavaScript 警告“reference to undefined property”。

## 消息

```plain
ReferenceError: reference to undefined property "x" (Firefox)
```

## 错误类型

（仅限 Firefox）仅在 `javascript.options.strict` 首选项设置为 `true` 的情况下会出现 {{jsxref("ReferenceError")}} 警告。

## 哪里出错了？

脚本尝试去访问一个不存在的对象属性。有两种方法可以访问属性，请参阅[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)参考页以获取更多信息。

## 示例

### 无效的

本例中，`bar` 属性是未定义的，因此会出现 `ReferenceError`。

```js example-bad
const foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### 有效的

为了避免错误，你需要向对象添加 `bar` 的定义或在尝试访问 `bar` 属性之前检查 `bar` 属性是否存在；可以使用 {{jsxref("Operators/in", "in")}} 运算符或 {{jsxref("Object.hasOwn()")}} 方法来实现，如下所示：

```js example-good
const foo = {};

// 定义 bar 属性

foo.bar = "moon";
console.log(foo.bar); // "moon"

// 在访问 bar 属性之前测试其是否存在

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar);
}
```

## 参见

- [属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)
