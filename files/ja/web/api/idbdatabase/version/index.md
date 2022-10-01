---
title: IDBDatabase.version
slug: Web/API/IDBDatabase/version
---

{{ APIRef("IDBDatabase") }}

`{{domxref("IDBDatabase")}}インターフェイスのversion`プロパティ は、接続しているデータベースのバージョンを含む[64-bit integer](/ja/docs/NSPR_API_Reference/Long_Long_%2864-bit%29_Integers)です。データベースを初めて生成した時、この属性は空文字です。

## 構文

```js
db.version
```

### 値

接続しているデータベースのバージョンを含む整数値。

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

  // This line will log the version of the connected database, which should be "4"
  console.log(db.version);
};
```

## 仕様

| Specification                                                                            | Status                       | Comment |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-version', 'version')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBDatabase.version")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
