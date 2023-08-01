---
title: IDBDatabase
slug: Web/API/IDBDatabase
---

{{APIRef("IndexedDB")}}

IndexedDB 中的 **`IDBDatabase`** 接口提供一个到 [数据库的连接](/zh-CN/docs/IndexedDB#database_connection); 你可以使用 `IDBDatabase` 对象在数据库中打开一个[transaction](/zh-CN/docs/IndexedDB#gloss_transaction) , 然后进行操作或者删除数据库中的对象。这是唯一一个能够访问和管理数据库版本的接口。

{{AvailableInWorkers}}

> **备注：** 在 IndexedDB 中所做的所有事情总是发生在[事务](/zh-CN/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_transaction)的上下文中，表示与数据库中的数据的交互。IndexedDB 中的所有对象——包括对象存储、索引和游标——都与特定事务绑定。因此，在事务之外您不能执行命令、访问数据或打开任何东西。

> **备注：** 请注意，从 Firefox 40 开始，IndexedDB 事务具有宽松的持久性保证以提高性能（请参阅[bug 1112702](https://bugzilla.mozilla.org/show_bug.cgi?id=1112702)）以前在`readwrite`事务中[`IDBTransaction.oncomplete`](/zh-CN/docs/Web/API/IDBTransaction/oncomplete)被触发只有当所有数据都保证已刷新到磁盘时。在 Firefox 40+ 中，`complete`事件在操作系统被告知写入数据之后被触发，但可能在该数据实际上被刷新到磁盘之前。该`complete`因此，事件可以比以前更快地传递，但是，如果操作系统崩溃或者在将数据刷新到磁盘之前系统电源丢失，则整个事务将丢失的可能性很小。由于这种灾难性事件很少见，大多数消费者不应该进一步关注自己。如果由于某种原因必须确保持久性（例如，您要存储以后无法重新计算的关键数据），则可以`complete`通过使用实验（非标准）`readwriteflush`模式创建事务来强制事务在传递事件之前刷新到磁盘（请参阅[`IDBDatabase.transaction`](/zh-CN/docs/Web/API/IDBDatabase/transaction)）。

## 方法

继承自：[EventTarget](/zh-CN/docs/DOM/EventTarget)

- {{domxref("IDBDatabase.close()")}}
  - : 在一个单独的线程中关闭数据库连接并立即返回。
- {{domxref("IDBDatabase.createObjectStore()")}}
  - : 创建并返回一个新的 object store 或者 index。
- {{domxref("IDBDatabase.deleteObjectStore()")}}
  - : 根据给定的名字，删除在当前连接的数据库中的 object store 和 相关的索引。
- {{domxref("IDBDatabase.transaction()")}}
  - : 立即返回一个包含{{domxref("IDBTransaction.objectStore")}} 方法的 transaction 对象。你可以用这个对象来操作 object store。这个操作是在一个单独的线程中执行的。

## 属性

- {{domxref("IDBDatabase.name")}} {{readonlyInline}}
  - : {{ domxref("DOMString") }}类型，当前连接数据库名。
- {{domxref("IDBDatabase.version")}} {{readonlyInline}}
  - : [64-bit](</zh-CN/docs/NSPR_API_Reference/Long_Long_(64-bit)_Integers>) 整型数，当前连接数据库的版本。当数据第一次被创建时，这个属性是一个空的字符串。
- {{domxref("IDBDatabase.objectStoreNames")}} {{readonlyInline}}
  - : {{ domxref("DOMStringList") }}类型，当前连接连接数据库中所有的 object store 名字列表。

### Event handlers

- {{domxref("IDBDatabase.onabort")}}
  - : 在中断数据库访问时触发。
- {{domxref("IDBDatabase.onerror")}}
  - : 当访问数据库失败时触发。
- {{domxref("IDBDatabase.onversionchange")}}

  - : 当数据库结构发生更改时触发

    ({{domxref("IDBOpenDBRequest.onupgradeneeded")}}事件或在其他地方请求 {{domxref("IDBFactory.deleteDatabase")}} 时（最可能在同一台计算机上的另一个窗口/选项卡中）这与版本更改事务（请参阅参考资料{{domxref("IDBVersionChangeEvent")}}) 不同，但它是相关的。

## 示例

在下面的代码中，异步打开了一个数据库连接 ({{domxref("IDBFactory")}}), 并处理成功或者异常事件，如果触发了 upgrade 事件就需要创建一个新的 object store ({{ domxref("IDBdatabase") }})。如果想看完整的例子，可以使用 [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) 应用 ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
// 我们先打开一个数据库
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// 当数据库打开出错/成功时，以下两个事件处理程序将分别对 IDBDatabase 对象进行下一步操作
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // 将打开数据库的结果存储在 db 变量中，该变量将在后面的代码中被频繁使用
  db = DBOpenRequest.result;

  // 运行 displayData() 方法，用 IDB 中已经存在的所有待办事项列表数据填充到任务列表中
  displayData();
};

// 当试图打开一个尚未被创建的数据库，或者试图连接一个数据库还没被创立的版本时，onupgradeneeded 事件会被触发

DBOpenRequest.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function (event) {
    note.innerHTML += "<li>Error loading database.</li>";
  };

  // 使用 IDBDatabase.createObjectStore 方法，可创建一个对象存储区

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // 定义 objectStore 将包含哪些数据项

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Object store created.</li>";
};
```

下一行打开数据库上的事务，然后打开一个对象存储，然后我们可以在其中操作数据。

```js
var objectStore = db.transaction("toDoList").objectStore("toDoList");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
