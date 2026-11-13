---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 的「return not in function」例外會在 [`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return) 陳述式在[函式](/zh-TW/docs/Web/JavaScript/Guide/Functions)之外被呼叫時發生。

## 訊息

```plain
SyntaxError: Illegal return statement（基於 V8）
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
