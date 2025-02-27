---
title: File
slug: Web/API/File
---

{{APIRef}}

**`File`** 介面提供了檔案的資訊並且允許網頁中的 JavaScript 存取檔案的內容。

`File` 物件通常是從使用者於 {{HTMLElement("input")}} 元素選擇之檔案所回傳的 {{domxref("FileList")}} 物件當中取得，也可以來自[拖放操作](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API)所產生的 {{domxref("DataTransfer")}} 物件之中，或是由 {{domxref("HTMLCanvasElement")}} 物件（元素物件）執行 `mozGetAsFile()` 方法後回傳。在 Gecko 引擎中，有專屬的程式碼能不需使用者操作即建立 `File` 物件來表示本地端的任一檔案（請參考 [Implementation notes](#implementation_notes) 以閱讀更多資訊）。

`File` 物件是一種特殊的 {{domxref("Blob")}}，且可被用在任何接受 Blob 物件的地方。特別是 {{domxref("FileReader")}}、{{domxref("URL.createObjectURL()")}}、{{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}} 和 {{domxref("XMLHttpRequest", "", "send()")}} 都能夠同樣接受 `Blob` 以及 `File`。

請參考[在網頁應用程式中使用本地檔案](/zh-TW/docs/Web/API/File_API/Using_files_from_web_applications)的更多細節與範例。

{{InheritanceDiagram}}

## 建構式

- {{domxref("File.File", "File()")}}
  - : 回傳一個新建構的 `File` 物件。

## 屬性

- {{domxref("File.lastModified")}} {{readonlyinline}}
  - : 回值檔案的最後修改時間，為 UNIX epoch 毫秒（自西元 1970 年一月 1 日零時至今）。
- {{domxref("File.lastModifiedDate")}} {{readonlyinline}} {{deprecated_inline}}
  - : `File` 物件所代表之檔案的最後修改日期（[`Date`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)）。
- {{domxref("File.name")}} {{readonlyinline}}
  - : `File` 物件所代表之檔案的名稱。
- {{domxref("File.size")}} {{readonlyinline}}
  - : 回傳檔案大小。
- {{domxref("File.webkitRelativePath")}} {{readonlyinline}} {{non-standard_inline}}
  - : 回傳相對於 {{domxref("File")}} 的網址位置。
- {{domxref("File.type")}} {{readonlyinline}}
  - : 回傳檔案的 [MIME](/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 類型。

`File` 實作了 {{domxref("Blob")}}，因此它也有以下可用屬性：

- {{domxref("File.size")}} {{readonlyinline}}
  - : 回傳檔案大小（單位為位元組）。
- {{domxref("File.type")}} {{readonlyinline}}
  - : 回傳檔案的 [MIME](/zh-TW/docs/Web/HTTP/MIME_types) 類型。

## 方法

_`File` 介面沒有定義任何方法，但繼承了 {{domxref("Blob")}} 介面的方法：_

- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : 回傳新的 `Blob` 物件，包含 `Blob` 來源之指定位元組範圍的資料。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

### 實作備註

- In Gecko, you can use this API from within chrome code. See [Using the DOM File API in chrome code](/zh-TW/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) for details. To use it from chrome code, JSM and Bootstrap scope, you have to import it using `Cu.importGlobalProperties(['File']);`
- Starting from Gecko 6.0, privileged code (such as extensions) can pass an `nsIFile` object to the DOM `File` constructor to specify the file to reference.
- Starting from Gecko 8.0, you can use `new File` to create `File` objects from XPCOM component code instead of having to instantiate the `nsIDOMFile` object directly. The constructor takes, in contrast to {{domxref("Blob")}}, as second argument the filename. The filename can be any String.

  ```plain
  new File(
    Array parts,
    String filename,
    BlobPropertyBag properties
  );
  ```

- The following non-standard properties and methods were removed in Gecko 7: {{domxref("File.fileName")}}, {{domxref("File.fileSize")}}, {{domxref("File.getAsBinary()")}}, {{domxref("File.getAsDataURL()")}}, {{domxref("File.getAsText()","File.getAsText(string encoding)")}} ([Firefox bug 661876](https://bugzil.la/661876)). Standard properties {{domxref("File.name")}}, {{domxref("Blob.size")}}, and methods on {{domxref("FileReader")}} should be used instead.

## 參見

- [在網頁應用程式中使用本地檔案](/zh-TW/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("FileReader")}}
- [Using the DOM File API in chrome code](/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) (for privileged code running in Gecko, such as Firefox add-ons)
