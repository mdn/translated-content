---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 的 **`IDBKeyRange`** 接口表示一些数据类型上的键的连续间隔。可以使用一个键或某个范围的键从{{domxref("IDBObjectStore")}} 和{{domxref("IDBIndex")}} 对象中检索记录。您也可以指定键的上界和下界来限制范围。例如，您可以遍历值范围 a - z 中的键的所有值。

键范围可以是单个值，也可以是具有上界、下界或端点的范围。如果键范围同时有上界或下界，那么它是有界的，否则是无界的。有界键范围可以是开放的（不包含端点）或闭合的（包含了端点）。要检索一定范围内的所有键值，可以使用以下的代码结构：

| Range                       | Code                                                  |
| --------------------------- | ----------------------------------------------------- |
| All keys ≤ **x**            | {{domxref("IDBKeyRange.upperBound")}}`(x)`            |
| All keys < **x**            | {{domxref("IDBKeyRange.upperBound")}}`(x, true)`      |
| All keys ≥ **y**            | {{domxref("IDBKeyRange.lowerBound")}}`(y)`            |
| All keys > **y**            | {{domxref("IDBKeyRange.lowerBound")}}`(y, true)`      |
| All keys ≥ **x** && ≤ **y** | {{domxref("IDBKeyRange.bound")}}`(x, y)`              |
| All keys > **x** &&< **y**  | {{domxref("IDBKeyRange.bound")}}`(x, y, true, true)`  |
| All keys > **x** && ≤ **y** | {{domxref("IDBKeyRange.bound")}}`(x, y, true, false)` |
| All keys ≥ **x** &&< **y**  | {{domxref("IDBKeyRange.bound")}}`(x, y, false, true)` |
| The key = **z**             | {{domxref("IDBKeyRange.only")}}`(z)`                  |

如果以下条件为 true，则键包含在键范围中：

- 键范围的下界值为以下值或符合以下条件之一时：

  - `undefined`
  - 低于正在被鉴定的键值
  - 等于正在被鉴定的键值，且键范围的 `lowerOpen` 属性为 `false`.

- 键范围的上界值为以下值或符合以下条件之一时：

  - `undefined`
  - 高于正在被鉴定的键值
  - 等于正在被鉴定的键值，且键范围的 `upperOpen` 属性为 `false`.

{{AvailableInWorkers}}

## Properties

- {{domxref("IDBKeyRange.lower")}} {{readonlyInline}}
  - : 键范围的下界
- {{domxref("IDBKeyRange.upper")}} {{readonlyInline}}
  - : 键范围的上界
- {{domxref("IDBKeyRange.lowerOpen")}} {{readonlyInline}}
  - : 如果下界值包含在键范围内，则返回 false。
- {{domxref("IDBKeyRange.upperOpen")}} {{readonlyInline}}
  - : 如果上界值包含在键范围内，则返回 false。

## Methods

### Static methods

- {{domxref("IDBKeyRange.bound()")}}
  - : 指定上界和下界来创建一个新的键范围
- {{domxref("IDBKeyRange.only()")}}
  - : 指定单个键值来创建一个新的键范围
- {{domxref("IDBKeyRange.lowerBound()")}}
  - : 指定结果集的下界来创建一个新的键范围
- {{domxref("IDBKeyRange.upperBound()")}}
  - : 指定结果集的上界来创建一个新的键范围

### Instance methods

- {{domxref("IDBKeyRange.includes()")}}
  - : 返回一个布尔值来表示指定的键是否在键范围内。

## Examples

以下示例用以说明该如果使用键范围。在此我们将 `keyRangeValue` 声明为 A ～ F 之间的范围。我们打开一个事务 (使用 {{domxref("IDBTransaction")}}) 和一个对象存储，并用 {{domxref("IDBObjectStore.openCursor")}}打开一个游标，其中`keyRangeValue`是一个可选的键范围值，指定之后游标将只检索键在该范围内的记录。这里的键范围包括了“A”和“F”，因为我们还没声明键范围为开放边界。如果我们使用 `IDBKeyRange.bound("A", "F", true, true);`，那么这个键范围将不包括“A”和“F”，只包含它们之间的值。

> **备注：** For a more complete example allowing you to experiment with key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) repo ([view the example live too](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/)).

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.bound("A", "F");

  var transaction = db.transaction(["fThings"], "readonly");
  var objectStore = transaction.objectStore("fThings");

  objectStore.openCursor(keyRangeValue).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "<strong>" + cursor.value.fThing + "</strong>, " + cursor.value.fRating;
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
