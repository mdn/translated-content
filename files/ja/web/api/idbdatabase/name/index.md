---
title: IDBDatabase.name
slug: Web/API/IDBDatabase/name
---

{{ APIRef("IDBDatabase") }}

`IDBDatabaseインターフェイスのnameプロパティは、接続しているデータベース名を含む` {{ domxref("DOMString")}}です。

## 構文

```js
db.name
```

### 値

`接続しているデータベース名を含む`{{ domxref("DOMString")}}。

## 例

この例は接続しているデータベースと、DB の version と name プロパティを持つ{{domxref("IDBDatabase")}} オブジェクトの結果、そしてログを表示します。完全な例は、[To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) app ([view example live](http://chrisdavidmills.github.io/to-do-notifications/))を見てください。

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // This line will log the name of the database, which should be "toDoList"
  console.log(db.name);
};
```

## 仕様

| Specification                                                                    | Status                       | Comment |
| -------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-name', 'name')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBDatabase.name")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
