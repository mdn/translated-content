---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 的 **`IDBObjectStore`** 接口表示数据库中的 一个 [对象库 (object store)](/zh-CN/IndexedDB#gloss_object_store) 。对象库中的记录根据其键值进行排序。这种排序可以实现快速插入，查找和有序检索。

{{AvailableInWorkers}}

注：为了方便理解，可以把“对象存储空间”想象成关系数据库的“表”结构，下文也会把对象存储空间称为表。

## 方法预览

| `IDBRequest add (in any value, in optional any key) raises (DOMException);`                                         |
| ------------------------------------------------------------------------------------------------------------------- |
| `IDBRequest clear() raises (DOMException);`                                                                         |
| `IDBRequest count (in optional any key) raises (DOMException);`                                                     |
| `IDBIndex createIndex (in DOMString name, in DOMString keyPath, in optional boolean unique) raises (DOMException);` |
| `IDBRequest delete (in any key) raises (DOMException);`                                                             |
| `void deleteIndex (in any DOMString indexName) raises (DOMException);                                               |
| `IDBRequest get (in any key) raises (DOMException);`                                                                |
| `IDBIndex index (in DOMString name) raises (DOMException);`                                                         |
| `IDBRequest openCursor (in optional IDBKeyRange range, in optional unsigned short direction) raises(DOMException);` |
| `IDBRequest put (in any value, in optional any key) raises (DOMException);`                                         |

## 属性

| Attribute       | Type                                        | Description                                                                                        |
| --------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `indexNames`    | `readonly DOMStringList`                    | 表中对象的[索引](/zh-CN/IndexedDB#gloss_index)名列表。                                             |
| `keyPath`       | `readonly` [`DOMString`](/En/DOM/DOMString) | 表中的[键路径](/zh-CN/IndexedDB#gloss_key_path)，如果该属性为 null，每次操作表时必须提供一个键名。 |
| `name`          | `readonly` [`DOMString`](/En/DOM/DOMString) | 表名                                                                                               |
| `transaction`   | `readonly IDBTransaction`                   | 事务的名称，该表属于此事务。                                                                       |
| `autoIncrement` | `readonly boolean`                          | 表中自增字段的值                                                                                   |

## 方法

### add()

返回一个 IDBRequest 对象，并且在新线程中克隆一个值，该值存储在表中。

想知道是否成功添加数据，可以在事务的 complete 事件中进行监听，而不是 success，因为事务在 success 事件之后还有可能失败。

add 方法只能插入数据。如果以 key 参数作为某记录的关键字，并且该条记录已存在，则其所返回的请求对象会产生 ConstrainError 错误。

```
IDBRequest add (in any value, in optional any key) raises (DOMException);
```

#### 参数

- value
  - : 被存储的值。
- key
  - : 标识某条记录的键，如果不指定，它会被设为 null。

##### 返回

- [IDBRequest](/zh-CN/IndexedDB/IDBRequest)
  - : 一个请求对象，可以在其中绑定事件。

##### 异常

该方法会抛出 DOMError 类型的 DOMException 异常。

<table class="standard-table" style="font-size: 14px">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ReadOnlyError</td>
      <td>
        The transaction associated with this operation is in read-only
        <a href="/zh-CN/docs/IndexedDB/IDBTransaction#mode_constants">mode</a>.
      </td>
    </tr>
    <tr>
      <td>TransactionInactiveError</td>
      <td>This IDBObjectStore's transaction is inactive.</td>
    </tr>
    <tr>
      <td>DataError</td>
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
      <td>The IDBObjectStore has been deleted or removed.</td>
    </tr>
    <tr>
      <td><code>DataCloneError</code></td>
      <td>
        The data being stored could not be cloned by the internal structured
        cloning algorithm.
      </td>
    </tr>
  </tbody>
</table>

### clear()

创建并立即返回一个 [IDBRequest](/zh-CN/IndexedDB/IDBRequest) 对象，并且在一个单独的线程中清除这个对象存储。清除对象存储包括从对象存储中删除所有的记录，并删除对象存储引用的索引中的所有记录。

```
IDBRequest clear () raises (DOMException);
```

#### Returns

- [IDBRequest](/zh-CN/IndexedDB/IDBRequest)
  - : 返回一个 request 对象，在其上触发与操作相关的事件。

##### Exceptions

此方法可能会引发 domException，其中 domError 的类型如下：

| Exception                | Description                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| ReadOnlyError            | The transaction associated with this operation is in read-only [mode](/zh-CN/docs/IndexedDB/IDBTransaction#mode_constants). |
| TransactionInactiveError | This IDBObjectStore's transaction is inactive.                                                                              |

### count()

立即返回一个 [IDBRequest](/zh-CN/IndexedDB/IDBRequest) 对象，并在新线程中计算符合条件的对象的数量，该方法的参数可以是键，或键范围（key range）。在 [IDBRequest](/zh-CN/IndexedDB/IDBRequest) 对象中，source 属性就是 IDBObjectStore 对象，result 属性持有计算后的数量值。如果参数非法将会抛出异常。

```
IDBRequest count (in optional any key) raises(DOMException);
```

#### 参数

- key
  - : 计算被该键或键范围（key range）所标识的记录数。

##### Returns

- [IDBRequest](/zh-CN/IndexedDB/IDBRequest)
  - : 一个请求对象，可绑定事件。

##### 异常

该方法会引发如下异常：

| Exception                | Description                 |
| ------------------------ | --------------------------- |
| TransactionInactiveError | 事务已闲置                  |
| DataError                | key 参数非法                |
| `InvalidStateError`      | IDBObjectStore 对象已被删除 |

### createIndex()

创建并返回新的 IDBIndex 对象，该方法只能从 versionchange 事务模式的回调方法中被调用。

```
IDBIndex createIndex  (in DOMString name, in DOMString keyPath, in optional boolean unique) raises (DOMException);
```

#### Parameters

- name
  - : The name of the index to create.
- keyPath
  - : The key path for the index to use.
- optionalParameters

  - : The IDBIndexParameters object whose attributes are optional parameters to the method. It includes the following properties:

    | Attribute    | Description                                                                                                                                                                    |
    | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `unique`     | If true, the index will not allow duplicate values for a single key.                                                                                                           |
    | `multiEntry` | If true, the index will add an entry in the index for each array element when the _keypath_ resolves to an Array. If false, it will add one single entry containing the Array. |

##### Returns

- [IDBIndex](/zh-CN/IndexedDB/IDBIndex)
  - : The newly created index.

##### Exceptions

This method may raise a [DOMException](/zh-CN/docs/DOM/DOMException) with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

| Exception           | Description                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `InvalidStateError` | The IDBObjectStore has been deleted or removed or the method was not called from a [`versionchange`](/zh-CN/docs/IndexedDB/IDBTransaction#VERSION_CHANGE) transaction mode callback. |
| `ConstraintError`   | An index with the same name (case-sensitive) already exists in the database.                                                                                                         |

### delete()

Immediately returns an [`IDBRequest`](/zh-CN/IndexedDB/IDBRequest) object, and removes the records specified by the given key or key range from this object store, and any indexes that reference it, in a separate thread.

```
IDBRequest delete (in any key) raises (DOMException);
```

#### Parameters

- key
  - : The key or key range that identifies the records.

##### Returns

- [IDBRequest](/zh-CN/IndexedDB/IDBRequest)
  - : A request object on which subsequent events related to this operation are fired. As [per spec](http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation) the result of the Object Store Deletion Operation algorithm is `undefined`, so it's not possible to know if some records were actually deleted by looking at the request result.

##### Exceptions

This method may raise a [DOMException](/zh-CN/docs/DOM/DOMException) with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

| Exception                | Description                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| TransactionInactiveError | This IDBObjectStore's transaction is inactive.                                                                              |
| ReadOnlyError            | The transaction associated with this operation is in read-only [mode](/zh-CN/docs/IndexedDB/IDBTransaction#mode_constants). |
| `DataError`              | The key or key range provided contains an invalid key.                                                                      |

> **备注：** If the key that identifies the record is a Number, the key passed to the delete method must be a Number too, and not a String. So for example you might need to do the following:
>
> ```js
> var key_val = "42";
> var key = Number(key_val);
> objectstore.delete(key);
> ```

### deleteIndex()

Destroys the index with the specified name in the connected database. Note that this method must be called only from a [`VersionChange`](/zh-CN/IndexedDB/IDBTransaction#VERSION_CHANGE) transaction mode callback. Note that this method synchronously modifies the [indexNames](#attr_indexNames) property.

```
void deleteIndex (in any DOMString indexName) raises (DOMException);
```

#### Parameters

- indexName
  - : The name of the existing index to remove.
- Returns
  - : Void

##### Exceptions

This method may raise a [DOMException](/zh-CN/docs/DOM/DOMException) with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

| Exception           | Description                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | The method was not called from a [`versionchange`](/zh-CN/docs/IndexedDB/IDBTransaction#VERSION_CHANGE) transaction mode callback. |
| `NotFoundError`     | There is no index with the given name (case-sensitive) in the database.                                                            |

### get()

Immediately returns an [IDBRequest](/zh-CN/IndexedDB/IDBRequest) object, and retrieves the requested record from the object store in a separate thread. If the operation is successful, then a success event is fired on the returned object, with its [`result`](/zh-CN/IndexedDB/IDBSuccessEvent#attr_result) set to the retrieved value, and [`transaction`](/zh-CN/IndexedDB/IDBTransactionEvent#attr_transaction) set to the transaction in which this object store is opened.

```
IDBRequest get (in any key) raises (DOMException);
```

> **备注：**This function produces the same result if no record with the given key exists in the database as when a record exists, but with an `undefined` value. To tell these situations apart, call the openCursor() method with the same key. That method provides a cursor if the record exists, and no cursor if it does not.

#### Parameters

- key
  - : The key or key range identifying the record to retrieve. In the case of a key range, the record returned is the first record associated with the first key in the range.

##### Returns

- [`IDBRequest`](/zh-CN/IndexedDB/IDBRequest)
  - : A request object on which subsequent events related to this operation are fired.

##### Exceptions

This method may raise a [DOMException](/zh-CN/docs/DOM/DOMException) with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

| Exception                | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| TransactionInactiveError | This IDBObjectStore's transaction is inactive.          |
| DataError                | The key or key range provided contains and invalid key. |
| `InvalidStateError`      | The IDBObjectStore has been deleted or removed.         |

### index()

Opens the named index in this object store.

```
IDBIndex index (in DOMString name) raises (DOMException);
```

#### Parameters

- name
  - : The name of the index to open.

##### Returns

- [`IDBIndex`](/zh-CN/IndexedDB/IDBIndex)
  - : An object for accessing the index.

##### Exceptions

This method may raise a [DOMException](/zh-CN/docs/DOM/DOMException) with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

| Exception           | Description                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| `InvalidStateError` | The source object store has been deleted, or the transaction for the object store has finished. |
| `NotFoundError`     | There is no index with the given name (case-sensitive) in the database.                         |

### openCursor()

Immediately returns an [IDBRequest](/zh-CN/IndexedDB/IDBRequest) object, and creates a [cursor](/zh-CN/docs/IndexedDB/IDBCursor) over the records in this object store, in a separate thread. If there is even a single record that matches the [key range](/zh-CN/IndexedDB#gloss_key_range), then a success event is fired on the returned object, with its [`result`](/zh-CN/IndexedDB/IDBSuccessEvent#attr_result) set to the [IDBCursor](/zh-CN/IndexedDB/IDBCursor) object for the new cursor. If no records match the key range, then a success event is fired on the returned object, with its [`result`](/zh-CN/IndexedDB/IDBSuccessEvent#attr_result) set to null.

```
IDBRequest openCursor (in optional IDBKeyRange range, in optional unsigned short direction) raises(DOMException);
```

#### Parameters

- range
  - : The key range to use as the cursor's range. If this parameter is unspecified or null, then the range includes all the records in the object store.
- direction
  - : The cursor's [direction](/zh-CN/docs/IndexedDB/IDBCursor).

##### Returns

- [`IDBRequest`](/zh-CN/IndexedDB/IDBRequest)
  - : A request object on which subsequent events related to this operation are fired.

##### Exceptions

This method may raise a [DOMException](/zh-CN/docs/DOM/DOMException) with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

| Exception                | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| TransactionInactiveError | This IDBObjectStore's transaction is inactive.          |
| DataError                | The key or key range provided contains and invalid key. |
| `InvalidStateError`      | The IDBObjectStore has been deleted or removed.         |
| `TypeError`              | The value of the `direction` parameter is invalid.      |

### put()

Returns an [IDBRequest](/zh-CN/IndexedDB/IDBRequest) object, and, in a separate thread, creates a [structured clone](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) of the `value`, and stores the cloned value in the object store. If the record is successfully stored, then a success event is fired on the returned request object with the [`result`](/zh-CN/docs/IndexedDB/IDBRequest) set to the key for the stored record, and [`transaction`](/zh-CN/docs/IndexedDB/IDBRequest) set to the transaction in which this object store is opened.

The put method is an _update or insert_ method. See also the [add()](#add) method.

```
IDBRequest put (in any value, in optional any key) raises (DOMException);
```

#### Parameters

- value
  - : The value to be stored.
- key
  - : The key to use to identify the record. If unspecified, it results to null.

##### Returns

- IDBRequest
  - : A request object on which subsequent events related to this operation are fired.

##### Exceptions

This method may raise a [DOMException](/zh-CN/docs/DOM/DOMException) with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

<table class="standard-table" style="font-size: 14px">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ReadOnlyError</td>
      <td>
        The transaction associated with this operation is in read-only
        <a href="/zh-CN/docs/IndexedDB/IDBTransaction#mode_constants">mode</a>.
      </td>
    </tr>
    <tr>
      <td>TransactionInactiveError</td>
      <td>This IDBObjectStore's transaction is inactive.</td>
    </tr>
    <tr>
      <td>DataError</td>
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
      <td><code style="font-size: 14px">InvalidStateError</code></td>
      <td>The IDBObjectStore has been deleted or removed.</td>
    </tr>
    <tr>
      <td><code style="font-size: 14px">DataCloneError</code></td>
      <td>
        The data being stored could not be cloned by the internal structured
        cloning algorithm.
      </td>
    </tr>
  </tbody>
</table>

## Example

This example shows a variety of different uses of object stores, from updating the data structure with {{domxref("IDBObjectStore.createIndex")}} inside an `onupgradeneeded`function, to adding a new item to our object store with {{domxref("IDBObjectStore.add")}}. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // store the result of opening the database in db.
  db = DBOpenRequest.result;
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above
DBOpenRequest.onupgradeneeded = function (event) {
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

// Create a new item to add in to the object store
var newItem = [
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

// open a read/write db transaction, ready for adding the data
var transaction = db.transaction(["toDoList"], "readwrite");

// report on the success of the transaction completing, when everything is done
transaction.oncomplete = function (event) {
  note.innerHTML += "<li>Transaction completed.</li>";
};

transaction.onerror = function (event) {
  note.innerHTML +=
    "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
};

// create an object store on the transaction
var objectStore = transaction.objectStore("toDoList");
// make a request to add our newItem object to the object store
var objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Request successful .</li>";
};
```

## Specifications

{{Specifications}}

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out <https://github.com/mdn/browser-compat-data>and send us a pull request.

{{Compat}}

## See also

- [Using IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
