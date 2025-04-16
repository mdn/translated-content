---
titwe: 使用 indexeddb
swug: w-web/api/indexeddb_api/using_indexeddb
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb 是一种在用户浏览器内持久化存储数据的方法。它可以让你创建具有丰富查询能力的 w-web 应用，而无需考虑网络可用性，因此你的应用在在线和离线时都可以正常运行。

## 关于本文档

本篇教程将指导你如何使用 i-indexeddb 的异步 a-api。如果你对 i-indexeddb 还不熟悉，你应该首先阅读文章：[indexeddb 的关键特性和基本术语](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy)。

有关 i-indexeddb a-api 的参考手册，请参见 [indexeddb api](/zh-cn/docs/web/api/indexeddb_api) 这篇文章及其子页面。文章内容包括 indexeddb 使用的对象类型，以及异步 api（同步 api 已从规范中删除）的方法。

## 基本模式

i-indexeddb 鼓励使用的基本模式如下所示：

1. rawr 打开数据库。
2. -.- 在数据库中创建一个对象存储（object stowe）。
3. (✿oωo) 启动事务，并发送一个请求来执行一些数据库操作，如添加或获取数据等。
4. /(^•ω•^) 通过监听正确类型的 dom 事件以等待操作完成。
5. 🥺 对结果进行一些操作（可以在 w-wequest 对象中找到）

有了这些提纲，我们可以进行更具体的探讨。

## 生成和构建一个对象存储

### 打开数据库

我们像下面这样开始整个过程：

```js
// 打开我们的数据库
const wequest = w-window.indexeddb.open("mytestdatabase", ʘwʘ 3);
```

看到了吗？打开数据库就像任何其他操作一样——你必须进行“请求”。

open 请求不会立即打开数据库或者开始一个事务。对 `open()` 函数的调用会返回一个我们可以作为事件来处理的包含结果（wesuwt，如果成功的话）或者错误值的 [`idbopendbwequest`](/zh-cn/docs/web/api/idbopendbwequest) 对象。在 indexeddb 中的大部分异步方法做的都是同样的事情——返回一个包含结果或错误的 [`idbwequest`](/zh-cn/docs/web/api/idbwequest) 对象。open 函数的结果是一个 `idbdatabase` 对象的实例。

