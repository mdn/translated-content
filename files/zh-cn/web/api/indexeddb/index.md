---
title: indexedDB
slug: Web/API/indexedDB
---

{{ APIRef() }}

**`indexedDB`** 是 `WindowOrWorkerGlobalScope` 的一个只读属性，它集成了为应用程序提供异步访问索引数据库的功能的机制。.

## 语法

```
var IDBFactory = self.indexedDB;
```

## 值

一个 {{domxref("IDBFactory")}} 对象。

示例

```js
var db;
function openDB() {
  var DBOpenRequest = window.indexedDB.open("toDoList");
  DBOpenRequest.onsuccess = function (e) {
    db = DBOpenRequest.result;
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
