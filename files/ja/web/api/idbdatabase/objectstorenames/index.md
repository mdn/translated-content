---
title: IDBDatabase.objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
---

{{ APIRef("IDBDatabase") }}

{{domxref("IDBDatabase")}}インターフェイスの`objectStoreNames`プロパティは、現在接続しているデータベースの[object stores](/ja/docs/IndexedDB#gloss_object_store)名のリストを含む{{ domxref("DOMStringList") }}です。

## 構文

```js
db.objectStoreNames
```

### 値

現在接続しているデータベースの[object stores](/ja/docs/IndexedDB#gloss_object_store)名のリストを含む{{ domxref("DOMStringList") }}。

## 例

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

  // This line will log the version of the connected database, which should be
  // an object that looks like { ['my-store-name'] }
  console.log(db.objectStoreNames);
};
```

## 仕様

| Specification                                                                                                    | Status                       | Comment |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-objectStoreNames', 'objectStoreNames')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBDatabase.objectStoreNames")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
