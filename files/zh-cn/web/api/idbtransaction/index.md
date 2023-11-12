---
title: IDBTransaction
slug: Web/API/IDBTransaction
---

{{APIRef("IndexedDB")}}

`IDBTransacation`接口由[IndexedDB API](/zh-CN/docs/IndexedDB)提供，异步事务使用数据库中的事件对象属性。所有的读取和写入数据均在事务中完成。由{{domxref("IDBDatabase")}}发起事务，通过{{domxref("IDBTransaction")}} 来设置事务的模式（例如：是否只读`readonly`或读写`readwrite`），以及通过{{domxref("IDBObjectStore")}}来发起一个请求。同时你也可以使用它来中止事务。

Note that as of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase performance (see [Firefox bug 1112702](https://bugzil.la/1112702).) Previously in a `readwrite` transaction {{domxref("IDBTransaction.oncomplete")}} was fired only when all data was guaranteed to have been flushed to disk. In Firefox 40+ the `complete` event is fired after the OS has been told to write the data but potentially before that data has actually been flushed to disk. The `complete` event may thus be delivered quicker than before, however, there exists a small chance that the entire transaction will be lost if the OS crashes or there is a loss of system power before the data is flushed to disk. Since such catastrophic events are rare most consumers should not need to concern themselves further.

If you must ensure durability for some reason (e.g. you're storing critical data that cannot be recomputed later) you can force a transaction to flush to disk before delivering the `complete` event by creating a transaction using the experimental (non-standard) `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.

注意，事务在被创建的时候就已经开始，并非在发起第一个请求（`IDBRequest`) 的时候。例如下面的例子：

```js
var trans1 = db.transaction("foo", "readwrite");
var trans2 = db.transaction("foo", "readwrite");
var objectStore2 = trans2.objectStore("foo");
var objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

在代码执行后，object store 应该包含值 "2", 因为 `trans2` 应该在 `trans1` 之后执行。

Transactions can fail for a fixed number of reasons, all of which (except the user agent crash) will trigger an abort callback:

- Abort due to bad requests, e.g. trying to add() the same key twice, or put() with the same index key with a uniqueness constraint. This causes an error on the request, which can bubble up to an error on the transaction, which aborts the transaction. Can be prevented by using preventDefault() on the error event on the request.
- Explicit abort() call from script
- Uncaught exception in request's success/error handler
- I/O error (actual failure to write to disk, e.g. disk detached, or other OS/hardware failure)
- Quota exceeded
- User agent crash

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## 属性

- {{domxref("IDBTransaction.db")}} {{readonlyInline}}
  - : 当前事务所属的数据库连接。
- {{domxref("IDBTransaction.error")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMException")}} indicating the type of error that occured when there is an unsuccessful transaction. This property is `null` if the transaction is not finished, is finished and successfully committed, or was aborted with {{domxref("IDBTransaction.abort")}} function.
- {{domxref("IDBTransaction.mode")}} {{readonlyInline}}
  - : 用于隔离事务作用域内的 object store 中数据访问的模式。下方的常量章节给出了所有可用的值。默认值是 [`readonly`](#const_read_only).
- {{domxref("IDBTransaction.objectStoreNames")}} {{readonlyinline}}
  - : Returns a {{domxref("DOMStringList")}} of the names of {{domxref("IDBObjectStore")}} objects.

### Event handlers

- {{domxref("IDBTransaction.onabort")}} {{readonlyInline}}

  - : The event handler for the `abort` event, fired when the transaction is aborted. This can happen due to:

    - bad requests, e.g. trying to add() the same key twice, or put() with the same index key with a uniqueness constraint and there is no error handler on the request to call preventDefault() on the event,
    - an explicit abort() call from script
    - uncaught exception in request's success/error handler,
    - an I/O error (actual failure to write to disk, e.g. disk detached, or other OS/hardware failure), or
    - quota exceeded.

- {{domxref("IDBTransaction.oncomplete")}} {{readonlyInline}}
  - : The event handler for the `complete` event, thrown when the transaction completes successfully.
- {{domxref("IDBTransaction.onerror")}} {{readonlyInline}}
  - : The event handler for the `error` event, thrown when the transaction fails to complete.

## 方法

从{{domxref("EventTarget")}}继承

- {{domxref("IDBTransaction.abort")}}
  - : 放弃本次连接的 transaction 的所有修改，如果当前的 transaction 处于回滚完毕或完成状态，则会抛出一个错误事件。
- {{domxref("IDBTransaction.objectStore")}}
  - : 返回表示作为此事务作用域一部分的 object store 的 {{domxref("IDBObjectStore")}} 对象。

## 模式常量

{{deprecated_header}}

> **警告：** 这些常量将不再可用——它们在 Gecko 25 中被移除。你应该直接使用字符串常量来作为替代。 ([Firefox bug 888598](https://bugzil.la/888598))

Transactions 可使用以下三种模式中的一种：

| 常量             | 值                           | 描述                                                                                                                                                                                                                                                                               |
| ---------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `READ_ONLY`      | "readonly"(0 in Chrome)      | 允许读取数据，不改变。                                                                                                                                                                                                                                                             |
| `READ_WRITE`     | "readwrite"(1 in Chrome)     | 允许读取和写入现有数据存储，数据被改变。                                                                                                                                                                                                                                           |
| `VERSION_CHANGE` | "versionchange"(2 in Chrome) | 允许执行任何操作，包括删除和创建对象存储和索引。此模式是用于开始使用[IDBDatabase](/zh-CN/docs/IndexedDB/IDBDatabase) 的 [`setVersion()`](/zh-CN/docs/IndexedDB/IDBDatabase#setVersion)方法更新版本号事务。这种模式的事务无法与其他事务并发运行。这种模式下的事务被称为“升级事务”。 |

即使目前这些常量已经被废弃，但如果你需要使用它，则需要提供向下兼容方案 (in Chrome [the change was made in version 21](http://peter.sh/2012/05/tab-sizing-string-values-for-indexeddb-and-chrome-21/))。你应当防止出现对象不存在的情况：

```js
var myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Example

In the following code snippet, we open a read/write transaction on our database and add some data to an object store. Note also the functions attached to transaction event handlers to report on the outcome of the transaction opening in the event of success or failure. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready for being inserted into the IDB
  var newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "December",
      year: 2013,
      notified: "no",
    },
  ];

  // open a read/write db transaction, ready for adding the data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = function (event) {
    note.innerHTML +=
      "<li>Transaction completed: database modification finished.</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function (event) {
    // report the success of our new item going into the database
    note.innerHTML += "<li>New item added to database.</li>";
  };
}
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
