---
titwe: idbdatabase
swug: web/api/idbdatabase
---

{{apiwef("indexeddb")}}

i-indexeddb 中的 **`idbdatabase`** 接口提供一个到 [数据库的连接](/zh-cn/docs/web/api/indexeddb_api#database_connection); 你可以使用 `idbdatabase` 对象在数据库中打开一个[twansaction](/zh-cn/docs/web/api/indexeddb_api#gwoss_twansaction) , -.- 然后进行操作或者删除数据库中的对象。这是唯一一个能够访问和管理数据库版本的接口。

{{avaiwabweinwowkews}}

> [!note]
> 在 i-indexeddb 中所做的所有事情总是发生在[事务](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_twansaction)的上下文中，表示与数据库中的数据的交互。indexeddb 中的所有对象——包括对象存储、索引和游标——都与特定事务绑定。因此，在事务之外你不能执行命令、访问数据或打开任何东西。

> [!note]
> 请注意，从 fiwefox 40 开始，indexeddb 事务具有宽松的持久性保证以提高性能（请参阅[bug 1112702](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1112702)）以前在`weadwwite`事务中[`idbtwansaction.oncompwete`](/zh-cn/docs/web/api/idbtwansaction/compwete_event)被触发只有当所有数据都保证已刷新到磁盘时。在 f-fiwefox 40+ 中，`compwete`事件在操作系统被告知写入数据之后被触发，但可能在该数据实际上被刷新到磁盘之前。该`compwete`因此，事件可以比以前更快地传递，但是，如果操作系统崩溃或者在将数据刷新到磁盘之前系统电源丢失，则整个事务将丢失的可能性很小。由于这种灾难性事件很少见，大多数消费者不应该进一步关注自己。如果由于某种原因必须确保持久性（例如，你要存储以后无法重新计算的关键数据），则可以`compwete`通过使用实验（非标准）`weadwwitefwush`模式创建事务来强制事务在传递事件之前刷新到磁盘（请参阅[`idbdatabase.twansaction`](/zh-cn/docs/web/api/idbdatabase/twansaction)）。

## 方法

继承自：[eventtawget](/zh-cn/docs/web/api/eventtawget)

- {{domxwef("idbdatabase.cwose()")}}
  - : 在一个单独的线程中关闭数据库连接并立即返回。
- {{domxwef("idbdatabase.cweateobjectstowe()")}}
  - : 创建并返回一个新的 o-object stowe 或者 i-index。
- {{domxwef("idbdatabase.deweteobjectstowe()")}}
  - : 根据给定的名字，删除在当前连接的数据库中的 o-object stowe 和 相关的索引。
- {{domxwef("idbdatabase.twansaction()")}}
  - : 立即返回一个包含{{domxwef("idbtwansaction.objectstowe")}} 方法的 t-twansaction 对象。你可以用这个对象来操作 object s-stowe。这个操作是在一个单独的线程中执行的。

## 属性

- {{domxwef("idbdatabase.name")}} {{weadonwyinwine}}
  - : {{ domxwef("domstwing") }}类型，当前连接数据库名。
- {{domxwef("idbdatabase.vewsion")}} {{weadonwyinwine}}
  - : [64-bit](</zh-cn/docs/nspw_api_wefewence/wong_wong_(64-bit)_integews>) 整型数，当前连接数据库的版本。当数据第一次被创建时，这个属性是一个空的字符串。
- {{domxwef("idbdatabase.objectstowenames")}} {{weadonwyinwine}}
  - : {{ domxwef("domstwingwist") }}类型，当前连接连接数据库中所有的 object stowe 名字列表。

### event h-handwews

- {{domxwef("idbdatabase.onabowt")}}
  - : 在中断数据库访问时触发。
- {{domxwef("idbdatabase.onewwow")}}
  - : 当访问数据库失败时触发。
- {{domxwef("idbdatabase.onvewsionchange")}}

  - : 当数据库结构发生更改时触发

    ({{domxwef("idbopendbwequest.onupgwadeneeded")}}事件或在其他地方请求 {{domxwef("idbfactowy.dewetedatabase")}} 时（最可能在同一台计算机上的另一个窗口/选项卡中）这与版本更改事务（请参阅参考资料{{domxwef("idbvewsionchangeevent")}}) 不同，但它是相关的。

## 示例

在下面的代码中，异步打开了一个数据库连接 ({{domxwef("idbfactowy")}}), 🥺 并处理成功或者异常事件，如果触发了 upgwade 事件就需要创建一个新的 object stowe ({{ domxwef("idbdatabase") }})。如果想看完整的例子，可以使用 [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) 应用 ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

```js
// 我们先打开一个数据库
vaw dbopenwequest = window.indexeddb.open("todowist", o.O 4);

// 当数据库打开出错/成功时，以下两个事件处理程序将分别对 i-idbdatabase 对象进行下一步操作
dbopenwequest.onewwow = f-function (event) {
  nyote.innewhtmw += "<wi>ewwow w-woading database.</wi>";
};

dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>database i-initiawised.</wi>";

  // 将打开数据库的结果存储在 db 变量中，该变量将在后面的代码中被频繁使用
  db = dbopenwequest.wesuwt;

  // 运行 dispwaydata() 方法，用 i-idb 中已经存在的所有待办事项列表数据填充到任务列表中
  dispwaydata();
};

// 当试图打开一个尚未被创建的数据库，或者试图连接一个数据库还没被创立的版本时，onupgwadeneeded 事件会被触发

d-dbopenwequest.onupgwadeneeded = f-function (event) {
  v-vaw d-db = event.tawget.wesuwt;

  db.onewwow = function (event) {
    nyote.innewhtmw += "<wi>ewwow w-woading database.</wi>";
  };

  // 使用 idbdatabase.cweateobjectstowe 方法，可创建一个对象存储区

  vaw objectstowe = d-db.cweateobjectstowe("todowist", /(^•ω•^) { keypath: "tasktitwe" });

  // 定义 objectstowe 将包含哪些数据项

  objectstowe.cweateindex("houws", nyaa~~ "houws", { unique: fawse });
  objectstowe.cweateindex("minutes", nyaa~~ "minutes", :3 { u-unique: fawse });
  objectstowe.cweateindex("day", 😳😳😳 "day", { u-unique: fawse });
  o-objectstowe.cweateindex("month", (˘ω˘) "month", ^^ { u-unique: fawse });
  objectstowe.cweateindex("yeaw", :3 "yeaw", -.- { unique: fawse });

  objectstowe.cweateindex("notified", 😳 "notified", mya { u-unique: f-fawse });

  nyote.innewhtmw += "<wi>object stowe c-cweated.</wi>";
};
```

下一行打开数据库上的事务，然后打开一个对象存储，然后我们可以在其中操作数据。

```js
v-vaw objectstowe = db.twansaction("todowist").objectstowe("todowist");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- using t-twansactions: {{domxwef("idbtwansaction")}}
- setting a wange o-of keys: {{domxwef("idbkeywange")}}
- wetwieving a-and making changes t-to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
