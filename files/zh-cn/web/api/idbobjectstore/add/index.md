---
title: IDBObjectStore.add()
slug: Web/API/IDBObjectStore/add
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} 接口中的 **`add()`** 方法返回一个 {{domxref("IDBRequest")}} 对象，在单独的线程中创建一个结构（[structured clone](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone)）化克隆值，并且在对象存储中存储这个克隆值。这个方法用作在一个对象存储中添加一条新的记录。

要确定添加操作是否成功完成，可以监听事务的 `complete` 事件。除了 `IDBObjectStore.add` 请求 `success` 事件之外，因为事务在成功被触发后仍然可能失败。换句话说，成功事件只有在事务成功排队后才会触发。

**`add()`** 方法是唯一的插入方法。如果以关键字参数作为主键的一条记录已经存在在存储对象中，这时在返回的请求对象中 `ConstrainError` 错误事件将被触发。对于更新存在的记录，你应该使用 {{domxref("IDBObjectStore.put")}} 方法替代它。

{{AvailableInWorkers}}

## 语法

```
var request = objectStore.add(value);
var request = objectStore.add(value, key);
```

### 参数

- value
  - : 需要存储的值。
- key {{optional_inline}}
  - : 关键字用于识别记录。如果未指明，即为空。

### 返回

一个 {{domxref("IDBRequest")}} 对象，在该操作对象中触发与此相关的后续事件。

### 异常

这个方法可能导致以下类型中的一个 {{domxref("DOMException")}} :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ReadOnlyError</code></td>
      <td>与此操作相关联的事务处于只读模式。</td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>当前 {{domxref("IDBObjectStore")}} 事务不可用。</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>适用于以下任何条件：</p>
        <ul>
          <li>
            对象存储使用内联键或者拥有密钥生成器（键生成器），并且提供了键参数。
          </li>
          <li>
            对象存储使用外联键或者没有密钥生成器（键生成器），并且没有提供键参数。
          </li>
          <li>
            对象存储使用内联键但是没有密钥生成器（键生成器），并且对象存储的键路径不会产生一个有效的键值。
          </li>
          <li>键参数已经被提供，但是不包含一个有效的键。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        <p>{{domxref("IDBObjectStore")}} 已经被删除或者移除。</p>
      </td>
    </tr>
    <tr>
      <td><code>DataCloneError</code></td>
      <td>通过内部结构的克隆算法，被存储的数据无法被克隆<br /></td>
    </tr>
    <tr>
      <td><code>ConstraintError</code></td>
      <td>
        <p>
          因为主键违法规定导致的插入操作失败（由于已存在的记录使用了相同的主键值）。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 示例

在以下的代码片段中，在我们数据库中打开一个 read/write（读写）事务和使用 `add()` 方法添加一些数据到存储对象中。还要注意附加到事务事件处理程序的函数，这些函数用于报告事务打开成功或失败时的结果。完整的示例代码，请查看我们的 [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) 应用（[在线查看示例](https://mdn.github.io/dom-examples/to-do-notifications/)）。

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

  // Make a request to add our newItem object to the object store
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function (event) {
    // report the success of our request
    note.innerHTML += "<li>Request successful.</li>";
  };
}
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
