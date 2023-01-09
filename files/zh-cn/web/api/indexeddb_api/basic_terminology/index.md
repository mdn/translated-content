---
title: IndexedDB 关键特性和基本术语
slug: Web/API/IndexedDB_API/Basic_Terminology
page-type: guide
tags:
  - Advanced
  - IndexedDB
  - terminology
---

{{DefaultAPISidebar("IndexedDB")}}

本章节主要介绍了 IndexedDB 的关键特性，并且介绍了一些有助于理解 IndexedDB API 的术语。

您还会发现以下文章很有用：

- 有关如何使用该 API 的详细教程，请参阅 [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)。
- 有关 IndexedDB API 的参考文档，请参阅 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 及其子页面，该文档记录了 IndexedDB 使用的对象类型。
- 想了解更多浏览器如何在后台处理和存储您的数据, 请参阅 [IndexedDB 浏览器存储限制和清理标准](/zh-CN/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)。

## 关键特性

IndexedDB 是一种用户浏览器中的持久化存储数据的方式。 由于它允许您创建具有丰富查询功能的 Web 应用程序，而不管网络可用性如何，因此这些应用程序可以在线和离线工作。IndexedDB 对于存储大量数据的应用程序（例如，图书馆中的 DVD 目录）和不需要持久互联网连接即可工作的应用程序（例如，邮件客户端、待办清单和记事本）非常有用。

