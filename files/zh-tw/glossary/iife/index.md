---
title: IIFE
slug: Glossary/IIFE
---

**IIFE** (Immediately Invoked Function Expression) 是一個定義完馬上就執行的 {{glossary("JavaScript")}} {{glossary("function")}}。

他又稱為 {{glossary("Self-Executing Anonymous Function")}}，也是一種常見的設計模式，包含兩個主要部分：第一個部分是使用{{jsxref("Operators/Grouping", "Grouping Operator")}} `()` 包起來的 anonymous function。這樣的寫法可以避免裡面的變數污染到 global scope。

第二個部分是馬上執行 function 的 expression `()`，JavaScript 引擎看到它就會立刻轉譯該 function。

## Examples

Function 轉換為 expression 形式，並且馬上執行，function scope 內的變數在外面是無法存取的。

```js
(function () {
  var aName = "Barry";
})();
// Variable name is not accessible from the outside scope
aName; // throws "Uncaught ReferenceError: aName is not defined"
```

把 IIFE 只配給變數會儲存它的結果，而非 function 本身

```js
var result = (function () {
  var name = "Barry";
  return name;
})();
// Immediately creates the output:
result; // "Barry"
```

### 其它形式

符合 JSLint 的版本，行為一樣，只有語意略有差異：

```js
(function () {
  var aName = "Barry";
})();
```

Arrow function 版本，程式碼更為精簡，行為一致：

```js
(() => {
  var aName = "Barry";
})();
```

Async function 版本，目前主要為了 top level await 而使用：

```js
(async function () {
  var aName = "Barry";
})();

(async () => {
  var aName = "Barry";
})();
```

## 參見

- [IIFE](https://zh.wikipedia.org/wiki/立即调用函数表达式)（維基百科）
- [術語表](/zh-TW/docs/Glossary)
  - {{Glossary("Function", "函式")}}
  - {{Glossary("Self-Executing Anonymous Function", "自執行匿名函式")}}
