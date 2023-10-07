---
title: IDBDatabase.createObjectStore()
slug: Web/API/IDBDatabase/createObjectStore
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBDatabase")}} 接口的 **`createObjectStore()`** 方法创建并返回一个新的 object store 或 index。

此方法接受一个参数作为 store 的名称，也接受一个可选的参数对象让你可以定义重要的可选属性。你可以用这个属性唯一的标识此 store 中的每个对象。因为参数是一个标识符，所以 store 中的每一个对象都应有此属性并保证此属性唯一。

此方法只能在 [`versionchange`](/zh-CN/docs/IndexedDB/IDBTransaction#VERSION_CHANGE) 事务中被调用。

{{AvailableInWorkers}}

## 语法

```
var objectStore = IDBDatabase.createObjectStore(name);
var objectStore = IDBDatabase.createObjectStore(name, options);
```

### 参数

- name
  - : 被创建的 object store 的名称。请注意创建空名称的 object store 是被允许的。
- optionalParameters {{optional_inline}}

  - : 可选的对象，它的属性是此方法的可选参数，其中包括以下的属性：

    | Attribute       | Description                                                                                                                                                                                                                                                                                                                          |
    | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `keyPath`       | [key path](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keypath) 被用在新的 object store 上。如果为空或未指定，object store 创建时将没有 key path，而是使用 [out-of-line keys](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_outofline_key) 。你也能传一个数组作为 `keyPath` 。 |
    | `autoIncrement` | 如果为 `true`, object store 有一个 [key generator](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keygenerator). 默认为 `false`。                                                                                                                                                                           |

    未知参数将被忽略。

### 返回值

- {{domxref("IDBObjectStore")}}
  - : 新创建的 object store 对象。

### 异常

This method may raise a 此方法可能会抛出一个 {{domxref("DOMException")}} 带有以下所列其中一种类型的 {{domxref("DOMError")}} ：

| Exception                  | Description                                                                                                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError`        | 在非`versionchange`事务中调用时发生。在一些旧版本的 Webkit 浏览器，你必须先调用{{APIRef("IDBVersionChangeRequest.setVersion")}}方法。                                                                       |
| `TransactionInactiveError` | 如果对不存在的源数据库发出请求（例如，已被删除的）。此外，在 Firefox 版本小于 41 中，会抛出误导性的 `InvalidStateError` 错误，这一问题现已修复（请参阅 [Firefox bug 1176165](https://bugzil.la/1176165)）。 |
| `ConstraintError`          | 数据库中已存同名的对象存储（名字区分大小写）                                                                                                                                                                |
| `InvalidAccessError`       | 如果 `autoIncrement` 设置为 true，并且 keyPath 是空字符串或包含空字符串的数组。                                                                                                                             |

## Example

```js
// 打开一个数据库
var request = window.indexedDB.open("toDoList", 4);

// This handler is called when a new version of the database
// is created, either when one has not been created before
// or when a new version number is submitted by calling
// window.indexedDB.open().
// This handler is only supported in recent browsers.
request.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function (event) {
    note.innerHTML += "<li>Error loading database.</li>";
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

  note.innerHTML += "<li>Object store created.</li>";
};
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
