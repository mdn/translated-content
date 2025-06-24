---
title: Blob：Blob() 建構子
slug: Web/API/Blob/Blob
l10n:
  sourceCommit: 94df34126960a2f1bd3032c6e2cf203d67b912d8
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`Blob()`** 建構子會回傳一個新的 {{domxref("Blob")}} 物件。該 blob 的內容由參數 `blobParts` 中的值串接而成。

## 語法

```js-nolint
new Blob(blobParts)
new Blob(blobParts, options)
```

### 參數

- `blobParts` {{optional_inline}}
  - : 一個[可迭代](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代協議)的物件，例如 {{jsxref("Array")}}，包含 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、字串，或這些元素的混合，這些元素將被放入 {{domxref("Blob")}} 中。字串應為格式良好的 Unicode，孤立的代理項會使用與 {{jsxref("String.prototype.toWellFormed()")}} 相同的演算法進行清理。

- `options` {{optional_inline}}
  - : 一個物件，可以指定以下任一屬性：
    - `type` {{optional_inline}}
      - : 將儲存到 blob 中的資料的 {{Glossary("MIME type", "MIME 類型")}}。預設值為空字串（`""`）。
    - `endings` {{optional_inline}}
      - : 如果資料是文字，則如何解釋內容中的換行字元（`\n`）。預設值 `transparent` 會將換行字元直接複製到 blob 中而不進行更改。若要將換行字元轉換為主機系統的本地慣例，請指定值 `native`。

### 回傳值

一個包含指定資料的新 {{domxref("Blob")}} 物件。

## 範例

```js
const blobParts = ['<q id="a"><span id="b">hey!</span></q>']; // 包含單一字串的陣列
const blob = new Blob(blobParts, { type: "text/html" }); // 該 blob
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
