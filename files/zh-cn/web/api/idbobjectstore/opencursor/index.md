---
title: IDBObjectStore.openCursor
slug: Web/API/IDBObjectStore/openCursor
---

{{ APIRef("IDBObjectStore") }}

{{domxref("IDBObjectStore")}} 的 `openCursor()` 方法 返回一个{{domxref("IDBRequest")}} 对象，并在一个单独的线程中，返回一个新的 {{domxref("IDBCursorWithValue")}} 对象。此方法目的是用一个游标来遍历一个对象存储空间。

若要确认此操作是否成功完成，请监听结果的 `success` 事件。

{{AvailableInWorkers}}

## 语法

```js
var request = ObjectStore.openCursor(query, direction);
```

### 参数

- query {{optional_inline}}
  - : 要查询的键或者 {{domxref("IDBKeyRange")}} 。如果传一个有效的键，则会默认为只包含此键的范围。如果此参数不传值，则默认为一个选择了该对象存储空间全部记录的键范围。
- direction {{optional_inline}}
  - : 一个 {{domxref("IDBCursorDirection")}} 来告诉游标要移动的方向。有效的值有 `"next"` 、`"nextunique"` 、`"prev"` 和 `"prevunique"`。默认值是 `"next"`。

### 返回

一个 {{domxref("IDBRequest")}} 对象，在此对象上触发与此操作相关的后续事件。

### 异常

此方法可能引起以下类型之一的 {{domxref("DOMException")}} ：

| 异常                       | 描述                                                                  |
| -------------------------- | --------------------------------------------------------------------- |
| `InvalidStateError`        | 此 {{domxref("IDBObjectStore")}} 或{{domxref("IDBIndex")}} 已被删除。 |
| `TransactionInactiveError` | 此 {{domxref("IDBObjectStore")}} 的事务处于非活动状态。               |
| `DataError`                | 指定的键或键范围无效。                                                |

## 例子

在下面这个简单的片段中，我们创建一个事务，检索一个对象存储空间，然后用一个游标去遍历该对象存储空间的所有记录：

```js
var transaction = db.transaction("name", "readonly");
var objectStore = transaction.objectStore("name");
var request = objectStore.openCursor();
request.onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.value 包含正在被遍历的当前记录
    // 这里你可以对 result 做些什么
    cursor.continue();
  } else {
    // 没有更多 results
  }
};
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
