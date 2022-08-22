---
title: IDBEnvironment
slug: Web/API/IDBEnvironment
tags:
  - API
  - DOM
  - Database
  - IndexedDB
translation_of: Web/API/IDBEnvironment
---
{{APIRef()}}

> **Warning:** **Important**: As of Firefox 52, the property defined in this mixin has been moved to the {{domxref("WindowOrWorkerGlobalScope")}} mixin, and other browsers will follow suit. Look to that page for up-to-date details.

[IndexedDB API](/ja/docs/IndexedDB) の **`IDBEnvironment`** インタフェースには、IndexedDB の機能へアクセスするための `indexedDB` プロパティがあります。これは、{{domxref("window")}} と {{domxref("Worker")}}オブジェクトによって実装された、最上位の IndexedDB インタフェースです。

{{AvailableInWorkers}}

## プロパティ

- {{domxref("IDBEnvironment.indexedDB")}} {{readonlyInline}}
  - : インデックス化されたデータベースへ非同期的にアクセスするための機構を、アプリケーションへ提供する、 {{domxref("IDBFactory")}} オブジェクトです。

## 例

次のコードはデータベースを非同期に開くリクエストを生成しています。データベースが開かれた後、リクエストの onsuccess ハンドラーが呼ばれます。:

```js
var db;
function openDB() {
 var DBOpenRequest = window.indexedDB.open("toDoList");
 DBOpenRequest.onsuccess = function(e) {
   db = DBOpenRequest.result;
 };
}
```

## 仕様

| Specification                                                                                | Status                       | Comment |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#idl-def-IDBEnvironment', 'IDBEnvironment')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBEnvironment")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取り出しと変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- 参考例: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
