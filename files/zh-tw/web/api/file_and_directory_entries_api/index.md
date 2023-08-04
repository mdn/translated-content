---
title: FileHandle API
slug: Web/API/File_and_Directory_Entries_API
---

FileHandle API 可操作檔案，例如建立檔案、修改檔案內容 (不同於 [File](/zh-TW/docs/DOM/File) API)。而正在編輯中的部分，將使用回合制的鎖定機制，以避免發生競態 (Race) 問題。

## API

### 建立 FileHandle

若要建立 FileHandle 物件，則需要 [IndexedDB Database](/zh-TW/docs/IndexedDB/IDBFactory#open)。

```js hidden
var idbreq = indexedDB.open("MyTestDatabase");

idbreq.onsuccess = function () {
  var db = idbreq.result;
  var handleReq = db.mozCreateFileHandle("test.bin", "binary");

  handleReq.onsuccess = function () {
    var handle = handleReq.result;
    console.log("handle", handle);
  };
};
```

`mozCreateFileHandle()` 共使用 `2` 組參數(Argument)：1 組名稱與 1 組檔案類別 (Optional type)。但這 2 組參數均只屬於敘述性參數，不會用於資料庫。舉例來說，名稱可能是空白字串，而且不需為專屬字串。所以 API 根本不會注意這些參數值。

另請注意，上列程式碼僅會建立「暫時性檔案」，亦即當你保留 FileHandle 物件時，該檔案才會存在。如果你要在重新整理頁面/重新啟動 App 之後，仍能保留檔案，則必須將 Handle 儲存於更永久性的位置 (如資料庫本身之內) 中。

```js
var transaction = db.transaction(["test"], "readwrite");
var objectStore = transaction.objectStore("test");
objectStore.add(myFile, myKey).onsuccess = function (event) {
  // The file is now referenced from database too.
};
```

### FileHandle 介面

```plain
interface FileHandle
{
  LockedFile open(optional DOMString mode);
  DOMRequest getFile()
  readonly attribute DOMString name;
  readonly attribute DOMString type;
  attribute Function? onabort;
  attribute Function? onerror;
};
```

- open(\[mode="readonly"])
  - : 可回傳 [LockedFile](#lockedfile_介面)。`mode` 可為「`readonly`」或「`readwrite`」。
- getFile()

  - : 針對檔案而回傳 [DOMRequest](/zh-TW/docs/DOM/DOMRequest)。若成功，就會收到以 [File](/zh-TW/docs/DOM/File) 物件形式呈現的唯讀「snapshot」檔案內容 (可用於任何接受 [Blob](/zh-TW/docs/DOM/Blob) 的地方，如 [FileReader](/zh-TW/docs/DOM/FileReader) 或 [XMLHttpRequest](/zh-TW/docs/DOM/XMLHttpRequest) 等)。

    ```js
    myFile.getFile().onsuccess = function (event) {
      var file = event.target.result;
      var transcation = myDatabase.transaction(["snapshots"], "readwrite");
      var objectStore = transaction.objectStore("snapshots");
      objectStore.add(file, snapshotKey).onsuccess = function (event) {
        // A new readonly copy of the file has been created.
      };
    };
    ```

- name
  - : 檔案名稱。
- type
  - : 代表 content-type。
- abort event
  - : 放棄已鎖定的檔案，就會發生此事件。
- error event
  - : 任何內部錯誤，都會發生此事件。

### LockedFile 介面

```plain
interface LockedFile
{
  readonly attribute FileHandle fileHandle;
  readonly attribute DOMString mode;
  readonly attribute boolean active;
  attribute any? location;
  FileRequest getMetadata(optional FileMetadataParameters parameters);
  FileRequest readAsArrayBuffer(unsigned long long size);
  FileRequest readAsText(unsigned long long size, optional DOMString encoding);
  FileRequest write(DOMString or ArrayBuffer or Blob value);
  FileRequest append(DOMString or ArrayBuffer or Blob value);
  FileRequest truncate(optional unsigned long long size);
  FileRequest flush();
  void abort();
  attribute Function? oncomplete;
  attribute Function? onabort;
  attribute Function? onerror;
};
```

- fileHandle
  - : 來自於解鎖的 FileHandle 物件。
- mode
  - : 「`readonly`」或「`readwrite`」。
- active

  - : 一旦建立之後，就隨即啟動 LockedFile。此 LockedFile 是「可寫入存取 (Write access) 實際底層檔案」的唯一物件。LockedFile 上的作業，均於 [isolation](https://en.wikipedia.org/wiki/Isolation_%28database_systems%29) 之中執行；也就是說，只要啟動了 LockedFile，則此 LockedFile 的所有作業都一定會在底層檔案上依序執行，而不會與其他 LockedFiles 的作業交錯執行。

    若停用了 LockedFile，則只要在同樣的 LockedFile 上執行讀/寫作業，都會丟出錯誤訊息。

- location
  - : 檔案中的位置 (Offset)。每次讀/寫作業之後，此數值均將自動變更。讀寫作業均從該 location 開始，而 null 代表檔案末端。
- getMetadata(parameters)
  - : 針對後設資料 (Metadata) 而回傳 [FileRequest](/zh-TW/docs/WebAPI/FileHandle_API#FileRequest_interface)。此參數亦屬於物件，其中將參數名稱作為物件鍵值，布林值作為數值，進而非同步檢索既有的屬性。無數值則代表 `true`。目前僅有 `size` 與 `lastModified` 為可能的參數。
- readAsArrayBuffer(size)
  - : 針對既有 `size` 的 [ArrayBuffer](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)，回傳 [FileRequest](/zh-TW/docs/WebAPI/FileHandle_API#FileRequest_interface)。此作業均從 `location` 開始，另根據讀取位元組的數目，移動 `location`。
- readAsText(size [, encoding])

  - : 針對既有 `size` 的字串，以既定的 `encoding` 回傳 [FileRequest](/zh-TW/docs/WebAPI/FileHandle_API#FileRequest_interface)。此作業均從 `location` 開始，另根據讀取位元組的數目，移動 `location`。[FileReader](/zh-TW/docs/DOM/FileReader) API 中的對等函式，也以相同方式運作。

    ```js
    var lockedFile = myFile.open();
    var request = lockedFile.readAsText(3);
    request.onsuccess = function (event) {
      var text = request.result;
      // 3 characters have been read.
    };
    ```

- write(value)

  - : 針對成功/失敗的寫入作業，回傳 [FileRequest](/zh-TW/docs/WebAPI/FileHandle_API#FileRequest_interface)。寫入作業將從 `location` 開始，另根據寫入位元組的數目，移動位置。

    ```js
    var lockedFile = myFile.open("readwrite");
    var request = lockedFile.write("foo");
    request.onsuccess = function (event) {
      // The string "foo" has been written.
    };
    ```

- append(value)
  - : 針對成功/失敗的附加 (Append) 作業，回傳 [FileRequest](/zh-TW/docs/WebAPI/FileHandle_API#FileRequest_interface)。不論 `location` 為何，該數值均附加於檔案末端。在附加資料完畢後，`location` 隨即設定為 `null`。
- truncate([size])

  - : 針對成功/失敗的截斷 (Truncate) 作業，回傳 [FileRequest](/zh-TW/docs/WebAPI/FileHandle_API#FileRequest_interface)。

    如果是以單一參數呼叫該函式，則截斷成功之後，則**不論** `location` 為何，檔案將剩下第一個 `size` 的位元組。

    若沒有用任何參數呼叫該函式，則檔案將剩下 `location` 的第一個位元組。

- flush()
  - : 強制移轉緩衝過的資料至磁碟上，作業成功之後將回傳 FileRequest。此時即便 App 當機或非刻意中止，都能確保資料已經位於磁碟上了。
- abort()
  - : 停用 LockedFile 並取消全部尚未執行的作業。

### FileRequest 介面

此類型的物件，均是由 LockedFile 介面的所有非同步作業所回傳。此介面繼承了 [DOMRequest](/zh-TW/docs/DOM/DOMRequest) 並類似 [IDBRequest](/zh-TW/docs/IndexedDB/IDBRequest)，同時還擁有 `onprogress` 事件。在成功之後，則可透過 `result` 屬性而取得必要檔案作業的結果。

```plain
interface FileRequest : DOMRequest
{
  readonly attribute LockedFile lockedFile;
  attribute Function? onprogress;
};
```

## 說明

### API 與 FileWriter 的差異？

[FileWriter 規格](http://dev.w3.org/2009/dap/file-system/file-writer.html)定義了 FileWriter，也就是用以呈現「可編輯的檔案」的物件。[Public-webapps 討論串](http://lists.w3.org/Archives/Public/public-webapps/2012JanMar/0886.html)則下了結論：若單一檔案同時寫入不同的實體 (Entity)，將導致 API 成效不彰。最後就是 FileHandle API 應具備自己的 LockedFile 與交易機制。
