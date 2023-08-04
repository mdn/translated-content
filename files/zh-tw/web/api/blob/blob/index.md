---
title: Blob()
slug: Web/API/Blob/Blob
---

{{APIRef("File API")}}

**`Blob()`** 建構式會回傳一個新建立的 {{domxref("Blob")}} 物件。新物件的內容是由 _array_ 參數的成員值串連所構成。

## 語法

```plain
var aBlob = new Blob( array, options );
```

### 參數

- _array_ 可以是一個由 {{jsxref("ArrayBuffer")}}、{{domxref("ArrayBufferView")}}、{{domxref("Blob")}} 或 {{domxref("DOMString")}} 組成的 {{jsxref("Array")}} 物件，或是上述多種型別物件的混合陣列。這個陣列將會被放進新建立的 `Blob` 物件當中。DOMStrings 的編碼為 UTF-8。
- _options_ 是選擇性的 `BlobPropertyBag` 字典物件，有以下兩個指定的屬性：

  - `type` 屬性，預設值為空字串 `""`，表示將被放進 `Blob` 物件的陣列內容之 MIME 類型。
  - `endings` 屬性，表示包含 `\n` 換行字元的字串要如何輸出，預設值為字串 `"transparent"`。此屬性值可為：`"native"`，代表換行字元會被轉為目前作業系統的換行字元編碼。也可以是 `"transparent"`，代表保留 `Blob` 物件中資料的換行字元。{{non-standard_inline}}

## 範例

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, { type: "text/html" }); // the blob
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 廢棄的 {{domxref("BlobBuilder")}} 和取代他的建構子。
