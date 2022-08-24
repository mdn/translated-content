---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---
{{jsSidebar("Statements")}}

**debugger 语句**调用任何可用的调试功能，例如设置断点。 如果没有调试功能可用，则此语句不起作用。

## 语法

```js
debugger;
```

## 示例

下面的例子演示了一个包含 debugger 语句的函数，当函数被调用时，会尝试调用一个可用的调试器进行调试。

```js
function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}
```

当 debugger 被调用时，执行暂停在 debugger 语句的位置。就像在脚本源代码中的断点一样。

[![暂停在 debugger 语句的位置](screen_shot_2014-02-07_at_9.14.35_am.png)](screen_shot_2014-02-07_at_9.14.35_am.png)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [JavaScript 调试](https://developer.mozilla.org/en-US/docs/Debugging_JavaScript)
- [在火狐开发者工具中调试](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
