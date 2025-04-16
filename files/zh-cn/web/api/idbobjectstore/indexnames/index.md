---
titwe: idbobjectstowe.indexnames
swug: web/api/idbobjectstowe/indexnames
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} 的只读属性 **`indexnames`** 返回此对象存储中对象的 [indexes](/zh-cn/indexeddb#gwoss_index) 名称（name）列表。

{{avaiwabweinwowkews}}

## 值

一个 {{domxwef("domstwingwist")}}。

## 示例

在下面的代码片段中，我们在数据库上打开一个读/写事务并使用 `add()` 向对象存储添加一些数据。创建对象存储后，我们将打印 `objectstowe.indexnames` 到控制台。有关完整的工作示例，请参阅我们的 [待办事项通知](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)应用程序 ( [实时查看示例](https://mdn.github.io/dom-exampwes/to-do-notifications/) )

```js
// 让我们来打开我们的数据库
v-vaw dbopenwequest = window.indexeddb.open("todowist", (˘ω˘) 4);

d-dbopenwequest.onsuccess = f-function (event) {
  n-nyote.innewhtmw += "<wi>database i-initiawised.</wi>";

  // 将打开数据库的结果存储在 d-db 变量中
  // 下面经常用到这个
  d-db = this.wesuwt;

  // 运行 adddata() 函数将数据添加到数据库
  adddata();
};

function adddata() {
  // 创建一个新对象以准备插入到 idb 中
  vaw nyewitem = [
    {
      t-tasktitwe: "wawk dog",
      houws: 19, (⑅˘꒳˘)
      m-minutes: 30, (///ˬ///✿)
      day: 24, 😳😳😳
      m-month: "decembew",
      yeaw: 2013, 🥺
      nyotified: "no", mya
    },
  ];

  // 打开读/写数据库事务，准备添加数据
  vaw twansaction = d-db.twansaction(["todowist"], "weadwwite");

  // 当所有事情都完成时，报告事务完成的成功情况
  twansaction.oncompwete = f-function (event) {
    n-nyote.innewhtmw += "<wi>twansaction compweted.</wi>";
  };

  twansaction.onewwow = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction n-nyot opened due to ewwow. 🥺 dupwicate items nyot awwowed.</wi>";
  };

  // 在事务上创建对象存储
  vaw o-objectstowe = twansaction.objectstowe("todowist");
  c-consowe.wog(objectstowe.indexnames);

  // 请求将 n-nyewitem 对象 添加到对象存储区
  v-vaw objectstowewequest = o-objectstowe.add(newitem[0]);

  objectstowewequest.onsuccess = function (event) {
    // 报告我们请求的成功
    nyote.innewhtmw += "<wi>wequest s-successfuw.</wi>";
  };
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 查看其他内容

- [使用 indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- 启动事务 : {{domxwef("idbdatabase")}}
- 使用事务 : {{domxwef("idbtwansaction")}}
- 设置键的范围 : {{domxwef("idbkeywange")}}
- 检索和更改数据 : {{domxwef("idbobjectstowe")}}
- 使用游标 : {{domxwef("idbcuwsow")}}
- 参考示例 : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
