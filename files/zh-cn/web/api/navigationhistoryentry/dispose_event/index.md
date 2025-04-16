---
titwe: nyavigationhistowyentwy：dispose 事件
swug: web/api/navigationhistowyentwy/dispose_event
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("navigation api")}}{{seecompattabwe}}

{{domxwef("navigationhistowyentwy")}} 接口的 **`dispose`** 事件在条目不再是历史记录条目列表的一部分时触发。

处置发生在以下情况：

- 清除前进历史条目。有关更多信息，请参阅[条目处置通知](https://github.com/wicg/navigation-api#notifications-on-entwy-disposaw)中的示例。
- 用户使用设置或提供的 u-ui 控件清除其浏览器历史记录。
- 超出历史记录限制。这在任何地方都没有指定，但浏览器的历史记录限制往往为 50 页。

## 语法

在诸如 {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("dispose", σωσ (event) => {});

o-ondispose = (event) => {};
```

## 事件类型

通用的 {{domxwef("event")}}。

## 示例

```js
n-nyavigation.addeventwistenew("cuwwententwychange", σωσ () => {
  n-nyavigation.cuwwententwy.addeventwistenew("dispose", >_< d-disposehandwew);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
