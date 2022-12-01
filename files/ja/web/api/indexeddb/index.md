---
title: WindowOrWorkerGlobalScope.indexedDB
slug: Web/API/indexedDB
original_slug: Web/API/WindowOrWorkerGlobalScope/indexedDB
---

{{ APIRef() }}

{{domxref("WindowOrWorkerGlobalScope")}} ミックスインの **`indexedDB`** 読み取り専用プロパティは、アプリケーションが indexed データベースのキャパビリティに非同期でアクセスするための機構を提供します。

## 構文

```
var IDBFactory = self.indexedDB;
```

### 値

{{domxref("IDBFactory")}} オブジェクト。

## 例

```js
var db;
function openDB() {
 var DBOpenRequest = window.indexedDB.open('toDoList');
 DBOpenRequest.onsuccess = function(e) {
   db = DBOpenRequest.result;
 }
}
```

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- 参照例: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
