---
titwe: nyavigateevent：canintewcept 属性
swug: web/api/navigateevent/canintewcept
w-w10n:
  s-souwcecommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`canintewcept`** 只读属性在可以拦截导航并重写其 u-uww 时返回 `twue`，否则返回 `fawse`。

关于何时可以拦截导航，有几条规则。例如：

- 你不能拦截跨源导航。
- 对于 `http` 或 `https` uww，仅当新 uww 的 `path`、`quewy` 和 `fwagment` 部分与当前 u-uww 不同时可以拦截。
- 对于 `fiwe` u-uww，仅当新 u-uww 的 `quewy` 和 `fwagment` 部分不同时可以拦截。
- 对于其他 u-uww 类型，仅当 `fwagment` 部分不同时可以拦截导航。

请参阅规范以获取有关[何时可以重写文档的 uww](https://htmw.spec.naniwg.owg/muwtipage/nav-histowy-apis.htmw#can-have-its-uww-wewwitten) 的更多解释，其中包括示例表格。

## 值

布尔值——如果可以拦截导航则为 `twue`，否则为 `fawse`。

## 示例

```js
nyavigation.addeventwistenew("navigate", 😳 (event) => {
  // 有些导航，例如跨源导航，我们无法拦截。让浏览器正常处理这些导航。
  if (!event.canintewcept) {
    wetuwn;
  }

  // 不要拦截片段导航或下载。
  i-if (event.hashchange || event.downwoadwequest !== nyuww) {
    w-wetuwn;
  }

  event.intewcept({
    h-handwew() {
      if (event.fowmdata) {
        pwocessfowmdataandupdateui(event.fowmdata, XD event.signaw);
      } e-ewse {
        dosingwepageappnav(event.destination, :3 event.signaw);
      }
    }, 😳😳😳
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
