---
title: console：assert() 靜態方法
slug: Web/API/console/assert_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.assert()`** 靜態方法會在斷言為假時，將錯誤訊息寫入主控台。若斷言為真，則不會有任何動作。

## 語法

```js-nolint
console.assert(assertion)

console.assert(assertion, val1)
console.assert(assertion, val1, val2)
console.assert(assertion, val1, val2, /* …, */ valN)

console.assert(assertion, msg)
console.assert(assertion, msg, subst1)
console.assert(assertion, msg, subst1, /* …, */ substN)
```

### 參數

- `assertion`
  - : 任何布林運算式。如果斷言為假，主控台會顯示一則通用的斷言失敗訊息。
- `val1` … `valN`
  - : 要輸出的 JavaScript 值清單。在顯示通用斷言失敗訊息後，這些值的表示形式會依順序輸出至主控台，訊息與每個值之間會有某種型式的分隔。當這些值存在時，輸出的訊息可能會與未提供這些值時有所不同。若 `val1` 是字串，則屬於特殊情況，將在後文說明。
- `msg`
  - : 包含零個或多個替代字串的 JavaScript 字串，這些替代字串會依序被 `subst1` 到 `substN` 取代，最多取代至替代字串的數量。系統會將冒號、空格及取代後的字串加到通用斷言訊息後，組成詳細的斷言訊息，並輸出至主控台。關於替代機制的詳細說明，請參見[使用字串替代](/zh-TW/docs/Web/API/console#使用字串替代)。
- `subst1` … `substN`
  - : 用來取代 `msg` 中替代字串的 JavaScript 值。如果替代值多於替代字串，這些多出來的值會在詳細的斷言訊息之後，以與未使用格式字串時相同的方式輸出到主控台。

如需進一步了解，請參見 {{domxref("console")}} 文件中的[輸出文字到主控台](/zh-TW/docs/Web/API/console#輸出文字到主控台)。

### 回傳值

無（{{jsxref("undefined")}}）。

## 範例

以下程式碼範例展示如何在斷言後輸出 JavaScript 物件：

```js
const errorMsg = "該數字不是偶數";
for (let number = 2; number <= 5; number++) {
  console.log(`該數字是 ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}
// 輸出：
// 該數字是 2
// 該數字是 3
// Assertion failed: {number: 3, errorMsg: "該數字不是偶數"}
// 該數字是 4
// 該數字是 5
// Assertion failed: {number: 5, errorMsg: "該數字不是偶數"}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Microsoft Edge 關於 `console.assert()` 的文件](https://learn.microsoft.com/zh-tw/microsoft-edge/devtools-guide-chromium/console/api#assert)
- [Node.js 關於 `console.assert()` 的文件](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chrome 關於 `console.dir()` 的文件](https://developer.chrome.com/docs/devtools/console/api/#dir)
