---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

**`debugger`** 语句会调用任何可用的调试功能，例如设置断点。如果没有调试功能可用，则此语句不会产生任何效果。

## 语法

```js-nolint
debugger;
```

## 示例

### 使用 debugger 语句

以下示例显示了插入了 `debugger` 语句的代码，以便在调用函数时调用调试器（如果存在）。

```js
function potentiallyBuggyCode() {
  debugger;
  // 做一些可能会出现错误的检查、单步调试等。
}
```

当 debugger 被调用时，执行暂停在 `debugger` 语句的位置。就像在脚本源代码中的断点一样。

![打开浏览器及其开发者工具，并显示了调试器面板。该面板展示了如何在 debugger 语句处暂停执行，以便仔细检查变量、作用域、事件等。](screen_shot_2014-02-07_at_9.14.35_am.png)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Firefox 源代码文档中的 [Firefox JavaScript 调试器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
