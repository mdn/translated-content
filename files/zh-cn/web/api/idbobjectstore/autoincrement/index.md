---
title: IDBObjectStore.autoIncrement
slug: Web/API/IDBObjectStore/autoIncrement
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}}的只读属性 **`autoIncrement`** 接口返回当前 objectStore 的自增标记值（true 或 false）。

什么是自增呢？熟悉 SQL 的朋友应该知道，SQL 数据里面的字段可以设置自增，当一条记录被插入时，不必传入该字段，新记录的该字段值会在前面一条记录该字段值的基础上加 1.而 indexedDB 里面的 autoIncrement 的同样的意义。（译者注）

注意：每个 objectStore 的 auto increment 计数器是分开独立的。

{{AvailableInWorkers}}

## 句法

```
var myAutoIncrement = objectStore.autoIncrement;
```

### Value

{{domxref("Boolean")}}:

| 值      | 含义                      |
| ------- | ------------------------- |
| `true`  | 当前 objectStore 会自增   |
| `false` | 当前 objectStore 不会自增 |

## 例子

在下面代码片段中，我们在数据库里打开了一个可读写的事务（transaction），并且用`add()`向一个 objectStore 中添加了一些数据。在 objectStore 被创建之后，我们在 console 中打印了 objectStore.autoIncrement 的值。想查看完整的例子，请查看我们的[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)应用（[查看在线例子](https://mdn.github.io/dom-examples/to-do-notifications/)）。

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready to insert into the IDB
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

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function (event) {
    note.innerHTML += "<li>Transaction completed.</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.autoIncrement);

  // Make a request to add our newItem object to the object store
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function (event) {
    // report the success of our request
    note.innerHTML += "<li>Request successful.</li>";
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- 开始学习事务 transactions: {{domxref("IDBDatabase")}}
- 使用事务 transactions: {{domxref("IDBTransaction")}}
- key 值域 range 的使用：{{domxref("IDBKeyRange")}}
- 检索、修改：{{domxref("IDBObjectStore")}}
- 使用游标：{{domxref("IDBCursor")}}
- 相关例子：[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
