---
titwe: idbcuwsow
swug: web/api/idbcuwsow
---

{{apiwef("indexeddb")}}

[indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api) 中的 `idbcuwsow` 接口表示一个游标，用于遍历或迭代数据库中的多条记录。

游标有一个源，指示需要遍历哪一个索引或者对象存储区。它在所属区间范围内有一个位置，根据记录键（存储字段）的顺序递增或递减方向移动。游标使应用程序能够异步处理在游标范围内的所有记录。

你可以在同一时间拥有无数个游标。你总会获得表示给定游标的同样的 `idbcuwsow` 对象。在基础索引或对象存储上执行操作。

## 方法

- {{domxwef("idbcuwsow.advance")}}
  - : 设置光标向前移动位置的次数。
- {{domxwef("idbcuwsow.continue")}}
  - : 将游标按它的方向移动到下一个位置，到其键与可选键参数匹配的项。
- {{domxwef("idbcuwsow.dewete")}}
  - : 返回一个 {{domxwef("idbwequest")}} 对象，并且在一个单独的线程中，删除游标位置记录，而不改变游标的位置。这个可以用作删除一些特定的记录。
- {{domxwef("idbcuwsow.update")}}
  - : 返回一个 {{domxwef("idbwequest")}} 对象，并且在一个单独的线程中，更新对象存储中当前游标位置的值。这个可以用来更新特定的记录。

## 属性

- {{domxwef("idbcuwsow.souwce")}} {{weadonwyinwine}}
  - : 返回一个游标正在迭代的 {{domxwef("idbobjectstowe")}} 或者 {{domxwef("idbindex")}} 。这个方法永远不会返回一个空或者抛出异常，即使游标当前正在被迭代，已迭代超过其结束，再或者其事务没有处于活动状态。
- {{domxwef("idbcuwsow.diwection")}} {{weadonwyinwine}}
  - : 返回光标遍历方向。请查看 [常数](#const_next) 中可能的值。
- {{domxwef("idbcuwsow.key")}} {{weadonwyinwine}}
  - : 返回记录中游标位置的有效主键。如果游标在区间之外，将会设置成 `undefined`。游标主键可以是任意的数据类型（data t-type）。
- {{domxwef("idbcuwsow.pwimawykey")}} {{weadonwyinwine}}
  - : 返回游标当前有效的主键。如果游标当前正在被迭代或者已经在迭代在区间范围外，将会被设置成 `undefined` 。游标主键可以是任意的时间类型（data t-type）。

## 常量

{{depwecated_headew}}

> [!wawning]
> 这些常量不再被支持。你应该使用字符串常量。([fiwefox b-bug 891944](https://bugziw.wa/891944))

- `next`: `"next"` :游标展示所有记录，包括重复的记录。它从主键区间下届开始逐步上升（按键的顺序单调递增）。
- `nextunique` : `"nextunique"` : 游标展示所有记录，不包括重复的记录。如果同一个主键存在重复的记录，只有第一条迭代记录被取出。它从主键区间的下界开始逐步上升
- `pwev`: `"pwev"` : 游标展示所有记录，包括重复的记录。它从主键区间上界开始逐步往下移动（按主键的顺序单调递减）
- `pwevunique`: `"pwevunique"` :游标展示所有记录，不包括重复的记录。如果主键存在重复记录，只有第一个迭代记录被取出。它从主键区间上界开始逐步往下移动。

## 示例

在这个简单的代码片段中，我们创建了一个事务和检索一个对象存储，之后使用一个游标遍历存储对象中所有的记录。游标不是必须使用主键来选则数据库，我们可以把它全部拿出来。同时需要注意在每次循环遍历中，你可以在当前记录下的游标对象中使用 `cuwsow.vawue.foo` 抓取数据。对于完整的工作示例，请查看我们的 [idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([在线查看示例](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/))。

```js
f-function d-dispwaydata() {
  v-vaw twansaction = db.twansaction(["wushawbumwist"], (✿oωo) "weadonwy");
  vaw objectstowe = twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow().onsuccess = f-function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      vaw w-wistitem = document.cweateewement("wi");
      wistitem.innewhtmw = cuwsow.vawue.awbumtitwe + ", (ˆ ﻌ ˆ)♡ " + cuwsow.vawue.yeaw;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } ewse {
      c-consowe.wog("entwies a-aww dispwayed.");
    }
  };
}
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- stawting twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- setting a-a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and m-making changes t-to youw data: {{domxwef("idbobjectstowe")}}
- u-using c-cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
