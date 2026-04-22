---
title: 使用 IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: e254dd0d1fde812e8457406c00f1beacd1e4b8d4
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB 是一种可在用户浏览器中持久化存储数据的方式。它让你即使在网络不可用时，也能构建具备丰富查询能力的 Web 应用，因此应用可以同时在在线和离线场景下工作。

## 关于本文档

本教程将带你了解如何使用 IndexedDB 的异步 API。如果你还不熟悉 IndexedDB，建议先阅读 [IndexedDB 的关键特性和基本术语](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology)一文。

有关 IndexedDB API 的参考文档，参见 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 及其子页面。本文记录了 IndexedDB 使用的对象类型及异步 API 方法（同步 API 已从规范中移除）。

## 基本模式

IndexedDB 推荐的基本模式如下：

1. 打开数据库。
2. 在数据库中创建对象存储。
3. 启动事务并发起请求，执行数据库操作（例如添加或读取数据）。
4. 通过监听正确类型的 DOM 事件，等待操作完成。
5. 处理结果（结果可在 request 对象上取得）。

掌握了这些大方向之后，就可以进入更具体的内容了。

## 创建并组织对象存储

### 打开数据库

整个流程从这里开始：

```js
// 打开数据库
const request = window.indexedDB.open("MyTestDatabase", 3);
```

看到了吗？打开数据库和其他操作一样，你需要发起一个“请求”。

`open` 请求不会立即打开数据库，也不会立刻开始事务。调用 `open()` 会返回一个 [`IDBOpenDBRequest`](/zh-CN/docs/Web/API/IDBOpenDBRequest) 对象，其中包含结果（成功时）或错误值，你需要通过事件来处理。IndexedDB 中大多数异步函数也是这样：返回一个包含结果或错误的 [`IDBRequest`](/zh-CN/docs/Web/API/IDBRequest) 对象。`open()` 的结果是 `IDBDatabase` 实例。

