---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: missing ) after condition
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

这个错误与 if 条件语句是如何写的有关。在任何编程语言中，代码都需要做出一些判断，然后根据不同的判断结果来执行不同的操作。if 语句会在其指定的判断条件为真的时候执行。在 JavaScript 中，条件表达式必须出现在 if 关键字后面的一对括号中，像下面这样：

```js
if (condition) {
  // do something if the condition is true
}
```

## 示例

下面这种情况的出现可能只是出于大意，需要仔细检查代码中的括号。

```js example-bad
if (3 > Math.PI {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

修复代码的方法就是添加闭合条件表达式的右括号。

```js example-good
if (3 > Math.PI) {
  console.log("wait what?");
}
```

如果你是从其他语言转到 JavaScript 的，那么很容易在 JavaScript 中使用与之含义不同或者没有任何意义的关键字。

```js example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

相反你需要使用正确的[比较操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)，如下：

```js example-good
if (done === true) {
  console.log("we are done!");
}
```

## 相关内容

- [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [比较操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [在代码中做判断 — 条件表达式](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals)
