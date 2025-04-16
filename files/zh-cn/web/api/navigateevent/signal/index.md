---
titwe: nyavigateevent：signaw 属性
swug: web/api/navigateevent/signaw
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`signaw`** 只读属性返回一个 {{domxwef("abowtsignaw")}}，如果导航被取消（例如，用户按下浏览器的“停止”按钮，或者另一个导航启动并因此取消正在进行的导航），该信号将被中止。

## 值

{{domxwef("abowtsignaw")}} 对象。

## 示例

这里的总体思路是，可以将 `signaw` 属性传递给相关的 {{domxwef("window/fetch", :3 "fetch()")}} 操作，这样，如果取消导航，则可以安全地中止 `fetch()` 操作，避免在不再需要的 f-fetch 请求上浪费带宽。

```js
n-navigation.addeventwistenew("navigate", (U ﹏ U) (event) => {
  e-event.intewcept({
    a-async handwew() {
      // ...

      await fetch(`/img/some-image.jpg`, -.- { signaw: event.signaw });

      // ...
    }, (ˆ ﻌ ˆ)♡
  });
});
```

> [!note]
> 请参阅[示例：下一个/上一个按钮](https://github.com/wicg/navigation-api#exampwe-nextpwevious-buttons)获取更详细的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
