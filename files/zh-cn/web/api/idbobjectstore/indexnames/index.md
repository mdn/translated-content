---
title: IDBObjectStore.indexNames
slug: Web/API/IDBObjectStore/indexNames
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} 的只读属性 **`indexNames`** 返回此对象存储中对象的 [indexes](/zh-CN/IndexedDB#gloss_index) 名称（name）列表。

{{AvailableInWorkers}}

## Syntax

```
var myindexNames = objectStore.indexNames;
```

### Value

一个 {{domxref("DOMStringList")}}.

## Example

在下面的代码片段中，我们在数据库上打开一个读/写事务并使用 `add()` 向对象存储添加一些数据。创建对象存储后，我们将打印 `objectStore.indexNames` 到控制台。有关完整的工作示例，请参阅我们的 [待办事项通知](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)应用程序 ( [实时查看示例](https://mdn.github.io/dom-examples/to-do-notifications/) )

```js
// 让我们来打开我们的数据库
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // 将打开数据库的结果存储在 db 变量中
  // 下面经常用到这个
  db = this.result;

  // 运行 addData() 函数将数据添加到数据库
  addData();
};

function addData() {
  // 创建一个新对象以准备插入到 IDB 中
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

  // 打开读/写数据库事务，准备添加数据
  var transaction = db.transaction(["toDoList"], "readwrite");

  // 当所有事情都完成时，报告事务完成的成功情况
  transaction.oncomplete = function (event) {
    note.innerHTML += "<li>Transaction completed.</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
  };

  // 在事务上创建对象存储
  var objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.indexNames);

  // 请求将 newItem 对象 添加到对象存储区
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function (event) {
    // 报告我们请求的成功
    note.innerHTML += "<li>Request successful.</li>";
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看其他内容

- [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- 启动事务 : {{domxref("IDBDatabase")}}
- 使用事务 : {{domxref("IDBTransaction")}}
- 设置键的范围 : {{domxref("IDBKeyRange")}}
- 检索和更改数据 : {{domxref("IDBObjectStore")}}
- 使用游标 : {{domxref("IDBCursor")}}
- 参考示例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
