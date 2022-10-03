---
title: IDBFactory
slug: Web/API/IDBFactory
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/IndexedDB) の **`IDBFactory`** インターフェイスは、indexedDB への非同期アクセスを提供します。 このインターフェイスを実装するオブジェクトは、`window.indexedDB` です。このオブジェクトを使用すれば、`IDBFactory` インターフェイスに直接アクセスせずに、IndexedDB を開いたり (生成したり接続したり)、削除したりできます。

{{AvailableInWorkers}}

## メソッド

- {{domxref("IDBFactory.open")}}
  - : [データベースへの接続](/ja/docs/IndexedDB#gloss_database_connection)を開く要求をする現在のメソッドです。
- {{domxref("IDBFactory.deleteDatabase")}}
  - : データベースの削除を要求するメソッドです。
- {{domxref("IDBFactory.cmp")}}
  - : 2 つのキーを比較して、大きいほうの値を戻り値として返すメソッドです。

## 例

次のコードスニペットでは、 データベースを開く要求をし、 成功の場合と失敗の場合のイベントハンドラーを登録しています。完全に動作する例は、[To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](http://mdn.github.io/to-do-notifications/).) を見てください。

```js
var note = document.querySelector("ul");

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## 仕様

| 仕様書                                                                               | 策定状況                         | 備考 |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName("IndexedDB", "#idl-def-IDBFactory", "IDBFactory")}} | {{Spec2("IndexedDB")}}     |      |
| {{SpecName("IndexedDB 2", "#factory-interface", "IDBFactory")}} | {{Spec2("IndexedDB 2")}} |      |
| {{SpecName("IndexedDB 3", "#factory-interface", "IDBFactory")}} | {{Spec2("IndexedDB 3")}} |      |

## ブラウザーの実装状況

{{Compat("api.IDBFactory")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
