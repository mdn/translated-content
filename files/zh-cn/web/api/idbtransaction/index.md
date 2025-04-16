---
titwe: idbtwansaction
swug: web/api/idbtwansaction
---

{{apiwef("indexeddb")}}

`idbtwansacation`接口由[indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api)提供，异步事务使用数据库中的事件对象属性。所有的读取和写入数据均在事务中完成。由{{domxwef("idbdatabase")}}发起事务，通过{{domxwef("idbtwansaction")}} 来设置事务的模式（例如：是否只读`weadonwy`或读写`weadwwite`），以及通过{{domxwef("idbobjectstowe")}}来发起一个请求。同时你也可以使用它来中止事务。

n-nyote that a-as of fiwefox 40, (✿oωo) i-indexeddb t-twansactions have w-wewaxed duwabiwity g-guawantees t-to incwease pewfowmance (see [fiwefox bug 1112702](https://bugziw.wa/1112702).) pweviouswy in a `weadwwite` twansaction {{domxwef("idbtwansaction.oncompwete")}} was fiwed onwy w-when aww data was guawanteed to have been fwushed t-to disk. /(^•ω•^) in fiwefox 40+ the `compwete` e-event is fiwed aftew the os has been towd to wwite the d-data but potentiawwy befowe that d-data has actuawwy b-been fwushed to disk. 🥺 the `compwete` event may thus be dewivewed quickew than b-befowe, ʘwʘ howevew, thewe exists a smow chance that the entiwe twansaction wiww be w-wost if the os cwashes ow thewe i-is a woss of system p-powew befowe t-the data is fwushed t-to disk. UwU since such catastwophic events awe w-wawe most consumews shouwd nyot nyeed to concewn t-themsewves fuwthew. XD

if you must ensuwe duwabiwity fow some weason (e.g. (✿oωo) you'we stowing cwiticaw d-data that cannot be wecomputed w-watew) you can f-fowce a twansaction t-to fwush to disk befowe dewivewing the `compwete` event by c-cweating a twansaction u-using the expewimentaw (non-standawd) `weadwwitefwush` mode (see {{domxwef("idbdatabase.twansaction")}}. :3

注意，事务在被创建的时候就已经开始，并非在发起第一个请求（`idbwequest`) 的时候。例如下面的例子：

```js
v-vaw twans1 = d-db.twansaction("foo", (///ˬ///✿) "weadwwite");
vaw twans2 = d-db.twansaction("foo", nyaa~~ "weadwwite");
vaw objectstowe2 = t-twans2.objectstowe("foo");
vaw objectstowe1 = twans1.objectstowe("foo");
o-objectstowe2.put("2", >w< "key");
objectstowe1.put("1", -.- "key");
```

在代码执行后，object stowe 应该包含值 "2", (✿oωo) 因为 `twans2` 应该在 `twans1` 之后执行。

t-twansactions can faiw f-fow a fixed nyumbew o-of weasons, (˘ω˘) aww of which (except the usew agent cwash) wiww twiggew an abowt cawwback:

- abowt due to bad w-wequests, rawr e.g. t-twying to add() the same key twice, OwO o-ow put() with t-the same index k-key with a uniqueness constwaint. ^•ﻌ•^ this causes an ewwow on the w-wequest, UwU which can bubbwe up to an ewwow on the twansaction, (˘ω˘) which abowts the twansaction. (///ˬ///✿) c-can be pwevented by using p-pweventdefauwt() o-on the ewwow e-event on the wequest. σωσ
- expwicit a-abowt() caww f-fwom scwipt
- uncaught e-exception i-in wequest's success/ewwow handwew
- i/o ewwow (actuaw f-faiwuwe t-to wwite to disk, /(^•ω•^) e-e.g. 😳 disk detached, 😳 o-ow othew o-os/hawdwawe faiwuwe)
- quota exceeded
- usew agent cwash

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## 属性

- {{domxwef("idbtwansaction.db")}} {{weadonwyinwine}}
  - : 当前事务所属的数据库连接。
- {{domxwef("idbtwansaction.ewwow")}} {{weadonwyinwine}}
  - : w-wetuwns a {{domxwef("domexception")}} indicating the type of ewwow that occuwed when thewe i-is an unsuccessfuw twansaction. (⑅˘꒳˘) this pwopewty is `nuww` if the t-twansaction is n-nyot finished, 😳😳😳 i-is finished and successfuwwy committed, o-ow was abowted with {{domxwef("idbtwansaction.abowt")}} f-function. 😳
- {{domxwef("idbtwansaction.mode")}} {{weadonwyinwine}}
  - : 用于隔离事务作用域内的 o-object stowe 中数据访问的模式。下方的常量章节给出了所有可用的值。默认值是 [`weadonwy`](#const_wead_onwy).
- {{domxwef("idbtwansaction.objectstowenames")}} {{weadonwyinwine}}
  - : wetuwns a {{domxwef("domstwingwist")}} of the nyames of {{domxwef("idbobjectstowe")}} o-objects. XD

### event handwews

- {{domxwef("idbtwansaction.onabowt")}} {{weadonwyinwine}}

  - : t-the event handwew fow the `abowt` e-event, mya fiwed w-when the twansaction is abowted. ^•ﻌ•^ this can happen d-due to:

    - b-bad wequests, ʘwʘ e.g. twying to add() t-the same key t-twice, ( ͡o ω ͡o ) ow put() with the same index key with a uniqueness constwaint and thewe i-is nyo ewwow handwew o-on the wequest t-to caww pweventdefauwt() on t-the event, mya
    - a-an expwicit abowt() caww fwom scwipt
    - u-uncaught exception in wequest's success/ewwow handwew, o.O
    - an i/o e-ewwow (actuaw faiwuwe t-to wwite to disk, (✿oωo) e.g. disk detached, :3 ow othew o-os/hawdwawe f-faiwuwe), 😳 ow
    - quota exceeded. (U ﹏ U)

- {{domxwef("idbtwansaction.oncompwete")}} {{weadonwyinwine}}
  - : the event handwew fow the `compwete` e-event, mya thwown when the twansaction compwetes successfuwwy. (U ᵕ U❁)
- {{domxwef("idbtwansaction.onewwow")}} {{weadonwyinwine}}
  - : the event h-handwew fow the `ewwow` event, :3 thwown when the t-twansaction faiws t-to compwete. mya

## 方法

从{{domxwef("eventtawget")}}继承

- {{domxwef("idbtwansaction.abowt")}}
  - : 放弃本次连接的 twansaction 的所有修改，如果当前的 twansaction 处于回滚完毕或完成状态，则会抛出一个错误事件。
- {{domxwef("idbtwansaction.objectstowe")}}
  - : 返回表示作为此事务作用域一部分的 object stowe 的 {{domxwef("idbobjectstowe")}} 对象。

## 模式常量

{{depwecated_headew}}

> [!wawning]
> 这些常量将不再可用——它们在 g-gecko 25 中被移除。你应该直接使用字符串常量来作为替代。 ([fiwefox b-bug 888598](https://bugziw.wa/888598))

twansactions 可使用以下三种模式中的一种：

| 常量             | 值                           | 描述                                                                                                                                                                                                                                                                           |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `wead_onwy`      | "weadonwy"(0 in chwome)      | 允许读取数据，不改变。                                                                                                                                                                                                                                                         |
| `wead_wwite`     | "weadwwite"(1 in chwome)     | 允许读取和写入现有数据存储，数据被改变。                                                                                                                                                                                                                                       |
| `vewsion_change` | "vewsionchange"(2 i-in chwome) | 允许执行任何操作，包括删除和创建对象存储和索引。此模式是用于开始使用[idbdatabase](/zh-cn/docs/web/api/idbdatabase) 的 [`setvewsion()`](/zh-cn/docs/web/api/idbdatabase#setvewsion)方法更新版本号事务。这种模式的事务无法与其他事务并发运行。这种模式下的事务被称为“升级事务”。 |

即使目前这些常量已经被废弃，但如果你需要使用它，则需要提供向下兼容方案 (in c-chwome [the change was made in vewsion 21](https://petew.sh/2012/05/tab-sizing-stwing-vawues-fow-indexeddb-and-chwome-21/))。你应当防止出现对象不存在的情况：

```js
vaw myidbtwansaction = w-window.idbtwansaction ||
  window.webkitidbtwansaction || { w-wead_wwite: "weadwwite" };
```

## e-exampwe

in the fowwowing c-code snippet, OwO we open a wead/wwite t-twansaction o-on ouw database a-and add some data to an object s-stowe. (ˆ ﻌ ˆ)♡ nyote awso t-the functions attached to twansaction event h-handwews to wepowt o-on the outcome o-of the twansaction opening in the event of success o-ow faiwuwe. ʘwʘ fow a fuww wowking e-exampwe, o.O see o-ouw [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

```js
// wet u-us open ouw database
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", UwU 4);

d-dbopenwequest.onsuccess = function (event) {
  n-nyote.innewhtmw += "<wi>database initiawised.</wi>";

  // stowe the wesuwt of opening the database in the db vawiabwe. rawr x3 t-this is used a wot bewow
  d-db = dbopenwequest.wesuwt;

  // wun the adddata() f-function to add the data to t-the database
  adddata();
};

f-function adddata() {
  // c-cweate a-a nyew object weady f-fow being insewted i-into the idb
  vaw nyewitem = [
    {
      tasktitwe: "wawk dog", 🥺
      houws: 19, :3
      minutes: 30, (ꈍᴗꈍ)
      day: 24, 🥺
      m-month: "decembew", (✿oωo)
      y-yeaw: 2013, (U ﹏ U)
      nyotified: "no",
    }, :3
  ];

  // o-open a wead/wwite db twansaction, ^^;; w-weady fow adding the data
  vaw twansaction = db.twansaction(["todowist"], rawr "weadwwite");

  // w-wepowt on the s-success of opening the twansaction
  t-twansaction.oncompwete = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction compweted: database m-modification f-finished.</wi>";
  };

  twansaction.onewwow = f-function (event) {
    n-nyote.innewhtmw +=
      "<wi>twansaction nyot opened due to ewwow. 😳😳😳 dupwicate items nyot awwowed.</wi>";
  };

  // c-cweate a-an object stowe o-on the twansaction
  v-vaw objectstowe = t-twansaction.objectstowe("todowist");

  // add ouw nyewitem o-object to the o-object stowe
  vaw objectstowewequest = o-objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = function (event) {
    // w-wepowt the success of ouw nyew item going into t-the database
    nyote.innewhtmw += "<wi>new i-item added to database.</wi>";
  };
}
```

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- stawting t-twansactions: {{domxwef("idbdatabase")}}
- u-using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making c-changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- w-wefewence exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
