---
title: IDBObjectStore.get()
slug: Web/API/IDBObjectStore/get
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} 的接口 **`get()`**方法 返回 {{domxref("IDBRequest")}} 对象，并在“单独的线程（separate thread）”中返回由指定键选择的“对象储存（object store）” 。这用于从对象储存检索特定记录。

如果成功找到值，则会创建其值的结构化克隆，并设置为“请求对象（request object）”的 [`result`](/zh-CN/IndexedDB/IDBRequest#attr_result) 。

> **备注：** This method produces the same result for: a) a record that doesn't exist in the database and b) a record that has an undefined value. To tell these situations apart, call the `openCursor()` method with the same key. That method provides a cursor if the record exists, and no cursor if it does not.

{{AvailableInWorkers}}

## 语法

```
var request = objectStore.get(key);
```

### 参数

- key
  - : 标识要检索的记录的键或键范围。

### 返回值

触发与此操作相关的后续事件的 {{domxref("IDBRequest")}} 对象。

### 异常

此方法可能会引发以下类型之一的 {{domxref("DOMException")}} :

| Exception                | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| TransactionInactiveError | This {{domxref("IDBObjectStore")}}'s transaction is inactive.  |
| DataError                | The key or key range provided contains an invalid key.         |
| `InvalidStateError`      | The {{domxref("IDBObjectStore")}} has been deleted or removed. |

## 例子

在以下的代码段中，我们在数据库上打开一个“读/写 事务（read/write transaction）”，并使用 `get()` 从“对象储存（object store）”中获取一个特定的记录——一个带有“Walk dog”键的示例记录。一旦检索到这个数据对象，你就可以使用普通的 JavaScript 更新它，然后使用 {{domxref("IDBObjectStore.put")}} 操作将其放回数据库。有关完整的工作示例，查看我们的 [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the getData() function to get the data from the database
  getData();
};

function getData() {
  // open a read/write db transaction, ready for retrieving the data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function (event) {
    note.innerHTML += "<li>Transaction completed.</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction not opened due to error: " + transaction.error + "</li>";
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");

  // Make a request to get a record by key from the object store
  var objectStoreRequest = objectStore.get("Walk dog");

  objectStoreRequest.onsuccess = function (event) {
    // report the success of our request
    note.innerHTML += "<li>Request successful.</li>";

    var myRecord = objectStoreRequest.result;
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
