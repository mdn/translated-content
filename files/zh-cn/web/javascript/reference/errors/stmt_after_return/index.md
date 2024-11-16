---
title: "Warning: unreachable code after return statement"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

当在 {{jsxref("Statements/return", "return")}} 语句之后使用别的语句，或在无分号返回语句之后直接在后面跟随表达式，会出现 JavaScript 警告“unreachable code after return statement”。

## 错误信息

```plain
Warning: unreachable code after return statement (Firefox)
```

## 错误类型

警告

## 什么地方出错了？

在 `return` 语句之后的不可达的语句会在下列情形中产生：

- 在 {{jsxref("Statements/return", "return")}} 语句之后出现其他表达式；
- 在省略分号的 return 语句之后直接跟随一个表达式。

当一个表达式出现在一个有效的 `return` 表达式之后时，会出现这个警告，用以说明在 `return` 语句之后的表达式不可达，即这条语句之后的表达式永远不会运行。

为什么需要在 `return` 语句之后添加分号？在省略分号的 `return` 语句之后，开发者想要终止当前函数的执行还是返回 return 之后表达式的结果的意图是不明确的。这个警告表明这种情况下 `return` 语句的表述具有二义性。

当在省略分号的 return 语句之后出现下列语句时，不会出现警告：

- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/function", "function")}}

## 示例

### 无效的例子

```js-nolint example-bad
function f() {
  let x = 3;
  x += 4;
  return x;   // return 立刻退出函数
  x -= 3;     // 因此这一行永远不会执行；它是不可到达的代码。
}

function g() {
  return     // 这被视为 `return;`
    3 + 4;   // 因此函数返回，这行永不执行。
}
```

### 有效的例子

```js-nolint example-good
function f() {
  let x = 3;
  x += 4;
  x -= 3;
  return x; // OK：在所有其他语句之后返回。
}

function g() {
  return 3 + 4 // OK：在同一行上，无需分号的返回表达式。
}
```

## 参见

- [自动分号补全](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)
