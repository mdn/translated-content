---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

當 [`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return) 陳述式在[函式](/zh-TW/docs/Web/JavaScript/Guide/Functions)之外被呼叫時，會發生 JavaScript 的「return 不在函式中」例外錯誤。

## 訊息

```plain
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## 錯誤類型

{{jsxref("SyntaxError")}}。

## 哪裡出錯了？

[`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return) 陳述式在[函式](/zh-TW/docs/Web/JavaScript/Guide/Functions)之外被呼叫。也許是某處遺漏了大括號？`return` 陳述式必須在函式中，因為它會結束函式執行，並指定一個值回傳給函式呼叫者。

## 範例

### 遺漏大括號

```js-nolint example-bad
function cheer(score) {
  if (score === 147)
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
```

乍看之下，大括號似乎是正確的，但這段程式碼在第一個 `if` 陳述式後遺漏了一個 `{`。正確的寫法應該是：

```js example-good
function cheer(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}
```

## 參見

- [`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return)
