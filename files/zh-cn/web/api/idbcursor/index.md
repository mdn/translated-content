---
title: IDBCursor
slug: Web/API/IDBCursor
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/zh-CN/docs/IndexedDB) 中的 `IDBCursor` 接口表示一个游标，用于遍历或迭代数据库中的多条记录。

游标有一个源，指示需要遍历哪一个索引或者对象存储区。它在所属区间范围内有一个位置，根据记录健（存储字段）的顺序递增或递减方向移动。游标使应用程序能够异步处理在游标范围内的所有记录。

你可以在同一时间拥有无数个游标。你总会获得表示给定游标的同样的 `IDBCursor` 对象。在基础索引或对象存储上执行操作。

## 方法

- {{domxref("IDBCursor.advance")}}
  - : 设置光标向前移动位置的次数。
- {{domxref("IDBCursor.continue")}}
  - : 将游标按它的方向移动到下一个位置，到其健与可选健参数匹配的项。
- {{domxref("IDBCursor.delete")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并且在一个单独的线程中，删除游标位置记录，而不改变游标的位置。这个可以用作删除一些特定的记录。
- {{domxref("IDBCursor.update")}}
  - : 返回一个 {{domxref("IDBRequest")}} 对象，并且在一个单独的线程中，更新对象存储中当前游标位置的值。这个可以用来更新特定的记录。

## 属性

- {{domxref("IDBCursor.source")}} {{readonlyInline}}
  - : 返回一个游标正在迭代的 {{domxref("IDBObjectStore")}} 或者 {{domxref("IDBIndex")}} 。这个方法永远不会返回一个空或者抛出异常，即使游标当前正在被迭代，已迭代超过其结束，再或者其事务没有处于活动状态。
- {{domxref("IDBCursor.direction")}} {{readonlyInline}}
  - : 返回光标遍历方向。请查看 [常数](#const_next) 中可能的值。
- {{domxref("IDBCursor.key")}} {{readonlyInline}}
  - : 返回记录中游标位置的有效主键。如果游标在区间之外，将会设置成 `undefined`。游标主键可以是任意的数据类型（data type）。
- {{domxref("IDBCursor.primaryKey")}} {{readonlyInline}}
  - : 返回游标当前有效的主键。如果游标当前正在被迭代或者已经在迭代在区间范围外，将会被设置成 `undefined` 。游标主键可以是任意的时间类型（data type）。

## 常量

{{deprecated_header}}

> **警告：** 这些常量不再被支持。你应该使用字符串常量。([Firefox bug 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` :游标展示所有记录，包括重复的记录。它从主键区间下届开始逐步上升（按键的顺序单调递增）。
- `NEXTUNIQUE` : `"nextunique"` : 游标展示所有记录，不包括重复的记录。如果同一个主键存在重复的记录，只有第一条迭代记录被取出。它从主键区间的下界开始逐步上升
- `PREV`: `"prev"` : 游标展示所有记录，包括重复的记录。它从主键区间上界开始逐步往下移动（按主键的顺序单调递减）
- `PREVUNIQUE`: `"prevunique"` :游标展示所有记录，不包括重复的记录。如果主键存在重复记录，只有第一个迭代记录被取出。它从主键区间上界开始逐步往下移动。

## 示例

在这个简单的代码片段中，我们创建了一个事务和检索一个对象存储，之后使用一个游标遍历存储对象中所有的记录。游标不是必须使用主键来选则数据库，我们可以把它全部拿出来。同时需要注意在每次循环遍历中，你可以在当前记录下的游标对象中使用 `cursor.value.foo` 抓取数据。对于完整的工作示例，请查看我们的 [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([在线查看示例](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))。

```js
function displayData() {
  var transaction = db.transaction(["rushAlbumList"], "readonly");
  var objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      var listItem = document.createElement("li");
      listItem.innerHTML = cursor.value.albumTitle + ", " + cursor.value.year;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
