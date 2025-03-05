---
title: IndexedDB
slug: Web/API/IndexedDB_API
---

{{DefaultAPISidebar("IndexedDB")}}{{SeeCompatTable}}

IndexedDB 為用戶端的儲存用 API，可用於大量的結構化資料，並透過索引功能而高效率搜尋資料。[DOM Storage](/zh-TW/docs/Web/API/Web_Storage_API) 適合儲存較少量的資料；IndexedDB 則適合大量結構化資料的儲存方案。

本篇文章僅為 API 物件的入門技術說明。若需進一步了解，則請參閱 [IndexedDB 基本概念](/zh-TW/docs/Web/API/IndexedDB_API/Basic_Terminology)。更多細節則可參閱[使用 IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API/Using_IndexedDB)。

IndexedDB 提供不同 APIs 用於同步與非同步的存取作業。同步 API 僅能用於[Web Workers](/zh-TW/docs/Web/API/Worker) 之中，但尚未有瀏覽器支援同步 API。非同步 API 則用於 Web Workers 內外均可，但 Firefox 目前尚未建構。

## 非同步 API

非同步 API 不會阻塞呼叫它的執行緒。若要非同步存取資料庫，可於 [window](/zh-TW/docs/Web/API/Window) 物件的 [indexedDB](/zh-TW/docs/IndexedDB/IDBEnvironment#attr_indexedDB) 屬性上呼叫 [open](/zh-TW/docs/Web/API/IDBFactory#open)()。此函式將回傳 IDBRequest 物件 (IDBOpenDBRequest)，開始非同步存取資料庫；呼叫端程式利用 IDBRequest 物件上的事件來進行非同步溝通。

> [!NOTE]
> 在舊版瀏覽器 (Gecko 16 版之前的 indexedDB 屬性；Chrome 中的 webkitIndexedDB；IE 10 中的 msIndexedDB) 中的 indexedDB 物件，均具備前綴屬性。

- [`IDBFactory`](/zh-TW/docs/Web/API/IDBFactory) 可存取資料庫。此介面是透過全域物件 `indexedDB` 所建構，因此成為 API 的切入點。
- [`IDBCursor`](/zh-TW/docs/Web/API/IDBCursor) 將依序存取物件與索引。
- [`IDBCursorWithValue`](/zh-TW/docs/Web/API/IDBCursorWithValue) 將依序存取物件與索引，並回傳指標 (Cursor) 的目前數值。
- [`IDBDatabase`](/zh-TW/docs/Web/API/IDBDatabase) 代表到資料庫的連線。這也是能與資料庫互動的唯一方式。
- [`IDBEnvironment`](/zh-TW/docs/IndexedDB/IDBEnvironment) 可存取用戶端的資料庫。此介面是透過 [window](/zh-TW/docs/Web/API/Window) 物件所建構。
- [`IDBIndex`](/zh-TW/docs/Web/API/IDBIndex) 可存取索引的 Metadata。
- [`IDBKeyRange`](/zh-TW/docs/Web/API/IDBKeyRange) 定義資料鍵範疇。
- [`IDBObjectStore`](/zh-TW/docs/Web/API/IDBObjectStore) 代表物件存檔。
- [`IDBOpenDBRequest`](/zh-TW/docs/Web/API/IDBOpenDBRequest) 代表「開啟資料庫」的請求。
- [`IDBRequest`](/zh-TW/docs/Web/API/IDBRequest) 代表向非同步資料庫和資料庫物件發出之請求，也就是呼叫非同步方法後回傳值。
- [`IDBTransaction`](/zh-TW/docs/Web/API/IDBTransaction) 代表一個交易。我們可以和資料庫進行交易，例如要求存取某一個物件存檔，以及決定要執行讀或寫的存取作業。
- [`IDBVersionChangeEvent`](/zh-TW/docs/Web/API/IDBVersionChangeEvent) `則代表資料庫所變更的版本。`

以下 API 在早期規範中有定義，但現已移除。這邊列出僅供參考:

- [IDBVersionChangeRequest](/zh-TW/docs/IndexedDB/IDBVersionChangeRequest) 代表「更改資料庫版本」的請求。更改資料庫版本的方法已有不同 (呼叫 [IDBFactory.open()](/zh-TW/docs/Web/API/IDBFactory#open) 而不需同時呼叫 [IDBDatabase.setVersion()](/zh-TW/docs/IndexedDB/IDBDatabase#setVersion%28%29))；而且[IDBOpenDBRequest](/zh-TW/docs/Web/API/IDBOpenDBRequest)已經整合了從 IDBVersionChangeRequest 中所移除之功能。
- [IDBDatabaseException](/zh-TW/docs/IndexedDB/IDBDatabaseException) {{Deprecated_Inline}} 在執行資料庫作業時，代表可能遭遇的例外狀況。

除了非同步 API，也有應用在[WebWorkers](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers)內的同步 API，但請注意目前還沒有瀏覽器支援同步 API。這裡也提供 [API 的同步版本](/zh-TW/docs/Web/API/IndexedDB_API)。

## 儲存限制

單一資料庫項目的容量/大小並沒有任何限制，但是各個 IndexedDB 資料庫的容量就有限制。此限制，還有使用者介面的斷言 (Assert) 方式，又將因瀏覽器而有所不同：

- Firefox：對 IndexedDB 資料庫的容量並無限制。但若要儲存的 Blobs 超過 50 MB，使用者介面將會要求權限。若要修改此容量，則可透過 dom.indexedDB.warningQuota (可至 <http://mxr.mozilla.org/mozilla-central/source/modules/libpref/src/init/all.js> 中設定) 設定自己所需的限制。
- Google Chrome：請參閱 [https://developers.google.com/chrome...rage#temporary](https://developer.chrome.com/docs/apps/offline_storage#temporary)

## 範例

Web 上的 IndexedDB 使用範例，是由 Marco Castelluccio 所提供。Marco 是 IndexedDB Mozilla DevDerby 的優勝者，而該得獎 Demo 為 [eLibri](/zh-TW/docs/Web/Demos_of_open_web_technologies)，屬於函式庫與 eBook 閱讀器的 App。

## 另可參閱

- [IndexedDB 基本概念](/zh-TW/docs/Web/API/IndexedDB_API/Basic_Terminology)
- [使用 IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [在 IndexedDB 中儲存影像與檔案](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)
- [Indexed Database API 規格](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB — 儲存於自己的瀏覽器中](<https://learn.microsoft.com/zh-tw/previous-versions/msdn10/gg679063(v=msdn.10)>)
- [IndexedDB 範例](http://nparashuram.com/IndexedDB/trialtool/index.html)
- 僅支援 WebSQL 的瀏覽器 (例如行動 WebKit)，可適用 [IndexedDB Polyfill](https://github.com/indexeddbshim/IndexedDBShim)
- [JQuery IndexedDB 外掛程式](http://nparashuram.com/IndexedDBShim/)