`open` 方法的第二个参数是数据库版本。数据库版本决定了数据库的模式，也就是数据库中的对象存储及其结构。如果数据库尚不存在，`open` 操作会先创建它，然后触发 `onupgradeneeded` 事件，你需要在该事件处理器中手动创建数据库模式。如果数据库已存在，但你传入了更高的版本号，也会立刻触发 `onupgradeneeded`，让你在处理器中提供更新后的模式。我们稍后会在下文[创建或更新数据库版本](#创建或更新数据库版本)一节中详细说明，另请参见 {{ domxref("IDBFactory.open") }} 参考页面。

> [!WARNING]
> 版本号是整数，因此传入值会被取整。例如，2.1 和 2.4 都会被取整为 2。如果你尝试在会被取整为同一整数的版本之间升级，就不会触发 `onupgradeneeded` 事件。而如果使用较大的版本号，还请注意 JavaScript 中可表示的[整数范围](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_编码)。

#### 设置处理器

对于几乎所有请求，你都应首先为其添加成功和失败的处理器：

```js
request.onerror = (event) => {
  // 使用 request.error 做些处理！
};
request.onsuccess = (event) => {
  // 使用 request.result 做些处理！
};
```

如果请求成功，会触发 {{domxref("IDBRequest.success_event", "success")}} 事件，并调用赋给 `onsuccess` 参数的函数。请求失败时，会触发 {{domxref("IDBRequest.error_event", "error")}} 事件，并调用赋给 `onerror` 参数的函数。

IndexedDB API 的设计目标之一是尽量减少你对错误处理的需求，因此你通常不会频繁遇到错误事件（至少在你熟悉 API 后是这样）。但在打开数据库时，确实有一些常见情况会触发错误事件。最常见的问题是：用户不允许你的 Web 应用创建数据库。IndexedDB 的核心设计目标之一，就是允许为离线使用存储大量数据。（关于各浏览器可用存储量，参见“浏览器存储限制与清理标准”中的[可以存储多少数据](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#可以存储多少数据)一节。）

显然，浏览器不希望广告网络或恶意网站污染你的计算机，因此浏览器过去会在某个 Web 应用首次尝试打开 IndexedDB 进行存储时询问用户。用户可以允许或拒绝。另外，在浏览器隐私模式中，IndexedDB 存储只会在隐私会话未关闭前在内存中保留。

现在假设用户允许了创建数据库的请求，并且你已经收到成功事件并触发了成功回调；下一步是什么？这里的请求来自 `indexedDB.open()`，因此 `request.result` 是 `IDBDatabase` 实例，你肯定要把它保存下来供后续使用。代码大概如下：

```js
let db;
const request = indexedDB.open("MyTestDatabase");
request.onerror = (event) => {
  console.error("为什么不让我们的 Web 应用使用 IndexedDB！？");
};
request.onsuccess = (event) => {
  db = event.target.result;
};
```

#### 错误处理

如上所述，错误事件会冒泡。错误事件先发往触发错误的请求，再冒泡到事务，最后到数据库对象。如果你不想给每个请求都加错误处理器，可以在数据库对象上统一加一个：

```js
db.onerror = (event) => {
  // 针对此数据库请求的所有错误的通用处理器！
  console.error(`数据库错误：${event.target.error?.message}`);
};
```

打开数据库时常见错误之一是 `VER_ERR`。这表示磁盘上数据库的版本*高于*你尝试打开的版本。这类错误必须始终在错误处理器中处理。

### 创建或更新数据库版本

当你创建新数据库或提高现有数据库版本号时（即在[打开数据库](#打开数据库)时指定比之前更高的版本号），会触发 `onupgradeneeded` 事件，并向设置在 `request.result`（也就是示例中的 `db`）上的任意 `onversionchange` 事件处理器传递一个 [IDBVersionChangeEvent](/zh-CN/docs/Web/API/IDBVersionChangeEvent) 对象。在 `upgradeneeded` 事件处理器中，你应创建该数据库版本所需的对象存储：

```js
// 该事件仅在较新的浏览器中实现
request.onupgradeneeded = (event) => {
  // 保存 IDBDatabase 接口
  const db = event.target.result;

  // 为该数据库创建对象存储
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

这种情况下，数据库已包含旧版本中的对象存储，所以不需要重复创建。你只需要创建新对象存储，或删除旧版本中不再需要的对象存储。如果需要修改已有对象存储（例如更改 `keyPath`），必须删除旧对象存储，再用新选项重新创建。（注意：这会删除对象存储中的信息！如果需要保留，升级前需要先读出并另存。）

尝试创建一个已存在名称的对象存储（或删除一个不存在名称的对象存储）都会抛出错误。

如果 `onupgradeneeded` 事件成功退出，打开数据库请求的 `onsuccess` 处理器随后会被触发。

### 组织数据库结构

下面来组织数据库结构。IndexedDB 使用对象存储而非表，并且一个数据库可以包含任意数量的对象存储。每当值存入对象存储，它都会关联一个键。键的提供方式取决于对象存储是否使用[键路径](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology#键路径)或[键生成器](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology#键生成器)。

下表展示了键的不同提供方式：

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">键路径（<code>keyPath</code>）</th>
      <th scope="col">键生成器（<code>autoIncrement</code>）</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>否</td>
      <td>否</td>
      <td>
        该对象存储可以保存任何类型的值，包括数字、字符串等原始值。每次添加新值时都必须单独提供键参数。
      </td>
    </tr>
    <tr>
      <td>是</td>
      <td>否</td>
      <td>
        该对象存储只能保存 JavaScript 对象，这些对象必须拥有与键路径同名的属性。
      </td>
    </tr>
    <tr>
      <td>否</td>
      <td>是</td>
      <td>
        该对象存储可以保存任何类型的值。键会自动生成；如果你想使用特定键，也可以单独提供键参数。
      </td>
    </tr>
    <tr>
      <td>是</td>
      <td>是</td>
      <td>
        该对象存储只能保存 JavaScript 对象。通常会自动生成键，并将该键值写入对象中与键路径同名的属性。如果该属性已存在，则会使用该属性值作为键而不会再生成新键。
      </td>
    </tr>
  </tbody>
</table>

只要对象存储保存的是对象（而非原始值），你还可以在其上创建索引。索引允许你按对象某个属性值查找对象存储中的值，而不是按对象键查找。

此外，索引还能对存储数据施加简单约束。创建索引时设置 unique 标志后，索引会保证不会有两个对象在该索引键路径上具有相同值。举个例子，如果对象存储保存的是人员信息，并且你希望不出现两个相同邮箱地址，就可以创建带 unique 标志的索引来强制约束。

这听起来可能有点令人困惑，但下面这个简单示例可以说明这些概念。先定义示例用的客户数据：

```js
// 我们的客户数据如下
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

当然，你通常不会把社保号当客户表主键，因为并非所有人都有社保号，而且你会存储出生日期而不是年龄。但为了演示方便，我们先忽略这些不理想的选择。

现在看如何创建一个用于存储这些数据的 IndexedDB：

```js
const dbName = "the_name";

const request = indexedDB.open(dbName, 2);

request.onerror = (event) => {
  // 处理错误。
};
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // 创建对象存储保存客户信息。我们将使用“ssn”作为键路径，因为它保证唯一——至少项目启动会是这么说的。
  const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // 按姓名创建索引。姓名可能重复，所以不能使用唯一索引。
  objectStore.createIndex("name", "name", { unique: false });

  // 按邮箱创建索引。我们希望邮箱不重复，所以使用唯一索引。
  objectStore.createIndex("email", "email", { unique: true });

  // 使用 transaction 的 oncomplete，确保对象存储创建完成后再写入数据。
  objectStore.transaction.oncomplete = (event) => {
    // 把值写入新建的对象存储。
    const customerObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach((customer) => {
      customerObjectStore.add(customer);
    });
  };
};
```

如前所述，`onupgradeneeded` 是唯一可以修改数据库结构的地方。你可以在这里创建和删除对象存储，或在此创建和删除索引。

对象存储通过一次 `createObjectStore()` 调用创建。该方法接收存储名称和参数对象。参数对象虽然可选，但很重要，因为它能让你定义关键可选属性，精确指定要创建的对象存储类型。示例中我们创建了名为“customers”的对象存储，并定义了 `keyPath`。`keyPath` 对应的属性决定了存储中每个对象的唯一性。这里是“ssn”，因为社保号被认为是唯一的。存入 `objectStore` 的每个对象都必须包含“ssn”。

我们还创建了名为“name”的索引，用于索引对象上的 `name` 属性。和 `createObjectStore()` 一样，`createIndex()` 也接收一个可选的 `options` 对象，用于细化索引类型。即使添加的对象没有 `name` 属性也会成功，但该对象不会出现在“name”索引中。

现在我们可以直接通过对象存储中的 `ssn` 获取客户对象，或者通过索引按姓名查找。具体做法见[使用索引](#使用索引)一节。

### 使用键生成器

在创建对象存储时设置 `autoIncrement` 标志，会为该对象存储启用键生成器。默认不启用。

启用键生成器后，向对象存储新增值时会自动生成键。对象存储首次创建时，键生成器当前值始终设为 1。之后每次自动生成的新键，都会在前一个键基础上自增加 1。除非数据库操作被回滚（例如事务被中止），否则键生成器当前值不会减小。因此，删除记录，甚至清空对象存储，都不会影响键生成器。

我们可以像下面这样创建另一个启用键生成器的对象存储：

```js
// 打开 indexedDB。
const request = indexedDB.open(dbName, 3);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // 创建另一个名为“names”的对象存储，并将 autoIncrement 设为 true。
  const objStore = db.createObjectStore("names", { autoIncrement: true });

  // 因为“names”对象存储启用了键生成器，所以 name 的键会自动生成。添加后的记录类似于：
  // 键：1 => 值：“Bill”
  // 键：2 => 值：“Donna”
  customerData.forEach((customer) => {
    objStore.add(customer.name);
  });
};
```

关于键生成器的更多细节，请参见规范中的[键生成器](https://w3c.github.io/IndexedDB/#key-generator-construct)一节。

## 添加、检索和删除数据

在对新数据库执行任何操作前，你需要先开启事务。事务由数据库对象创建，你必须指定事务覆盖哪些对象存储。进入事务后，你就可以访问保存数据的对象存储并发起请求。接下来，你需要决定是修改数据库，还是只读取数据。事务有三种可用模式：`readonly`、`readwrite` 和 `versionchange`。

要修改数据库的“模式”或结构（包括创建或删除对象存储、索引），事务必须处于 `versionchange` 模式。这个事务通过调用指定 `version` 的 {{domxref("IDBFactory.open")}} 方法开启。

要读取已有对象存储中的记录，事务可以是 `readonly` 或 `readwrite`；要修改已有对象存储，事务必须是 `readwrite`。这类事务通过 {{domxref("IDBDatabase.transaction")}} 打开。该方法接收两个参数：`storeNames`（作用域，定义为你要访问的对象存储的数组）和事务 `mode`（`readonly` 或 `readwrite`）。方法返回事务对象，其中包含 {{domxref("IDBIndex.objectStore")}} 方法，你可以用它访问对象存储。默认情况下，如果未指定 mode，事务会以 `readonly` 模式打开。

> [!NOTE]
> 从 Firefox 40 开始，IndexedDB 事务放宽了持久性保证以提升性能（见 [Firefox bug 1112702](https://bugzil.la/1112702)）。此前在 `readwrite` 事务中，只有当所有数据都确保已刷盘时才会触发 {{domxref("IDBTransaction.complete_event", "complete")}} 事件。在 Firefox 40+ 中，`complete` 事件会在操作系统收到写入指令后触发，但此时数据可能尚未真正写入磁盘。因此 `complete` 事件可能比过去更早到达；但若在数据刷盘前操作系统崩溃或发生断电，整个事务会以极小概率丢失。由于这类灾难性事件很少见，大多数场景无需额外担心。如果你必须确保持久性（例如存储无法重算的关键数据），可使用实验性的（非标准）`readwriteflush` 模式创建事务，以强制在触发 `complete` 事件前先刷盘（见 {{domxref("IDBDatabase.transaction")}}）。

通过选择合适的事务作用域和模式，可以加速数据访问。这里有两条建议：

- 定义作用域时，只指定你需要的对象存储。这样你可以并发执行多个作用域不重叠的事务。
- 仅在必要时使用 `readwrite` 模式。你可以并发执行多个作用域重叠的 `readonly` 事务，但同一对象存储同一时刻只能有一个 `readwrite` 事务。更多信息见 [IndexedDB 的关键特性和基本术语](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology)一文中 [transaction](/zh-CN/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) 的定义。

### 向数据库添加数据

如果你刚创建了数据库，通常接下来就想写数据。写法如下：

```js
const transaction = db.transaction(["customers"], "readwrite");
// 注意：较老的实验性实现使用已弃用常量 IDBTransaction.READ_WRITE，而不是 "readwrite"。如果你要兼容这类实现，可以写成：
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

`transaction()` 函数接收两个参数（其中一个可选），并返回事务对象。第一个参数是事务要覆盖的对象存储列表。如果你想让事务覆盖全部对象存储，可以传空数组，但不要这么做，因为规范规定空数组应触发 InvalidAccessError。第二个参数若不传，得到的是只读事务。这里你要写入，所以需要传入 `"readwrite"`。

有了事务之后，你还需要理解它的生命周期。事务与事件循环紧密相关：如果创建事务后直接回到事件循环而没有使用它，事务会变为非活动状态。保持事务活动的唯一方式是在其上发起请求。请求结束后你会收到一个 DOM 事件；若请求成功，你就有机会在该回调中继续延长事务。如果你在未延长事务时返回事件循环，事务就会失活，如此往复。只要还有待处理请求，事务就保持活动。事务生命周期其实很简单，但确实需要一点时间适应。多看几个例子会有帮助。如果你开始遇到 `TRANSACTION_INACTIVE_ERR`，说明某处出错了。

事务可接收三类 DOM 事件：`error`、`abort` 和 `complete`。前面提过 `error` 会冒泡，因此事务会接收到其创建的请求产生的错误。更微妙的一点是：错误的默认行为是中止发生错误的事务。除非你先对错误事件调用 `stopPropagation()` 并另行处理，否则整个事务会回滚。这样的设计会迫使你认真考虑并处理错误；如果细粒度处理太繁琐，也可以在数据库对象上添加兜底错误处理器。如果你不处理错误事件，或调用了事务的 `abort()`，事务会回滚，并在事务上触发 `abort` 事件。否则在所有待处理请求完成后，你会收到 `complete` 事件。如果你在做大量数据库操作，跟踪事务而不是逐个跟踪请求，通常更省心。

现在你已经有事务了，接下来要从事务中获取对象存储。事务只允许你访问创建事务时指定的对象存储。然后你就可以添加所需数据。

```js
// 当所有数据都添加到数据库后执行某些操作。
transaction.oncomplete = (event) => {
  console.log("已经处理完了！");
};

transaction.onerror = (event) => {
  // 别忘了处理错误！
};

const objectStore = transaction.objectStore("customers");
customerData.forEach((customer) => {
  const request = objectStore.add(customer);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
  };
});
```

调用 `add()` 产生请求时，返回请求的 `result` 是被添加值的键。所以本例中它应等于被添加对象的 `ssn` 属性，因为该对象存储使用 `ssn` 作为键路径。注意，`add()` 要求数据库中不存在同键对象。如果你想修改已有条目，或不在意它是否已存在，可以使用 `put()`；见下文[更新数据库中的条目](#更新数据库中的条目)一节。

### 从数据库中删除数据

删除数据非常类似：

```js
const request = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers")
  .delete("444-44-4444");
request.onsuccess = (event) => {
  // 已删除！
};
```

### 从数据库中获取数据

数据库中已经有数据后，你可以用多种方式取回。最简单的是 `get()`。你需要提供键来获取对应值：

```js
const transaction = db.transaction(["customers"]);
const objectStore = transaction.objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // 处理错误！
};
request.onsuccess = (event) => {
  // 对 request.result 做些处理！
  console.log(`社保号为 444-44-4444 的顾客名为 ${request.result.name}`);
};
```

对“简单”读取来说，这段代码看起来有点长。假设你在数据库级统一处理错误，可以缩短成这样：

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`社保号为 444-44-4444 的顾客名为 ${event.target.result.name}`);
};
```

看出来了吗？因为这里只用一个对象存储，所以不必传对象存储列表，直接传名称字符串即可。另外这里只读数据，不需要 `"readwrite"` 事务。不传 mode 调用 `transaction()`，会得到 `"readonly"` 事务。还有个小细节：你不一定要把请求对象存入变量。因为 DOM 事件的 target 就是请求对象，你可以通过事件直接访问 `result`。

### 更新数据库中的条目

拿到数据后，修改并写回 IndexedDB 很简单。我们稍微改造一下前面的示例：

```js
const objectStore = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // 处理错误！
};
request.onsuccess = (event) => {
  // 获取要更新的旧值
  const data = event.target.result;

  // 更新对象中你想修改的值
  data.age = 42;

  // 将更新后的对象放回数据库
  const requestUpdate = objectStore.put(data);
  requestUpdate.onerror = (event) => {
    // 处理错误
  };
  requestUpdate.onsuccess = (event) => {
    // 成功，数据已更新！
  };
};
```

这里我们先创建 `objectStore`，并用 ssn 值（`444-44-4444`）取出客户记录。然后把结果放进变量 `data`，更新其 `age` 属性，再创建第二个请求 `requestUpdate`，将客户记录写回 `objectStore`，覆盖旧值。

> [!NOTE]
> 这里必须指定 `readwrite` 事务，因为我们要写数据库，而不仅仅是读取。

### 使用游标

使用 `get()` 的前提是你知道要查哪个键。如果你想遍历对象存储中的所有值，可以使用游标。示例如下：

```js
const objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    console.log(`社保号为 ${cursor.key} 的顾客名为 ${cursor.value.name}`);
    cursor.continue();
  } else {
    console.log("没有更多记录！");
  }
};
```

`openCursor()` 可以接收多个参数。首先，你可以用键范围对象限制取回条目的范围（稍后会介绍）。其次，你可以指定迭代方向。上例按升序遍历所有对象。游标的 success 回调稍微特殊：游标对象本身就是请求的 `result`（上面使用了简写，即 `event.target.result`）。实际键和值分别在游标对象的 `key` 和 `value` 属性上。如果要继续遍历，必须调用游标的 `continue()`。当到达数据末尾（或没有任何条目匹配 `openCursor()` 请求）时仍会触发 success 回调，只是 `result` 为 `undefined`。

使用游标的一个常见模式是取出对象存储中的所有对象并放进数组：

```js
const customers = [];

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  } else {
    console.log(`获取到所有顾客：${customers}`);
  }
};
```

> [!NOTE]
> 另外，你也可以用 `getAll()`（以及 `getAllKeys()`）处理这种情况。下面代码与上面作用完全相同：
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`获取到所有顾客：${event.target.result}`);
> };
> ```
>
> 读取游标的 `value` 属性会有性能成本，因为对象是惰性创建的。比如使用 `getAll()` 时，浏览器必须一次性创建所有对象。如果你只关心键，用游标通常比 `getAll()` 更高效。若你就是要获取对象存储全部对象的数组，那么用 `getAll()`。

### 使用索引

用 SSN 作为键来存客户数据很合理，因为 SSN 能唯一标识个人。（至于这在隐私上是不是好主意，是另一个问题，不在本文范围内。）但如果你需要按姓名查客户，就得遍历数据库中每个 SSN 直到找到目标。这种查找很慢，因此应使用索引。

```js
// 首先，确保你已在 request.onupgradeneeded 中创建索引：
// objectStore.createIndex("name", "name");
// 否则会抛出 DOMException。

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna 的社保号为 ${event.target.result.ssn}`);
};
```

“name”索引不是唯一索引，因此 `name` 为 `"Donna"` 的条目可能不止一条。此时你总会拿到键值最小的那一条。

如果你要访问某个 `name` 的所有条目，可以使用游标。你可以在索引上打开两类游标：普通游标将索引属性映射到对象存储中的对象；键游标将索引属性映射到对象在对象存储中的键。区别如下：

```js
// 用普通游标拿到完整客户记录对象
index.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key 是名字（如“Bill”），cursor.value 是完整对象。
    console.log(
      `Name：${cursor.key}，SSN：${cursor.value.ssn}，email：${cursor.value.email}`,
    );
    cursor.continue();
  }
};

// 用键游标拿到客户记录对象的键
index.openKeyCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key 是名字（如“Bill”），cursor.primaryKey 是 SSN。
    // 无法直接拿到已存对象的其余部分。
    console.log(`Name：${cursor.key}，SSN：${cursor.primaryKey}`);
    cursor.continue();
  }
};
```

索引也可以基于多个属性创建，从而按值组合查询记录，例如同时按姓名和邮箱查找某人。创建复合索引时，在调用 `createIndex` 时把属性名数组作为键路径传入。之后查询时再按同样顺序传入值数组。

先确保你在 `request.onupgradeneeded` 中创建了索引：

```js
const index = objectStore.createIndex("name_email", ["name", "email"]);
```

随后可以这样查询：

```js
const index = objectStore.index("name_email");

index.get(["Donna", "donna@home.org"]).onsuccess = (event) => {
  console.log(event.target.result);
  // {ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org'}
};
```

### 指定游标的范围和方向

如果你希望限制游标可见值的范围，可以创建 `IDBKeyRange` 对象，并把它作为第一个参数传给 `openCursor()` 或 `openKeyCursor()`。你可以创建仅允许单个键的范围，也可以创建只有下界、只有上界、或同时有上下界的范围。边界可为“闭区间”（即包含给定值）或“开区间”（即不包含给定值）。用法如下：

```js
// 仅匹配 "Donna"
const singleKeyRange = IDBKeyRange.only("Donna");

// 匹配所有大于等于 "Bill" 的值
const lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// 匹配所有大于 "Bill" 的值，不包括 "Bill"
const lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// 匹配所有小于 "Donna" 的值，不包括 "Donna"
const upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

// 匹配 "Bill" 到 "Donna" 之间的值，但不包括 "Donna"
const boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

// 使用键范围时，将其作为 openCursor()/openKeyCursor() 的第一个参数
index.openCursor(boundKeyRange).onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 处理匹配结果。
    cursor.continue();
  }
};
```

有时你可能希望按降序而非升序（所有游标默认方向）迭代。切换方向的方法是给 `openCursor()` 的第二个参数传 `prev`：

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 处理条目。
    cursor.continue();
  }
};
```

如果你只想改变方向而不限制结果，第一个参数直接传 `null` 即可：

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 处理条目。
    cursor.continue();
  }
};
```

