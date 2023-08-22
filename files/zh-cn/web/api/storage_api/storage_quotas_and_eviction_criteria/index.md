---
title: IndexedDB 浏览器存储限制和清理标准
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
---

{{DefaultAPISidebar("IndexedDB")}}

有许多 Web 技术可以在客户端（即本地磁盘上）存储这种或那种数据。浏览器计算分配给 Web 数据存储的空间大小以及达到该限制时要删除的内容的过程并不简单，并且浏览器之间有所不同。本文介绍了浏览器如何确定要清除的本地内容以及何时释放所需的本地存储空间。

> **备注：** 对于大多数现代浏览器，以下信息应该相当准确，但在已知的情况下会调出特定于浏览器的信息。Opera 和 Chrome 在所有情况下都应该表现相同。[Opera Mini](http://www.opera.com/mobile/mini)（仍然是基于 presto 的，服务器端呈现）不会在客户端上存储任何数据。

## 什么技术使用浏览器数据存储？

在 Firefox 中，以下技术利用浏览器数据存储在需要时存储数据。在这种情况下，我们将它们称为“配额客户”：

- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)
- [asm.js](http://asmjs.org/)缓存
- [缓存 API](/zh-CN/docs/Web/API/Cache)
- Cookies

> **备注：** 在 Firefox 中，[Web Storage](/zh-CN/docs/Web/API/Web_Storage_API)也将很快开始使用相同的存储管理工具，如本文档中所述。

> **备注：** 在隐私浏览模式下，大多数数据存储不被支持。本地存储数据和 cookie 仍然可用，但它们是短暂的 ——当关闭最后一个隐私浏览窗口时，数据将被删除。

源的“最后访问时间”会更新，当其中任何一个被激活/停用时——所有这些源下的配额客户端的数据会被回收。

在 Chrome/Opera 中，Quota Management API 处理[AppCache](/zh-CN/docs/Web/HTML/Using_the_application_cache)，[IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)，WebSQL 和[File System API](/zh-CN/docs/WebGuide/API/File_System)的配额管理。

## 数据存储的不同类型

即使在相同的浏览器、使用相同的存储方法，仍然存在不同的数据存储方法需要我们搞清楚。这部分我们讨论那些在不同浏览器之间的不同之处。

一般来说，数据存储的的类型主要有以下两种：

- 持久化存储：这种数据是希望长久保留的，只有的当用户选择清除才会被删除掉（比如，在 Firefox 中，您可以通过转到*“首选项”*并使用“ *隐私和安全”>“Cookie 和站点数据”*下的选项，选择删除所有存储的数据或仅删除所选来源的存储数据）。
- 临时存储：这种数据不用保存很久，当最近一次使用时[储存限制](#储存限制)达到限制大小就会被自动清理掉（[LRU 策略](#lru策略)）。

在 Firefox 中，当使用持久存储时，会向用户提供一个 UI 弹出窗口，提醒他们这些数据将持续存在，并询问他们是否对此感到满意。临时数据存储不会引发任何用户提示。

默认的是临时存储；开发人员可以选择使用{{domxref("StorageManager.persist()")}}方法使用持久储存。

## 数据存储在哪里？

每种存储类型代表一个单独的存储库。这是用户 Firefox 配置文件下目录的实际映射（其他浏览器可能略有不同）：

- `<profile>/storage` — 配额管理器维护的主要顶级目录（见下文）
- `<profile>/storage/permanent` — 持久数据存储库
- `<profile>/storage/temporary` —临时数据存储库
- `<profile>/storage/default` — 默认数据存储库

> **备注：** 引入[Storage API](/zh-CN/docs/Web/API/Web_Storage_API)后，“permanent”文件夹可以被认为是过时的；“permanent”文件夹仅存储 IndexedDB 持久性数据库。模式是“best-effort”还是“persistent”并不重要——数据存储在\<profile>/storage/default 下。

> **备注：** 在 Firefox 中，可以通过`about:support`在 URL 栏中输入，然后按“ *配置文件夹”*标题旁边的*“在...中显示...”*按钮（例如，在 Mac OS X 上的*“在 Finder 中显示”）来查找*您的*配置文件文件夹*。

> **备注：** 如果您在存储的数据中查看配置文件，您可能会看到第四个文件夹：`persistent`。基本上，该`persistent`文件夹刚刚重命名为`permanent`以保持升级/迁移更简单。

**注意**：用户不应在其下添加自己的目录或文件到`<profile>/storage`下。这将导致存储初始化失败；例如，{{domxref("IDBFactory.open()","open()")}}会触发错误事件。

### 数据储存限制

浏览器的最大存储空间是动态的——它取决于您的硬盘大小。**全局限制**为可用磁盘空间的 50％。在 Firefox 中，一个名为 Quota Manager 的内部浏览器工具会跟踪每个源用尽的磁盘空间，并在必要时删除数据。

因此，如果您的硬盘驱动器是 500GB，那么浏览器的总存储容量为 250GB。如果超过此范围，则会发起称为**源回收**的过程，删除整个源的数据，直到存储量再次低于限制。删除源数据没有只删一部分的说法——因为这样可能会导致不一致的问题。

还有另一个限制称为**组限制**——这被定义为全局限制的 20％，但它至少有 10 MB，最大为 2GB。每个源都是一组（源组）的一部分。每个 eTLD+1 域都有一个组。例如：

- `mozilla.org`——组 1，源 1
- `www.mozilla.org`——组 1，源 2
- `joe.blogs.mozilla.org`——组 1，源 3
- `firefox.com` ——组 2，源 4

在这个组中，`mozilla.org`、`www.mozilla.org`和`joe.blogs.mozilla.org`可以聚合使用最多 20％的全局限制。firefox.com 单独最多使用 20％。

达到限制后有两种不同的反应：

- 组限制也称为“硬限制”：它不会触发源回收。
- 全局限制是一个“软限制”，因为其有可能释放一些空间并且这个操作可能持续。

> **备注：** 尽管上面提到了最小组限制，但组限制不能超过全局限制。如果您的内存非常低，全局限制为 8 MB，则组限制也将为 8 MB。

> **备注：** 如果超出组限制，或者如果原因驱逐无法释放足够的空间，浏览器将抛出`QuotaExceededError`错误。

> **备注：** 在 Chrome 中，自 M66 以来，软硬存储配额限制已发生变化。更多信息可以在[这里](https://chromium.googlesource.com/chromium/src/+/refs/heads/master/storage/browser/quota/quota_settings.cc#68)找到。

## LRU 策略

当可用磁盘空间已满时，配额管理器将根据 LRU 策略开始清除数据——最近最少使用的源将首先被删除，然后是下一个，直到浏览器不再超过限制。

我们使用临时存储跟踪每个源的“上次访问时间”。一旦达到临时存储的全局限制（之后会有更多限制），我们将尝试查找所有当前未使用的源（即没有打开选项卡/应用程序的那些来保持打开的数据存储）。然后根据“上次访问时间”对它们进行排序。然后删除最近最少使用的源，直到有足够的空间来满足触发此源回收的请求。

## 参见

- [在移动浏览器上使用配额](http://www.html5rocks.com/en/tutorials/offline/quota-research/)（[Eiji Kitamura](http://blog.agektmr.com)著）：详细分析了移动浏览器上的客户端存储。
- [配额管理 API：快速实践](https://developers.google.com/web/updates/2011/11/Quota-Management-API-Fast-Facts) （[Eiji Kitamura](http://blog.agektmr.com)著）：查看 Chrome / Blink 中的配额管理 API（也应包括 Opera）。
