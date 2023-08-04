---
title: IDBCursor.direction
slug: Web/API/IDBCursor/direction
---

{{ APIRef("IDBCursor") }}

{{domxref("IDBCursor")}} 的方向属性是一个 {{domxref("DOMString")}} ，表示游标遍历的方向， (比如可以通过 {{domxref("IDBObjectStore.openCursor")}} 设置). 查看下文中[取值](#取值)章节获取可取值。

## 语法

```js
cursor.direction;
```

### 取值

用一个字符串 (defined by the [`IDBCursorDirection` enum](https://dvcs.w3.org/hg/IndexedDB/raw-file/default/Overview.html#idl-def-IDBCursorDirection)) 表示游标的遍历方向。相关取值如下表所示：

| Value        | Description                                    |
| ------------ | ---------------------------------------------- |
| `next`       | 从数据源开始位置遍历                           |
| `nextunique` | 从数据源开始遍历；当取值有重复时，只获取一次。 |
| `prev`       | 从数据源的最后位置位置开取值                   |
| `prevunique` | 从数据源的最后位置开始取值，只获取一次。       |

## 例子

在这个简单的例子中，我们首先创建一个事物对象，返回一个对象仓库 (store), 然后使用邮编遍历整个数据仓库。在每次迭代中我们记录了游标的方向，例如 prev（倒序遍历）

```html
prev
```

> **备注：** 我们不能改变游标的取值，因为这是个只读属性；应该在{{domxref("IDBObjectStore.openCursor")}}方法调用的第二个参数指定游标遍历的方向；

使用游标遍历数据时，可以不需要我们指定在特定字段选择数据；我们可以直接获取所有数据，同时在每次循环迭代过程当中，我们可以通过 cursor.value.foo 获取数据，如下是一个完整的游标遍历数据的例子； [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([view example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function backwards() {
  list.innerHTML = "";
  var transaction = db.transaction(["rushAlbumList"], "readonly");
  var objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor(null, "prev").onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "<strong>" +
        cursor.value.albumTitle +
        "</strong>, " +
        cursor.value.year;
      list.appendChild(listItem);

      console.log(cursor.direction);
      cursor.continue();
    } else {
      console.log("Entries displayed backwards.");
    }
  };
}
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考资料

- [Using IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
