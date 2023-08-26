---
title: IDBKeyRange.lowerBound()
slug: Web/API/IDBKeyRange/lowerBound_static
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBKeyRange")}} 接口的 **`lowerBound()`** 方法创建一个只有下限的新的键范围。默认情况下，它包含较低的端点值。

{{AvailableInWorkers}}

## Syntax

```
var myIDBKeyRange = IDBKeyRange.lowerBound(lower);
var myIDBKeyRange = IDBKeyRange.lowerBound(lower, open);
```

### Parameters

- lower
  - : 指定新键范围的下限。
- open {{optional_inline}}
  - : 指示下限是否排除端点值。默认值为 false。

### Return value

{{domxref("IDBKeyRange")}}: 新创建的键范围。

### Exceptions

此方法可能引发以下类型的 {{domxref("DOMException")}} :

| Exception | Description                                     |
| --------- | ----------------------------------------------- |
| DataError | The value parameter passed was not a valid key. |

## Example

下面的示例演示如何使用下限键范围。在这里，我们声明`keyRangeValue = IDBKeyRange.lowerBound("F", false);`— 一个包含值“F”及其后所有内容的范围。我们打开一个事务（使用 {{domxref("IDBTransaction")}}）和一个对象存储，并使用 {{domxref("IDBObjectStore.openCursor")}}打开一个游标，声明`keyRangeValue` 为其可选的键范围值。这意味着光标将只检索键值为“F”及其后面的所有记录。如果使用`IDBKeyRange.lowerBound("F", true);`，则该范围将不包括端点“F”，仅包括其后面的值。

> **备注：** 要获得一个更完整的示例，使您能够使用键范围进行实验，请查看我们的 [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)（[实时查看该示例](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/)）。

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.lowerBound("F");

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
