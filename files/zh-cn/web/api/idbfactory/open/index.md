---
title: IDBFactory.open
slug: Web/API/IDBFactory/open
---

{{APIRef("IDBFactory")}}

**`IDBFactory.open`** 方法用于[打开一个数据库连接](/zh-CN/docs/IndexedDB#gloss_database_connection)。本方法立即返回一个 {{domxref("IDBOpenDBRequest")}} 对象，但打开数据库的操作是异步执行的。

连接数据库在一个单独的线程中进行，包括以下几个步骤：

1. 指定数据库已经存在时：

   - 等待 {{domxref("versionchange")}} 操作完成。
   - 如果数据库已计划删除，那等着删除完成。

2. 如果已有数据库版本高于给定的 `version`，中止操作并返回类型为 `VersionError` 的 `DOMError`。
3. 如果已有数据库版本低于给定的 `version`，触发一个 `versionchange` 操作。
4. 如果数据库不存在，创建指定名称的数据库，将版本号设置为给定版本，如果给定版本号，则设置为 1，and no object stores.
5. 创建数据库连接。

如果操作成功执行，将触发 `success` 事件 on the request object that is returned from this method, with its `result` attribute set to the new {{domxref("IDBDatabase")}} object for the connection.

If an error occurs while the database connection is being opened, then an [error event](/zh-CN/docs/IndexedDB/IDBErrorEvent) is fired on the request object returned from this method.

## Syntax

For the current standard:

```
 IDBOpenDBRequest open (DOMString name, [EnforceRange] optional unsigned long long version);
```

For the experimental version with `options` (see below):

```
IDBOpenDBRequest open (DOMString name, optional IDBOpenDBOptions options);
```

## 示例

For the current standard:

```js
var request = window.indexedDB.open("toDoList", 4);
```

For the experimental version with `options` (see below):

```js
var request = window.indexedDB.open("toDoList", {
  version: 4,
  storage: "temporary",
});
```

## 参数

- name
  - : 数据库名称
- version
  - : 指定数据库版本，当你想要更改数据库格式（比如增加对象存储，非增加记录），必须指定更高版本，通过 versionchange 来更改
- options (version and storage) {{ NonStandardBadge() }}
  - : In Gecko, since [version 26](/zh-CN/Firefox/Releases/26), you can include an `options` object as a parameter of {{ domxref("IDBFactory.open") }} that contains the `version` number of the database, plus a storage value that specifies whether you want to use `permanent` (the default value) storage for the IndexedDB, or `temporary` storage (aka shared pool.) See [Firefox bug 785884](https://bugzil.la/785884) for more details. This is a non-standard feature that we are looking to standardise sometime in the future.

> **备注：** Data in temporary storage persists until the global limit for the pool is reached. The global limit calculation is relatively complex, but we are considering changing it (see [Firefox bug 968272](https://bugzil.la/968272)). When the global limit is reached, then data for the least recently used origin is deleted. There's also a group limit (eTLD+1 group/domain) which is currently 20% of the global limit. All requets that would exceed the group limit are just rejected.

## 返回

- {{domxref("IDBOpenDBRequest")}}
  - : The request object on which subsequent events related to this request are fired.

## Exceptions

This method may raise a {{domxref("DOMException")}} with a [DOMError](/zh-CN/docs/DOM/DOMError) of the following types:

| Exception   | 描述                                                               |
| ----------- | ------------------------------------------------------------------ |
| `TypeError` | The value of version is zero or a negative number or not a number. |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
