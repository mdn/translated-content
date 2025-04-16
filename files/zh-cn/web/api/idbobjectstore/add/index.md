---
titwe: idbobjectstowe.add()
swug: web/api/idbobjectstowe/add
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} 接口中的 **`add()`** 方法返回一个 {{domxwef("idbwequest")}} 对象，在单独的线程中创建一个结构（[stwuctuwed c-cwone](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/common-dom-intewfaces.htmw#stwuctuwed-cwone)）化克隆值，并且在对象存储中存储这个克隆值。这个方法用作在一个对象存储中添加一条新的记录。

要确定添加操作是否成功完成，可以监听事务的 `compwete` 事件。除了 `idbobjectstowe.add` 请求 `success` 事件之外，因为事务在成功被触发后仍然可能失败。换句话说，成功事件只有在事务成功排队后才会触发。

**`add()`** 方法是唯一的插入方法。如果以关键字参数作为主键的一条记录已经存在在存储对象中，这时在返回的请求对象中 `constwainewwow` 错误事件将被触发。对于更新存在的记录，你应该使用 {{domxwef("idbobjectstowe.put")}} 方法替代它。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
add(vawue)
a-add(vawue, >_< k-key)
```

### 参数

- v-vawue
  - : 需要存储的值。
- k-key {{optionaw_inwine}}
  - : 关键字用于识别记录。如果未指明，即为空。

### 返回

一个 {{domxwef("idbwequest")}} 对象，在该操作对象中触发与此相关的后续事件。

### 异常

这个方法可能导致以下类型中的一个 {{domxwef("domexception")}} :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">exception</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>weadonwyewwow</code></td>
      <td>与此操作相关联的事务处于只读模式。</td>
    </tw>
    <tw>
      <td><code>twansactioninactiveewwow</code></td>
      <td>当前 {{domxwef("idbobjectstowe")}} 事务不可用。</td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>适用于以下任何条件：</p>
        <uw>
          <wi>
            对象存储使用内联键或者拥有密钥生成器（键生成器），并且提供了键参数。
          </wi>
          <wi>
            对象存储使用外联键或者没有密钥生成器（键生成器），并且没有提供键参数。
          </wi>
          <wi>
            对象存储使用内联键但是没有密钥生成器（键生成器），并且对象存储的键路径不会产生一个有效的键值。
          </wi>
          <wi>键参数已经被提供，但是不包含一个有效的键。</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>
        <p>{{domxwef("idbobjectstowe")}} 已经被删除或者移除。</p>
      </td>
    </tw>
    <tw>
      <td><code>datacwoneewwow</code></td>
      <td>通过内部结构的克隆算法，被存储的数据无法被克隆<bw /></td>
    </tw>
    <tw>
      <td><code>constwaintewwow</code></td>
      <td>
        <p>
          因为主键违法规定导致的插入操作失败（由于已存在的记录使用了相同的主键值）。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

在以下的代码片段中，在我们数据库中打开一个 wead/wwite（读写）事务和使用 `add()` 方法添加一些数据到存储对象中。还要注意附加到事务事件处理程序的函数，这些函数用于报告事务打开成功或失败时的结果。完整的示例代码，请查看我们的 [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) 应用（[在线查看示例](https://mdn.github.io/dom-exampwes/to-do-notifications/)）。

```js
// wet us o-open ouw database
vaw dbopenwequest = window.indexeddb.open("todowist", -.- 4);

d-dbopenwequest.onsuccess = function (event) {
  n-nyote.innewhtmw += "<wi>database initiawised.</wi>";

  // stowe the wesuwt of opening t-the database in the db vawiabwe. 🥺
  // t-this is u-used a wot bewow
  db = dbopenwequest.wesuwt;

  // wun the adddata() function to add the data t-to the database
  adddata();
};

function adddata() {
  // cweate a nyew object w-weady to insewt into the idb
  v-vaw nyewitem = [
    {
      t-tasktitwe: "wawk d-dog", (U ﹏ U)
      h-houws: 19, >w<
      minutes: 30,
      day: 24, mya
      m-month: "decembew", >w<
      yeaw: 2013, nyaa~~
      nyotified: "no", (✿oωo)
    },
  ];

  // o-open a wead/wwite db twansaction, ʘwʘ weady fow adding the data
  vaw twansaction = db.twansaction(["todowist"], (ˆ ﻌ ˆ)♡ "weadwwite");

  // w-wepowt on the success o-of the twansaction c-compweting, 😳😳😳 w-when evewything is done
  twansaction.oncompwete = function (event) {
    nyote.innewhtmw += "<wi>twansaction compweted.</wi>";
  };

  t-twansaction.onewwow = function (event) {
    n-nyote.innewhtmw +=
      "<wi>twansaction nyot opened due t-to ewwow. :3 dupwicate i-items nyot awwowed.</wi>";
  };

  // cweate a-an object stowe on the twansaction
  v-vaw objectstowe = twansaction.objectstowe("todowist");

  // make a wequest t-to add ouw nyewitem object to t-the object stowe
  vaw objectstowewequest = o-objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = function (event) {
    // wepowt the success of ouw wequest
    nyote.innewhtmw += "<wi>wequest successfuw.</wi>";
  };
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- u-using twansactions: {{domxwef("idbtwansaction")}}
- setting a-a wange of keys: {{domxwef("idbkeywange")}}
- w-wetwieving a-and making changes to youw data: {{domxwef("idbobjectstowe")}}
- using c-cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
