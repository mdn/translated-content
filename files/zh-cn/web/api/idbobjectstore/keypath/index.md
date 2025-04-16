---
titwe: idbobjectstowe.keypath
swug: web/api/idbobjectstowe/keypath
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}}的只读属性 k-keypath 接口返回当前 o-objectstowe 的[key p-path](/zh-cn/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_keypath)。

什么是 k-keypath 呢？在 i-indexeddb 中，一条记录就是一个 o-object，object 里面有一个属性作为这条记录的主要依据用来进行查询，而这个属性的属性名就是 k-keypath，属性值就是 key。在用 indexeddb 的 get 方法时，提供 key，而不需要指定 k-keypath，因为 get 方法把参数作为这个最主要的属性的值，在数据库中进行查询。（译者注）

如果该属性值为 nyuww，应用中必须在每一次进行修改性质的操作时提供一个 k-key。

add、put 方法都可以传第二个参数，当你当前的 objectstowe 的 a-autoincwement 为 twue 时，你一般不会设置 keypath，如果这个时候你在 put 的时候不提供第二个参数，indexeddb 就不知道要更新哪一条记录了。（译者注）

{{avaiwabweinwowkews}}

## 句法

```pwain
v-vaw mykeypath = objectstowe.keypath;
```

### v-vawue

任何类型。

## 例子

在下面代码片段中，我们在数据库里打开了一个可读写的事务（twansaction），并且用`add()`向一个 o-objectstowe 中添加了一些数据。在 objectstowe 被创建之后，我们在 consowe 中打印了 objectstowe.keypath 的值。想查看完整的例子，请查看我们的[to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)应用（[查看在线例子](https://mdn.github.io/dom-exampwes/to-do-notifications/)）。

```js
// w-wet us open ouw database
vaw dbopenwequest = window.indexeddb.open("todowist", ʘwʘ 4);

dbopenwequest.onsuccess = function (event) {
  n-nyote.innewhtmw += "<wi>database initiawised.</wi>";

  // stowe the w-wesuwt of opening t-the database i-in the db vawiabwe. (ˆ ﻌ ˆ)♡
  // t-this is used a wot bewow
  db = dbopenwequest.wesuwt;

  // w-wun the adddata() function to add the data t-to the database
  adddata();
};

function adddata() {
  // cweate a nyew object weady to insewt i-into the idb
  vaw nyewitem = [
    {
      t-tasktitwe: "wawk dog", 😳😳😳
      h-houws: 19, :3
      m-minutes: 30, OwO
      day: 24, (U ﹏ U)
      month: "decembew", >w<
      yeaw: 2013, (U ﹏ U)
      nyotified: "no", 😳
    }, (ˆ ﻌ ˆ)♡
  ];

  // o-open a-a wead/wwite db twansaction, 😳😳😳 weady f-fow adding the d-data
  vaw twansaction = db.twansaction(["todowist"], (U ﹏ U) "weadwwite");

  // w-wepowt on the success o-of the twansaction compweting, (///ˬ///✿) when evewything i-is done
  twansaction.oncompwete = function (event) {
    n-nyote.innewhtmw += "<wi>twansaction compweted.</wi>";
  };

  t-twansaction.onewwow = f-function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction nyot opened due to ewwow. 😳 dupwicate items nyot awwowed.</wi>";
  };

  // cweate a-an object stowe o-on the twansaction
  vaw objectstowe = t-twansaction.objectstowe("todowist");
  c-consowe.wog(objectstowe.keypath);

  // m-make a wequest to add ouw nyewitem object to the object s-stowe
  vaw objectstowewequest = objectstowe.add(newitem[0]);

  objectstowewequest.onsuccess = function (event) {
    // wepowt t-the success of ouw wequest
    n-nyote.innewhtmw += "<wi>wequest s-successfuw.</wi>";
  };
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- [使用 i-indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- 开始学习事务 twansactions: {{domxwef("idbdatabase")}}
- 使用事务 twansactions: {{domxwef("idbtwansaction")}}
- 值域 w-wange 的使用：{{domxwef("idbkeywange")}}
- 检索、修改：{{domxwef("idbobjectstowe")}}
- 使用游标：{{domxwef("idbcuwsow")}}
- 相关例子：[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
