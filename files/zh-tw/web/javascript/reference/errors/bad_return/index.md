---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
---

{{jsSidebar("Errors")}}

## 訊息

```plain
SyntaxError: return not in function
SyntaxError: yield not in function
```

## 錯誤類型

{{jsxref("SyntaxError")}}

## 哪裡錯了？

[`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return) 或 [`yield`](/zh-TW/docs/Web/JavaScript/Reference/Operators/yield) 宣告在[函式](/zh-TW/docs/Web/JavaScript/Guide/Functions)以外的地方被呼叫。也許少寫了一個大括號？`return` 與 `yield` 宣告必須要寫在函式裡面，因為它們結束（或暫停並恢復）函式的執行，並且回傳了特定值。

## 實例

```js example-bad
var cheer = function(score) {
  if (score === 147)
    return "Maximum!";
  };
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
```

乍看之下大括號寫對了，但其實在第一個 `if` 的後面，少了一個 `{`。正確的寫法應該是：

```js example-good
var cheer = function (score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
};
```

## 參見

- [`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return)
- [`yield`](/zh-TW/docs/Web/JavaScript/Reference/Operators/yield)
