---
title: IndexedDB API
slug: Web/API/IndexedDB_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("IndexedDB")}} {{AvailableInWorkers}}

IndexedDB 是一種底層 API，用於在用戶端儲存大量結構化資料（包括檔案／Blob）。該 API 使用索引來實現對資料的高效能搜尋。雖然 [Web Storage](/zh-TW/docs/Web/API/Web_Storage_API) 對於儲存較少量的資料很有用，但對於儲存大量的結構化資料則較不適用。IndexedDB 提供了解決方案。這是 MDN IndexedDB 內容的主要登陸頁面——我們在此提供完整的 API 參考文件、使用指南、瀏覽器相容性細節，以及一些關鍵概念的說明。

## 關鍵概念與用法

IndexedDB 是一個交易式資料庫系統，就像 SQL 基礎的關聯式資料庫管理系統（RDBMS）。然而，不同於 SQL 基礎的 RDBMS 使用固定欄位的表格，IndexedDB 是一個 JavaScript 基礎的物件導向資料庫。IndexedDB 讓你儲存和檢索以**鍵**索引的物件；任何[結構化複製演算法](/zh-TW/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)支援的物件都能被儲存。你需要指定資料庫綱要，開啟與資料庫的連線，然後在**交易**序列中檢索和更新資料。

- 閱讀更多關於 [IndexedDB 關鍵特性和基本術語](/zh-TW/docs/Web/API/IndexedDB_API/Basic_Terminology)。
- 透過我們的[使用 IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API/Using_IndexedDB) 指南，從基本原理開始學習非同步地使用 IndexedDB。
- 參見[檢查截止日期是否已到](/zh-TW/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due)指南中的完整逐步範例。

> [!NOTE]
> 就像大多數的 web 儲存解決方案，IndexedDB 遵循[同源政策](https://www.w3.org/Security/wiki/Same_Origin_Policy)。因此雖然你可以存取同一個網域內的儲存資料，但你無法跨網域存取資料。

### 同步與非同步

使用 IndexedDB 執行的操作是非同步完成的，以免阻塞應用程式。

### 儲存限制與驅逐標準

有許多 web 技術在用戶端（亦即在你的本機磁碟上）儲存各種類型的資料。IndexedDB 是最常被討論的。瀏覽器計算要分配多少空間給 web 資料儲存，以及當達到限制時要刪除什麼內容的過程並不簡單，且不同瀏覽器之間有所差異。[瀏覽器儲存配額與驅逐標準](/zh-TW/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)試圖解釋其運作方式，至少在 Firefox 的情況下是如此。

## 介面

要存取資料庫，請呼叫 [window](/zh-TW/docs/Web/API/Window) 物件 [`indexedDB`](/zh-TW/docs/Web/API/Window/indexedDB) 屬性上的 [`open()`](/zh-TW/docs/Web/API/IDBFactory/open)。此方法回傳一個 {{domxref("IDBRequest")}} 物件；非同步操作透過在 {{domxref("IDBRequest")}} 物件上觸發事件來與呼叫的應用程式通訊。

### 連線到資料庫

- {{domxref("IDBFactory")}}
  - : 提供對資料庫的存取。此類型的物件是全域 {{domxref("Window.indexedDB")}} 和 {{domxref("WorkerGlobalScope.indexedDB")}} 屬性的值。因此它是 API 的進入點。
- {{domxref("IDBOpenDBRequest")}}
  - : 代表開啟資料庫的請求。
- {{domxref("IDBDatabase")}}
  - : 代表與資料庫的連線。這是獲取資料庫交易的唯一途徑。

### 檢索和修改資料

- {{domxref("IDBTransaction")}}
  - : 代表一個交易。你在資料庫上建立一個交易，指定範圍（例如你想要存取哪個物件儲存區），並決定你想要的存取類型（唯讀或讀寫）。
- {{domxref("IDBRequest")}}
  - : 處理資料庫請求並提供結果存取的通用介面。
- {{domxref("IDBObjectStore")}}
  - : 代表一個物件儲存區，允許存取 IndexedDB 資料庫中的一組資料，透過主鍵尋找。
- {{domxref("IDBIndex")}}
  - : 也允許存取 IndexedDB 資料庫中的資料子集，但使用索引來檢索紀錄而不是主鍵。這有時比使用 {{domxref("IDBObjectStore")}} 更快。
- {{domxref("IDBCursor")}}
  - : 迭代物件儲存區和索引。
- {{domxref("IDBCursorWithValue")}}
  - : 迭代物件儲存區和索引並回傳游標目前的值。
- {{domxref("IDBKeyRange")}}
  - : 定義一個鍵範圍，可用於從資料庫中檢索特定範圍內的資料。

### 自訂事件介面

此規範使用以下自訂介面觸發事件：

- {{domxref("IDBVersionChangeEvent")}}
  - : `IDBVersionChangeEvent` 介面表示資料庫的版本已經改變，這是 {{domxref("IDBOpenDBRequest.upgradeneeded_event", "IDBOpenDBRequest.onupgradeneeded")}} 事件處理函式的結果。

## 範例

- [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[檢視即時範例](https://mdn.github.io/dom-examples/to-do-notifications/)）：參考文件中範例的參考應用程式。

## 規範

{{Specifications}}

## 參見

- [Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API)
- [Window：localStorage 屬性](/zh-TW/docs/Web/API/Window/localStorage)
- [Window：sessionStorage 屬性](/zh-TW/docs/Web/API/Window/sessionStorage)
- [StorageEvent](/zh-TW/docs/Web/API/StorageEvent)
