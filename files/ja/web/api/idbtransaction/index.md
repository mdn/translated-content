---
title: IDBTransaction
slug: Web/API/IDBTransaction
---

{{APIRef("IndexedDB")}}

**`IDBTransaction`** は [IndexedDB API](/ja/docs/IndexedDB) のインターフェイスで、イベントハンドラー属性を使用してデータベース上の静的で非同期のトランザクションを提供します。すべてのデータの読み書きはトランザクション内で行われます。 {{domxref("IDBDatabase")}} を使用してトランザクションを開始し、 {{domxref("IDBTransaction")}} を使用してトランザクションのモードを設定し (例 `readonly` または `readwrite`)、 {{domxref("IDBObjectStore")}} にアクセスしてリクエストを作成します。 `IDBTransaction` オブジェクトを使用してトランザクションを中止することもできます。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

トランザクションは、最初のリクエストが発行された時ではなく、トランザクションが生成されたときに開始します。例えば、次のものを考えてください。

```js
var trans1 = db.transaction("foo", "readwrite");
var trans2 = db.transaction("foo", "readwrite");
var objectStore2 = trans2.objectStore("foo")
var objectStore1 = trans1.objectStore("foo")
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

このコードが実行された後で、オブジェクトストアには "2" が含まれているはずであり、これは `trans2` が `trans1` の後に実行されるからです。

## トランザクションの失敗

トランザクションは一定数の理由で失敗することがあり、 (ユーザーエージェントのクラッシュを除いて) すべての場合に abort コールバックを起動します。

- Abort due to bad requests, e.g. trying to `add()` the same key twice, or `put()` with the same index key with a uniqueness constraint. This causes an error on the request, which can bubble up to an error on the transaction, which aborts the transaction. This can be prevented by using `preventDefault()` on the error event on the request.
- An explicit `abort()` call from script.
- An uncaught exception in the request's `success`/`error` handler.
- An I/O error (e.g. an actual failure to write to disk, or other OS/hardware failure).
- Quota exceeded.
- A user agent crash.

## Firefox durability guarantees

Note that as of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase performance (see {{Bug("1112702")}}.) Previously in a `readwrite` transaction {{domxref("IDBTransaction.oncomplete")}} was fired only when all data was guaranteed to have been flushed to disk. In Firefox 40+ the `complete` event is fired after the OS has been told to write the data but potentially before that data has actually been flushed to disk. The `complete` event may thus be delivered quicker than before, however, there exists a small chance that the entire transaction will be lost if the OS crashes or there is a loss of system power before the data is flushed to disk. Since such catastrophic events are rare, most consumers should not need to concern themselves further.

If you must ensure durability for some reason (e.g. you're storing critical data that cannot be recomputed later) you can force a transaction to flush to disk before delivering the `complete` event by creating a transaction using the experimental (non-standard) `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.

## プロパティ

- {{domxref("IDBTransaction.db")}} {{readonlyInline}}
  - : The database connection with which this transaction is associated.
- {{domxref("IDBTransaction.error")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMException")}} indicating the type of error that occured when there is an unsuccessful transaction. This property is `null` if the transaction is not finished, is finished and successfully committed, or was aborted with the{{domxref("IDBTransaction.abort()")}} function.
- {{domxref("IDBTransaction.mode")}} {{readonlyInline}}
  - : The mode for isolating access to data in the object stores that are in the scope of the transaction. The default value is [`readonly`](#const_read_only).
- {{domxref("IDBTransaction.objectStoreNames")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMStringList")}} of the names of {{domxref("IDBObjectStore")}} objects associated with the transaction.

## メソッド

Inherits from: {{domxref("EventTarget")}}

- {{domxref("IDBTransaction.abort()")}}
  - : Rolls back all the changes to objects in the database associated with this transaction. If this transaction has been aborted or completed, this method fires an error event.
- {{domxref("IDBTransaction.objectStore()")}}
  - : Returns an {{domxref("IDBObjectStore")}} object representing an object store that is part of the scope of this transaction.
- {{domxref("IDBTransaction.commit()")}}
  - : For an active transaction, commits the transaction. Note that this doesn't normally _have_ to be called — a transaction will automatically commit when all outstanding requests have been satisfied and no new requests have been made. `commit()` can be used to start the commit process without waiting for events from outstanding requests to be dispatched.

## イベント

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- [`abort`](/ja/docs/Web/API/IDBTransaction/abort_event)
  - : Fired when an `IndexedDB` transaction is aborted.
    Also available via the [`onabort`](/ja/docs/Web/API/IDBTransaction/onabort) property.
- [`complete`](/ja/docs/Web/API/IDBTransaction/complete_event)
  - : Fired when a transaction successfully completes.
    Also available via the [`oncomplete`](/ja/docs/Web/API/IDBTransaction/oncomplete) property.
- [`error`](/ja/docs/Web/API/IDBTransaction/error_event)
  - : Fired when a request returns an error and the event bubbles up to the transaction object.
    Also available via the [`onerror`](/ja/docs/Web/API/IDBTransaction/onerror) property.

## Mode constants

{{ deprecated_header(13) }}

> **警告:** These constants are no longer available — they were removed in Gecko 25. You should use the string constants directly instead. ({{ bug(888598) }})

Transactions can have one of three modes:

| 定数                 | 値                           | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`READ_ONLY`]()      | "readonly"(0 in Chrome)      | Allows data to be read but not changed.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`READ_WRITE`]()     | "readwrite"(1 in Chrome)     | Allows reading and writing of data in existing data stores to be changed.                                                                                                                                                                                                                                                                                                                                                                                              |
| [`VERSION_CHANGE`]() | "versionchange"(2 in Chrome) | Allows any operation to be performed, including ones that delete and create object stores and indexes. This mode is for updating the version number of transactions that were started using the [`setVersion()`](/ja/docs/IndexedDB/IDBDatabase#setVersion) method of [IDBDatabase](/ja/docs/IndexedDB/IDBDatabase) objects. Transactions of this mode cannot run concurrently with other transactions. Transactions in this mode are known as "upgrade transactions." |

Even if these constants are now deprecated, you can still use them to provide backward compatibility if required (in Chrome [the change was made in version 21](http://peter.sh/2012/05/tab-sizing-string-values-for-indexeddb-and-chrome-21/)). You should code defensively in case the object is not available anymore:

```js
var myIDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## 例

In the following code snippet, we open a read/write transaction on our database and add some data to an object store. Note also the functions attached to transaction event handlers to report on the outcome of the transaction opening in the event of success or failure. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](http://mdn.github.io/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Add the data to the database
  addData();
};

function addData() {
  // Create a new object to insert into the IDB
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // open a read/write db transaction, ready to add data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction completed: database modification finished.</li>';
  };


  transaction.onerror = function(event) {
  note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.oncomplete)
    note.innerHTML += '<li>Request successful.</li>';
  };
};
```

## 仕様書

| 仕様書                                                                           | 状態                             | 備考     |
| -------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('IndexedDB', '#transaction', 'IDBTransaction')}} | {{Spec2('IndexedDB')}}     | 初回定義 |
| {{SpecName("IndexedDB 2", "#transaction", "IDBTransaction")}} | {{Spec2("IndexedDB 2")}} |          |

## ブラウザーの互換性

{{Compat("api.IDBTransaction")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの仕様: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの受け取りや変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンスの例: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
