---
title: 'TypeError: variable "x" redeclares argument'
slug: orphaned/Web/JavaScript/Reference/Errors/Var_hides_argument
original_slug: Web/JavaScript/Reference/Errors/Var_hides_argument
---
{{jsSidebar("Errors")}}

## 消息

```plain
TypeError: variable "x" redeclares argument (Firefox)
```

## 错误类型

{{jsxref("TypeError")}} 警告仅仅在 [严格模式下](/en-US/docs/Web/JavaScript/Reference/Strict_mode) 出现。

## 哪里有问题？

函数参数中出现了名称相同的变量，之后在函数体中使用 [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) 赋值语句重新声明。 这可能是一个命名冲突，所以 JavaScript 警告了它。

这个错误只在 [严格模式的代码](/en-US/docs/Web/JavaScript/Reference/Strict_mode) 中作为警告出现。在非严格模式的代码中，重新声明会被忽略。

## 示例

### 无效情况

这个例子中，变量 `arg` 重新声明了参数。

```js example-bad
"use strict";

function f(arg) {
  var arg = "foo";
}
```

### 无效情况

为了修复警告，[`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) 语句应该被移除，因为变量已经存在。或者，你可以重命名函数参数或者变量名称。

```js example-good
"use strict";

function f(arg) {
  arg = "foo";
}
```

## 另见

- [严格模式](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
