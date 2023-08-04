---
title: "SyntaxError: test for equality (==) mistyped as assignment (=)?"
slug: Web/JavaScript/Reference/Errors/Equal_as_assign
---

{{jsSidebar("Errors")}}

## 消息

```plain
Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?
```

## 错误类型

{{jsxref("SyntaxError")}} 只在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下会出现的警告。

## 什么地方出错了？

在通常期望进行相等判定（`==`）的地方出现了赋值`（=`）。为了帮助调试，JavaScript（在开启严格模式的情况下）会对这种情况进行警告。

## 示例

### 条件表达式内的赋值

不建议在条件表达式中（例如 [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)）使用简单赋值语句，因为在扫视代码的时候赋值操作与相等判定容易产生混淆。例如，不要使用以下写法：

```js-nolint example-bad
if (x = y) {
  // do the right thing
}
```

如果你需要在条件表达式中使用赋值语句，通常的做法是用一对括号把赋值语句包起来。例如：

```js
if ((x = y)) {
  // do the right thing
}
```

否则，你的本意可能是想用比较操作符（如 `==` 或 `===`）：

```js
if (x == y) {
  // do the right thing
}
```

## 相关页面

- [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
- [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [Comparison operators](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
