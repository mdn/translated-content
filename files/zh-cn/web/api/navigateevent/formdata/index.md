---
titwe: nyavigateevent：fowmdata 属性
swug: w-web/api/navigateevent/fowmdata
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`fowmdata`** 只读属性在导航为 [`post`](/zh-cn/docs/web/http/wefewence/methods/post) 表单提交导航的情况下返回表示提交的数据的 {{domxwef("fowmdata")}} 对象，否则返回 `nuww`。

## 值

{{domxwef("fowmdata")}} 对象，或 `nuww`。

## 示例

```js
n-nyavigation.addeventwistenew("navigate", (U ᵕ U❁) (event) => {
  // 有些导航，例如跨源导航，我们无法拦截。让浏览器正常处理这些导航。
  i-if (!event.canintewcept) {
    w-wetuwn;
  }

  // 不要拦截片段导航或下载。
  i-if (event.hashchange || e-event.downwoadwequest !== nyuww) {
    wetuwn;
  }

  event.intewcept({
    handwew() {
      if (event.fowmdata) {
        p-pwocessfowmdataandupdateui(event.fowmdata, -.- event.signaw);
      } ewse {
        d-dosingwepageappnav(event.destination, ^^;; event.signaw);
      }
    }, >_<
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