IndexedDB 允许您存储和检索用“键”索引的对象。对数据库所做的所有更改都发生在事务中。与大多数 Web 存储解决方案一样，IndexedDB 遵循[同源策略](https://www.w3.org/Security/wiki/Same_Origin_Policy)。因此，虽然您可以访问域中存储的数据，但不能跨域访问数据。

如果您对如何使用其他类型的数据库有一些了解, 那就需要注意在使用 IndexedDB 时可能并不适用。请留意以下的 IndexedDB 关键特性：

- **IndexedDB 数据库存储的是键-值对。** 这些值可以是复杂的结构化对象，键可以是这些对象的属性。您可以创建使用对象的任何属性进行快速搜索以及排序枚举的索引。键可以是二进制对象。
- **IndexedDB 构建在事务数据库模型之上。** 您在 IndexedDB 中所做的一切总是在 [事务](#transaction) 的上下文中发生。IndexedDB API 提供了许多表示索引、表、游标等的对象，但每个对象都与特定事务相关联。因此，不能在事务外部执行命令或打开游标。事务具有明确定义的生存期，因此在事务完成后尝试使用事务会引发异常。此外，事务会自动提交，不能手动提交。

  当您考虑如果用户同时在两个不同的选项卡中打开 Web 应用的两个实例时会发生什么情况，此事务模型非常有用。如果没有事务操作，这两个实例可能会干扰彼此的修改。如果您不熟悉数据库中的事务，请阅读[维基百科关于事务的文章](https://en.wikipedia.org/wiki/Database_transaction)。另请参阅定义部分下的[事务](#transaction)。

- **IndexedDB API 主要是异步的。** API 不会通过返回值来提供数据；相反，您必须传递一个回调函数。您不会将值“存储”到数据库中，也不会通过同步方式从数据库中“检索”值。相反，您“请求”发生数据库操作。操作完成时，DOM 事件会通知您，并且您获得的事件类型会让您知道操作是成功还是失败。这听起来有点复杂，但有健全的衡量标准。它与 [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) 的工作方式没有什么不同。
- **IndexedDB使用了很多请求.** 请求是用来接收前面提到的成功或失败 DOM 事件的对象。它们具有 `onsuccess` 和 `onerror` 属性，您可以在它们上调用 `addEventListener()` 和 `removeEventListener()`。它们还具有 `readyState`、`result` 和 `errorCode` 属性，可以告诉您请求的状态。`result` 属性特别神奇，因为它可以是许多不同的东西，具体取决于请求的生成方式（例如，`IDBCursor` 实例，或刚刚插入到数据库中的值的键）。
- **IndexedDB 使用 DOM 事件在结果可用时通知您。** DOM 事件始终具有 `type` 属性（在 IndexedDB 中，它通常设置为 `"success"` 或 `"error"`）。DOM 事件还有一个 `target` 属性，用于指示事件的去向。在大多数情况下，事件的 `target` 是执行某些数据库操作后生成的 `IDBRequest` 对象。成功事件不会冒泡，也无法取消。另一方面，错误事件确实会冒泡，并且可以取消。这十分重要，因为错误事件会中止它们正在运行的任何事务，除非它们被取消。
- **IndexedDB 是面向对象的。** IndexedDB 不是一个用表来表示行和列集合的关系型数据库。这个重要而基本的区别影响着您设计和构建应用程序的方式。

  In a traditional relational data store, you would have a table that stores a collection of rows of data and columns of named types of data. IndexedDB, on the other hand, requires you to create an object store for a type of data and persist JavaScript objects to that store. Each object store can have a collection of indexes that makes it efficient to query and iterate across. If you are not familiar with object-oriented database management systems, read the [Wikipedia article on object database](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB does not use Structured Query Language (SQL).** It uses queries on an index that produces a cursor, which you use to iterate across the result set. If you are not familiar with NoSQL systems, read the [Wikipedia article on NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB adheres to a same-origin policy**. An origin is the domain, application layer protocol, and port of a URL of the document where the script is being executed. Each origin has its own associated set of databases. Every database has a name that identifies it within an origin.

  The security boundary imposed on IndexedDB prevents applications from accessing data with a different origin. For example, while an app or a page in `http://www.example.com/app/` can retrieve data from `http://www.example.com/dir/`, because they have the same origin, it cannot retrieve data from `http://www.example.com:8080/dir/` (different port) or `https://www.example.com/dir/` (different protocol), because they have different origins.

  > **Note:** Third party window content (e.g. {{htmlelement("iframe")}} content) can access the IndexedDB store for the origin it is embedded into, unless the browser is set to [never accept third party cookies](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (see {{bug("1147821")}}.)

### 局限性

IndexedDB is designed to cover most cases that need client-side storage. However, it is not designed for a few cases like the following:

- Internationalized sorting. Not all languages sort strings in the same way, so internationalized sorting is not supported. While the database can't store data in a specific internationalized order, you can sort the data that you've read out of the database yourself. Note, however, that [locale-aware sorting](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) has been allowed with an experimental flag enabled (currently for Firefox only) since Firefox 43.
- Synchronizing. The API is not designed to take care of synchronizing with a server-side database. You have to write code that synchronizes a client-side indexedDB database with a server-side database.
- Full text searching. The API does not have an equivalent of the `LIKE` operator in SQL.

In addition, be aware that browsers can wipe out the database, such as in the following conditions:

- The user requests a wipe out. Many browsers have settings that let users wipe all data stored for a given website, including cookies, bookmarks, stored passwords, and IndexedDB data.
- The browser is in private browsing mode. Some browsers, have "private browsing" (Firefox) or "incognito" (Chrome) modes. At the end of the session, the browser wipes out the database.
- The disk or quota limit has been reached.
- The data is corrupt.
- An incompatible change is made to the feature.

The exact circumstances and browser capabilities change over time, but the general philosophy of the browser vendors is to make the best effort to keep the data when possible.

## 核心术语

This section defines and explains core terminology relevant to understanding the IndexedDB API.

### Database

#### database

A repository of information, typically comprising one or more [_object stores_](#object_store). Each database must have the following:

- Name. This identifies the database within a specific origin and stays constant throughout its lifetime. The name can be any string value (including an empty string).
- Current [_version_](#version). When a database is first created, its version is the integer 1 if not specified otherwise. Each database can have only one version at any given time.

#### database connection

An operation created by opening a _[database](#database)_. A given database can have multiple connections at the same time.

#### durable

In Firefox, IndexedDB used to be **durable**, meaning that in a readwrite transaction a {{domxref("IDBTransaction.complete_event", "complete")}} event was fired only when all data was guaranteed to have been flushed to disk.

As of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase performance (see {{Bug("1112702")}}), which is the same behavior as other IndexedDB-supporting browsers. In this case the {{domxref("IDBTransaction.complete_event", "complete")}} event is fired after the OS has been told to write the data but potentially before that data has actually been flushed to disk. The event may thus be delivered quicker than before, however, there exists a small chance that the entire transaction will be lost if the OS crashes or there is a loss of system power before the data is flushed to disk. Since such catastrophic events are rare, most consumers should not need to concern themselves further.

> **Note:** In Firefox, if you wish to ensure durability for some reason (e.g. you're storing critical data that cannot be recomputed later) you can force a transaction to flush to disk before delivering the `complete` event by creating a transaction using the experimental (non-standard) `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.) This is currently experimental, and can only be used if the `dom.indexedDB.experimental` pref is set to `true` in `about:config`.

#### index

An index is a specialized object store for looking up records in another object store, called the _referenced object store_. The index is a persistent key-value storage where the value part of its records is the key part of a record in the referenced object store. The records in an index are automatically populated whenever records in the referenced object store are inserted, updated, or deleted. Each record in an index can point to only one record in its referenced object store, but several indexes can reference the same object store. When the object store changes, all indexes that refer to the object store are automatically updated.

Alternatively, you can also look up records in an object store using the [key](#key).

To learn more on using indexes, see [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). For the reference documentation on index, see [IDBKeyRange](/en-US/docs/Web/API/IDBKeyRange).

#### object store

The mechanism by which data is stored in the database. The object store persistently holds records, which are key-value pairs. Records within an object store are sorted according to the _[keys](#key)_ in an ascending order.

Every object store must have a name that is unique within its database. The object store can optionally have a _[key generator](#key_generator)_ and a _[key path](#key_path)_. If the object store has a key path, it is using _[in-line keys](#in-line_key)_; otherwise, it is using _[out-of-line keys](#out-of-line_key)_.

For the reference documentation on object store, see {{domxref("IDBObjectStore")}}.

#### request

The operation by which reading and writing on a database is done. Every request represents one read or write operation.

#### 事务

An atomic set of data-access and data-modification operations on a particular database. It is how you interact with the data in a database. In fact, any reading or changing of data in the database must happen in a transaction.

A database connection can have several active transactions associated with it at a time, so long as the writing transactions do not have overlapping [_scopes_](#scope). The scope of transactions, which is defined at creation, determines which object stores the transaction can interact with and remains constant for the lifetime of the transaction. So, for example, if a database connection already has a writing transaction with a scope that just covers the `flyingMonkey` object store, you can start a second transaction with a scope of the `unicornCentaur` and `unicornPegasus` object stores. As for reading transactions, you can have several of them — even overlapping ones.

Transactions are expected to be short-lived, so the browser can terminate a transaction that takes too long, in order to free up storage resources that the long-running transaction has locked. You can abort the transaction, which rolls back the changes made to the database in the transaction. And you don't even have to wait for the transaction to start or be active to abort it.

The three modes of transactions are: `readwrite`, `readonly`, and `versionchange`. The only way to create and delete object stores and indexes is by using a [`versionchange`](/en-US/docs/Web/API/IDBDatabase/versionchange_event) transaction. To learn more about transaction types, see the reference article for [IndexedDB](/en-US/docs/Web/API/IndexedDB_API).

Because everything happens within a transaction, it is a very important concept in IndexedDB. To learn more about transactions, especially on how they relate to versioning, see {{domxref("IDBTransaction")}}, which also has reference documentation.

#### version

When a database is first created, its version is the integer 1. Each database has one version at a time; a database can't exist in multiple versions at once. The only way to change the version is by opening it with a greater version than the current one.

### Key and value

#### in-line key

A key that is stored as part of the stored value. It is found using a _key path_. An in-line key can be generated using a generator. After the key has been generated, it can then be stored in the value using the key path or it can also be used as a key.

#### key

A data value by which stored values are organized and retrieved in the object store. The object store can derive the key from one of three sources: a _[key generator](#key_generator)_, a _[key path](#key_path)_, or an explicitly specified value. The key must be of a data type that has a number that is greater than the one before it. Each record in an object store must have a key that is unique within the same store, so you cannot have multiple records with the same key in a given object store.

A key can be one of the following types: [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), float, a binary blob, and [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). For arrays, the key can range from an empty value to infinity. And you can include an array within an array.

Alternatively, you can also look up records in an object store using the _[index](#index)._

#### key generator

A mechanism for producing new keys in an ordered sequence. If an object store does not have a key generator, then the application must provide keys for records being stored. Generators are not shared between stores. This is more a browser implementation detail, because in web development, you don't really create or access key generators.

#### key path

Defines where the browser should extract the key from in the object store or index. A valid key path can include one of the following: an empty string, a JavaScript identifier, or multiple JavaScript identifiers separated by periods or an array containing any of those. It cannot include spaces.

#### out-of-line key

A key that is stored separately from the value being stored.

#### value

Each record has a value, which could include anything that can be expressed in JavaScript, including [boolean](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), and null.

When an object or array is stored, the properties and values in that object or array can also be anything that is a valid value.

[Blobs](/en-US/docs/Web/API/Blob) and files can be stored, cf. [specification](https://w3c.github.io/IndexedDB/).

### Range and scope

#### cursor

A mechanism for iterating over multiple records with a _key range_. The cursor has a source that indicates which index or object store it is iterating. It has a position within the range, and moves in a direction that is increasing or decreasing in the order of record keys. For the reference documentation on cursors, see {{domxref("IDBCursor")}}.

#### key range

A continuous interval over some data type used for keys. Records can be retrieved from object stores and indexes using keys or a range of keys. You can limit or filter the range using lower and upper bounds. For example, you can iterate over all values of a key between x and y.

For the reference documentation on key range, see {{domxref("IDBKeyRange")}}.

#### scope

The set of object stores and indexes to which a transaction applies. The scopes of read-only transactions can overlap and execute at the same time. On the other hand, the scopes of writing transactions cannot overlap. You can still start several transactions with the same scope at the same time, but they just queue up and execute one after another.

## 下一步

With an understanding of IndexedDB's key characteristics and core terminology under our belts, we can get to more concrete stuff. For a tutorial on how to use the API, see [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## 另请参阅

- [Indexed Database API Specification](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB API 参考](/en-US/docs/Web/API/IndexedDB_API)
- [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — The Store in Your Browser](<https://docs.microsoft.com/previous-versions/msdn10/gg679063(v=msdn.10)>)
