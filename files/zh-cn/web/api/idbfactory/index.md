---
title: IDBFactory
slug: Web/API/IDBFactory
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/zh-CN/docs/IndexedDB) 的`IDBFactory` 接口让程序可以异步存取 indexed databases。`window.indexedDB` 对象实现了这个接口。你可以通过这个对象而不是直接使用`IDBFactory`接口打开—— 创建或者连接 —— 和删除一个数据库。

## Methods

- {{domxref("IDBFactory.open")}}
  - : 请求打开一个数据库的连接（[connection to a database](/zh-CN/docs/IndexedDB#gloss_database_connection)）。
- {{domxref("IDBFactory.deleteDatabase")}}
  - : 请求删除数据库。
- {{domxref("IDBFactory.cmp")}}
  - : 比较两个键的方法并返回一个结果，表明哪个值更大。

### 过时的 Methods

- [`IDBFactory.open`](/zh-CN/docs/Web/API/IDBFactory.open-obsolete), the original version {{Deprecated_Inline}}
  - : 一个被废弃的方法请求打开一个数据库的连接，仍然在一些浏览器中被实施 ([connection to a database](/zh-CN/docs/IndexedDB#gloss_database_connection)).

## Example

In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
var note = document.querySelector("ul");

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
  db = request.result;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
