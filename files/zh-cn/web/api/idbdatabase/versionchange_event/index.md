---
title: IDBDatabase.onversionchange
slug: Web/API/IDBDatabase/versionchange_event
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBDatabase")}} 中的 **`onversionchange`** 事件处理器能处理版本更新事件，此事件能在任意地方 (很可能在同一台计算机上的另一个窗口/选项卡中) 导致数据库结构更改（{{ domxref("IDBOpenDBRequest.onupgradeneeded")}} 事件 或 {{ domxref("IDBFactory.deleteDatabase")}} 事件）的时候被触发。

**`onversionchange`** 与 `versionchange` 是不相同的事件（但两者是有关联的）。

{{AvailableInWorkers}}

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("versionchange", (event) => {});
onversionchange = (event) => {};
```

## 举例

本例展示了一个创建新对象仓库的 {{domxref("IDBOpenDBRequest.onupgradeneeded")}} 代码块；代码中包含用于处理失败操作的 `onerror` 和 `onabort` 函数，以及一个 onversionchange 函数用以在数据库结构被改变时通知用户。

```js
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Error opening database.</li>';
  };

  db.onabort = function(event) {
    note.innerHTML += '<li>Database opening aborted!</li>';
  };

  // 给这个数据库创建对象仓库

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // 定义对象仓库中包含的数据项

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += '<li>Object store created.</li>';

  db.onversionchange = function(event) {
    note.innerHTML += '<li>a database change has occurred; you should refresh this
                       browser window, or close it down and use the other open version of
                       this application, wherever it exists.</li>';
  };
};
```

## 浏览器兼容性

{{Compat}}

## 更多参考

- [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- 开始了解事务：{{domxref("IDBDatabase")}}
- 使用事务：{{domxref("IDBTransaction")}}
- 设置键值范围：{{domxref("IDBKeyRange")}}
- 检索与修改数据：{{domxref("IDBObjectStore")}}
- 使用游标：{{domxref("IDBCursor")}}
- 参考用例：[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
- [`versionchange`](/zh-CN/docs/Web/API/IDBDatabase/versionchange_event) 事件
