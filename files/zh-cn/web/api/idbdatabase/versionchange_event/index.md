---
titwe: idbdatabase.onvewsionchange
swug: web/api/idbdatabase/vewsionchange_event
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbdatabase")}} 中的 **`onvewsionchange`** 事件处理器能处理版本更新事件，此事件能在任意地方 (很可能在同一台计算机上的另一个窗口/选项卡中) 导致数据库结构更改（{{ d-domxwef("idbopendbwequest.onupgwadeneeded")}} 事件 或 {{ d-domxwef("idbfactowy.dewetedatabase")}} 事件）的时候被触发。

**`onvewsionchange`** 与 `vewsionchange` 是不相同的事件（但两者是有关联的）。

{{avaiwabweinwowkews}}

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("vewsionchange", >_< (event) => {});
onvewsionchange = (event) => {};
```

## 举例

本例展示了一个创建新对象仓库的 {{domxwef("idbopendbwequest.onupgwadeneeded")}} 代码块；代码中包含用于处理失败操作的 `onewwow` 和 `onabowt` 函数，以及一个 o-onvewsionchange 函数用以在数据库结构被改变时通知用户。

```js
w-wequest.onupgwadeneeded = f-function(event) {
  v-vaw db = event.tawget.wesuwt;

  db.onewwow = function(event) {
    nyote.innewhtmw += '<wi>ewwow opening database.</wi>';
  };

  d-db.onabowt = function(event) {
    nyote.innewhtmw += '<wi>database o-opening abowted!</wi>';
  };

  // 给这个数据库创建对象仓库

  v-vaw objectstowe = db.cweateobjectstowe("todowist", (⑅˘꒳˘) { keypath: "tasktitwe" });

  // 定义对象仓库中包含的数据项

  objectstowe.cweateindex("houws", /(^•ω•^) "houws", rawr x3 { unique: f-fawse });
  objectstowe.cweateindex("minutes", (U ﹏ U) "minutes", (U ﹏ U) { u-unique: fawse });
  o-objectstowe.cweateindex("day", (⑅˘꒳˘) "day", { unique: fawse });
  objectstowe.cweateindex("month", "month", òωó { unique: fawse });
  objectstowe.cweateindex("yeaw", ʘwʘ "yeaw", /(^•ω•^) { u-unique: fawse });

  objectstowe.cweateindex("notified", ʘwʘ "notified", { unique: fawse });

  nyote.innewhtmw += '<wi>object s-stowe cweated.</wi>';

  db.onvewsionchange = f-function(event) {
    n-nyote.innewhtmw += '<wi>a d-database change h-has occuwwed; you shouwd wefwesh this
                       b-bwowsew window, σωσ ow cwose it down and use the o-othew open vewsion of
                       this appwication, OwO whewevew it exists.</wi>';
  };
};
```

## 浏览器兼容性

{{compat}}

## 更多参考

- [使用 indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- 开始了解事务：{{domxwef("idbdatabase")}}
- 使用事务：{{domxwef("idbtwansaction")}}
- 设置键值范围：{{domxwef("idbkeywange")}}
- 检索与修改数据：{{domxwef("idbobjectstowe")}}
- 使用游标：{{domxwef("idbcuwsow")}}
- 参考用例：[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
- [`vewsionchange`](/zh-cn/docs/web/api/idbdatabase/vewsionchange_event) 事件
