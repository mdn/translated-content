---
title: IDBObjectStore.put()
slug: Web/API/IDBObjectStore/put
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} 接口的 **`put()`** 方法更新一条给定的数据库记录，如果给出的值不存在，则插入一个新的记录

它返回一个 {{domxref("IDBRequest")}} 对象，并且在一个单独的线程 ,创建一个值的 [structured clone](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) ,并且把它的值储存在对象仓库 (object store) 中。当事务的模式是`readwrite 时，`这个方法用来添加新的记录，或者更新一条对象仓库 (object store) 中已存在的记录 . 如果记录被成功储存，then a success event is fired on the returned request object with the `result` set to the key for the stored record, and the `transaction` set to the transaction in which this object store is opened.

put 方法是一个插入或更新对象仓库的方法。参考仅用于插入的方法 {{domxref("IDBObjectStore.add")}} 方法。

谨记，如果你有一条 {{domxref("cursor","IDBCursor")}} 记录想要更新，使用{{domxref("IDBCursor.update()")}} 方法更新，比 {{domxref("IDBObjectStore.put()")}} 方法更合适。这样做可以清楚地表明将更新现有记录，而不是插入新记录。

{{AvailableInWorkers}}

## 语法

```
var request = objectStore.put(item);
var request = objectStore.put(item, key);
```

### 参数

- item
  - : 你想要更新 (或插入) 的记录。
- key {{optional_inline}}
  - : 你想要更新记录的主键 (e.g. from {{domxref("IDBCursor.primaryKey")}}). This is only needed for object stores that have an `autoIncrement` primary key, therefore the key is not in a field on the record object. In such cases, calling `put(item)` will always insert a new record, because it doesn't know what existing record you might want to modify.

### 返回值

一个 {{domxref("IDBRequest")}} 对象 ,在该对象上触发与此操作相关的后续事件。

### 异常

This method may raise a {{domxref("DOMException")}} of one of the following types:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ReadOnlyError</code></td>
      <td>
        The transaction associated with this operation is in read-only
        <a href="/zh-CN/docs/IndexedDB/IDBTransaction#mode_constants">mode</a>.
      </td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>
        This {{domxref("IDBObjectStore")}}'s transaction is inactive.
      </td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>Any of the following conditions apply:</p>
        <ul>
          <li>
            The object store uses in-line keys or has a key generator, and a key
            parameter was provided.
          </li>
          <li>
            The object store uses out-of-line keys and has no key generator, and
            no key parameter was provided.
          </li>
          <li>
            The object store uses in-line keys but no key generator, and the
            object store's key path does not yield a valid key.
          </li>
          <li>
            The key parameter was provided but does not contain a valid key.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        The {{domxref("IDBObjectStore")}} has been deleted or
        removed.
      </td>
    </tr>
    <tr>
      <td><code>DataCloneError</code></td>
      <td>
        The data being stored could not be cloned by the internal structured
        cloning algorithm.<br />
      </td>
    </tr>
  </tbody>
</table>

## 参数

- value
  - : 被储存的值。
- key
  - : 识别记录的键。如果没有声明，那么记录键值将为空。如果对象仓库有一个键生成器 (e.g. autoincrement) ,必须传入 key 来更新对象。

## Example

The following example requests a given record title; when that request is successful the `onsuccess` function gets the associated record from the {{domxref("IDBObjectStore")}} (made available as `objectStoreTitleRequest.result`), updates one property of the record, and then puts the updated record back into the object store in another request with `put()`. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
var title = "Walk dog";

// Open up a transaction as usual
var objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list object that has this title as it's title
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function () {
  // Grab the data object returned as the result
  var data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item back into the database
  var updateTitleRequest = objectStore.put(data);

  // Log the transaction that originated this request
  console.log(
    "The transaction that originated this request is " +
      updateTitleRequest.transaction,
  );

  // When this new request succeeds, run the displayData() function again to update the display
  updateTitleRequest.onsuccess = function () {
    displayData();
  };
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