由于“name”索引不是唯一索引，可能出现多个条目 `name` 相同。注意这种情况不会发生在对象存储上，因为对象存储键必须唯一。如果你希望在索引游标迭代时过滤重复项，可将方向参数设为 `nextunique`（反向时用 `prevunique`）。使用 `nextunique` 或 `prevunique` 时，始终返回键值最小的条目。

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 处理条目。
    cursor.continue();
  }
};
```

有效方向参数请参见“[IDBCursor 常量](/zh-CN/docs/Web/API/IDBCursor#常量)”。

## 当 Web 应用在另一个标签页打开时发生版本变更

当你的 Web 应用发生需要数据库版本变更的更新时，需要考虑这样的场景：用户在一个标签页打开旧版应用，又在另一个标签页加载新版应用。调用 `open()` 且版本号高于当前数据库实际版本时，必须等待其他已打开数据库明确确认请求，你才能开始修改数据库（在它们关闭或重载之前会持续触发 `onblocked` 事件）。流程如下：

```js
const openReq = mozIndexedDB.open("MyTestDatabase", 2);

openReq.onblocked = (event) => {
  // 如果其他标签页已打开该数据库，必须先关闭它们，我们才能继续。
  console.log("请关闭本网站的其他标签页！");
};

openReq.onupgradeneeded = (event) => {
  // 其他数据库都已关闭，开始设置。
  db.createObjectStore(/* … */);
  useDatabase(db);
};

