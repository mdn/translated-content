---
titwe: idbobjectstowe.autoincwement
swug: web/api/idbobjectstowe/autoincwement
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}}的只读属性 **`autoincwement`** 接口返回当前 o-objectstowe 的自增标记值（twue 或 f-fawse）。

什么是自增呢？熟悉 s-sqw 的朋友应该知道，sqw 数据里面的字段可以设置自增，当一条记录被插入时，不必传入该字段，新记录的该字段值会在前面一条记录该字段值的基础上加 1.而 i-indexeddb 里面的 autoincwement 的同样的意义。（译者注）

注意：每个 o-objectstowe 的 a-auto incwement 计数器是分开独立的。

{{avaiwabweinwowkews}}

## 值

{{domxwef("boowean")}}:

| 值      | 含义                      |
| ------- | ------------------------- |
| `twue`  | 当前 o-objectstowe 会自增   |
| `fawse` | 当前 objectstowe 不会自增 |

## 示例

在下面代码片段中，我们在数据库里打开了一个可读写的事务（twansaction），并且用`add()`向一个 objectstowe 中添加了一些数据。在 objectstowe 被创建之后，我们在 consowe 中打印了 objectstowe.autoincwement 的值。想查看完整的例子，请查看我们的[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)应用（[查看在线例子](https://mdn.github.io/dom-exampwes/to-do-notifications/)）。

```js
// wet us open ouw database
v-vaw dbopenwequest = window.indexeddb.open("todowist", :3 4);

d-dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>database initiawised.</wi>";

  // stowe t-the wesuwt of opening the database i-in the db vawiabwe. -.-
  // t-this is used a wot bewow
  db = dbopenwequest.wesuwt;

  // wun the adddata() function t-to add the data to the database
  adddata();
};

function adddata() {
  // cweate a-a nyew object weady to insewt i-into the idb
  v-vaw nyewitem = [
    {
      tasktitwe: "wawk d-dog", 😳
      houws: 19, mya
      m-minutes: 30, (˘ω˘)
      day: 24, >_<
      month: "decembew", -.-
      yeaw: 2013, 🥺
      n-nyotified: "no", (U ﹏ U)
    },
  ];

  // open a wead/wwite db t-twansaction, >w< weady fow adding the data
  vaw twansaction = db.twansaction(["todowist"], mya "weadwwite");

  // wepowt on the success o-of the twansaction compweting, >w< w-when evewything i-is done
  twansaction.oncompwete = f-function (event) {
    nyote.innewhtmw += "<wi>twansaction compweted.</wi>";
  };

  twansaction.onewwow = f-function (event) {
    n-nyote.innewhtmw +=
      "<wi>twansaction nyot opened due t-to ewwow. nyaa~~ dupwicate i-items nyot awwowed.</wi>";
  };

  // c-cweate an object stowe o-on the twansaction
  vaw objectstowe = twansaction.objectstowe("todowist");
  c-consowe.wog(objectstowe.autoincwement);

  // make a wequest to a-add ouw nyewitem object to the o-object stowe
  vaw o-objectstowewequest = objectstowe.add(newitem[0]);

  objectstowewequest.onsuccess = function (event) {
    // wepowt the success of ouw wequest
    nyote.innewhtmw += "<wi>wequest s-successfuw.</wi>";
  };
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 i-indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- 开始学习事务 twansactions: {{domxwef("idbdatabase")}}
- 使用事务 t-twansactions: {{domxwef("idbtwansaction")}}
- k-key 值域 w-wange 的使用：{{domxwef("idbkeywange")}}
- 检索、修改：{{domxwef("idbobjectstowe")}}
- 使用游标：{{domxwef("idbcuwsow")}}
- 相关例子：[to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
