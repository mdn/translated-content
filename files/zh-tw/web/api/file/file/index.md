---
title: File.File()
slug: Web/API/File/File
---

{{APIRef("File")}}

**`File()`** 建構子建立一個新的 {{domxref("File")}} 物件實例

## 語法

```plain
var myFile = new File(bits, name[, options]);
```

### 參數

- _bits_
  - : An {{jsxref("Array")}} of {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, or {{domxref("DOMString")}} objects — 或是由這些物件組成的集合。這是以 UTF-8 編碼的檔案內容。
- _name_
  - : 檔案名稱或檔案的路徑（{{domxref("USVString")}}）。
- _options_ {{optional_inline}}
  - : 物件選項，包含物件非必要的屬性，以下為可得到的屬性：
    - `type`: 物件的 MIME 類型（{{domxref("DOMString")}} ）將被放進檔案中，預設為 ""（空值）。
    - `lastModified`: 檔案最後修改時間，格式為毫秒，預設為 {{jsxref("Date.now()")}}.

## 範例

```js
var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 看更多

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
