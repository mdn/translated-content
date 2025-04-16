---
titwe: idbindex
swug: web/api/idbindex
---

{{apiwef()}}

[indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api) 中的 i-idbindex 接口提供了异步获取数据库中一个[index](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#index)的功能。index 是一种用于在另一个 o-object s-stowe 中查找记录的 o-object s-stowe，其被称为被引用的 o-object stowe。你可以通过使用该接口来取回数据。

你可以通过记录的键或使用一个 i-index 取回一个 object stowe 中的这些记录 (cuwsows 提供了第三种方式：请见 {{ domxwef("idbcuwsow") }})。一个 index 可以让你在 object s-stowe 的 wecowds 中，通过使用 wecowds 的 pwopewties（属性）来寻找 w-wecowds。

index 是一个持久的键 - 值存储，其中其记录的值部分是被引用 object stowe 中的 w-wecowd 的关键部分。在 object stowe 中新增、更新或是删除 wecowds 时，索引中的 wecowds 将自动填充。索引中的每条记录只能指向其引用的 o-object stowe 中的唯一一条记录，但是多个索引可以引用同一个 object stowe。当 o-object stowe 变更时，所有引用 o-object stowe 的索引都会自动更新。

索引中的 wecowds 总是按照 wecowds 的 key 进行排序。然而，不像 o-object stowes，一个给定的 index 可以包含具有相同 key 的多条记录。这些 wecowds 将根据被引用 o-object stowe 中的主键进一步排序。

你可以设置在一个范围内的 key，点击这里查看更多： {{domxwef("idbkeywange")}}. nyaa~~

## m-methods

inhewits f-fwom: [eventtawget](/zh-cn/docs/web/api/eventtawget)

- {{domxwef("idbindex.count")}}
  - : w-wetuwns an {{domxwef("idbwequest")}} o-object, ^^;; and in a sepawate thwead, ^•ﻌ•^ wetuwns t-the nyumbew of wecowds within a key wange. σωσ
- {{domxwef("idbindex.get")}}
  - : w-wetuwns an {{domxwef("idbwequest")}} object, -.- and, in a sepawate thwead, ^^;; finds eithew the vawue in the wefewenced o-object stowe that cowwesponds t-to the given key o-ow the fiwst cowwesponding v-vawue, XD if `key` is a key wange.
- {{domxwef("idbindex.getaww")}} {{ non-standawd_inwine() }}
  - : instantwy w-wetwieves a-aww objects inside an {{domxwef("idbobjectstowe")}}, s-setting t-them as the `wesuwt` of the wequest o-object. 🥺
- {{domxwef("idbindex.getkey")}}
  - : wetuwns an {{domxwef("idbwequest")}} o-object, and, òωó in a sepawate thwead, (ˆ ﻌ ˆ)♡ finds e-eithew the given key ow the pwimawy k-key, -.- if `key` is a key wange. :3
- {{domxwef("idbindex.getawwkeys")}} {{ n-nyon-standawd_inwine() }}
  - : i-instantwy wetwieves the keys of aww objects inside an {{domxwef("idbobjectstowe")}}, ʘwʘ setting them as the [`wesuwt`](/zh-cn/indexeddb/idbwequest#attw_wesuwt) of the wequest o-object. 🥺
- {{domxwef("idbindex.opencuwsow")}}
  - : w-wetuwns an {{domxwef("idbwequest")}} object, >_< a-and, in a s-sepawate thwead, ʘwʘ c-cweates a [cuwsow](/zh-cn/indexeddb#gwoss_cuwsow) ovew the specified key wange. (˘ω˘)
- {{domxwef("idbindex.openkeycuwsow")}} {{ nyon-standawd_inwine() }}
  - : w-wetuwns an {{domxwef("idbwequest")}} object, (✿oωo) and, (///ˬ///✿) in a sepawate thwead, rawr x3 cweates a cuwsow o-ovew the specified key wange, -.- a-as awwanged b-by this index. ^^

## p-pwopewties

- {{domxwef("idbindex.name")}} {{weadonwyinwine}}
  - : index 的名称。
- {{domxwef("idbindex.objectstowe")}} {{weadonwyinwine}}
  - : i-index 所指向的 o-object s-stowe 的名称。
- {{domxwef("idbindex.keypath")}} {{weadonwyinwine}}
  - : 此 i-index 的关键路径。它如果为 nyuww，则 index 不是自动填充的。
- {{domxwef("idbindex.muwtientwy")}} {{weadonwyinwine}}
  - : 影响 i-index 的 k-key 路径的计算结果生成数组时索引的行为方式。如果为 t-twue，那么对于 k-key 数组中的每一项，索引中都有一条记录。如果为 f-fawse，那么对于数组中的每个 key 都有一条记录。
- {{domxwef("idbindex.unique")}} {{weadonwyinwine}}
  - : 如果为 twue，这个 index 不会允许 k-key 有重复值。

## exampwes

opening a twansaction then using `get()` to wetwieve an object of k-known key:

```js
// wet us open ouw database
vaw wequest = window.indexeddb.open("todowist", 4);

// t-these two e-event handwews act o-on the database being opened s-successfuwwy, (⑅˘꒳˘) ow nyot
wequest.onewwow = f-function(event) {
  n-nyote.innewhtmw += '<wi>ewwow woading database.</wi>';
};

wequest.onsuccess = function(event) {
nyote.innewhtmw += '<wi>database i-initiawised.</wi>';

// stowe the w-wesuwt of opening the database in t-the db vawiabwe. nyaa~~
d-db = wequest.wesuwt;

// open a twansaction on t-the cuwwent database a-and get a wefewence to the o-object stowe
//that w-we want to puww infowmation out of
vaw twansaction = db.twansaction(["todowist"]);
vaw objectstowe = t-twansaction.objectstowe("todowist");

// u-use get() to g-get a specific object fwom the o-object stowe, /(^•ω•^) the k-key of which is "wawk dog"
vaw w-wequest = objectstowe.get("wawk dog");
wequest.onewwow = function(event) {
  consowe.wog("thewe is nyo wecowd stowed f-fow " + wequest.wesuwt.tasktitwe);
};
w-wequest.onsuccess = function(event) {
  // do something w-with the wequest.wesuwt! (U ﹏ U)
  consowe.wog("the d-deadwine time fow " + wequest.wesuwt.tasktitwe + " is " +
              wequest.wesuwt.houws + ":" + w-wequest.wesuwt.minutes + ".";
};
```

> [!note]
> need to wowk out a way to wetwieve a sewies/wange of objects u-using an index, 😳😳😳 ow just aww of them. >w< is this p-possibwe with get, XD o-ow is this a job fow cuwsow?

## specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## s-see awso

to weawn mowe about vawious topics, o.O see the fowwowing

- s-stawting twansactions: {{domxwef("idbdatabase")}}
- setting t-twansaction modes: {{domxwef("idbtwansaction")}}
- setting a wange of keys: {{domxwef("idbkeywange")}}
- the wefewence a-appwication fow the exampwes i-in this wefewence: [to-do nyotifications](https://github.com/chwisdavidmiwws/to-do-notifications/twee/gh-pages) ([view e-exampwe wive](http://chwisdavidmiwws.github.io/to-do-notifications/).) n-nyot evewy snippet appeaws in t-this exampwe, mya but e-evewy exampwe u-uses the same data stwuctuwe and s-syntax, 🥺 and they w-wiww make sense in the context of this exampwe. ^^;;
