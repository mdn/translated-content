---
title: IDBIndex
slug: Web/API/IDBIndex
---

{{APIRef()}}

[IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 中的 IDBIndex 接口提供了异步获取数据库中一个[index](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology#index)的功能。index 是一种用于在另一个 object store 中查找记录的 object store，其被称为被引用的 object store。你可以通过使用该接口来取回数据。

你可以通过记录的键或使用一个 index 取回一个 object store 中的这些记录 (cursors 提供了第三种方式：请见 {{ domxref("IDBCursor") }})。一个 index 可以让你在 object store 的 records 中，通过使用 records 的 properties（属性）来寻找 records。

index 是一个持久的键 - 值存储，其中其记录的值部分是被引用 object store 中的 record 的关键部分。在 object store 中新增、更新或是删除 records 时，索引中的 records 将自动填充。索引中的每条记录只能指向其引用的 object store 中的唯一一条记录，但是多个索引可以引用同一个 object store。当 object store 变更时，所有引用 object store 的索引都会自动更新。

索引中的 records 总是按照 records 的 key 进行排序。然而，不像 object stores，一个给定的 index 可以包含具有相同 key 的多条记录。这些 records 将根据被引用 object store 中的主键进一步排序。

你可以设置在一个范围内的 key，点击这里查看更多： {{domxref("IDBKeyRange")}}.

## Methods

Inherits from: [EventTarget](/zh-CN/docs/Web/API/EventTarget)

- {{domxref("IDBIndex.count")}}
  - : Returns an {{domxref("IDBRequest")}} object, and in a separate thread, returns the number of records within a key range.
- {{domxref("IDBIndex.get")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, finds either the value in the referenced object store that corresponds to the given key or the first corresponding value, if `key` is a key range.
- {{domxref("IDBIndex.getAll")}} {{ Non-Standard_inline() }}
  - : Instantly retrieves all objects inside an {{domxref("IDBObjectStore")}}, setting them as the `result` of the request object.
- {{domxref("IDBIndex.getKey")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, finds either the given key or the primary key, if `key` is a key range.
- {{domxref("IDBIndex.getAllKeys")}} {{ Non-Standard_inline() }}
  - : Instantly retrieves the keys of all objects inside an {{domxref("IDBObjectStore")}}, setting them as the [`result`](/zh-CN/IndexedDB/IDBRequest#attr_result) of the request object.
- {{domxref("IDBIndex.openCursor")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [cursor](/zh-CN/IndexedDB#gloss_cursor) over the specified key range.
- {{domxref("IDBIndex.openKeyCursor")}} {{ Non-Standard_inline() }}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a cursor over the specified key range, as arranged by this index.

## Properties

- {{domxref("IDBIndex.name")}} {{readonlyInline}}
  - : index 的名称。
- {{domxref("IDBIndex.objectStore")}} {{readonlyInline}}
  - : index 所指向的 object store 的名称。
- {{domxref("IDBIndex.keyPath")}} {{readonlyInline}}
  - : 此 index 的关键路径。它如果为 null，则 index 不是自动填充的。
- {{domxref("IDBIndex.multiEntry")}} {{readonlyInline}}
  - : 影响 index 的 key 路径的计算结果生成数组时索引的行为方式。如果为 true，那么对于 key 数组中的每一项，索引中都有一条记录。如果为 false，那么对于数组中的每个 key 都有一条记录。
- {{domxref("IDBIndex.unique")}} {{readonlyInline}}
  - : 如果为 true，这个 index 不会允许 key 有重复值。

## Examples

Opening a transaction then using `get()` to retrieve an object of known key:

```js
// Let us open our database
var request = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
request.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

request.onsuccess = function(event) {
note.innerHTML += '<li>Database initialised.</li>';

// store the result of opening the database in the db variable.
db = request.result;

// Open a transaction on the current database and get a reference to the object store
//that we want to pull information out of
var transaction = db.transaction(["toDoList"]);
var objectStore = transaction.objectStore("toDoList");

// Use get() to get a specific object from the object store, the key of which is "Walk dog"
var request = objectStore.get("Walk dog");
request.onerror = function(event) {
  console.log("There is no record stored for " + request.result.taskTitle);
};
request.onsuccess = function(event) {
  // Do something with the request.result!
  console.log("The deadline time for " + request.result.taskTitle + " is " +
              request.result.hours + ":" + request.result.minutes + ".";
};
```

> [!NOTE]
> need to work out a way to retrieve a series/range of objects using an index, or just all of them. Is this possible with get, or is this a job for cursor?

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

To learn more about various topics, see the following

- Starting transactions: {{domxref("IDBDatabase")}}
- Setting transaction modes: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- The reference application for the examples in this reference: [To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) ([view example live](http://chrisdavidmills.github.io/to-do-notifications/).) Not every snippet appears in this example, but every example uses the same data structure and syntax, and they will make sense in the context of this example.
