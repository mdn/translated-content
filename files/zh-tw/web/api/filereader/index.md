---
title: FileReader
slug: Web/API/FileReader
---

{{APIRef("File API")}}

藉由 `FileReader` 物件，Web 應用程式能以非同步（asynchronously）方式讀取儲存在用戶端的檔案（或原始資料暫存）內容，可以使用 {{domxref("File")}} 或 {{domxref("Blob")}} 物件指定要讀取的資料。

File 物件可以從使用者於 {{HTMLElement("input")}} 元素選擇之檔案所回傳的 {{domxref("FileList")}} 物件當中取得，或是來自[拖放操作](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API)所產生的 {{domxref("DataTransfer")}} 物件之中，也能由 {{domxref("HTMLCanvasElement")}} 物件（元素物件）執行 `mozGetAsFile()` 方法後回傳。

{{AvailableInWorkers}}

## 建構式

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : 建立新的 `FileReader` 物件。

請參考[在網頁應用程式中使用本地檔案](/zh-TW/docs/Web/API/File_API/Using_files_from_web_applications)的更多細節與範例。

## 屬性

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : 此 {{domxref("DOMException")}} 類型的物件記錄了讀取資料時發生的錯誤資訊。
- {{domxref("FileReader.readyState")}} {{readonlyinline}}

  - : 表示目前 `FileReader` 狀態的數字，其代表的意義為：

    <table>
    <tbody>
    <tr>
      <td><code>EMPTY</code></td>
      <td><code>0</code></td>
      <td>尚未讀入任何資料。</td>
    </tr>
    <tr>
      <td><code>LOADING</code></td>
      <td><code>1</code></td>
      <td>正在讀入資料。</td>
    </tr>
    <tr>
      <td><code>DONE</code></td>
      <td><code>2</code></td>
      <td>完成資料讀取。</td>
    </tr>
    </tbody>
    </table>

- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : 讀入的資料內容。只有在讀取完成之後此屬性才有效，而資料的格式則取決於是由哪一個方法進行讀取。

### 事件處理器

- {{domxref("FileReader.onabort")}}
  - : [`abort`](/zh-TW/docs/Web/API/HTMLMediaElement/abort_event) 事件處理器，於讀取被中斷時觸發。
- {{domxref("FileReader.onerror")}}
  - : [`error`](/zh-TW/docs/Web/API/HTMLElement/error_event) 事件處理器，於讀取發生錯誤時觸發。
- {{domxref("FileReader.onload")}}
  - : [`load`](/zh-TW/docs/Web/API/Window/load_event) 事件處理器，於讀取完成時觸發。
- {{domxref("FileReader.onloadstart")}}
  - : [`loadstart`](/zh-TW/docs/Web/API/XMLHttpRequest/loadstart_event) 事件處理器，於讀取開始時觸發。
- {{domxref("FileReader.onloadend")}}
  - : [`loadend`](/zh-TW/docs/Web/API/XMLHttpRequest/loadend_event) 事件處理器，於每一次讀取結束之後觸發（不論成功或失敗），會於 `onload` 或 `onerror` 事件處理器之後才執行。
- {{domxref("FileReader.onprogress")}}
  - : [`progress`](/zh-TW/docs/Web/API/XMLHttpRequest/progress_event) 事件處理器，於讀取 {{domxref("Blob")}} 內容時觸發。

> **備註：** `FileReader` 物件繼承自 {{domxref("EventTarget")}}，其所有的事件也都能夠透過 {{domxref("EventTarget.addEventListener()","addEventListener")}} 方法來註冊事件監聽器。

## 方法

- {{domxref("FileReader.abort()")}}
  - : 中斷目前的讀取，此方法回傳後屬性 `readyState` 將會是 `DONE`。
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : 開始讀取指定的 {{domxref("Blob")}}，讀取完成後屬性 `result` 將以 {{domxref("ArrayBuffer")}} 物件來表示讀入的資料內容。
- {{domxref("FileReader.readAsBinaryString()")}} {{non-standard_inline}}
  - : 開始讀取指定的 {{domxref("Blob")}}，讀取完成後屬性 `result` 將以字串型式來表示讀入的原始二進位資料（raw binary data）。
- {{domxref("FileReader.readAsDataURL()")}}
  - : 開始讀取指定的 {{domxref("Blob")}}，讀取完成後屬性 `result` 將以 `data:` URL 格式（base64 編碼）的字串來表示讀入的資料內容。
- {{domxref("FileReader.readAsText()")}}
  - : 開始讀取指定的 {{domxref("Blob")}}，讀取完成後屬性 `result` 將以文字字串型式來表示讀入的資料內容。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [在網頁應用程式中使用本地檔案](/zh-TW/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
