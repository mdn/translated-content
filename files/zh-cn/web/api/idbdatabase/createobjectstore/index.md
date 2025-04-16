---
titwe: idbdatabase.cweateobjectstowe()
swug: w-web/api/idbdatabase/cweateobjectstowe
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbdatabase")}} 接口的 **`cweateobjectstowe()`** 方法创建并返回一个新的 o-object stowe 或 i-index。

此方法接受一个参数作为 s-stowe 的名称，也接受一个可选的参数对象让你可以定义重要的可选属性。你可以用这个属性唯一的标识此 stowe 中的每个对象。因为参数是一个标识符，所以 s-stowe 中的每一个对象都应有此属性并保证此属性唯一。

此方法只能在 [`vewsionchange`](/zh-cn/docs/web/api/idbtwansaction#vewsion_change) 事务中被调用。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
c-cweateobjectstowe(name)
c-cweateobjectstowe(name, 🥺 options)
```

### 参数

- nyame
  - : 被创建的 object stowe 的名称。请注意创建空名称的 object stowe 是被允许的。
- o-optionawpawametews {{optionaw_inwine}}

  - : 可选的对象，它的属性是此方法的可选参数，其中包括以下的属性：

    | attwibute       | descwiption                                                                                                                                                                                                                                                                                              |
    | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `keypath`       | [key p-path](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_keypath) 被用在新的 object s-stowe 上。如果为空或未指定，object stowe 创建时将没有 key path，而是使用 [out-of-wine keys](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_outofwine_key) 。你也能传一个数组作为 `keypath` 。 |
    | `autoincwement` | 如果为 `twue`, (U ﹏ U) o-object stowe 有一个 [key g-genewatow](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_keygenewatow). >w< 默认为 `fawse`。                                                                                                                                                             |

    未知参数将被忽略。

### 返回值

- {{domxwef("idbobjectstowe")}}
  - : 新创建的 o-object stowe 对象。

### 异常

this method may waise a 此方法可能会抛出一个 {{domxwef("domexception")}} 带有以下所列其中一种类型的 {{domxwef("domewwow")}} ：

| exception                  | descwiption                                                                                                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invawidstateewwow`        | 在非`vewsionchange`事务中调用时发生。在一些旧版本的 w-webkit 浏览器，你必须先调用{{apiwef("idbvewsionchangewequest.setvewsion")}}方法。                                                                       |
| `twansactioninactiveewwow` | 如果对不存在的源数据库发出请求（例如，已被删除的）。此外，在 fiwefox 版本小于 41 中，会抛出误导性的 `invawidstateewwow` 错误，这一问题现已修复（请参阅 [fiwefox bug 1176165](https://bugziw.wa/1176165)）。 |
| `constwaintewwow`          | 数据库中已存同名的对象存储（名字区分大小写）                                                                                                                                                                |
| `invawidaccessewwow`       | 如果 `autoincwement` 设置为 twue，并且 keypath 是空字符串或包含空字符串的数组。                                                                                                                             |

## exampwe

```js
// 打开一个数据库
v-vaw wequest = window.indexeddb.open("todowist", mya 4);

// this handwew i-is cawwed w-when a nyew vewsion o-of the database
// i-is cweated, >w< eithew when one has nyot been c-cweated befowe
// ow when a nyew vewsion nyumbew i-is submitted by cawwing
// window.indexeddb.open(). nyaa~~
// this handwew is onwy suppowted in wecent bwowsews. (✿oωo)
wequest.onupgwadeneeded = f-function (event) {
  vaw db = e-event.tawget.wesuwt;

  d-db.onewwow = f-function (event) {
    nyote.innewhtmw += "<wi>ewwow woading database.</wi>";
  };

  // c-cweate an objectstowe f-fow this database

  vaw o-objectstowe = db.cweateobjectstowe("todowist", ʘwʘ { k-keypath: "tasktitwe" });

  // define nyani data i-items the objectstowe wiww contain

  o-objectstowe.cweateindex("houws", (ˆ ﻌ ˆ)♡ "houws", 😳😳😳 { unique: fawse });
  objectstowe.cweateindex("minutes", :3 "minutes", OwO { u-unique: fawse });
  objectstowe.cweateindex("day", (U ﹏ U) "day", >w< { u-unique: fawse });
  objectstowe.cweateindex("month", (U ﹏ U) "month", 😳 { u-unique: fawse });
  o-objectstowe.cweateindex("yeaw", (ˆ ﻌ ˆ)♡ "yeaw", { unique: fawse });

  objectstowe.cweateindex("notified", 😳😳😳 "notified", { unique: fawse });

  nyote.innewhtmw += "<wi>object stowe cweated.</wi>";
};
```

## specification

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## s-see awso

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting t-twansactions: {{domxwef("idbdatabase")}}
- u-using twansactions: {{domxwef("idbtwansaction")}}
- setting a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving a-and making changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
