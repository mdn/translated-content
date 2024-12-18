---
title: IndexedDB
slug: Web/API/IndexedDB_API
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB 是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blobs））。该 API 使用索引实现对数据的高性能搜索。虽然 [Web Storage](/zh-CN/docs/Web/API/Web_Storage_API) 在存储较少量的数据很有用，但对于存储更大量的结构化数据来说力不从心。而 IndexedDB 提供了这种场景的解决方案。本页面 MDN IndexedDB 的主要引导页 - 这里，我们提供了完整的 API 参考和使用指南，浏览器支持细节，以及关键概念的一些解释的链接。

{{AvailableInWorkers}}

> [!NOTE]
> IndexedDB API 是强大的，但对于简单的情况可能看起来太复杂。如果你更喜欢一个简单的 API，请尝试 [localForage](https://localforage.github.io/localForage/)、[dexie.js](https://www.dexie.org/)、[PouchDB](https://pouchdb.com/)、[idb](https://www.npmjs.com/package/idb)、[idb-keyval](https://www.npmjs.com/package/idb-keyval)、[JsStore](https://jsstore.net/) 或者 [lovefield](https://github.com/google/lovefield) 之类的库，这些库使 IndexedDB 对开发者来说更加友好。

## 关键概念和用法

IndexedDB 是一个事务型数据库系统，类似于基于 SQL 的 RDBMS。然而，不像 RDBMS 使用固定列表，IndexedDB 是一个基于 JavaScript 的面向对象数据库。IndexedDB 允许你存储和检索用**键**索引的对象；可以存储[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)支持的任何对象。你只需要指定数据库模式，打开与数据库的连接，然后检索和更新一系列**事务**。

- 阅读更多关于 [IndexedDB 背后的概念](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology)。
- 从[使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB) 指南的第一准则中学习异步使用 IndexedDB。
- 同时使用 IndexedDB 储存离线数据和 Service Workers 储存离线资源，其简述请查看 [Service Workers 制作离线 PWA](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)。

> [!NOTE]
> 正如大多数的 web 储存解决方案一样，IndexedDB 也遵守[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。因此当你在某个域名下操作储存数据的时候，你不能操作其他域名下的数据。

### 同步和异步

使用 IndexedDB 执行的操作是异步执行的，以免阻塞应用程序。

### 储存限制和回收标准

有许多 Web 技术在客户端（即本地磁盘）存储各种数据。IndexedDB 是最常见的一个。浏览器计算分配给 Web 数据存储的空间以及达到该限制时要删除的内容的过程并不简单，并且在浏览器之间有所不同。[浏览器存储限制和回收标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)尝试解释这是如何工作的，至少在火狐的情况下是如此。

## 接口

为了获取数据库的访问权限，需要在 [window](/zh-CN/docs/Web/DOM/Window) 对象的 [indexedDB](/zh-CN/docs/Web/API/Window/indexedDB) 属性上调用 [open()](/zh-CN/docs/Web/API/IDBFactory/open) 方法。该方法返回一个 {{domxref("IDBRequest")}} 对象；异步操作通过在 {{domxref("IDBRequest")}} 对象上触发事件来和调用程序进行通信。

### 连接数据库

- {{domxref("IDBEnvironment")}}
  - : 提供 IndexedDB 功能。它由 {{domxref("window")}} 和 {{domxref("worker")}} 实现，这个接口不再是 2.0 规范的一部分。
- {{domxref("IDBFactory")}}
  - : 提供数据库访问。这是全局对象 {{domxref("indexedDB")}} 实现的接口，因此是 API 的入口。
- {{domxref("IDBOpenDBRequest")}}
  - : 表示一个打开数据库的请求。
- {{domxref("IDBDatabase")}}
  - : 表示一个数据库连接。这是在数据库中获取事务的唯一方式。

### 接收和修改数据

- {{domxref("IDBTransaction")}}
  - : 表示一个事务。在数据库上创建一个事务，指定作用域（例如要访问的存储对象），并确定所需的访问类型（只读或读写）。
- {{domxref("IDBRequest")}}
  - : 处理数据库请求并提供对结果访问的通用接口。
- {{domxref("IDBObjectStore")}}
  - : 表示允许访问通过主键查找的 IndexedDB 数据库中的一组数据的对象存储区。
- {{domxref("IDBIndex")}}
  - : 也是为了允许访问 IndexedDB 数据库中的数据子集，但使用索引来检索记录而不是主键。这有时比使用 [IDBObjectStore](/zh-CN/docs/Web/API/IDBObjectStore) 更快。
- {{domxref("IDBCursor")}}
  - : 迭代对象存储和索引。
- {{domxref("IDBCursorWithValue")}}
  - : 迭代对象存储和索引并返回游标的当前值。
- {{domxref("IDBKeyRange")}}
  - : 定义可用于从特定范围内的数据库检索数据的键范围。
- {{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}
  - : 定义一个键范围，可用于从特定范围内的数据库中检索数据，并根据为特定索引指定的语言环境的规则进行排序（详见 [createIndex()](/zh-CN/docs/Web/API/IDBObjectStore/createIndex#Parameters) 的参数）。这个接口不再是 2.0 规范的一部分。

### 自定义事件接口

此规范使用以下自定义接口触发事件：

- {{domxref("IDBVersionChangeEvent")}}
  - : 作为 {{domxref("IDBOpenDBRequest.onupgradeneeded")}} 事件的处理程序的结果，`IDBVersionChangeEvent` 接口表示数据库的版本已经发生了改变。

### 过时的接口

规范的早期版本还定义了这些现在已删除的接口。这些文档便于你需要更新以前编写的代码：

- {{domxref("IDBVersionChangeRequest")}} {{Deprecated_Inline}}
  - : 表示更改数据库版本的请求。改变数据库版本的方法已经改变了（通过调用{{domxref("IDBFactory.open")}} 而非{{domxref("IDBDatabase.setVersion")}}），接口{{domxref("IDBOpenDBRequest")}} 现在拥有{{domxref("IDBVersionChangeRequest")}}。
- {{domxref("IDBDatabaseException")}} {{Deprecated_Inline}}
  - : 表示执行数据库操作时可能遇到的异常情况。

## 示例

- [eLibri:](https://marco-c.github.io/eLibri/) 由 IndexedDB Mozilla DevDerby 的获奖者 Marco Castelluccio 编写的一个功能强大的图书馆和电子书阅读器应用。
- [To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)): 参考文档中示例的应用程序。
- [Storing images and files in IndexedDB](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)

## 规范

{{Specifications}}

## 参见

- [localForage](https://localforage.github.io/localForage/)：一个简单的 Polyfill，提供了简单的客户端数据存储的值语法。它在后台使用 IndexedDB，并在不支持 IndexedDB 的浏览器中回退到 WebSQL 或 localStorage。
- [Dexie.js](https://www.dexie.org/)：IndexedDB 的包装，通过简单的语法，可以更快地进行代码开发。
- [ZangoDB](https://github.com/erikolson186/zangodb)：类似 MongoDB 的 IndexedDB 接口，支持 MongoDB 的大多数熟悉的过滤、投影、排序、更新和聚合功能。
- [JsStore](https://jsstore.net/)：一个带有 SQL 语法的 IndexedDB 包装器。
- [MiniMongo](https://github.com/mWater/minimongo)：由 localstorage 支持的客户端内存中的 mongodb，通过 http 进行服务器同步。MeteorJS 使用 MiniMongo。
- [PouchDB](https://pouchdb.com/)：使用 IndexedDB 在浏览器中实现 CouchDB 的客户端。
- [idb](https://www.npmjs.com/package/idb)：一个微小的（〜1.15k）库，大多 API 与 IndexedDB 类似，但做了一些小的改进，让数据库的可用性得到了大大的提升。
- [idb-keyval](https://www.npmjs.com/package/idb-keyval)：使用 IndexedDB 实现的超级简单且小巧的（\~600B）基于 Promise 的键值对存储。
- [sifrr-storage](https://www.npmjs.com/package/@sifrr/storage)：一个非常小的（\~2kB）基于 Promise 的客户端键值数据库。基于 IndexedDB、localStorage、WebSQL 和 Cookies 实现。它可以自动选择上述支持的数据库，并按照优先顺序使用。
- [lovefield](https://github.com/google/lovefield)：Lovefield 是一个用于 Web App 的关系型数据库，使用 JavaScript 编写，可以在不同的浏览器环境中运行，提供了类似 SQL 的 API，速度快、安全且易用。
