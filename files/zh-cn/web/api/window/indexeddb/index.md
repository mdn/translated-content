---
title: Window：indexedDB 属性
short-title: indexedDB
slug: Web/API/Window/indexedDB
l10n:
  sourceCommit: 9912dd7cc583fc938cc73152dccdb94c3bb79ce4
---

{{APIRef("IndexedDB")}}

{{domxref("Window")}} 接口的 **`indexedDB`** 只读属性为应用程序提供了一种异步访问索引数据库功能的机制。

## 值

一个 {{domxref("IDBFactory")}} 对象。

## 示例

以下代码会异步创建打开数据库的请求；当请求的 `onsuccess` 处理器触发时，数据库即已打开。

```js
let db;
function openDB() {
  const DBOpenRequest = window.indexedDB.open("toDoList");
  DBOpenRequest.onsuccess = (e) => {
    db = DBOpenRequest.result;
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- 开始事务：{{domxref("IDBDatabase")}}
- 使用事务：{{domxref("IDBTransaction")}}
- 设置键的范围：{{domxref("IDBKeyRange")}}
- 检索和修改数据：{{domxref("IDBObjectStore")}}
- 使用游标：{{domxref("IDBCursor")}}
- 参考示例：[待办事项通知](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[查看在线示例](https://mdn.github.io/dom-examples/to-do-notifications/)）。
