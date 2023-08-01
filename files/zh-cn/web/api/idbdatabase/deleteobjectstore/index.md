---
title: IDBDatabase.deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
---

{{ APIRef("IndexedDB") }}

**`deleteObjectStore()`** 方法从 {{domxref("IDBDatabase")}} 中销毁指定名称的对象存储，及这个对象存储所包含的任何索引。

与 {{ domxref("IDBDatabase.createObjectStore") }} 一样，此方法*只能*在[`versionchange`](/zh-CN/docs/IndexedDB/IDBTransaction#VERSION_CHANGE)事务中调用。

{{AvailableInWorkers}}

## 语法

```plain
dbInstance.deleteObjectStore(name);
```

### 参数

- `name`
  - : 将要删除的对象存储的名字

### 异常

此方法可能会引发下列 {{domxref("DOMException")}} 异常：

| Exception                  | Description                                                                                                                                                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError`        | Occurs if the method was not called from a `versionchange` transaction callback. For older WebKit browsers, you must call {{ APIRef("IDBVersionChangeRequest.setVersion")}} first.                                                                                                                       |
| `TransactionInactiveError` | Occurs if a request is made on a source database that doesn't exist (e.g. has been deleted or removed.) In Firefox previous to version 41, an `InvalidStateError` was raised in this case as well, which was misleading; this has now been fixed (see [Firefox bug 1176165](https://bugzil.la/1176165).) |
| `NotFoundError`            | You are trying to delete an object store that does not exist. Names are case sensitive.                                                                                                                                                                                                                  |

## 示例

```js
var dbName = "sampleDB";
var dbVersion = 2;
var request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function (e) {
  var db = request.result;
  if (e.oldVersion < 1) {
    db.createObjectStore("store1");
  }

  if (e.oldVersion < 2) {
    db.deleteObjectStore("store1");
    db.createObjectStore("store2");
  }

  // etc. for version < 3, 4...
};
```

## Specification

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
