---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}

**`join()`** 方法會將陣列（或一個[類陣列（array-like）物件](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）中所有的元素連接、合併成一個字串，並回傳此字串。

{{InteractiveExample("JavaScript Demo: Array.join()")}}

```js interactive-example
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```

## 語法

```plain
arr.join([separator])
```

### 參數

- `separator` {{optional_inline}}
  - : 用來隔開陣列中每個元素的字串。如果必要的話，separator 會自動被轉成字串型態。如果未傳入此參數，陣列中的元素將預設用英文逗號（「,」）隔開。如果 `separator` 是空字串，合併後，元素間不會有任何字元。

### 回傳值

一個合併所有陣列元素的字串。假如 `arr.length` 為 `0`，將回傳空字串。

## 描述

將所有陣列中的元素轉成字串型態後，連接合併成一個字串。任何 `undefined` 或 `null` 的元素都會被視為空字串處理。

## 範例

### 舉例四種合併用法

下方的範例中，首先宣告一個陣列—`a`，其中有三個元素。接著分別用：預設值、逗號、加號和空字串將陣列連接。

```js
var a = ["Wind", "Rain", "Fire"];
a.join(); // 'Wind,Rain,Fire'
a.join(", "); // 'Wind, Rain, Fire'
a.join(" + "); // 'Wind + Rain + Fire'
a.join(""); // 'WindRainFire'
```

### 合併一個類陣列（array-like）物件

下方的範例將合併一個類陣列（array-like）物件（[`arguments`](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments)），藉由 {{jsxref("Function.prototype.call")}} 來呼叫 `Array.prototype.join`。

```js
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, "a", true);
//expected output: "1,a,true"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
