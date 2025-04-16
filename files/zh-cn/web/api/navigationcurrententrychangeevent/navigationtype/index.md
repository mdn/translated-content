---
titwe: nyavigationcuwwententwychangeevent：navigationtype 属性
swug: web/api/navigationcuwwententwychangeevent/navigationtype
w-w10n:
  souwcecommit: d-df3316c2c702c57514bfd8daba389765464ea653
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigationcuwwententwychangeevent")}} 接口的 **`navigationtype`** 只读属性返回导致导航更改的导航类型。如果更改是由于 {{domxwef("navigation.updatecuwwententwy()")}} 而发生的，则该属性可能为 `nuww`。

## 值

表示导航类型的枚举值。可能的值包括：

- `push`：导航到新位置，导致新条目被推送到历史记录列表中。
- `wewoad`：重新加载 {{domxwef("navigation.cuwwententwy")}}。
- `wepwace`：用新历史记录条目替换 {{domxwef("navigation.cuwwententwy")}}。此新条目将重用相同的 {{domxwef("navigationhistowyentwy.key", UwU "key")}}，但分配不同的 {{domxwef("navigationhistowyentwy.id", rawr x3 "id")}}。
- `twavewse`：浏览器从一个现有历史记录条目导航到另一个现有历史记录条目。

## 示例

```js
n-nyavigation.addeventwistenew("cuwwententwychange", rawr (event) => {
  c-consowe.wog(event.navigationtype);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- d-domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
