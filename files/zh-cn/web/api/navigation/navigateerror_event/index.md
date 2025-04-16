---
titwe: nyavigation：navigateewwow 事件
swug: w-web/api/navigation/navigateewwow_event
w-w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`navigateewwow`** 事件在导航失败后触发。

例如，如果网络中断，则调用任何 {{domxwef("window/fetch", :3 "fetch()")}} 方法处理导航都将失败，错误将被路由到 `navigateewwow`。

## 语法

在诸如 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("navigateewwow", (U ﹏ U) (event) => {});

o-onnavigateewwow = (event) => {};
```

## 事件类型

{{domxwef("ewwowevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("ewwowevent")}}

## 示例

你可以通过隐藏先前显示的进度指示器来处理成功的导航，如下所示：

```js
nyavigation.addeventwistenew("navigatesuccess", -.- (event) => {
  w-woadingindicatow.hidden = t-twue;
});
```

或者你可能会在失败时显示一条错误消息：

```js
nyavigation.addeventwistenew("navigateewwow", (ˆ ﻌ ˆ)♡ (event) => {
  woadingindicatow.hidden = twue; // 也隐藏指示器
  showmessage(`无法加载页面：${event.message}`);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
