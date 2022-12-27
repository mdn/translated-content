---
title: IDBDatabase
slug: Web/API/IDBDatabase
---

{{APIRef()}}

IndexedDB API`のIDBDatabase`インターフェイスは、[データベースへの接続](/ja/docs/IndexedDB#database_connection)を提供します。 `IDBDatabase`オブジェクトで、データベースの[transaction](/ja/docs/IndexedDB#gloss_transaction)を開き、データベースのオブジェクト（データ）を生成したり、操作したり、削除したりできます。このインターフェイスはデータベースのバージョンを取得したり、統合したりする唯一の方法を提供します。

> **メモ:** Everything you do in IndexedDB always happens in the context of a [transaction](/ja/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_transaction), representing interactions with data in the database. All objects in IndexedDB — including object stores, indexes, and cursors — are tied to a particular transaction. Thus, you cannot execute commands, access data, or open anything outside of a transaction.

## メソッド

Inherits from: [EventTarget](/ja/docs/DOM/EventTarget)

- {{domxref("IDBDatabase.close")}}
  - : 即座に応答して、別スレッドでデータベースを閉じる。
- {{domxref("IDBDatabase.createObjectStore")}}
  - : 新しくオブジェクトストアかインデックスを生成して返す。
- {{domxref("IDBDatabase.deleteObjectStore")}}
  - : 参照しているインデックスがあったとしても、接続中のデータベースで与えられた名前のオブジェクトストアを削除する。
- {{domxref("IDBDatabase.transaction")}}
  - : オブジェクトストアにアクセスできる{{domxref("IDBTransaction.objectStore")}}メソッドを含むトランザクションオブジェクト ({{domxref("IDBTransaction")}})を即座に返す。別スレッドで実行される。

## プロパティ

- {{domxref("IDBDatabase.name")}} {{readonlyInline}}
  - : 接続しているデータベース名を含む{{ domxref("DOMString") }} 。
- {{domxref("IDBDatabase.version")}} {{readonlyInline}}
  - : 接続しているデータベースのバージョンを含む[64-bit integer](</ja/docs/NSPR_API_Reference/Long_Long_(64-bit)_Integers>)。データベースが初めて作られた場合、この属性は空文字である。
- {{domxref("IDBDatabase.objectStoreNames")}} {{readonlyInline}}
  - : 接続しているデータベースの[object stores](/ja/docs/IndexedDB#gloss_object_store)名のリストを含む{{ domxref("DOMStringList") }} 。

### イベントハンドラ

- {{domxref("IDBDatabase.onabort")}}
  - : データベースの接続が中止された場合に発生する。
- {{domxref("IDBDatabase.onerror")}}
  - : データベースへの接続が失敗した場合に発生する。
- {{domxref("IDBDatabase.onversionchange")}}
  - : データベースの構造が({{domxref("IDBOpenDBRequest.onupgradeneeded")}}`イベントで変更されるか、`{{domxref("IDBFactory.deleteDatabase")}} がどこかで(ほとんどの場合、同じコンピューターの他のウィンドウやタブで)要求された場合に発生します。これは version change transaction (see {{domxref("IDBVersionChangeEvent")}})とは異なりますが、関連があります。

## 例

次のコードスニペットでは、データベースを非同期で開き({{domxref("IDBFactory")}})、成功と失敗の場合にイベントを登録し、アップグレードが必要な場合には、新しいオブジェクトストアを生成しています({{ domxref("IDBdatabase") }})。 完璧に動作する例は、 [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](http://mdn.github.io/to-do-notifications/).)を見てください。

```js
// Let us open our database
  var DBOpenRequest = window.indexedDB.open("toDoList", 4);

  // these two event handlers act on the IDBDatabase object, when the database is opened successfully, or not
  DBOpenRequest.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  DBOpenRequest.onsuccess = function(event) {
    note.innerHTML += '<li>Database initialised.</li>';

    // store the result of opening the database in the db variable. This is used a lot later on
    db = DBOpenRequest.result;

    // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
    displayData();
  };

  // This event handles the event whereby a new version of the database needs to be created
  // Either one has not been created before, or a new version number has been submitted via the
  // window.indexedDB.open line above

  DBOpenRequest.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '<li>Error loading database.</li>';
    };

    // Create an objectStore for this database using IDBDatabase.createObjectStore

    var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

    // define what data items the objectStore will contain

    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });

    note.innerHTML += '<li>Object store created.</li>';
  };
```

次の行は、データベースでトランザクションを開いて、そしてオブジェクトストアを開いて、内側のデータを操作しています。

```js
    var objectStore = db.transaction('toDoList').objectStore('toDoList');
```

## 仕様

| Specification                                                                        | Status                       | Comment |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#idl-def-IDBDatabase', 'IDBDatabase')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBDatabase")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
