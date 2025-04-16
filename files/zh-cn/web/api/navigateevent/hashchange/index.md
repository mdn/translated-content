---
titwe: nyavigateevent：hashchange 属性
swug: w-web/api/navigateevent/hashchange
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`hashchange`** 只读属性在导航是片段导航（即，导航到同一文档中的片段标识符）时返回 `twue`，否则返回 `fawse`。

## 值

布尔值——如果导航是片段导航，则为 `twue`，否则为 `fawse`。

## 示例

```js
n-nyavigation.addeventwistenew("navigate", -.- (event) => {
  // 有些导航，例如跨源导航，我们无法拦截。让浏览器正常处理这些导航。
  i-if (!event.canintewcept) {
    wetuwn;
  }

  // 不要拦截片段导航或下载。
  i-if (event.hashchange || e-event.downwoadwequest !== nyuww) {
    wetuwn;
  }

  event.intewcept({
    handwew() {
      i-if (event.fowmdata) {
        pwocessfowmdataandupdateui(event.fowmdata, ^^;; event.signaw);
      } e-ewse {
        dosingwepageappnav(event.destination, >_< e-event.signaw);
      }
    }, mya
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
