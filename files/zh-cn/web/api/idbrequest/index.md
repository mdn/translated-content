---
title: IDBRequest
slug: Web/API/IDBRequest
---

{{APIRef("IndexedDB")}}

IndexedDB api 中的 IDBRequest 接口提供了根据绑定事件处理函数访问结果集的方法。其中结果集来自对数据库和数据库对象发起的异步查询。对数据库的读写操作都是通过 request 的方式来实现。

该 request 对象初始时不包括任何关于操作结果的信息，当 request 上的事件触发时，可以通过 IDBRequest 实例上的事件处理函数访问相关信息。

继承自：[EventTarget](/zh-CN/docs/Web/API/EventTarget)

## About this document

This document was last updated on August 17, 2012 and follows the [W3C Specifications (Editor's Draft)](https://dvcs.w3.org/hg/IndexedDB/raw-file/tip/Overview.html#request-api) drafted on July 24, 2012. It has not yet been verified.

## 基础概念

所有异步操作立即返回一个 IDBRequest 实例。每一个请求都有一个 readyState 属性，初始时为 pending，当请求完成或失败的时候，readyState 会变为 done。当状态值变为 done 时，每一个请求都会返回 result 和 error 属性，并且会触发一个事件。当状态保持为 pending 时，任何尝试访问 result 或 error 属性的行为会触发一个 InvalidStateError 异常。

用直白的话来说就是：所有的异步方法返回一个 request 对象。如果 request 对象成功执行了，结果可以通过 result 属性访问到，并且该 request 对象上会触发 success 事件。如果操作中有错误发生，一个 error 事件会触发，并且会通过 result 属性抛出一个异常。

示例

下面的代码片段中，我们异步打开一个数据库并且发起一个请求。注册了几个事件处理函数来展示不同的情况。

```js
var request = window.indexedDB.open('数据库名称');
request.onsuccess = function(event) {
        var db = this.result;
        var transaction = db.transaction([]);
// "readonly" is the default option;
// when data will be added to the database use "readwrite".
        var curRequest = transaction.objectStore('ObjectStore Name').openCursor();
        curRequest.onsuccess = ...;
    };
request.onerror = function(event) {
         ...;
    };
request.onupgradeneeded= function(event) {
         // changing objectStore data is done here, as opposed to a transaction enum:
         ...;
    };
```

## Attributes

<table>
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td>
        <code><a name="attr_result">result</a></code>
      </td>
      <td><code>readonly any</code></td>
      <td>
        <p>Returns the result of the request.</p>
        <p>
          If the the request failed and the result is not available, the
          InvalidStateError exception is thrown.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a name="attr_errorCode">error</a></code>
      </td>
      <td>
        <code>readonly <a href="/zh-CN/docs/DOM/DOMError">DOMError</a></code>
      </td>
      <td>
        <p>The following error codes are returned under certain conditions:</p>
        <ul>
          <li>
            <code>AbortError</code> — If you abort the transaction, then all
            requests still in progress receive this error.
          </li>
          <li>
            <code>ConstraintError</code> — If you insert data that doesn't
            conform to a constraint. It's an exception type for creating stores
            and indexes. You get this error, for example, if you try to add a
            new key that already exists in the record.
          </li>
          <li>
            <code>QuotaExceededError</code> — If you run out of disk quota and
            the user declined to grant you more space.
          </li>
          <li>
            <code>UnknownError</code> — If the operation failed for reasons
            unrelated to the database itself. A failure due to disk IO errors is
            such an example.
          </li>
          <li><code>NoError</code> — If the request succeeds.</li>
          <li>
            <code>VersionError</code> — If you try to open a database with a
            version lower than the one it already has.
          </li>
        </ul>
        <p>
          In addition to the error codes sent to the IDBRequest object,
          asynchronous operations can also raise exceptions. The list describes
          problems that could occur when the request is being executed, but you
          might also encounter other problems when the request is being made.
          For example, if the the request failed and the result is not
          available, the InvalidStateError exception is thrown.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a name="attr_source">source</a></code>
      </td>
      <td><code>readonly Object</code></td>
      <td>
        <p>
          The source of the request, such as an Index or a ObjectStore. If no
          source exists (such as when calling <code>indexedDB.open()</code>), it
          returns null.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a name="attr_transaction">transaction</a></code>
      </td>
      <td>
        <code
          >readonly
          <a href="/en/IndexedDB/IDBTransaction">IDBTransaction</a></code
        >
      </td>
      <td>
        The transaction for the request. This property can be null for certain
        requests, such as for request returned from
        <code><a href="/en/IndexedDB/IDBFactory#open">IDBFactory.open</a></code>
        (You're just connecting to a database, so there is no transaction to
        return).
      </td>
    </tr>
    <tr>
      <td>
        <code><a name="attr_readyState">readyState</a></code>
      </td>
      <td><code>readonly enum</code></td>
      <td>
        <p>
          The state of the request. Every request starts in the
          <code>pending</code> state. The state changes to
          <code>done</code> when the request completes successfully or when an
          error occurs.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a name="attr_onerror">onerror</a></code>
      </td>
      <td><code>Function</code></td>
      <td>The event handler for the error event.</td>
    </tr>
    <tr>
      <td>
        <code><a name="attr_onsuccess">onsuccess</a></code>
      </td>
      <td><code>Function</code></td>
      <td>The event handler for the success event.</td>
    </tr>
  </thead>
  <tbody></tbody>
</table>

## Constants

### `readyState` constants

> [!WARNING]
> These constants are no longer available. You should use directly the string constants instead. ([Firefox bug 887524](https://bugzil.la/887524))

| Constant      | Value     | Description                                                         |
| ------------- | --------- | ------------------------------------------------------------------- |
| [`DONE`]()    | "done"    | The request has completed or an error has occurred. Initially false |
| [`LOADING`]() | "pending" | The request has been started, but its result is not yet available.  |

## Event handlers

| Event handler | Event handler type |
| ------------- | ------------------ |
| `onerror`     | `error`            |
| `onsuccess`   | `success`          |

## Derived interface

- [`IDBOpenDBRequest`](/zh-CN/IndexedDB/IDBOpenDBRequest)

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}
