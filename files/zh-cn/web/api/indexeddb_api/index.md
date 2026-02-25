---
title: IndexedDB
slug: Web/API/IndexedDB_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("IndexedDB")}} {{AvailableInWorkers}}

IndexedDB 是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blob））。该 API 使用索引实现对数据的高性能搜索。虽然 [Web 存储](/zh-CN/docs/Web/API/Web_Storage_API)在存储较少量的数据很有用，但对于存储更大量的结构化数据来说力不从心。而 IndexedDB 提供了这种场景的解决方案。本页面 MDN IndexedDB 的主要引导页——这里，我们提供了完整的 API 参考和使用指南、浏览器支持细节，以及关键概念的一些解释的链接。

## 关键概念和用法

IndexedDB 是一个事务型数据库系统，类似于基于 SQL 的关系型数据库管理系统（RDBMS）。然而，不像 RDBMS 使用固定列表，IndexedDB 是一个基于 JavaScript 的面向对象数据库。IndexedDB 允许你存储和检索用**键**索引的对象；可以存储[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)支持的任何对象。你只需要指定数据库模式，打开与数据库的连接，然后检索和更新一系列**事务**。

- 阅读更多关于 [IndexedDB 的主要特性和基本术语](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology)。
- 从[使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB) 指南的第一准则中学习异步使用 IndexedDB。
- 请参阅[检查截止日期](/zh-CN/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due)指南中的完整分步示例。

> [!NOTE]
> 正如大多数的 web 储存解决方案一样，IndexedDB 也遵守[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)。因此当你在某个域名下操作储存数据的时候，你不能操作其他域名下的数据。

### 同步和异步

使用 IndexedDB 执行的操作是异步执行的，以免阻塞应用程序。

### 储存限制和回收标准

有许多 Web 技术在客户端（即本地磁盘）存储各种数据。IndexedDB 是最常见的一个。浏览器计算分配给 Web 数据存储的空间以及达到该限制时要删除的内容的过程并不简单，并且在浏览器之间有所不同。[浏览器存储限制和回收标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)尝试解释这是如何工作的，至少在火狐的情况下是如此。

## 接口

为了获取数据库的访问权限，需要在 [window](/zh-CN/docs/Web/API/Window) 对象的 [`indexedDB`](/zh-CN/docs/Web/API/Window/indexedDB) 属性上调用 [`open()`](/zh-CN/docs/Web/API/IDBFactory/open) 方法。该方法返回一个 {{domxref("IDBRequest")}} 对象；异步操作通过在 {{domxref("IDBRequest")}} 对象上触发事件来和调用程序进行通信。

### 连接数据库

- {{domxref("IDBFactory")}}
  - : 提供数据库访问。此类型的对下是全局属性 {{domxref("Window.indexedDB")}} 和 {{domxref("WorkerGlobalScope.indexedDB")}} 的值。因此，它是 API 的入口点。
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
  - : 也是为了允许访问 IndexedDB 数据库中的数据子集，但使用索引来检索记录而不是主键。这有时比使用 {{domxref("IDBObjectStore")}} 更快。
- {{domxref("IDBCursor")}}
  - : 迭代对象存储和索引。
- {{domxref("IDBCursorWithValue")}}
  - : 迭代对象存储和索引并返回游标的当前值。
- {{domxref("IDBKeyRange")}}
  - : 定义可用于从特定范围内的数据库检索数据的键范围。

### 自定义事件接口

此规范使用以下自定义接口触发事件：

- {{domxref("IDBVersionChangeEvent")}}
  - : 作为 {{domxref("IDBOpenDBRequest.onupgradeneeded")}} 事件的处理器函数的结果，`IDBVersionChangeEvent` 接口表示数据库的版本已经发生了改变。

## 示例

- [待办通知](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[查看实时示例](https://mdn.github.io/dom-examples/to-do-notifications/)）：参考文档中示例的参考应用程序。

## 规范

{{Specifications}}

## 参见

- [Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API)
- [Window：localStorage 属性](/zh-CN/docs/Web/API/Window/localStorage)
- [Window：sessionStorage 属性](/zh-CN/docs/Web/API/Window/sessionStorage)
- [StorageEvent](/zh-CN/docs/Web/API/StorageEvent)
