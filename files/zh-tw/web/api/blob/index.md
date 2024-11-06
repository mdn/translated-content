---
title: Blob
slug: Web/API/Blob
---

{{APIRef("File API")}}

`Blob`（Binary Large Object）物件代表了一個相當於檔案（原始資料）的不可變物件。Blob 中的資料並不一定是 JavaScript 原生的格式。{{domxref("File")}} 介面基於 `Blob，`繼承 blob 並擴充其功能以支援操作使用者系統上的檔案。

從其它非 Blob 物件或資料來建構 `Blob` 物件，可以使用 {{domxref("Blob.Blob", "Blob()")}} 建構式。要建立一個包含目前 blob 內容子集的 blob，可使用 {{domxref("Blob.slice()", "slice()")}} 方法。若要自使用者系統上的檔案取得 `Blob` 物件，請參考 {{domxref("File")}} 文件。

接受 Blob 物件的 API 可以在 {{domxref("File")}} 上找到。

> [!NOTE]
> 早期 `slice()` 方法擁有第二個參數 `length` 以指定在建立新 `Blob` 物件時要複製的位元組（byte）數量。假如指定的 `start + length` 超出了來源 `Blob` 的大小，則回傳的 `Blob` 會包含自索引 `start` 至結尾的完整來源內容。

> [!NOTE]
> 需注意在部分瀏覽器版本中，`slice()` 方法帶有前綴：Firefox 12 與之前的版本為 `blob.mozSlice()`，Safari 中是 `blob.webkitSlice()`。舊的、無前綴字版本的 `slice()` 方法則有不同的語意（semantics），但這是已淘汰的方法。瀏覽器對 `blob.mozSlice()` 的支援已在 Firefox 30 時中止。

## 建構式

- {{domxref("Blob.Blob", "Blob(blobParts[, options])")}}
  - : 回傳新建立的 `Blob` 物件，包含了建構式參數傳入之陣列所串聯後的值。第二個參數為 BlobPropertyBag 物件，其擁有 `type` 和 `endings` 屬性。

## 屬性

- {{domxref("Blob.size")}} {{readonlyinline}}
  - : 以 byte 為單位的 `Blob` 物件大小。
- {{domxref("Blob.type")}} {{readonlyinline}}
  - : `Blob` 物件中資料的型態，以 MIME 類型的字串表示。若型態為未知，則為空字串。

## 方法

- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : 回傳一個包含當前 `Blob` 物件之指定資料範圍（byte）內容的新 `Blob` 物件。

## 範例

### Blob 建構函數用法範例

{{domxref("Blob.Blob", "Blob() constructor")}} 建構式允許由其它物件建立 blob 物件。以下的範例演示了以字串來建構 blob 物件：

```js
var debug = { hello: "world" };
var blob = new Blob([JSON.stringify(debug, null, 2)], {
  type: "application/json",
});
```

> [!WARNING]
> 在 Blob 建構式出現之前，可以透過 {{domxref("BlobBuilder")}} 來建立 blob 物件（目前已不建議使用）：
>
> ```js
> var builder = new BlobBuilder();
> var fileParts = ['<a id="a"><b id="b">hey!</b></a>'];
> builder.append(fileParts[0]);
> var myBlob = builder.getBlob("text/xml");
> ```

### 藉型別陣列建構的 blob 來建立 URL

範例程式碼：

```js
var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray], { type: "application/octet-binary" }); // pass a useful mime type here
var url = URL.createObjectURL(blob);
// url will be something like: blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// now you can use the url in any context that regular URLs can be used in, for example img.src, etc.
```

### 從 Blob 取出資料

從 Blob 讀取資料的唯一方式就是使用 {{domxref("FileReader")}}。以下範例展示了讀取 Blob 內容作為型別陣列：

```js
var reader = new FileReader();
reader.addEventListener("loadend", function () {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

藉由操作 {{domxref("FileReader")}} 的其他方法，將 Blob 讀取成字串或是 data URL 是有可能的。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("BlobBuilder")}}
- {{domxref("File")}}
- {{domxref("URL.createObjectURL")}}
- [Components.utils.importGlobalProperties](/zh-TW/docs/Components.utils.importGlobalProperties)
