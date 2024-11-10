---
title: "WorkerGlobalScope: indexedDB プロパティ"
short-title: indexedDB
slug: Web/API/WorkerGlobalScope/indexedDB
l10n:
  sourceCommit: 9912dd7cc583fc938cc73152dccdb94c3bb79ce4
---

{{APIRef("IndexedDB")}}

**`indexedDB`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、アプリケーションが索引付きデータベースの機能に非同期でアクセスするための機構を提供します。

## 値

{{domxref("IDBFactory")}} オブジェクトです。

## 例

以下のコードでは、データベースを開くためのリクエストを非同期に作成し、データベースが開かれた後で、リクエストの `onsuccess` ハンドラーが呼び出されます。

```js
let db;
function openDB() {
  const DBOpenRequest = self.indexedDB.open("toDoList");
  DBOpenRequest.onsuccess = (e) => {
    db = DBOpenRequest.result;
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- 参照例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[例をライブで参照](https://mdn.github.io/dom-examples/to-do-notifications/)）
