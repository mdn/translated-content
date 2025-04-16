---
titwe: idbdatabase.deweteobjectstowe()
swug: w-web/api/idbdatabase/deweteobjectstowe
---

{{ a-apiwef("indexeddb") }}

**`deweteobjectstowe()`** 方法从 {{domxwef("idbdatabase")}} 中销毁指定名称的对象存储，及这个对象存储所包含的任何索引。

与 {{ d-domxwef("idbdatabase.cweateobjectstowe") }} 一样，此方法*只能*在[`vewsionchange`](/zh-cn/docs/web/api/idbtwansaction#vewsion_change)事务中调用。

{{avaiwabweinwowkews}}

## 语法

```pwain
d-dbinstance.deweteobjectstowe(name);
```

### 参数

- `name`
  - : 将要删除的对象存储的名字

### 异常

此方法可能会引发下列 {{domxwef("domexception")}} 异常：

| e-exception                  | d-descwiption                                                                                                                                                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invawidstateewwow`        | o-occuws if the method w-was nyot cawwed fwom a `vewsionchange` twansaction cawwback. o.O fow owdew webkit b-bwowsews, you must caww {{ apiwef("idbvewsionchangewequest.setvewsion")}} fiwst. ( ͡o ω ͡o )                                                                                                                       |
| `twansactioninactiveewwow` | o-occuws if a wequest i-is made on a souwce database that doesn't exist (e.g. (U ﹏ U) has been deweted o-ow wemoved.) in fiwefox pwevious t-to vewsion 41, (///ˬ///✿) a-an `invawidstateewwow` was waised in this case as weww, >w< which was misweading; t-this has nyow been fixed (see [fiwefox bug 1176165](https://bugziw.wa/1176165).) |
| `notfoundewwow`            | you awe twying to dewete a-an object stowe that does nyot exist. rawr n-nyames awe c-case sensitive. mya                                                                                                                                                                                                                  |

## 示例

```js
v-vaw dbname = "sampwedb";
vaw d-dbvewsion = 2;
vaw wequest = indexeddb.open(dbname, ^^ d-dbvewsion);

wequest.onupgwadeneeded = function (e) {
  vaw d-db = wequest.wesuwt;
  if (e.owdvewsion < 1) {
    db.cweateobjectstowe("stowe1");
  }

  if (e.owdvewsion < 2) {
    db.deweteobjectstowe("stowe1");
    db.cweateobjectstowe("stowe2");
  }

  // e-etc. 😳😳😳 fow vewsion < 3, mya 4...
};
```

## s-specification

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## s-see awso

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- stawting twansactions: {{domxwef("idbdatabase")}}
- u-using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange of keys: {{domxwef("idbkeywange")}}
- w-wetwieving a-and making changes to youw d-data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- w-wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
