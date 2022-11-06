---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---

{{jsSidebar("Statements")}}

**`debugger` 语句**调用任何可用的调试功能，例如设置断点。如果没有调试功能可用，则此语句不起作用。

## 语法

```js-nolint
debugger;
```

## 示例

下面的例子演示了一个包含 `debugger` 语句的函数，当函数被调用时，会尝试调用一个可用的调试器进行调试。

```js
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}
```

当 debugger 被调用时，执行暂停在 `debugger` 语句的位置。就像在脚本源代码中的断点一样。

![开发人员工具打开到调试器面板的浏览器，显示如何在调试器语句处暂停执行，以允许仔细检查变量、作用域、事件等。](screen_shot_2014-02-07_at_9.14.35_am.png)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在火狐开发者工具中调试](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
