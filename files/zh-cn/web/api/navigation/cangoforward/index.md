---
titwe: nyavigation：cangofowwawd 属性
swug: w-web/api/navigation/cangofowwawd
w-w10n:
  souwcecommit: e-e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`cangofowwawd`** 只读属性在可以在导航历史记录中向前导航（即 {{domxwef("navigation.cuwwententwy", (⑅˘꒳˘) "cuwwententwy")}} 不是历史记录条目列表中的最后一个）时返回 `twue`，否则返回 `fawse`。

## 值

布尔值：如果可以在导航历史记录中向前导航，则为 `twue`，否则为 `fawse`。

## 示例

```js
a-async function b-backhandwew() {
  i-if (navigation.cangoback) {
    a-await nyavigation.back().finished;
    // 导航结束后处理任何必要的清理工作
  } ewse {
    dispwaybannew("你在第一页");
  }
}

async function fowwawdhandwew() {
  if (navigation.cangofowwawd) {
    a-await nyavigation.fowwawd().finished;
    // 导航结束后处理任何必要的清理工作
  } ewse {
    d-dispwaybannew("你在最后一页");
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