openReq.onsuccess = (event) => {
  const db = event.target.result;
  useDatabase(db);
};

function useDatabase(db) {
  // 一定要添加处理器：当其他页面请求版本变更时可收到通知。我们必须关闭数据库，以便另一个页面完成升级。否则升级会一直卡住，直到用户关闭当前标签页。
  db.onversionchange = (event) => {
    db.close();
    console.log("本页面的一个新版本已就绪，请刷新网页以加载！");
  };

  // 使用数据库执行操作。
}
```

你还应监听 `VersionError` 错误，以处理这种情况：已打开应用可能在后续代码中再次尝试打开数据库，但使用的是过时版本。

## 安全

IndexedDB 使用同源原则，这意味着它与创建它的站点源绑定（通常是站点域名或子域名），因此不能被其他源访问。

如果浏览器被设置为[从不接受第三方 Cookie](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection)（见 [Firefox bug 1147821](https://bugzil.la/1147821)），第三方窗口内容（例如 {{htmlelement("iframe")}} 内容）将无法访问 IndexedDB。

## 关于浏览器关闭的警告

当浏览器关闭（用户选择 Quit 或 Exit）、承载数据库的磁盘意外移除，或数据库存储权限丢失时，会发生以下情况：

1. 每个受影响数据库上的每个事务（若是浏览器关闭场景，则为所有打开数据库）都会以 `AbortError` 中止。效果等同于对每个事务调用 {{domxref("IDBTransaction.abort()")}}。
2. 所有事务完成后，数据库连接会被关闭。
3. 最后，表示该数据库连接的 {{domxref("IDBDatabase")}} 对象会收到 {{domxref("IDBDatabase/close_event", "close")}} 事件。你可以通过 {{domxref("IDBDatabase.close_event", "IDBDatabase.onclose")}} 事件处理器监听这些事件，从而知道数据库何时被意外关闭。

上述行为是新增行为，仅在以下浏览器版本及之后可用：Firefox 50、Google Chrome 31（大致）。

在这些版本之前，事务会静默中止，且不会触发 {{domxref("IDBDatabase/close_event", "close")}} 事件，因此无法检测数据库意外关闭。

由于用户可以随时退出浏览器，这意味着你不能依赖某个特定事务一定完成；在旧浏览器中，甚至不会告诉你事务没完成。这会带来一些影响。

第一，你应确保数据库在每次事务结束时都保持一致状态。比如你用 IndexedDB 存一个可编辑列表，编辑后通过“先清空对象存储，再写入新列表”来保存。如果把清空和写入放在两个事务中，浏览器可能在清空后、写入前关闭，导致数据库被清空。要避免这种情况，应把清空和写入放在同一个事务里。

第二，不要把数据库事务绑在 unload 事件上。如果 unload 由浏览器关闭触发，在 unload 处理器中创建的事务永远不会完成。一种看似直观的做法是：浏览器（或页面）打开时从数据库读取信息，用户交互时更新信息，浏览器（或页面）关闭时再写回数据库。但这行不通。事务会在 unload 处理器中创建，但由于其异步特性，会在执行前就被中止。

事实上，即使是浏览器正常关闭，也无法保证 IndexedDB 事务一定完成。见 [Firefox bug 870645](https://bugzil.la/870645)。作为常规关闭通知的折中方案，你可以跟踪事务，并在 `beforeunload` 时若仍有未完成事务则提示用户。

至少在加入中止通知与 {{domxref("IDBDatabase.close_event", "IDBDatabase.onclose")}} 后，你能够知道这种情况何时发生。

## 完整 IndexedDB 示例

我们提供了一个完整的 IndexedDB API 示例。该示例使用 IndexedDB 存储并检索出版物数据。

- [尝试示例](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [查看源代码](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## 参见

如果你希望了解更多，可继续阅读以下资料。

### 参考

- [IndexedDB API 参考](/zh-CN/docs/Web/API/IndexedDB_API)
- [Indexed Database API 规范](https://w3c.github.io/IndexedDB/)
- Firefox 源码中的 IndexedDB [接口文件](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true)

### 教程和指南

- [将 IndexedDB 中的数据绑定到 UI 元素（2012）](https://web.developers.google.cn/articles/indexeddb-uidatabinding)
- [IndexedDB——浏览器中的存储](<https://learn.microsoft.com/zh-cn/previous-versions/msdn10/gg679063(v=msdn.10)>)

### 库

- [localForage](https://localforage.github.io/localForage/)：为用于客户端数据存储提供简单的 name:value 语法的一个 polyfill。它底层使用 IndexedDB；若浏览器不支持 IndexedDB，则回退到 Web SQL（已弃用），再回退到 localStorage。
- [Dexie.js](https://dexie.org/)：IndexedDB 的封装库，提供清晰简洁语法，可显著提升开发效率。
- [JsStore](https://jsstore.net/)：一个简单且高级的 IndexedDB 封装，提供类 SQL 语法。
- [MiniMongo](https://github.com/mWater/minimongo)：客户端内存版 MongoDB，由 localstorage 持久化，并通过 HTTP 与服务端同步。MiniMongo 被 MeteorJS 使用。
- [PouchDB](https://pouchdb.com/)：在浏览器中基于 IndexedDB 实现 CouchDB 的客户端。
- [IDB](https://github.com/jakearchibald/idb)：一个很小的库，基本镜像 IndexedDB API，同时做了少量可用性改进。
- [idb-keyval](https://www.npmjs.com/package/idb-keyval)：一个超小型（约 600B）基于 Promise 的键值存储，底层实现为 IndexedDB。
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db)：一个微型（约 1.3kB）TypeScript facade，提供 Promise API 和自动迁移。
- [RxDB](https://rxdb.info/)：可构建在 IndexedDB 之上的 NoSQL 客户端数据库，支持索引、压缩和复制，并为 IndexedDB 增加跨标签页能力与可观察性。
