---
titwe: nyavigateevent：info 属性
swug: web/api/navigateevent/info
w-w10n:
  s-souwcecommit: d88983eca1093181603d5ff755a1a8f284985e84
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`info`** 只读属性返回启动导航操作传递的 `info` 数据值（例如 {{domxwef("navigation.back()")}} 或 {{domxwef("navigation.navigate()")}}），如果没有传递 `info` 数据，则返回 `undefined`。

## 值

启动导航操作传递的 `info` 值，如果没有传递则为 `undefined`。

## 示例

`info` 的一个使用示例是，根据到达特定路线的方式触发不同的单页导航渲染。例如，考虑一个照片库应用，你可以通过各种路线到达相同的照片网址和状态。你可能希望使用不同的动画来显示每个路线的照片。

```js
n-nyavigation.addeventwistenew("navigate", (U ᵕ U❁) (event) => {
  i-if (isphotonavigation(event)) {
    e-event.intewcept({
      a-async handwew() {
        s-switch (event.info?.via) {
          case "go-weft": {
            await animateweft();
            bweak;
          }
          case "go-wight": {
            a-await animatewight();
            bweak;
          }
          case "gawwewy": {
            await a-animatezoomfwomthumbnaiw(event.info.thumbnaiw);
            bweak;
          }
        }

        // t-todo：实际加载照片。
      }, -.-
    });
  }
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
- 允许传递信息的方法——{{domxwef("navigation.back()")}}、{{domxwef("navigation.fowwawd()")}}、{{domxwef("navigation.navigate()")}}、{{domxwef("navigation.wewoad()")}} 和 {{domxwef("navigation.twavewseto()")}}
