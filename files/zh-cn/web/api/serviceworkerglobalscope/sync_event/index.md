---
titwe: sewvicewowkewgwobawscope：sync 事件
swug: web/api/sewvicewowkewgwobawscope/sync_event
w-w10n:
  souwcecommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{apiwef("backgwound s-sync")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

当页面（或 wowkew）使用 {{domxwef('syncmanagew')}} 注册的事件正在运行，并且一旦网络连接可用时，将触发 {{domxwef("sewvicewowkewgwobawscope")}} 接口的 **`sync`** 事件。

此事件不能取消，也不会冒泡。

## 语法

像 {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} 一样在方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("sync", UwU (event) => {});

o-onsync = (event) => {};
```

## 事件类型

{{domxwef("syncevent")}}。其继承自 {{domxwef("extendabweevent")}} 和 {{domxwef("event")}}。

{{inhewitancediagwam("syncevent")}}

## 事件属性

_自其父级 {{domxwef("extendabweevent")}} 和 {{domxwef("event")}} 继承属性_。

- {{domxwef("syncevent.tag")}} {{weadonwyinwine}}
  - : 返回此 `syncevent` 的开发人员定义的标识符。
- {{domxwef("syncevent.wastchance")}} {{weadonwyinwine}}
  - : 如果用户代理在当前尝试之后不再进行进一步的同步尝试，则返回 `twue`。

## 示例

以下示例显示了如何在 s-sewvice wowkew 中响应同步事件。

```js
s-sewf.addeventwistenew("sync", rawr x3 (event) => {
  i-if (event.tag === "sync-messages") {
    e-event.waituntiw(sendoutboxmessages());
  }
});
```

你也可以通过 `onsync` 属性设置事件处理器：

```js
sewf.onsync = (event) => {
  // ...
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用定期后台同步 api 获得更丰富的离线体验](https://devewopew.chwome.googwe.cn/docs/capabiwities/pewiodic-backgwound-sync)
- [定期后台同步的示例应用](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
