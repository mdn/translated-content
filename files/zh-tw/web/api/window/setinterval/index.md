---
title: Window：setInterval() 方法
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("HTML DOM")}}

{{domxref("Window")}} 介面的 **`setInterval()`** 方法用於以固定的時間間隔重複呼叫函式或執行一段程式碼。

此方法會返回一個間隔 ID，用於唯一識別該間隔，這樣可以透過呼叫 {{domxref("Window.clearInterval", "clearInterval()")}} 來移除它。

## 語法

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …, */ argN)
```

### 參數

- `func`
  - : 一個 {{jsxref("function")}}，每隔 `delay` 毫秒執行一次。第一次執行會在 `delay` 毫秒後觸發。
- `code`
  - : 一種可選語法，允許使用字串代替函式，該字串會被編譯並在每個 `delay` 毫秒執行一次。由於與使用 {{jsxref("Global_Objects/eval", "eval()")}} 帶來的安全風險相同，*不建議*使用此語法。
- `delay` {{optional_inline}}
  - : 定時器在每次執行指定函式或程式碼之間應延遲的時間，以毫秒（千分之一秒）為單位。如果未指定，默認為 0。詳情請見下方的[延遲限制](#延遲限制)。
- `arg1`、……、`argN` {{optional_inline}}
  - : 額外的參數。當定時器到期時，這些參數將傳遞給 _func_ 指定的函式。

### 返回值

返回的 `intervalID` 是一個數值型的非零值，用於標識通過 `setInterval()` 創建的定時器；此值可傳遞給 {{domxref("Window.clearInterval", "clearInterval()")}} 以取消該間隔。

需注意的是，`setInterval()` 和 {{domxref("Window.setTimeout", "setTimeout()")}} 共用相同的 ID 池，並且 `clearInterval()` 和 {{domxref("Window.clearTimeout", "clearTimeout()")}} 在技術上可以互換使用。但為了程式碼的清晰性，應儘量匹配使用，以免維護時造成混淆。

> [!NOTE] `delay` 參數會被轉換為有號 32 位整數。這實際上將 `delay` 限制在 2147483647 毫秒（大約 24.8 天）以內，因為在 IDL 中它被指定為有號整數。

## 範例

### 範例 1：基本語法

以下範例展示了 `setInterval()` 的基本語法。

```js
const intervalID = setInterval(myCallback, 500, "參數 1", "參數 2");

function myCallback(a, b) {
  // 你的程式碼可以放在這裡
  // 傳入的參數是完全可選的。
  console.log(a);
  console.log(b);
}
```

### 範例 2：交替切換兩種顏色

以下範例每秒呼叫一次 `flashtext()` 函數，直到按下停止按鈕為止。

#### HTML

```html
<div id="my_box">
  <h3>哈囉世界</h3>
</div>
<button id="start">開始</button>
<button id="stop">停止</button>
```

#### CSS

```css
.go {
  color: green;
}
.stop {
  color: red;
}
```

#### JavaScript

```js
// 用於存儲 intervalID 的變數
let intervalId;

