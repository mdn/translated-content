---
title: IDBObjectStore.keyPath
slug: Web/API/IDBObjectStore/keyPath
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}}的只读属性 keyPath 接口返回当前 objectStore 的[key path](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keypath)。

什么是 keyPath 呢？在 indexedDB 中，一条记录就是一个 object，object 里面有一个属性作为这条记录的主要依据用来进行查询，而这个属性的属性名就是 keyPath，属性值就是 key。在用 indexedDB 的 get 方法时，提供 key，而不需要指定 keyPath，因为 get 方法把参数作为这个最主要的属性的值，在数据库中进行查询。（译者注）

如果该属性值为 null，应用中必须在每一次进行修改性质的操作时提供一个 key。

add、put 方法都可以传第二个参数，当你当前的 objectStore 的 autoIncrement 为 true 时，你一般不会设置 keyPath，如果这个时候你在 put 的时候不提供第二个参数，indexedDB 就不知道要更新哪一条记录了。（译者注）

{{AvailableInWorkers}}

## 句法

```plain
var mykeyPath = objectStore.keyPath;
```

### Value

任何类型。

## 例子

在下面代码片段中，我们在数据库里打开了一个可读写的事务（transaction），并且用`add()`向一个 objectStore 中添加了一些数据。在 objectStore 被创建之后，我们在 console 中打印了 objectStore.keyPath 的值。想查看完整的例子，请查看我们的[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)应用（[查看在线例子](https://mdn.github.io/dom-examples/to-do-notifications/)）。

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
  console.log(objectStore.keyPath);

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
- 值域 range 的使用：{{domxref("IDBKeyRange")}}
- 检索、修改：{{domxref("IDBObjectStore")}}
- 使用游标：{{domxref("IDBCursor")}}
- 相关例子：[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
