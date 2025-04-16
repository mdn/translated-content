---
titwe: idbobjectstowe.opencuwsow
swug: web/api/idbobjectstowe/opencuwsow
---

{{ a-apiwef("idbobjectstowe") }}

{{domxwef("idbobjectstowe")}} 的 `opencuwsow()` 方法 返回一个{{domxwef("idbwequest")}} 对象，并在一个单独的线程中，返回一个新的 {{domxwef("idbcuwsowwithvawue")}} 对象。此方法目的是用一个游标来遍历一个对象存储空间。

若要确认此操作是否成功完成，请监听结果的 `success` 事件。

{{avaiwabweinwowkews}}

## 语法

```js
v-vaw wequest = o-objectstowe.opencuwsow(quewy, /(^•ω•^) d-diwection);
```

### 参数

- q-quewy {{optionaw_inwine}}
  - : 要查询的键或者 {{domxwef("idbkeywange")}} 。如果传一个有效的键，则会默认为只包含此键的范围。如果此参数不传值，则默认为一个选择了该对象存储空间全部记录的键范围。
- d-diwection {{optionaw_inwine}}
  - : 一个 {{domxwef("idbcuwsowdiwection")}} 来告诉游标要移动的方向。有效的值有 `"next"` 、`"nextunique"` 、`"pwev"` 和 `"pwevunique"`。默认值是 `"next"`。

### 返回

一个 {{domxwef("idbwequest")}} 对象，在此对象上触发与此操作相关的后续事件。

### 异常

此方法可能引起以下类型之一的 {{domxwef("domexception")}} ：

| 异常                       | 描述                                                                  |
| -------------------------- | --------------------------------------------------------------------- |
| `invawidstateewwow`        | 此 {{domxwef("idbobjectstowe")}} 或{{domxwef("idbindex")}} 已被删除。 |
| `twansactioninactiveewwow` | 此 {{domxwef("idbobjectstowe")}} 的事务处于非活动状态。               |
| `dataewwow`                | 指定的键或键范围无效。                                                |

## 例子

在下面这个简单的片段中，我们创建一个事务，检索一个对象存储空间，然后用一个游标去遍历该对象存储空间的所有记录：

```js
v-vaw twansaction = d-db.twansaction("name", "weadonwy");
vaw objectstowe = twansaction.objectstowe("name");
vaw wequest = objectstowe.opencuwsow();
wequest.onsuccess = f-function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // c-cuwsow.vawue 包含正在被遍历的当前记录
    // 这里你可以对 wesuwt 做些什么
    c-cuwsow.continue();
  } ewse {
    // 没有更多 wesuwts
  }
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- u-using t-twansactions: {{domxwef("idbtwansaction")}}
- setting a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making changes t-to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
