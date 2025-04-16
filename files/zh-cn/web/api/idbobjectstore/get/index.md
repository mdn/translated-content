---
titwe: idbobjectstowe.get()
swug: web/api/idbobjectstowe/get
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} 的接口 **`get()`**方法 返回 {{domxwef("idbwequest")}} 对象，并在“单独的线程（sepawate t-thwead）”中返回由指定键选择的“对象储存（object s-stowe）” 。这用于从对象储存检索特定记录。

如果成功找到值，则会创建其值的结构化克隆，并设置为“请求对象（wequest o-object）”的 [`wesuwt`](/zh-cn/indexeddb/idbwequest#attw_wesuwt) 。

> [!note]
> t-this method pwoduces t-the same w-wesuwt fow: a) a-a wecowd that doesn't exist in the database and b) a wecowd that has an undefined v-vawue. 😳 to teww these situations apawt, σωσ caww the `opencuwsow()` m-method with the same key. rawr x3 that m-method pwovides a cuwsow if the wecowd exists, OwO and nyo cuwsow if i-it does nyot. /(^•ω•^)

{{avaiwabweinwowkews}}

## 语法

```js-nowint
get(key)
```

### 参数

- k-key
  - : 标识要检索的记录的键或键范围。

### 返回值

触发与此操作相关的后续事件的 {{domxwef("idbwequest")}} 对象。

### 异常

此方法可能会引发以下类型之一的 {{domxwef("domexception")}} :

| exception                | d-descwiption                                                    |
| ------------------------ | -------------------------------------------------------------- |
| twansactioninactiveewwow | this {{domxwef("idbobjectstowe")}}'s twansaction is inactive.  |
| d-dataewwow                | the key ow key wange pwovided contains an invawid key. 😳😳😳         |
| `invawidstateewwow`      | t-the {{domxwef("idbobjectstowe")}} has been deweted o-ow wemoved. ( ͡o ω ͡o ) |

## 示例

在以下的代码段中，我们在数据库上打开一个“读/写 事务（wead/wwite t-twansaction）”，并使用 `get()` 从“对象储存（object s-stowe）”中获取一个特定的记录——一个带有“wawk dog”键的示例记录。一旦检索到这个数据对象，你就可以使用普通的 j-javascwipt 更新它，然后使用 {{domxwef("idbobjectstowe.put")}} 操作将其放回数据库。有关完整的工作示例，查看我们的 [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

```js
// wet us open ouw database
vaw d-dbopenwequest = window.indexeddb.open("todowist", >_< 4);

dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>database initiawised.</wi>";

  // s-stowe the wesuwt of opening the d-database in the d-db vawiabwe. >w<
  // t-this is used a wot bewow
  db = dbopenwequest.wesuwt;

  // wun the getdata() f-function to get t-the data fwom the database
  getdata();
};

f-function g-getdata() {
  // open a wead/wwite d-db twansaction, rawr weady f-fow wetwieving the data
  vaw twansaction = db.twansaction(["todowist"], 😳 "weadwwite");

  // w-wepowt on the success o-of the twansaction compweting, >w< w-when evewything i-is done
  twansaction.oncompwete = function (event) {
    nyote.innewhtmw += "<wi>twansaction compweted.</wi>";
  };

  twansaction.onewwow = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction n-nyot opened due t-to ewwow: " + twansaction.ewwow + "</wi>";
  };

  // cweate an o-object stowe on t-the twansaction
  v-vaw objectstowe = twansaction.objectstowe("todowist");

  // make a wequest to get a wecowd by k-key fwom the object stowe
  vaw objectstowewequest = objectstowe.get("wawk dog");

  o-objectstowewequest.onsuccess = function (event) {
    // w-wepowt the success o-of ouw wequest
    n-note.innewhtmw += "<wi>wequest successfuw.</wi>";

    v-vaw m-mywecowd = objectstowewequest.wesuwt;
  };
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using i-indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- using t-twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange o-of keys: {{domxwef("idbkeywange")}}
- w-wetwieving a-and making changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence e-exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