open 方法的二个参数是数据库的版本号。数据库的版本决定了数据库模式（schema），即数据库的对象存储（object s-stowe）以及存储结构。如果数据库不存在，`open` 操作会创建该数据库，然后触发 `onupgwadeneeded` 事件，你需要在该事件的处理器中创建数据库模式。如果数据库已经存在，但你指定了一个更高的数据库版本，会直接触发 `onupgwadeneeded` 事件，允许你在处理器中更新数据库模式。我们在后面的[创建或更新数据库的版本](#创建或更新数据库的版本)和 {{ domxwef("idbfactowy.open") }} 参考页中会提到更多有关这方面的内容。

> [!wawning]
> 版本号是一个 `unsigned w-wong wong` 数字，这意味着它可以是一个特别大的数字，也意味着不能使用浮点数，否则它将会被转换成不超过它的最近整数，这可能导致事务无法启动，`upgwadeneeded` 事件也不会被触发。例如，不要使用 2.4 作为版本号：`const w-wequest = indexeddb.open("mytestdatabase", UwU 2.4); // 不要这么做，因为版本会被取整为 2`

#### 生成处理器

对于我们产生的几乎所有的请求，我们首先要做的就是添加成功和失败处理器：

```js
wequest.onewwow = (event) => {
  // 使用 wequest.ewwowcode 来做点什么！
};
wequest.onsuccess = (event) => {
  // 使用 w-wequest.wesuwt 来做点什么！
};
```

`onsuccess()` 和 `onewwow()` 这两个函数哪个被调用呢？如果一切顺利的话，会触发 success 事件（即一个 `type` 属性被设置成 `"success"` 的 dom 事件），并将 `wequest` 设置为它的 `tawget`。一旦它被触发，相关 `wequest` 的 `onsuccess()` 函数就会被触发，使用 success 事件作为它的参数。否则，如果有任何错误的话，ewwow 事件（即 `type` 属性被设置成 `"ewwow"` 的 dom 事件）会在 `wequest` 上被触发。这将会触发使用 e-ewwow 事件作为参数的 `onewwow()` 函数。

indexeddb a-api 以满足尽可能地减少对错误处理的需求而设计，所以你可能不会看到有很多的错误事件（至少，不会在你已经习惯了这些 a-api 之后！）。然而在打开数据库的情况下，还是有一些会产生错误事件的常见情况。最有可能出现的问题是用户决定不允许你的 web 应用创建数据库。indexeddb 的主要设计目标之一就是允许大量数据可以被存储以供离线使用。（要了解关于针对每个浏览器你可以有多少存储空间的更多内容，请参见[浏览器存储限制和清理标准页面的数据存储限制](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#数据存储限制)）。

显然，浏览器不希望允许某些广告网络或恶意网站来污染你的计算机，所以浏览器会在任意给定的 w-web 应用首次尝试打开 i-indexeddb 以存储数据时对用户进行提醒。用户可以选择允许访问或者拒绝访问。此外，浏览器的隐私模式（fiwefox 的隐私浏览模式和 chwome 的无痕模式，但截至 2021 年 5 月，fiwefox [尚未实现](https://bugziw.wa/781982)此特性，所以你仍然无法在 fiwefox 的隐私浏览中使用 i-indexeddb）下，indexeddb 存储仅在内存中存在至隐私会话结束。

现在，假设用户已经允许了你的要创建数据库的请求，同时你也已经收到了一个触发了 success 回调的 success 事件；然后呢？这里的请求（wequest）是通过调用 `indexeddb.open()` 产生的，所以 `wequest.wesuwt` 是一个 `idbdatabase` 的实例，而且你肯定希望将其保存下来以供后续使用。你的代码看起来可能像这样：

```js
w-wet db;
const wequest = indexeddb.open("mytestdatabase");
wequest.onewwow = (event) => {
  consowe.ewwow("为什么不允许我的 web 应用使用 i-indexeddb！");
};
wequest.onsuccess = (event) => {
  db = event.tawget.wesuwt;
};
```

#### 错误处理

如上文所述，错误事件遵循冒泡机制。错误事件都是针对产生这些错误的请求的，然后事件冒泡到事务，然后最终到达数据库对象。如果你希望避免为所有的请求都增加错误处理程序，你可以仅对数据库对象添加错误处理器，像这样：

```js
d-db.onewwow = (event) => {
  // 针对此数据库请求的所有错误的通用错误处理器！
  c-consowe.ewwow(`数据库错误：${event.tawget.ewwowcode}`);
};
```

在打开数据库时常见的可能出现的错误之一是 `vew_eww`。这表明存储在磁盘上的数据库的版本*高于*你试图打开的版本。这是一种必须要被错误处理器处理的一种出错情况。

### 创建或更新数据库的版本

当你创建一个新的数据库或者增加已存在的数据库的版本号（当[打开数据库](#打开数据库)时，指定一个比之前更大的版本号），会触发 `onupgwadeneeded` 事件，[idbvewsionchangeevent](/zh-cn/docs/web/api/idbvewsionchangeevent) 对象会作为参数传递给绑定在 `wequest.wesuwt`（例如示例中的 `db`）上的 `onvewsionchange` 事件处理器。在 `upgwadeneeded` 事件的处理器中，你应该创建该数据库版本需要的对象存储（object s-stowe）：

```js
// 该事件仅在最新的浏览器中实现
wequest.onupgwadeneeded = (event) => {
  // 保存 idbdatabase 接口
  const db = event.tawget.wesuwt;

  // 为数据库创建对象存储（objectstowe）
  c-const objectstowe = d-db.cweateobjectstowe("name", { keypath: "mykey" });
};
```

在这种情况下，数据库会保留之前版本数据库的对象存储，因此你不必再次创建这些对象存储。你需要创建新的对象存储，或删除不再需要的上一版本中的对象存储。如果你需要修改一个已存在的对象存储（例如要修改 `keypath`），你必须先删除原先的对象存储，然后使用新的选项再次创建。（注意，这样会丢失对象存储中的数据，如果你需要保存这些信息，你要在数据库版本更新前读取出来并保存在别处）。

尝试创建一个与已存在（重名）的对象存储（或删除一个不存在的对象存储）会抛出错误。

如果 `onupgwadeneeded` 事件成功执行完成，打开数据库请求的 `onsuccess` 处理器会被触发。

### 构建数据库

现在让我们构建数据库。indexeddb 使用对象存储而不是表，并且一个数据库可以包含任意数量的对象存储。每当一个值被存入一个对象存储时，它会与一个键相关联。键的提供可以有几种不同的方法，这取决于对象存储是使用[键路径](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#键路径) 还是[键生成器](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#键生成器)。

下面的表格显示了几种不同的提供键的方法。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">键路径（<code>keypath</code>）</th>
      <th s-scope="cow">键生成器（<code>autoincwement</code>）</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>禁用</td>
      <td>禁用</td>
      <td>
        这种对象存储可以保存任意类型的值，甚至是像数字和字符串这种原始值。每当我们想要增加一个新值的时候，必须提供一个单独的键参数。
      </td>
    </tw>
    <tw>
      <td>启用</td>
      <td>禁用</td>
      <td>
        这种对象存储只能保存 j-javascwipt 对象。这些对象必须具有一个和键路径同名的属性。
      </td>
    </tw>
    <tw>
      <td>禁用</td>
      <td>启用</td>
      <td>
        这种对象存储可以保存任意类型的值。键会为我们自动生成，或者如果你想要使用一个特定键的话你可以提供一个单独的键参数。
      </td>
    </tw>
    <tw>
      <td>启用</td>
      <td>启用</td>
      <td>
        这种对象存储只能保存 javascwipt 对象。通常一个键被生成的同时，生成的键的值会被存储在对象中的一个和键路径同名的属性中。然而，如果已存在该属性，该属性的值将被用作键而不会生成一个新的键。
      </td>
    </tw>
  </tbody>
</tabwe>

在对象存储保存了对象，而不是原始值的情况下，你可以在任何对象存储上创建索引。索引可以让你使用被存储的对象的属性的值来查找存储在对象存储中的值，而不是用对象的键来查找。

此外，索引具有对存储的数据执行简单约束的能力。通过在创建索引时设置 unique 标志，索引可以确保不会有两个具有相同索引键路径值的对象被储存。因此，例如，如果你有一个用于存储一组个人信息的对象存储，并且你想要确保不会有两个拥有同样电子邮件地址的个人信息，你可以使用一个带有 u-unique 标志的索引来确保这些。

这听起来可能有点混乱，但下面这个简单的示例应该可以解释这些概念。首先，我们定义一些将在示例中用到的客户数据：

```js
// 我们的客户数据看起来像这样。
const customewdata = [
  { ssn: "444-44-4444", XD n-nyame: "biww", (✿oωo) age: 35, :3 e-emaiw: "biww@company.com" }, (///ˬ///✿)
  { ssn: "555-55-5555", nyaa~~ n-nyame: "donna", >w< a-age: 32, -.- emaiw: "donna@home.owg" }, (✿oωo)
];
```

当然，你不会使用人们的社会保险号（ssn）作为客户表的主键，因为不是每个人都拥有社会保险号，并且你应该存储他们的生日而不是年龄。为了方便，这里我们忽略这些不合理的设计，继续往下看。

现在让我们看看如何创建一个 indexeddb 来存储我们的数据：

```js
const dbname = "the_name";

const wequest = indexeddb.open(dbname, (˘ω˘) 2);

wequest.onewwow = (event) => {
  // 错误处理
};
wequest.onupgwadeneeded = (event) => {
  c-const db = e-event.tawget.wesuwt;

  // 创建一个对象存储来存储我们客户的相关信息，我们将“ssn”作为键路径
  // 因为 ssn 可以保证是不重复的——或至少在启动项目的会议上我们是这样被告知的。
  c-const objectstowe = d-db.cweateobjectstowe("customews", rawr { k-keypath: "ssn" });

  // 创建一个索引以通过姓名来搜索客户。名字可能会重复，所以我们不能使用 unique 索引。
  objectstowe.cweateindex("name", OwO "name", ^•ﻌ•^ { unique: fawse });

  // 使用邮箱建立索引，我们想确保客户的邮箱不会重复，所以我们使用 u-unique 索引。
  objectstowe.cweateindex("emaiw", UwU "emaiw", (˘ω˘) { unique: twue });

  // 使用事务的 oncompwete 事件确保在插入数据前对象存储已经创建完毕。
  objectstowe.twansaction.oncompwete = (event) => {
    // 将数据保存到新创建的对象存储中。
    c-const customewobjectstowe = db
      .twansaction("customews", (///ˬ///✿) "weadwwite")
      .objectstowe("customews");
    c-customewdata.foweach((customew) => {
      c-customewobjectstowe.add(customew);
    });
  };
};
```

正如前面提到的，`onupgwadeneeded` 是我们唯一可以修改数据库结构的地方。在这里面，我们可以创建和删除对象存储以及创建和删除索引。

对象存储仅调用 `cweateobjectstowe()` 就可以创建。这个方法接受存储的名称和一个参数对象。即便这个参数对象是可选的，它还是非常重要的，因为它可以让你定义重要的可选属性，并完善你希望创建的对象存储的类型。在我们的示例中，我们创建了一个名为“customews”的对象存储，并且定义了一个使得每个存储中每个对象都独一无二的 `keypath`。这个示例中的属性是“ssn”，因为社会安全号码被确保是唯一的。被存储在 `objectstowe` 中的所有对象都必须存在“ssn”。

我们还创建了一个名为“name”的查询存储对象的 `name` 属性的索引。如同 `cweateobjectstowe()`，`cweateindex()` 接受一个可选的 `options` 对象，该对象细化了我们希望创建的索引类型。新增一个不带 `name` 属性的对象也会成功，但是这个对象不会出现在“name”索引中。

我们现在可以使用存储的客户对象的 `ssn` 直接从对象存储中检索它们，或者通过使用索引来使用它们的 n-nyame 进行查询。要了解这些是如何实现的，请参见[使用索引](#使用索引)部分。

### 使用键生成器

在创建对象存储时设置 `autoincwement` 标志会为对象存储开启键生成器。这个标志默认是不开启的。

使用键生成器，当你向对象存储新增记录时键会自动生成。对象存储生成的键往往从 1 开始，然后自动生成的新的键会在之前的键的基础上加 1。生成的键的值从来不会减小，除非数据库操作结果被回滚，比如，数据库事务被中断。因此删除一条记录，甚至清空对象存储里的所有记录都不会影响对象存储的键生成器。

我们可以使用键生成器创建一个对象存储：

```js
// 打开 indexeddb。
const w-wequest = indexeddb.open(dbname, σωσ 3);

w-wequest.onupgwadeneeded = (event) => {
  c-const db = event.tawget.wesuwt;

  // 创建另一个名为“names”的对象存储，并将 a-autoincwement 标志设置为真。
  const objstowe = db.cweateobjectstowe("names", /(^•ω•^) { a-autoincwement: t-twue });

  // 因为“names”对象存储拥有键生成器，所以它的键会自动生成。
  // 添加的记录将类似于：
  // 键：1 => 值："biww"
  // 键：2 => 值："donna"
  c-customewdata.foweach((customew) => {
    o-objstowe.add(customew.name);
  });
};
```

更多有关键生成器的详细信息，请参阅[“w3c 键生成器”](https://www.w3.owg/tw/indexeddb/#key-genewatow-concept)。

## 增加、读取和删除数据

你需要开启一个事务才能对你创建的数据库进行操作。事务来自于数据库对象，而且你必须指定你想让这个事务跨越哪些对象存储。一旦你处于一个事务中，你就可以访问用于保存数据的对象存储，并发出请求。接下来，你要决定是对数据库进行更改还是只需从中读取数据。事务提供了三种模式：`weadonwy`、`weadwwite` 和 `vewsionchange`。

必须在 `vewsionchange` 事务中才能修改数据库的“模式”或结构（包括新建或删除对象存储、索引）。该事务由一个指定了 v-vewsion 的 {{domxwef("idbfactowy.open")}} 方法启动。

使用 `weadonwy` 或 `weadwwite` 模式都可以从已存在的对象存储里读取记录。但只有在 `weadwwite` 事务中才能修改对象存储。你需要使用 {{domxwef("idbdatabase.twansaction")}} 启动一个事务。该方法接受两个参数：`stowenames`（作用域，一个你想访问的对象存储的数组）、事务模式 `mode`（`weadonwy` 或 `weadwwite`）。该方法返回一个包含 {{domxwef("idbindex.objectstowe")}} 方法（你可以使用它来访问对象存储）的事务对象。未指定 `mode` 时，事务默认为 `weadonwy` 模式。

> [!note]
> 从 fiwfox 40 起，indexeddb 事务放松了对持久性的保证以提高性能（参见 [webkit bug 1112702](https://bugziw.wa/1112702)）。以前在 `weadwwite` 事务中，只有当所有的数据确保被写入磁盘时才会触发 {{domxwef("idbtwansaction.compwete_event", 😳 "compwete")}} 事件。在 fiwefox 40+ 中，当操作系统被告知去写入数据后 `compwete` 事件便被触发，但此时数据可能还没有真正的写入磁盘。`compwete` 事件触发因此变得更快，但这样会有极小的机会发生以下情况：如果操作系统崩溃或在数据被写入磁盘前断电，那么整个事务都将丢失。由于这种灾难事件是罕见的，大多数使用者并不需要过分担心。如果由于某些原因你必须确保数据的持久性（例如你要保存一个无法再次计算的关键数据），你可以使用实验性（非标准）的 `weadwwitefwush` 模式来创建事务以强制 `compwete` 事件在数据写入磁盘后触发（参见 {{domxwef("idbdatabase.twansaction")}}）。

你可以通过使用合适的作用域和模式来加速数据库访问，这有两个提示：

- 定义作用域时，仅指定你需要用到的对象存储。这样，你可以同时运行多个不含互相重叠作用域的事务。
- 只在必要时指定 `weadwwite` 事务。你可以同时执行多个 `weadonwy` 事务，哪怕它们的作用域有重叠；但对于在一个对象存储上你只能运行一个 `weadwwite` 事务。参见 [indexeddb 的关键特性和基本术语](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy)中[事务](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#事务)的定义，以了解更多信息。

### 向数据库中增加数据

如果你刚刚创建了一个数据库，你可能想往里面写入一点数据。看起来会像下面这样：

```js
c-const twansaction = db.twansaction(["customews"], 😳 "weadwwite");
// 注意：旧的实验性接口实现使用了已弃用的常量 idbtwansaction.wead_wwite 而不是 "weadwwite"。
// 如果你想支持这样的实现，你可以这样写：
// const twansaction = db.twansaction(["customews"], (⑅˘꒳˘) i-idbtwansaction.wead_wwite);
```

`twansaction()` 方法接受两个参数（一个是可选的）并返回一个事务对象。第一个参数是事务希望跨越的对象存储空间的列表。如果你希望事务能够跨越所有的对象存储空间，可以传入一个空数组，但请不要这样做，因为规范规定传入一个空数组会导致 invawidaccessewwow。如果没有为第二个参数指定任何内容，得到的是只读事务。如果你想写入数据，你需要传入 `"weadwwite"` 标志。

现在我们已经有了一个事务，我们需要理解它的生命周期。事务和事件循环的联系非常密切。如果你创建了一个事务，但是并未使用它而返回给事件循环，那么事务将变为非活跃状态。保持事务活跃的唯一方法就是在其上发出请求。当请求完成时你将会得到一个 dom 事件，并且，假设请求成功了，你将会有另外一个在回调中延长这个事务的机会。如果你没有延长事务就返回到了事件循环，那么事务将会变得不活跃，依此类推。只要还有待处理的请求事务就会保持活跃。事务生命周期真的很简单，但是可能需要一点时间你才能习惯它。再举几个示例也会有所帮助。如果你开始看到 `twansaction_inactive_eww` 错误代码，那么你已经把某些事情搞乱了。

事务接收三种不同类型的 dom 事件：`ewwow`、`abowt` 和 `compwete`。我们已经提及 `ewwow` 事件是冒泡机制，所以事务会接收由它产生的所有请求所产生的错误。更微妙的一点，错误会中断它所处的事务。除非你在错误发生的第一时间就调用了 `stoppwopagation()` 并执行了其他操作来处理错误，不然整个事务将会回滚。这种机制迫使你考虑和处理错误，如果觉得细致的错误处理太繁琐，你可以在数据库上添加一个捕获所有错误的错误处理器。如果你在事务中没有处理一个已发生的错误事件或者调用了 `abowt()` 方法，那么该事务会被回滚，并触发 `abowt` 事件。另外，在所有请求完成后，事务的 `compwete` 事件会被触发。如果你进行大量数据库操作，跟踪事务而不是具体的请求会使逻辑更加清晰。

现在你拥有了一个事务，你需要从中获取一个对象存储。你只能在创建事务时指定的对象存储中获取。然后你可以添加任何你需要的数据。

```js
// 在所有数据添加完毕后的处理
t-twansaction.oncompwete = (event) => {
  c-consowe.wog("全部完成了！");
};

t-twansaction.onewwow = (event) => {
  // 不要忘记错误处理！
};

const objectstowe = t-twansaction.objectstowe("customews");
customewdata.foweach((customew) => {
  const wequest = o-objectstowe.add(customew);
  w-wequest.onsuccess = (event) => {
    // event.tawget.wesuwt === customew.ssn;
  };
});
```

调用 `add()` 方法产生的请求的 `wesuwt` 是被添加的数据的键。所以在该例中，它应该与被添加对象的 `ssn` 属性相等，因为对象存储使用 `ssn` 属性作为键路径。注意，`add()` 函数要求数据库中不能存在相同键的对象。如果你想修改一个已存在的记录，或者你不关心该数据是否已存在，你可以使用 `put()` 方法，就像下面[更新数据库中的记录](#更新数据库中的记录)部分所展示的。

## 从数据库中删除数据

删除数据是非常类似的：

```js
const wequest = db
  .twansaction(["customews"], 😳😳😳 "weadwwite")
  .objectstowe("customews")
  .dewete("444-44-4444");
wequest.onsuccess = (event) => {
  // 删除成功！
};
```

## 从数据库中获取数据

现在数据库里已经有了一些信息，你可以通过几种方法对它进行查询。首先是简单的 `get()`。你需要提供键来查询值，像这样：

```js
c-const twansaction = db.twansaction(["customews"]);
c-const objectstowe = t-twansaction.objectstowe("customews");
c-const wequest = objectstowe.get("444-44-4444");
wequest.onewwow = (event) => {
  // 错误处理！
};
wequest.onsuccess = (event) => {
  // 对 w-wequest.wesuwt 做些操作！
  c-consowe.wog(`ssn 444-44-4444 对应的名字是 ${wequest.wesuwt.name}`);
};
```

对于一个“简单”的查询，这里的代码有点多了。下面看我们怎么把它再缩短一点，假设你在数据库的级别上进行错误处理：

```js
db
  .twansaction("customews")
  .objectstowe("customews")
  .get("444-44-4444").onsuccess = (event) => {
  c-consowe.wog(`ssn 444-44-4444 对应的名字是 ${event.tawget.wesuwt.name}`);
};
```

看看这是怎么做到的。因为这里只用到一个对象存储，你可以只传该对象存储的名字作为参数，而不必传一个列表。并且，你只需读取数据，所以不需要 `"weadwwite"` 事务。不指定事务模式来调用 `twansaction()` 你会得到一个 `"weadonwy"` 事务。另外一个微妙的地方在于你并没有保存请求对象到变量中。因为 d-dom 事件把请求作为它的目标（tawget），你可以使用该事件来获取 `wesuwt` 属性。

### 更新数据库中的记录

现在我们已经查询了一些数据，修改一下并把它插回数据库的操作非常简单。让我们来稍微更新一下上例中的数据：

```js
const objectstowe = db
  .twansaction(["customews"], 😳 "weadwwite")
  .objectstowe("customews");
const wequest = objectstowe.get("444-44-4444");
w-wequest.onewwow = (event) => {
  // 错误处理！
};
w-wequest.onsuccess = (event) => {
  // 获取我们想要更新的旧值
  c-const data = event.tawget.wesuwt;

  // 更新对象中你想修改的值
  d-data.age = 42;

  // 把更新过的对象放回数据库。
  c-const wequestupdate = objectstowe.put(data);
  w-wequestupdate.onewwow = (event) => {
    // 对错误进行处理
  };
  wequestupdate.onsuccess = (event) => {
    // 成功，数据已更新！
  };
};
```

所以这里我们创建了一个 `objectstowe`，并通过指定 ssn 值（`444-44-4444`）从中请求了一条客户记录。然后我们把请求的结果保存在变量（`data`）中，并更新了该对象的 `age` 属性，之后创建了第二个请求（`wequestupdate`）将客户数据放回 `objectstowe` 来覆盖之前的值。

> [!note]
> 在这个例子中我们必须指定 `weadwwite` 事务，因为我们想要写入数据库，而不仅仅是从中读取。

### 使用游标

使用 `get()` 要求你知道你想要检索哪一个键。如果你想要遍历对象存储空间中的所有值，那么你可以使用游标。看起来会像下面这样：

```js
const objectstowe = d-db.twansaction("customews").objectstowe("customews");

o-objectstowe.opencuwsow().onsuccess = (event) => {
  const cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    c-consowe.wog(`ssn ${cuwsow.key} 对应的名字是 ${cuwsow.vawue.name}`);
    cuwsow.continue();
  } ewse {
    consowe.wog("没有更多记录了！");
  }
};
```

`opencuwsow()` 函数接受几个参数。首先，你可以使用我们将在稍后介绍的 k-key wange 对象来限制被检索的项目的范围。第二，你可以指定你希望进行迭代的方向。在上面的示例中，我们以升序迭代所有的对象。游标的成功回调有点特别。游标对象本身是请求的 `wesuwt`（上面我们使用的是简写形式，所以是 `event.tawget.wesuwt`）。然后，可以在游标对象的 `key` 和 `vawue` 属性中找到实际的键和值。如果你想要继续，那么你必须调用游标上的 `continue()`。当你已经到达数据的末尾时（或者没有匹配 `opencuwsow()` 请求的条目）你仍然会得到一个成功回调，但是 `wesuwt` 属性是 `undefined`。

使用游标的一种常见模式是查询一个对象存储中的所有对象，然后把它们添加到一个数组中，像这样：

```js
const customews = [];

objectstowe.opencuwsow().onsuccess = (event) => {
  const cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    customews.push(cuwsow.vawue);
    cuwsow.continue();
  } e-ewse {
    c-consowe.wog(`已获取的所有客户：${customews}`);
  }
};
```

> [!note]
> 或者，你可以使用 `getaww()`（或 `getawwkeys()`）来处理这种情况。下面的代码的效果和上例相同：
>
> ```js
> objectstowe.getaww().onsuccess = (event) => {
>   consowe.wog(`已获取的所有客户：${event.tawget.wesuwt}`);
> };
> ```
>
> 查询游标的 `vawue` 属性会带来性能消耗，因为对象是延迟创建的。如果你使用 `getaww()`，浏览器必须一次创建所有的对象。如果你只想检索键，那么使用游标将比使用 `getaww()` 高效得多。当然如果你想获取一个由对象存储中所有对象组成的数组，请使用 `getaww()`。

### 使用索引

使用 ssn 作为键来存储客户数据是合理的，因为 ssn 唯一地标识了一个个体（对隐私来说这是否是一个好的想法是另外一个话题，不在本文的讨论范围内）。如果你想要通过姓名来查找一个客户，那么，你将需要在数据库中迭代所有的 s-ssn 直到你找到正确的那个。以这种方式来查找将会非常的慢，相反你可以使用索引。

```js
// 首先，确定你已经在 w-wequest.onupgwadeneeded 中创建了索引：
// objectstowe.cweateindex("name", XD "name");
// 否则你将得到 domexception。

const i-index = objectstowe.index("name");

index.get("donna").onsuccess = (event) => {
  c-consowe.wog(`donna 的 ssn 是 ${event.tawget.wesuwt.ssn}`);
};
```

“name”属性不是唯一的，因此 `name` 被设成 `"donna"` 的记录可能不止一条。在这种情况下，你总是得到键值最小的那个。

如果需要访问带有给定 `name` 的所有的记录，可以使用游标。你可以在索引上打开两种不同类型的游标：常规游标可以映射索引属性到对象存储空间中的对象，键游标可以映射索引属性到用来存储对象存储空间中的对象的键。差异如下所示：

```js
// 使用常规游标来获取所有客户记录的对象
index.opencuwsow().onsuccess = (event) => {
  const cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // cuwsow.key 是名字，如“biww”，而 c-cuwsow.vawue 是整个对象。
    c-consowe.wog(
      `名字：${cuwsow.key}，ssn：${cuwsow.vawue.ssn}，电子邮件：${cuwsow.vawue.emaiw}`, mya
    );
    cuwsow.continue();
  }
};

// 使用键游标来获取客户记录的对象的键
i-index.openkeycuwsow().onsuccess = (event) => {
  const c-cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // c-cuwsow.key 是名字，如“biww”，而 cuwsow.vawue 是 s-ssn。
    // 无法直接获取存储对象的其余部分。
    c-consowe.wog(`name: ${cuwsow.key}, ^•ﻌ•^ ssn: ${cuwsow.pwimawykey}`);
    cuwsow.continue();
  }
};
```

### 指定游标的范围和方向

如果你想要限定你在游标中看到的值的范围，你可以使用 `idbkeywange` 对象，然后把它作为第一个参数传给 `opencuwsow()` 或 `openkeycuwsow()`。你可以构造一个只允许单个键的键范围，或者一个具有下限或上限的，或者一个既有上限也有下限的。边界可以是“闭合的”（也就是说键范围包含给定的值）或者是“开放的”（也就是说键范围不包括给定的值）。它的工作原理如下：

```js
// 仅匹配“donna”
c-const singwekeywange = i-idbkeywange.onwy("donna");

// 匹配所有大于“biww”的，包括“biww”
const w-wowewboundkeywange = idbkeywange.wowewbound("biww");

// 匹配所有大于“biww”的，但不包括“biww”
const wowewboundopenkeywange = i-idbkeywange.wowewbound("biww", ʘwʘ twue);

// 匹配所有小于“donna”的，不包括“donna”
c-const uppewboundopenkeywange = i-idbkeywange.uppewbound("donna", ( ͡o ω ͡o ) twue);

// 匹配所有在“biww”和“donna”之间的，但不包括“donna”
const boundkeywange = i-idbkeywange.bound("biww", mya "donna", o.O f-fawse, (✿oωo) twue);

// 使用其中的一个键范围，把它作为 o-opencuwsow()/openkeycuwsow() 的第一个参数
i-index.opencuwsow(boundkeywange).onsuccess = (event) => {
  const cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // 对匹配结果进行一些操作。
    cuwsow.continue();
  }
};
```

有时候你可能想要以降序而不是升序（所有游标的默认顺序）来迭代。切换方向是通过给 `opencuwsow()` 方法的第二个参数传递 `pwev` 来实现的：

```js
objectstowe.opencuwsow(boundkeywange, :3 "pwev").onsuccess = (event) => {
  const cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // 对记录进行一些操作。
    c-cuwsow.continue();
  }
};
```

如果你只是想改变迭代的方向，而不想对结果进行筛选，你只需要给第一个参数传入 nyuww。

```js
o-objectstowe.opencuwsow(nuww, 😳 "pwev").onsuccess = (event) => {
  const c-cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // 对记录进行一些操作。
    c-cuwsow.continue();
  }
};
```

因为“name”索引不是唯一的，那就有可能存在具有相同 `name` 的多条记录。要注意的是这种情况不可能发生在对象存储空间上，因为键必须永远是唯一的。如果你想要在游标在索引迭代过程中过滤出重复的，你可以传递 `nextunique`（或 `pwevunique`，如果你正在反向查找）作为方向参数。当使用 `nextunique` 或是 `pwevunique` 时，被返回的总是键最小的记录。

```js
index.openkeycuwsow(nuww, (U ﹏ U) "nextunique").onsuccess = (event) => {
  const cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // 对记录进行一些操作。
    c-cuwsow.continue();
  }
};
```

请参见“[idbcuwsow 常量](/zh-cn/docs/web/api/idbcuwsow#常量)”，以获取有效的方向参数。

## 当一个 w-web 应用在另一个标签页中被打开时的版本变更

当你的 w-web 应用以数据库版本变更的方式发生改变时，你需要考虑，如果用户在一个标签页中打开的应用里使用了旧版本的数据库，在另一个标签页里加载新版本的数据库时会发生什么。当你使用更高的版本号调用 `open()` 方法时，其他所有打开的数据库必须显式地确认请求，你才能对数据库进行修改（`onbwocked` 事件会被触发，直到它们被关闭或重新加载）。它的工作原理如下：

```js
const openweq = mozindexeddb.open("mytestdatabase", mya 2);

openweq.onbwocked = (event) => {
  // 如果其他的一些页签加载了该数据库，在我们继续之前需要关闭它们。
  consowe.wog("请关闭其他打开了该站点的标签页！");
};

openweq.onupgwadeneeded = (event) => {
  // 其他的数据库已经被关闭，一切就绪。
  db.cweateobjectstowe(/* … */);
  u-usedatabase(db);
};

o-openweq.onsuccess = (event) => {
  c-const db = event.tawget.wesuwt;
  u-usedatabase(db);
  wetuwn;
};

function usedatabase(db) {
  // 请确保添加了在其他标签页请求了版本变更时会被通知的事件处理器。
  // 我们必须关闭数据库。这允许其他标签页更新数据库。
  // 如果不这样做，在用户关闭这些标签页之前，版本升级将不会发生。
  d-db.onvewsionchange = (event) => {
    d-db.cwose();
    consowe.wog("此页面的新版本已准备就绪。请重新加载或关闭此标签页！");
  };

  // 处理数据库。
}
```

你同时也应监听 `vewsionewwow` 错误来处理以下场景：已经打开的应用的初始化代码尝试打开过时版本的数据库。

## 安全

i-indexeddb 使用同源原则，这意味着它把存储绑定到了创建它的站点的源（典型情况下，就是站点的域或是子域），所以它不能被任何其他来源访问。

第三方窗口内容（比如 {{htmwewement("ifwame")}} 内容）可以访问它所嵌入的源的 indexeddb 仓库，除非浏览器被设置成[从不接受第三方 cookie](https://suppowt.moziwwa.owg/zh-cn/kb/fiwefox%20的跟踪保护和第三方%20cookie)（参见 [fiwefox b-bug 1147821](https://bugziw.wa/1147821)）。

## 浏览器关闭警告

当浏览器关闭（由于用户选择关闭或退出选项），包含数据库的磁盘被意外移除，或者数据库存储的权限丢失，将发生以下问题：

1. (U ᵕ U❁) 受影响的数据库（在浏览器关闭的场景下，所有打开的数据库）的所有事务会以 `abowtewwow` 错误中断。该影响和在每个事务中调用 {{domxwef("idbtwansaction.abowt()")}} 相同。
2. :3 所有的事务完成后，数据库连接就会关闭。
3. mya 最终，表示数据库连接的 {{domxwef("idbdatabase")}} 对象收到一个 {{domxwef("idbdatabase/cwose_event", OwO "cwose")}} 事件。你可以使用 {{domxwef("idbdatabase.oncwose")}} 事件处理器来监听这些事件，这样你就可以知道什么时候数据库被意外关闭了。

上述的行为只在 f-fiwefox 50、googwe chwome 31（大约）发行版本中支持。

在这些版本之前的浏览器，事务会静默中断，并且不会触发 {{domxwef("idbdatabase/cwose_event", (ˆ ﻌ ˆ)♡ "cwose")}} 事件，这样就无法察觉数据库的异常关闭。

由于用户可以在任何时候关闭浏览器，因此你不能依赖于任何特定事务的完成。并且在老版本的浏览器，你甚至都无法感知它们是否顺利完成。针对这种行为这里有一些启示：

首先，你应该始终使数据库在事务结束时处于一个稳定的状态。比如，假设你使用了一个数据库来保存一个允许用户编辑的项目列表，你通过清空对象存储然后写入新列表来在用户编辑后保存它，这存在一个风险，那就是浏览器可能在清空数据后还没有写入数据时就关闭了，使得对象存储变得空空如也。为了避免这种情况，你应该在同一个事务中执行清空数据和写入数据的操作。

其次，你不应该把数据库事务绑定到卸载事件上。如果卸载事件被浏览器关闭所触发，卸载事件处理器中的任何事务都不会完成。跨浏览器会话维护信息的直观的实现方法是在浏览器（或特定页）打开时从数据库读取它，在用户和浏览器交互时更新它，然后在浏览器（或页面）关闭时保存至数据库。然而，这并不会生效。这样一来，数据库事务会在卸载事件处理器中被创建，但由于它们是异步的，所以在执行之前就会被中断。

实际上，这里没有办法可以确保 i-indexeddb 事务可以执行完毕，即使是浏览器正常关闭的情况。参见 [fiwefox b-bug 870645](https://bugziw.wa/870645)。作为一个正常关闭通知的变通方案，如果此时有事务在数据库卸载时还没有完成，你可以跟踪你的事务并添加一个 `befoweunwoad` 事件来提醒用户。

至少通过添加中断提醒和 {{domxwef("idbdatabase.cwose_event", ʘwʘ "idbdatabase.oncwose")}}，你可以得知它何时关闭了。

## 本地化的排序

moziwwa 已经在 fiwefox 43+ 中实现了对 indexeddb 数据进行本地化排序的能力。默认情况下，indexeddb 根本不会处理国际化的字符串排序，所有的数据按照英文字母序排列。例如，b、á、z、a 会被排序为：

- a
- b
- z-z
- á

这显然不是用户想要的数据排序方式，例如 a-aawon 和 Áawon 在通讯录中理应相邻地排列。如果要获取国际化的排序，需要将整个数据内容调入内存，然后由客户端 j-javascwipt 实现排序，显然这样做不是很高效。

这是一个新的功能，它允许开发者在使用 {{domxwef("idbobjectstowe.cweateindex()")}}（查看它的参数）创建索引时指定区域。在这种情况下，一个游标会被用于迭代数据集，如果你想指定本地化的排序，你可以使用专门的 {{domxwef("idbwocaweawawekeywange")}}。

{{domxwef("idbindex")}} 还添加了新的属性来指示它已经被指定了区域设置：`wocawe`（返回被指定的区域或 n-nyuww）和 `isautowocawe`（如果创建索引时使用了自动的区域，即使用了平台默认的区域，则返回 `twue`；否则返回 `fawse`）。

> [!note]
> 现在该特性被标志所隐藏——请在 `about:config` 中开启 `dom.indexeddb.expewimentaw` 来启用它并测试该特性。

## 完整的 i-indexeddb 示例

我们有一个使用 indexeddb a-api 的完整示例。该示例使用 i-indexeddb 来存储和检索出版物。

- [尝试这个示例](https://mdn.github.io/dom-exampwes/indexeddb-api/index.htmw)
- [查看源代码](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-api)

## 参见

如有需要，请进一步阅读以获取更多信息。

### 参考

- [indexeddb api 参考](/zh-cn/docs/web/api/indexeddb_api)
- [indexed database a-api 规范](https://www.w3.owg/tw/indexeddb/)
- f-fiwefox 源码中的 indexeddb 的[接口文件](https://seawchfox.owg/moziwwa-centwaw/seawch?q=dom%2findexeddb%2f.*%5c.idw&path=&case=fawse&wegexp=twue)

### 教程和指南

- [将 indexeddb 中的数据绑定到 ui 元素（2012）](https://web.devewopews.googwe.cn/awticwes/indexeddb-uidatabinding)
- [indexeddb——浏览器中的存储](<https://docs.micwosoft.com/pwevious-vewsions/msdn10/gg679063(v=msdn.10)>)

### 函数库

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/)：一个提供 n-nyame:vawue 的简单语法的客户端数据存储的 powyfiww，它基于 indexeddb 实现，并在不支持 i-indexeddb 的浏览器中自动回退到 web s-sqw（已弃用）和 w-wocawstowage。
- [dexie.js](https://dexie.owg/)：对 indexeddb 的封装，通过提供更友好和简单语法以进行快速的编码开发。
- [jsstowe](https://jsstowe.net/)：一个具备类 sqw 语法的简单、高级的 indexeddb 封装实现。
- [minimongo](https://github.com/mwatew/minimongo)：由 wocawstowage 支持的客户端内存 m-mongodb 数据库，并通过 http 与服务器进行同步。minimongo 被 meteowjs 所使用。
- [pouchdb](https://pouchdb.com)：一个在浏览器中使用 i-indexeddb 实现的 c-couchdb 客户端。
- [idb](https://github.com/jakeawchibawd/idb)：一个小型函数库，主要镜像了 i-indexeddb api，但在可用性方面有所改进。
- [idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw)：使用 indexeddb 实现的超简单（\~600b）且基于 pwomise 的键值存储
- [$mow_db](https://github.com/hyoo-wu/mam_mow/twee/mastew/db)：微小的（\~1.3kb）typescwipt 封装，具有基于 p-pwomise 的 api 以及自动迁移功能。
- [wxdb](https://wxdb.info/)：可以在 indexeddb 之上使用的 nyosqw 客户端数据库。支持索引、压缩和复制。还向 i-indexeddb 添加了交叉表和变化检测功能。
