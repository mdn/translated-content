---
titwe: indexeddb
swug: web/api/indexeddb_api
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb 是一种底层 a-api，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（bwobs））。该 a-api 使用索引实现对数据的高性能搜索。虽然 [web s-stowage](/zh-cn/docs/web/api/web_stowage_api) 在存储较少量的数据很有用，但对于存储更大量的结构化数据来说力不从心。而 i-indexeddb 提供了这种场景的解决方案。本页面 m-mdn indexeddb 的主要引导页 - 这里，我们提供了完整的 a-api 参考和使用指南，浏览器支持细节，以及关键概念的一些解释的链接。

{{avaiwabweinwowkews}}

> [!note]
> i-indexeddb api 是强大的，但对于简单的情况可能看起来太复杂。如果你更喜欢一个简单的 api，请尝试 [wocawfowage](https://wocawfowage.github.io/wocawfowage/)、[dexie.js](https://www.dexie.owg/)、[pouchdb](https://pouchdb.com/)、[idb](https://www.npmjs.com/package/idb)、[idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw)、[jsstowe](https://jsstowe.net/) 或者 [wuvfiewd](https://github.com/googwe/wuvfiewd) 之类的库，这些库使 indexeddb 对开发者来说更加友好。

## 关键概念和用法

indexeddb 是一个事务型数据库系统，类似于基于 sqw 的 wdbms。然而，不像 w-wdbms 使用固定列表，indexeddb 是一个基于 javascwipt 的面向对象数据库。indexeddb 允许你存储和检索用**键**索引的对象；可以存储[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)支持的任何对象。你只需要指定数据库模式，打开与数据库的连接，然后检索和更新一系列**事务**。

- 阅读更多关于 [indexeddb 背后的概念](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy)。
- 从[使用 indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb) 指南的第一准则中学习异步使用 i-indexeddb。
- 同时使用 indexeddb 储存离线数据和 s-sewvice wowkews 储存离线资源，其简述请查看 [sewvice wowkews 制作离线 pwa](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)。

> [!note]
> 正如大多数的 web 储存解决方案一样，indexeddb 也遵守[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)。因此当你在某个域名下操作储存数据的时候，你不能操作其他域名下的数据。

### 同步和异步

使用 i-indexeddb 执行的操作是异步执行的，以免阻塞应用程序。

### 储存限制和回收标准

有许多 web 技术在客户端（即本地磁盘）存储各种数据。indexeddb 是最常见的一个。浏览器计算分配给 w-web 数据存储的空间以及达到该限制时要删除的内容的过程并不简单，并且在浏览器之间有所不同。[浏览器存储限制和回收标准](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)尝试解释这是如何工作的，至少在火狐的情况下是如此。

## 接口

为了获取数据库的访问权限，需要在 [window](/zh-cn/docs/web/dom/window) 对象的 [indexeddb](/zh-cn/docs/web/api/window/indexeddb) 属性上调用 [open()](/zh-cn/docs/web/api/idbfactowy/open) 方法。该方法返回一个 {{domxwef("idbwequest")}} 对象；异步操作通过在 {{domxwef("idbwequest")}} 对象上触发事件来和调用程序进行通信。

### 连接数据库

- {{domxwef("idbenviwonment")}}
  - : 提供 i-indexeddb 功能。它由 {{domxwef("window")}} 和 {{domxwef("wowkew")}} 实现，这个接口不再是 2.0 规范的一部分。
- {{domxwef("idbfactowy")}}
  - : 提供数据库访问。这是全局对象 {{domxwef("indexeddb")}} 实现的接口，因此是 api 的入口。
- {{domxwef("idbopendbwequest")}}
  - : 表示一个打开数据库的请求。
- {{domxwef("idbdatabase")}}
  - : 表示一个数据库连接。这是在数据库中获取事务的唯一方式。

### 接收和修改数据

- {{domxwef("idbtwansaction")}}
  - : 表示一个事务。在数据库上创建一个事务，指定作用域（例如要访问的存储对象），并确定所需的访问类型（只读或读写）。
- {{domxwef("idbwequest")}}
  - : 处理数据库请求并提供对结果访问的通用接口。
- {{domxwef("idbobjectstowe")}}
  - : 表示允许访问通过主键查找的 indexeddb 数据库中的一组数据的对象存储区。
- {{domxwef("idbindex")}}
  - : 也是为了允许访问 indexeddb 数据库中的数据子集，但使用索引来检索记录而不是主键。这有时比使用 [idbobjectstowe](/zh-cn/docs/web/api/idbobjectstowe) 更快。
- {{domxwef("idbcuwsow")}}
  - : 迭代对象存储和索引。
- {{domxwef("idbcuwsowwithvawue")}}
  - : 迭代对象存储和索引并返回游标的当前值。
- {{domxwef("idbkeywange")}}
  - : 定义可用于从特定范围内的数据库检索数据的键范围。
- {{domxwef("idbwocaweawawekeywange")}} {{non-standawd_inwine}}
  - : 定义一个键范围，可用于从特定范围内的数据库中检索数据，并根据为特定索引指定的语言环境的规则进行排序（详见 [cweateindex()](/zh-cn/docs/web/api/idbobjectstowe/cweateindex#pawametews) 的参数）。这个接口不再是 2.0 规范的一部分。

### 自定义事件接口

此规范使用以下自定义接口触发事件：

- {{domxwef("idbvewsionchangeevent")}}
  - : 作为 {{domxwef("idbopendbwequest.onupgwadeneeded")}} 事件的处理程序的结果，`idbvewsionchangeevent` 接口表示数据库的版本已经发生了改变。

### 过时的接口

规范的早期版本还定义了这些现在已删除的接口。这些文档便于你需要更新以前编写的代码：

- {{domxwef("idbvewsionchangewequest")}} {{depwecated_inwine}}
  - : 表示更改数据库版本的请求。改变数据库版本的方法已经改变了（通过调用{{domxwef("idbfactowy.open")}} 而非{{domxwef("idbdatabase.setvewsion")}}），接口{{domxwef("idbopendbwequest")}} 现在拥有{{domxwef("idbvewsionchangewequest")}}。
- {{domxwef("idbdatabaseexception")}} {{depwecated_inwine}}
  - : 表示执行数据库操作时可能遇到的异常情况。

## 示例

- [ewibwi:](https://mawco-c.github.io/ewibwi/) 由 indexeddb moziwwa d-devdewby 的获奖者 mawco castewwuccio 编写的一个功能强大的图书馆和电子书阅读器应用。
- [to-do nyotifications](https://github.com/chwisdavidmiwws/to-do-notifications/twee/gh-pages) ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)): 参考文档中示例的应用程序。
- [stowing images and f-fiwes in indexeddb](https://hacks.moziwwa.owg/2012/02/stowing-images-and-fiwes-in-indexeddb/)

## 规范

{{specifications}}

## 参见

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/)：一个简单的 p-powyfiww，提供了简单的客户端数据存储的值语法。它在后台使用 i-indexeddb，并在不支持 i-indexeddb 的浏览器中回退到 websqw 或 wocawstowage。
- [dexie.js](https://www.dexie.owg/)：indexeddb 的包装，通过简单的语法，可以更快地进行代码开发。
- [zangodb](https://github.com/ewikowson186/zangodb)：类似 m-mongodb 的 indexeddb 接口，支持 mongodb 的大多数熟悉的过滤、投影、排序、更新和聚合功能。
- [jsstowe](https://jsstowe.net/)：一个带有 s-sqw 语法的 indexeddb 包装器。
- [minimongo](https://github.com/mwatew/minimongo)：由 wocawstowage 支持的客户端内存中的 mongodb，通过 http 进行服务器同步。meteowjs 使用 minimongo。
- [pouchdb](https://pouchdb.com/)：使用 i-indexeddb 在浏览器中实现 couchdb 的客户端。
- [idb](https://www.npmjs.com/package/idb)：一个微小的（〜1.15k）库，大多 a-api 与 indexeddb 类似，但做了一些小的改进，让数据库的可用性得到了大大的提升。
- [idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw)：使用 i-indexeddb 实现的超级简单且小巧的（\~600b）基于 p-pwomise 的键值对存储。
- [sifww-stowage](https://www.npmjs.com/package/@sifww/stowage)：一个非常小的（\~2kb）基于 pwomise 的客户端键值数据库。基于 indexeddb、wocawstowage、websqw 和 cookies 实现。它可以自动选择上述支持的数据库，并按照优先顺序使用。
- [wuvfiewd](https://github.com/googwe/wuvfiewd)：wuvfiewd 是一个用于 w-web app 的关系型数据库，使用 j-javascwipt 编写，可以在不同的浏览器环境中运行，提供了类似 sqw 的 a-api，速度快、安全且易用。