function changeColor() {
  // 檢查 interval 是否已經設置
  if (!intervalId) {
    intervalId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(intervalId);
  // 從變數中釋放 intervalID
  intervalId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

#### 結果

{{EmbedLiveSample("範例 2：交替切換兩種顏色")}}

## 「this」問題

當你將一個方法傳遞給 `setInterval()` 或其他任何函數時，它會以錯誤的 [`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this) 值被調用。這個問題在 [JavaScript 參考資料](/zh-TW/docs/Web/JavaScript/Reference/Operators/this#回呼)中有詳細說明。

### 解釋

由 `setInterval()` 執行的程式碼運行在與呼叫它的函數不同的執行上下文中。因此，對於被呼叫的函數，`this` 關鍵字會被設置為 `window`（或 `global`）對象，而不是與呼叫 `setTimeout` 的函數相同的 `this` 值。以下是使用 `setTimeout()`（而非 `setInterval()`）的範例。實際上，這個問題對於兩個定時器來說是相同的：

```js
myArray = ["零", "一", "二"];
myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // 輸出「零,一,二」
myArray.myMethod(1); // 輸出「一」
setTimeout(myArray.myMethod, 1000); // 1 秒後輸出「[object Window]」
setTimeout(myArray.myMethod, 1500, "1"); // 1.5 秒後輸出「undefined」
// 使用 .call 傳遞「this」物件將不起作用
// 因為這樣會改變 setTimeout 內部的 this 值
// 而我們想改變的是 myArray.myMethod 內部的 this 值。
// 事實上，這會導致錯誤，因為 setTimeout 的程式碼預期 this 是 window 物件：
setTimeout.call(myArray, myArray.myMethod, 2000); // 錯誤: 「NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object」
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // 相同的錯誤
```

如你所見，在舊版 JavaScript 中沒有辦法將 `this` 物件傳遞給回呼函數。

### 可能的解決方案

所有現代 JavaScript 執行環境（包括瀏覽器等）都支持[箭頭函數](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，其具有詞法作用域的 `this`——使我們可以在 `myArray` 方法內寫 `setInterval(() => this.myMethod())`。

如果需要支持 IE，可以使用 [`Function.prototype.bind()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 方法，該方法讓你為所有對某個函數的調用指定應該作為 `this` 的值。這使你能夠輕鬆繞過由於函數的調用上下文不明確而導致的 `this` 問題。

## 使用注意事項

`setInterval()` 函數常用來設定重複執行的延遲，比如動畫等。你可以使用 {{domxref("Window.clearInterval", "clearInterval()")}} 來取消間隔。

如果你希望在指定的延遲後只執行一次函數，請使用 {{domxref("Window.setTimeout", "setTimeout()")}}。

### 延遲限制

間隔可以是巢狀的。也就是說 `setInterval()` 的回呼函數可以再次調用 `setInterval()` 來啟動另一個間隔，即使第一個間隔仍在運行。為了減輕這對性能的潛在影響，當間隔巢狀超過五層時，瀏覽器會自動強制間隔的最小值為 4 毫秒。在深度巢狀的 `setInterval()` 調用中，嘗試指定小於 4 毫秒的值將被固定為 4 毫秒。

在某些情況下，瀏覽器可能會強制執行更嚴格的最小間隔值，儘管這不應該是常見情況。還需要注意的是，回呼函數之間實際經過的時間可能會長於指定的 `delay`；有關更長延遲的原因，請參見[延遲長於指定的原因](/zh-TW/docs/Web/API/Window/setTimeout#延遲長於指定的原因)的範例。

### 確保執行時間短於間隔頻率

如果你的邏輯執行可能需要比間隔時間更長，建議你使用 {{domxref("Window.setTimeout", "setTimeout()")}} 遞迴調用一個命名函數。例如，如果使用 `setInterval()` 每 5 秒輪詢一次遠程伺服器，網路延遲、伺服器無反應以及其他問題可能會阻止請求在指定的時間內完成。因此，你可能會發現排隊的 XHR 請求未必會按順序返回。

在這些情況下，推薦使用遞迴的 `setTimeout()` 模式：

```js
(function loop() {
  setTimeout(() => {
    // 在這裡執行你的邏輯

    loop();
  }, delay);
})();
```

在上述程式碼片段中，宣告了一個命名函數 `loop()` 並立即執行。在執行完邏輯後，`loop()` 會在 `setTimeout()` 內部被遞迴調用。雖然這個模式無法保證在固定的間隔執行，但它能保證在遞迴之前，前一個間隔已經執行完成。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `setInterval` 的 polyfill，允許將參數傳遞給回呼函式。](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("Window.setTimeout()")}}
- {{domxref("Window.requestAnimationFrame()")}}
