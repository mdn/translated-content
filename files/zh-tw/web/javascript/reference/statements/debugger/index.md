---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---

{{jsSidebar("Statements")}}

**debugger 的宣告**會執行可用的除錯功能，例如設定斷點。如果沒有可用的除錯功能，這個宣告沒有任何作用。

## 語法

```plain
debugger;
```

## 示例

以下示例示範了插入 debugger 宣告的程式碼，它會在函式被呼叫、而且有除錯器的時候執行除錯器。

```js
function potentiallyBuggyCode() {
  debugger;
  // 執行並驗證一些潛在的問題、或是單步執行之類的。
}
```

呼叫除錯器時，程式會在 debugger 宣告處暫停執行。它有點像是程式碼的斷點。

[![Paused at a debugger statement.](screen_shot_2014-02-07_at_9.14.35_am.png)](screen_shot_2014-02-07_at_9.14.35_am.png)

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [JavaScript 除錯](/zh-TW/docs/Debugging_JavaScript)
- [Firefox 開發工具的的除錯器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
