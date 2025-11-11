---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

[IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 的 **`IDBObjectStore`** 接口表示数据库中的对象存储。对象存储中的记录根据其键值进行排序。这种排序可以实现快速插入、查找和有序检索。

## 实例属性

- {{domxref("IDBObjectStore.indexNames")}} {{ReadOnlyInline}}
  - : 对象存储中对象的[索引](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology#索引)名列表。
- {{domxref("IDBObjectStore.keyPath")}} {{ReadOnlyInline}}
  - : 对象存储的[键路径](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology#键路径)。如果该属性为 `null`，应用在每次操作时必须提供键名。
- {{domxref("IDBObjectStore.name")}}
  - : 对象存储的名称。
- {{domxref("IDBObjectStore.transaction")}} {{ReadOnlyInline}}
  - : 对象存储所属的 {{domxref("IDBTransaction")}} 对象。
- {{domxref("IDBObjectStore.autoIncrement")}} {{ReadOnlyInline}}
  - : 对象存储自增标志的值。

## 实例方法

- {{domxref("IDBObjectStore.add()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并且在单独的线程中创建该值（`value`）的[结构化克隆](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone)，并将克隆后的值存储到对象存储中。其用于将新记录添加到对象存储中。
- {{domxref("IDBObjectStore.clear()")}}
  - : 创建并立即返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中清除当前对象存储。其用于删除对象存储中当前的所有记录。
- {{domxref("IDBObjectStore.count()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中返回匹配提供的键或 {{domxref("IDBKeyRange")}} 的记录的数量。如果未提供参数，它会返回当前存储的记录总数。
- {{domxref("IDBObjectStore.createIndex()")}}
  - : 在版本升级时创建新索引，返回一个所连接数据库的新 {{domxref("IDBIndex")}} 对象。
- {{domxref("IDBObjectStore.delete()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中删除由指定键选中的存储对象。其用于删除对象存储中的某个单独的记录。
- {{domxref("IDBObjectStore.deleteIndex()")}}
  - : 在版本升级时销毁所连接数据库的指定索引。
- {{domxref("IDBObjectStore.get()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中返回由指定键选中的存储对象。其用于从对象存储中检索特定记录。
- {{domxref("IDBObjectStore.getKey()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中检索并返回与指定参数匹配的对象存储中记录的键。
- {{domxref("IDBObjectStore.getAll()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中检索并返回与指定参数匹配的对象存储中的所有记录，如果没有提供参数，则返回存储中的所有记录。
- {{domxref("IDBObjectStore.getAllKeys()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，检索与指定参数匹配的对象存储中所有对象记录的键，如果没有提供参数，则检索存储中的所有对象记录的键。
- {{domxref("IDBObjectStore.index()")}}
  - : 打开当前对象存储的指定索引，然后索引可被用于通过游标来按索引的顺序返回一系列记录。
- {{domxref("IDBObjectStore.openCursor()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中返回一个新的 {{domxref("IDBCursorWithValue")}} 对象。其用于通过游标按主键迭代对象存储。
- {{domxref("IDBObjectStore.openKeyCursor()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中返回一个新的 {{domxref("IDBCursor")}} 对象。其用于通过键迭代对象存储。
- {{domxref("IDBObjectStore.put()")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并在单独的线程中创建该值（`value`）的[结构化克隆](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone)，并将克隆后的值存储到对象存储中。其用于在事务模式为 `readwrite` 时更新对象存储中的现有记录。

## 示例

此示例展示了对象存储的各种不同用法，从在 `onupgradeneeded` 函数中使用 {{domxref("IDBObjectStore.createIndex")}} 更新数据结构，到使用 {{domxref("IDBObjectStore.add")}} 向对象存储中添加新项目。有关完整的可运行示例，请参见我们的[待办事项通知](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)应用程序（[查看在线示例](https://mdn.github.io/dom-examples/to-do-notifications/)）。

```js
// 打开数据库
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // 将打开数据库的结果存储到 db 中。
  db = DBOpenRequest.result;
};

// 此事件处理要创建新版本的数据库的事件（要么之前没有创建过，要么通过上面的
// window.indexedDB.open 行提交了一个新的版本号）
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "加载数据库时出错。";
  };

  // 在数据库中创建一个对象存储

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // 定义对象存储将包含的数据项

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.appendChild(document.createElement("li")).textContent =
    "已创建对象存储。";
};

// 创建一个要添加到对象存储中的新项目
const newItem = [
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

// 创建一个读写事务，准备添加数据
const transaction = db.transaction(["toDoList"], "readwrite");

// 当一切完成后，报告事务成功完成
transaction.oncomplete = (event) => {
  note.appendChild(document.createElement("li")).textContent = "事务完成。";
};

transaction.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "事务因错误而未能创建。不允许重复的项目。";
};

// 使用事务创建对象存储
const objectStore = transaction.objectStore("toDoList");
// 请求将 newItem 对象添加到对象存储中
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent = "请求成功。";
};
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
- 使用游标：{{domxref("IDBCursor")}}
- 参考示例：[待办事项通知](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[查看在线示例](https://mdn.github.io/dom-examples/to-do-notifications/)）。
