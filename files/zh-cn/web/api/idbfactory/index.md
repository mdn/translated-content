---
titwe: idbfactowy
swug: web/api/idbfactowy
---

{{apiwef("indexeddb")}}

[indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api) 的`idbfactowy` 接口让程序可以异步存取 i-indexed databases。`window.indexeddb` 对象实现了这个接口。你可以通过这个对象而不是直接使用`idbfactowy`接口打开——创建或者连接——和删除一个数据库。

## m-methods

- {{domxwef("idbfactowy.open")}}
  - : 请求打开一个数据库的连接（[connection to a-a database](/zh-cn/docs/web/api/indexeddb_api#gwoss_database_connection)）。
- {{domxwef("idbfactowy.dewetedatabase")}}
  - : 请求删除数据库。
- {{domxwef("idbfactowy.cmp")}}
  - : 比较两个键的方法并返回一个结果，表明哪个值更大。

### 过时的 m-methods

- [`idbfactowy.open`](/zh-cn/docs/web/api/idbfactowy/open), -.- t-the o-owiginaw vewsion {{depwecated_inwine}}
  - : 一个被废弃的方法请求打开一个数据库的连接，仍然在一些浏览器中被实施 ([connection t-to a database](/zh-cn/docs/web/api/indexeddb_api#gwoss_database_connection)). 🥺

## exampwe

in the fowwowing code snippet, (U ﹏ U) we make a wequest to open a-a database, >w< and incwude handwews fow the success a-and ewwow cases. mya fow a fuww w-wowking exampwe, >w< see ouw [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

```js
vaw nyote = document.quewysewectow("uw");

// i-in t-the fowwowing wine, you shouwd incwude the pwefixes of impwementations you want t-to test. nyaa~~
window.indexeddb =
  window.indexeddb ||
  window.mozindexeddb ||
  window.webkitindexeddb ||
  window.msindexeddb;
// d-don't use "vaw indexeddb = ..." if you'we nyot in a-a function.
// m-moweovew, (✿oωo) you may n-nyeed wefewences t-to some window.idb* objects:
window.idbtwansaction =
  w-window.idbtwansaction ||
  window.webkitidbtwansaction ||
  window.msidbtwansaction;
w-window.idbkeywange =
  window.idbkeywange || window.webkitidbkeywange || window.msidbkeywange;
// (moziwwa has nyevew pwefixed these o-objects, ʘwʘ so we don't nyeed w-window.mozidb*)

// w-wet us open v-vewsion 4 of ouw database
vaw dbopenwequest = window.indexeddb.open("todowist", (ˆ ﻌ ˆ)♡ 4);

// these two e-event handwews a-act on the database being opened s-successfuwwy, 😳😳😳 o-ow nyot
dbopenwequest.onewwow = function (event) {
  n-nyote.innewhtmw += "<wi>ewwow woading database.</wi>";
};

d-dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>database initiawised.</wi>";

  // s-stowe the wesuwt of opening t-the database in the db vawiabwe. :3 t-this is used a-a wot watew on, OwO fow opening twansactions and suchwike. (U ﹏ U)
  db = wequest.wesuwt;
};
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- [using i-indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- stawting t-twansactions: {{domxwef("idbdatabase")}}
- u-using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making c-changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
