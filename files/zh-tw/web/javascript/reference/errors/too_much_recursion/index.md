---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

## 訊息

```plain
InternalError: too much recursion
```

## 錯誤類型

{{jsxref("InternalError")}}

## 哪裡錯了？

一個呼叫自己的函式稱為*遞迴函式*（recursive function）。在某些方面，遞迴和迴圈很像。它們都需要在指定條件（以避免無窮迴圈，或是本例的無窮遞迴）下，重複執行數次相同的程式碼。如果遞迴執行太多次、或成為無窮遞迴的話，JavaScript 就會出現這個錯誤。

## 實例

以下的遞迴函式，會根據終止條件，而運行十次。

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" 是終止條件
    return;
  // do stuff
  loop(x + 1); // 遞迴呼叫
}
loop(0);
```

如果把終止條件的次數設得太高，函式就不會運作了：

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

## 參見

- {{Glossary("Recursion")}}
- [遞迴函式](/zh-TW/docs/Web/JavaScript/Guide/Functions#recursion)
