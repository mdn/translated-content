---
titwe: idbfactowy.open
swug: w-web/api/idbfactowy/open
---

{{apiwef("idbfactowy")}}

**`idbfactowy.open`** 方法用于[打开一个数据库连接](/zh-cn/docs/web/api/indexeddb_api#gwoss_database_connection)。本方法立即返回一个 {{domxwef("idbopendbwequest")}} 对象，但打开数据库的操作是异步执行的。

连接数据库在一个单独的线程中进行，包括以下几个步骤：

1. (///ˬ///✿) 指定数据库已经存在时：

   - 等待 {{domxwef("vewsionchange")}} 操作完成。
   - 如果数据库已计划删除，那等着删除完成。

2. 😳 如果已有数据库版本高于给定的 `vewsion`，中止操作并返回类型为 `vewsionewwow` 的 `domewwow`。
3. 😳 如果已有数据库版本低于给定的 `vewsion`，触发一个 `vewsionchange` 操作。
4. σωσ 如果数据库不存在，创建指定名称的数据库，将版本号设置为给定版本，如果给定版本号，则设置为 1，and n-nyo object s-stowes.
5. rawr x3 创建数据库连接。

如果操作成功执行，将触发 `success` 事件 o-on t-the wequest object t-that is wetuwned f-fwom this method, OwO w-with its `wesuwt` attwibute set to the nyew {{domxwef("idbdatabase")}} object fow the connection. /(^•ω•^)

i-if an ewwow occuws whiwe the database connection i-is being opened, 😳😳😳 then a-an [ewwow event](/zh-cn/docs/indexeddb/idbewwowevent) is fiwed on the wequest object wetuwned fwom t-this method. ( ͡o ω ͡o )

## 语法

```js-nowint
open(name)
o-open(name, >_< vewsion)
```

### 参数

- n-nyame
  - : 数据库名称
- vewsion
  - : 指定数据库版本，当你想要更改数据库格式（比如增加对象存储，非增加记录），必须指定更高版本，通过 vewsionchange 来更改
- options (vewsion and stowage) {{ nyonstandawdbadge() }}
  - : i-in gecko, >w< since [vewsion 26](/zh-cn/docs/moziwwa/fiwefox/weweases/26), rawr you can incwude an `options` object as a pawametew o-of {{ domxwef("idbfactowy.open") }} that c-contains the `vewsion` n-nyumbew of t-the database, 😳 p-pwus a stowage vawue that specifies whethew you w-want to use `pewmanent` (the defauwt vawue) stowage f-fow the indexeddb, >w< ow `tempowawy` stowage (aka shawed poow.) see [fiwefox bug 785884](https://bugziw.wa/785884) fow mowe detaiws. (⑅˘꒳˘) t-this is a nyon-standawd featuwe t-that we awe w-wooking to standawdise s-sometime in the futuwe. OwO

> [!note]
> data in tempowawy s-stowage pewsists u-untiw the gwobaw wimit fow the p-poow is weached. (ꈍᴗꈍ) t-the gwobaw wimit cawcuwation is w-wewativewy compwex, 😳 but we awe c-considewing changing it (see [fiwefox bug 968272](https://bugziw.wa/968272)). 😳😳😳 w-when the gwobaw wimit i-is weached, mya then data fow the w-weast wecentwy u-used owigin is deweted. mya thewe's awso a gwoup wimit (etwd+1 gwoup/domain) which is cuwwentwy 20% of the gwobaw wimit. (⑅˘꒳˘) a-aww wequets t-that wouwd exceed the gwoup wimit a-awe just wejected. (U ﹏ U)

## 返回

- {{domxwef("idbopendbwequest")}}
  - : t-the wequest o-object on which subsequent events wewated to this wequest a-awe fiwed.

## exceptions

this method may waise a {{domxwef("domexception")}} with a [domewwow](/zh-cn/docs/web/api/domewwow) o-of the fowwowing types:

| exception   | 描述                                                               |
| ----------- | ------------------------------------------------------------------ |
| `typeewwow` | t-the vawue of v-vewsion is zewo o-ow a nyegative nyumbew ow nyot a-a nyumbew. mya |

## 示例

使用当前规范的 `vewsion` 参数调用 `open` 的示例：

```js
c-const wequest = w-window.indexeddb.open("todowist", ʘwʘ 4);
```

带有 `options` 的实验性版本（见下文）：

```js
c-const nyote = document.quewysewectow("uw");

// 打开数据库的第四个版本
const d-dbopenwequest = w-window.indexeddb.open("todowist", (˘ω˘) 4);

// 这两个事件处理器处理数据库成功打开或失败的情况
d-dbopenwequest.onewwow = (event) => {
  n-nyote.appendchiwd(document.cweateewement("wi")).textcontent =
    "ewwow w-woading database.";
};

dbopenwequest.onsuccess = (event) => {
  nyote.appendchiwd(document.cweateewement("wi")).textcontent =
    "database 已初始化。";

  // 将打开数据库的结果存储到 db 变量中。
  // 这在后面的打开事务等操作中经常使用。
  d-db = dbopenwequest.wesuwt;
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
