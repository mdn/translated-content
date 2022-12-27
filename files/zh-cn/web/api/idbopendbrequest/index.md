---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
---

{{APIRef("IndexedDB")}}

IndexedDB API 的 **`IDBOpenDBRequest`** 接口提供了访问打开或删除数据库的请求的结果（通过调用 {{domxref("IDBFactory.open")}} and {{domxref("IDBFactory.deleteDatabase")}}），途径就是使用特殊的事件处理器属性。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Properties

_Also inherits methods from its parents {{domxref("IDBRequest")}} and {{domxref("EventTarget")}}_.

### Events

- {{domxref("IDBOpenDBRequest.onblocked")}}
  - : The event handler for the blocked event. This event is triggered when the `upgradeneeded` event should be triggered because of a version change but the database is still in use (i.e. not closed) somewhere, even after the `versionchange` event was sent.
- {{domxref("IDBOpenDBRequest.onupgradeneeded")}}
  - : `upgradeneeded` 事件的事件处理器，会在当一个数据库的版本比已经存在的版本还高的时候触发。

## Methods

_No methods, but inherits methods from its parents {{domxref("IDBRequest")}} and {{domxref("EventTarget")}}._

## Example

In the following example you can see the onupgradeneeded handler being used to update the database structure if a database with a higher version number is loaded. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](http://mdn.github.io/to-do-notifications/).)

```js
var db;

// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these event handlers act on the database being opened.
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Run the displayData() function to populate the task
  // listwith all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above
// it is only implemented in recent browsers
DBOpenRequest.onupgradeneeded = function(event) {
  var db = this.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });
};
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
